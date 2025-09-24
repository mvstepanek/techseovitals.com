export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Get the pathname and handle routing
      let pathname = url.pathname;

      // Serve assets directly with proper routing
      const assetResponse = await env.ASSETS.fetch(request);

      // If asset found, apply appropriate cache headers
      if (assetResponse.status === 200) {
        const contentType = assetResponse.headers.get('content-type') || '';
        const headers = new Headers(assetResponse.headers);

        // Determine cache control based on file type
        if (pathname.endsWith('.html') || pathname.endsWith('/')) {
          // HTML files - 8 hours cache with stale-while-revalidate
          headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=259200');
        } else if (pathname.endsWith('.xml') || pathname.endsWith('.json')) {
          // Dynamic content files - 8 hours with stale-while-revalidate
          headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=259200');
        } else if (pathname === '/robots.txt') {
          // Robots.txt - 8 hours with stale-while-revalidate
          headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=259200');
        } else {
          // Default for other assets - 30 days
          headers.set('Cache-Control', 'public, max-age=2592000');
        }

        return new Response(assetResponse.body, {
          status: assetResponse.status,
          statusText: assetResponse.statusText,
          headers: headers,
        });
      }


      // Try to serve custom 404 page
      try {
        const notFoundRequest = new Request(new URL('/404.html', url.origin), {
          method: 'GET',
          headers: { 'Accept': 'text/html' }
        });
        const notFoundResponse = await env.ASSETS.fetch(notFoundRequest);

        if (notFoundResponse.status === 200) {
          const headers = new Headers(notFoundResponse.headers);
          headers.set('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=259200');

          return new Response(notFoundResponse.body, {
            status: 404,
            statusText: 'Not Found',
            headers: headers,
          });
        }
      } catch (notFoundError) {
        // If 404 page fetch fails, continue to fallback
        console.error('404 page fetch error:', notFoundError.message);
      }

      // Fallback to basic 404 if custom page fails
      return new Response('Not Found', {
        status: 404,
        headers: { 'Content-Type': 'text/plain' }
      });

    } catch (error) {
      return new Response(`Error: ${error.message}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  },
};