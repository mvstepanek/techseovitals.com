import Link from 'next/link';
import Image from 'next/image';
import MainLayout from '@/components/layout/main-layout';
import SEOHead from '@/components/seo/seo-head';
import CookieConsent from '@/components/ui/cookie-consent';
import FinalCTASection from '@/components/sections/final-cta-section';
import { generatePageSEO } from '@/lib/seo';
import { BlogPost } from '@/lib/blog';

interface BlogPostTemplateProps {
  post: BlogPost;
}

export default function BlogPostTemplate({ post }: BlogPostTemplateProps) {
  const seo = generatePageSEO({
    title: `${post.title} | TechSEO Vitals`,
    description: post.description,
  }, `/blog/${post.slug}/`);

  return (
    <>
      <SEOHead seo={seo} />
      <MainLayout>
        {/* Hero Section */}
        <article className="bg-gradient-to-br from-primary/5 via-white to-secondary">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="text-center mb-16">
              {/* Breadcrumb */}
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-6">
                <Link href="/blog/" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </div>

              {/* Meta information */}
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-gray-300">•</span>
                <span>By {post.author}</span>
              </div>
              
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl mb-8">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-8 max-w-3xl mx-auto">
                {post.description}
              </p>
            </div>

            {/* Featured Image */}
            {post.image && (
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full rounded-3xl shadow-2xl border-4 border-white object-cover"
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </article>

        {/* Article Content */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-700 prose-p:leading-8 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-primary prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-blockquote:border-l-primary prose-blockquote:border-l-4 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border border-gray-200">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-primary">M</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About Martin Štěpánek</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Technical SEO consultant helping businesses improve their search visibility and website performance. 
                    With a background in web development and years of SEO experience, I focus on the technical aspects 
                    that drive real results.
                  </p>
                  <div className="flex gap-4">
                    <Link 
                      href="/technical-seo-consultant/" 
                      className="text-primary hover:text-primary-dark font-semibold transition-colors"
                    >
                      Learn More About Martin →
                    </Link>
                    <Link 
                      href="/book-consultation/" 
                      className="text-primary hover:text-primary-dark font-semibold transition-colors"
                    >
                      Book Consultation →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Posts Navigation */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link 
                  href="/blog/" 
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  All Blog Posts
                </Link>
                <div className="text-sm text-gray-500">
                  Share this post on{' '}
                  <a 
                    href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://www.techseovitals.com/blog/${post.slug}/`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-dark font-semibold"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <FinalCTASection
          badge="Ready to Get Started?"
          badgeIcon={
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          }
          title={
            <>
              Let's Transform Your Website Into a <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Revenue Engine</span>
            </>
          }
          description="Don't let technical issues hold your business back. Get expert technical SEO guidance and turn your website into your most powerful sales tool."
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

        <CookieConsent />
      </MainLayout>
    </>
  );
}