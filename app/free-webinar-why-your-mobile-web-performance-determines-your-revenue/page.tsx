import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Free Webinar: Why Your Mobile Web Performance Determines Your Revenue',
  description: 'Join our free webinar to learn how mobile web performance directly impacts your business revenue. Get actionable strategies to improve your mobile site speed and conversions.',
}, '/free-webinar-why-your-mobile-web-performance-determines-your-revenue/');

export default function FreeWebinar() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  FREE LIVE WEBINAR
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-5xl mb-6">
                  Why Your Mobile Web Performance{' '}
                  <span className="text-primary">Determines Your Revenue</span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-8 mb-8">
                  Discover how mobile performance directly impacts your business revenue and learn proven strategies to optimize your mobile site for maximum conversions.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Real case studies with measurable ROI improvements</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Actionable optimization strategies you can implement immediately</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Live Q&A with technical SEO expert Martin Stepanek</span>
                  </div>
                </div>
                
                <Link
                  href="#register"
                  className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                >
                  Register for Free
                </Link>
              </div>
              
              <div className="relative">
                <Image
                  src="/images/martin-stepanek.jpg"
                  alt="Martin Stepanek - Technical SEO Consultant"
                  width={500}
                  height={500}
                  priority
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                The Mobile Performance Crisis
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Why most businesses are losing money to slow mobile sites
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-red-50 rounded-xl border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">53%</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Mobile Traffic Share</div>
                <p className="text-gray-600">
                  Over half of all web traffic now comes from mobile devices
                </p>
              </div>
              
              <div className="text-center p-8 bg-red-50 rounded-xl border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">70%</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Revenue From Mobile</div>
                <p className="text-gray-600">
                  Most e-commerce businesses generate 70%+ of their revenue from mobile users
                </p>
              </div>
              
              <div className="text-center p-8 bg-red-50 rounded-xl border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">50%+</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Abandon Slow Sites</div>
                <p className="text-gray-600">
                  Users abandon mobile sites that take longer than 3 seconds to load
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What You'll Learn
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                45 minutes that could transform your mobile revenue
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The Mobile Revenue Connection
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• How every 100ms of delay costs you 1% in revenue</li>
                  <li>• Real case studies from successful optimizations</li>
                  <li>• The hidden costs of poor mobile performance</li>
                  <li>• Why Core Web Vitals matter for your bottom line</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Proven Optimization Strategies
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Quick wins you can implement this week</li>
                  <li>• Advanced techniques for maximum impact</li>
                  <li>• Tools and resources for ongoing monitoring</li>
                  <li>• Common mistakes that hurt mobile performance</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Measuring Success
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Key metrics that correlate with revenue</li>
                  <li>• How to track performance improvements</li>
                  <li>• Setting up alerts for performance issues</li>
                  <li>• Creating a performance optimization roadmap</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Live Q&A Session
                </h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Get your specific questions answered</li>
                  <li>• Site-specific optimization advice</li>
                  <li>• Industry-specific challenges addressed</li>
                  <li>• Direct access to technical SEO expertise</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form */}
        <section id="register" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Register for Free Webinar
                  </h2>
                  <p className="text-lg text-gray-600">
                    Limited seats available - secure your spot now
                  </p>
                  
                  <div className="mt-6 flex items-center justify-center space-x-8 text-sm text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      45 Minutes + Q&A
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                      </svg>
                      Live & Interactive
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                      100% Free
                    </div>
                  </div>
                </div>

                <form className="max-w-lg mx-auto" action="/youre-registered/" method="POST">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                        Company (Optional)
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20 text-lg"
                    >
                      Register for Free Webinar
                    </button>
                  </div>
                  
                  <p className="text-sm text-gray-500 text-center mt-4">
                    By registering, you agree to receive the webinar link and related communications. 
                    Read our{' '}
                    <Link href="/privacy-policy/" className="text-primary hover:text-primary-dark">
                      privacy policy
                    </Link>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* About the Host */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                About Your Host
              </h2>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="mb-6">
                  <Image
                    src="/images/martin-stepanek.jpg"
                    alt="Martin Stepanek"
                    width={120}
                    height={120}
                    className="rounded-full mx-auto"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Martin Stepanek</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Technical SEO & Web Performance Consultant
                </p>
                
                <div className="prose prose-lg mx-auto text-gray-600">
                  <p>
                    With over 10 years of experience in technical SEO and web performance optimization, 
                    Martin has helped hundreds of businesses improve their mobile performance and increase revenue.
                  </p>
                  <p>
                    His expertise includes Core Web Vitals optimization, mobile-first indexing strategies, 
                    and performance monitoring for enterprise-level websites.
                  </p>
                </div>
                
                <div className="mt-8 flex justify-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-gray-600">Websites Optimized</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">$50M+</div>
                    <div className="text-sm text-gray-600">Revenue Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Don't Let Slow Mobile Performance Cost You Revenue
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Join this free webinar and discover how to optimize your mobile site for maximum conversions.
            </p>
            <div className="mt-10">
              <Link
                href="#register"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Register Now - It's Free
              </Link>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}