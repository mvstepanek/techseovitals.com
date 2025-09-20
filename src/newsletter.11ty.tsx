import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import NewsletterBenefitsSection from './_components/sections/NewsletterBenefitsSection';
import ExperienceSection from './_components/sections/ExperienceSection';

export const data = {
  title: 'TechSEO Vitals Newsletter | TechSEO Vitals',
  description:
    'Join TechSEO Vitals newsletter for actionable strategies that create exceptional user experiences and naturally drive business growth. Subscribe now for free.',
  permalink: '/newsletter/',
  layout: 'base',
};

const NewsletterPage: React.FC = () => (
  <main className="flex-1">
    <HeroWithFormSection
      badge={{
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
        text: 'Every Two Weeks in Your Inbox',
      }}
      title={
        <>
          <span className={COMMON_STYLES.gradientText}>TechSEO Vitals</span> Newsletter
        </>
      }
      description="Create exceptional user experiences that drive revenue. Actionable strategies for transforming technical barriers into competitive advantages."
      trustSignals={{
        show: true,
        images: [
          '/assets/images/testimonials/leader3.jpg',
          '/assets/images/testimonials/leader2.jpg',
          '/assets/images/testimonials/leader1.jpg',
        ],
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
            placeholder: 'Business email',
            type: 'email',
            name: 'email_address',
            required: true,
          },
        ],
        submitButton: {
          text: 'Subscribe to Newsletter',
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

    <div className="border-t border-gray-200">
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22.0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z"
                />
              </svg>
              What You&apos;ll Get
            </div>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Maximize Your Website&apos;s <span className={COMMON_STYLES.gradientText}>Revenue Potential</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Through the newsletter, I share the most valuable knowledge I&apos;ve gained over my 10-year career in web
              development and technical SEO.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">In-Depth Content</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Each newsletter focuses on a specific topic, exploring details and research in depth. Get comprehensive
                insights you won&apos;t find elsewhere.
              </p>
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                Deep insights
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Actionable Tips</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Every episode includes a special actionable tip that can immediately help your business grow and improve
                your website performance.
              </p>
              <div className="flex items-center gap-2 font-semibold text-green-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                Immediate impact
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity" />
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Latest Industry News</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Always up-to-date news from the technical SEO and web performance industry that deserves your attention
                and strategic consideration.
              </p>
              <div className="flex items-center gap-2 font-semibold text-purple-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                Stay ahead
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <NewsletterBenefitsSection />

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

export default NewsletterPage;
