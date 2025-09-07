import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Thank You for Subscribing - TechSEO Vitals',
  description: 'Thank you for subscribing to TechSEO Vitals newsletter. Check your email for your free resources.',
  robots: 'noindex, nofollow',
}, '/thank-you-for-subscribing/');

export default function ThankYouForSubscribing() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Thank You Section */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-white to-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                Thank You for Subscribing!
              </h1>
              
              <p className="text-xl text-gray-600 leading-8 mb-8">
                I've sent your free resource to your email address. Please check your inbox (and spam folder) for the download link.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-blue-900 mb-2">What's Next?</h2>
                <ul className="text-blue-800 space-y-2">
                  <li>• Check your email for the download link</li>
                  <li>• Add martin@techseovitals.com to your contacts</li>
                  <li>• You'll receive weekly technical SEO tips starting next week</li>
                </ul>
              </div>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link
                  href="/technical-seo-services/"
                  className="block sm:inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white text-center shadow-md hover:bg-primary-dark transition-all"
                >
                  Explore Services
                </Link>
                <Link
                  href="/book-consultation/"
                  className="block sm:inline-block rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary text-center hover:bg-primary hover:text-white transition-all"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                More Free Resources
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Continue learning with these additional resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technical SEO Checklist
                </h3>
                <p className="text-gray-600 mb-6">
                  50+ actionable items to optimize your website's technical foundation.
                </p>
                <Link
                  href="/technical-seo-checklist/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Get Checklist →
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Migration Checklist
                </h3>
                <p className="text-gray-600 mb-6">
                  Protect your search rankings during website migrations.
                </p>
                <Link
                  href="/website-migration-checklist/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Download Guide →
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Performance Metrics Guide
                </h3>
                <p className="text-gray-600 mb-6">
                  5 web performance metrics every business owner should track.
                </p>
                <Link
                  href="/5-web-performance-metrics-every-business-owner-should-track/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}