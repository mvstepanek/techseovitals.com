export const data = {
  permalink: '/robots.txt',
  eleventyExcludeFromCollections: true,
  layout: false,
};

interface EleventyData {
  i18n?: any;
}

export default function Robots(data: EleventyData): string {
  const locale = data.i18n?.config?.[data.i18n?.locale];
  const domain = locale?.domain || 'https://www.techseovitals.com';

  return `User-agent: *
Allow: /

# Intentional test - blocking /privacy-policy/ from crawling
Disallow: /privacy-policy/

Sitemap: ${domain}/sitemap.xml`;
}
