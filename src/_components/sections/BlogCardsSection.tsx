import React from 'react';
import Badge from '../ui/Badge';

interface BlogPost {
  title: string;
  href: string;
  image: string;
  date: string;
  dateTime: string;
  excerpt: string;
}

interface BlogCardsSectionProps {
  title?: string;
  subtitle?: string;
  posts: BlogPost[];
  showBadge?: boolean;
  badgeText?: string;
}

const BlogCardsSection: React.FC<BlogCardsSectionProps> = ({
  title = 'Latest Technical SEO Insights',
  subtitle = 'Stay ahead with actionable technical SEO strategies, performance optimization tips, and industry best practices.',
  posts,
  showBadge = true,
  badgeText = 'Expert Insights',
}) => {
  return (
    <section className="pt-24 pb-24 bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {(showBadge || title || subtitle) && (
          <div className="text-center mb-16">
            {showBadge && (
              <Badge
                icon={
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                }
              >
                {badgeText}
              </Badge>
            )}

            {title && (
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
                {title.includes('Technical SEO') ? (
                  <>
                    Latest{' '}
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      Technical SEO
                    </span>{' '}
                    Insights
                  </>
                ) : (
                  title
                )}
              </h2>
            )}

            {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <a href={post.href}>
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    alt={post.title}
                    loading="lazy"
                    width="800"
                    height="400"
                    decoding="async"
                    className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    src={post.image}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.dateTime}>{post.date}</time>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogCardsSection;
