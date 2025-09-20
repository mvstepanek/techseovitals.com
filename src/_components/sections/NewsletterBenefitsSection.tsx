import React from 'react';
import StatsGrid from '../business/StatsGrid';

const NewsletterBenefitsSection: React.FC = () => (
  <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
            />
          </svg>
          What You&apos;ll Learn
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          Join Website Owners Getting{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Real Results
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          &quot;Your insights transformed how we think about user experience.&quot; - 3 benefits you can expect from
          subscribing
        </p>
      </div>
      <StatsGrid
        stats={[
          {
            value: '10+',
            label: 'Years Experience',
            color: 'green',
          },
          {
            value: '2x',
            label: 'Monthly Frequency',
            color: 'blue',
          },
          {
            value: '100%',
            label: 'Actionable Content',
            color: 'purple',
          },
        ]}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <svg className="w-12 h-12 text-green-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072.0l-.548.547A3.374 3.374.0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Gaining New Knowledge</h3>
          <p className="text-gray-600 mb-6">
            Learning new information is crucial for both personal and business growth. Stay ahead of the competition.
          </p>
        </div>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <svg className="w-12 h-12 text-blue-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 8v4l3 3m6-3A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Staying Up-to-Date</h3>
          <p className="text-gray-600 mb-6">
            Keeping current with recent industry changes is critical for the strategic decisions you need to make.
          </p>
        </div>
        <div className="group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-purple-200 hover:shadow-lg transition-all duration-300">
          <div className="mb-6">
            <svg className="w-12 h-12 text-purple-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">Getting Better Website</h3>
          <p className="text-gray-600 mb-6">
            Implementing knowledge from the newsletter will help your website grow, attract more visitors, and increase
            revenue over time.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default NewsletterBenefitsSection;
