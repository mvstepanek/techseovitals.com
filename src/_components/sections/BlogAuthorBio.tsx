import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import Icons from '../ui/Icons';

interface BlogAuthorBioProps {
  t?: (key: string) => string;
}

const BlogAuthorBio: React.FC<BlogAuthorBioProps> = ({ t = (key) => key }) => (
  <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl border border-gray-200">
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
      <OptimizedImage
        alt="Martin Stepanek"
        width={800}
        height={800}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 border-2 border-white shadow-lg mx-auto sm:mx-0"
        src="/assets/images/martin-stepanek-5.jpg"
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">{t('blog.author.name')}</h3>
        <p className="text-sm text-gray-500 font-semibold mb-3">{t('blog.author.title')}</p>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
          {t('blog.author.bio')}
        </p>
        <div className="flex justify-center sm:justify-start gap-3 sm:ml-[-4px]">
          <a
            href="https://www.linkedin.com/in/techseovitals/"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <Icons.linkedin className="h-8 w-8" aria-hidden="true" />
          </a>
          <a
            href="https://bsky.app/profile/techseovitals.com"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky Profile"
          >
            <Icons.bluesky className="h-8 w-8" aria-hidden="true" />
          </a>
          <a
            href="https://youtube.com/@techseovitals"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
          >
            <Icons.youtube className="h-8 w-8" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogAuthorBio;
