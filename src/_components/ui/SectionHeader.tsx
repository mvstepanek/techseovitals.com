import React from 'react';
import Badge from './Badge';
import { SectionHeaderProps } from '../../_types/common';
import { MAX_WIDTH_CLASSES } from '../../_data/constants';

const SectionHeader: React.FC<SectionHeaderProps> = ({ badge, title, subtitle, maxWidth = '3xl', align = 'center', className }) => {
  const alignmentClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignmentClasses} mb-16 ${className}`}>
      {/* Badge */}
      {badge && (
        <Badge icon={badge.icon} variant={badge.variant}>
          {badge.text}
        </Badge>
      )}

      {/* Title */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">{title}</h2>

      {/* Subtitle */}
      {subtitle && <p className={`text-lg text-gray-600 ${MAX_WIDTH_CLASSES[maxWidth]} ${align === 'center' ? 'mx-auto' : ''} leading-relaxed`}>{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
