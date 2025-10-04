import React from 'react';
import { COMMON_STYLES, getGradientClass, ColorType } from '../../_data/constants';

interface StatItem {
  value: string;
  label: string;
  color: ColorType | 'red' | 'yellow';
}

interface StatsGridProps {
  stats: StatItem[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const getColorClass = (color: string) => {
    // Map red/yellow to existing colors, otherwise use getGradientClass
    if (color === 'red' || color === 'yellow') {
      return color === 'red' ? 'from-red-600 to-rose-600' : 'from-yellow-600 to-amber-600';
    }
    return getGradientClass(color as ColorType).replace('500', '600');
  };

  return (
    <div className={`${COMMON_STYLES.threeColumnGrid} mb-16`}>
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className={`text-5xl font-bold bg-gradient-to-r ${getColorClass(stat.color)} bg-clip-text text-transparent mb-2`}>{stat.value}</div>
          <div className="text-gray-600 font-semibold">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsGrid;
