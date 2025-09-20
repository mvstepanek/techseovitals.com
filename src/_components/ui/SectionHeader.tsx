import React from 'react';
import Badge from './Badge';
import { SectionHeaderProps } from '../../_types/common';

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  subtitle,
  maxWidth = '3xl',
  align = 'center',
  className = '',
}) => {
  const alignmentClasses = align === 'center' ? 'text-center' : 'text-left';

  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
  };

  return (
    <div className={`${alignmentClasses} mb-16 ${className}`}>
      {/* Badge */}
      {badge && (
        <Badge icon={badge.icon} variant={badge.variant}>
          {badge.text}
        </Badge>
      )}

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p className={`text-lg text-gray-600 ${maxWidthClasses[maxWidth]} ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;