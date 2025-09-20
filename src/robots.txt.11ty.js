export const data = {
  permalink: '/robots.txt',
  eleventyExcludeFromCollections: true,
};

export default function render() {
  const isStaging = process.env.NODE_ENV === 'development';

  if (isStaging) {
    // Staging robots.txt - disallow all
    return `User-agent: *
Disallow: /

# This is a staging environment - not for indexing
# Sitemaps
Sitemap: https://staging.techseovitals.com/sitemap.xml
`;
  } else {
    // Production robots.txt - allow all (default)
    return `User-agent: *
Allow: /

# Sitemaps
Sitemap: https://www.techseovitals.com/sitemap.xml
`;
  }
}