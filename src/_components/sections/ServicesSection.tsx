import React from 'react';
import ServiceCard from '../business/ServiceCard';

const ServicesSection: React.FC = () => (
  <section className="py-16 sm:py-20 lg:py-24 bg-white">
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
          Technical SEO{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Services</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
          Transform your website into the fast, reliable experience your users deserve - with revenue growth following
          naturally
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
        price="Starting at $1,500"
        description="Choose Essential ($1,500) or Full Audit ($2,500). Discover what's frustrating your users and get a roadmap that transforms technical barriers into competitive advantages."
        features={[
          {
            title: 'Essential or Full Analysis',
            description:
              'Essential Audit (up to 100 pages, 1-3 critical issues) or Full Audit (comprehensive user experience analysis).',
          },
          {
            title: 'Actionable Implementation Plan',
            description:
              'Clear roadmap prioritizing fixes that matter most to your users, with practical steps your team can implement immediately.',
          },
          {
            title: '60-Minute Strategy Consultation',
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
        description="Keep your website performing flawlessly for every visitor. Proactive monitoring that catches issues before users notice them."
        features={[
          {
            title: 'Continuous Website Monitoring',
            description:
              '24/7 monitoring ensures your users always get the fast, reliable experience they expect - protecting your reputation and revenue.',
          },
          {
            title: 'Monthly Optimization Reports',
            description:
              'Monthly insights revealing new ways to improve user satisfaction, reduce friction points, and naturally increase conversions.',
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
        description="Protect the trust you've built with users. Seamless transitions that maintain the performance and reliability visitors expect."
        features={[
          {
            title: 'Detailed Migration Strategy',
            description:
              'User-first migration strategy that maintains seamless experiences throughout the transition, protecting both trust and revenue.',
          },
          {
            title: 'Post-Migration Audit & Optimization',
            description:
              'Post-migration optimization ensuring your new site delivers even better user experiences than before, with improved performance metrics.',
          },
          {
            title: 'Continuous Support & Monitoring',
            description: 'Ongoing support throughout the migration process plus 90-day monitoring period.',
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

export default ServicesSection;
