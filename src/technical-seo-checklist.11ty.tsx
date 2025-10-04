import React from 'react';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import BenefitsSection from './_components/sections/BenefitsSection';
import AboutSection from './_components/sections/AboutSection';
import { TECHNICAL_SEO_BENEFITS } from './_data/benefits';

export const data = {
  title: 'Technical SEO Checklist',
  description: 'Complete technical SEO checklist with 100+ actionable tasks. Download the free guide that helps improve website performance and search visibility.',
  permalink: '/technical-seo-checklist/',
  layout: 'base',
};

const TechnicalSEOChecklistPage: React.FC = () => (
  <main className="flex-1">
    <HeroWithFormSection
      badge={{
        text: 'Complete Technical SEO Optimization',
      }}
      title={
        <>
          Get Your <span>Technical SEO</span> Checklist
        </>
      }
      description="Comprehensive technical SEO checklist covering crawlability, indexability, and site optimization. 100+ actionable items to fix technical issues, improve search visibility, and create experiences that keep visitors engaged and converting."
      trustSignals={{
        show: true,
        stars: true,
        text: '100+ people already using the checklist',
      }}
      form={{
        title: 'Grab Your Free Checklist',
        subtitle: 'Get the checklist delivered to your inbox',
        action: 'https://app.kit.com/forms/7969566/subscriptions',
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
          'data-sv-form': '7969566',
          'data-uid': '1b414d8dc5',
          'data-format': 'inline',
          'data-version': '5',
        },
        convertKitOptions:
          '{"settings":{"after_subscribe":{"action":"message","success_message":"Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}',
      }}
    />

    <BenefitsSection {...TECHNICAL_SEO_BENEFITS} />

    <AboutSection />
  </main>
);

export default TechnicalSEOChecklistPage;
