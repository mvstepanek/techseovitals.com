import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

export default {
  async fetch(request, env, ctx) {
    return handleEvent(request, env, ctx);
  },
};

async function handleEvent(request, env, ctx) {
  const url = new URL(request.url);

  try {
    // Handle home page
    if (url.pathname === '/') {
      url.pathname = '/index.html';
    }

    // Handle directory paths - serve index.html
    if (url.pathname.endsWith('/') && url.pathname !== '/') {
      url.pathname = url.pathname + 'index.html';
    }

    // Try to serve the asset
    const response = await getAssetFromKV(
      {
        request,
        waitUntil: ctx.waitUntil.bind(ctx),
      },
      {
        ASSET_NAMESPACE: env.__STATIC_CONTENT,
        ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
        mapRequestToAsset: (req) => {
          const modifiedUrl = new URL(req.url);

          // Handle clean URLs - try without .html first
          if (!modifiedUrl.pathname.includes('.') && !modifiedUrl.pathname.endsWith('/')) {
            // First try exact path
            return new Request(modifiedUrl.toString(), req);
          }

          return req;
        },
        cacheControl: {
          browserTTL: url.pathname.endsWith('.html') ? 60 * 60 : 60 * 60 * 24 * 365, // 1 hour for HTML, 1 year for assets
          edgeTTL: 60 * 60 * 24 * 30, // 30 days edge cache
          bypassCache: false,
        },
      }
    );

    // Add security headers
    const headers = new Headers(response.headers);
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-XSS-Protection', '1; mode=block');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');

    // Add CSP header for better security - allow Google Calendar iframe
    headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://calendar.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://calendar.google.com; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'");

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: headers,
    });

  } catch (e) {
    // If not found, try adding .html extension
    if (!url.pathname.endsWith('.html') && !url.pathname.includes('.')) {
      try {
        const htmlUrl = new URL(request.url);
        htmlUrl.pathname = url.pathname + '.html';

        const response = await getAssetFromKV(
          {
            request: new Request(htmlUrl.toString(), request),
            waitUntil: ctx.waitUntil.bind(ctx),
          },
          {
            ASSET_NAMESPACE: env.__STATIC_CONTENT,
            ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
            cacheControl: {
              browserTTL: 60 * 60, // 1 hour for HTML
              edgeTTL: 60 * 60 * 24, // 1 day edge cache
              bypassCache: false,
            },
          }
        );

        // Add security headers
        const headers = new Headers(response.headers);
        headers.set('X-Content-Type-Options', 'nosniff');
        headers.set('X-Frame-Options', 'DENY');
        headers.set('X-XSS-Protection', '1; mode=block');
        headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
        headers.set('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');
        headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://calendar.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://calendar.google.com; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'");

        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: headers,
        });
      } catch (e) {
        // Still not found, try serving index.html from the directory
        try {
          const indexUrl = new URL(request.url);
          indexUrl.pathname = url.pathname.replace('.html', '') + '/index.html';

          const response = await getAssetFromKV(
            {
              request: new Request(indexUrl.toString(), request),
              waitUntil: ctx.waitUntil.bind(ctx),
            },
            {
              ASSET_NAMESPACE: env.__STATIC_CONTENT,
              ASSET_MANIFEST: env.__STATIC_CONTENT_MANIFEST,
              cacheControl: {
                browserTTL: 60 * 60, // 1 hour for HTML
                edgeTTL: 60 * 60 * 24, // 1 day edge cache
                bypassCache: false,
              },
            }
          );

          // Add security headers
          const headers = new Headers(response.headers);
          headers.set('X-Content-Type-Options', 'nosniff');
          headers.set('X-Frame-Options', 'DENY');
          headers.set('X-XSS-Protection', '1; mode=block');
          headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
          headers.set('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');
          headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://calendar.google.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; frame-src https://calendar.google.com; connect-src 'self'; font-src 'self'; base-uri 'self'; form-action 'self'");

          return new Response(response.body, {
            status: response.status,
            statusText: response.statusText,
            headers: headers,
          });
        } catch (e) {
          // Return 404 page
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

    // Return 404 for actual missing assets
    return new Response('404 - Not Found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
      },
    });
  }
}