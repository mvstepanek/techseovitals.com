import React from 'react';
import { ServiceItem, EnhancedServiceItem } from '@/lib/types';
import { designTokens } from '@/lib/design-tokens';

interface ServiceCardProps extends Partial<EnhancedServiceItem> {
  icon: React.ReactNode;
  iconGradient: string;
  title: string;
  description: string;
  className?: string;
}

export function ServiceCard({ 
  icon, 
  iconGradient, 
  title, 
  description, 
  hoverBorderColor,
  metric,
  metricColor,
  className = '' 
}: ServiceCardProps) {
  const hoverBorder = hoverBorderColor ? `hover:border-${hoverBorderColor}-200` : '';
  
  return (
    <div className={`group ${designTokens.card.base} ${designTokens.card.padding} ${designTokens.shadows.cardHover} ${hoverBorder} ${className}`}>
      {/* Background decoration */}
      {hoverBorderColor && (
        <div className={`absolute -top-4 -right-4 w-20 h-20 ${iconGradient} rounded-full opacity-10 group-hover:opacity-20 transition-opacity`}></div>
      )}
      
      {/* Icon */}
      <div className={`${designTokens.iconContainer.large} ${iconGradient} ${designTokens.iconContainer.base} mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      
      {/* Content */}
      <h3 className={`${designTokens.typography.cardTitle} mb-4`}>
        {title}
      </h3>
      <p className={`${designTokens.typography.cardDescription} ${metric ? 'mb-6' : ''}`}>
        {description}
      </p>
      
      {/* Metric */}
      {metric && metricColor && (
        <div className={`flex items-center gap-2 text-${metricColor}-600 font-semibold`}>
          <div className={`w-2 h-2 bg-${metricColor}-600 rounded-full`}></div>
          {metric}
        </div>
      )}
    </div>
  );
}