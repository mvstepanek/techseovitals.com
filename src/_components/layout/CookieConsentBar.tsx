import React from 'react';

const CookieConsentBar: React.FC = () => (
  <div
    id="cookie-consent"
    className="fixed bottom-4 left-4 right-4 md:left-6 md:right-6 lg:bottom-6 lg:left-8 lg:right-8 z-50 hidden"
  >
    <div className="max-w-4xl mx-auto">
      <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden">
        <div className="px-6 py-5 sm:px-8 sm:py-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-xl">🍪</span>
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Hey there! 👋</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We use a few cookies to make your experience smoother and understand what content you love most. Think
                of them as tiny digital breadcrumbs that help us improve your journey.
              </p>
              <p className="text-xs text-gray-500 mt-2">
                <a href="/privacy-policy/" className="text-primary-600 hover:text-primary-700 underline font-medium">
                  Read our privacy policy
                </a>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
              <button
                id="cookie-decline"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Decline
              </button>
              <button
                id="cookie-accept"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-primary-50 to-purple-50 px-6 py-3 sm:px-8">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="font-medium">Privacy-focused</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse animation-delay-300" />
              <span className="font-medium">GDPR compliant</span>
            </span>
            <span className="text-gray-400">•</span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse animation-delay-700" />
              <span className="font-medium">Your choice matters</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CookieConsentBar;
