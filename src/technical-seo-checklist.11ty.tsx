import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import TechnicalSEOBenefitsSection from './_components/sections/TechnicalSEOBenefitsSection';
import ExperienceSection from './_components/sections/ExperienceSection';

export const data = {
  title: 'Technical SEO Checklist | TechSEO Vitals',
  description:
    'Transform your website into the exceptional experience users deserve. 100+ actionable improvements that enhance satisfaction, performance, and naturally boost revenue.',
  permalink: '/technical-seo-checklist/',
  layout: 'base',
};

const TechnicalSEOChecklistPage: React.FC = () => (
  <main className="flex-1">
    <HeroWithFormSection
      badge={{
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
        text: 'Transform Technical Barriers Into Competitive Advantages',
      }}
      title={
        <>
          Get Your <span className={COMMON_STYLES.gradientText}>Technical SEO</span> Checklist
        </>
      }
      description="Performance issues are business risks. Download the actionable checklist that transforms technical barriers into competitive advantages users love."
      trustSignals={{
        show: true,
        stars: true,
        text: '100+ people already using the checklist',
      }}
      form={{
        title: 'Get Instant Access',
        subtitle: 'Enter your details to download immediately',
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
            placeholder: 'Business email',
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

    <TechnicalSEOBenefitsSection />

    <div className="border-t border-gray-200">
      <ExperienceSection
        badge={{
          icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
          text: 'About Martin',
        }}
        title={
          <>
            What Makes Me <span className={COMMON_STYLES.gradientText}>Different</span>
          </>
        }
        subtitle="I combine deep technical expertise with business acumen to deliver SEO strategies that directly impact your bottom line."
        experiencePoints={[
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: '10+ Years of Experience',
            description:
              'Over a decade of hands-on web development and technical SEO expertise, working with businesses of all sizes.',
            color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
          },
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7A2 2 0 005 7v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            ),
            title: 'Actionable Task Lists',
            description:
              'Detailed, prioritized action items with step-by-step guidance tailored to your internal resources and capabilities.',
            color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
          },
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
              </svg>
            ),
            title: 'Revenue-Focused Approach',
            description:
              'Every optimization targets real business impact. I focus on improvements that directly increase conversions and revenue.',
            color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          },
        ]}
        image={{
          src: '/assets/images/martinstepanek-techseo-4.jpg',
          alt: 'Martin Stepanek - Technical SEO Consultant',
        }}
        statsBadge={{
          icon: (
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ),
          title: '50+ Successful Projects',
          subtitle: 'Trusted by businesses worldwide',
        }}
        backgroundColor="white"
      />
    </div>
  </main>
);

export default TechnicalSEOChecklistPage;
