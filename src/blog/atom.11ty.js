export const data = {
  permalink: '/blog/atom.xml',
  eleventyExcludeFromCollections: true,
};

export default function AtomFeed() {
  const url = 'https://staging.techseovitals.com';
  const title = 'TechSEO Vitals Blog';
  const description =
    'Expert insights on technical SEO, web performance, and Core Web Vitals optimization for business growth.';
  const author = 'Martin Stepanek';
  const email = 'martin@techseovitals.com';

  // Get all blog posts (matching RSS feed)
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
  <logo>${url}/assets/logo-light.svg</logo>
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
