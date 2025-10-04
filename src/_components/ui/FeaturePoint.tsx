import React from 'react';

interface FeaturePointProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  color?: string;
}

const FeaturePoint = React.memo<FeaturePointProps>(({ icon, title, description, color = 'bg-gradient-to-br from-purple-500 to-indigo-600' }) => (
  <div className="flex items-start gap-4">
    <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>{icon}</div>
    <div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
));

FeaturePoint.displayName = 'FeaturePoint';

export default FeaturePoint;
