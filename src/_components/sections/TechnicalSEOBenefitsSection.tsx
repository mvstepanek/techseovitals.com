import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import FeatureCard from '../business/FeatureCard';

const TechnicalSEOBenefitsSection: React.FC = () => (
  <div className="border-t border-gray-200">
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${COMMON_STYLES.gradientBg} text-white shadow-lg mb-6`}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
            Transform Your Website
          </div>
        </div>
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Fix What&apos;s Costing You{' '}
            <span className={COMMON_STYLES.gradientText}>
              Customers Every Day
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
            Stop losing customers to technical issues. Get the optimization roadmap that improves user experience while
            driving measurable revenue growth.
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
                  d="M12 8v4l3 3m6-3A9 9 0 113 12a9 9 0 0118 0z"
                />
              </svg>
            }
            title="Complete Technical Foundation"
            description="Ensure search engines can properly crawl, index, and understand your content. Fix the technical barriers that prevent your site from ranking."
            tagline="Covers crawlability & indexability"
            color="blue"
          />
          <FeatureCard
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072.0l-.548.547A3.374 3.374.0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
            }
            title="Find Revenue-Killing Issues"
            description="Identify the technical problems costing you customers. Discover what's driving visitors away and how to fix it immediately."
            tagline="100+ issues prioritized"
            color="green"
          />
          <FeatureCard
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
              </svg>
            }
            title="Search Engine Visibility"
            description="Perfect your site architecture, Schema Markup, and technical setup to maximize search engine understanding and help your content get discovered for relevant searches."
            tagline="Enhanced search visibility"
            color="purple"
          />
        </div>
      </div>
    </section>
  </div>
);

export default TechnicalSEOBenefitsSection;
