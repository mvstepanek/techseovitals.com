import React from 'react';
import Icons from '../_components/ui/Icons';

export const getTechnicalSeoBenefits = (t: (key: string) => string) => ({
  badge: {
    icon: <Icons.checkCircle className="w-4 h-4" />,
    text: t('checklist.benefits.badge'),
  },
  title: t('checklist.benefits.title'),
  subtitle: t('checklist.benefits.subtitle'),
  benefits: [
    {
      id: 'technical-foundation',
      icon: <Icons.clock className="w-8 h-8 text-white" />,
      title: t('checklist.benefits.benefit1.title'),
      description: t('checklist.benefits.benefit1.description'),
      tagline: t('checklist.benefits.benefit1.tagline'),
      color: 'blue' as const,
    },
    {
      id: 'revenue-issues',
      icon: <Icons.lightbulb className="w-8 h-8 text-white" />,
      title: t('checklist.benefits.benefit2.title'),
      description: t('checklist.benefits.benefit2.description'),
      tagline: t('checklist.benefits.benefit2.tagline'),
      color: 'green' as const,
    },
    {
      id: 'search-visibility',
      icon: <Icons.growth className="w-8 h-8 text-white" />,
      title: t('checklist.benefits.benefit3.title'),
      description: t('checklist.benefits.benefit3.description'),
      tagline: t('checklist.benefits.benefit3.tagline'),
      color: 'purple' as const,
    },
  ],
  borderTop: true,
});

export const getPerformanceBenefits = (t: (key: string) => string) => ({
  badge: {
    icon: <Icons.lightning className="w-4 h-4" />,
    text: t('performance.benefits.badge'),
  },
  title: t('performance.benefits.title'),
  subtitle: t('performance.benefits.subtitle'),
  benefits: [
    {
      id: 'server-optimization',
      icon: <Icons.monitor className="w-8 h-8 text-white" />,
      title: t('performance.benefits.benefit1.title'),
      description: t('performance.benefits.benefit1.description'),
      tagline: t('performance.benefits.benefit1.tagline'),
      color: 'blue' as const,
    },
    {
      id: 'loading-speed',
      icon: <Icons.growth className="w-8 h-8 text-white" />,
      title: t('performance.benefits.benefit2.title'),
      description: t('performance.benefits.benefit2.description'),
      tagline: t('performance.benefits.benefit2.tagline'),
      color: 'green' as const,
    },
    {
      id: 'revenue-recovery',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5A7 7 0 113 10a7 7 0 0114 0z" />
        </svg>
      ),
      title: t('performance.benefits.benefit3.title'),
      description: t('performance.benefits.benefit3.description'),
      tagline: t('performance.benefits.benefit3.tagline'),
      color: 'purple' as const,
    },
  ],
  borderTop: false,
});

export const getMigrationBenefits = (t: (key: string) => string) => ({
  badge: {
    icon: <Icons.checkCircle className="w-4 h-4" />,
    text: t('migration.benefits.badge'),
  },
  title: t('migration.benefits.title'),
  subtitle: t('migration.benefits.subtitle'),
  benefits: [
    {
      id: 'user-experience',
      icon: <Icons.checkCircle className="w-8 h-8 text-white" />,
      title: t('migration.benefits.benefit1.title'),
      description: t('migration.benefits.benefit1.description'),
      tagline: t('migration.benefits.benefit1.tagline'),
      color: 'blue' as const,
    },
    {
      id: 'search-rankings',
      icon: <Icons.lightbulb className="w-8 h-8 text-white" />,
      title: t('migration.benefits.benefit2.title'),
      description: t('migration.benefits.benefit2.description'),
      tagline: t('migration.benefits.benefit2.tagline'),
      color: 'green' as const,
    },
    {
      id: 'revenue-protection',
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
      title: t('migration.benefits.benefit3.title'),
      description: t('migration.benefits.benefit3.description'),
      tagline: t('migration.benefits.benefit3.tagline'),
      color: 'purple' as const,
    },
  ],
  borderTop: true,
});
