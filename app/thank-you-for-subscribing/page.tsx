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
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              Welcome to TechSEO Vitals Community!
            </h1>
            
            <h2 className="text-2xl font-semibold text-gray-700 mb-12">
              If you subscribed to receive a free copy of the checklist, you'll get the link in your inbox soon!
            </h2>
            
            <div className="mb-12">
              <p className="text-lg text-gray-600 mb-6">
                Follow TechSEO Vitals on social media platforms:
              </p>
              
              <div className="flex justify-center space-x-6 mb-8">
                <a
                  href="https://youtube.com/@techseovitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  YouTube
                </a>
                <a
                  href="https://linkedin.com/in/techseovitals"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  LinkedIn
                </a>
                <a
                  href="https://bsky.app/profile/techseovitals.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Bluesky
                </a>
              </div>
            </div>
            
            <div className="mb-12">
              <p className="text-lg text-gray-600 mb-8">
                <strong>Martin Stepanek</strong> - Experienced technical SEO and web performance consultant with over a decade of web development experience.
              </p>
              
              <Link
                href="/book-consultation/"
                className="inline-block rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark transition-all"
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