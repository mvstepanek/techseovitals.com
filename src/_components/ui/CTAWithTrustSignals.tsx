import React from 'react';
import Button from '../ui/Button';
import TrustSignalsList from './TrustSignalsList';

interface CTAWithTrustSignalsProps {
  text: string;
  href: string;
  trustSignals?: string[];
  variant?: 'primary' | 'secondary';
  className?: string;
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const CTAWithTrustSignals: React.FC<CTAWithTrustSignalsProps> = ({
  text,
  href,
  trustSignals,
  variant = 'primary',
  className,
  t = defaultT
}) => {
  const defaultTrustSignals = [t('trust.free-consultation'), t('trust.no-commitment')];
  const displayTrustSignals = trustSignals || defaultTrustSignals;

  return (
    <div className={`flex flex-col items-center gap-4 mb-16 ${className || ''}`}>
      <Button href={href} variant={variant} size="lg">
        {text}
      </Button>
      {displayTrustSignals && displayTrustSignals.length > 0 && <TrustSignalsList signals={displayTrustSignals} />}
    </div>
  );
};

export default CTAWithTrustSignals;
