export const data = {
  permalink: '/blog/atom.xml',
  eleventyExcludeFromCollections: true,
};

export default function AtomFeed(data) {
  const url = process.env.NODE_ENV === 'development'
    ? 'https://staging.techseovitals.com'
    : 'https://www.techseovitals.com';
  const title = 'TechSEO Vitals Blog';
  const description =
    'Expert insights on technical SEO, web performance, and Core Web Vitals optimization for business growth.';
  const author = 'Martin Stepanek';
  const email = 'martin@techseovitals.com';

  // Get all blog posts from collections and sort by date (newest first)
  const blogPosts = data.collections.blog || [];
  const posts = blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .map(post => ({
      title: post.data.title,
      description: post.data.description,
      url: post.url,
      date: post.date,
      content: post.data.description, // Use description as content for Atom
    }));

  // Helper function to format dates for Atom
  const formatDate = dateString => {
    return new Date(dateString).toISOString();
  };

  const atom = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>${title}</title>
  <subtitle>${description}</subtitle>
  <link href="${url}/blog/atom.xml" rel="self" type="application/atom+xml"/>
  <link href="${url}/blog/" rel="alternate" type="text/html"/>
  <id>${url}/blog/</id>
  <updated>${new Date().toISOString()}</updated>
  <generator uri="https://www.11ty.dev/" version="3.0">Eleventy</generator>
  <author>
    <name>${author}</name>
    <email>${email}</email>
    <uri>${url}/technical-seo-consultant/</uri>
  </author>
  <category term="Technical SEO"/>
  <category term="Web Performance"/>
  <category term="Core Web Vitals"/>
  <rights>Copyright ${new Date().getFullYear()} TechSEO Vitals. All rights reserved.</rights>
  <icon>${url}/assets/images/favicons/favicon-192x192.png</icon>
  <logo>${url}/assets/techseovitals-logo.svg</logo>
  ${posts
    .map(
      post => `
  <entry>
    <title type="html"><![CDATA[${post.title}]]></title>
    <link href="${url}${post.url}" rel="alternate" type="text/html"/>
    <id>${url}${post.url}</id>
    <published>${formatDate(post.date)}</published>
    <updated>${formatDate(post.date)}</updated>
    <summary type="html"><![CDATA[${post.description}]]></summary>
    <content type="html"><![CDATA[${post.content}]]></content>
    <author>
      <name>${author}</name>
      <email>${email}</email>
    </author>
    <category term="Technical SEO"/>
    <category term="Web Performance"/>
  </entry>`
    )
    .join('')}
</feed>`;

  return atom;
}
