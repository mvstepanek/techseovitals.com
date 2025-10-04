import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';

interface HeaderProps {
  currentPath?: string;
}

const Header: React.FC<HeaderProps> = ({ currentPath = '/' }) => {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm">
      {/* Skip to content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md">
        Skip to main content
      </a>

      <div className={COMMON_STYLES.containerWidth}>
        <div className="flex items-center justify-between py-4">
          <a className="block max-w-[180px]" href="/" aria-label="TechSEO Vitals Home">
            <OptimizedImage alt="TechSEO Vitals" width={200} height={50} className="h-auto w-auto" src="/assets/techseovitals-logo.svg" />
          </a>

          <nav className="hidden lg:flex lg:items-center lg:space-x-8" aria-label="Main navigation">
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${
                  currentPath === '/technical-seo-services/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
                href="/technical-seo-services/"
              >
                Services
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === '/technical-seo-services/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${currentPath === '/customers/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                href="/customers/"
              >
                Customers
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === '/customers/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${currentPath === '/newsletter/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                href="/newsletter/"
              >
                Newsletter
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === '/newsletter/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${currentPath?.startsWith('/blog/') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
                href="/blog/"
              >
                Blog
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath?.startsWith('/blog/') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <div className="relative group">
              <a
                className={`relative font-medium transition-all duration-200 py-2 ${
                  currentPath === '/technical-seo-consultant/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
                href="/technical-seo-consultant/"
              >
                About
                <span
                  className={`absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transform origin-left transition-transform duration-200 ${
                    currentPath === '/technical-seo-consultant/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </a>
            </div>
            <a
              className={`group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-5 py-2.5 text-sm rounded-lg hover:scale-105 hover:shadow-lg ${COMMON_STYLES.gradientBg} text-white shadow-md focus:ring-2 focus:ring-purple-500/30`}
              href="/contact/"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </nav>

          <button
            type="button"
            className="lg:hidden rounded-lg p-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500 mobile-menu-toggle"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Icons.menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <nav id="mobile-menu" className="mobile-menu hidden lg:hidden border-t border-gray-100 py-4" aria-label="Mobile navigation">
          <div className="flex flex-col space-y-4">
            <a
              href="/technical-seo-services/"
              className={`font-medium transition-colors ${currentPath === '/technical-seo-services/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              Services
            </a>
            <a href="/customers/" className={`font-medium transition-colors ${currentPath === '/customers/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>
              Customers
            </a>
            <a href="/newsletter/" className={`font-medium transition-colors ${currentPath === '/newsletter/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>
              Newsletter
            </a>
            <a href="/blog/" className={`font-medium transition-colors ${currentPath?.startsWith('/blog/') ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}>
              Blog
            </a>
            <a
              href="/technical-seo-consultant/"
              className={`font-medium transition-colors ${currentPath === '/technical-seo-consultant/' ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'}`}
            >
              About
            </a>
            <a
              href="/contact/"
              className={`group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-6 py-3 text-base rounded-lg hover:scale-105 hover:shadow-lg ${COMMON_STYLES.gradientBg} text-white shadow-md focus:ring-2 focus:ring-purple-500/30 text-center`}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
