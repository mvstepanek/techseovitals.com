import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tagline?: string;
  color: 'blue' | 'green' | 'purple' | 'red' | 'yellow' | 'orange';
  showTagline?: boolean;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, tagline, color, showTagline = true }) => {
  const getColorClasses = () => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-500 to-blue-600',
          border: 'border-blue-200',
          accent: 'from-blue-500 to-blue-600',
          text: 'text-blue-600',
        };
      case 'green':
        return {
          bg: 'from-green-500 to-green-600',
          border: 'border-green-200',
          accent: 'from-green-500 to-green-600',
          text: 'text-green-600',
        };
      case 'purple':
        return {
          bg: 'from-purple-500 to-purple-600',
          border: 'border-purple-200',
          accent: 'from-purple-500 to-purple-600',
          text: 'text-purple-600',
        };
      case 'red':
        return {
          bg: 'from-red-500 to-red-600',
          border: 'border-red-200',
          accent: 'from-red-500 to-red-600',
          text: 'text-red-600',
        };
      case 'yellow':
        return {
          bg: 'from-yellow-500 to-yellow-600',
          border: 'border-yellow-200',
          accent: 'from-yellow-500 to-yellow-600',
          text: 'text-yellow-600',
        };
      case 'orange':
        return {
          bg: 'from-orange-500 to-orange-600',
          border: 'border-orange-200',
          accent: 'from-orange-500 to-orange-600',
          text: 'text-orange-600',
        };
      default:
        return {
          bg: 'from-blue-500 to-blue-600',
          border: 'border-blue-200',
          accent: 'from-blue-500 to-blue-600',
          text: 'text-blue-600',
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div
      className={`group relative bg-white p-8 rounded-2xl border border-gray-200 hover:${colorClasses.border} hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible`}
    >
      <div
        className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br ${colorClasses.accent} rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity`}
      />
      <div
        className={`w-16 h-16 bg-gradient-to-br ${colorClasses.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
      >
        {icon}
      </div>
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
