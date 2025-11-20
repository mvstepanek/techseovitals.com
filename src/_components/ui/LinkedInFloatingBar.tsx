import React from 'react';
import { SOCIAL_MEDIA, COMMON_STYLES } from '../../_data/constants';

interface LinkedInFloatingBarProps {
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const LinkedInFloatingBar: React.FC<LinkedInFloatingBarProps> = ({ t = defaultT }) => {
  return (
    <div
      id="linkedin-floating-bar"
      className="fixed bottom-0 left-0 right-0 z-50 transform translate-y-full transition-transform duration-300 ease-in-out"
    >
      <div className={`${COMMON_STYLES.gradientBg} shadow-2xl border-t border-white/10`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-3 sm:py-4 gap-3 sm:gap-4">
            {/* Content */}
            <div className="flex items-center gap-2.5 sm:gap-4 flex-1 min-w-0">
              {/* LinkedIn Icon */}
              <div className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-white/20 rounded-lg backdrop-blur-sm flex-shrink-0">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm sm:text-base leading-tight">
                  {t('linkedin-bar.text') || 'Get free SEO & web performance tips'}
                </p>
                <p className="text-white/90 text-xs sm:text-sm hidden sm:block mt-0.5">
                  {t('linkedin-bar.subtitle') || 'Follow me on LinkedIn for expert insights'}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <a
              href={SOCIAL_MEDIA.LINKEDIN_PROFILE}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 bg-white text-purple-600 font-bold px-4 sm:px-6 py-2.5 sm:py-2.5 rounded-lg hover:bg-purple-50 active:scale-95 sm:hover:scale-105 transition-all duration-200 shadow-lg text-sm sm:text-base whitespace-nowrap touch-manipulation"
            >
              {t('linkedin-bar.cta') || 'Follow Me'}
            </a>

            {/* Close Button */}
            <button
              id="linkedin-bar-close"
              className="flex-shrink-0 text-white/80 hover:text-white active:text-white transition-colors duration-200 p-2 sm:p-1 touch-manipulation"
              aria-label="Dismiss"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkedInFloatingBar;
