import React from 'react';
import Icons from '../_components/ui/Icons';

export const getAboutContent = (t: (key: string) => string) => ({
  subtitle: t('about.subtitle'),

  experiencePoints: [
    {
      icon: <Icons.badge className="w-8 h-8 text-white" />,
      title: t('about.point1.title'),
      description: t('about.point1.description'),
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
      colorAlt: 'bg-gradient-to-br from-blue-500 to-blue-600',
    },
    {
      icon: <Icons.lightning className="w-8 h-8 text-white" />,
      title: t('about.point2.title'),
      description: t('about.point2.description'),
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      colorAlt: 'bg-gradient-to-br from-green-500 to-green-600',
    },
    {
      icon: <Icons.monitor className="w-8 h-8 text-white" />,
      title: t('about.point3.title'),
      description: t('about.point3.description'),
      color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
      colorAlt: 'bg-gradient-to-br from-purple-500 to-purple-600',
    },
  ],

  statsBadge: {
    title: t('about.stats.title'),
    subtitle: t('about.stats.subtitle'),
  },
});
