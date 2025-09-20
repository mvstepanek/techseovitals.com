import React from 'react';
import FeatureCard from '../business/FeatureCard';

const MigrationBenefitsSection: React.FC = () => (
  <div className="border-t border-gray-200">
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
              />
            </svg>
            Protect Your Investment
          </div>
        </div>
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Minimize Migration{' '}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Risks and Losses
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
            Most migrations lose significant traffic and revenue. This checklist helps minimize disruption to your
            search rankings, user experience, and business operations.
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
                  d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
                />
              </svg>
            }
            title="Maintain User Experience"
            description="Keep site speed, functionality, and user flows intact. Prevent the performance drops and broken features that drive customers away."
            tagline="Zero downtime strategy"
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
            title="Preserve Search Rankings"
            description="Protect your hard-earned search visibility. Proper redirects, URL mapping, and technical setup prevent ranking losses that destroy organic traffic."
            tagline="45+ technical checkpoints"
            color="green"
          />
          <FeatureCard
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7A4 4 0 008 7v4h8z"
                />
              </svg>
            }
            title="Revenue Protection"
            description="Safeguard your business from migration disasters. Avoid the traffic drops, broken conversions, and lost revenue that destroy ROI."
            tagline="Revenue-focused approach"
            color="purple"
          />
        </div>
      </div>
    </section>
  </div>
);

export default MigrationBenefitsSection;
