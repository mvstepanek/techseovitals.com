import React from 'react';

const Header: React.FC = () => (
  <header className="sticky top-0 z-40 bg-white shadow-sm">
    {/* Skip to content link for accessibility */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md"
    >
      Skip to main content
    </a>

    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between py-4">
        <a className="block max-w-[180px]" href="/" aria-label="TechSEO Vitals Home">
          <img
            alt="TechSEO Vitals - Technical SEO and Web Performance Consultant"
            width="200"
            height="50"
            className="h-auto w-auto"
            src="/assets/logo-light.svg"
            loading="eager"
          />
        </a>

        <nav className="hidden lg:flex lg:items-center lg:space-x-8" aria-label="Main navigation">
          <div className="relative group">
            <a className="text-gray-700 hover:text-brand-600 transition-colors" href="/technical-seo-services/">
              Services
            </a>
          </div>
          <div className="relative group">
            <a className="text-gray-700 hover:text-brand-600 transition-colors" href="/customers/">
              Customers
            </a>
          </div>
          <div className="relative group">
            <a className="text-gray-700 hover:text-brand-600 transition-colors" href="/newsletter/">
              Newsletter
            </a>
          </div>
          <div className="relative group">
            <a className="text-gray-700 hover:text-brand-600 transition-colors" href="/blog/">
              Blog
            </a>
          </div>
          <div className="relative group">
            <a className="text-gray-700 hover:text-brand-600 transition-colors" href="/technical-seo-consultant/">
              About
            </a>
          </div>
          <a
            className="group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-4 py-2 text-sm rounded-lg hover:scale-105 hover:shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md focus:ring-2 focus:ring-purple-500/30"
            href="/contact/"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
        </nav>

        <button
          type="button"
          className="lg:hidden rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 mobile-menu-toggle"
          aria-expanded="false"
          aria-controls="mobile-menu"
          aria-label="Open menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      <nav
        id="mobile-menu"
        className="mobile-menu hidden lg:hidden border-t border-gray-100 py-4"
        aria-label="Mobile navigation"
      >
        <div className="flex flex-col space-y-4">
          <a href="/technical-seo-services/" className="text-gray-700 hover:text-brand-600 transition-colors">
            Services
          </a>
          <a href="/customers/" className="text-gray-700 hover:text-brand-600 transition-colors">
            Customers
          </a>
          <a href="/newsletter/" className="text-gray-700 hover:text-brand-600 transition-colors">
            Newsletter
          </a>
          <a href="/blog/" className="text-gray-700 hover:text-brand-600 transition-colors">
            Blog
          </a>
          <a href="/technical-seo-consultant/" className="text-gray-700 hover:text-brand-600 transition-colors">
            About
          </a>
          <a
            href="/contact/"
            className="group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-4 py-2 text-sm rounded-lg hover:scale-105 hover:shadow-lg bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md focus:ring-2 focus:ring-purple-500/30 text-center"
          >
            <span className="relative z-10">Contact</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
          </a>
        </div>
      </nav>
    </div>
  </header>
);

export default Header;
