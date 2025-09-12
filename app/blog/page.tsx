import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import NewsletterSection from '@/components/sections/newsletter-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import { generatePageSEO } from '@/lib/seo';
import { getRecentBlogPosts } from '@/lib/blog';

const seo = generatePageSEO({
  title: 'Blog | TechSEO Vitals With Martin Stepanek',
  description: 'Learn new things about technical SEO and web performance and grow your business.',
}, '/blog/');

export default function Blog() {
  const blogPosts = getRecentBlogPosts(20);
  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/5 via-white to-secondary py-20 lg:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
                Technical SEO{' '}
                <span className="text-primary">Blog</span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 leading-8">
                Learn new things about technical SEO and web performance and grow your business.
              </p>
            </div>
          </div>
        </section>



        {/* Blog Posts Grid */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={post.slug} className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                  <Link href={`/blog/${post.slug}/`}>
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-8">
                      {/* Meta Info */}
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section - From Technical SEO Services */}
        <FinalCTASection
          badge="Ready to Transform Your Business?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title={
            <>
              Turn Your Website Into a <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Revenue Engine</span>
            </>
          }
          description="Stop losing customers to poor performance, search, and AI visibility. Get a comprehensive technical SEO audit and discover exactly how I can boost your conversions and revenue."
          primaryCTA={{
            text: "Schedule Free Consultation",
            href: "/book-consultation/"
          }}
          secondaryCTA={
            <div className="flex items-center justify-center gap-4 text-gray-600">
              <span className="text-sm">✓ Free consultation</span>
              <span className="text-sm">✓ No commitment</span>
            </div>
          }
        />

        {/* Newsletter Section - From Homepage */}
        <NewsletterSection
          badge="Newsletter"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          }
          title={
            <>
              Get <span className="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">Biweekly</span> Technical SEO Insights
            </>
          }
          description="Join business owners, marketers, SEO professionals, and developers who receive actionable technical SEO strategies, performance optimization tips, and revenue-boosting insights every two weeks."
          socialProof={{
            icon: <div className="flex text-yellow-300 text-sm">
              {'★'.repeat(5)}
            </div>,
            text: "250+ people trust this newsletter"
          }}
          disclaimer="No spam, ever. Unsubscribe at any time."
          privacyLink={{
            text: "Privacy Policy",
            href: "/privacy-policy/"
          }}
          termsLink={{
            text: "Terms and Conditions",
            href: "/terms-and-conditions/"
          }}
        />

        <CookieConsent />
      </MainLayout>
    </>
  );
}