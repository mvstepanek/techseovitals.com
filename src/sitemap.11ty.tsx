export const data = {
  permalink: '/sitemap.xml',
  eleventyExcludeFromCollections: true,
};

interface Page {
  url: string;
  date?: Date;
}

interface EleventyData {
  collections: {
    all: Array<{
      url: string;
      data: {
        date?: Date;
        eleventyExcludeFromCollections?: boolean;
        translationKey?: string;
      };
    }>;
  };
  i18n?: any;
  hreflang?: any;
}

export default function Sitemap(data: EleventyData): string {
  const locale = data.i18n?.config?.[data.i18n?.locale];
  const domain = locale?.domain || 'https://www.techseovitals.com';

  // Filter out excluded pages and create sitemap entries
  const pages = data.collections.all
    .filter((page) => {
      // Exclude pages with eleventyExcludeFromCollections
      if (page.data.eleventyExcludeFromCollections) return false;

      // Exclude 404 and other special pages
      if (page.url.includes('404')) return false;

      // Exclude non-HTML files (CSS, XML, TXT, etc.)
      if (page.url.match(/\.(css|xml|txt|json|js)$/)) return false;

      return true;
    })
    .map((page) => {
      // Get alternate URLs for hreflang, passing translationKey if available
      const alternatesRaw = data.hreflang?.getAlternates(page.url, page.data.translationKey) || [];

      // Filter out current locale and deduplicate
      const currentLocale = data.i18n?.locale;
      const alternates = alternatesRaw
        .filter((alt: any) => alt.locale !== currentLocale)
        .reduce((acc: any[], alt: any) => {
          if (!acc.find((a: any) => a.locale === alt.locale)) {
            acc.push(alt);
          }
          return acc;
        }, []);

      return {
        url: page.url,
        date: page.data.date,
        alternates,
      };
    });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `  <url>
    <loc>${domain}${page.url}</loc>
    ${page.date ? `<lastmod>${new Date(page.date).toISOString().split('T')[0]}</lastmod>` : ''}${
      page.alternates.length > 0
        ? '\n' +
          page.alternates
            .map((alt: any) => `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${alt.url}" />`)
            .join('\n')
        : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}
