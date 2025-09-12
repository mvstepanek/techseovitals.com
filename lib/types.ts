import React from 'react';

// Base section interface used across most section components
export interface BaseSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

// Common CTA interface
export interface CTA {
  text: string;
  href: string;
}

// Common image interface
export interface ImageData {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Status badge interface
export interface StatusBadge {
  text: string;
  icon?: React.ReactNode;
}

// Social proof interface
export interface SocialProof {
  icon: React.ReactNode;
  text: string;
}

// Service/Benefit item interface
export interface ServiceItem {
  icon: React.ReactNode;
  iconGradient: string;
  title: string;
  description: string;
}

// Enhanced service item with additional properties
export interface EnhancedServiceItem extends ServiceItem {
  hoverBorderColor?: string;
  metric?: string;
  metricColor?: string;
}

// Expertise item interface
export interface ExpertiseItem {
  icon: React.ReactNode;
  iconGradient: string;
  title: string;
  description: string;
}

// Statistics item interface
export interface StatisticItem {
  number: string;
  label: string;
  icon: React.ReactNode;
  gradient: string;
}

// How it works step interface
export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}

// Link with optional properties
export interface LinkData {
  text: string;
  href: string;
}

// Company logo interface
export interface CompanyLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}