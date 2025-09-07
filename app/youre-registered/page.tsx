import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: "You're Registered - TechSEO Vitals",
  description: 'Thank you for registering for our webinar. Check your email for joining instructions.',
  robots: 'noindex, nofollow',
}, '/youre-registered/');

export default function YoureRegistered() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Registration Confirmation */}
        <section className="py-32 bg-gradient-to-br from-primary/5 via-white to-secondary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-green-100 rounded-full mb-8">
                <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                You're Registered!
              </h1>
              
              <p className="text-xl text-gray-600 leading-8 mb-8">
                Thank you for registering for our webinar. I've sent the joining instructions and calendar invite to your email address.
              </p>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h2 className="text-lg font-semibold text-blue-900 mb-4">Webinar Details</h2>
                <div className="text-left text-blue-800 space-y-2">
                  <p><strong>Topic:</strong> Why Your Mobile Web Performance Determines Your Revenue</p>
                  <p><strong>Duration:</strong> 45 minutes + Q&A</p>
                  <p><strong>What to expect:</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Real case studies with measurable results</li>
                    <li>Mobile performance optimization strategies</li>
                    <li>Tools and techniques you can use immediately</li>
                    <li>Live Q&A session</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-yellow-900 mb-2">Before the Webinar</h3>
                <ul className="text-yellow-800 space-y-2">
                  <li>• Check your email for the calendar invite and joining link</li>
                  <li>• Add martin@techseovitals.com to your contacts</li>
                  <li>• Test your audio/video setup in advance</li>
                  <li>• Prepare any questions you'd like to ask</li>
                </ul>
              </div>
              
              <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
                <Link
                  href="/newsletter/"
                  className="block sm:inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white text-center shadow-md hover:bg-primary-dark transition-all"
                >
                  Subscribe to Newsletter
                </Link>
                <Link
                  href="/technical-seo-services/"
                  className="block sm:inline-block rounded-lg border-2 border-primary px-8 py-4 text-lg font-semibold text-primary text-center hover:bg-primary hover:text-white transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Resources */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Prepare for the Webinar
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Get a head start with these free resources
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Web Performance Metrics Guide
                </h3>
                <p className="text-gray-600 mb-6">
                  Learn the 5 critical metrics that directly impact your mobile revenue before the webinar.
                </p>
                <Link
                  href="/5-web-performance-metrics-every-business-owner-should-track/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Download Guide →
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Technical SEO Checklist
                </h3>
                <p className="text-gray-600 mb-6">
                  50+ actionable items to optimize your website's mobile performance foundation.
                </p>
                <Link
                  href="/technical-seo-checklist/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Get Checklist →
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