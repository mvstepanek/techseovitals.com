import React from 'react';
import FeatureCard from '../business/FeatureCard';

const PerformanceBenefitsSection: React.FC = () => (
  <section className="py-24 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Track What Matters
        </div>
      </div>
      <div className="text-center mb-20">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          The 5 Metrics That{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Actually Matter
          </span>
        </h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
          Stop losing customers to slow sites. Learn the exact 5 performance metrics that directly impact conversions
          and revenue, plus the target numbers you need to hit.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          }
          title="Server Response Optimization"
          description="Discover the hidden server delays that kill conversions before customers even see your content. Learn the response time targets that keep visitors engaged."
          tagline="Server performance targets"
          color="blue"
        />
        <FeatureCard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
          }
          title="Loading Speed Fundamentals"
          description="Learn the critical speed measurements that determine if customers stay or leave. Get specific target numbers that separate fast sites from slow ones."
          tagline="Exact target benchmarks"
          color="green"
        />
        <FeatureCard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5A7 7 0 113 10a7 7 0 0114 0z"
              />
            </svg>
          }
          title="Revenue Recovery Blueprint"
          description="Discover how these 5 metrics work together to stop customer abandonment. Learn the proven system to identify which speed issues are costing you the most money."
          tagline="Revenue impact analysis"
          color="purple"
        />
      </div>
    </div>
  </section>
);

export default PerformanceBenefitsSection;
