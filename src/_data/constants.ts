// Business constants and shared values
export const BUSINESS_CONSTANTS = {
  // URLs
  CONTACT_URL: '/contact/',
  LINKEDIN_URL: 'https://www.linkedin.com/in/techseovitals/details/recommendations/',

  // CTA text variations
  CTA_TEXT: {
    GET_FREE_CHECK: 'Get Free Website Check',
    START_TRANSFORMATION: 'Start Your Transformation',
    SCHEDULE_CONSULTATION: 'Schedule Free Consultation',
    TRANSFORM_UX: 'Transform Your User Experience',
  },

  // Trust signals - used across multiple components
  TRUST_SIGNALS: ['Free consultation', 'No commitment'],

  // Business stats and trust indicators
  BUSINESS_TRUST: {
    TEXT: '50+ businesses trust me',
    PROJECTS: '50+ Successful Projects',
    PROJECTS_UX: '50+ user experience transformations',
    WEBSITES_OPTIMIZED: '50+ Websites Successfully Optimized',
  },

  // Status badge
  STATUS_BADGE: {
    show: true,
    text: 'Available for projects',
  },

  // Common headlines and taglines
  HEADLINES: {
    TRANSFORM_BARRIERS: 'Transform Technical Barriers Into Competitive Advantages',
    UX_STRATEGY: "What's Your User Experience Strategy?",
    READY_TRANSFORM: 'Ready to Transform Your Business?',
  },

  // Badge content
  BADGES: {
    ABOUT_MARTIN: 'About Martin',
    USER_EXPERIENCE: 'User Experience Strategist & Technical SEO Specialist',
    EXPERT_INSIGHTS: 'User Experience Insights',
    UX_TRANSFORMATIONS: 'User Experience Transformations',
  },

  // Image paths
  IMAGES: {
    MARTIN_TECHSEO_1: '/assets/images/martin-stepanek-2.jpg',
    MARTIN_TECHSEO_2: '/assets/images/martin-stepanek-3.jpg',
    MARTIN_TECHSEO_3: '/assets/images/martin-stepanek-4.jpg',
    MARTIN_TECHSEO_4: '/assets/images/martin-stepanek-5.jpg',
    MARTIN_TECHSEO_5: '/assets/images/martin-stepanek-6.jpg',
    MARTIN_MOUNTAINS: '/assets/images/martin-stepanek-1.jpg',
  },

  // Service pricing
  PRICING: {
    AUDIT_ESSENTIAL: '$1,500',
    AUDIT_FULL: '$2,500',
    AUDIT_STARTING: 'Starting at $1,500',
    MONITORING: '$2,000',
    MONITORING_UNIT: '/month',
    MIGRATION: '$4,500',
  },

  // Experience claims
  EXPERIENCE: {
    WEB_DEV_YEARS: '10+ years',
    TECHNICAL_SEO_YEARS: '4+ years',
    WEBSITES_COUNT: '200+ websites',
  },
};

// ConvertKit form configurations
export const CONVERTKIT_FORMS = {
  'newsletter-section': {
    formId: '7514069',
    uid: '06e277ea9a',
    action: 'https://app.kit.com/forms/7514069/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription.',
  },
  'newsletter-page': {
    formId: '7514069',
    uid: '06e277ea9a',
    action: 'https://app.kit.com/forms/7514069/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription.',
  },
  'technical-seo-checklist': {
    formId: '7969566',
    uid: '1b414d8dc5',
    action: 'https://app.kit.com/forms/7969566/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.',
  },
  'website-migration-checklist': {
    formId: '7945460',
    uid: '4ef42b0b85',
    action: 'https://app.kit.com/forms/7945460/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.',
  },
  '5-web-performance-metrics': {
    formId: '8513383',
    uid: 'e7077aaed9',
    action: 'https://app.kit.com/forms/8513383/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription and I will send you a copy of the ebook.',
  },
};

// Common CSS classes for reuse
export const COMMON_STYLES = {
  gradientText: 'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent',
  gradientBg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
  gradientBgDiagonal: 'bg-gradient-to-br from-purple-500 to-indigo-600',
  gradientBgDiagonalBold: 'bg-gradient-to-br from-purple-600 to-indigo-600',
  gradientBgLight: 'bg-gradient-to-r from-purple-200 to-indigo-200',
  gradientBgVeryLight: 'bg-gradient-to-br from-purple-100 to-indigo-100',
  gradientBgTriple: 'bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700',
  gradientBgBlue: 'bg-gradient-to-r from-blue-500 to-cyan-600',
  gradientBgGreen: 'bg-gradient-to-r from-green-500 to-emerald-600',
  cardShadow: 'shadow-xl hover:shadow-2xl transition-all duration-300',
  cardHover: 'hover:shadow-lg transition-all duration-300',
  blurredBlob: 'absolute bg-gradient-to-r from-purple-200 to-indigo-200 rounded-full blur-3xl opacity-50',
  badge:
    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg',
  buttonPrimary:
    'group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl focus:ring-4 focus:ring-purple-500/30',
  heroImage: 'w-full rounded-3xl shadow-2xl border-4 border-white',
  sectionPadding: 'py-24',
  containerWidth: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
  featureCard: 'rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200',
  featureCardWithBg: 'bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200',
};

// Design system tokens
export const DESIGN_TOKENS = {
  ANIMATION: {
    FAST: 'duration-200',
    DEFAULT: 'duration-300',
    SLOW: 'duration-500',
  },
  ICON_SIZES: {
    SMALL: 'w-8 h-8',
    MEDIUM: 'w-12 h-12',
    LARGE: 'w-16 h-16',
    EXTRA_LARGE: 'w-20 h-20',
  },
  COLORS: {
    THEME_COLOR: '#7c3aed',
    SUCCESS_RGB: 'rgb(34, 197, 94)',
    SVG_GRADIENT_START: '#8b5cf6',
    SVG_GRADIENT_END: '#6366f1',
  },
};

// Social media and external links
export const SOCIAL_MEDIA = {
  LINKEDIN_PROFILE: 'https://www.linkedin.com/in/techseovitals/',
  LINKEDIN_RECOMMENDATIONS: 'https://www.linkedin.com/in/techseovitals/details/recommendations/',
  BLUESKY: 'https://bsky.app/profile/techseovitals.com',
  YOUTUBE: 'https://youtube.com/@techseovitals',
};

// Site configuration
export const SITE_CONFIG = {
  DOMAIN: process.env.NODE_ENV === 'development'
    ? 'https://staging.techseovitals.com'
    : 'https://www.techseovitals.com',
  EMAIL: 'martin@techseovitals.com',
  CALENDLY_URL: 'https://calendly.com/techseovitals/free-initial-consultation?primary_color=9333ea',
};

// Form success messages
export const FORM_MESSAGES = {
  NEWSLETTER_SUCCESS: 'Great! Now check your email to confirm your subscription.',
  CHECKLIST_SUCCESS: 'Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.',
  EBOOK_SUCCESS: 'Great! Now check your email to confirm your subscription and I will send you a copy of the ebook.',
};

// Testimonials and social proof
export const TESTIMONIALS = {
  VIKTOR_ZEMAN: {
    name: 'Viktor Zeman',
    title: 'CEO, LiveAgent & Post Affiliate Pro',
    quote:
      "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.",
    image: '/assets/images/testimonials/viktor-zeman.jpg',
  },
  DANIEL_PISON: {
    name: 'Daniel Pison',
    title: 'CMO, Quality Unit',
    quote:
      "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in website quality. I consider him one of the greatest technical SEO experts on the market.",
    image: '/assets/images/testimonials/daniel-pison.jpg',
  },
};
