import React from 'react';

interface GridLayoutProps {
  children: React.ReactNode;
  columns: 2 | 3 | 4;
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

const GridLayout = React.memo<GridLayoutProps>(({ children, columns, gap = 'md', className = '' }) => {
  const columnClasses = {
    2: 'grid-cols-1 lg:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  };

  const gapClasses = {
    sm: 'gap-4',
    md: 'gap-8',
    lg: 'gap-12',
  };

  return <div className={`grid ${columnClasses[columns]} ${gapClasses[gap]} ${className}`}>{children}</div>;
});

GridLayout.displayName = 'GridLayout';

export default GridLayout;
