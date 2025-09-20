import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';

export const data = {
  title: 'Customers | TechSEO Vitals',
  description:
    'See how businesses transform technical barriers into competitive advantages. Real results from companies creating exceptional user experiences that naturally drive revenue growth.',
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
        text: 'User Experience Transformations',
      }}
      title={
        <>
          Trusted by{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Growing Businesses
          </span>
        </>
      }
      description="From SaaS to e-commerce, see how businesses create exceptional user experiences that delight visitors and naturally drive measurable revenue growth."
      primaryCta={{
        text: 'Start Your Transformation',
        href: '/contact/',
      }}
      image={{
        src: '/assets/images/martinstepanek-techseo-5.jpg',
        alt: 'Martin Stepanek - Technical SEO Expert',
        loading: 'eager',
      }}
      layout="centered"
      rating={{
        show: true,
        stars: 5,
        text: '50+ user experience transformations',
        isTestimonial: false,
        center: true,
      }}
    />

    <TrustedCompaniesSection backgroundColor="white" />

    {/* Case Studies Section */}
    <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
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
            User Experiences That{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-world transformations focused on user delight. See how exceptional experiences naturally deliver
            business impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* TOUCHIT Case Study */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-visible">
            <div className="absolute -top-2 -right-2 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 shadow-lg">
                Coming Soon
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-start justify-start mb-6">
                <img
                  src="/assets/images/clients/touchit-logo.png"
                  alt="TOUCHIT"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-purple-600 font-semibold mb-2">Interactive Technology Solutions</p>
              <p className="text-gray-600 mb-6">
                &quot;Martin&apos;s expertise transformed our digital presence. The results speak for themselves - our
                organic traffic tripled and conversions are through the roof.&quot;
              </p>
              <div className="space-y-4 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">200% more users finding value</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">60% improvement in user experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Exceptional user satisfaction metrics</span>
                </div>
              </div>
            </div>
          </div>

          {/* expertise.ai Case Study */}
          <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-visible">
            <div className="absolute -top-2 -right-2 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 shadow-lg">
                Coming Soon
              </span>
            </div>
            <div className="p-8">
              <div className="flex items-start justify-start mb-6">
                <img
                  src="/assets/images/clients/logo-expertiseai.svg"
                  alt="expertise.ai"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="text-purple-600 font-semibold mb-2">AI-Powered Knowledge Platform</p>
              <p className="text-gray-600 mb-6">
                &quot;TechSEO Vitals didn&apos;t just fix our site - they transformed our entire approach to web
                performance and SEO. Remarkable results! Recommend 100%&quot;
              </p>
              <div className="space-y-4 bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5A7 7 0 113 10a7 7 0 0114 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">150% more users discovering content</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">3x more users taking action</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      />
                    </svg>
                  </div>
                  <span className="text-base font-semibold text-gray-900">Improved crawl efficiency by 80%</span>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
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
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Real Customers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how our technical SEO expertise has driven measurable business growth across various industries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Testimonial 1 */}
          <div className="group relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <img
                    alt="Viktor Zeman"
                    loading="lazy"
                    width="64"
                    height="64"
                    decoding="async"
                    className="rounded-2xl"
                    src="/assets/images/testimonials/viktor-zeman-real.webp"
                  />
                  <svg
                    className="absolute -bottom-2 -right-2 w-7 h-7 text-green-600 bg-white rounded-full"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-display font-bold text-gray-900 text-lg">Viktor Zeman</h4>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-gray-600 text-sm font-normal">CEO, LiveAgent &amp; Post Affiliate Pro</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-2 -top-2 text-6xl text-purple-600/20 font-serif">&quot;</div>
                <blockquote className="text-gray-700 leading-relaxed pl-6">
                  Martin&apos;s development background established a foundation for implementing sophisticated
                  strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the
                  performance of two high-traffic websites.
                </blockquote>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="group relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className="flex items-start gap-6 mb-6">
                <div className="relative">
                  <img
                    alt="Daniel Pison"
                    loading="lazy"
                    width="64"
                    height="64"
                    decoding="async"
                    className="rounded-2xl"
                    src="/assets/images/testimonials/daniel-pison.jpeg"
                  />
                  <svg
                    className="absolute -bottom-2 -right-2 w-7 h-7 text-green-600 bg-white rounded-full"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="font-display font-bold text-gray-900 text-lg">Daniel Pison</h4>
                    <div className="flex text-yellow-400">★★★★★</div>
                  </div>
                  <p className="text-gray-600 text-sm font-normal">CMO, Quality Unit</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-2 -top-2 text-6xl text-purple-600/20 font-serif">&quot;</div>
                <blockquote className="text-gray-700 leading-relaxed pl-6">
                  Thanks in particular to Martin&apos;s skills and expertise, we have long been able to compete with
                  much stronger competitors in website quality. I consider him one of the greatest technical SEO experts
                  on the market.
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Trust Building CTA Section */}
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-50" />
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
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Success Stories?
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            Get a comprehensive strategy that transforms technical barriers into competitive advantages users love. No
            obligation, just actionable insights.
          </p>
          <div className="flex flex-col items-center gap-4">
            <a
              className="group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl focus:ring-4 focus:ring-purple-500/30"
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
          <div className="mb-16" />
        </div>
      </div>
    </section>
  </main>
);

export default CustomersPage;
