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
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                  Increase your{' '}
                  <span className="text-primary">Revenue</span> with{' '}
                  <span className="text-primary">Technical SEO</span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-8">
                  Unlock your full business potential through faster, well-optimized website with better user experience.
                </p>
                <div className="mt-10 flex items-center gap-6">
                  <Link
                    href="/book-consultation/"
                    className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                  >
                    Schedule Free Consultation
                  </Link>
                  <Link
                    href="/technical-seo-services/"
                    className="text-lg font-medium text-primary hover:text-primary-dark"
                  >
                    View Services →
                  </Link>
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

        {/* Value Propositions */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What You Get
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Proven results that drive business growth
              </p>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Higher Revenue</h3>
                <p className="text-gray-600">
                  Amazon study shows that every 100ms delay costs up to 1% in revenue. 
                  Speed up your site and see immediate business impact.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Better Conversions</h3>
                <p className="text-gray-600">
                  79% of shoppers experiencing performance issues are less likely to purchase again. 
                  Optimize user experience and boost conversions.
                </p>
              </div>
              <div className="text-center p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Improved SEO</h3>
                <p className="text-gray-600">
                  Google considers Core Web Vitals as ranking factors. 
                  Get higher search rankings with technical SEO optimization.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                The Cost of Slow Websites
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Data-backed insights that prove speed matters
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">50%+</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Mobile Visits Abandoned</div>
                <p className="text-gray-600">
                  Google study: Over 50% of mobile visits are abandoned when a website takes longer than 3 seconds
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">1%</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Revenue Lost Per 100ms</div>
                <p className="text-gray-600">
                  Amazon study: With every 100 milliseconds of delay, you can lose up to 1% in revenue
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl font-bold text-primary mb-2">79%</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Unlikely to Return</div>
                <p className="text-gray-600">
                  Neil Patel study: 79% of shoppers who experience performance issues are less likely to purchase
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                How It Works
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Simple 3-step process to transform your website
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Free Consultation</h3>
                <p className="text-gray-600">
                  We start with understanding your business goals and current website challenges
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Discussion and Audit</h3>
                <p className="text-gray-600">
                  Comprehensive technical analysis of your website&apos;s performance and SEO factors
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Receive Audit Results</h3>
                <p className="text-gray-600">
                  Detailed actionable recommendations to improve your website&apos;s performance and rankings
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link
                href="/book-consultation/"
                className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Client Success Stories
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Real results from real businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div>
                    <div className="font-semibold text-gray-900">Viktor Zeman</div>
                    <div className="text-gray-600">CEO, LiveAgent</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;Martin&apos;s technical SEO strategies have been instrumental in our online success. His expertise helped us significantly improve our search rankings.&rdquo;
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="flex items-center mb-6">
                  <div>
                    <div className="font-semibold text-gray-900">Daniel Pison</div>
                    <div className="text-gray-600">CMO, Quality Unit</div>
                  </div>
                </div>
                <p className="text-gray-700 italic">
                  &ldquo;Martin&apos;s expertise in technical SEO has been invaluable in helping us compete with stronger competitors in our industry.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Increase Your Revenue?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Stop losing customers to slow websites. Get a free consultation and see how technical SEO can transform your business.
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
