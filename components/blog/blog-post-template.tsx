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
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 pb-8 lg:pb-12">
            <div className="text-center mb-16">
              {/* Meta information */}
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-6">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
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

            {/* Share */}
            <div className="mt-4 flex justify-end">
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
        </article>

        {/* Article Content */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div 
              className="text-lg leading-7 text-gray-700 max-w-none
              [&>h2]:text-3xl [&>h2]:font-extrabold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:leading-tight [&>h2]:tracking-tight
              [&>h3]:text-2xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-4 [&>h3]:leading-snug
              [&>p]:mb-6 [&>p]:leading-7 [&>p]:text-gray-700
              [&>ul]:my-6 [&>ul]:pl-6 [&>ul]:list-disc [&>ul]:list-outside [&>ul]:space-y-2
              [&>ol]:my-6 [&>ol]:pl-6 [&>ol]:list-decimal [&>ol]:list-outside [&>ol]:space-y-2
              [&>ul>li]:leading-relaxed [&>ul>li]:text-gray-700 [&>ul>li]:mb-2 [&>ul>li]:ml-0
              [&>ol>li]:leading-relaxed [&>ol>li]:text-gray-700 [&>ol>li]:mb-2 [&>ol>li]:ml-0
              [&>a]:text-primary [&>a]:no-underline [&>a]:font-medium hover:[&>a]:underline
              [&>strong]:text-gray-900 [&>strong]:font-semibold
              [&>code]:text-primary [&>code]:bg-gray-100 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>code]:font-medium
              [&>pre]:bg-gray-900 [&>pre]:text-gray-100 [&>pre]:rounded-xl [&>pre]:p-4 [&>pre]:my-6 [&>pre]:overflow-x-auto [&>pre]:font-mono [&>pre]:text-sm
              [&>pre>code]:bg-transparent [&>pre>code]:text-inherit [&>pre>code]:p-0 [&>pre>code]:rounded-none
              [&>blockquote]:relative [&>blockquote]:bg-white [&>blockquote]:border [&>blockquote]:border-gray-200 [&>blockquote]:rounded-xl [&>blockquote]:px-6 [&>blockquote]:py-5 [&>blockquote]:my-8 [&>blockquote]:shadow-md [&>blockquote]:shadow-gray-100 [&>blockquote]:text-gray-800 [&>blockquote]:font-medium [&>blockquote]:text-lg [&>blockquote]:leading-relaxed [&>blockquote]:before:absolute [&>blockquote]:before:top-0 [&>blockquote]:before:left-0 [&>blockquote]:before:w-1 [&>blockquote]:before:h-full [&>blockquote]:before:bg-gradient-to-b [&>blockquote]:before:from-primary [&>blockquote]:before:to-purple-600 [&>blockquote]:before:rounded-l-xl
              [&>hr]:border-0 [&>hr]:border-t [&>hr]:border-gray-200 [&>hr]:my-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Author Bio */}
            <div className="mt-16 p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl border border-gray-200">
              <div className="flex items-start gap-6">
                <Image
                  src="/images/martin-stepanek-seo.jpg"
                  alt="Martin Stepanek - Technical SEO Expert"
                  width={80}
                  height={80}
                  className="w-20 h-20 rounded-full flex-shrink-0 border-2 border-white shadow-lg"
                />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">About Martin Stepanek</h3>
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
                  </div>
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