import React from 'react';
import Button from '../ui/Button';

interface CTAWithTrustSignalsProps {
  text: string;
  href: string;
  trustSignals?: string[];
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CTAWithTrustSignals: React.FC<CTAWithTrustSignalsProps> = ({ text, href, trustSignals = ['Free consultation', 'No commitment'], variant = 'primary', className }) => (
  <div className={`flex flex-col items-center gap-4 mb-16 ${className || ''}`}>
    <Button href={href} variant={variant} size="lg">
      {text}
    </Button>
    {trustSignals && trustSignals.length > 0 && (
      <div className="flex items-center justify-center gap-4 text-gray-600">
        {trustSignals.map((signal, index) => (
          <span key={index} className="text-sm">
            ✓ {signal}
          </span>
        ))}
      </div>
    )}
  </div>
);

export default CTAWithTrustSignals;
