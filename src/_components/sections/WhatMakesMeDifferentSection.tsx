import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

const WhatMakesMeDifferentSection: React.FC = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <div className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold ${COMMON_STYLES.gradientBg} text-white shadow-lg mb-4 sm:mb-6`}>
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
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-sans font-bold text-gray-900 mb-4 sm:mb-6">
          What Makes Me{' '}
          <span className={COMMON_STYLES.gradientText}>
            Different
          </span>
        </h2>
        <p className="text-lg sm:text-lg text-gray-600 max-w-3xl mx-auto">
          Developer-led technical SEO that transforms performance issues into competitive advantages. Actionable
          improvements that drive revenue.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955.0 0112 2.944a11.955 11.955.0 01-8.618 3.04A12.02 12.02.0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622.0-1.042-.133-2.052-.382-3.016z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Web Development Expertise</h3>
          <p className="text-gray-600 leading-relaxed">10+ years experience with deep technical insight of website architecture and performance.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Clear Action Plans</h3>
          <p className="text-gray-600 leading-relaxed">
            Get actionable task lists with step-by-step guidance your team can implement immediately.
          </p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className={`w-16 h-16 ${COMMON_STYLES.gradientBgVeryLight} rounded-2xl flex items-center justify-center mb-6`}>
            <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Making Teams Self-Sufficient</h3>
          <p className="text-gray-600 leading-relaxed">Get detailed guidance that empowers your team to maintain excellence long after our work together.</p>
        </div>
        <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-2xl flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">Collaborative Approach</h3>
          <p className="text-gray-600 leading-relaxed">Partner with your teams to build lasting improvements with sustained impact for your users.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatMakesMeDifferentSection;
