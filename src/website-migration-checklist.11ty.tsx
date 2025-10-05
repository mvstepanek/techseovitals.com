import React from 'react';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import BenefitsSection from './_components/sections/BenefitsSection';
import AboutSection from './_components/sections/AboutSection';
import { getMigrationBenefits } from './_data/benefits';

export const data = {
  layout: 'base',
  eleventyComputed: {
    permalink: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['url.migration'] || '/website-migration-checklist/';
    },
    title: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.migration.title'] || 'Website Migration Checklist';
    },
    description: (data: any) => {
      const locale = data.i18n?.locale || 'en';
      const translations = data.i18n?.translations?.[locale] || data.i18n?.translations?.en || {};
      return translations['meta.migration.description'] || 'Website migration checklist with 45+ essential tasks.';
    },
  },
};

interface Props {
  t?: (key: string) => string;
}

const WebsiteMigrationChecklistPage: React.FC<Props> = ({ t = (key) => key }) => {
  const convertKitOptions = JSON.stringify({
    settings: {
      after_subscribe: {
        action: 'message',
        success_message: t('migration.form.success'),
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
        text: t('migration.hero.badge'),
      }}
      title={t('migration.hero.title')}
      description={t('migration.hero.description')}
      trustSignals={{
        show: true,
        stars: true,
        text: t('migration.hero.trust-signals'),
      }}
      t={t}
      form={{
        title: t('migration.form.title'),
        subtitle: t('migration.form.subtitle'),
        englishNote: t('checklist.form.english-only') !== 'checklist.form.english-only' ? t('checklist.form.english-only') : undefined,
        action: 'https://app.kit.com/forms/7945460/subscriptions',
        method: 'POST',
        fields: [
          {
            placeholder: t('migration.form.first-name'),
            type: 'text',
            name: 'fields[first_name]',
            required: true,
          },
          {
            placeholder: t('migration.form.email'),
            type: 'email',
            name: 'email_address',
            required: true,
          },
        ],
        submitButton: {
          text: t('migration.form.submit'),
          variant: 'primary',
        },
        dataAttributes: {
          'data-sv-form': '7945460',
          'data-uid': '6a3a12d7b3',
          'data-format': 'inline',
          'data-version': '5',
        },
        convertKitOptions,
      }}
    />

    <BenefitsSection {...getMigrationBenefits(t)} />

    <AboutSection t={t} />
  </main>
  );
};

export default function WebsiteMigrationChecklistTemplate(data: any & { t: (key: string) => string }) {
  return <WebsiteMigrationChecklistPage t={data.t} />;
}
