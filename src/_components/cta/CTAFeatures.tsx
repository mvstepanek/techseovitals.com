import React from 'react';
import Icons from '../ui/Icons';

interface CTAFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CTAFeaturesProps {
  features?: CTAFeature[];
}

const DEFAULT_FEATURES: CTAFeature[] = [
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

const CTAFeatures: React.FC<CTAFeaturesProps> = ({ features = DEFAULT_FEATURES }) => {
  return features;
};

export default CTAFeatures;
export { DEFAULT_FEATURES };
