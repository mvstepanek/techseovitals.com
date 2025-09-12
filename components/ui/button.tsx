import React from 'react';
import Link from 'next/link';
import { designTokens } from '@/lib/design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'cta' | 'cta-secondary';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const variants = {
  primary: designTokens.button.primary,
  secondary: 'px-8 py-4 text-lg font-semibold text-primary hover:text-primary-dark transition-colors rounded-xl border-2 border-gray-300 hover:border-primary',
  outline: 'inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-gray-300 font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all',
  cta: 'group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30',
  'cta-secondary': 'inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl border-2 border-primary bg-transparent font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
  xl: 'px-10 py-5 text-xl'
};

export function Button({
  children,
  variant = 'primary',
  size = 'lg',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
  ...props
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-3 font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  const variantClasses = variants[variant];
  const sizeClasses = !['cta', 'cta-secondary'].includes(variant) && size !== 'lg' ? sizes[size] : '';
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  const renderContent = () => {
    const hasSpecialEffect = variant === 'primary' || variant === 'cta';
    
    const content = (
      <>
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span>{icon}</span>}
      </>
    );

    if (hasSpecialEffect) {
      return (
        <span className="relative">
          <span className="relative z-10 flex items-center gap-3">
            {content}
          </span>
          {variant === 'primary' && <div className={designTokens.button.primaryOverlay}></div>}
          {variant === 'cta' && <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>}
        </span>
      );
    }

    return content;
  };

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {renderContent()}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
      {...props}
    >
      {renderContent()}
    </button>
  );
}