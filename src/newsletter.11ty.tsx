import React from 'react';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import NewsletterBenefitsSection from './_components/sections/NewsletterBenefitsSection';
import NewsletterContentSection from './_components/sections/NewsletterContentSection';
import AboutSection from './_components/sections/AboutSection';

export const data = {
  title: 'TechSEO Vitals Newsletter',
  description: 'Subscribe to TechSEO Vitals newsletter for actionable technical SEO insights. Get proven strategies that improve user experience and search rankings.',
  permalink: '/newsletter/',
  layout: 'base',
};

const NewsletterPage: React.FC = () => (
  <main className="flex-1">
    <HeroWithFormSection
      badge={{
        text: 'Biweekly Newsletter',
      }}
      title={
        <>
          Get Technical SEO Insights That <span>Drive Results</span>
        </>
      }
      description="Learn how top businesses create websites that users love and search engines reward. Get practical strategies for technical SEO and performance optimization delivered to your inbox every two weeks."
      trustSignals={{
        show: true,
        images: ['/assets/images/testimonials/mersudin-forbes.jpg', '/assets/images/testimonials/mark-williams-cook.jpg', '/assets/images/testimonials/aleyda-solis.jpg'],
        text: 'Recommended by industry leaders',
      }}
      form={{
        title: 'Subscribe Now',
        subtitle: 'Get actionable insights every two weeks',
        action: 'https://app.kit.com/forms/7514069/subscriptions',
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
          text: 'Subscribe',
          variant: 'primary',
        },
        dataAttributes: {
          'data-sv-form': '7514069',
          'data-uid': '06e277ea9a',
          'data-format': 'inline',
          'data-version': '5',
        },
        convertKitOptions:
          '{"settings":{"after_subscribe":{"action":"message","success_message":"Great! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}',
      }}
    />

    <NewsletterContentSection />

    <NewsletterBenefitsSection />

    <AboutSection />
  </main>
);

export default NewsletterPage;
