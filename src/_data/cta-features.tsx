import React from 'react';
import Icons from '../_components/ui/Icons';

export interface CTAFeature {
  id: string;
  icon: React.ReactNode;
  titleKey: string;
  descriptionKey: string;
}

export const DEFAULT_CTA_FEATURES: CTAFeature[] = [
  {
    id: 'free-check',
    icon: <Icons.checkCircle className="w-8 h-8 text-white" />,
    titleKey: 'customers.cta.feature1.title',
    descriptionKey: 'customers.cta.feature1.description',
  },
  {
    id: 'quick-call',
    icon: <Icons.clock className="w-8 h-8 text-white" />,
    titleKey: 'customers.cta.feature2.title',
    descriptionKey: 'customers.cta.feature2.description',
  },
  {
    id: 'immediate-value',
    icon: <Icons.star className="w-8 h-8 text-white" />,
    titleKey: 'customers.cta.feature3.title',
    descriptionKey: 'customers.cta.feature3.description',
  },
];
