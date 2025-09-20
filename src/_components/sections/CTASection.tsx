import React from 'react';
import { BUSINESS_CONSTANTS, COMMON_STYLES } from '../../_data/constants';

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

const CTASection: React.FC<CTASectionProps> = ({
  badge,
  title,
  description,
  primaryCta,
  trustSignals = BUSINESS_CONSTANTS.TRUST_SIGNALS,
  features,
  backgroundColor = 'white',
}) => {
  const bgClass = backgroundColor === 'gray' ? 'bg-gradient-to-br from-slate-50 to-blue-50/30' : 'bg-white';

  return (
    <section className={`${COMMON_STYLES.sectionPadding} ${bgClass} relative overflow-hidden border-t border-gray-200`}>
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-50" />
      </div>

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">{description}</p>

          {/* CTA Button */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <a className={COMMON_STYLES.buttonPrimary} href={primaryCta.href} target={primaryCta.target}>
              <span className="relative z-10">{primaryCta.text}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </a>

            {/* Trust Signals */}
            {trustSignals && (
              <div className="flex items-center justify-center gap-4 text-gray-600">
                {trustSignals.map((signal, index) => (
                  <span key={index} className="text-sm">
                    ✓ {signal}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Features Grid (if provided) */}
          {features && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const colors = [
                  'from-blue-500 to-blue-600',
                  'from-green-500 to-green-600',
                  'from-purple-500 to-purple-600',
                ];
                const colorClass = colors[index % colors.length];

                return (
                  <div
                    key={index}
                    className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/50 border border-gray-200"
                  >
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${colorClass} rounded-2xl flex items-center justify-center mb-4`}
                    >
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 text-center">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
