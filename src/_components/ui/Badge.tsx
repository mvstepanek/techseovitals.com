import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import { BadgeProps } from '../../_types/common';

const Badge: React.FC<BadgeProps> = React.memo(({ children, variant = 'default', icon, className }) => {
  const baseClasses = 'inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-sm font-semibold shadow-lg mb-4 sm:mb-6';

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
});

Badge.displayName = 'Badge';

export default Badge;
