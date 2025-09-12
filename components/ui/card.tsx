import React from 'react';
import { designTokens } from '@/lib/design-tokens';

interface CardProps {
  children: React.ReactNode;
  variant?: 'base' | 'elevated' | 'interactive';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
}

const variants = {
  base: designTokens.card.base,
  elevated: designTokens.card.elevated,
  interactive: `${designTokens.card.elevated} cursor-pointer`
};

const paddings = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8'
};

export function Card({
  children,
  variant = 'base',
  padding = 'lg',
  className = '',
  ...props
}: CardProps) {
  const variantClasses = variants[variant];
  const paddingClasses = paddings[padding];
  
  return (
    <div 
      className={`${variantClasses} ${paddingClasses} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={className}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`mt-4 ${className}`}>
      {children}
    </div>
  );
}