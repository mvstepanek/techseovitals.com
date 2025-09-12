import React from 'react';
import { BaseSectionProps } from '@/lib/types';
import { designTokens } from '@/lib/design-tokens';

export function SectionHeader({ 
  badge, 
  badgeIcon, 
  title, 
  description, 
  className = '' 
}: BaseSectionProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {badge && (
        <div className={`${designTokens.badge.primary} mb-6`}>
          {badgeIcon}
          {badge}
        </div>
      )}
      <h2 className={`${designTokens.typography.sectionTitle} mb-6`}>
        {title}
      </h2>
      {description && (
        <p className={`${designTokens.typography.description} max-w-3xl mx-auto`}>
          {description}
        </p>
      )}
    </div>
  );
}