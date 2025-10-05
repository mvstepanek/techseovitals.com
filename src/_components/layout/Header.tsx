import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';

interface HeaderProps {
  currentPath?: string;
  t?: (key: string) => string;
}

const Header: React.FC<HeaderProps> = ({ currentPath = '/', t = (key) => key }) => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md">
        {t('nav.skip-to-content')}
      </a>

      <div className={COMMON_STYLES.containerWidth}>
        <div className="flex items-center justify-between py-4">
          <a className="block max-w-[180px]" href="/" aria-label={t('common.aria.home')}>
            <OptimizedImage alt={t('common.alt.logo')} width={200} height={50} className="h-auto w-auto" src="/assets/techseovitals-logo.svg" />
          </a>

          <nav className="hidden lg:flex lg:items-center lg:space-x-8" aria-label={t('common.aria.main-nav')}>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${
                  currentPath === t('url.services') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
                href={t('url.services')}
              >
                {t('nav.services')}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === t('url.services') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${currentPath === t('url.customers') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                href={t('url.customers')}
              >
                {t('nav.customers')}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === t('url.customers') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${currentPath === t('url.newsletter') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                href={t('url.newsletter')}
              >
                {t('nav.newsletter')}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === t('url.newsletter') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${currentPath?.startsWith(t('url.blog')) ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                href={t('url.blog')}
              >
                {t('nav.blog')}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath?.startsWith(t('url.blog')) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${
                  currentPath === t('url.consultant') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
                href={t('url.consultant')}
              >
                {t('nav.about')}
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === t('url.consultant') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <a
              className={`group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-5 py-2.5 text-sm rounded-lg hover:scale-105 hover:shadow-lg ${COMMON_STYLES.gradientBg} text-white shadow-md focus:ring-2 focus:ring-purple-500/30`}
              href={t('url.contact')}
            >
              <span className="relative z-10">{t('nav.contact')}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </nav>

          <button
            type="button"
            className="lg:hidden rounded-lg p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 mobile-menu-toggle"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label={t('nav.open-menu')}
          >
            <Icons.menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav id="mobile-menu" className="mobile-menu hidden lg:hidden border-t border-gray-100 py-4" aria-label={t('common.aria.mobile-nav')}>
          <div className="flex flex-col space-y-4">
            <a
              href={t('url.services')}
              className={`font-medium transition-colors ${currentPath === t('url.services') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              {t('nav.services')}
            </a>
            <a href={t('url.customers')} className={`font-medium transition-colors ${currentPath === t('url.customers') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>
              {t('nav.customers')}
            </a>
            <a href={t('url.newsletter')} className={`font-medium transition-colors ${currentPath === t('url.newsletter') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>
              {t('nav.newsletter')}
            </a>
            <a href={t('url.blog')} className={`font-medium transition-colors ${currentPath?.startsWith(t('url.blog')) ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>
              {t('nav.blog')}
            </a>
            <a
              href={t('url.consultant')}
              className={`font-medium transition-colors ${currentPath === t('url.consultant') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              {t('nav.about')}
            </a>
            <a
              href={t('url.contact')}
              className={`group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-6 py-3 text-base rounded-lg hover:scale-105 hover:shadow-lg ${COMMON_STYLES.gradientBg} text-white shadow-md focus:ring-2 focus:ring-purple-500/30 text-center`}
            >
              <span className="relative z-10">{t('nav.contact')}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
