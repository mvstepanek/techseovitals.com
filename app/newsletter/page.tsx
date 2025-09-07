import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO, generateOrganizationJsonLd } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Newsletter Signup - TechSEO Vitals | Get Weekly Technical SEO Tips',
  description: 'Join thousands of businesses getting weekly technical SEO insights, performance optimization tips, and Core Web Vitals updates from Martin Štěpánek.',
  jsonLd: generateOrganizationJsonLd(),
}, '/newsletter/');

export default function Newsletter() {
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Weekly Technical SEO{' '}
                <span className="text-primary">Newsletter</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Get actionable technical SEO insights, performance optimization tips, and Core Web Vitals updates delivered to your inbox every week.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Form Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Join 2,000+ Subscribers
                </h2>
                <p className="text-lg text-gray-600">
                  Get weekly insights on technical SEO, website performance, and search optimization.
                </p>
              </div>

              {/* Newsletter Form */}
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
                  <button
                    type="submit"
                    className="w-full bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20"
                  >
                    Subscribe to Newsletter
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
        </section>

        {/* What You'll Get Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What You'll Get
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Valuable insights delivered every week
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Actionable Tips</h3>
                <p className="text-gray-600">
                  Practical technical SEO strategies you can implement immediately to improve your website's performance.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Updates</h3>
                <p className="text-gray-600">
                  Latest updates on Core Web Vitals, Google algorithm changes, and web performance best practices.
                </p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Case Studies</h3>
                <p className="text-gray-600">
                  Real-world examples and case studies showing how technical SEO improvements drive business results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Content Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Recent Newsletter Topics
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                See what subscribers are learning about
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Core Web Vitals Optimization
                </h3>
                <p className="text-gray-600 mb-4">
                  Step-by-step guide to improving your Largest Contentful Paint (LCP) scores for better user experience.
                </p>
                <div className="text-sm text-primary font-medium">Week 1</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  JavaScript Performance Issues
                </h3>
                <p className="text-gray-600 mb-4">
                  Common JavaScript problems that slow down websites and how to fix them without breaking functionality.
                </p>
                <div className="text-sm text-primary font-medium">Week 2</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Mobile-First Indexing
                </h3>
                <p className="text-gray-600 mb-4">
                  Technical considerations for mobile-first indexing and how to ensure your mobile site ranks well.
                </p>
                <div className="text-sm text-primary font-medium">Week 3</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Image Optimization Strategies
                </h3>
                <p className="text-gray-600 mb-4">
                  Advanced image optimization techniques including WebP, lazy loading, and responsive images.
                </p>
                <div className="text-sm text-primary font-medium">Week 4</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Technical SEO Auditing
                </h3>
                <p className="text-gray-600 mb-4">
                  Complete checklist for conducting thorough technical SEO audits that uncover hidden issues.
                </p>
                <div className="text-sm text-primary font-medium">Week 5</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Website Migration Best Practices
                </h3>
                <p className="text-gray-600 mb-4">
                  Essential steps to ensure your website migration doesn't hurt your search rankings.
                </p>
                <div className="text-sm text-primary font-medium">Week 6</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                What Subscribers Say
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-700 italic mb-6">
                  "Martin's weekly newsletter has become essential reading for our dev team. The technical insights are always practical and immediately actionable."
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Chen</div>
                    <div className="text-gray-600">Technical Lead, E-commerce Startup</div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <p className="text-gray-700 italic mb-6">
                  "I've implemented several performance optimizations from Martin's newsletter. Our page speed scores have improved significantly!"
                </p>
                <div className="flex items-center">
                  <div>
                    <div className="font-semibold text-gray-900">Mike Rodriguez</div>
                    <div className="text-gray-600">SEO Manager, SaaS Company</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Improve Your Technical SEO?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Join thousands of professionals getting weekly technical SEO insights.
            </p>
            <div className="mt-10">
              <Link
                href="#newsletter-form"
                className="rounded-lg bg-white px-8 py-4 text-lg font-semibold text-primary shadow-md hover:bg-gray-50 transition-all"
              >
                Subscribe Now
              </Link>
            </div>
          </div>
        </section>

        <CookieConsent />
      </MainLayout>
    </>
  );
}