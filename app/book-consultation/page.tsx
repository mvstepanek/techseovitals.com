import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Book Free Technical SEO Consultation | TechSEO Vitals',
  description: 'Schedule a free 30-minute consultation with Martin Štěpánek to discuss your website\'s technical SEO performance, Core Web Vitals, and growth opportunities.',
  jsonLd: generateOrganizationJsonLd(),
}, '/book-consultation/');

export default function BookConsultation() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Schedule Your{' '}
                  <span className="text-primary">Free</span>{' '}
                  Consultation
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-8">
                  Get expert insights on your website's technical SEO performance and discover opportunities to increase your revenue through better user experience.
                </p>
                
                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">30-minute free consultation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">No sales pitch - just valuable insights</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-700">Actionable recommendations included</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/martin-stepanek.jpg"
                  alt="Martin Štěpánek - Technical SEO Consultant"
                  width={500}
                  height={500}
                  priority
                  fetchPriority="high"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Booking Form */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Book Your Consultation</h2>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your first name"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      id="website"
                      name="website"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="https://yourwebsite.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="monthlyVisitors" className="block text-sm font-medium text-gray-700 mb-2">
                      Monthly Website Visitors
                    </label>
                    <select
                      id="monthlyVisitors"
                      name="monthlyVisitors"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select range</option>
                      <option value="under-1k">Under 1,000</option>
                      <option value="1k-10k">1,000 - 10,000</option>
                      <option value="10k-50k">10,000 - 50,000</option>
                      <option value="50k-100k">50,000 - 100,000</option>
                      <option value="100k-500k">100,000 - 500,000</option>
                      <option value="500k-1m">500,000 - 1,000,000</option>
                      <option value="over-1m">Over 1,000,000</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="challenges" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Challenges *
                    </label>
                    <textarea
                      id="challenges"
                      name="challenges"
                      rows={4}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="What technical SEO or performance issues are you currently facing? What would you like to achieve?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">Select preferred time</option>
                      <option value="morning-utc">Morning (9 AM - 12 PM UTC)</option>
                      <option value="afternoon-utc">Afternoon (12 PM - 5 PM UTC)</option>
                      <option value="evening-utc">Evening (5 PM - 8 PM UTC)</option>
                      <option value="flexible">I'm flexible</option>
                    </select>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20 text-lg"
                  >
                    Book Free Consultation
                  </button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    I'll contact you within 24 hours to schedule our call. 
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy-policy/" className="text-primary hover:text-primary-dark">
                      privacy policy
                    </Link>
                    .
                  </p>
                </form>
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect</h2>
                
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                      1
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Quick Website Analysis</h3>
                      <p className="text-gray-600">
                        I'll perform a preliminary review of your website's technical SEO and performance before our call.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                      2
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">30-Minute Discussion</h3>
                      <p className="text-gray-600">
                        We'll discuss your current challenges, business goals, and review key technical SEO opportunities.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                      3
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Actionable Recommendations</h3>
                      <p className="text-gray-600">
                        You'll receive immediate insights and next steps you can implement to improve your website's performance.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-lg font-bold">
                      4
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Follow-up Resources</h3>
                      <p className="text-gray-600">
                        I'll send you relevant resources and, if appropriate, discuss how we might work together long-term.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="mt-12 bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 italic mb-4">
                    "The consultation with Martin was incredibly valuable. In just 30 minutes, he identified several critical issues we had completely missed and provided clear steps to fix them."
                  </p>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-gray-900">Sarah Johnson</div>
                      <div className="text-gray-600 text-sm">CTO, TechStart Inc.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Consultation FAQ
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Is the consultation really free?
                  </h3>
                  <p className="text-gray-600">
                    Yes, absolutely! The 30-minute consultation is completely free with no strings attached. 
                    My goal is to provide value and help you understand your website's potential, regardless 
                    of whether we work together afterward.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What should I prepare for the consultation?
                  </h3>
                  <p className="text-gray-600">
                    Have your website URL ready and think about your main challenges or goals. If you have 
                    access to Google Search Console or Google Analytics, that's helpful but not required. 
                    I'll handle the technical analysis beforehand.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Will you try to sell me services during the call?
                  </h3>
                  <p className="text-gray-600">
                    No, this isn't a sales call. The focus is entirely on providing you with valuable insights 
                    about your website. If there's a good fit for working together, we can discuss that briefly 
                    at the end, but there's no pressure.
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How quickly can we schedule the consultation?
                  </h3>
                  <p className="text-gray-600">
                    I typically respond within 24 hours to schedule consultations. Depending on availability, 
                    we can usually arrange a call within a few days to a week of your initial request.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Schedule a Consultation?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Identify Quick Wins</h3>
                <p className="text-gray-600">
                  Discover immediate opportunities to improve your website's performance and search rankings.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Avoid Costly Mistakes</h3>
                <p className="text-gray-600">
                  Get expert guidance to prevent technical SEO issues that could hurt your search rankings.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Plan Your Growth</h3>
                <p className="text-gray-600">
                  Create a strategic roadmap for improving your website's technical foundation for long-term success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Unlock Your Website's Potential?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Schedule your free consultation today and discover how technical SEO can drive real business results for your company.
            </p>
            <div className="mt-10">
              <Link
                href="#booking-form"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Book Your Free Consultation
              </Link>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}