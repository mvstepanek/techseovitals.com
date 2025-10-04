import React from 'react';
import FeatureCard from '../ui/FeatureCard';
import SectionHeader from '../ui/SectionHeader';
import { COMMON_STYLES } from '../../_data/constants';

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

const BenefitsSection: React.FC<BenefitsSectionProps> = ({ badge, title, subtitle, benefits, borderTop = false }) => (
  <div className={borderTop ? 'border-t border-gray-200' : ''}>
    <section className="py-24 bg-white">
      <div className={COMMON_STYLES.containerWidth}>
        <SectionHeader badge={{ icon: badge.icon, text: badge.text }} title={title} subtitle={subtitle} maxWidth="4xl" className="mb-4" />
        <div className={COMMON_STYLES.threeColumnGrid}>
          {benefits.map((benefit, index) => (
            <FeatureCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} tagline={benefit.tagline} color={benefit.color} />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default BenefitsSection;
