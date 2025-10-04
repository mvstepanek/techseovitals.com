import React from 'react';
import Icons from '../_components/ui/Icons';
import { COMMON_STYLES } from './constants';

export const TECHNICAL_SEO_BENEFITS = {
  badge: {
    icon: <Icons.checkCircle className="w-4 h-4" />,
    text: 'Transform Your Website',
  },
  title: (
    <>
      Fix What&apos;s Costing You <span>Customers Every Day</span>
    </>
  ),
  subtitle: 'Stop losing customers to technical issues. Get the optimization roadmap that improves user experience while driving measurable revenue growth.',
  benefits: [
    {
      icon: <Icons.clock className="w-8 h-8 text-white" />,
      title: 'Complete Technical Foundation',
      description: 'Ensure search engines can properly crawl, index, and understand your content. Fix the technical barriers that prevent your site from ranking.',
      tagline: 'Covers crawlability & indexability',
      color: 'blue' as const,
    },
    {
      icon: <Icons.lightbulb className="w-8 h-8 text-white" />,
      title: 'Find Revenue-Killing Issues',
      description: "Identify the technical problems costing you customers. Discover what's driving visitors away and how to fix it immediately.",
      tagline: '100+ issues prioritized',
      color: 'green' as const,
    },
    {
      icon: <Icons.growth className="w-8 h-8 text-white" />,
      title: 'Search Engine Visibility',
      description:
        'Perfect your site architecture, Schema Markup, and technical setup to maximize search engine understanding and help your content get discovered for relevant searches.',
      tagline: 'Enhanced search visibility',
      color: 'purple' as const,
    },
  ],
  borderTop: true,
};

export const PERFORMANCE_BENEFITS = {
  badge: {
    icon: <Icons.lightning className="w-4 h-4" />,
    text: 'Track What Matters',
  },
  title: (
    <>
      The 5 Metrics That <span className={COMMON_STYLES.gradientText}>Actually Matter</span>
    </>
  ),
  subtitle: 'Stop losing customers to slow sites. Learn the exact 5 performance metrics that directly impact conversions and revenue, plus the target numbers you need to hit.',
  benefits: [
    {
      icon: <Icons.monitor className="w-8 h-8 text-white" />,
      title: 'Server Response Optimization',
      description: 'Discover the hidden server delays that kill conversions before customers even see your content. Learn the response time targets that keep visitors engaged.',
      tagline: 'Server performance targets',
      color: 'blue' as const,
    },
    {
      icon: <Icons.growth className="w-8 h-8 text-white" />,
      title: 'Loading Speed Fundamentals',
      description: 'Learn the critical speed measurements that determine if customers stay or leave. Get specific target numbers that separate fast sites from slow ones.',
      tagline: 'Exact target benchmarks',
      color: 'green' as const,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5A7 7 0 113 10a7 7 0 0114 0z" />
        </svg>
      ),
      title: 'Revenue Recovery Blueprint',
      description:
        'Discover how these 5 metrics work together to stop customer abandonment. Learn the proven system to identify which speed issues are costing you the most money.',
      tagline: 'Revenue impact analysis',
      color: 'purple' as const,
    },
  ],
  borderTop: false,
};

export const MIGRATION_BENEFITS = {
  badge: {
    icon: <Icons.checkCircle className="w-4 h-4" />,
    text: 'Protect Your Investment',
  },
  title: (
    <>
      Minimize Migration <span className={COMMON_STYLES.gradientText}>Risks and Losses</span>
    </>
  ),
  subtitle: 'Most migrations lose significant traffic and revenue. This checklist helps minimize disruption to your search rankings, user experience, and business operations.',
  benefits: [
    {
      icon: <Icons.checkCircle className="w-8 h-8 text-white" />,
      title: 'Maintain User Experience',
      description: 'Keep site speed, functionality, and user flows intact. Prevent the performance drops and broken features that drive customers away.',
      tagline: 'Zero downtime strategy',
      color: 'blue' as const,
    },
    {
      icon: <Icons.lightbulb className="w-8 h-8 text-white" />,
      title: 'Preserve Search Rankings',
      description: 'Protect your hard-earned search visibility. Proper redirects, URL mapping, and technical setup prevent ranking losses that destroy organic traffic.',
      tagline: '45+ technical checkpoints',
      color: 'green' as const,
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7A4 4 0 008 7v4h8z"
          />
        </svg>
      ),
      title: 'Revenue Protection',
      description: 'Safeguard your business from migration disasters. Avoid the traffic drops, broken conversions, and lost revenue that destroy ROI.',
      tagline: 'Revenue-focused approach',
      color: 'purple' as const,
    },
  ],
  borderTop: true,
};
