import React from 'react';

const CookieConsentBar: React.FC = () => (
  <div
    id="cookie-consent"
    className="fixed bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 md:left-6 md:right-6 lg:bottom-6 lg:left-8 lg:right-8 z-50 hidden"
  >
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-r from-primary-50 to-purple-50 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl border border-primary-200/60 overflow-hidden ring-1 ring-purple-300/20">
        <div className="px-4 py-4 sm:px-6 sm:py-5 lg:px-8 lg:py-6">
          <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4">
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-lg sm:text-xl">🍪</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span className="sm:hidden text-lg">🍪</span>
                Hey there!
              </h3>
              <p className="text-sm sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-2">
                We use a few cookies to make your experience smoother and understand what content you love most.
              </p>
              <p className="text-xs text-gray-500">
                <a href="/privacy-policy/" className="text-primary-600 hover:text-primary-700 underline font-medium">
                  Read our privacy policy
                </a>
              </p>
            </div>
            <div className="flex flex-row gap-2 sm:gap-3 flex-shrink-0">
              <button
                id="cookie-decline"
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg sm:rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Decline
              </button>
              <button
                id="cookie-accept"
                className="flex-1 sm:flex-none px-4 sm:px-6 py-2.5 sm:py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-lg sm:rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CookieConsentBar;
