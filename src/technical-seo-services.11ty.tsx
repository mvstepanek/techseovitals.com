import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import ServicesSection from './_components/sections/ServicesSection';
import WhatMakesMeDifferentSection from './_components/sections/WhatMakesMeDifferentSection';
import CTASection from './_components/sections/CTASection';
import { BUSINESS_CONSTANTS } from './_data/constants';
import { DEFAULT_CTA_FEATURES } from './_data/cta-features';
import BadgeIcons from './_components/ui/BadgeIcons';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['url.services'] || '/technical-seo-services/';
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.services.title'] || 'Technical SEO Services - TechSEO Vitals';
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.services.description'] || 'Professional technical SEO services to optimize your website performance.';
    },
  },
};

interface Props {
  t?: (key: string) => string;
  locale?: string;
}

const TechnicalSEOServicesPage: React.FC<Props> = ({ t = (key) => key, locale = 'en' }) => {

  return (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: BadgeIcons.lightning,
        text: t('services.hero.badge'),
      }}
      title={t('services.hero.title')}
      description={t('services.hero.description')}
      primaryCta={{
        text: t('services.hero.cta'),
        href: '/contact/',
        target: '_self',
      }}
      image={{
        src: '/assets/images/martin-stepanek-2.jpg',
        alt: t('common.alt.martin-expert'),
      }}
      rating={{
        show: true,
        text: t('services.hero.rating'),
      }}
      statusBadge={{
        show: true,
        text: t('services.hero.status'),
      }}
    />
    <TrustedCompaniesSection t={t} />
    <ServicesSection t={t} />
    <WhatMakesMeDifferentSection t={t} locale={locale} />
    <TestimonialsSection backgroundColor="bg-gray-50" t={t} />
    <CTASection
      badge={{
        icon: BadgeIcons.lightning,
        text: t('services.cta.badge'),
      }}
      title={t('services.cta.title')}
      description={t('services.cta.description')}
      primaryCta={{
        text: t('services.cta.button'),
        href: BUSINESS_CONSTANTS.CONTACT_URL,
      }}
      trustSignals={[t('trust.free-consultation'), t('trust.no-commitment')]}
      features={DEFAULT_CTA_FEATURES}
      t={t}
    />
  </main>
  );
};

export default function TechnicalSEOServicesTemplate(data: any & { t: (key: string) => string }) {
  const locale = data.i18n?.locale || 'en';
  return <TechnicalSEOServicesPage t={data.t} locale={locale} />;
}
