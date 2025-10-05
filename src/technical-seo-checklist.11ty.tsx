import React from 'react';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import BenefitsSection from './_components/sections/BenefitsSection';
import AboutSection from './_components/sections/AboutSection';
import { getTechnicalSeoBenefits } from './_data/benefits';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['url.checklist'];
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['meta.checklist.title'];
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || {};
      return translations['meta.checklist.description'];
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const TechnicalSEOChecklistPage: React.FC<Props> = ({ t = (key) => key }) => {
  const convertKitOptions = JSON.stringify({
    settings: {
      after_subscribe: {
        action: 'message',
        success_message: t('checklist.form.success'),
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
        text: t('checklist.hero.badge'),
      }}
      title={t('checklist.hero.title')}
      description={t('checklist.hero.description')}
      trustSignals={{
        show: true,
        stars: true,
        text: t('checklist.hero.trust-signals'),
      }}
      t={t}
      form={{
        title: t('checklist.form.title'),
        subtitle: t('checklist.form.subtitle'),
        englishNote: t('checklist.form.english-only') !== 'checklist.form.english-only' ? t('checklist.form.english-only') : undefined,
        action: 'https://app.kit.com/forms/7969566/subscriptions',
        method: 'POST',
        fields: [
          {
            placeholder: t('checklist.form.first-name'),
            type: 'text',
            name: 'fields[first_name]',
            required: true,
          },
          {
            placeholder: t('checklist.form.email'),
            type: 'email',
            name: 'email_address',
            required: true,
          },
        ],
        submitButton: {
          text: t('checklist.form.submit'),
          variant: 'primary',
        },
        dataAttributes: {
          'data-sv-form': '7969566',
          'data-uid': '1b414d8dc5',
          'data-format': 'inline',
          'data-version': '5',
        },
        convertKitOptions,
      }}
    />

    <BenefitsSection {...getTechnicalSeoBenefits(t)} />

    <AboutSection t={t} />
  </main>
  );
};

export default function TechnicalSEOChecklistTemplate(data: any & { t: (key: string) => string }) {
  return <TechnicalSEOChecklistPage t={data.t} />;
}
