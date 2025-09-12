import React from 'react';
import { designTokens } from '@/lib/design-tokens';

interface BadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'gradient' | 'outline';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  pulse?: boolean;
}

const variants = {
  primary: designTokens.badge.primary,
  secondary: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gray-100 text-gray-700',
  success: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-green-100 text-green-800',
  warning: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-yellow-100 text-yellow-800',
  gradient: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg',
  outline: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white transition-colors'
};

const sizes = {
  sm: 'px-2 py-1 text-xs',
  md: 'px-3 py-1.5 text-sm',
  lg: 'px-4 py-2 text-sm',
  xl: 'px-6 py-3 text-base'
};

export function Badge({
  children,
  icon,
  variant = 'primary',
  size = 'lg',
  className = '',
  pulse = false,
  ...props
}: BadgeProps) {
  const variantClasses = variants[variant];
  const sizeClasses = size !== 'lg' ? sizes[size] : ''; // lg size is handled by variant
  const pulseClasses = pulse ? 'animate-pulse' : '';
  
  const combinedClasses = `${variantClasses} ${sizeClasses} ${pulseClasses} ${className}`.trim();
  
  return (
    <div 
      className={combinedClasses}
      {...props}
    >
      {icon}
      {children}
    </div>
  );
}