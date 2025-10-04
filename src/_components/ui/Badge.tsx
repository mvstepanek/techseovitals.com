import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'newsletter';
  icon?: React.ReactNode;
  className?: string;
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', icon, className }) => {
  const baseClasses = 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold shadow-lg mb-6';

  const variantClasses = {
    default: `${COMMON_STYLES.gradientBg} text-white`,
    outline: 'bg-white/20 text-white border border-white/30 backdrop-blur-sm',
    newsletter: 'bg-white/20 text-white border border-white/30 backdrop-blur-sm',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <div className={combinedClasses}>
      {icon && icon}
      {children}
    </div>
  );
};

export default Badge;
