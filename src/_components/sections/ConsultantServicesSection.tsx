import React from 'react';
import ServiceCard from '../business/ServiceCard';

const ConsultantServicesSection: React.FC = () => (
  <section className="py-20 bg-white">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          Choose Your Service
        </div>
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
          How I Can{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Help Your Business
          </span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          No meaningless 50-page PDFs. Just actionable improvements that users feel immediately.
        </p>
      </div>
      <div className="space-y-8">
        <ServiceCard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          }
          title="Technical SEO Audit"
          price="Starting at $1,500"
          description="Choose from Essential ($1,500) or Full Audit ($2,500). Discover what's frustrating your users and get actionable improvements that transform technical barriers into competitive advantages."
          features={[
            {
              title: 'Essential or Full Analysis',
              description:
                'Essential Audit (up to 100 pages, 1-3 critical issues) or Full Audit (comprehensive analysis).',
            },
            {
              title: 'Actionable Implementation Plan',
              description: 'Actionable task list prioritizing improvements users will feel immediately.',
            },
            {
              title: '30 or 60-Minute Consultation',
              description: 'Essential Audit includes 30-minute call, Full Audit includes 60-minute strategy session.',
            },
          ]}
          ctaText="Get Your Audit"
          ctaHref="/contact/"
          color="green"
        />
        <ServiceCard
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
          title="Technical SEO Monitoring"
          price="$2,000"
          priceUnit="/month"
          description="Proactive monitoring that catches issues before users notice them. Ongoing excellence assurance for your user experience."
          features={[
            {
              title: 'Continuous Website Monitoring',
              description: '24/7 monitoring ensures users always get the fast, reliable experience they expect.',
            },
            {
              title: 'Monthly Optimization Reports',
              description: 'Monthly insights revealing new ways to improve user satisfaction and conversions.',
            },
            {
              title: 'Priority Support & Consultation',
              description: '60-minute monthly calls plus priority email support.',
            },
          ]}
          ctaText="Start Monitoring"
          ctaHref="/contact/"
          color="orange"
        />
        <ServiceCard
          icon={
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7h12m0 0-4-4m4 4-4 4m0 6H4m0 0 4 4m-4-4 4-4"
              />
            </svg>
          }
          title="Website Migration Planning"
          price="$4,500"
          description="Protect the trust you've built with users. Zero disruption migrations that maintain the reliability visitors expect."
          features={[
            {
              title: 'Comprehensive Migration Strategy',
              description: 'Detailed plan covering all technical aspects and risk mitigation.',
            },
            {
              title: 'Post-Migration Audit & Support',
              description: 'Complete audit after migration with ongoing support during transition.',
            },
            {
              title: 'SEO Value Preservation',
              description: 'Ensure zero loss in rankings and organic traffic during migration.',
            },
          ]}
          ctaText="Plan Your Migration"
          ctaHref="/contact/"
          color="indigo"
        />
      </div>
    </div>
  </section>
);

export default ConsultantServicesSection;
