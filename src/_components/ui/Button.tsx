import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'newsletter';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit';
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  type = 'button',
  target,
  rel,
}) => {
  const baseClasses =
    'group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold rounded-xl inline-flex items-center justify-center';

  const variantClasses = {
    primary:
      'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-purple-500/30',
    secondary:
      'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-xl hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-green-300',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-primary-500 hover:text-primary-500',
    newsletter:
      'bg-gradient-to-r from-yellow-200 to-orange-200 text-purple-800 shadow-xl hover:scale-105 hover:shadow-2xl focus:ring-4 focus:ring-yellow-300/30',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-8 py-4 text-xl',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </>
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={combinedClasses}>
      {content}
    </button>
  );
};

export default Button;
