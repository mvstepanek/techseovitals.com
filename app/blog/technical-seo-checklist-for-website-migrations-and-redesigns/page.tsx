import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Technical SEO Checklist for Website Migrations and Redesigns | TechSEO Vitals',
  description: 'A detailed technical SEO checklist for successfully managing website migrations, minimizing risks, and maintaining business and SEO performance through careful planning and monitoring.',
}, '/blog/technical-seo-checklist-for-website-migrations-and-redesigns/');

export default function TechnicalSEOChecklistMigrations() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <article className="bg-gradient-to-br from-primary/5 via-white to-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                <time>June 26, 2025</time>
                <span className="text-gray-300">•</span>
                <span>12 min read</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
                Technical SEO Checklist for{' '}
                <span className="text-primary">Website Migrations</span>{' '}
                and Redesigns
              </h1>
              
              <p className="text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
                A detailed technical SEO checklist for successfully managing website migrations, minimizing risks, and maintaining business and SEO performance through careful planning and monitoring.
              </p>
            </div>
          </div>
        </article>

        {/* Article Content */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg leading-8 text-gray-700">
                  Website migrations and redesigns represent critical moments for any business's online presence. Whether you're changing domains, restructuring your site architecture, or implementing a complete visual overhaul, these transitions carry significant risks that can impact your search rankings, user experience, and ultimately, your revenue.
                </p>
                
                <p className="text-lg leading-8 text-gray-700 mt-6">
                  This comprehensive checklist has been developed through years of experience managing complex migrations for businesses of all sizes. It provides a systematic approach to ensure your migration preserves SEO value while achieving your business objectives.
                </p>
              </div>

              {/* Placeholder Content */}
              <div className="mb-16 bg-gray-50 p-8 rounded-xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Pre-Migration Planning</h2>
                <p className="text-gray-700 mb-6">
                  [Content placeholder: Detailed pre-migration planning steps including inventory assessment, timeline development, and risk analysis]
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Technical Implementation</h2>
                <p className="text-gray-700 mb-6">
                  [Content placeholder: Technical implementation guidelines including redirects, crawl management, and server configuration]
                </p>
                
                <h2 className="text-3xl font-bold text-gray-900 mb-8 mt-12">Post-Migration Monitoring</h2>
                <p className="text-gray-700">
                  [Content placeholder: Post-migration monitoring strategies including performance tracking, error identification, and recovery procedures]
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Planning a Website Migration?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Get expert guidance to ensure your migration preserves SEO value and achieves your business goals without risking your search rankings.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/book-consultation/"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Schedule Migration Consultation
              </Link>
              <Link
                href="/technical-seo-checklist/"
                className="rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-primary transition-all"
              >
                Get Complete SEO Checklist
              </Link>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                More Technical SEO Guides
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <time>July 9, 2025</time>
                    <span className="text-gray-300">•</span>
                    <span>12 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Improving Crawlability: Help Google and ChatGPT Find Your Business Website
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    Crawlability has become a critical challenge as the number of web crawlers and their requirements grow exponentially.
                  </p>
                  
                  <Link
                    href="/blog/improving-crawlability-help-google-and-chatgpt-find-your-business-website/"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
              
              <article className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <time>July 23, 2025</time>
                    <span className="text-gray-300">•</span>
                    <span>6 min read</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Multilingual Website Essentials: A Technical SEO Guide
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions.
                  </p>
                  
                  <Link
                    href="/blog/multilingual-website-essentials-technical-seo-guide/"
                    className="text-primary hover:text-primary-dark font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}