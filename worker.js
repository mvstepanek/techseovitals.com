import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler';
import manifestJSON from '__STATIC_CONTENT_MANIFEST';
const assetManifest = JSON.parse(manifestJSON);

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  const url = new URL(event.request.url);
  const options = {};

  try {
    // Add cache control headers for better performance
    options.cacheControl = {
      browserTTL: 60 * 60 * 24 * 365, // 1 year for assets
      edgeTTL: 60 * 60 * 24 * 30, // 30 days edge cache
      bypassCache: false,
    };

    // Handle home page
    if (url.pathname === '/') {
      url.pathname = '/index.html';
      return await getAssetFromKV(event, {
        mapRequestToAsset: (req) => new Request(url.toString(), req),
        cacheControl: {
          browserTTL: 60 * 60, // 1 hour for HTML
          edgeTTL: 60 * 60 * 24, // 1 day edge cache
        },
      });
    }

    // Handle directory paths - serve index.html
    if (url.pathname.endsWith('/')) {
      url.pathname = url.pathname + 'index.html';
      return await getAssetFromKV(event, {
        mapRequestToAsset: (req) => new Request(url.toString(), req),
        cacheControl: {
          browserTTL: 60 * 60, // 1 hour for HTML
          edgeTTL: 60 * 60 * 24, // 1 day edge cache
        },
      });
    }

    // Try to serve the exact path first
    const response = await getAssetFromKV(event, options);

    // Add security headers
    const headers = new Headers(response.headers);
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'DENY');
    headers.set('X-XSS-Protection', '1; mode=block');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    headers.set('Permissions-Policy', 'accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()');

    // Add CSP header for better security
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
        url.pathname = url.pathname + '.html';
        const response = await getAssetFromKV(event, {
          mapRequestToAsset: (req) => new Request(url.toString(), req),
          cacheControl: {
            browserTTL: 60 * 60, // 1 hour for HTML
            edgeTTL: 60 * 60 * 24, // 1 day edge cache
          },
        });

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
          url.pathname = url.pathname.replace('.html', '') + '/index.html';
          const response = await getAssetFromKV(event, {
            mapRequestToAsset: (req) => new Request(url.toString(), req),
            cacheControl: {
              browserTTL: 60 * 60, // 1 hour for HTML
              edgeTTL: 60 * 60 * 24, // 1 day edge cache
            },
          });

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