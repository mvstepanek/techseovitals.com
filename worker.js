export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Get the pathname and handle routing
      let pathname = url.pathname;

      // Serve assets directly with proper routing
      const assetResponse = await env.ASSETS.fetch(request);

      // If asset found, return it with security headers if it's HTML
      if (assetResponse.status === 200) {
        const contentType = assetResponse.headers.get('content-type') || '';

        if (contentType.includes('text/html')) {
          const headers = new Headers(assetResponse.headers);
          headers.set('X-Frame-Options', 'SAMEORIGIN');
          headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://f.convertkit.com https://app.kit.com https://analytics.ahrefs.com https://www.googletagmanager.com https://assets.calendly.com https://static.cloudflareinsights.com https://calendar.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://f.convertkit.com https://app.kit.com https://app.convertkit.com https://analytics.ahrefs.com https://www.google-analytics.com; frame-src https://calendly.com https://assets.calendly.com https://calendar.google.com; object-src 'none'; base-uri 'self'; form-action 'self' https://app.kit.com;");

          return new Response(assetResponse.body, {
            status: assetResponse.status,
            statusText: assetResponse.statusText,
            headers: headers,
          });
        }

        return assetResponse;
      }

      // Handle SPA routing - try different paths
      const routes = [
        pathname + '/index.html',
        pathname.endsWith('/') ? pathname + 'index.html' : pathname + '/index.html',
        '/index.html'
      ];

      for (const route of routes) {
        const routeRequest = new Request(new URL(route, url.origin), request);
        const routeResponse = await env.ASSETS.fetch(routeRequest);

        if (routeResponse.status === 200) {
          const headers = new Headers(routeResponse.headers);
          headers.set('X-Frame-Options', 'SAMEORIGIN');
          headers.set('Content-Security-Policy', "default-src 'self'; script-src 'self' 'unsafe-inline' https://f.convertkit.com https://app.kit.com https://analytics.ahrefs.com https://www.googletagmanager.com https://assets.calendly.com https://static.cloudflareinsights.com https://calendar.google.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://f.convertkit.com https://app.kit.com https://app.convertkit.com https://analytics.ahrefs.com https://www.google-analytics.com; frame-src https://calendly.com https://assets.calendly.com https://calendar.google.com; object-src 'none'; base-uri 'self'; form-action 'self' https://app.kit.com;");

          return new Response(routeResponse.body, {
            status: routeResponse.status,
            statusText: routeResponse.statusText,
            headers: headers,
          });
        }
      }

      // Return 404 if no routes match
      return new Response('Not Found', { status: 404 });

    } catch (error) {
      return new Response(`Error: ${error.message}`, {
        status: 500,
        headers: { 'Content-Type': 'text/plain' },
      });
    }
  },
};