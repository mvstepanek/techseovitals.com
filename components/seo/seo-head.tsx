import Head from 'next/head';
import type { SEOData } from '@/lib/seo';

interface SEOHeadProps {
  seo: SEOData;
}

export default function SEOHead({ seo }: SEOHeadProps) {
  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {seo.keywords && <meta name="keywords" content={seo.keywords} />}
      {seo.robots && <meta name="robots" content={seo.robots} />}
      
      {/* Canonical URL */}
      {seo.canonical && <link rel="canonical" href={seo.canonical} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.openGraph?.type || 'website'} />
      <meta property="og:url" content={seo.canonical} />
      <meta property="og:title" content={seo.openGraph?.title || seo.title} />
      <meta property="og:description" content={seo.openGraph?.description || seo.description} />
      {seo.openGraph?.image && <meta property="og:image" content={seo.openGraph.image} />}
      <meta property="og:site_name" content="TechSEO Vitals" />
      <meta property="og:locale" content="en_US" />
      
      {/* Article specific OG tags */}
      {seo.openGraph?.type === 'article' && (
        <>
          {seo.openGraph.publishedTime && (
            <meta property="article:published_time" content={seo.openGraph.publishedTime} />
          )}
          {seo.openGraph.modifiedTime && (
            <meta property="article:modified_time" content={seo.openGraph.modifiedTime} />
          )}
          {seo.openGraph.author && (
            <meta property="article:author" content={seo.openGraph.author} />
          )}
          {seo.openGraph.section && (
            <meta property="article:section" content={seo.openGraph.section} />
          )}
          {seo.openGraph.tags && seo.openGraph.tags.map((tag) => (
            <meta key={tag} property="article:tag" content={tag} />
          ))}
        </>
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content={seo.twitter?.card || 'summary_large_image'} />
      <meta name="twitter:url" content={seo.canonical} />
      <meta name="twitter:title" content={seo.twitter?.title || seo.title} />
      <meta name="twitter:description" content={seo.twitter?.description || seo.description} />
      {seo.twitter?.image && <meta name="twitter:image" content={seo.twitter.image} />}
      
      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="theme-color" content="#7c3aed" />
      
      {/* Favicons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* JSON-LD Structured Data */}
      {seo.jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seo.jsonLd) }}
        />
      )}
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//youtube.com" />
      <link rel="dns-prefetch" href="//linkedin.com" />
    </Head>
  );
}