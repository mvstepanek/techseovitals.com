import React from 'react';
import ServiceCard from '../business/ServiceCard';

const ConsultantServicesSection: React.FC = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-gray-50">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12 sm:mb-16 lg:mb-20">
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg mb-4 sm:mb-6">
          <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
            />
          </svg>
          Choose Your Service
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-4 sm:mb-6">
          How I Can{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Help Your Business
          </span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Stop guessing. Start growing. Get the technical SEO expertise that turns your website into a
          revenue-generating machine.
        </p>
      </div>
      <ServiceCard
        icon={
          <svg
            className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        }
        title="Technical SEO Audit"
        price="$2,500"
        description="Comprehensive technical SEO audit that uncovers what's blocking your visibility and conversions. Get a prioritized roadmap to fix critical issues and maximize your website's potential."
        features={[
          {
            title: 'Comprehensive Technical Analysis',
            description:
              'Complete audit covering technical SEO, performance, and user experience with 50+ checkpoints to identify all issues affecting your site.',
          },
          {
            title: 'Prioritized Action Plan',
            description:
              'Clear roadmap with fixes ranked by business impact. Specific recommendations your team can implement immediately to drive results.',
          },
          {
            title: '90-Minute Strategy Consultation',
            description: 'One-on-one call to review findings, discuss priorities, and plan implementation strategy.',
          },
        ]}
        ctaText="Get Your Audit"
        ctaHref="/contact/"
        color="green"
        id="technical-seo-audit"
      />
      <ServiceCard
        icon={
          <svg
            className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        }
        title="Technical SEO Monitoring"
        price={2000}
        priceUnit="/month"
        description="Ongoing monitoring and optimization to maintain peak performance. Regular analysis catches issues early and identifies new opportunities for growth."
        features={[
          {
            title: 'Regular Performance Monitoring',
            description:
              'Weekly expert analysis to identify crawl and indexing errors and performance issues. 24/7 monitoring alerts ensure problems are caught early before they impact revenue.',
          },
          {
            title: 'Monthly Optimization Reports',
            description:
              'Monthly performance reports with new optimization opportunities. Stay ahead of algorithm updates and competitor improvements.',
          },
          {
            title: 'Priority Support & Consultation',
            description: '60-minute monthly strategy calls plus priority email support for urgent issues.',
          },
        ]}
        ctaText="Start Monitoring"
        ctaHref="/contact/"
        color="orange"
        id="technical-seo-monitoring"
        commitment="Minimum 3 months commitment"
      />
      <ServiceCard
        icon={
          <svg
            className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
            />
          </svg>
        }
        title="Website Migration Planning"
        price={4500}
        description="Protect your traffic and rankings during website migration. Comprehensive migration planning with pre and post-migration audits to ensure zero losses."
        features={[
          {
            title: 'Pre-Migration Strategy & Planning',
            description:
              'Detailed pre-migration audit and strategy covering redirects, URL mapping, and technical requirements. Complete blueprint to preserve all rankings and traffic while keeping visitors happy.',
          },
          {
            title: 'Post-Migration Audit & Support',
            description:
              'Comprehensive post-migration audit to verify everything transferred correctly. Ongoing optimization to improve performance beyond pre-migration levels.',
          },
          {
            title: 'Continuous Support & Monitoring',
            description: 'Ongoing support throughout the migration process and continued monitoring post-launch.',
          },
        ]}
        ctaText="Plan Your Migration"
        ctaHref="/contact/"
        color="indigo"
        id="website-migration-plan"
      />
    </div>
  </section>
);

export default ConsultantServicesSection;
