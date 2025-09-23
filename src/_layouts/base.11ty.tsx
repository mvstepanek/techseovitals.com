import React from 'react';
import TopBar from '../_components/layout/TopBar';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import CookieConsentBar from '../_components/layout/CookieConsentBar';

interface EleventyData {
  title?: string;
  description?: string;
  permalink?: string;
  content: string;
  ogImage?: string;
  articleData?: {
    publishDate?: string;
    modifiedDate?: string;
    author?: string;
  };
}

// Helper function to get hero image for preloading
const getHeroImage = (permalink: string): string | null => {
  const heroImages: { [key: string]: string } = {
    '/': '/assets/images/martinstepanek-techseo-5.jpg',
    '/technical-seo-consultant/': '/assets/images/martinstepanek-techseo-3.jpg',
    '/technical-seo-services/': '/assets/images/martinstepanek-techseo-1.jpg',
    '/contact/': '/assets/images/martinstepanek-techseo-2.jpg',
    '/customers/': '/assets/images/martinstepanek-techseo-5.jpg',
    '/blog/': '/assets/images/martinstepanek-techseo-5.jpg',
  };
  return heroImages[permalink || '/'] || null;
};

export default function BaseLayout(data: EleventyData): JSX.Element {
  const title = data.title ? `${data.title}` : 'TechSEO Vitals - Technical SEO & Web Performance Consulting';
  const description =
    data.description ||
    "Expert technical SEO and web performance consulting services. Boost your website's visibility, speed, and search rankings with TechSEO Vitals.";
  const canonicalUrl = `https://staging.techseovitals.com${data.permalink || '/'}`;
  const ogImage = data.ogImage || 'https://staging.techseovitals.com/assets/images/og-default.jpg';
  const heroImage = getHeroImage(data.permalink || '/');

  // Schema.org Organization data
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'TechSEO Vitals',
    url: 'https://staging.techseovitals.com',
    logo: 'https://staging.techseovitals.com/assets/logo-light.svg',
    description: 'Expert technical SEO and web performance consulting services',
    founder: {
      '@type': 'Person',
      name: 'Martin Stepanek',
      jobTitle: 'Technical SEO Consultant',
      url: 'https://staging.techseovitals.com/technical-seo-consultant/',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      url: 'https://staging.techseovitals.com/contact/',
    },
    sameAs: [
      'https://www.linkedin.com/in/techseovitals/',
      'https://bsky.app/profile/techseovitals.com',
      'https://youtube.com/@techseovitals',
    ],
  };

  // Article schema for blog posts
  const articleSchema = data.articleData
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.title,
        description: data.description,
        url: canonicalUrl,
        datePublished: data.articleData.publishDate,
        dateModified: data.articleData.modifiedDate || data.articleData.publishDate,
        author: {
          '@type': 'Person',
          name: data.articleData.author || 'Martin Stepanek',
          url: 'https://staging.techseovitals.com/technical-seo-consultant/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'TechSEO Vitals',
          logo: {
            '@type': 'ImageObject',
            url: 'https://staging.techseovitals.com/assets/logo-light.svg',
          },
        },
      }
    : null;

  // Breadcrumb schema
  const breadcrumbSchema =
    data.permalink && data.permalink !== '/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://staging.techseovitals.com',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: data.title,
              item: canonicalUrl,
            },
          ],
        }
      : null;

  // WebSite schema for homepage
  const websiteSchema =
    data.permalink === '/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'TechSEO Vitals',
          url: 'https://staging.techseovitals.com',
          description: 'Expert technical SEO and web performance consulting services',
          publisher: {
            '@type': 'Organization',
            name: 'TechSEO Vitals',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://staging.techseovitals.com/blog/?search={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }
      : null;

  // WebPage schema for all pages
  const webPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: data.title,
    description: data.description,
    url: canonicalUrl,
    isPartOf: {
      '@type': 'WebSite',
      name: 'TechSEO Vitals',
      url: 'https://staging.techseovitals.com',
    },
    author: {
      '@type': 'Person',
      name: 'Martin Stepanek',
      url: 'https://staging.techseovitals.com/technical-seo-consultant/',
    },
    publisher: {
      '@type': 'Organization',
      name: 'TechSEO Vitals',
    },
    primaryImageOfPage: ogImage
      ? {
          '@type': 'ImageObject',
          url: ogImage,
          name: data.title,
        }
      : null,
  };

  // Person schema for Martin Stepanek
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Martin Stepanek',
    jobTitle: 'Technical SEO Consultant',
    url: 'https://staging.techseovitals.com/technical-seo-consultant/',
    worksFor: {
      '@type': 'Organization',
      name: 'TechSEO Vitals',
    },
    knowsAbout: [
      'Technical SEO',
      'Web Performance',
      'Core Web Vitals',
      'Website Migration',
      'Search Engine Optimization',
    ],
    sameAs: [
      'https://www.linkedin.com/in/techseovitals/',
      'https://bsky.app/profile/techseovitals.com',
      'https://youtube.com/@techseovitals',
    ],
  };

  // Professional Service schema for service pages
  const serviceSchema =
    data.permalink &&
    (data.permalink.includes('/technical-seo-services/') || data.permalink.includes('/technical-seo-consultant/'))
      ? {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Technical SEO Services',
          description: 'Expert technical SEO and web performance consulting services',
          provider: {
            '@type': 'Organization',
            name: 'TechSEO Vitals',
          },
          serviceType: 'Technical SEO Consulting',
          areaServed: 'Worldwide',
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Technical SEO Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Technical SEO Audit',
                  description: "Comprehensive analysis of website's technical SEO performance",
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Technical SEO Monitoring',
                  description: 'Continuous website monitoring for optimal performance',
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Website Migration Planning',
                  description: 'Strategic planning for website migrations',
                },
              },
            ],
          },
        }
      : null;

  // Blog/Collection Page schema
  const blogSchema =
    data.permalink === '/blog/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Blog',
          name: 'TechSEO Vitals Blog',
          description: 'Expert technical SEO blog with actionable insights, tips, and strategies',
          url: 'https://staging.techseovitals.com/blog/',
          author: {
            '@type': 'Person',
            name: 'Martin Stepanek',
          },
          publisher: {
            '@type': 'Organization',
            name: 'TechSEO Vitals',
          },
        }
      : null;

  // Newsletter schema for newsletter page
  const newsletterSchema =
    data.permalink === '/newsletter/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          '@id': 'https://staging.techseovitals.com/newsletter/',
          name: 'TechSEO Vitals Newsletter',
          description: 'Technical SEO insights and web performance strategies delivered every two weeks',
          author: {
            '@type': 'Person',
            name: 'Martin Stepanek',
          },
          publisher: {
            '@type': 'Organization',
            name: 'TechSEO Vitals',
          },
          creativeWorkStatus: 'Published',
          audience: {
            '@type': 'Audience',
            audienceType: 'Business owners, SEO professionals, Web developers',
          },
        }
      : null;

  // Contact Page schema
  const contactPageSchema =
    data.permalink === '/contact/'
      ? {
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact TechSEO Vitals',
          description: 'Get in touch with Martin Stepanek for technical SEO consulting services',
          url: 'https://staging.techseovitals.com/contact/',
          mainEntity: {
            '@type': 'Organization',
            name: 'TechSEO Vitals',
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              url: 'https://staging.techseovitals.com/contact/',
            },
          },
        }
      : null;

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://f.convertkit.com" />
        <link rel="dns-prefetch" href="https://app.kit.com" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content={data.articleData ? 'article' : 'website'} />
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
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#7c3aed" />

        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/assets/fonts/opensans-400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/opensans-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/assets/fonts/opensans-700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />

        {/* Preload hero image if exists */}
        {heroImage && <link rel="preload" as="image" href={heroImage} fetchpriority="high" />}

        {/* Critical CSS (inline for performance) */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          /* Critical CSS for above-the-fold content */
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
          body {
            font-family: 'Open Sans', system-ui, -apple-system, sans-serif;
            margin: 0;
            padding: 0;
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            white-space: nowrap;
            border-width: 0;
          }
          .sr-only:focus {
            position: absolute;
            width: auto;
            height: auto;
            padding: 0.5rem 1rem;
            margin: 0;
            overflow: visible;
            clip: auto;
            white-space: normal;
          }
        `,
          }}
        />

        {/* Main stylesheet */}
        <link rel="stylesheet" href="/styles/main.css" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {articleSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(articleSchema),
            }}
          />
        )}

        {breadcrumbSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbSchema),
            }}
          />
        )}

        {websiteSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(websiteSchema),
            }}
          />
        )}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webPageSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        {serviceSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(serviceSchema),
            }}
          />
        )}

        {blogSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(blogSchema),
            }}
          />
        )}

        {newsletterSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(newsletterSchema),
            }}
          />
        )}

        {contactPageSchema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(contactPageSchema),
            }}
          />
        )}

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
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <TopBar />
        <Header />

        <main id="main-content" className="flex-1">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>

        <Footer />

        <CookieConsentBar />

        {/* Calendly script for contact page */}
        {data.permalink === '/contact/' && (
          <script
            type="text/javascript"
            src="https://assets.calendly.com/assets/external/widget.js"
            async
          />
        )}

        {/* Optimized JavaScript - deferred loading */}
        <script
          defer
          dangerouslySetInnerHTML={{
            __html: `
            // Mobile menu toggle with improved accessibility
            document.addEventListener('DOMContentLoaded', function() {
              const button = document.querySelector('.mobile-menu-toggle');
              const menu = document.querySelector('.mobile-menu');

              if (button && menu) {
                button.addEventListener('click', function() {
                  menu.classList.toggle('hidden');
                  const isOpen = !menu.classList.contains('hidden');
                  button.setAttribute('aria-expanded', isOpen);
                  button.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

                  // Trap focus when menu is open
                  if (isOpen) {
                    menu.querySelector('a').focus();
                  }
                });

                // Close menu on Escape key
                document.addEventListener('keydown', function(e) {
                  if (e.key === 'Escape' && !menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                    button.setAttribute('aria-expanded', 'false');
                    button.setAttribute('aria-label', 'Open menu');
                    button.focus();
                  }
                });
              }

              // Cookie Consent Management
              const COOKIE_NAME = 'cookie_consent';
              const COOKIE_EXPIRY_DAYS = 30;

              function getCookie(name) {
                const value = '; ' + document.cookie;
                const parts = value.split('; ' + name + '=');
                if (parts.length === 2) return parts.pop().split(';').shift();
                return null;
              }

              function setCookie(name, value, days) {
                const expires = new Date();
                expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
                document.cookie = name + '=' + value + ';expires=' + expires.toUTCString() + ';path=/;SameSite=Lax';
              }

              function loadConvertKit() {
                if (!document.querySelector('script[src*="ckjs/ck.5.js"]')) {
                  const script = document.createElement('script');
                  script.defer = true;
                  script.src = 'https://f.convertkit.com/ckjs/ck.5.js';
                  document.head.appendChild(script);
                }
              }

              function hideCookieBar() {
                const cookieBar = document.getElementById('cookie-consent');
                if (cookieBar) {
                  cookieBar.classList.add('hidden');
                }
              }

              function showCookieBar() {
                const cookieBar = document.getElementById('cookie-consent');
                if (cookieBar) {
                  cookieBar.classList.remove('hidden');
                }
              }

              // Check existing cookie consent
              const consent = getCookie(COOKIE_NAME);
              if (consent === 'accepted') {
                loadConvertKit();
                hideCookieBar();
              } else if (consent === 'declined') {
                hideCookieBar();
              } else {
                showCookieBar();
              }

              // Accept button handler
              const acceptBtn = document.getElementById('cookie-accept');
              if (acceptBtn) {
                acceptBtn.addEventListener('click', function() {
                  setCookie(COOKIE_NAME, 'accepted', COOKIE_EXPIRY_DAYS);
                  loadConvertKit();
                  hideCookieBar();
                });
              }

              // Decline button handler
              const declineBtn = document.getElementById('cookie-decline');
              if (declineBtn) {
                declineBtn.addEventListener('click', function() {
                  setCookie(COOKIE_NAME, 'declined', COOKIE_EXPIRY_DAYS);
                  hideCookieBar();
                });
              }
            });
          `,
          }}
        />
      </body>
    </html>
  );
}

export const render = BaseLayout;
