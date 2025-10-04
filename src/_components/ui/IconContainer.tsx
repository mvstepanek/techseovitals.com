import React from 'react';

interface IconContainerProps {
  icon: React.ReactNode;
  color: 'blue' | 'green' | 'purple' | 'orange' | 'indigo';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconContainer: React.FC<IconContainerProps> = ({ icon, color, size = 'md', className }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-600 to-indigo-600',
    orange: 'from-orange-500 to-orange-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  return (
    <div
      className={`${sizeClasses[size]} bg-gradient-to-br ${colorClasses[color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl ${className || ''}`}
    >
      {icon}
    </div>
  );
};

export default IconContainer;
