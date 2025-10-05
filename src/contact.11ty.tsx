import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import CalendlySection from './_components/sections/CalendlySection';
import ContactMethodsSection from './_components/sections/ContactMethodsSection';
import BusinessInfoSection from './_components/sections/BusinessInfoSection';
import NewsletterSection from './_components/sections/NewsletterSection';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['url.contact'] || '/contact/';
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.contact.title'] || 'Contact - TechSEO Vitals';
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.contact.description'] || 'Get in touch for a free technical SEO consultation.';
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const ContactPage: React.FC<Props> = ({ t = (key) => key }) => {

  return (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
        text: t('contact.hero.badge'),
      }}
      title={t('contact.hero.title')}
      description={t('contact.hero.description')}
      primaryCta={{
        text: t('contact.hero.cta'),
        href: '#schedule',
      }}
      image={{
        src: '/assets/images/martin-stepanek-3.jpg',
        alt: t('common.alt.martin-expert'),
      }}
      rating={{ show: false }}
      statusBadge={{
        show: true,
        text: t('contact.hero.status'),
      }}
    />
    <CalendlySection t={t} />
    <ContactMethodsSection t={t} />
    <BusinessInfoSection backgroundColor="bg-white" t={t} />
    <NewsletterSection t={t} />
  </main>
  );
};

export default function ContactTemplate(data: any & { t: (key: string) => string }) {
  return <ContactPage t={data.t} />;
}
