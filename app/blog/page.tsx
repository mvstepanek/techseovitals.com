import Image from 'next/image';
import Link from 'next/link';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import { generatePageSEO } from '@/lib/seo';

const seo = generatePageSEO({
  title: 'Blog | TechSEO Vitals With Martin Stepanek',
  description: 'Learn new things about technical SEO and web performance and grow your business.',
}, '/blog/');

// Blog posts from original website
const blogPosts = [
  {
    title: "Why You Should Care About Your TTFB: A Technical SEO Guide to Optimization",
    excerpt: "Time to First Byte, commonly known as TTFB, stands as the most critical metric in technical SEO and overall web performance.",
    date: "2025-08-05",
    readTime: "8 min read",
    category: "Technical SEO",
    slug: "why-you-should-care-about-your-ttfb-technical-seo-guide-to-optimization",
    thumbnail: "/images/blog-thumbnails/ttfb-thumbnail.jpg"
  },
  {
    title: "Multilingual Website Essentials: A Technical SEO Guide",
    excerpt: "A multilingual website allows visitors to experience your content in their native language, creating trust and connection that drives conversions.",
    date: "2025-07-23",
    readTime: "10 min read",
    category: "Technical SEO",
    slug: "multilingual-website-essentials-technical-seo-guide",
    thumbnail: "/images/blog-thumbnails/multilingual-thumbnail.jpg"
  },
  {
    title: "Improving Crawlability: Help Google and ChatGPT Find Your Business Website",
    excerpt: "Crawlability has become a critical challenge as the number of web crawlers and their requirements grow exponentially.",
    date: "2025-07-09",
    readTime: "12 min read",
    category: "Technical SEO",
    slug: "improving-crawlability-help-google-and-chatgpt-find-your-business-website",
    thumbnail: "/images/blog-thumbnails/crawlability-thumbnail.jpg"
  }
];

const categories = [
  "All Posts",
  "Technical SEO"
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

        {/* Featured Post */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                Featured Post
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <article className="bg-gradient-to-br from-primary/5 to-secondary rounded-2xl overflow-hidden">
                <div className="relative h-64 w-full">
                  <Image
                    src={blogPosts[0].thumbnail}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 md:p-12">
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
                </div>
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
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
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
                TechSEO Vitals Newsletter
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Improve conversions and increase your revenue through your website! Get free insights to help you maximize your website's potential.
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
                    Subscribe Now
                  </button>
                </form>
                <p className="text-sm text-gray-500 mt-4">
                  No spam, unsubscribe at any time.
                </p>
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