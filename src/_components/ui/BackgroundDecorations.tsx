import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

interface BackgroundDecorationsProps {
  variant?: 'default' | 'centered' | 'minimal' | 'hero' | 'cta' | 'newsletter' | 'simple' | 'complex';
  className?: string;
}

const BackgroundDecorations: React.FC<BackgroundDecorationsProps> = ({ variant = 'default', className = '' }) => {
  const decorations = {
    // Original variants (preserved)
    default: (
      <>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-30" />
        <div className={`${COMMON_STYLES.blurredBlob} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96`} />
      </>
    ),
    centered: (
      <>
        <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25" />
      </>
    ),
    minimal: (
      <>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
      </>
    ),

    // New enhanced variants for common section patterns
    hero: (
      <>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-40" />
        <div className={`${COMMON_STYLES.blurredBlob} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96`} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-3xl opacity-25" />
      </>
    ),
    cta: (
      <>
        <div className="absolute top-16 left-1/4 w-40 h-40 bg-purple-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-1/4 w-32 h-32 bg-indigo-300 rounded-full blur-3xl opacity-30" />
      </>
    ),
    newsletter: (
      <>
        <div className="absolute top-24 left-24 w-28 h-28 bg-yellow-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-24 right-24 w-36 h-36 bg-orange-200 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-1/2 right-12 w-20 h-20 bg-purple-200 rounded-full blur-3xl opacity-30" />
      </>
    ),
    simple: (
      <>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40" />
        <div className="absolute top-32 right-24 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25" />
        <div className="absolute bottom-20 right-16 w-28 h-28 bg-slate-300 rounded-full blur-3xl opacity-35" />
      </>
    ),
    complex: (
      <>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
        <div className={`${COMMON_STYLES.blurredBlob} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96`} />
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-300 rounded-full blur-3xl opacity-60" />
        <div className="absolute bottom-16 left-16 w-20 h-20 bg-slate-300 rounded-full blur-3xl opacity-50" />
      </>
    ),
  };

  return <div className={`absolute inset-0 pointer-events-none ${className}`}>{decorations[variant]}</div>;
};

export default BackgroundDecorations;
