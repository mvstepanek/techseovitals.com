import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Free Website Migration Checklist - Avoid SEO Disasters | TechSEO Vitals',
  description: 'Download our comprehensive website migration checklist to ensure your website migration doesn\'t hurt your search rankings. Proven steps from 10+ years of experience.',
}, '/website-migration-checklist/');

export default function WebsiteMigrationChecklist() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Website Migration{' '}
                <span className="text-primary">Checklist</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Protect your search rankings during website migrations with our proven checklist. Based on 10+ years of successful migration projects.
              </p>
              <div className="mt-10">
                <Link
                  href="#download"
                  className="rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                >
                  Download Free Checklist
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Warning Stats Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Website Migrations Fail
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Don't become another migration disaster statistic
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-red-50 p-8 rounded-xl text-center border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">60%</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Traffic Loss</div>
                <p className="text-gray-600">
                  Average organic traffic loss in the first 3 months after a poorly planned migration
                </p>
              </div>
              <div className="bg-red-50 p-8 rounded-xl text-center border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">90%</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Have Issues</div>
                <p className="text-gray-600">
                  Of website migrations experience some form of SEO-related problems
                </p>
              </div>
              <div className="bg-red-50 p-8 rounded-xl text-center border border-red-200">
                <div className="text-4xl font-bold text-red-600 mb-2">6+ months</div>
                <div className="text-lg font-medium text-gray-900 mb-2">Recovery Time</div>
                <p className="text-gray-600">
                  Time needed to recover from migration mistakes, if recovery is possible
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Checklist Features */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Complete Migration Protection
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Every critical step covered in our comprehensive checklist
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Pre-Migration Phase</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Current Site Audit</h4>
                      <p className="text-gray-600 mt-1">Complete inventory of existing URLs, content, and SEO elements</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Baseline Metrics</h4>
                      <p className="text-gray-600 mt-1">Document current rankings, traffic, and performance metrics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Redirect Mapping</h4>
                      <p className="text-gray-600 mt-1">Plan 301 redirects for all changed URLs to preserve link equity</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Content Migration Plan</h4>
                      <p className="text-gray-600 mt-1">Strategy for preserving SEO value of existing content</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">During Migration</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Staging Environment</h4>
                      <p className="text-gray-600 mt-1">Test all redirects and functionality before going live</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">DNS & Server Setup</h4>
                      <p className="text-gray-600 mt-1">Proper configuration to minimize downtime</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Real-time Monitoring</h4>
                      <p className="text-gray-600 mt-1">Track critical metrics during the migration process</p>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-6 mt-12">Post-Migration</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Search Console Updates</h4>
                      <p className="text-gray-600 mt-1">Notify Google of the migration and submit new sitemaps</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-gray-900">Performance Validation</h4>
                      <p className="text-gray-600 mt-1">Verify all redirects, fix crawl errors, and monitor rankings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Story */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Migration Success Story
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">+15%</div>
                    <div className="text-gray-900 font-medium">Traffic Increase</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
                    <div className="text-gray-900 font-medium">Ranking Loss</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">2 hours</div>
                    <div className="text-gray-900 font-medium">Total Downtime</div>
                  </div>
                </div>
                
                <blockquote className="text-center">
                  <p className="text-lg text-gray-700 italic mb-6">
                    "Following Martin's migration checklist, we not only avoided traffic loss but actually saw a 15% increase in organic traffic within the first month. The detailed pre-planning made all the difference."
                  </p>
                  <cite className="font-semibold text-gray-900">
                    — Sarah Miller, Marketing Director at TechCorp
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Protect Your Migration
                  </h2>
                  <p className="text-lg text-gray-600">
                    Download the complete website migration checklist and avoid costly SEO mistakes.
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
                    <input type="hidden" name="resource" value="website-migration-checklist" />
                    <button
                      type="submit"
                      className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20"
                    >
                      Download Free Checklist
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
              Need Professional Migration Support?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Don't risk your website migration. Get expert planning and support to ensure a successful transition.
            </p>
            <div className="mt-10">
              <Link
                href="/book-consultation/"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Get Migration Support
              </Link>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}