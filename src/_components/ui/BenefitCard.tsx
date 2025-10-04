import React from 'react';
import { BenefitCardProps, COLOR_VARIANTS } from '../../_types/common';

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description, colorVariant = 'default', className }) => {
  const colors = COLOR_VARIANTS[colorVariant];

  return (
    <div
      className={`group relative bg-white p-8 rounded-2xl border ${colors.border} ${colors.hover} hover:shadow-lg transition-all duration-300 overflow-hidden sm:overflow-visible ${className}`}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
        <div className={colors.accent}>{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{description}</p>

      {/* Subtle background decoration */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gray-100/50 to-gray-200/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
};

export default BenefitCard;
