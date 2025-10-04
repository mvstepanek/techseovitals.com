import React from 'react';

interface CardDecorationProps {
  color: 'blue' | 'green' | 'purple' | 'orange' | 'indigo';
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const CardDecoration: React.FC<CardDecorationProps> = ({ color, size = 'md', position = 'top-right' }) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600',
    green: 'from-green-500 to-green-600',
    purple: 'from-purple-500 to-purple-600',
    orange: 'from-orange-500 to-orange-600',
    indigo: 'from-indigo-500 to-indigo-600',
  };

  const sizeClasses = {
    sm: 'w-16 h-16 sm:w-20 sm:h-20',
    md: 'w-16 sm:w-24 h-16 sm:h-24',
    lg: 'w-24 h-24 sm:w-32 sm:h-32',
  };

  const positionClasses = {
    'top-right': '-top-2 -right-2 sm:-top-4 sm:-right-4 rotate-12',
    'top-left': '-top-2 -left-2 sm:-top-4 sm:-left-4 -rotate-12',
    'bottom-right': '-bottom-2 -right-2 sm:-bottom-4 sm:-right-4 -rotate-12',
    'bottom-left': '-bottom-2 -left-2 sm:-bottom-4 sm:-left-4 rotate-12',
  };

  return (
    <div
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} bg-gradient-to-br ${colorClasses[color]} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`}
    />
  );
};

export default CardDecoration;
