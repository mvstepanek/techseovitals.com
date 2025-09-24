export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    try {
      // Get the pathname and handle routing
      let pathname = url.pathname;

      // Serve assets directly with proper routing
      const assetResponse = await env.ASSETS.fetch(request);

      // If asset found, return it
      if (assetResponse.status === 200) {
        return assetResponse;
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