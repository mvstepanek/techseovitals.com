import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import TestimonialCard from './_components/ui/TestimonialCard';
import OptimizedImage from './_components/common/OptimizedImage';
import { COMMON_STYLES } from './_data/constants';

export const data = {
  title: 'Customers',
  description:
    'Real client results from technical SEO and performance optimization. See how businesses create better user experiences and boost conversions.',
  permalink: '/customers/',
  layout: 'base',
};

const CustomersPage: React.FC = () => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
            />
          </svg>
        ),
        text: 'Proven Client Results',
      }}
      title={
        <>
          Trusted by{' '}
          <span className={COMMON_STYLES.gradientText}>
            Growing Businesses
          </span>
        </>
      }
      description="From SaaS to e-commerce, businesses use technical SEO and performance optimization to create experiences that prioritize real users first. Better search and AI visibility naturally follow."
      primaryCta={{
        text: 'Start Your Transformation',
        href: '/contact/',
      }}
      image={{
        src: '/assets/images/martin-stepanek-6.jpg',
        alt: 'Martin Stepanek - Technical SEO Expert',
        loading: 'eager',
      }}
      layout="centered"
      rating={{
        show: true,
        stars: 5,
        text: 'Trused by 50+ businesses',
        isTestimonial: false,
        center: true,
      }}
    />

    <TrustedCompaniesSection backgroundColor="white" />

    {/* Case Studies Section */}
    <section id="case-studies" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${COMMON_STYLES.gradientBg} text-white shadow-lg mb-6`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Featured Case Studies
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Technical Excellence That{' '}
            <span className={COMMON_STYLES.gradientText}>
              Serves Users First
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how these companies transformed their websites into high-performing platforms that drive measurable
            business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TOUCHIT Case Study */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-visible">
            <div className="p-8">
              <div className="flex items-start justify-start mb-6">
                <OptimizedImage
                  src="/assets/images/clients/logo-touchit.png"
                  alt="TOUCHIT"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-purple-600 font-semibold mb-2">Technology News Portal</p>
              <p className="text-gray-600 mb-6">
                Complete infrastructure modernization and performance optimization for Slovakia's leading technology news portal.
              </p>
              <div className={`space-y-4 ${COMMON_STYLES.gradientBgVeryLight} p-6 rounded-xl border border-purple-100`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Infrastructure & CMS Migration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Faster Website & Better Core Web Vitals</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">External Agency Supervision & Design Consulting</span>
                </div>
              </div>
            </div>
          </div>

          {/* expertise.ai Case Study */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-visible">
            <div className="p-8">
              <div className="flex items-start justify-start mb-6">
                <OptimizedImage
                  src="/assets/images/clients/logo-expertiseai.svg"
                  alt="expertise.ai"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-purple-600 font-semibold mb-2">Demand Conversion AI Platform</p>
              <p className="text-gray-600 mb-6">
                Strategic merger migration and comprehensive optimization combining two brands into a unified, high-performance platform.
              </p>
              <div className={`space-y-4 ${COMMON_STYLES.gradientBgVeryLight} p-6 rounded-xl border border-purple-100`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Complete Two-Brand Merger Migration</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">New Website Architecture & SEO Strategy</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Performance Optimization & Crawl Efficiency</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Full Testimonials Section */}
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${COMMON_STYLES.gradientBg} text-white shadow-lg mb-6`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            What Customers Say
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Real Results from{' '}
            <span className={COMMON_STYLES.gradientText}>
              Real Customers
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Direct feedback from clients who&apos;ve experienced measurable improvements in conversions, revenue, and
            organic growth.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8">

          <TestimonialCard
            name="Daniel Pison"
            position="CMO"
            company="Quality Unit"
            text="Martin was a key member of the team responsible for the technical condition of the liveagent.com and postaffiliatepro.com websites. Thanks in particular to his skills and expertise, we were able to compete with much stronger competitors in terms of website quality for a long time.
I would definitely be happy to work with Martin in the future, I consider him to be one of the greatest technical SEO experts on the market. I definitely recommend working with him."
            image="/assets/images/testimonials/daniel-pison.jpg"
          />

          <TestimonialCard
            name="Tomas Buransky"
            position="Marketing Manager"
            company="TOUCHIT"
            text="We’ve been working with Martin for several years now and we truly appreciate his professional and systematic approach, which also takes our business goals into account. In addition to his deep knowledge of SEO, he’s able to break down proposed strategies into actionable steps and, thanks to his previous experience as a programmer, communicate them effectively to both our editorial team and our developers."
            image="/assets/images/testimonials/tomas-buransky.jpg"
          />

        <TestimonialCard
            name="Viktor Zeman"
            position="CEO"
            company="LiveAgent & Post Affiliate Pro"
            text="Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites."
            image="/assets/images/testimonials/viktor-zeman.jpg"
        />
        </div>
      </div>
    </section>

    {/* Trust Building CTA Section */}
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
        <div className={`${COMMON_STYLES.blurredBlob} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96`} />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-8">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
            100% Risk-Free Consultation
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Ready to Join These{' '}
            <span className={COMMON_STYLES.gradientText}>
              Success Stories?
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Join these companies and transform your website into one that users love and search engines reward.
          </p>
          <div className="flex flex-col items-center gap-4 mb-12">
            <a
              className={COMMON_STYLES.buttonPrimary}
              href="/contact/"
            >
              <span className="relative z-10">Start Your Transformation</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ Free consultation</span>
              <span className="text-sm">✓ No commitment</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600 text-center">Free website check with no hidden costs</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Minutes</h3>
              <p className="text-gray-600 text-center">Quick call to discuss your biggest opportunities</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Immediate Value</h3>
              <p className="text-gray-600 text-center">Actionable insights you can implement today</p>
            </div>
          </div>
          <div className="mb-16" />
        </div>
      </div>
    </section>
  </main>
);

export default CustomersPage;
