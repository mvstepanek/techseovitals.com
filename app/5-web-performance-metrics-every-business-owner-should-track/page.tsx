import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import ConvertKitForm from '@/components/ui/convertkit-form';
import WhyTechnicalSEOSection from '@/components/sections/why-technical-seo-section';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: '5 Web Performance Metrics Every Business Owner Should Track | TechSEO Vitals',
  description: 'Technical SEO together with web performance optimizations creates a stable foundation for your website. Download our comprehensive guide.',
}, '/5-web-performance-metrics-every-business-owner-should-track/');

export default function WebPerformanceMetrics() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section - Using homepage hero pattern with form instead of image */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25"></div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Maximize Your Website Revenue Potential
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">5 Web Performance</span> Metrics Every Business Owner Should Track
                </h1>
                <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-lg">
                  Technical SEO together with web performance optimizations creates a stable foundation for your website. Convert happy users into customers.
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="text-sm font-medium">Used by performance experts</span>
                  </div>
                </div>
              </div>
              
              {/* Form Section (replacing image) */}
              <div className="relative lg:ml-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">
                      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Get Instant Access</span>
                    </h3>
                    <p className="text-gray-600">Enter your details to download immediately</p>
                  </div>
                  
                  <ConvertKitForm
                    formId="1b414d8dc5"
                    firstNamePlaceholder="First name"
                    emailPlaceholder="Business email"
                    buttonText="Download Free Guide"
                    className=""
                  />
                  
                  <div className="mt-6 flex items-center justify-center gap-6 text-sm text-gray-500">
                    <span>✓ Instant access</span>
                    <span>✓ Free forever</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Guide Section - Using the homepage WhyTechnicalSEO pattern */}
        <WhyTechnicalSEOSection
          badge="What You'll Learn"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title={
            <>
              Transform Your Website Into a <span className="text-primary">Performance Powerhouse</span>
            </>
          }
          description="Fast, optimized websites increase user engagement, leading to longer site visits and higher revenue. Unlock your website's full potential."
          secondaryCTA={
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ 5 critical metrics</span>
              <span className="text-sm">✓ Actionable insights</span>
            </div>
          }
          benefits={[
            {
              icon: <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-green-500 to-green-600",
              hoverBorderColor: "green",
              title: "Higher Revenue",
              description: "Fast, optimized websites increase user engagement, leading to longer site visits and higher revenue. Every 100ms delay costs up to 1% in revenue.",
              metric: "1% revenue per 100ms",
              metricColor: "green"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-blue-500 to-blue-600",
              hoverBorderColor: "blue",
              title: "Better Conversions",
              description: "Passing Core Web Vitals unlocks your website's full potential and significantly improves conversion rates. Better performance means more customers.",
              metric: "7% conversion boost",
              metricColor: "blue"
            },
            {
              icon: <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>,
              iconGradient: "bg-gradient-to-br from-purple-500 to-purple-600",
              hoverBorderColor: "purple",
              title: "Improved SEO",
              description: "Well-optimized websites are more appealing to users and search engines. Core Web Vitals are a direct Google ranking factor.",
              metric: "Higher search rankings",
              metricColor: "purple"
            }
          ]}
        />

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

        {/* Final CTA Section - Homepage Style */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Maximize Your Website Performance
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Get Your Free <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Performance Guide</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Join dozens of business owners who are already tracking these metrics. Create a stable foundation for your website success.
              </p>
              
              {/* ConvertKit Form */}
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-8 rounded-3xl shadow-xl border border-gray-200">
                  <ConvertKitForm
                    formId="1b414d8dc5"
                    firstNamePlaceholder="First name"
                    emailPlaceholder="Business email"
                    buttonText="Download Your Free Guide Now"
                    className=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        <CookieConsent />
      </MainLayout>
    </>
  );
}