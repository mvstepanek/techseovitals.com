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


      // Return 404 if asset not found
      return new Response('Not Found', { status: 404 });

    } catch (error) {
      return new Response(`Error: ${error.message}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  },
};