import React from 'react';

interface TrustSignalsListProps {
  signals: string[];
  className?: string;
  size?: 'sm' | 'md';
}

const TrustSignalsList = React.memo<TrustSignalsListProps>(({ signals, className = '', size = 'md' }) => (
  <div className={`flex items-center justify-center gap-4 text-gray-600 ${className}`}>
    {signals.map((signal) => (
      <span key={signal} className={size === 'sm' ? 'text-xs' : 'text-sm'}>
        ✓ {signal}
      </span>
    ))}
  </div>
));

TrustSignalsList.displayName = 'TrustSignalsList';

export default TrustSignalsList;
