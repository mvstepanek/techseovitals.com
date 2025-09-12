import React from 'react';
import { designTokens } from '@/lib/design-tokens';

interface IconContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
  gradient?: string;
  className?: string;
}

const sizes = {
  sm: designTokens.iconContainer.small,
  md: designTokens.iconContainer.medium,
  lg: designTokens.iconContainer.large
};

export function IconContainer({
  children,
  size = 'lg',
  gradient = 'bg-gray-100',
  className = ''
}: IconContainerProps) {
  const sizeClasses = sizes[size];
  
  return (
    <div className={`${sizeClasses} ${gradient} ${designTokens.iconContainer.base} ${className}`}>
      {children}
    </div>
  );
}