import Link from 'next/link';
import Image from 'next/image';
import { BlogPostMetadata } from '@/lib/blog';
import { SectionHeader } from '@/components/ui/section-header';
import { designTokens } from '@/lib/design-tokens';

interface BlogPreviewSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  posts: BlogPostMetadata[];
  viewAllText?: string;
  viewAllHref?: string;
  viewAllIcon?: React.ReactNode;
}

export default function BlogPreviewSection({
  badge,
  badgeIcon,
  title,
  description,
  posts,
  viewAllText,
  viewAllHref,
  viewAllIcon
}: BlogPreviewSectionProps) {
  return (
    <section className={`${designTokens.containers.section} ${designTokens.gradients.blogPreview}`}>
      <div className={designTokens.containers.maxWidth}>
        <SectionHeader
          badge={badge}
          badgeIcon={badgeIcon}
          title={title}
          description={description}
        />
        
        <div className={designTokens.grid.blog}>
          {posts.map((post, index) => (
            <article key={post.slug} className={`group ${designTokens.card.elevated} overflow-hidden`}>
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
        
        {viewAllText && viewAllHref && (
          <div className="text-center mt-12">
            <Link
              href={viewAllHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary font-semibold rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-200"
            >
              <span>{viewAllText}</span>
              {viewAllIcon}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}