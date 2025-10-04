import React from 'react';
import Icons from './Icons';

interface TrustSignalBadgeProps {
  text: string;
  color?: 'blue' | 'green' | 'purple' | 'orange';
}

const TrustSignalBadge: React.FC<TrustSignalBadgeProps> = ({ text, color = 'blue' }) => {
  const colorClasses = {
    blue: 'bg-blue-50 text-blue-700',
    green: 'bg-green-50 text-green-700',
    purple: 'bg-purple-50 text-purple-700',
    orange: 'bg-orange-50 text-orange-700',
  };

  return (
    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${colorClasses[color]}`}>
      <Icons.checkmark className="w-4 h-4" />
      {text}
    </span>
  );
};

export default TrustSignalBadge;
