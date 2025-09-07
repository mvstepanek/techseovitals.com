import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Free Technical SEO Checklist - 50+ Essential Items | TechSEO Vitals',
  description: 'Download our comprehensive technical SEO checklist with 50+ actionable items to improve your website\'s search performance, Core Web Vitals, and user experience.',
}, '/technical-seo-checklist/');

export default function TechnicalSEOChecklist() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Free Technical SEO{' '}
                <span className="text-primary">Checklist</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Comprehensive checklist with 50+ actionable items to optimize your website's technical foundation for better search rankings and user experience.
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

        {/* What's Included Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What's Included in the Checklist
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Everything you need to conduct a comprehensive technical SEO audit
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Core Web Vitals</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Largest Contentful Paint (LCP) optimization</li>
                  <li>• First Input Delay (FID) improvements</li>
                  <li>• Cumulative Layout Shift (CLS) fixes</li>
                  <li>• Performance monitoring setup</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Crawl & Indexation</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• XML sitemap optimization</li>
                  <li>• Robots.txt configuration</li>
                  <li>• Internal linking structure</li>
                  <li>• Crawl budget optimization</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mobile Optimization</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Mobile-first indexing readiness</li>
                  <li>• Responsive design validation</li>
                  <li>• Mobile page speed optimization</li>
                  <li>• Touch target sizing</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Site Architecture</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• URL structure optimization</li>
                  <li>• Navigation and menu structure</li>
                  <li>• Breadcrumb implementation</li>
                  <li>• Site hierarchy planning</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Security & HTTPS</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• SSL certificate implementation</li>
                  <li>• HTTPS migration checklist</li>
                  <li>• Security header configuration</li>
                  <li>• Mixed content resolution</li>
                </ul>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.79 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.79 4 8 4s8-1.79 8-4M4 7c0-2.21 3.79-4 8-4s8 1.79 8 4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Structured Data</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• Schema markup implementation</li>
                  <li>• Rich snippets optimization</li>
                  <li>• JSON-LD validation</li>
                  <li>• Entity markup for local SEO</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Preview Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Checklist Preview
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Here's a sample of what you'll get in the full checklist
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Page Speed Optimization</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Optimize images for web delivery</h4>
                    <p className="text-gray-600 mt-1">Use modern formats (WebP, AVIF), implement lazy loading, and serve appropriately sized images for different screen sizes.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Minify CSS, JavaScript, and HTML</h4>
                    <p className="text-gray-600 mt-1">Remove unnecessary whitespace, comments, and characters to reduce file sizes and improve loading times.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Enable browser caching</h4>
                    <p className="text-gray-600 mt-1">Set appropriate cache headers for static resources to reduce server requests for returning visitors.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input type="checkbox" className="mt-1 h-5 w-5 text-primary border-gray-300 rounded focus:ring-primary" />
                  <div className="ml-4">
                    <h4 className="font-semibold text-gray-900">Implement a Content Delivery Network (CDN)</h4>
                    <p className="text-gray-600 mt-1">Serve static assets from geographically distributed servers to reduce latency and improve loading speeds globally.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-lg">...and 46+ more actionable items!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Download Your Free Checklist
                  </h2>
                  <p className="text-lg text-gray-600">
                    Get instant access to the complete technical SEO checklist with 50+ actionable items.
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
                    <input type="hidden" name="resource" value="technical-seo-checklist" />
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

        {/* Benefits Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Why Use This Checklist?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Improve Search Rankings</h3>
                <p className="text-gray-600">
                  Follow proven technical SEO best practices to help your website rank higher in search results.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Boost Page Speed</h3>
                <p className="text-gray-600">
                  Implement performance optimizations that make your website faster and improve user experience.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Systematic Approach</h3>
                <p className="text-gray-600">
                  Follow a structured methodology to ensure you don't miss critical technical SEO elements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need More Advanced Help?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Get a comprehensive technical SEO audit from an expert. Schedule a free consultation to discuss your website's specific needs.
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