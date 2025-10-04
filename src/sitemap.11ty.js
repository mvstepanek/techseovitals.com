export const data = {
  permalink: '/sitemap.xml',
  eleventyExcludeFromCollections: true,
};

export default function Sitemap(data) {
  const url = process.env.NODE_ENV === 'development' ? 'https://staging.techseovitals.com' : 'https://www.techseovitals.com';
  const now = new Date().toISOString();

  // Get all pages from collections (automatically includes all pages)
  const allPages = data.collections.all || [];

  // Process all pages dynamically
  const pages = allPages
    .filter((page) => {
      // Exclude feed files, assets, and 404 page
      return (
        !page.url.includes('.xml') &&
        !page.url.includes('.json') &&
        !page.url.includes('.css') &&
        !page.url.includes('.js') &&
        !page.url.includes('/404.html') &&
        page.url !== false
      ); // Exclude pages with permalink: false
    })
    .map((page) => {
      return {
        url: page.url,
        lastmod: page.date ? new Date(page.date).toISOString() : now,
      };
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
  .map(
    (page) => `  <url>
    <loc>${url}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}
