import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Contact Martin Štěpánek - Technical SEO Consultant | Get In Touch',
  description: 'Contact Martin Štěpánek for technical SEO consulting, website performance optimization, and Core Web Vitals improvement. Multiple ways to get in touch for your project needs.',
  jsonLd: generateOrganizationJsonLd(),
}, '/contact/');

export default function Contact() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Main Content */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                I'm Here to Help Your Business Succeed!
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-8">
                If you want to learn more about technical SEO and web performance, follow me on{' '}
                <a href="https://linkedin.com/in/martin-stepanek-techseo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  LinkedIn
                </a>
                ,{' '}
                <a href="https://bsky.app/profile/techseovitals.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  Bluesky
                </a>
                , Threads or{' '}
                <a href="https://youtube.com/@techseovitals" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                  YouTube
                </a>
                !
              </p>

              <p className="text-lg text-gray-600 mb-8">
                For deeper insights, check out my{' '}
                <Link href="/blog/" className="text-primary hover:text-primary-dark">
                  blog
                </Link>
                .
              </p>

              <p className="text-lg text-gray-600 mb-12">
                If you need help with anything related to technical SEO and web performance, just send me an email.
              </p>

              {/* Billing Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Billing Information:</h2>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="mb-2"><strong>mountain explorer, s. r. o.</strong></p>
                  <p className="mb-2">Karpatske namestie 7770/10A</p>
                  <p className="mb-2">83106 Bratislava</p>
                  <p className="mb-2">Slovakia (European Union)</p>
                  <p className="mb-2"><strong>ID:</strong> 53226119</p>
                  <p><strong>VAT ID:</strong> SK2121306704</p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information:</h2>
                <p className="text-lg">
                  <a href="mailto:martin@techseovitals.com" className="text-primary hover:text-primary-dark">
                    martin@techseovitals.com
                  </a>
                </p>
                <p className="text-lg mt-2">
                  <strong>LinkedIn:</strong>{' '}
                  <a href="https://linkedin.com/in/martin-stepanek-techseo/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">
                    /in/martin-stepanek-techseo/
                  </a>
                </p>
              </div>

              {/* Testimonials Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Testimonials Section:</h2>
                
                <div className="space-y-8">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Testimonial 1 (Viktor Zeman, CEO, LiveAgent & Post Affiliate Pro):</h3>
                    <p className="text-gray-600 italic">
                      "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites."
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Testimonial 2 (Daniel Pison, CMO, Quality Unit):</h3>
                    <p className="text-gray-600 italic">
                      "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in website quality. I consider him one of the greatest technical SEO experts on the market."
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Section */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Newsletter Section:</h2>
                <p className="text-lg text-gray-600 mb-6">
                  "Improve conversions and increase your revenue through your website! Get free insights to help you maximize your website's potential."
                </p>
                <Link 
                  href="/newsletter/"
                  className="inline-block bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Subscribe Now
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