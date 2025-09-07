import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'TechSEO Vitals - Increase your Revenue with Technical SEO',
  description: 'Unlock your full business potential through faster, well-optimized website with better user experience. Technical SEO consultant specializing in Core Web Vitals and page speed optimization.',
  jsonLd: generateOrganizationJsonLd(),
}, '/');

export default function Home() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
            <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25"></div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  10+ Years Making Websites Better
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
                  Turn Your Website Into a{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    Revenue Machine
                  </span>
                </h1>
                <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-lg">
                  Stop losing customers to slow, hard-to-crawl, and poorly optimized websites. Get expert Technical SEO that fixes indexing issues, boosts performance, and drives real revenue growth.
                </p>
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/book-consultation/"
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
                  >
                    <span className="relative z-10">Get Free Website Check</span>
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
              <div className="relative lg:ml-8">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative">
                  <Image
                    src="/images/martin-stepanek-seo.jpg"
                    alt="Martin Štěpánek - Technical SEO Expert"
                    width={500}
                    height={500}
                    priority
                    fetchPriority="high"
                    className="rounded-3xl shadow-2xl border-4 border-white"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">Available for projects</span>
                    </div>
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

        {/* Why Technical SEO? */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Why Technical SEO?
              </div>
            </div>
            <div className="text-center mb-20">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Turn Visitors Into <span className="text-primary">Paying Customers</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
                Technical SEO and web performance fixes the invisible problems that are silently killing your conversions and search rankings.
              </p>
              <div className="flex flex-col items-center gap-4">
                <Link
                  href="/book-consultation/"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
                >
                  <span className="relative z-10">Start Your Transformation</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <div className="flex items-center justify-center gap-4 text-gray-600">
                  <span className="text-sm">✓ Free consultation</span>
                  <span className="text-sm">✓ No commitment</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Increase Revenue</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Page load speed and technical optimization directly impact sales and revenue. Fast, well-optimized websites keep users engaged longer, leading to better business outcomes.
                </p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                  Proven impact on business results
                </div>
              </div>
              
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Conversions</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Studies show Core Web Vitals optimization correlates with better conversion rates. Major companies have documented significant improvements in user engagement after optimization.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                  Measurable conversion improvements
                </div>
              </div>
              
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improved Visibility</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Technical SEO factors are crucial for search engines, LLMs, and AI tools. Proper indexing, crawlability, and site structure help these systems understand and show your content effectively.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                  Improved search & AI visibility
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/30"></div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                The <span className="text-red-500">Brutal Truth</span> About Website Performance
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These industry studies reveal how much money slow websites are costing businesses every single day.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-red-400">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">💸</span>
                </div>
                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-100 text-red-700 mb-3">
                    Amazon Study
                  </div>
                  <div className="text-4xl font-bold text-red-500 mb-2">1%</div>
                  <div className="text-sm text-gray-500 mb-4">Revenue lost per 100ms delay</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Every Millisecond Matters</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Amazon found that for every 100 milliseconds of page load delay, they lose 1% in sales. For a $1M/year business, that's $10,000 lost annually per 100ms.
                </p>
              </div>
              
              <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-orange-400">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">📱</span>
                </div>
                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700 mb-3">
                    Google Study
                  </div>
                  <div className="text-4xl font-bold text-orange-500 mb-2">50%</div>
                  <div className="text-sm text-gray-500 mb-4">Mobile users abandon slow sites</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">The 3-Second Rule</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Google research shows that 53% of mobile users abandon sites that take longer than 3 seconds to load. They never even see your offer.
                </p>
              </div>

              <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-purple-400">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🛒</span>
                </div>
                <div className="mb-4">
                  <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-700 mb-3">
                    Industry Research
                  </div>
                  <div className="text-4xl font-bold text-purple-500 mb-2">79%</div>
                  <div className="text-sm text-gray-500 mb-4">Won't buy from slow sites again</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Lost Customers Forever</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Nearly 4 out of 5 shoppers who experience performance issues won't return to your site. Poor performance kills customer lifetime value.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-red-50 border border-red-200 rounded-full">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                <span className="text-red-700 font-semibold text-sm">Don't let a slow website kill your business</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Me? Section */}
        <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Why Me?
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Track Record That <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Speaks for Itself</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                10+ years of hands-on experience turning slow, underperforming websites into revenue-generating machines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
              <div>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Developer Background</h3>
                      <p className="text-gray-600">6+ years as a web developer gives me deep technical knowledge that most SEO consultants lack. I understand code, not just theory.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Technical SEO Specialist</h3>
                      <p className="text-gray-600">4+ years focused exclusively on technical SEO and Core Web Vitals optimization for high-traffic websites.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                      <p className="text-gray-600">Consistently delivered 15-45% revenue increases and 2-3x conversion improvements for clients across industries.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl"></div>
                <div className="relative">
                  <Image
                    src="/images/martin-stepanek-mountains.jpg"
                    alt="Martin Štěpánek - Technical SEO Expert in the Mountains"
                    width={500}
                    height={600}
                    className="rounded-3xl shadow-2xl border-4 border-white"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full"></div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">50+ Websites</div>
                        <div className="text-xs text-gray-500">Successfully optimized</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                    "Under Martin's leadership, our team significantly enhanced the performance of two high-traffic websites. His methodical approach to technical SEO and aptitude for conveying complex technical concepts have consistently yielded remarkable results."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="font-semibold text-gray-900">LinkedIn Recommendation</div>
                      <div className="text-sm text-gray-500">Former colleague testimonial</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Start with an Audit? */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
                Why Start with an Audit?
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Knowledge</span> before Action
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
                You can't fix what you can't measure. Every successful optimization starts with understanding exactly what's broken, what's working, and what opportunities exist.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link
                  href="/book-consultation/"
                  className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
                >
                  <span className="relative z-10">Get Your Free Audit</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </Link>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <span className="text-sm">✓ Comprehensive analysis</span>
                  <span className="text-sm">✓ Actionable insights</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Identify Hidden Problems</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Discover the invisible technical issues that are quietly sabotaging your rankings and conversions.
                </p>
                <div className="flex items-center gap-2 text-blue-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                  </svg>
                  Complete diagnosis
                </div>
              </div>
              
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Prioritize Quick Wins</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Get a roadmap that focuses on high-impact fixes first, maximizing your ROI from day one.
                </p>
                <div className="flex items-center gap-2 text-green-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                  Immediate results
                </div>
              </div>
              
              <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity"></div>
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Delight Your Users</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Create lightning-fast experiences that keep visitors engaged and convert them into loyal customers.
                </p>
                <div className="flex items-center gap-2 text-purple-600 font-semibold">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                  </svg>
                  Higher satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Does It Work? */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                How Does It Work?
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">3 Simple Steps</span> to Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                A proven process that takes you from slow, underperforming website to a high-converting revenue machine.
              </p>
              <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <p className="text-lg text-gray-700 italic font-medium">
                  "Investing in optimization today creates remarkable returns tomorrow."
                </p>
              </div>
            </div>
            
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden md:block absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                <svg className="w-full h-24" viewBox="0 0 400 100" fill="none">
                  <path d="M100 50 Q200 20 300 50" stroke="#E5E7EB" strokeWidth="2" strokeDasharray="5,5" fill="none"/>
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl mx-auto flex items-center justify-center text-2xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Free Discovery Call</h3>
                  <p className="text-gray-600 leading-relaxed">
                    30-minute consultation to understand your goals, current challenges, and growth opportunities. No sales pressure, just honest insights.
                  </p>
                  <div className="mt-6 text-blue-600 font-semibold text-sm">
                    ✓ 100% free  ✓ No commitment
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-3xl mx-auto flex items-center justify-center text-2xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Deep Technical Audit</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Comprehensive analysis of your site's technical health, performance bottlenecks, and SEO opportunities.
                  </p>
                  <div className="mt-6 text-green-600 font-semibold text-sm">
                    ✓ 50+ data points  ✓ Prioritized roadmap
                  </div>
                </div>
                
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-purple-600 rounded-3xl mx-auto flex items-center justify-center text-2xl font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Implementation Support</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Detailed action plan with ongoing support to ensure successful implementation and measurable results.
                  </p>
                  <div className="mt-6 text-purple-600 font-semibold text-sm">
                    ✓ Expert guidance  ✓ Proven results
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-16">
              <Link
                href="/book-consultation/"
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                <span className="relative z-10">Start Your Transformation Today</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Client Success Stories
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Real Results from <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Real Clients</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                See how I've helped businesses transform their websites into high-performing revenue machines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
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
                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">SaaS</div>
                        <div className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">High Traffic</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-6xl text-primary/20 font-serif">"</div>
                    <blockquote className="text-gray-700 leading-relaxed pl-6">
                      Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        <span>Performance boost</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>SEO optimization</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">Verified Review</div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
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
                      <div className="flex items-center gap-2 mt-2">
                        <div className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full font-medium">Enterprise</div>
                        <div className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">Competitive Edge</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute -left-2 -top-2 text-6xl text-primary/20 font-serif">"</div>
                    <blockquote className="text-gray-700 leading-relaxed pl-6">
                      Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in terms of website quality. I consider him one of the greatest technical SEO experts on the market.
                    </blockquote>
                  </div>
                  
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span>Competitive advantage</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Expert level</span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-400">Verified Review</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <div className="inline-flex items-center gap-3 text-gray-600">
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-sm font-medium">50+ satisfied clients</span>
                </div>
                <div className="w-1 h-4 bg-gray-300"></div>
                <div className="flex items-center gap-1">
                  <div className="flex text-yellow-400 text-sm">
                    {'★'.repeat(5)}
                  </div>
                  <span className="text-sm font-medium">5.0 average rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 bg-white relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-32 h-32 bg-purple-100 rounded-full blur-3xl"></div>
            <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-100 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-full blur-3xl opacity-50"></div>
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
                Stop losing customers to poor performance. Get a comprehensive technical SEO audit and discover exactly how to boost your conversions and revenue.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
                <Link
                  href="/book-consultation/"
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-purple-300/50"
                >
                  <span className="relative z-10">Get Free Website Check</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
                
                <Link
                  href="/contact/"
                  className="group inline-flex items-center gap-2 px-6 py-4 text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <span>Contact Me Directly</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Benefits grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">100% Free</h3>
                  <p className="text-sm text-gray-600 text-center">Comprehensive audit with no hidden costs</p>
                </div>

                <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100/50 border border-blue-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">30 Minutes</h3>
                  <p className="text-sm text-gray-600 text-center">Quick call to discuss your biggest opportunities</p>
                </div>

                <div className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100/50 border border-purple-200">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Immediate Value</h3>
                  <p className="text-sm text-gray-600 text-center">Actionable insights you can implement today</p>
                </div>
              </div>
              
              {/* Social proof */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-600">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <span className="font-semibold">50+ success stories</span>
                </div>
                <div className="w-1 h-4 bg-gray-300 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {'★'.repeat(5)}
                  </div>
                  <span className="font-semibold">5.0 rating</span>
                </div>
                <div className="w-1 h-4 bg-gray-300 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold">Trusted by 100+ businesses</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Preview */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Expert Insights
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Latest <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Technical SEO</span> Insights
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead with actionable technical SEO strategies, performance optimization tips, and industry best practices.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/blog-thumbnails/ttfb-thumbnail.jpg"
                    alt="TTFB Technical SEO Guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full">Performance</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    Why You Should Care About Your TTFB: A Technical SEO Guide to Optimization
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    Time to First Byte, commonly known as TTFB, stands as the most critical metric in technical SEO and overall web performance.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/blog/why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization/" 
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <div className="text-xs text-gray-400">5 min read</div>
                  </div>
                </div>
              </article>

              <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/blog-thumbnails/multilingual-thumbnail.jpg"
                    alt="Multilingual Website Technical SEO Guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full">International SEO</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    Multilingual Website Essentials: A Technical SEO Guide
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/blog/multilingual-website-essentials-technical-seo-guide/" 
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <div className="text-xs text-gray-400">7 min read</div>
                  </div>
                </div>
              </article>

              <article className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src="/images/blog-thumbnails/crawlability-thumbnail.jpg"
                    alt="Improving Crawlability Guide"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-purple-500 text-white text-xs font-semibold rounded-full">Crawling</span>
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    Improving Crawlability: Help Google and ChatGPT Find Your Business Website
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                    Crawlability has become a critical challenge as the number of web crawlers and their requirements grow exponentially.
                  </p>
                  <div className="flex items-center justify-between">
                    <Link 
                      href="/blog/improving-crawlability-help-google-and-chatgpt-find-your-business-website/" 
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors group"
                    >
                      <span>Read Article</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                    <div className="text-xs text-gray-400">6 min read</div>
                  </div>
                </div>
              </article>
            </div>
            
            <div className="text-center mt-12">
              <Link
                href="/blog/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200"
              >
                <span>View All Articles</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="relative py-24 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-700 overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl rotate-45 opacity-20"></div>
          </div>
          
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-sm mb-8">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Join 2,500+ Technical SEO Professionals
              </div>

              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                Get <span className="text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text">Free Weekly</span> Technical SEO Insights
              </h2>
              <p className="text-xl text-purple-100 mb-8 leading-relaxed max-w-3xl mx-auto">
                Join thousands of business owners and marketers who receive actionable technical SEO strategies, performance optimization tips, and revenue-boosting insights every week.
              </p>
              
              {/* Newsletter form */}
              <div className="max-w-lg mx-auto mb-8">
                <form action="/thank-you-for-subscribing/" method="POST" className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Enter your business email"
                      className="w-full px-6 py-4 text-lg border-0 rounded-2xl bg-white/95 backdrop-blur-sm placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:bg-white transition-all shadow-lg"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-4 px-8 rounded-2xl hover:from-yellow-300 hover:to-orange-400 transition-all shadow-lg hover:shadow-xl hover:scale-105 transform whitespace-nowrap"
                  >
                    Get Free Insights
                  </button>
                </form>
              </div>

              {/* Social proof and benefits */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-purple-200 mb-6">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-1">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-500 border-2 border-white flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium">2,500+ subscribers</span>
                </div>
                <div className="w-1 h-4 bg-white/30 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-sm font-medium">Weekly actionable tips</span>
                </div>
                <div className="w-1 h-4 bg-white/30 hidden sm:block"></div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span className="text-sm font-medium">100% private & secure</span>
                </div>
              </div>

              <p className="text-sm text-purple-300">
                No spam, ever. Unsubscribe with one click. Join the community of technical SEO professionals driving real business results.
              </p>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}