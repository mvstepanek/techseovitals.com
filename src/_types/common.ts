// Shared type definitions for common component patterns

export interface BadgeProps {
  icon?: React.ReactNode;
  variant?: 'default' | 'outline' | 'newsletter';
  children: React.ReactNode;
}

export interface CTAProps {
  text: string;
  href: string;
  target?: '_blank' | '_self';
  className?: string;
}

export interface SectionHeaderProps {
  badge?: {
    icon?: React.ReactNode;
    text: string;
    variant?: BadgeProps['variant'];
  };
  title: React.ReactNode;
  subtitle?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';
  align?: 'center' | 'left';
  className?: string;
}

export interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  colorVariant?: 'default' | 'green' | 'blue' | 'purple' | 'indigo' | 'orange';
  className?: string;
}

export interface TestimonialCardProps {
  name: string;
  position: string;
  company: string;
  text: string;
  linkedinUrl?: string;
  image?: string;
  className?: string;
}

export interface IconProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Color variant utilities
export const COLOR_VARIANTS = {
  default: { border: 'border-gray-200', accent: 'text-gray-600', hover: 'hover:border-gray-300' },
  green: { border: 'border-green-200', accent: 'text-green-600', hover: 'hover:border-green-300' },
  blue: { border: 'border-blue-200', accent: 'text-blue-600', hover: 'hover:border-blue-300' },
  purple: {
    border: 'border-purple-200',
    accent: 'text-purple-600',
    hover: 'hover:border-purple-300',
  },
  indigo: {
    border: 'border-indigo-200',
    accent: 'text-indigo-600',
    hover: 'hover:border-indigo-300',
  },
  orange: {
    border: 'border-orange-200',
    accent: 'text-orange-600',
    hover: 'hover:border-orange-300',
  },
} as const;

export type ColorVariant = keyof typeof COLOR_VARIANTS;

// Common layout props
export interface CommonLayoutProps {
  className?: string;
  children: React.ReactNode;
}
