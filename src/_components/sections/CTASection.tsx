import React from 'react';
import { BUSINESS_CONSTANTS, COMMON_STYLES, getBackgroundClass } from '../../_data/constants';
import Button from '../ui/Button';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import TrustSignalsList from '../ui/TrustSignalsList';
import CTAFeaturesGrid from '../ui/CTAFeaturesGrid';

interface BadgeProps {
  icon: React.ReactNode;
  text: string;
}

interface CTAProps {
  text: string;
  href: string;
  target?: string;
}

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface CTASectionProps {
  badge: BadgeProps;
  title: React.ReactNode;
  description: string;
  primaryCta: CTAProps;
  trustSignals?: string[];
  features?: FeatureProps[];
  backgroundColor?: 'white' | 'gray';
}

const CTASection: React.FC<CTASectionProps> = ({ badge, title, description, primaryCta, trustSignals = BUSINESS_CONSTANTS.TRUST_SIGNALS, features, backgroundColor = 'white' }) => {
  const bgClass = backgroundColor === 'gray' ? getBackgroundClass('gradientBlue') : getBackgroundClass('white');

  return (
    <section className={`${COMMON_STYLES.sectionPadding} ${bgClass} relative overflow-hidden`}>
      <BackgroundDecorations variant="default" />

      <div className={`relative ${COMMON_STYLES.containerWidth}`}>
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`${COMMON_STYLES.badge} mb-8`}>
            {badge.icon}
            {badge.text}
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">{title}</h2>

          {/* Description */}
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">{description}</p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <Button href={primaryCta.href} target={primaryCta.target}>
              {primaryCta.text}
            </Button>

            {/* Trust Signals */}
            {trustSignals && <TrustSignalsList signals={trustSignals} />}
          </div>

          {/* Features Grid (if provided) */}
          {features && <CTAFeaturesGrid features={features} />}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
