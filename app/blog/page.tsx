import Link from 'next/link';
import Image from 'next/image';
import { MarketingPage } from '@/components/templates/marketing-page';
import { Icons } from '@/components/ui';
import { ctaContent } from '@/data/cta-content';
import { generatePageSEO } from '@/lib/seo';
import { getRecentBlogPosts } from '@/lib/blog';
import { designTokens } from '@/lib/design-tokens';
import NewsletterSection from '@/components/sections/newsletter-section';

const seo = generatePageSEO({
  title: 'Blog | TechSEO Vitals With Martin Stepanek',
  description: 'Learn new things about technical SEO and web performance and grow your business.',
}, '/blog/');

export default function Blog() {
  const blogPosts = getRecentBlogPosts(20);
  return (
    <MarketingPage
      seo={seo}
      hero={{
        badge: "Expert Insights",
        badgeIcon: <Icons.Document size="sm" />,
        title: (
          <>
            Technical SEO{' '}
            <span className={designTokens.gradients.primaryText}>Blog</span>
          </>
        ),
        description: "Learn new things about technical SEO and web performance and grow your business. Get actionable insights, tips, and strategies."
      }}
      finalCTA={ctaContent.primary}
    >



        <section id="blog-posts" className={`${designTokens.containers.section} bg-gradient-to-br from-slate-50 to-blue-50/30`}>
          <div className={designTokens.containers.maxWidth}>
            <div className={designTokens.grid.blog}>
              {blogPosts.map((post) => (
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


        <NewsletterSection
          badge="Newsletter"
          badgeIcon={<Icons.Mail size="sm" />}
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
    </MarketingPage>
  );
}