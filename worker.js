import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Try to get the asset with a simpler approach
      const options = {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
      };

      // Only add manifest if it exists
      if (env.__STATIC_CONTENT_MANIFEST) {
        options.ASSET_MANIFEST = env.__STATIC_CONTENT_MANIFEST;
      }

      let assetRequest = request;

      // Handle routing
      if (url.pathname === '/') {
        assetRequest = new Request(url.origin + '/index.html', request);
      } else if (url.pathname.endsWith('/')) {
        assetRequest = new Request(url.origin + url.pathname + 'index.html', request);
      } else if (!url.pathname.includes('.') && !url.pathname.startsWith('/assets/')) {
        // Try /path/index.html first
        assetRequest = new Request(url.origin + url.pathname + '/index.html', request);
      }

      const response = await getAssetFromKV(
        {
          request: assetRequest,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        options
      );

      // Add security headers for HTML files
      if (assetRequest.url.endsWith('.html')) {
        const headers = new Headers(response.headers);
        headers.set('X-Frame-Options', 'SAMEORIGIN');
        headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://calendar.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://calendar.google.com; connect-src 'self'; font-src 'self'");

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: headers,
        });
      }

      return response;

    } catch (e) {
      // If the primary request fails, try fallback approaches
      try {
        // Try direct asset access without custom mapping
        const response = await getAssetFromKV(
          {
            request,
            waitUntil: ctx.waitUntil.bind(ctx),
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
          }
        );
        return response;
      } catch (e2) {
        // Debug info
        return new Response(`Debug Info v2:
Original URL: ${url.pathname}
Original Error: ${e.message}
Fallback Error: ${e2.message}
KV Namespace: ${env.__STATIC_CONTENT ? 'Available' : 'Missing'}
Manifest: ${env.__STATIC_CONTENT_MANIFEST ? 'Available' : 'Missing'}

Trying to access: ${url.pathname === '/' ? '/index.html' : url.pathname}`, {
          status: 404,
          headers: {
            'Content-Type': 'text/plain',
          },
        });
      }
    }
  },
};