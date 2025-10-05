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
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const BlogCardsSection: React.FC<BlogCardsSectionProps> = ({
  title,
  subtitle,
  posts,
  showBadge = true,
  badgeText,
  t = defaultT,
}) => {
  const actualTitle = title === null ? null : (title || t('blog-cards.title'));
  const actualSubtitle = subtitle === null ? null : (subtitle || t('blog-cards.subtitle'));
  const actualBadgeText = badgeText || t('blog-cards.badge');
  const shouldShowHeader = showBadge || (actualTitle !== null || actualSubtitle !== null);

  return (
    <section className="pt-24 pb-24 bg-white border-t border-gray-200">
      <div className={COMMON_STYLES.containerWidth}>
        {shouldShowHeader && (
          <SectionHeader
            badge={
              showBadge
                ? {
                    icon: <Icons.document className="w-4 h-4" />,
                    text: actualBadgeText,
                  }
                : undefined
            }
            title={actualTitle}
            subtitle={actualSubtitle}
          />
        )}

        <div className={COMMON_STYLES.threeColumnGrid}>
          {posts.map((post) => (
            <article key={post.href} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden">
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
