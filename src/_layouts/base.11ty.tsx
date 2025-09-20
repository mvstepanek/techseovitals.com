import React from 'react';
import TopBar from '../_components/layout/TopBar';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import CookieConsentBar from '../_components/layout/CookieConsentBar';
import { SchemaFactory } from '../_data/schemas';
import { SITE_CONFIG } from '../_data/constants';

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
    '/': '/assets/images/martin-stepanek-6.jpg',
    '/technical-seo-consultant/': '/assets/images/martin-stepanek-4.jpg',
    '/technical-seo-services/': '/assets/images/martin-stepanek-2.jpg',
    '/contact/': '/assets/images/martin-stepanek-3.jpg',
    '/customers/': '/assets/images/martin-stepanek-6.jpg',
    '/blog/': '/assets/images/martin-stepanek-6.jpg',
  };
  return heroImages[permalink || '/'] || null;
};

export default function BaseLayout(data: EleventyData): JSX.Element {
  const title = data.title ? `${data.title}` : 'TechSEO Vitals - Technical SEO & Web Performance Consulting';
  const description =
    data.description ||
    "Expert technical SEO and web performance consulting services. Boost your website's visibility, speed, and search rankings with TechSEO Vitals.";
  const canonicalUrl = `${SITE_CONFIG.DOMAIN}${data.permalink || '/'}`;
  const ogImage = data.ogImage || `${SITE_CONFIG.DOMAIN}/assets/og.png`;
  const heroImage = getHeroImage(data.permalink || '/');

  // Generate all schemas using centralized SchemaFactory
  const schemas = SchemaFactory.generateSchemas({
    title: data.title,
    description: data.description,
    permalink: data.permalink,
    ogImage,
    articleData: data.articleData,
  });

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
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://analytics.ahrefs.com" />
        {data.permalink === '/contact/' && <link rel="preconnect" href="https://assets.calendly.com" />}

        {/* Preload critical resources */}
        <link rel="preload" href="/assets/fonts/opensans-400.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/opensans-600.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/opensans-700.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        {heroImage && <link rel="preload" as="image" href={heroImage} fetchpriority="high" />}

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
        <meta name="theme-color" content="#7c3aed" />


        {/* Speculation Rules for prefetching */}
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prefetch: [
                {
                  where: { href_matches: "/technical-seo-services/" },
                  eagerness: "moderate"
                },
                {
                  where: { href_matches: "/contact/" },
                  eagerness: "moderate"
                },
                {
                  where: { href_matches: "/newsletter/" },
                  eagerness: "moderate"
                },
                {
                  where: { href_matches: "/blog/" },
                  eagerness: "moderate"
                }
              ],
              prerender: [
                {
                  where: { href_matches: "/contact/" },
                  eagerness: "conservative"
                }
              ]
            })
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
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <TopBar />
        <Header currentPath={data.permalink} />

        <main id="main-content" className="flex-1">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>

        <Footer />

        <CookieConsentBar />

        {/* Calendly script for contact page */}
        {data.permalink === '/contact/' && (
          <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />
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
