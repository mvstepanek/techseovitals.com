import React from 'react';
import TrustBadge from './TrustBadge';
import IconContainer from './IconContainer';

interface ProcessStepCardProps {
  stepNumber: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
  trustSignals?: string[];
  trustSignalColor?: 'blue' | 'green' | 'purple' | 'orange';
}

const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  stepNumber,
  icon,
  title,
  description,
  color = 'bg-gradient-to-br from-purple-500 to-indigo-600',
  trustSignals,
  trustSignalColor = 'blue',
}) => {
  // Map gradient classes to IconContainer color props
  const getIconColor = (colorClass: string): 'blue' | 'green' | 'purple' | 'orange' | 'indigo' => {
    if (colorClass.includes('blue')) return 'blue';
    if (colorClass.includes('green') || colorClass.includes('emerald')) return 'green';
    if (colorClass.includes('orange') || colorClass.includes('red')) return 'orange';
    if (colorClass.includes('indigo')) return 'indigo';
    return 'purple';
  };

  return (
    <div className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
      {/* Step Number */}
      <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg">
        {stepNumber}
      </div>

      {/* Icon */}
      <IconContainer icon={icon} color={getIconColor(color)} size="md" className="mb-6" />

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>

      {/* Trust Signals */}
      {trustSignals && trustSignals.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {trustSignals.map((signal, index) => (
            <TrustBadge key={index} text={signal} color={trustSignalColor} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProcessStepCard;
