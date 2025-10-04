import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import BenefitsSection from './_components/sections/BenefitsSection';
import AboutMartinSection from './_components/sections/AboutMartinSection';
import { MIGRATION_BENEFITS } from './_data/benefits';

export const data = {
  title: 'Website Migration Checklist',
  description:
    'Website migration checklist with 45+ essential tasks. Protect your search rankings and user experience during seamless website transitions.',
  permalink: '/website-migration-checklist/',
  layout: 'base',
};

const WebsiteMigrationChecklistPage: React.FC = () => (
  <main className="flex-1">
    <HeroWithFormSection
      badge={{
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
        text: 'Protect Your Digital Assets',
      }}
      title={
        <>
          Get Your <span>Website Migration</span> Checklist
        </>
      }
      description="Most website migrations fail due to poor planning, causing traffic drops and lost revenue. This comprehensive checklist reduces migration risks while safeguarding your search visibility and business operations."
      trustSignals={{
        show: true,
        stars: true,
        text: '100+ people already using the checklist',
      }}
      form={{
        title: 'Grab Your Free Checklist',
        subtitle: 'Get the checklist delivered to your inbox',
        action: 'https://app.kit.com/forms/7945460/subscriptions',
        method: 'POST',
        fields: [
          {
            placeholder: 'First name',
            type: 'text',
            name: 'fields[first_name]',
            required: true,
          },
          {
            placeholder: 'Email',
            type: 'email',
            name: 'email_address',
            required: true,
          },
        ],
        submitButton: {
          text: 'Get Your Free Checklist',
          variant: 'primary',
        },
        dataAttributes: {
          'data-sv-form': '7945460',
          'data-uid': '6a3a12d7b3',
          'data-format': 'inline',
          'data-version': '5',
        },
        convertKitOptions:
          '{"settings":{"after_subscribe":{"action":"message","success_message":"Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}',
      }}
    />

    <BenefitsSection {...MIGRATION_BENEFITS} />

    <AboutMartinSection />
  </main>
);

export default WebsiteMigrationChecklistPage;
