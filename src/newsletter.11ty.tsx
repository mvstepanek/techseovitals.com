import React from 'react';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import NewsletterBenefitsSection from './_components/sections/NewsletterBenefitsSection';
import NewsletterContentSection from './_components/sections/NewsletterContentSection';
import AboutSection from './_components/sections/AboutSection';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['url.newsletter'] || '/newsletter/';
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.newsletter.title'] || 'TechSEO Vitals Newsletter';
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.newsletter.description'] || 'Subscribe to TechSEO Vitals newsletter for actionable technical SEO insights.';
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const NewsletterPage: React.FC<Props> = ({ t = (key) => key }) => {
  const convertKitOptions = JSON.stringify({
    settings: {
      after_subscribe: {
        action: 'message',
        success_message: t('newsletter.form.success'),
        redirect_url: '',
      },
      analytics: { google: null, fathom: null, facebook: null, segment: null, pinterest: null, sparkloop: null, googletagmanager: null },
      modal: { trigger: 'timer', scroll_percentage: null, timer: 5, devices: 'all', show_once_every: 15 },
      powered_by: { show: false, url: 'https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic' },
      recaptcha: { enabled: false },
      return_visitor: { action: 'show', custom_content: '' },
      slide_in: { display_in: 'bottom_right', trigger: 'timer', scroll_percentage: null, timer: 5, devices: 'all', show_once_every: 15 },
      sticky_bar: { display_in: 'top', trigger: 'timer', scroll_percentage: null, timer: 5, devices: 'all', show_once_every: 15 },
    },
    version: '5',
  });

  return (
  <main className="flex-1">
    <HeroWithFormSection
      badge={{
        text: t('newsletter.hero.badge'),
      }}
      title={t('newsletter.hero.title')}
      description={t('newsletter.hero.description')}
      trustSignals={{
        show: true,
        images: ['/assets/images/testimonials/mersudin-forbes.jpg', '/assets/images/testimonials/mark-williams-cook.jpg', '/assets/images/testimonials/aleyda-solis.jpg'],
        text: t('newsletter.hero.trust-signals'),
      }}
      form={{
        title: t('newsletter.form.title'),
        subtitle: t('newsletter.form.subtitle'),
        englishNote: t('newsletter.section.english-only') !== 'newsletter.section.english-only' ? t('newsletter.section.english-only') : undefined,
        action: 'https://app.kit.com/forms/7514069/subscriptions',
        method: 'POST',
        fields: [
          {
            placeholder: t('newsletter.form.first-name'),
            type: 'text',
            name: 'fields[first_name]',
            required: true,
          },
          {
            placeholder: t('newsletter.form.email'),
            type: 'email',
            name: 'email_address',
            required: true,
          },
        ],
        submitButton: {
          text: t('newsletter.form.submit'),
          variant: 'primary',
        },
        dataAttributes: {
          'data-sv-form': '7514069',
          'data-uid': '06e277ea9a',
          'data-format': 'inline',
          'data-version': '5',
        },
        convertKitOptions,
      }}
      t={t}
    />

    <NewsletterContentSection t={t} />

    <NewsletterBenefitsSection t={t} />

    <AboutSection t={t} />
  </main>
  );
};

export default function NewsletterTemplate(data: any & { t: (key: string) => string }) {
  return <NewsletterPage t={data.t} />;
}
