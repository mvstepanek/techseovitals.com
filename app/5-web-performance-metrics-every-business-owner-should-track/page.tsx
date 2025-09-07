import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: '5 Web Performance Metrics Every Business Owner Should Track | TechSEO Vitals',
  description: 'Learn the 5 essential web performance metrics that directly impact your business revenue. Free guide with actionable tips to improve your website\'s performance.',
}, '/5-web-performance-metrics-every-business-owner-should-track/');

export default function WebPerformanceMetrics() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                5 Web Performance Metrics Every{' '}
                <span className="text-primary">Business Owner</span>{' '}
                Should Track
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Discover the performance metrics that directly impact your revenue and learn how to improve them for better business results.
              </p>
              <div className="mt-10">
                <Link
                  href="#download"
                  className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                >
                  Download Free Guide
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Performance Metrics Matter for Your Business
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">1% Revenue</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Lost per 100ms Delay</div>
                <p className="text-gray-600">
                  Amazon's study shows that every 100ms delay costs up to 1% in revenue
                </p>
              </div>
              
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">50%+</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Abandon Slow Sites</div>
                <p className="text-gray-600">
                  Over 50% of mobile users abandon sites that take longer than 3 seconds to load
                </p>
              </div>
              
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6">
                  <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-3xl font-bold text-red-600 mb-2">79%</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Won't Return</div>
                <p className="text-gray-600">
                  79% of shoppers experiencing performance issues are less likely to buy again
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The 5 Metrics */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                The 5 Critical Performance Metrics
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Focus on these metrics to make the biggest business impact
              </p>
            </div>
            
            <div className="space-y-16">
              {/* Metric 1 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-6">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Page Load Speed (Time to Interactive)
                    </h3>
                    <p className="text-gray-600 mb-6">
                      How quickly users can actually interact with your page. This directly affects user satisfaction and conversion rates.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Good: Under 3 seconds</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Needs improvement: 3-5 seconds</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Poor: Over 5 seconds</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4">Business Impact:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• 1-second delay = 7% reduction in conversions</li>
                      <li>• Faster sites have higher user engagement</li>
                      <li>• Improved Google search rankings</li>
                      <li>• Better mobile user experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Metric 2 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-6">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Largest Contentful Paint (LCP)
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Measures when the largest content element becomes visible. This is what users perceive as "loading time."
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Good: Under 2.5 seconds</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Needs improvement: 2.5-4 seconds</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Poor: Over 4 seconds</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4">Why It Matters:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Google Core Web Vitals ranking factor</li>
                      <li>• First impression of your site's speed</li>
                      <li>• Correlates with user bounce rates</li>
                      <li>• Critical for mobile performance</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Metric 3 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-6">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      First Input Delay (FID)
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Time from when a user first interacts with your page until the browser responds. Measures interactivity.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Good: Under 100ms</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Needs improvement: 100-300ms</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Poor: Over 300ms</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4">User Experience Impact:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Affects user frustration levels</li>
                      <li>• Critical for form submissions</li>
                      <li>• Impacts e-commerce conversions</li>
                      <li>• Another Core Web Vitals metric</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Metric 4 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-6">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Cumulative Layout Shift (CLS)
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Measures visual stability by tracking unexpected layout shifts. Poor CLS creates frustrating user experiences.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Good: Under 0.1</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Needs improvement: 0.1-0.25</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">Poor: Over 0.25</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4">Common Problems:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Users clicking wrong buttons</li>
                      <li>• Accidental ad clicks (lost revenue)</li>
                      <li>• Form submission errors</li>
                      <li>• Overall poor user experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Metric 5 */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-6">
                      5
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Bounce Rate by Page Speed
                    </h3>
                    <p className="text-gray-600 mb-6">
                      The percentage of visitors who leave after viewing only one page, correlated with loading speed.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">1-3 seconds: 32% bounce rate</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">1-5 seconds: 90% bounce rate</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">1-10 seconds: 123% bounce rate</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-900 mb-4">Revenue Impact:</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Direct correlation with conversions</li>
                      <li>• Indicates user satisfaction</li>
                      <li>• Affects SEO rankings</li>
                      <li>• Shows content relevance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Get the Complete Guide
                  </h2>
                  <p className="text-lg text-gray-600">
                    Download our comprehensive guide with tools, benchmarks, and action plans for each metric.
                  </p>
                </div>

                <form className="max-w-md mx-auto" action="/thank-you-for-subscribing/" method="POST">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name (Optional)
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <input type="hidden" name="resource" value="web-performance-metrics-guide" />
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20"
                    >
                      Download Free Guide
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 text-center mt-4">
                    No spam, unsubscribe at any time. Read our{' '}
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

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need Help Improving These Metrics?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Get a comprehensive performance audit and optimization plan from an expert.
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