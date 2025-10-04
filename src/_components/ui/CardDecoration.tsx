import React from 'react';
import { getGradientClass, ColorType } from '../../_data/constants';

interface CardDecorationProps {
  color: ColorType;
  size?: 'sm' | 'md' | 'lg';
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const CardDecoration: React.FC<CardDecorationProps> = ({ color, size = 'md', position = 'top-right' }) => {
  const gradientClass = getGradientClass(color);

  const sizeClasses = {
    sm: 'w-12 h-12 sm:w-16 sm:h-16',
    md: 'w-14 sm:w-20 h-14 sm:h-20',
    lg: 'w-16 h-16 sm:w-24 sm:h-24',
  };

  const positionClasses = {
    'top-right': '-top-2 -right-2 sm:-top-4 sm:-right-4 rotate-12',
    'top-left': '-top-2 -left-2 sm:-top-4 sm:-left-4 -rotate-12',
    'bottom-right': '-bottom-2 -right-2 sm:-bottom-4 sm:-right-4 -rotate-12',
    'bottom-left': '-bottom-2 -left-2 sm:-bottom-4 sm:-left-4 rotate-12',
  };

  return <div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} bg-gradient-to-br ${gradientClass} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`} />;
};

export default CardDecoration;
