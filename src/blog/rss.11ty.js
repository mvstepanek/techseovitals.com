export const data = {
  permalink: '/blog/rss.xml',
  eleventyExcludeFromCollections: true,
};

export default function RSSFeed() {
  const url = 'https://staging.techseovitals.com';
  const title = 'TechSEO Vitals Blog';
  const description =
    'Expert insights on technical SEO, web performance, and Core Web Vitals optimization for business growth.';
  const author = 'Martin Stepanek';
  const email = 'martin@techseovitals.com';

  // Get all blog posts
  const posts = [
    {
      title: 'Improving Crawlability: Help Google and ChatGPT Find Your Business Website',
      description:
        "Learn how to optimize your website's crawlability to improve visibility in both Google search results and AI-powered platforms like ChatGPT.",
      url: '/blog/improving-crawlability-help-google-and-chatgpt-find-your-business-website/',
      date: '2024-11-15',
      content: 'Complete guide to improving website crawlability for better search engine and AI discovery.',
    },
    {
      title: 'Multilingual Website Essentials: Technical SEO Guide',
      description:
        'Complete technical SEO guide for multilingual websites including hreflang implementation, URL structure, and international targeting strategies.',
      url: '/blog/multilingual-website-essentials-technical-seo-guide/',
      date: '2024-10-28',
      content: 'Comprehensive guide to technical SEO for multilingual websites and international expansion.',
    },
    {
      title: 'Why You Should Care About Your TTFB: Technical SEO Guide to Optimization',
      description:
        'Learn why Time to First Byte (TTFB) matters for SEO and user experience, plus practical optimization strategies to improve server response times.',
      url: '/blog/why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization/',
      date: '2024-10-15',
      content: 'Technical guide to understanding and optimizing Time to First Byte for better website performance.',
    },
  ];

  // Helper function to format dates for RSS
  const formatDate = dateString => {
    return new Date(dateString).toUTCString();
  };

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${title}</title>
    <description>${description}</description>
    <link>${url}/blog/</link>
    <atom:link href="${url}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-us</language>
    <managingEditor>${email} (${author})</managingEditor>
    <webMaster>${email} (${author})</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <category>Technical SEO</category>
    <category>Web Performance</category>
    <category>Core Web Vitals</category>
    <generator>Eleventy</generator>
    <copyright>Copyright ${new Date().getFullYear()} TechSEO Vitals. All rights reserved.</copyright>
    <image>
      <url>${url}/assets/images/og-default.jpg</url>
      <title>${title}</title>
      <link>${url}/blog/</link>
      <width>1200</width>
      <height>630</height>
    </image>
    ${posts
      .map(
        post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.description}]]></description>
      <content:encoded><![CDATA[${post.content}]]></content:encoded>
      <link>${url}${post.url}</link>
      <guid isPermaLink="true">${url}${post.url}</guid>
      <pubDate>${formatDate(post.date)}</pubDate>
      <author>${email} (${author})</author>
      <category>Technical SEO</category>
      <category>Web Performance</category>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return rss;
}
