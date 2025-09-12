import React from 'react';
import { designTokens } from '@/lib/design-tokens';

interface SectionWrapperProps {
  variant?: 'default' | 'gray' | 'gradient' | 'hero' | 'cta';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  children: React.ReactNode;
  id?: string;
}

const variantClasses = {
  default: 'bg-white',
  gray: 'bg-gray-50',
  gradient: 'bg-gradient-to-br from-slate-50 via-white to-blue-50',
  hero: 'relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50',
  cta: 'bg-white relative overflow-hidden border-t border-gray-200'
} as const;

const sizeClasses = {
  sm: 'py-12',
  md: 'py-16', 
  lg: 'py-20',
  xl: 'py-24'
} as const;

export function SectionWrapper({
  variant = 'default',
  size = 'lg',
  className = '',
  children,
  id
}: SectionWrapperProps) {
  const baseClasses = `${variantClasses[variant]} ${sizeClasses[size]}`;
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  return (
    <section id={id} className={combinedClasses}>
      <div className={designTokens.containers.maxWidth}>
        {children}
      </div>
    </section>
  );
}

// Hero section wrapper with decorative elements
export function HeroSectionWrapper({
  className = '',
  children,
  id
}: Omit<SectionWrapperProps, 'variant' | 'size'>) {
  return (
    <section id={id} className={`relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28 ${className}`}>
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
        <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25"></div>
      </div>
      <div className={designTokens.containers.maxWidth}>
        {children}
      </div>
    </section>
  );
}

// CTA section wrapper with decorative elements
export function CTASectionWrapper({
  className = '',
  children,
  id
}: Omit<SectionWrapperProps, 'variant' | 'size'>) {
  return (
    <section id={id} className={`py-24 bg-white relative overflow-hidden border-t border-gray-200 ${className}`}>
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className={`relative ${designTokens.containers.maxWidth}`}>
        {children}
      </div>
    </section>
  );
}