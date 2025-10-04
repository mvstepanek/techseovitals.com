import React from 'react';
import Icons from '../_components/ui/Icons';
import { COMMON_STYLES } from './constants';

export const TECHNICAL_SEO_BENEFITS = {
  badge: {
    icon: <Icons.checkCircle className="w-4 h-4" />,
    text: 'Transform Your Website'
  },
  title: (
    <>
      Fix What's Costing You{' '}
      <span>
        Customers Every Day
      </span>
    </>
  ),
  subtitle: 'Stop losing customers to technical issues. Get the optimization roadmap that improves user experience while driving measurable revenue growth.',
  benefits: [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4l3 3m6-3A9 9 0 113 12a9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Complete Technical Foundation',
      description: 'Ensure search engines can properly crawl, index, and understand your content. Fix the technical barriers that prevent your site from ranking.',
      tagline: 'Covers crawlability & indexability',
      color: 'blue' as const
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072.0l-.548.547A3.374 3.374.0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Find Revenue-Killing Issues',
      description: 'Identify the technical problems costing you customers. Discover what\'s driving visitors away and how to fix it immediately.',
      tagline: '100+ issues prioritized',
      color: 'green' as const
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Search Engine Visibility',
      description: 'Perfect your site architecture, Schema Markup, and technical setup to maximize search engine understanding and help your content get discovered for relevant searches.',
      tagline: 'Enhanced search visibility',
      color: 'purple' as const
    }
  ],
  borderTop: true
};

export const PERFORMANCE_BENEFITS = {
  badge: {
    icon: <Icons.lightning className="w-4 h-4" />,
    text: 'Track What Matters'
  },
  title: (
    <>
      The 5 Metrics That{' '}
      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Actually Matter
      </span>
    </>
  ),
  subtitle: 'Stop losing customers to slow sites. Learn the exact 5 performance metrics that directly impact conversions and revenue, plus the target numbers you need to hit.',
  benefits: [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
      title: 'Server Response Optimization',
      description: 'Discover the hidden server delays that kill conversions before customers even see your content. Learn the response time targets that keep visitors engaged.',
      tagline: 'Server performance targets',
      color: 'blue' as const
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Loading Speed Fundamentals',
      description: 'Learn the critical speed measurements that determine if customers stay or leave. Get specific target numbers that separate fast sites from slow ones.',
      tagline: 'Exact target benchmarks',
      color: 'green' as const
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5A7 7 0 113 10a7 7 0 0114 0z"
          />
        </svg>
      ),
      title: 'Revenue Recovery Blueprint',
      description: 'Discover how these 5 metrics work together to stop customer abandonment. Learn the proven system to identify which speed issues are costing you the most money.',
      tagline: 'Revenue impact analysis',
      color: 'purple' as const
    }
  ],
  borderTop: false
};

export const MIGRATION_BENEFITS = {
  badge: {
    icon: <Icons.checkCircle className="w-4 h-4" />,
    text: 'Protect Your Investment'
  },
  title: (
    <>
      Minimize Migration{' '}
      <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Risks and Losses
      </span>
    </>
  ),
  subtitle: 'Most migrations lose significant traffic and revenue. This checklist helps minimize disruption to your search rankings, user experience, and business operations.',
  benefits: [
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2A9 9 0 113 12a9 9 0 0118 0z"
          />
        </svg>
      ),
      title: 'Maintain User Experience',
      description: 'Keep site speed, functionality, and user flows intact. Prevent the performance drops and broken features that drive customers away.',
      tagline: 'Zero downtime strategy',
      color: 'blue' as const
    },
    {
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.663 17h4.673M12 3v1m6.364 1.636-.707.707M21 12h-1M4 12H3m3.343-5.657-.707-.707m2.828 9.9a5 5 0 117.072.0l-.548.547A3.374 3.374.0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Preserve Search Rankings',
      description: 'Protect your hard-earned search visibility. Proper redirects, URL mapping, and technical setup prevent ranking losses that destroy organic traffic.',
      tagline: '45+ technical checkpoints',
      color: 'green' as const
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
      color: 'purple' as const
    }
  ],
  borderTop: true
};
