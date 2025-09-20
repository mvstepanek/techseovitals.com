import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Handle specific routes with custom mapping
      let assetRequest = request;

      if (url.pathname === '/') {
        // Serve index.html for root
        assetRequest = new Request(url.origin + '/index.html', request);
      } else if (url.pathname.endsWith('/')) {
        // Handle directory paths like /contact/ -> /contact/index.html
        assetRequest = new Request(url.origin + url.pathname + 'index.html', request);
      } else if (!url.pathname.includes('.') && !url.pathname.startsWith('/assets/')) {
        // Handle clean URLs like /contact -> /contact/index.html
        assetRequest = new Request(url.origin + url.pathname + '/index.html', request);
      }

      const response = await getAssetFromKV(
        {
          request: assetRequest,
          waitUntil: ctx.waitUntil.bind(ctx),
        },
        {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        }
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
      // Debug: Return error details in development
      return new Response(`Debug Info:
URL: ${url.pathname}
Error: ${e.message}
Available assets should include index.html, contact/index.html, etc.
Static content namespace: ${env.__STATIC_CONTENT ? 'Available' : 'Missing'}
Manifest: ${env.__STATIC_CONTENT_MANIFEST ? 'Available' : 'Missing'}`, {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
        },
      });
    }
  },
};