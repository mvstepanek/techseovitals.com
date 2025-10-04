import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import FeatureCard from '../business/FeatureCard';
import Badge from '../ui/Badge';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  tagline: string;
  color: 'blue' | 'green' | 'purple';
}

interface BenefitsSectionProps {
  badge: {
    icon: React.ReactNode;
    text: string;
  };
  title: React.ReactNode;
  subtitle: string;
  benefits: Benefit[];
  borderTop?: boolean;
}

const BenefitsSection: React.FC<BenefitsSectionProps> = ({
  badge,
  title,
  subtitle,
  benefits,
  borderTop = false
}) => (
  <div className={borderTop ? 'border-t border-gray-200' : ''}>
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-6">
          <Badge icon={badge.icon}>
            {badge.text}
          </Badge>
        </div>
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
            {subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <FeatureCard
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              tagline={benefit.tagline}
              color={benefit.color}
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BenefitsSection;
