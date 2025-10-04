import React from 'react';

interface StatItem {
  value: string;
  label: string;
  color: 'green' | 'blue' | 'purple' | 'red' | 'yellow' | 'orange';
}

interface StatsGridProps {
  stats: StatItem[];
}

const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => {
  const getColorClass = (color: string) => {
    switch (color) {
      case 'green':
        return 'from-green-600 to-emerald-600';
      case 'blue':
        return 'from-blue-600 to-indigo-600';
      case 'purple':
        return 'from-purple-600 to-pink-600';
      case 'red':
        return 'from-red-600 to-rose-600';
      case 'yellow':
        return 'from-yellow-600 to-amber-600';
      case 'orange':
        return 'from-orange-600 to-red-600';
      default:
        return 'from-blue-600 to-indigo-600';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
