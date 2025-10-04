import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { COMMON_STYLES, getBackgroundClass } from '../../_data/constants';
import IconContainer from '../ui/IconContainer';
import TrustSignalsList from '../ui/TrustSignalsList';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: 'purple' | 'green' | 'blue' | 'red' | 'yellow' | 'orange' | 'indigo';
}

interface FeatureGridProps {
  badge?: {
    icon?: React.ReactNode;
    text: string;
  };
  title: React.ReactNode;
  subtitle?: string;
  cta?: {
    text: string;
    href: string;
    trustSignals?: string[];
  };
  features: Feature[];
  backgroundColor?: 'white' | 'gray';
  columns?: 2 | 3 | 4;
  bottomText?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({ badge, title, subtitle, cta, features, backgroundColor = 'gray', columns = 4, bottomText }) => {
  const bgClass = backgroundColor === 'gray' ? getBackgroundClass('gradientSlate') : getBackgroundClass('white');
  const borderClasses = backgroundColor === 'white' ? 'border-t border-gray-200' : '';

  const getGridCols = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 lg:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
    }
  };

  const getIconColor = (color?: string): 'blue' | 'green' | 'purple' | 'orange' | 'indigo' => {
    switch (color) {
      case 'green':
        return 'green';
      case 'blue':
        return 'blue';
      case 'orange':
      case 'red':
      case 'yellow':
        return 'orange';
      case 'indigo':
        return 'indigo';
      case 'purple':
      default:
        return 'purple';
    }
  };

  return (
    <div className={borderClasses}>
      <section className={`py-24 ${bgClass}`}>
        <div className={COMMON_STYLES.containerWidth}>
          <div className="text-center mb-16">
            {badge && <Badge icon={badge.icon}>{badge.text}</Badge>}

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{title}</h2>

            {subtitle && <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">{subtitle}</p>}

            {cta && (
              <div className="flex flex-col items-center gap-4">
                <Button href={cta.href}>{cta.text}</Button>
                {cta.trustSignals && <TrustSignalsList signals={cta.trustSignals} />}
              </div>
            )}
          </div>

          <div className={`grid ${getGridCols()} gap-8`}>
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <IconContainer icon={feature.icon} color={getIconColor(feature.color)} size="md" className="mb-6" />
                <h3 className="text-xl font-sans font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>

          {bottomText && (
            <div className="mt-12 text-center">
              <p className="text-lg text-gray-600">{bottomText}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default FeatureGrid;
