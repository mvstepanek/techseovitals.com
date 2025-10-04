import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import TestimonialCard from './_components/ui/TestimonialCard';
import OptimizedImage from './_components/common/OptimizedImage';
import Button from './_components/ui/Button';
import { COMMON_STYLES } from './_data/constants';
import SectionHeader from './_components/ui/SectionHeader';
import BackgroundDecorations from './_components/ui/BackgroundDecorations';
import Icons from './_components/ui/Icons';
import IconContainer from './_components/ui/IconContainer';
import TrustSignalsList from './_components/ui/TrustSignalsList';

export const data = {
  title: 'Customers',
  description: 'Real client results from technical SEO and performance optimization. See how businesses create better user experiences and boost conversions.',
  permalink: '/customers/',
  layout: 'base',
};

const CustomersPage: React.FC = () => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: <Icons.checkCircle className="w-4 h-4" />,
        text: 'Proven Client Results',
      }}
      title={
        <>
          Trusted by <span>Growing Businesses</span>
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

    <TrustedCompaniesSection />

    {/* Case Studies Section */}
    <section id="case-studies" className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader
          badge={{
            icon: <Icons.document className="w-4 h-4" />,
            text: 'Featured Case Studies',
          }}
          title={
            <>
              Technical Excellence That <span>Serves Users First</span>
            </>
          }
          subtitle="See how these companies transformed their websites into high-performing platforms that drive measurable business results."
        />

        <div className={COMMON_STYLES.twoColumnGrid}>
          {/* TOUCHIT Case Study */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-visible">
            <div className="p-8">
              <div className="flex items-start justify-start mb-6">
                <OptimizedImage src="/assets/images/clients/logo-touchit.png" alt="TOUCHIT" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-purple-600 font-semibold mb-2">Technology News Portal</p>
              <p className="text-gray-600 mb-6">Complete infrastructure modernization and performance optimization for Slovakia&apos;s leading technology news portal.</p>
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
                    <Icons.lightning className="w-5 h-5 text-white" />
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
                <OptimizedImage src="/assets/images/clients/logo-expertiseai.svg" alt="expertise.ai" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-purple-600 font-semibold mb-2">Demand Conversion AI Platform</p>
              <p className="text-gray-600 mb-6">Strategic merger migration and comprehensive optimization combining two brands into a unified, high-performance platform.</p>
              <div className={`space-y-4 ${COMMON_STYLES.gradientBgVeryLight} p-6 rounded-xl border border-purple-100`}>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 min-w-8 ${COMMON_STYLES.gradientBgDiagonal} rounded-lg flex items-center justify-center`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
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
                    <Icons.lightning className="w-5 h-5 text-white" />
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
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader
          badge={{
            icon: <Icons.chat className="w-4 h-4" />,
            text: 'What Customers Say',
          }}
          title={
            <>
              Real Results from <span>Real Customers</span>
            </>
          }
          subtitle="Direct feedback from clients who've experienced measurable improvements in conversions, revenue, and organic growth."
        />

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
      <BackgroundDecorations variant="default" />
      <div className={`relative ${COMMON_STYLES.containerWidth}`}>
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader
            badge={{
              icon: <Icons.checkCircle className="w-4 h-4" />,
              text: '100% Risk-Free Consultation',
            }}
            title={
              <>
                Ready to Join These <span>Success Stories?</span>
              </>
            }
            subtitle="Join these companies and transform your website into one that users love and search engines reward."
            className="mb-12"
          />
          <div className="flex flex-col items-center gap-4 mb-12">
            <Button href="/contact/">Start Your Transformation</Button>
            <TrustSignalsList signals={['Free consultation', 'No commitment']} />
          </div>

          <div className={`${COMMON_STYLES.threeColumnGrid} max-w-4xl mx-auto`}>
            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <IconContainer icon={<Icons.checkCircle className="w-8 h-8 text-white" />} color="blue" size="md" className="mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Free</h3>
              <p className="text-gray-600 text-center">Free website check with no hidden costs</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <IconContainer icon={<Icons.clock className="w-8 h-8 text-white" />} color="green" size="md" className="mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">30 Minutes</h3>
              <p className="text-gray-600 text-center">Quick call to discuss your biggest opportunities</p>
            </div>

            <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
              <IconContainer icon={<Icons.star className="w-8 h-8 text-white" />} color="purple" size="md" className="mb-4" />
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
