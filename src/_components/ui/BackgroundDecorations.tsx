import React from 'react';

interface BackgroundDecorationsProps {
  variant?: 'default' | 'centered' | 'minimal';
  className?: string;
}

const BackgroundDecorations: React.FC<BackgroundDecorationsProps> = ({ variant = 'default', className = '' }) => {
  const decorations = {
    default: (
      <>
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-50" />
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
  };

  return <div className={`absolute inset-0 pointer-events-none ${className}`}>{decorations[variant]}</div>;
};

export default BackgroundDecorations;
