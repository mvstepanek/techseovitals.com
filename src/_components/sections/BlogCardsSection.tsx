import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';

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
      <div className={COMMON_STYLES.containerWidth}>
        {(showBadge || title || subtitle) && (
          <SectionHeader
            badge={
              showBadge
                ? {
                    icon: <Icons.document className="w-4 h-4" />,
                    text: badgeText,
                  }
                : undefined
            }
            title={
              title &&
              (title.includes('Technical SEO') ? (
                <>
                  Latest <span>Technical SEO</span> Insights
                </>
              ) : (
                title
              ))
            }
            subtitle={subtitle}
          />
        )}

        <div className={COMMON_STYLES.threeColumnGrid}>
          {posts.map((post, index) => (
            <article key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
              <a href={post.href}>
                <div className="relative h-48 w-full overflow-hidden">
                  <OptimizedImage
                    alt={post.title}
                    width={800}
                    height={400}
                    className="object-cover group-hover:scale-105 transition-transform duration-300 w-full h-full"
                    responsive={true}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    src={post.image}
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <time dateTime={post.dateTime}>{post.date}</time>
                  </div>
                  <h3 className="text-xl font-display font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-brand-600 transition-colors">{post.title}</h3>
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
