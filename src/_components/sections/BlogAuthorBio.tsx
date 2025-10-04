import React from 'react';
import OptimizedImage from '../common/OptimizedImage';

const BlogAuthorBio: React.FC = () => (
  <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl sm:rounded-3xl border border-gray-200">
    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
      <OptimizedImage
        alt="Martin Stepanek - Technical SEO Expert"
        width={800}
        height={800}
        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex-shrink-0 border-2 border-white shadow-lg mx-auto sm:mx-0"
        src="/assets/images/martin-stepanek-5.jpg"
      />
      <div className="flex-1 text-center sm:text-left">
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1">Martin Stepanek</h3>
        <p className="text-sm text-gray-500 font-semibold mb-3">Technical SEO and Web Performance Consultant</p>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
          With 10+ years building and optimizing websites, I&apos;ve learned that technical excellence drives business success. I help companies maximize their website&apos;s
          potential through strategic technical SEO and performance improvements that create better experiences for users and stronger results for businesses.
        </p>
        <div className="flex justify-center sm:justify-start gap-3 sm:ml-[-4px]">
          <a
            href="https://www.linkedin.com/in/techseovitals/"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 640 640" aria-hidden="true">
              <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
            </svg>
          </a>
          <a
            href="https://bsky.app/profile/techseovitals.com"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Bluesky Profile"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 640 640" aria-hidden="true">
              <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM320 311.4C334.5 281.4 374 225.6 410.7 198.1C437.2 178.2 480 162.9 480 211.8C480 221.6 474.4 293.9 471.1 305.6C459.7 346.4 418.1 356.8 381.1 350.5C445.8 361.5 462.3 398 426.7 434.5C359.2 503.8 329.7 417.1 322.1 394.9L321.8 394C320.9 391.4 320.4 389.9 320 389.9C319.6 389.9 319.1 391.4 318.2 394C318.1 394.3 318 394.6 317.9 394.9C310.3 417.1 280.8 503.7 213.3 434.5C177.8 398 194.2 361.5 258.9 350.5C221.9 356.8 180.3 346.4 168.9 305.6C165.6 293.9 160 221.6 160 211.8C160 162.9 202.9 178.3 229.3 198.1C266 225.6 305.5 281.5 320 311.4z" />
            </svg>
          </a>
          <a
            href="https://youtube.com/@techseovitals"
            className="text-gray-400 hover:text-gray-600 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube Channel"
          >
            <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 640 640" aria-hidden="true">
              <path d="M378 320.2L282.8 266.1L282.8 374.3L378 320.2zM480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96zM494.4 232.1C502 260.7 502 320.3 502 320.3C502 320.3 502 379.9 494.4 408.4C490.2 424.2 477.9 436.1 462.2 440.3C433.9 448 320 448 320 448C320 448 206.1 448 177.8 440.4C162.1 436.2 149.8 424.3 145.6 408.5C138 379.9 138 320.3 138 320.3C138 320.3 138 260.6 145.6 232.1C149.8 216.3 162.1 203.9 177.8 199.7C206.1 192 320 192 320 192C320 192 433.9 192 462.2 199.7C477.9 203.9 490.2 216.3 494.4 232.1z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default BlogAuthorBio;
