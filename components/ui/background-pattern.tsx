import React from 'react';

interface BackgroundPatternProps {
  variant?: 'dots' | 'blobs' | 'hero' | 'cta' | 'minimal';
  className?: string;
}

export function BackgroundPattern({ 
  variant = 'minimal', 
  className = '' 
}: BackgroundPatternProps) {
  const baseClasses = "absolute inset-0 pointer-events-none";
  const combinedClasses = className ? `${baseClasses} ${className}` : baseClasses;

  switch (variant) {
    case 'dots':
      return (
        <div className={combinedClasses}>
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
        </div>
      );

    case 'hero':
      return (
        <div className={combinedClasses}>
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
          <div className="absolute top-16 left-16 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40"></div>
          <div className="absolute top-24 right-32 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25"></div>
        </div>
      );

    case 'blobs':
      return (
        <div className={combinedClasses}>
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-70"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50"></div>
        </div>
      );

    case 'cta':
      return (
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50"></div>
        </div>
      );

    case 'minimal':
    default:
      return (
        <div className={combinedClasses}>
          <div className="absolute top-20 left-20 w-24 h-24 bg-purple-100 rounded-full blur-2xl opacity-60"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-60"></div>
        </div>
      );
  }
}

// Pre-configured background patterns for common use cases
export function HeroBackgroundPattern({ className }: { className?: string }) {
  return <BackgroundPattern variant="hero" className={className} />;
}

export function CTABackgroundPattern({ className }: { className?: string }) {
  return <BackgroundPattern variant="cta" className={className} />;
}

export function DotsBackgroundPattern({ className }: { className?: string }) {
  return <BackgroundPattern variant="dots" className={className} />;
}

export function BlobsBackgroundPattern({ className }: { className?: string }) {
  return <BackgroundPattern variant="blobs" className={className} />;
}