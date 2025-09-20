export const data = {
  permalink: '/sitemap.xml',
  eleventyExcludeFromCollections: true,
};

export default function Sitemap() {
  const url = 'https://staging.techseovitals.com';
  const now = new Date().toISOString();

  // Define all pages with their priorities and change frequencies
  const pages = [
    {
      url: '/',
      lastmod: now,
      changefreq: 'weekly',
      priority: '1.0',
    },
    {
      url: '/technical-seo-consultant/',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      url: '/technical-seo-services/',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.9',
    },
    {
      url: '/contact/',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.8',
    },
    {
      url: '/newsletter/',
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: '/blog/',
      lastmod: now,
      changefreq: 'weekly',
      priority: '0.8',
    },
    {
      url: '/technical-seo-checklist/',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: '/website-migration-checklist/',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: '/5-web-performance-metrics-every-business-owner-should-track/',
      lastmod: now,
      changefreq: 'monthly',
      priority: '0.7',
    },
    {
      url: '/privacy-policy/',
      lastmod: now,
      changefreq: 'yearly',
      priority: '0.3',
    },
    {
      url: '/terms-and-conditions/',
      lastmod: now,
      changefreq: 'yearly',
      priority: '0.3',
    },
    // Blog posts
    {
      url: '/blog/improving-crawlability-help-google-and-chatgpt-find-your-business-website/',
      lastmod: '2024-11-15T00:00:00.000Z',
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: '/blog/multilingual-website-essentials-technical-seo-guide/',
      lastmod: '2024-10-28T00:00:00.000Z',
      changefreq: 'monthly',
      priority: '0.6',
    },
    {
      url: '/blog/why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization/',
      lastmod: '2024-10-15T00:00:00.000Z',
      changefreq: 'monthly',
      priority: '0.6',
    },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${pages
  .map(
    page => `  <url>
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
