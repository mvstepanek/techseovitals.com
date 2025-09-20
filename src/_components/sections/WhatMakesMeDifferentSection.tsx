import React from 'react';

const WhatMakesMeDifferentSection: React.FC = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-4 sm:mb-6">
          <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955.0 0112 2.944a11.955 11.955.0 01-8.618 3.04A12.02 12.02.0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622.0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Why Choose Me
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-4 sm:mb-6">
          What Makes Me{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Different
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Developer-led technical SEO that transforms performance issues into competitive advantages. No meaningless
          reports - just actionable improvements that users feel.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955.0 0112 2.944a11.955 11.955.0 01-8.618 3.04A12.02 12.02.0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622.0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Developer-Level Technical Expertise</h3>
          <p className="text-gray-600 leading-relaxed">
            10+ years coding background gives me insights most SEO consultants lack. I understand both the problems and
            solutions.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414.0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414.0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">No Meaningless Reports</h3>
          <p className="text-gray-600 leading-relaxed">
            Skip 50-page PDFs. Get actionable task lists with step-by-step guidance your team can implement immediately.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Making Teams Self-Sufficient</h3>
          <p className="text-gray-600 leading-relaxed">
            You get detailed guidance that empowers your team to maintain excellence long after our work together.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 8h10M7 12h4m1 8-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-1l-4 4z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Collaborative Approach</h3>
          <p className="text-gray-600 leading-relaxed">
            Partner with your teams to build lasting improvements that benefit users long after our work together.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatMakesMeDifferentSection;
