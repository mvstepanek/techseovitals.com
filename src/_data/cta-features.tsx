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
    titleKey: 'common.cta-feature.free.title',
    descriptionKey: 'common.cta-feature.free.description',
  },
  {
    id: 'quick-call',
    icon: <Icons.clock className="w-8 h-8 text-white" />,
    titleKey: 'common.cta-feature.time.title',
    descriptionKey: 'common.cta-feature.time.description',
  },
  {
    id: 'immediate-value',
    icon: <Icons.star className="w-8 h-8 text-white" />,
    titleKey: 'common.cta-feature.value.title',
    descriptionKey: 'common.cta-feature.value.description',
  },
];
