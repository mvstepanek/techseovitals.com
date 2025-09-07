import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generatePersonJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'About Martin Štěpánek - Technical SEO & Web Performance Consultant',
  description: 'Meet Martin Štěpánek, expert Technical SEO consultant with 10+ years experience. Specializing in Core Web Vitals, page speed optimization, and helping businesses grow through better website performance.',
  jsonLd: generatePersonJsonLd(),
}, '/technical-seo-consultant/');

export default function TechnicalSEOConsultant() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="py-20 lg:py-32 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-8">
              About Martin Stepanek
            </h1>
            <div className="prose prose-lg mx-auto text-gray-600 max-w-3xl">
              <p className="text-xl mb-8">
                Martin Stepanek is a technical SEO and web performance consultant with over 10 years of web development experience. He specializes in web performance optimization to maximize website revenue potential through enhanced user experience.
              </p>
              <p className="text-lg mb-6">
                Passionate about performance optimization and technical SEO, Martin's experience comes primarily from in-house roles and freelancing. He provides actionable task lists with detailed guidance, prioritizing tasks based on client's internal resources.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Services Offered
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO Audit</h3>
                <p className="text-3xl font-bold text-primary mb-4">Starting at $2,500</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Identify technical SEO and performance improvement areas</li>
                  <li>• Provide tailored strategy</li>
                  <li>• 60-minute consultation</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Technical SEO Monitoring</h3>
                <p className="text-3xl font-bold text-primary mb-4">Starting at $2,000/month</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Continuous website monitoring</li>
                  <li>• Prevent potential performance issues</li>
                  <li>• 60-minute consultation</li>
                </ul>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Website Migration Plan</h3>
                <p className="text-3xl font-bold text-primary mb-4">Starting at $4,500</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• Detailed migration plan</li>
                  <li>• Risk management</li>
                  <li>• Post-migration audit</li>
                  <li>• Continuous support</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Testimonials
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Viktor Zeman (CEO, LiveAgent & Post Affiliate Pro)</h3>
                <p className="text-gray-700 italic">
                  "Martin's development background established a foundation for implementing sophisticated strategies..."
                </p>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Daniel Pison (CMO, Quality Unit)</h3>
                <p className="text-gray-700 italic">
                  "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors..."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                FAQ Highlights
              </h2>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How is pricing determined?
                </h3>
                <p className="text-gray-600">
                  Pricing varies by site complexity and specific requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  How long does it take to see results?
                </h3>
                <p className="text-gray-600">
                  Results typically take weeks to months, depending on the complexity of implementations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Are there long-term commitments?
                </h3>
                <p className="text-gray-600">
                  No long-term commitments (except 3-month minimum for monitoring services).
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  What determines strategy success?
                </h3>
                <p className="text-gray-600">
                  Client implementation is crucial to strategy success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Highlights Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Blog Highlights
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Why You Should Care About Your TTFB
                </h3>
                <p className="text-gray-600">
                  Understanding Time to First Byte and its impact on website performance.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Multilingual Website Essentials
                </h3>
                <p className="text-gray-600">
                  Key considerations for optimizing multilingual websites for search engines.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Improving Crawlability for Google and ChatGPT
                </h3>
                <p className="text-gray-600">
                  Strategies for enhancing website crawlability for both traditional and AI search.
                </p>
              </div>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}