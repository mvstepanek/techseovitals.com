import React from 'react';
import { designTokens } from '@/lib/design-tokens';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  primary: designTokens.badge.primary,
  secondary: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700',
  success: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800',
  warning: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800'
};

const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-sm'
};

export function Badge({
  children,
  icon,
  variant = 'primary',
  size = 'lg',
  className = '',
  ...props
}: BadgeProps) {
  const variantClasses = variants[variant];
  const sizeClasses = size !== 'lg' ? sizes[size] : ''; // lg size is handled by variant
  
  return (
    <div 
      className={`${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {icon}
      {children}
    </div>
  );
}