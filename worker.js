import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Handle home page explicitly
      if (url.pathname === '/') {
        const indexRequest = new Request(url.origin + '/index.html', request);
        const response = await getAssetFromKV({
          request: indexRequest,
          waitUntil: ctx.waitUntil.bind(ctx),
        }, {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        });

        return addSecurityHeaders(response);
      }

      // Handle directory paths (e.g., /contact/ -> /contact/index.html)
      if (url.pathname.endsWith('/')) {
        const indexRequest = new Request(url.origin + url.pathname + 'index.html', request);
        const response = await getAssetFromKV({
          request: indexRequest,
          waitUntil: ctx.waitUntil.bind(ctx),
        }, {
          ASSET_NAMESPACE: env.__STATIC_CONTENT,
          ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        });

        return addSecurityHeaders(response);
      }

      // Try to serve the exact path first
      const response = await getAssetFromKV({
        request,
        waitUntil: ctx.waitUntil.bind(ctx),
      }, {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        cacheControl: {
          browserTTL: url.pathname.endsWith('.html') ? 3600 : 31536000, // 1 hour for HTML, 1 year for assets
          edgeTTL: 2592000, // 30 days
        },
      });

      return addSecurityHeaders(response);

    } catch (e) {
      // If the exact path fails, try adding /index.html for clean URLs
      if (!url.pathname.includes('.') && !url.pathname.endsWith('/')) {
        try {
          const indexRequest = new Request(url.origin + url.pathname + '/index.html', request);
          const response = await getAssetFromKV({
            request: indexRequest,
            waitUntil: ctx.waitUntil.bind(ctx),
          }, {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
          });

          return addSecurityHeaders(response);
        } catch (e) {
          // Still not found, try with .html extension
          try {
            const htmlRequest = new Request(url.origin + url.pathname + '.html', request);
            const response = await getAssetFromKV({
              request: htmlRequest,
              waitUntil: ctx.waitUntil.bind(ctx),
            }, {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
            });

            return addSecurityHeaders(response);
          } catch (e) {
            // Return 404
            return new Response('404 - Page Not Found', {
              status: 404,
              headers: {
                'Content-Type': 'text/html; charset=UTF-8',
                'Cache-Control': 'no-cache',
              },
            });
          }
        }
      }

      // For actual missing files, return 404
      return new Response('404 - Not Found', {
        status: 404,
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-cache',
        },
      });
    }
  },
};

function addSecurityHeaders(response) {
  const headers = new Headers(response.headers);

  // Security headers
  headers.set('X-Content-Type-Options', 'nosniff');
  headers.set('X-Frame-Options', 'DENY');
  headers.set('X-XSS-Protection', '1; mode=block');
  headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  headers.set('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');

  // CSP header allowing Google Calendar iframe
  headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://calendar.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://calendar.google.com; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: headers,
  });
}