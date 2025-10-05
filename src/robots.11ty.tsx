export const data = {
  permalink: '/robots.txt',
  eleventyExcludeFromCollections: true,
};

interface EleventyData {
  i18n?: any;
}

export default function Robots(data: EleventyData): string {
  const locale = data.i18n?.config?.[data.i18n?.locale];
  const domain = locale?.domain || 'https://www.techseovitals.com';

  return `# www.robotstxt.org/
# https://developers.google.com/search/docs/advanced/robots/intro

User-agent: *
Allow: /

Sitemap: ${domain}/sitemap.xml`;
}
