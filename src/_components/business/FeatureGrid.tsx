import React from 'react';
import Badge from '../ui/Badge';
import { COMMON_STYLES } from '../../_data/constants';

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

const FeatureGrid: React.FC<FeatureGridProps> = ({
  badge,
  title,
  subtitle,
  cta,
  features,
  backgroundColor = 'gray',
  columns = 4,
  bottomText,
}) => {
  const bgClasses = backgroundColor === 'gray' ? 'bg-gradient-to-br from-gray-50 to-slate-100' : 'bg-white';
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

  const getColorClasses = (color?: string) => {
    switch (color) {
      case 'green':
        return 'bg-gradient-to-br from-green-500 to-emerald-600';
      case 'blue':
        return 'bg-gradient-to-br from-blue-500 to-cyan-600';
      case 'red':
        return 'bg-gradient-to-br from-red-500 to-rose-600';
      case 'yellow':
        return 'bg-gradient-to-br from-yellow-500 to-amber-600';
      case 'orange':
        return 'bg-gradient-to-br from-orange-500 to-red-600';
      case 'indigo':
        return 'bg-gradient-to-br from-indigo-500 to-purple-600';
      case 'purple':
      default:
        return COMMON_STYLES.gradientBgDiagonal;
    }
  };

  return (
    <div className={borderClasses}>
      <section className={`py-24 ${bgClasses}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {badge && <Badge icon={badge.icon}>{badge.text}</Badge>}

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{title}</h2>

            {subtitle && <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">{subtitle}</p>}

            {cta && (
              <div className="flex flex-col items-center gap-4">
                <a
                  className={COMMON_STYLES.buttonPrimary}
                  href={cta.href}
                >
                  <span className="relative z-10">{cta.text}</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                </a>
                {cta.trustSignals && (
                  <div className="flex items-center justify-center gap-4 text-gray-600">
                    {cta.trustSignals.map((signal, index) => (
                      <span key={index} className="text-sm">
                        ✓ {signal}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className={`grid ${getGridCols()} gap-8`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
              >
                <div
                  className={`w-16 h-16 ${getColorClasses(feature.color)} rounded-2xl flex items-center justify-center mb-6`}
                >
                  {feature.icon}
                </div>
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
