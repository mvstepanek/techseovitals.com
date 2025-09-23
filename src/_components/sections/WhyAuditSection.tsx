import React from 'react';

const WhyAuditSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7A2 2 0 005 7v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          Why You Need an Audit
        </div>
        <h2 className="text-4xl sm:text-5xl font-display font-bold text-gray-900 mb-6">
          Stop Guessing.{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Start Knowing
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          You can&apos;t fix what you can&apos;t see. My audit reveals the hidden technical issues killing your
          conversions and revenue with a clear roadmap to fix them.
        </p>
      </div>
      <div className="flex flex-col items-center gap-4 mb-16">
        <a
          className="group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl focus:ring-4 focus:ring-purple-500/30"
          href="/contact/"
        >
          <span className="relative z-10">Get Free Website Check</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </a>
        <div className="flex items-center justify-center gap-4 text-gray-600">
          <span className="text-sm">✓ Free consultation</span>
          <span className="text-sm">✓ No commitment</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Uncover Revenue Killers</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Find the technical issues that are silently costing you money. Discover exactly what&apos;s preventing
            visitors from converting and completing purchases.
          </p>
          <div className="flex items-center gap-2 font-semibold text-blue-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            Full technical analysis
          </div>
        </div>

        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Maximize Revenue Impact</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Stop wasting time on minor issues. Get fixes ranked by revenue potential so you tackle what drives the most
            conversions and sales first.
          </p>
          <div className="flex items-center gap-2 font-semibold text-green-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            Revenue opportunities found
          </div>
        </div>

        <div className="group relative bg-white p-6 sm:p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible">
          <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity" />
          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5.0 000 6.364L12 20.364l7.682-7.682a4.5 4.5.0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5.0 00-6.364.0z"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Capture Lost Revenue</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            Identify where competitors are stealing your customers and get the technical improvements that help you win
            back market share and revenue.
          </p>
          <div className="flex items-center gap-2 font-semibold text-purple-600">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
            </svg>
            Competitive advantage
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyAuditSection;
