import React from 'react';
import { getGradientClass, ColorType } from '../../_data/constants';

interface IconContainerProps {
  icon: React.ReactNode;
  color: ColorType;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const IconContainer = React.memo<IconContainerProps>(({ icon, color, size = 'md', className }) => {
  const gradientClass = color === 'purple' ? 'from-purple-600 to-indigo-600' : getGradientClass(color);

  const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-20 h-20',
  };

  return (
    <div className={`${sizeClasses[size]} bg-gradient-to-br ${gradientClass} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-xl ${className || ''}`}>
      {icon}
    </div>
  );
});

IconContainer.displayName = 'IconContainer';

export default IconContainer;
