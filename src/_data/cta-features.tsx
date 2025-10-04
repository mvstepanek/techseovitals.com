import React from 'react';
import Icons from '../_components/ui/Icons';

export interface CTAFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const DEFAULT_CTA_FEATURES: CTAFeature[] = [
  {
    icon: <Icons.checkCircle className="w-8 h-8 text-white" />,
    title: '100% Free',
    description: 'Free website check with no hidden costs',
  },
  {
    icon: <Icons.clock className="w-8 h-8 text-white" />,
    title: '30 Minutes',
    description: 'Quick call to discuss your biggest opportunities',
  },
  {
    icon: <Icons.star className="w-8 h-8 text-white" />,
    title: 'Immediate Value',
    description: 'Actionable insights you can implement today',
  },
];
