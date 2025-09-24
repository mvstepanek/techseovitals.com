/** @jsx jsx */
/** @jsxFrag jsx.Fragment */
import { jsx } from 'jsx-async-runtime';
import NewsletterSection from './_components/sections/NewsletterSection';

export const data = {
  layout: 'base.11ty.tsx',
  title: 'Page Not Found - TechSEO Vitals',
  description: 'The page you are looking for could not be found.',
  permalink: '/404.html',
};

export function render(data: any) {
  return (
    <>
      <div className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl w-full text-center">
          {/* 404 Animation Container */}
          <div className="relative mb-8">
            <div className="flex justify-center items-center">
              <span className="text-[150px] sm:text-[200px] font-bold bg-gradient-to-r from-brand-600 to-purple-600 bg-clip-text text-transparent leading-none">
                404
              </span>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-64 h-64 sm:w-96 sm:h-96 bg-brand-600/10 rounded-full blur-3xl animate-pulse" />
            </div>

            {/* Search Icon Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg
                className="w-20 h-20 sm:w-28 sm:h-28 text-gray-300 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* Error Message */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Oops! Page Not Found
          </h1>

          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Looks like this page took a wrong turn in the technical SEO maze.
            The content you're searching for might have been moved, deleted, or perhaps it never existed.
          </p>

          {/* Helpful Links */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/"
              className="group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold rounded-xl inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500 px-8 py-4 text-lg"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>

            <a
              href="/blog"
              className="group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold rounded-xl inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-purple-500/30 px-8 py-4 text-lg"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                Read the Blog
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>
          </div>

          {/* Quick Links Section */}
          <div className="border-t border-gray-200 pt-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Popular Pages</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
              <a
                href="/technical-seo-services"
                className="group p-4 bg-gray-50 rounded-lg hover:bg-brand-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-brand-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Services</h3>
              </a>

              <a
                href="/newsletter"
                className="group p-4 bg-gray-50 rounded-lg hover:bg-brand-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-brand-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Newsletter</h3>
              </a>

              <a
                href="/technical-seo-consultant"
                className="group p-4 bg-gray-50 rounded-lg hover:bg-brand-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-brand-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">About</h3>
              </a>

              <a
                href="/contact"
                className="group p-4 bg-gray-50 rounded-lg hover:bg-brand-50 transition-colors duration-200"
              >
                <div className="flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-brand-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-medium text-gray-900 group-hover:text-brand-600 transition-colors">Contact</h3>
              </a>
            </div>
          </div>

          {/* SEO Tip */}
          <div className="mt-16 p-6 bg-gradient-to-r from-brand-50 to-purple-50 rounded-2xl border border-brand-200">
            <div className="flex items-start space-x-3">
              <svg className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-left">
                <h3 className="font-semibold text-gray-900 mb-1">SEO Tip of the Day</h3>
                <p className="text-sm text-gray-600">
                  A well-designed 404 page with helpful navigation can reduce bounce rate and improve user experience.
                  Always include links to popular pages and a clear path back to your homepage!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterSection />
    </>
  );
}

export default { data, render };