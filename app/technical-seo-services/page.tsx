import Link from 'next/link';
import Image from 'next/image';
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
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-32">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          {/* Background decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40" style={{
              animation: 'pulse 20s ease-in-out infinite, bounce 25s ease-in-out infinite'
            }}></div>
            <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30" style={{
              animation: 'pulse 18s ease-in-out infinite reverse'
            }}></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25" style={{
              animation: 'pulse 22s ease-in-out infinite, bounce 28s ease-in-out infinite reverse'
            }}></div>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Text Content */}
              <div className="max-w-2xl lg:max-w-none">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-8 shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Expert Technical SEO Services
                </div>

                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-8">
                  Technical SEO Services That Drive{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Real Revenue
                  </span>
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                  Comprehensive Technical SEO audits, monitoring, and migration planning for agencies, e-commerce, and business websites. Transform your website into a revenue-generating machine.
                </p>
                
                {/* Key benefits */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">10+ Years Experience</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Proven ROI Results</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Actionable Tasks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700 font-medium">Team Support</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <Link
                    href="/book-consultation/"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
                  >
                    <span className="relative z-10">Schedule Free Consultation</span>
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </Link>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="flex text-yellow-400">
                      {'★'.repeat(5)}
                    </div>
                    <span className="text-sm font-medium">50+ businesses trust me</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Elements */}
              <div className="relative lg:ml-8 lg:block hidden">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                  {/* Services Preview Cards */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Technical SEO Audit</h3>
                        <p className="text-sm text-gray-600">From $2,500</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Technical SEO Monitoring</h3>
                        <p className="text-sm text-gray-600">From $2,000/month</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-indigo-50 rounded-2xl border border-indigo-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Website Migration Planning</h3>
                        <p className="text-sm text-gray-600">From $4,500</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom accent */}
                  <div className="mt-8 p-4 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl border border-purple-100">
                    <div className="flex items-center justify-center gap-2 text-purple-700">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="font-semibold">Free Consultation Available</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-3 border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-800">Available for projects</span>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl px-4 py-3 shadow-lg text-center">
                  <div className="text-white font-bold text-sm whitespace-nowrap">10+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Choose Your Service
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Technical SEO <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive solutions tailored to your business needs and goals
              </p>
            </div>

            {/* Technical SEO Audit */}
            <div className="mb-32 relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-16 left-16 w-32 h-32 bg-green-200 rounded-full blur-3xl opacity-30" style={{
                  animation: 'pulse 20s ease-in-out infinite, bounce 25s ease-in-out infinite'
                }}></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 bg-green-300 rounded-full blur-3xl opacity-25" style={{
                  animation: 'pulse 18s ease-in-out infinite reverse'
                }}></div>
              </div>
              
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Technical SEO Audit</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Get a comprehensive analysis of your website's technical SEO performance with actionable recommendations that drive real results.
                </p>
              </div>
              
              <div className="max-w-7xl mx-auto">
                <div className="group relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-3xl flex items-center justify-center mb-8">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-4">Complete Technical SEO Audit</h4>
                      <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-1">Starting at</div>
                        <div className="text-5xl font-bold text-green-600">$2,500</div>
                      </div>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Comprehensive analysis and optimization roadmap to maximize your website's revenue potential and search performance.
                      </p>
                      <Link
                        href="/book-consultation/"
                        className="inline-flex items-center rounded-2xl bg-gradient-to-r from-green-600 to-green-700 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        Get Your Audit
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Comprehensive Technical Analysis</h5>
                            <p className="text-gray-600">Full audit covering crawlability, indexability, site speed, mobile-friendliness, and technical issues impacting your rankings.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Actionable Implementation Plan</h5>
                            <p className="text-gray-600">Detailed task list with priority ranking and step-by-step implementation guidance your team can follow.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">60-Minute Strategy Consultation</h5>
                            <p className="text-gray-600">One-on-one call to review findings, discuss priorities, and plan implementation strategy.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Technical SEO Monitoring */}
            <div className="mb-32 relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 right-16 w-28 h-28 bg-orange-200 rounded-full blur-3xl opacity-30" style={{
                  animation: 'pulse 22s ease-in-out infinite, bounce 28s ease-in-out infinite reverse'
                }}></div>
                <div className="absolute bottom-16 left-20 w-32 h-32 bg-yellow-200 rounded-full blur-3xl opacity-25" style={{
                  animation: 'pulse 24s ease-in-out infinite reverse'
                }}></div>
              </div>
              
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Technical SEO Monitoring</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Continuous website monitoring to maintain optimal performance and catch issues before they impact your revenue.
                </p>
              </div>
              
              <div className="max-w-7xl mx-auto">
                <div className="group relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-yellow-600 rounded-3xl flex items-center justify-center mb-8">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-4">Ongoing Technical SEO Monitoring</h4>
                      <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-1">Starting at</div>
                        <div className="text-5xl font-bold text-orange-600">$2,000<span className="text-2xl text-gray-600">/month</span></div>
                      </div>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Continuous oversight and optimization to maintain peak website performance and maximize your search visibility.
                      </p>
                      <Link
                        href="/book-consultation/"
                        className="inline-flex items-center rounded-2xl bg-gradient-to-r from-orange-600 to-yellow-600 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        Start Monitoring
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Continuous Website Monitoring</h5>
                            <p className="text-gray-600">24/7 monitoring of your website's technical health, performance metrics, and search engine visibility.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Monthly Optimization Reports</h5>
                            <p className="text-gray-600">Detailed monthly reports with actionable tasks and optimization opportunities to maximize revenue.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-orange-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Priority Support & Consultation</h5>
                            <p className="text-gray-600">60-minute monthly strategy calls plus priority email support for urgent issues.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Website Migration Plan */}
            <div className="mb-32 relative">
              {/* Background decorative elements */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-24 left-12 w-36 h-36 bg-indigo-200 rounded-full blur-3xl opacity-30" style={{
                  animation: 'pulse 26s ease-in-out infinite, bounce 30s ease-in-out infinite'
                }}></div>
                <div className="absolute bottom-12 right-16 w-28 h-28 bg-purple-200 rounded-full blur-3xl opacity-25" style={{
                  animation: 'pulse 20s ease-in-out infinite reverse'
                }}></div>
              </div>
              
              <div className="text-center mb-16">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Website Migration Plan</h3>
                <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                  Avoid common problems and ensure a smooth transition with a detailed migration strategy that protects your rankings and traffic.
                </p>
              </div>
              
              <div className="max-w-7xl mx-auto">
                <div className="group relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                        </svg>
                      </div>
                      <h4 className="text-3xl font-bold text-gray-900 mb-4">Complete Website Migration Planning</h4>
                      <div className="mb-6">
                        <div className="text-sm text-gray-500 mb-1">Starting at</div>
                        <div className="text-5xl font-bold text-indigo-600">$4,500</div>
                      </div>
                      <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Comprehensive migration strategy with risk management to protect your rankings, traffic, and revenue during the transition.
                      </p>
                      <Link
                        href="/book-consultation/"
                        className="inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-600 to-indigo-700 px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                      >
                        Plan Your Migration
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    </div>
                    <div>
                      <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Detailed Migration Strategy</h5>
                            <p className="text-gray-600">Comprehensive plan with risk analysis, timeline, and step-by-step implementation guidance.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Post-Migration Audit & Optimization</h5>
                            <p className="text-gray-600">Complete technical SEO audit after migration with optimization tasks to maximize performance.</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-indigo-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">Continuous Support & Monitoring</h5>
                            <p className="text-gray-600">Ongoing support throughout the migration process plus 90-day monitoring period.</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Why Choose TechSEO Vitals
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                What Makes Me <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Different</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                10+ years of proven experience delivering measurable results for businesses like yours
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">10+ Years Experience</h3>
                <p className="text-gray-600 leading-relaxed">Proven track record delivering tangible results across industries and website types.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v8a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored & Actionable Tasks</h3>
                <p className="text-gray-600 leading-relaxed">Detailed, customized task lists that your team can implement immediately for results.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Detailed Implementation Guidance</h3>
                <p className="text-gray-600 leading-relaxed">Step-by-step instructions and best practices for successful implementation.</p>
              </div>
              <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Support For Internal Teams</h3>
                <p className="text-gray-600 leading-relaxed">Comprehensive guidance and ongoing support for your development and marketing teams.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z" />
                </svg>
                Client Success Stories
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Real Results from <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Real Clients</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Viktor Zeman Testimonial */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="absolute top-4 right-4">
                    <div className="text-xs text-gray-400">Verified Review</div>
                  </div>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <Image
                        src="/images/testimonials/viktor-zeman-real.webp"
                        alt="Viktor Zeman"
                        width={64}
                        height={64}
                        className="rounded-2xl"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">Viktor Zeman</h4>
                        <div className="flex text-yellow-400">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm font-medium">CEO, LiveAgent & Post Affiliate Pro</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-6xl text-primary/20 font-serif">"</div>
                    <blockquote className="text-gray-700 leading-relaxed pl-6">
                      Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.
                    </blockquote>
                  </div>
                </div>
              </div>

              {/* Daniel Pison Testimonial */}
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <div className="absolute top-4 right-4">
                    <div className="text-xs text-gray-400">Verified Review</div>
                  </div>
                  <div className="flex items-start gap-6 mb-6">
                    <div className="relative">
                      <Image
                        src="/images/testimonials/daniel-pison.jpeg"
                        alt="Daniel Pison"
                        width={64}
                        height={64}
                        className="rounded-2xl"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-gray-900 text-lg">Daniel Pison</h4>
                        <div className="flex text-yellow-400">
                          {'★'.repeat(5)}
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm font-medium">CMO, Quality Unit</p>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-6xl text-primary/20 font-serif">"</div>
                    <blockquote className="text-gray-700 leading-relaxed pl-6">
                      Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in terms of website quality. I consider him one of the greatest technical SEO experts on the market.
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section */}
        <section className="py-16 bg-white border-y border-gray-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Trusted by innovative companies
              </p>
              <h2 className="text-2xl font-bold text-gray-900">
                Brands That Trust My Expertise
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
              <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
                <Image
                  src="/images/company-logos/touchit-logo.png"
                  alt="TOUCHIT"
                  width={140}
                  height={50}
                  className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
                <Image
                  src="/images/company-logos/post-affiliate-pro-logo.png"
                  alt="Post Affiliate Pro"
                  width={140}
                  height={50}
                  className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
              <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
                <Image
                  src="/images/company-logos/liveagent-logo.png"
                  alt="LiveAgent"
                  width={140}
                  height={50}
                  className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-20">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Simple Process
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                How I <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Work With You</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                My proven 3-step process ensures maximum impact and measurable results
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-3xl text-2xl font-bold mb-8 group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Initial Consultation</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Schedule free consultation to discuss your expectations, business goals, and website challenges. I formalize the partnership with a clear agreement.
                </p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-3xl text-2xl font-bold mb-8 group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Preparation and Execution</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  I obtain necessary access (like Google Search Console) and begin delivering results. Timeline depends on service type and website complexity.
                </p>
              </div>
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-indigo-600 text-white rounded-3xl text-2xl font-bold mb-8 group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Ongoing Support and Optimization</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">
                  Present results with prioritized task lists. Provide strategic guidance to maximize ROI while avoiding resource drain. Ongoing consultations available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Ready to Transform Your Business?
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Turn Your Website Into a <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Revenue Engine</span>
              </h2>
              
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Stop losing customers to poor performance, search, and AI visibility. Get a comprehensive technical SEO audit and discover exactly how I can boost your conversions and revenue.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="/book-consultation/"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
                >
                  <span className="relative z-10">Schedule Free Consultation</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <div className="flex items-center justify-center gap-4 text-gray-600">
                  <span className="text-sm">✓ Free consultation</span>
                  <span className="text-sm">✓ No commitment</span>
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