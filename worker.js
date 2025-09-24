import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);
      const pathname = url.pathname;

      // Try to serve the asset using either ASSETS or KV
      let response;

      if (env.ASSETS) {
        // New Workers with Assets
        response = await env.ASSETS.fetch(request);
      } else if (env.__STATIC_CONTENT) {
        // Legacy Workers Sites
        response = await getAssetFromKV(
          {
            request,
            waitUntil: ctx.waitUntil,
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
          },
        );
      } else {
        // No assets available, return basic 404
        return new Response('404 - Page Not Found', {
          status: 404,
          headers: { 'Content-Type': 'text/plain' }
        });
      }

      // If asset found, apply cache headers
      if (response.status === 200) {
        const headers = new Headers(response.headers);

        // Apply cache headers based on file type
        if (pathname.endsWith('.html') || pathname.endsWith('/')) {
          headers.set('Cache-Control', 'public, max-age=3600');
        } else if (pathname.endsWith('.xml') || pathname.endsWith('.json') || pathname === '/robots.txt') {
          headers.set('Cache-Control', 'public, max-age=3600');
        } else {
          headers.set('Cache-Control', 'public, max-age=2592000');
        }

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: headers,
        });
      }

    } catch (error) {
      // For any error, try to serve 404.html
      try {
        let notFoundResponse;
        const notFoundUrl = new URL('/404.html', request.url).toString();
        const notFoundRequest = new Request(notFoundUrl);

        if (env.ASSETS) {
          notFoundResponse = await env.ASSETS.fetch(notFoundRequest);
        } else if (env.__STATIC_CONTENT) {
          notFoundResponse = await getAssetFromKV(
            {
              request: notFoundRequest,
              waitUntil: ctx.waitUntil,
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
            },
          );
        }

        if (notFoundResponse && notFoundResponse.status === 200) {
          return new Response(notFoundResponse.body, {
            status: 404,
            statusText: 'Not Found',
            headers: {
              'Content-Type': 'text/html',
              'Cache-Control': 'public, max-age=3600'
            }
          });
        }
      } catch (notFoundError) {
        // Ignore 404 fetch errors
      }
    }

    // Basic fallback 404
    return new Response('404 - Page Not Found', {
      status: 404,
      headers: { 'Content-Type': 'text/plain' }
    });
  },
};