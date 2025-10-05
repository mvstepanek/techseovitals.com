import React from 'react';
import TopBar from '../_components/layout/TopBar';
import Header from '../_components/layout/Header';
import Footer from '../_components/layout/Footer';
import CookieConsentBar from '../_components/layout/CookieConsentBar';
import HeadSection from '../_components/layout/HeadSection';
import { SchemaFactory } from '../_data/schemas';
import { SITE_CONFIG } from '../_data/constants';

interface EleventyData {
  title?: string;
  description?: string;
  permalink?: string;
  content: string;
  ogImage?: string;
  i18n?: any;
  hreflang?: any;
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
  const locale = data.i18n?.config?.[data.i18n?.locale];
  const htmlLang = locale?.htmlLang || 'en';
  const domain = locale?.domain || SITE_CONFIG.DOMAIN;
  const t = data.t || ((key: string) => key);

  const title = data.title ? `${data.title}` : 'TechSEO Vitals - Technical SEO & Web Performance Consulting';
  const description =
    data.description || "Expert technical SEO and web performance consulting services. Boost your website's visibility, speed, and search rankings with TechSEO Vitals.";
  const canonicalUrl = `${domain}${data.permalink || '/'}`;
  const ogImage = data.ogImage || `${domain}/assets/og.png`;
  const heroImage = getHeroImage(data.permalink || '/');

  // Get hreflang alternates
  const alternates = data.hreflang?.getAlternates(data.permalink || '/') || [];

  // Get translated aria labels
  const ariaCloseMenu = t('common.aria.close-menu');
  const ariaOpenMenu = t('common.aria.open-menu');

  // Generate all schemas using centralized SchemaFactory with i18n support
  const schemas = SchemaFactory.generateSchemas({
    title: data.title,
    description: data.description,
    permalink: data.permalink,
    ogImage,
    articleData: data.articleData,
  }, t, domain);

  return (
    <html lang={htmlLang}>
      <HeadSection
        title={title}
        description={description}
        canonicalUrl={canonicalUrl}
        ogImage={ogImage}
        heroImage={heroImage}
        permalink={data.permalink}
        schemas={schemas}
        articleData={data.articleData}
        alternates={alternates}
        htmlLang={htmlLang}
        hreflang={data.hreflang}
        t={data.t}
      />
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <TopBar t={data.t} />
        <Header currentPath={data.permalink} t={data.t} />

        <main id="main-content" className="flex-1">
          <div dangerouslySetInnerHTML={{ __html: data.content }} />
        </main>

        <Footer t={data.t} />

        <CookieConsentBar t={data.t} />

        {/* Calendly script for contact page */}
        {data.permalink === '/contact/' && <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async />}

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
                  button.setAttribute('aria-label', isOpen ? '${ariaCloseMenu}' : '${ariaOpenMenu}');

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
                    button.setAttribute('aria-label', '${ariaOpenMenu}');
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
