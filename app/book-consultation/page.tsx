import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Schedule Your Free Initial Consultation | TechSEO Vitals',
  description: 'Book a free technical SEO and web performance consultation for your business.',
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
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Schedule Your{' '}
                <span className="text-primary">Free Initial</span>{' '}
                Consultation
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Book a free technical SEO and web performance consultation for your business.
              </p>
            </div>
          </div>
        </section>

        {/* Simple Form Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <p className="text-lg text-gray-600">
                Please provide your website URL and relevant information. This will help me prepare thoroughly and make the most of our time together.
              </p>
            </div>
            
            <form className="space-y-6" action="/thank-you-for-booking/" method="POST">
              <div>
                <textarea
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Please provide your website URL and relevant information about your business and technical SEO needs..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary text-white font-semibold py-4 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20 text-lg"
              >
                Submit Consultation Request
              </button>
              
              <div className="text-center space-y-2">
                <p className="text-sm text-gray-500">
                  By submitting the form, I agree to the{' '}
                  <Link href="/privacy-policy/" className="text-primary hover:text-primary-dark">
                    Privacy Policy
                  </Link>
                  {' '}and{' '}
                  <Link href="/terms-and-conditions/" className="text-primary hover:text-primary-dark">
                    Terms and Conditions
                  </Link>
                  .
                </p>
                <p className="text-sm text-gray-500">
                  We reserve the right to reschedule or cancel the booking.
                </p>
              </div>
            </form>
          </div>
        </section>


        <CookieConsent />
      </MainLayout>
    </>
  );
}