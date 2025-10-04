import React from 'react';
import CardDecoration from '../ui/CardDecoration';
import { COLOR_SCHEMES } from '../../_data/constants';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tagline?: string;
  color: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'orange';
  showTagline?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, tagline, color, showTagline = true }) => {
  // Map red/yellow to purple/orange for COLOR_SCHEMES compatibility
  const mappedColor = color === 'red' ? 'purple' : color === 'yellow' ? 'orange' : color;
  const colorClasses = COLOR_SCHEMES[mappedColor] || COLOR_SCHEMES.blue;

  return (
    <div
      className={`group relative bg-white p-8 rounded-2xl border border-gray-200 hover:${colorClasses.border} hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible`}
    >
      <CardDecoration color={color === 'red' ? 'purple' : color === 'yellow' ? 'orange' : color} size="lg" />
      <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>{icon}</div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
      {showTagline && tagline && (
        <div className={`flex items-center gap-2 font-semibold ${colorClasses.text}`}>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
          </svg>
          {tagline}
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
