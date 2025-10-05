export const data = {
  permalink: '/blog/rss.xml',
  eleventyExcludeFromCollections: true,
};

export default function RSSFeed(data) {
  const i18nData = data.i18n;
  const locale = i18nData?.locale || 'en';
  const config = i18nData?.config?.[locale] || i18nData?.config?.en || {};
  const url = config.domain;
  const title = 'TechSEO Vitals Blog';
  const description = 'Expert insights on technical SEO, web performance, and Core Web Vitals optimization for business growth.';
  const author = 'Martin Stepanek';
  const email = 'martin@techseovitals.com';

  // Get all blog posts from collections and sort by date (newest first)
  const blogPosts = data.collections.blog || [];
  const posts = blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map((post) => ({
      title: post.data.title,
      description: post.data.description,
      url: post.url,
      date: post.date,
      content: post.data.description, // Use description as content for RSS
    }));

  // Helper function to format dates for RSS
  const formatDate = (dateString) => {
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
        (post) => `
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
