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
}

const HeadSection: React.FC<HeadSectionProps> = ({ title, description, canonicalUrl, ogImage, heroImage, permalink, schemas, articleData }) => {
  return (
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://f.convertkit.com" />
      <link rel="dns-prefetch" href="https://app.kit.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://analytics.ahrefs.com" />
      {permalink === '/contact/' && <link rel="preconnect" href="https://assets.calendly.com" />}

      {/* Preload critical resources */}
      <link rel="preload" href="/assets/fonts/opensans-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/assets/fonts/opensans-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      <link rel="preload" href="/assets/fonts/opensans-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      {heroImage && <link rel="preload" as="image" href={heroImage} fetchPriority="high" />}

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={articleData ? 'article' : 'website'} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="TechSEO Vitals" />
      <meta property="og:locale" content="en_US" />

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
                where: { href_matches: '/technical-seo-services/' },
                eagerness: 'moderate',
              },
              {
                where: { href_matches: '/contact/' },
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
                where: { href_matches: '/contact/' },
                eagerness: 'conservative',
              },
            ],
          }),
        }}
      />

      {/* Inline font declarations for optimal loading */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
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
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}

      {/* RSS Feed for blog */}
      <link rel="alternate" type="application/rss+xml" title="TechSEO Vitals Blog RSS Feed" href="/blog/rss.xml" />
      <link rel="alternate" type="application/atom+xml" title="TechSEO Vitals Blog Atom Feed" href="/blog/atom.xml" />

      {/* Analytics Scripts */}
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
    </head>
  );
};

export default HeadSection;
