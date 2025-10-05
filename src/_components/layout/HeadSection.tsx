import React from 'react';
import { SITE_CONFIG } from '../../_data/constants';

interface HeadSectionProps {
  title: string;
  description: string;
  canonicalUrl: string;
  ogImage: string;
  heroImage: string | null;
  permalink?: string;
  schemas: Array<Record<string, any>>;
  articleData?: {
    publishDate?: string;
    modifiedDate?: string;
    author?: string;
  };
  alternates?: Array<{ locale: string; url: string; lang: string }>;
  htmlLang?: string;
  hreflang?: any;
  t?: (key: string) => string;
  translationKey?: string;
}

const HeadSection: React.FC<HeadSectionProps> = ({ title, description, canonicalUrl, ogImage, heroImage, permalink, schemas, articleData, alternates = [], htmlLang = 'en', hreflang, t = (key) => key, translationKey }) => {
  // Deduplicate alternates by locale (safety measure)
  const uniqueAlternates = alternates.reduce((acc:any[], alt) => {
    if (!acc.find(a => a.locale === alt.locale)) {
      acc.push(alt);
    }
    return acc;
  }, []);

  // Get x-default URL (English version) - pass translationKey if available
  const xDefaultUrl = hreflang?.getAlternateUrl(permalink || '/', 'en', translationKey) || uniqueAlternates.find(alt => alt.lang === 'en')?.url || uniqueAlternates[0]?.url;

  // Get alternate locale for og:locale:alternate
  const alternateLocale = htmlLang === 'sk' ? 'en_US' : 'sk_SK';

  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Hreflang tags */}
      {uniqueAlternates.length > 0 && uniqueAlternates.map((alt) => (
        <link key={alt.locale} rel="alternate" hrefLang={alt.lang} href={alt.url} />
      ))}
      {uniqueAlternates.length > 0 && xDefaultUrl && (
        <link rel="alternate" hrefLang="x-default" href={xDefaultUrl} />
      )}

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://f.convertkit.com" />
      <link rel="dns-prefetch" href="https://app.kit.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://analytics.ahrefs.com" />
      {(permalink === '/contact/' || permalink === '/kontakt/') && <link rel="preconnect" href="https://assets.calendly.com" />}

      {/* Preload critical resources */}
      {htmlLang === 'sk' ? (
        <>
          <link rel="preload" href="/assets/fonts/opensans-400-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/assets/fonts/opensans-600-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/assets/fonts/opensans-700-latin-ext.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </>
      ) : (
        <>
          <link rel="preload" href="/assets/fonts/opensans-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/assets/fonts/opensans-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
          <link rel="preload" href="/assets/fonts/opensans-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </>
      )}
      {heroImage && <link rel="preload" as="image" href={heroImage} fetchpriority="high" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={articleData ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="TechSEO Vitals" />
      <meta property="og:locale" content={htmlLang === 'sk' ? 'sk_SK' : 'en_US'} />
      <meta property="og:locale:alternate" content={alternateLocale} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={title} />
      <meta name="twitter:creator" content="@techseovitals" />

      {/* Additional meta tags */}
      <meta name="author" content="Martin Stepanek" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Favicon */}
      <link rel="icon" href="/assets/images/favicons/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" href="/assets/images/favicons/favicon-192x192.png" sizes="192x192" />
      <link rel="apple-touch-icon" href="/assets/images/favicons/apple-touch-icon-180x180.png" />
      <meta name="msapplication-TileImage" content="/assets/images/favicons/mstile-270x270.png" />
      <meta name="theme-color" content="#7c3aed" />

      {/* Speculation Rules for prefetching */}
      <script
        type="speculationrules"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            prefetch: [
              {
                where: { href_matches: htmlLang === 'sk' ? '/technicke-seo-sluzby/' : '/technical-seo-services/' },
                eagerness: 'moderate',
              },
              {
                where: { href_matches: htmlLang === 'sk' ? '/kontakt/' : '/contact/' },
                eagerness: 'moderate',
              },
              {
                where: { href_matches: '/newsletter/' },
                eagerness: 'moderate',
              },
              {
                where: { href_matches: '/blog/' },
                eagerness: 'moderate',
              },
            ],
            prerender: [
              {
                where: { href_matches: htmlLang === 'sk' ? '/kontakt/' : '/contact/' },
                eagerness: 'conservative',
              },
            ],
          }),
        }}
      />

      {/* Inline font declarations for optimal loading */}
      <style
        dangerouslySetInnerHTML={{
          __html: htmlLang === 'sk' ? `
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/assets/fonts/opensans-400-latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/assets/fonts/opensans-400.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/assets/fonts/opensans-600-latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/assets/fonts/opensans-600.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/assets/fonts/opensans-700-latin-ext.woff2') format('woff2');
  unicode-range: U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/assets/fonts/opensans-700.woff2') format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
            ` : `
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/assets/fonts/opensans-400.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('/assets/fonts/opensans-600.woff2') format('woff2');
}
@font-face {
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('/assets/fonts/opensans-700.woff2') format('woff2');
}
            `,
        }}
      />

      {/* Main stylesheet */}
      <link rel="stylesheet" href="/styles/main.css" />

      {/* Schema.org structured data */}
      {schemas.map((schema) => (
        <script
          key={schema['@type']}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* RSS Feed for blog */}
      <link rel="alternate" type="application/rss+xml" title={t('common.rss-feed')} href="/blog/rss.xml" />
      <link rel="alternate" type="application/atom+xml" title={t('common.atom-feed')} href="/blog/atom.xml" />

      {/* Analytics Scripts */}
      {htmlLang === 'sk' ? (
        <>
          <script src="https://analytics.ahrefs.com/analytics.js" data-key="trybAVcvEFnDxjo03EL65Q" defer />

          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-BRZY36WKR1" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
            });

            gtag('config', 'G-BRZY36WKR1');
          `,
            }}
          />
        </>
      ) : (
        <>
          <script src="https://analytics.ahrefs.com/analytics.js" data-key="/k9G/EATSZZzQJkk3e0+8g" defer />

          {/* Google tag (gtag.js) */}
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-0GFYSSGV3W" />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'denied',
              'functionality_storage': 'denied',
            });

            gtag('config', 'G-0GFYSSGV3W');
          `,
            }}
          />
        </>
      )}
    </head>
  );
};

export default HeadSection;
