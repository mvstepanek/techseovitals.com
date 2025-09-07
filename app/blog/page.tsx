import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Technical SEO Blog - Expert Tips & Insights | TechSEO Vitals',
  description: 'Read the latest technical SEO insights, Core Web Vitals optimization tips, and web performance strategies from Martin Štěpánek.',
}, '/blog/');

// Sample blog posts - in a real app, this would come from a CMS or database
const blogPosts = [
  {
    title: "Complete Guide to Core Web Vitals Optimization in 2024",
    excerpt: "Learn how to optimize Largest Contentful Paint (LCP), First Input Delay (FID), and Cumulative Layout Shift (CLS) for better user experience and search rankings.",
    date: "2024-01-15",
    readTime: "12 min read",
    category: "Core Web Vitals",
    slug: "complete-guide-core-web-vitals-optimization-2024"
  },
  {
    title: "JavaScript Performance: Why Your Site is Slow and How to Fix It",
    excerpt: "Discover the most common JavaScript performance issues that slow down websites and learn practical solutions to improve loading times.",
    date: "2024-01-08",
    readTime: "8 min read",
    category: "Performance",
    slug: "javascript-performance-optimization-guide"
  },
  {
    title: "Website Migration Checklist: 15 Steps to Avoid SEO Disasters",
    excerpt: "A comprehensive checklist to ensure your website migration doesn't hurt your search rankings, based on 10+ years of successful projects.",
    date: "2024-01-01",
    readTime: "15 min read",
    category: "Migration",
    slug: "website-migration-checklist-avoid-seo-disasters"
  },
  {
    title: "Mobile-First Indexing: Technical SEO Essentials",
    excerpt: "Everything you need to know about mobile-first indexing and how to optimize your website for Google's mobile-first approach.",
    date: "2023-12-25",
    readTime: "10 min read",
    category: "Mobile SEO",
    slug: "mobile-first-indexing-technical-seo-essentials"
  },
  {
    title: "Image Optimization for Web Performance: WebP, Lazy Loading & More",
    excerpt: "Master image optimization techniques including modern formats, lazy loading, and responsive images for faster websites.",
    date: "2023-12-18",
    readTime: "11 min read",
    category: "Performance",
    slug: "image-optimization-web-performance-guide"
  },
  {
    title: "Structured Data & Schema Markup: Complete Implementation Guide",
    excerpt: "Learn how to implement structured data and schema markup to improve your search engine visibility and rich snippet appearance.",
    date: "2023-12-11",
    readTime: "14 min read",
    category: "Structured Data",
    slug: "structured-data-schema-markup-implementation-guide"
  }
];

const categories = [
  "All Posts",
  "Core Web Vitals",
  "Performance",
  "Migration",
  "Mobile SEO",
  "Structured Data"
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
                Expert insights on technical SEO, Core Web Vitals, and web performance optimization to help your business grow.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Featured Post
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <article className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl p-8 md:p-12">
                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                  <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
                    {blogPosts[0].category}
                  </span>
                  <time>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
                  <span>{blogPosts[0].readTime}</span>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {blogPosts[0].title}
                </h3>
                
                <p className="text-lg text-gray-600 mb-8">
                  {blogPosts[0].excerpt}
                </p>
                
                <Link
                  href={`/blog/${blogPosts[0].slug}/`}
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-white shadow-md hover:bg-primary-dark focus:outline-none focus:ring-4 focus:ring-primary/20 transition-all"
                >
                  Read Full Post
                </Link>
              </article>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-12 bg-gray-50 border-y border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All Posts"
                      ? "bg-primary text-white"
                      : "bg-white text-gray-700 hover:bg-primary hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <article key={post.slug} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                      <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <time>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</time>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="text-primary hover:text-primary-dark font-medium"
                    >
                      Read more →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Never Miss a Post
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get weekly technical SEO insights and new blog posts delivered to your inbox.
              </p>
              
              <div className="max-w-md mx-auto">
                <form action="/thank-you-for-subscribing/" method="POST" className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email address"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/20"
                  >
                    Subscribe
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4">
                  No spam, unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Resources */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Popular Resources
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                Free guides and checklists to improve your technical SEO
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical SEO Checklist</h3>
                <p className="text-gray-600 mb-6">
                  50+ actionable items to optimize your website's technical foundation.
                </p>
                <Link
                  href="/technical-seo-checklist/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Download Free →
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Migration Checklist</h3>
                <p className="text-gray-600 mb-6">
                  Protect your search rankings during website migrations.
                </p>
                <Link
                  href="/website-migration-checklist/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Get Guide →
                </Link>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-xl text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h3>
                <p className="text-gray-600 mb-6">
                  5 web performance metrics every business owner should track.
                </p>
                <Link
                  href="/5-web-performance-metrics-every-business-owner-should-track/"
                  className="text-primary hover:text-primary-dark font-medium"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need Personal Help?
            </h2>
            <p className="mt-4 text-xl text-purple-100 max-w-2xl mx-auto">
              Get a comprehensive technical SEO audit and personalized optimization plan for your website.
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