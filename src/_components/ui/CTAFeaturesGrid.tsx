import React from 'react';
import { getGradientClass, ColorType } from '../../_data/constants';

interface CTAFeature {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CTAFeaturesGridProps {
  features: CTAFeature[];
  className?: string;
}

const CTAFeaturesGrid: React.FC<CTAFeaturesGridProps> = ({ features, className = '' }) => {
  const colors: ColorType[] = ['blue', 'green', 'purple'];

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 ${className}`}>
      {features.map((feature, index) => {
        const color = colors[index % colors.length];
        const gradientClass = getGradientClass(color);

        return (
          <div key={feature.id} className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200">
            <div className={`w-16 h-16 bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center mb-4`}>{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default CTAFeaturesGrid;
