export const designTokens = {
  // Gradients
  gradients: {
    primaryText: 'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent',
    primaryBg: 'bg-gradient-to-r from-primary to-primary-dark',
    primaryLight: 'bg-gradient-to-r from-primary/20 to-secondary/20',
    heroSection: 'bg-gradient-to-br from-primary/5 via-white to-secondary',
    blogPreview: 'bg-gradient-to-br from-slate-50 to-blue-50/30',
    whyMeSection: 'bg-gradient-to-br from-gray-50 to-slate-100',
    decorativeBlur: 'bg-gradient-to-r from-purple-400/20 to-indigo-400/20',
    imageGlow: 'bg-gradient-to-r from-primary/20 to-secondary/20'
  },
  
  // Shadows
  shadows: {
    card: 'shadow-lg hover:shadow-2xl transition-all duration-300',
    cardBase: 'shadow-lg',
    cardHover: 'hover:shadow-2xl transition-all duration-300',
    image: 'shadow-2xl',
    button: 'shadow-xl hover:shadow-2xl'
  },
  
  // Common class combinations
  containers: {
    maxWidth: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
    section: 'py-24',
    sectionSmall: 'py-20',
    sectionLarge: 'py-20 lg:py-32'
  },
  
  // Typography
  typography: {
    heroTitle: 'text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl',
    sectionTitle: 'text-4xl sm:text-5xl font-bold text-gray-900',
    cardTitle: 'text-xl font-bold text-gray-900',
    description: 'text-xl text-gray-600',
    cardDescription: 'text-gray-600 leading-relaxed'
  },
  
  // Badge styles
  badge: {
    primary: 'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white',
    pulse: 'w-2 h-2 bg-white rounded-full animate-pulse'
  },
  
  // Icon containers
  iconContainer: {
    base: 'flex items-center justify-center rounded-2xl',
    large: 'w-16 h-16',
    medium: 'w-12 h-12',
    small: 'w-8 h-8'
  },
  
  // Card styles
  card: {
    base: 'bg-white rounded-3xl border border-gray-100',
    elevated: 'bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100',
    padding: 'p-8'
  },
  
  // Button styles
  button: {
    primary: 'group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30',
    primaryOverlay: 'absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300'
  },
  
  // Grid layouts
  grid: {
    blog: 'grid grid-cols-1 md:grid-cols-3 gap-8',
    services: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8',
    testimonials: 'grid grid-cols-1 lg:grid-cols-2 gap-8'
  }
} as const;

// Helper function to combine classes
export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}