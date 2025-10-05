import React from 'react';
import OptimizedImage from '../common/OptimizedImage';

interface BlogPostHeaderProps {
  title?: string;
  description?: string;
  date?: string;
  permalink?: string;
  image?: string;
  locale?: string;
  domain?: string;
  t?: (key: string) => string;
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({ title, description, date, permalink, image, locale = 'en', domain = 'https://www.techseovitals.com', t = (key) => key }) => (
  <article className="bg-gradient-to-br from-primary-500/5 via-white to-primary-600/5">
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 xl:pt-24 2xl:pt-32 pb-6 sm:pb-8 lg:pb-12">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16">
        {date && (
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4 sm:mb-6">
            <time dateTime={date}>
              {new Date(date).toLocaleDateString(locale === 'sk' ? 'sk-SK' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 sm:mb-8 leading-tight">{title}</h1>
        {description && <p className="text-lg sm:text-lg text-gray-600 leading-7 sm:leading-8 max-w-3xl mx-auto">{description}</p>}
      </div>
      <div className="relative">
        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-2xl opacity-30" />
        <div className="relative">
          <OptimizedImage
            alt={title}
            width={800}
            height={400}
            className="w-full rounded-3xl shadow-2xl border-4 border-white object-cover"
            src={image || `/assets/images/blog/${permalink?.split('/').filter(Boolean).pop()}.jpg`}
            responsive={true}
            sizes="(max-width: 768px) 100vw, 800px"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <div className="text-sm text-gray-500">
          {t('blog.share-on')}{' '}
          <a
            href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(domain + permalink)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-500 hover:text-primary-700 font-semibold"
          >
            {t('footer.social.linkedin')}
          </a>
        </div>
      </div>
    </div>
  </article>
);

export default BlogPostHeader;
