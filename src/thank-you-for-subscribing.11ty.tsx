import React from 'react';
import HeroSection from './_components/sections/HeroSection';

export const data = {
  layout: 'base',
  eleventyExcludeFromCollections: true,
  robots: 'noindex, nofollow',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['url.thank-you'] || '/thank-you-for-subscribing/';
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.thank-you.title'] || 'Thank You for Subscribing!';
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.thank-you.description'] || 'Thank you for subscribing to TechSEO Vitals newsletter.';
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const ThankYouForSubscribingPage: React.FC<Props> = ({ t = (key) => key }) => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z" />
          </svg>
        ),
        text: t('thank-you.hero.badge'),
      }}
      title={t('thank-you.hero.title')}
      description={
        <>
          {t('thank-you.hero.description')}
          <div className="mt-6 inline-block bg-gray-100 px-4 py-2 rounded-full text-sm text-gray-700 font-medium">
            {t('thank-you.hero.checklist-notice')}
          </div>
        </>
      }
      primaryCta={{
        text: t('thank-you.hero.cta.services'),
        href: t('url.services'),
        target: '_self',
      }}
      secondaryCta={{
        text: t('thank-you.hero.cta.blog'),
        href: t('url.blog'),
        target: '_self',
        icon: (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.168 18.477 18.582 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
        ),
      }}
      rating={{ show: false }}
      layout="centered"
    />
  </main>
);

export default function ThankYouForSubscribingTemplate(data: any & { t: (key: string) => string }) {
  return <ThankYouForSubscribingPage t={data.t} />;
}
