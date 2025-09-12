import React from 'react';
import Link from 'next/link';
import { designTokens } from '@/lib/design-tokens';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

const variants = {
  primary: designTokens.button.primary,
  secondary: 'px-8 py-4 text-lg font-semibold text-primary hover:text-primary-dark transition-colors rounded-xl border-2 border-gray-300 hover:border-primary',
  outline: 'inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-gray-300 font-semibold text-gray-700 hover:border-primary hover:text-primary transition-all'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
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
  ...props
}: ButtonProps) {
  const baseClasses = `font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/30 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
  const variantClasses = variants[variant];
  const sizeClasses = size !== 'lg' ? sizes[size] : ''; // lg size is handled by variant
  
  const combinedClasses = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={combinedClasses} {...props}>
        {variant === 'primary' ? (
          <span className="group relative">
            <span className="relative z-10">{children}</span>
            <div className={designTokens.button.primaryOverlay}></div>
          </span>
        ) : (
          children
        )}
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
      {variant === 'primary' ? (
        <span className="group relative">
          <span className="relative z-10">{children}</span>
          <div className={designTokens.button.primaryOverlay}></div>
        </span>
      ) : (
        children
      )}
    </button>
  );
}