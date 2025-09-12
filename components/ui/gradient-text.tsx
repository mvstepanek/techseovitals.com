import React from 'react';
import { designTokens } from '@/lib/design-tokens';

interface GradientTextProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'warm' | 'cool';
  className?: string;
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
}

const gradientVariants = {
  primary: designTokens.gradients.primaryText,
  secondary: 'bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent',
  accent: 'bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent',
  warm: 'bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent',
  cool: 'bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent'
} as const;

export function GradientText({
  children,
  variant = 'primary',
  className = '',
  as: Component = 'span'
}: GradientTextProps) {
  const gradientClass = gradientVariants[variant];
  const combinedClasses = className ? `${gradientClass} ${className}` : gradientClass;

  return (
    <Component className={combinedClasses}>
      {children}
    </Component>
  );
}

// Pre-configured gradient text components for common use cases
export function PrimaryGradientText({ children, className, as }: Omit<GradientTextProps, 'variant'>) {
  return <GradientText variant="primary" className={className} as={as}>{children}</GradientText>;
}

export function SecondaryGradientText({ children, className, as }: Omit<GradientTextProps, 'variant'>) {
  return <GradientText variant="secondary" className={className} as={as}>{children}</GradientText>;
}

export function AccentGradientText({ children, className, as }: Omit<GradientTextProps, 'variant'>) {
  return <GradientText variant="accent" className={className} as={as}>{children}</GradientText>;
}