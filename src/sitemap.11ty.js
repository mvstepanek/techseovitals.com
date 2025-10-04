export const data = {
  permalink: '/sitemap.xml',
  eleventyExcludeFromCollections: true,
};

export default function Sitemap(data) {
  const url = process.env.NODE_ENV === 'development' ? 'https://staging.techseovitals.com' : 'https://www.techseovitals.com';
  const now = new Date().toISOString();

  // Get all pages from collections (automatically includes all pages)
  const allPages = data.collections.all || [];

  // Define priority and frequency rules based on URL patterns
  const getPriorityAndFreq = (url) => {
    if (url === '/') return { priority: '1.0', changefreq: 'weekly' };
    if (url.includes('/technical-seo-consultant/') || url.includes('/technical-seo-services/')) {
      return { priority: '0.9', changefreq: 'monthly' };
    }
    if (url.includes('/customers/') || url.includes('/contact/')) {
      return { priority: '0.8', changefreq: 'monthly' };
    }
    if (url.includes('/newsletter/') || url === '/blog/') {
      return { priority: '0.8', changefreq: 'weekly' };
    }
    if (url.includes('/blog/') && url !== '/blog/') {
      return { priority: '0.6', changefreq: 'monthly' };
    }
    if (url.includes('checklist') || url.includes('metrics')) {
      return { priority: '0.7', changefreq: 'monthly' };
    }
    if (url.includes('privacy') || url.includes('terms')) {
      return { priority: '0.3', changefreq: 'yearly' };
    }
    // Default for other pages
    return { priority: '0.5', changefreq: 'monthly' };
  };

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
      const { priority, changefreq } = getPriorityAndFreq(page.url);
      return {
        url: page.url,
        lastmod: page.date ? new Date(page.date).toISOString() : now,
        changefreq,
        priority,
      };
    })
    .sort((a, b) => parseFloat(b.priority) - parseFloat(a.priority)); // Sort by priority

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
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}
