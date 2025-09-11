import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import NewsletterSection from '@/components/sections/newsletter-section';
import FinalCTASection from '@/components/sections/final-cta-section';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Blog | TechSEO Vitals With Martin Stepanek',
  description: 'Learn new things about technical SEO and web performance and grow your business.',
}, '/blog/');

// Blog posts from original website
const blogPosts = [
  {
    title: "Why You Should Care About Your TTFB: A Technical SEO Guide to Optimization",
    excerpt: "TTFB optimization is not just a technical exercise; it's a crucial investment in your website's success. Reducing TTFB creates a foundation for an exceptional user experience.",
    date: "2025-08-05",
    readTime: "8 min read",
    category: "Technical SEO",
    slug: "why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization",
    thumbnail: "/images/blog-thumbnails/why-you-should-care-about-your-ttfb.jpg"
  },
  {
    title: "Multilingual Website Essentials: A Technical SEO Guide",
    excerpt: "A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions. However, while businesses focus on translations, the technical foundation often gets overlooked.",
    date: "2025-07-23",
    readTime: "6 min read",
    category: "Technical SEO",
    slug: "multilingual-website-essentials-technical-seo-guide",
    thumbnail: "/images/blog-thumbnails/thumbnail-multilingual-website-essentials.jpg"
  },
  {
    title: "Improving Crawlability: Help Google and ChatGPT Find Your Business Website",
    excerpt: "Crawlability has become a critical challenge as the number of web crawlers and their requirements grow exponentially. When you fall behind on keeping up with these evolving demands, your brand and website can disappear from major platforms, such as Google, Bing and ChatGPT.",
    date: "2025-07-09",
    readTime: "7 min read",
    category: "Technical SEO",
    slug: "improving-crawlability-help-google-and-chatgpt-find-your-business-website",
    thumbnail: "/images/blog-thumbnails/thumbnail-help-google-chatgpt.jpg"
  },
  {
    title: "Technical SEO Checklist for Website Migrations and Redesigns",
    excerpt: "A detailed technical SEO checklist for successfully managing website migrations, minimizing risks, and maintaining business and SEO performance through careful planning and monitoring.",
    date: "2025-06-26",
    readTime: "12 min read",
    category: "Technical SEO",
    slug: "technical-seo-checklist-for-website-migrations-and-redesigns",
    thumbnail: "/images/blog-thumbnails/thumbnail-techseo-checklist-migrations.jpg"
  },
  {
    title: "Essential Technical SEO Monitoring to Protect Your Business",
    excerpt: "Implementing regular Technical SEO Monitoring can save your business significant money and prevent major problems before their impact becomes difficult to reverse.",
    date: "2025-06-12",
    readTime: "7 min read",
    category: "Technical SEO",
    slug: "essential-technical-seo-monitoring-to-protect-your-business",
    thumbnail: "/images/blog-thumbnails/thumbnail-technical-seo-monitoring.jpg"
  },
  {
    title: "Mobile Optimization: The Key to E-commerce Excellence",
    excerpt: "Mobile optimization has transformed online shopping. With over 60% of web traffic from mobile devices and global mobile e-commerce sales projected to reach $4.32 trillion, businesses must prioritize mobile-first design to succeed.",
    date: "2025-05-29",
    readTime: "20 min read",
    category: "Technical SEO",
    slug: "mobile-optimization-the-key-to-e-commerce-excellence",
    thumbnail: "/images/blog-thumbnails/thumbnail-mobile-optimization.jpg"
  },
  {
    title: "The Essential Technical SEO Checklist I Developed for Client Success",
    excerpt: "A comprehensive technical SEO checklist representing the most impactful elements that truly deserve attention, focusing on areas that genuinely matter for search visibility and user experience.",
    date: "2025-05-15",
    readTime: "30 min read",
    category: "Technical SEO",
    slug: "the-essential-technical-seo-checklist-i-developed-for-client-success",
    thumbnail: "/images/blog-thumbnails/essential-technical-seo-checklist.jpg"
  },
  {
    title: "The Invisible Drivers of E-commerce Success: Technical SEO and Web Performance Optimization",
    excerpt: "A comprehensive exploration of how technical SEO and web performance optimization drive e-commerce success, focusing on the critical relationship between site speed, user experience, and conversion rates.",
    date: "2025-05-01",
    readTime: "12 min read",
    category: "Technical SEO",
    slug: "the-invisible-drivers-of-e-commerce-success-technical-seo-and-web-performance-optimization",
    thumbnail: "/images/blog-thumbnails/og-invisible-drivers-of-ecommerce-success.png"
  },
  {
    title: "How Core Web Vitals Boost Your Conversions and Revenue",
    excerpt: "Core Web Vitals are not just technical metrics but powerful indicators of user experience that directly impact business outcomes, with data showing improved scores lead to higher engagement and increased revenue.",
    date: "2025-04-16",
    readTime: "12 min read",
    category: "Technical SEO",
    slug: "how-core-web-vitals-boost-your-conversions-and-revenue",
    thumbnail: "/images/blog-thumbnails/og-boost-your-revenue-by-improving-cwv.jpg"
  },
  {
    title: "Understanding Google and AI Crawling: Why Your Business Might Be Overlooked Online",
    excerpt: "Learn why your business might be invisible online, understand how Google and AI crawlers work, and discover actionable strategies to improve your website's visibility and search rankings.",
    date: "2025-04-02",
    readTime: "15 min read",
    category: "Technical SEO",
    slug: "understanding-google-and-ai-crawling-why-your-business-might-be-overlooked-online",
    thumbnail: "/images/blog-thumbnails/understanding-google-ai-crawling.jpg"
  },
  {
    title: "Why Do Technical SEO and Web Performance Matter for Every Business?",
    excerpt: "Imagine you're an online business investing in ads and attracting thousands of visitors, only for them to leave frustrated because something is wrong. This can be related to technical SEO, web performance, or even accessibility.",
    date: "2025-03-19",
    readTime: "10 min read",
    category: "Technical SEO",
    slug: "why-do-technical-seo-and-web-performance-matter-for-every-business",
    thumbnail: "/images/blog-thumbnails/technical-seo-web-performance-matter.jpg"
  }
];


export default function Blog() {
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
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={post.slug} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <Link href={`/blog/${post.slug}/`} className="block">
                    <div className="relative h-48 w-full">
                      <Image
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </Link>
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                      <span className="text-gray-300">•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <Link href={`/blog/${post.slug}/`}>
                      <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 hover:text-primary transition-colors cursor-pointer">
                        {post.title}
                      </h3>
                    </Link>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>
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