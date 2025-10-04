import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Automatically applies gradient styling to text.
 * Usage: <h2>Users First. <GradientText>Search Engines Follow</GradientText></h2>
 * Or simply use <span> which will automatically get gradient styling when used in titles/headings
 */
const GradientText: React.FC<GradientTextProps> = ({ children, className }) => (
  <span className={`bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent ${className}`}>{children}</span>
);

export default GradientText;
