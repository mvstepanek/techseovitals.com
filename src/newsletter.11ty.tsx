import React from 'react';
import HeroWithFormSection from './_components/sections/HeroWithFormSection';
import NewsletterBenefitsSection from './_components/sections/NewsletterBenefitsSection';
import AboutMartinSection from './_components/sections/AboutMartinSection';
import Badge from './_components/ui/Badge';
import CardDecoration from './_components/ui/CardDecoration';
import IconContainer from './_components/ui/IconContainer';
import { COMMON_STYLES } from './_data/constants';

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
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
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

    <div className="border-t border-gray-200">
      <section className="py-24 bg-white">
        <div className={COMMON_STYLES.containerWidth}>
          <div className="text-center mb-6">
            <Badge
              icon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 4.26a2 2 0 002.22.0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z"
                  />
                </svg>
              }
            >
              What You&apos;ll Get
            </Badge>
          </div>
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              What&apos;s in Each <span>Episode</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
              Actionable technical SEO and performance strategies that help you create better user experiences while improving your search rankings and AI visibility.
            </p>
          </div>
          <div className={COMMON_STYLES.threeColumnGrid}>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="blue" size="lg" />
              <IconContainer
                icon={
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                }
                color="blue"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Expert Analysis</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Deep dives into technical SEO trends, case studies from real websites, and performance optimization techniques that actually move the needle.
              </p>
              <div className="flex items-center gap-2 font-semibold text-blue-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                Deep insights
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="green" size="lg" />
              <IconContainer
                icon={
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                color="green"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Actionable Guides</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Step-by-step guides you can implement immediately. No fluff, just practical instructions with clear before-and-after examples.
              </p>
              <div className="flex items-center gap-2 font-semibold text-green-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                Ready to use
              </div>
            </div>
            <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
              <CardDecoration color="purple" size="lg" />
              <IconContainer
                icon={
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                color="purple"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industry Trends</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Latest updates on search algorithm changes, AI developments, and emerging optimization opportunities you need to know about.
              </p>
              <div className="flex items-center gap-2 font-semibold text-purple-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                Stay current
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <NewsletterBenefitsSection />

    <AboutMartinSection />
  </main>
);

export default NewsletterPage;
