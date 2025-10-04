import React from 'react';
import ServiceCard from '../business/ServiceCard';
import Icons from '../ui/Icons';

type ColorScheme = 'variant1' | 'variant2';

interface ServicesCardsProps {
  colorScheme?: ColorScheme;
}

const ServicesCards: React.FC<ServicesCardsProps> = ({ colorScheme = 'variant1' }) => {
  const colors = {
    variant1: { audit: 'indigo', monitoring: 'green', migration: 'purple' },
    variant2: { audit: 'green', monitoring: 'orange', migration: 'indigo' },
  } as const;

  const scheme = colors[colorScheme];

  return (
    <>
      <ServiceCard
        icon={<Icons.document className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />}
        title="Technical SEO Audit"
        price="$2,500"
        description="Comprehensive technical SEO audit that uncovers what's blocking your visibility and conversions. Get a prioritized roadmap to fix critical issues and maximize your website's potential."
        features={[
          {
            title: 'Comprehensive Technical Analysis',
            description: 'Complete audit covering technical SEO, performance, and user experience with 50+ checkpoints to identify all issues affecting your site.',
          },
          {
            title: 'Prioritized Action Plan',
            description: 'Clear roadmap with fixes ranked by business impact. Specific recommendations your team can implement immediately to drive results.',
          },
          {
            title: '90-Minute Strategy Consultation',
            description: 'One-on-one strategy call to review findings, discuss priorities, and create your implementation roadmap.',
          },
        ]}
        ctaText="Get Your Audit"
        ctaHref="/contact/"
        color={scheme.audit}
        id="technical-seo-audit"
      />
      <ServiceCard
        icon={<Icons.monitor className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />}
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
            description: 'Monthly performance reports with new optimization opportunities. Stay ahead of algorithm updates and competitor improvements.',
          },
          {
            title: 'Priority Support & Consultation',
            description: '60-minute monthly strategy calls plus priority email support for urgent issues.',
          },
        ]}
        ctaText="Start Monitoring"
        ctaHref="/contact/"
        color={scheme.monitoring}
        id="technical-seo-monitoring"
        commitment="Minimum 3 months commitment"
      />
      <ServiceCard
        icon={<Icons.transfer className="w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 text-white" />}
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
            description: 'Comprehensive post-migration audit to verify everything transferred correctly. Ongoing optimization to improve performance beyond pre-migration levels.',
          },
          {
            title: 'Continuous Support & Monitoring',
            description: 'Ongoing support throughout the migration process and continued monitoring post-launch.',
          },
        ]}
        ctaText="Plan Your Migration"
        ctaHref="/contact/"
        color={scheme.migration}
        id="website-migration-plan"
      />
    </>
  );
};

export default ServicesCards;
