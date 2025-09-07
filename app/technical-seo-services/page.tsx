import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Technical SEO Services | TechSEO Vitals With Martin Stepanek',
  description: 'Expert Technical SEO services including comprehensive audits, monitoring, and website migration planning. Fast and well-optimized websites are key to delivering positive user experiences.',
  jsonLd: generateOrganizationJsonLd(),
}, '/technical-seo-services/');

export default function TechnicalSEOServices() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Technical SEO Services
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Technical SEO Audit and Monitoring for agencies, e-commerce and business websites.
              </p>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                <p className="text-lg text-gray-800">
                  Fast and well-optimized websites are key to delivering positive user experiences to your visitors, who may become customers and bring new revenue potential.
                </p>
                <p className="mt-2 text-lg font-semibold text-red-700">
                  Remember that even a single mistake related to technical SEO can undermine years of investment in your website and business.
                </p>
              </div>
              <div className="mt-10 flex items-center gap-6">
                <Link
                  href="/book-consultation/"
                  className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                >
                  Schedule Free Consultation
                </Link>
                <Link
                  href="/technical-seo-consultant/"
                  className="text-lg font-medium text-primary hover:text-primary-dark"
                >
                  More About Me →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Technical SEO Services
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Comprehensive solutions tailored to your business needs
              </p>
            </div>

            {/* Technical SEO Audit */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO Audit</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Get a comprehensive analysis of your website&apos;s technical SEO performance with actionable recommendations.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* Essential Audit */}
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Essential Audit</h4>
                    <div className="text-4xl font-bold text-primary mb-4">$1,500</div>
                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        List of up to three most important issues
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Detailed information on how to solve them
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        30-minute one-on-one call
                      </li>
                    </ul>
                    <Link
                      href="/book-consultation/"
                      className="w-full inline-flex justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
                    >
                      Get Essential Audit
                    </Link>
                  </div>
                </div>

                {/* Full Audit */}
                <div className="bg-primary/5 rounded-2xl p-8 border-2 border-primary relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold">Most Popular</span>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Full Audit</h4>
                    <div className="text-4xl font-bold text-primary mb-1">Starting at $2,500</div>
                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Full list of tasks to get maximum revenue potential of the website
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Detailed information on how to solve them
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        60-minute one-on-one call
                      </li>
                    </ul>
                    <Link
                      href="/book-consultation/"
                      className="w-full inline-flex justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
                    >
                      Get Full Audit
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical SEO Monitoring */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO Monitoring</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Continuous website monitoring to maintain optimal performance and catch issues before they impact your revenue.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-2xl p-8 border-2 border-primary shadow-lg">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Monthly Monitoring</h4>
                    <div className="text-4xl font-bold text-primary mb-2">$2,000</div>
                    <p className="text-gray-600 mb-6">per month (3-month minimum)</p>
                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Continuous monitoring of your website
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        List of tasks to get maximum revenue potential of the website
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Detailed information on how to solve them
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        60-minute one-on-one call
                      </li>
                    </ul>
                    <Link
                      href="/book-consultation/"
                      className="w-full inline-flex justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
                    >
                      Start Monitoring
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Migration Plan */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Migration Plan</h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Avoid common problems and ensure a smooth transition with a detailed migration strategy.
                </p>
              </div>
              
              <div className="max-w-3xl mx-auto">
                <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Migration Planning</h4>
                    <div className="text-4xl font-bold text-primary mb-4">Starting at $4,500</div>
                    <ul className="text-left space-y-3 text-gray-600 mb-8">
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Detailed migration plan with risk management
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Post-migration audit
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Continuous support
                      </li>
                      <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        List of tasks for further optimizations to get maximum potential from the website
                      </li>
                    </ul>
                    <Link
                      href="/book-consultation/"
                      className="w-full inline-flex justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
                    >
                      Plan Migration
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Choose TechSEO Vitals
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                10+ years of experience delivering results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Experience</h3>
                <p className="text-gray-600">Over 10 years of industry experience delivering tangible results for businesses.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable Tasks</h3>
                <p className="text-gray-600">Detailed, tailored task lists that your team can implement immediately.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Support</h3>
                <p className="text-gray-600">Comprehensive guidance and support for your internal development teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What Our Clients Say
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Viktor Zeman Testimonial */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites."
                </blockquote>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">VZ</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Viktor Zeman</div>
                    <div className="text-gray-600">CEO, LiveAgent & Post Affiliate Pro</div>
                  </div>
                </div>
              </div>

              {/* Daniel Pison Testimonial */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <blockquote className="text-lg text-gray-700 mb-6">
                  "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in terms of website quality. I consider him one of the greatest technical SEO experts on the market."
                </blockquote>
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-lg">DP</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-gray-900">Daniel Pison</div>
                    <div className="text-gray-600">CMO, Quality Unit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Simple, proven process for maximum impact
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-xl font-bold mb-6">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Start with Consultation</h3>
                <p className="text-gray-600">
                  Schedule free initial consultation. Discuss expectations, business, and website. Formalize partnership with agreement and first payment.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-xl font-bold mb-6">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Preparation and Executing</h3>
                <p className="text-gray-600">
                  Obtain necessary access (e.g., Google Search Console). Begin delivering services. Timeframe depends on services and website size.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full text-xl font-bold mb-6">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Staying Safe and Ahead</h3>
                <p className="text-gray-600">
                  Present results and tasks. Discuss prioritizing issues. Avoid draining company resources. Consultations available during implementation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Improve Your Website&apos;s Performance?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Don&apos;t let technical SEO issues impact your revenue. Get a free consultation and discover how we can help optimize your website.
            </p>
            <div className="mt-10">
              <Link
                href="/book-consultation/"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}