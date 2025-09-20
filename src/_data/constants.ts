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
    REVENUE_ENGINE: 'Turn Your Website Into a Revenue Engine',
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
    MARTIN_TECHSEO_1: '/assets/images/martinstepanek-techseo-1.jpg',
    MARTIN_TECHSEO_2: '/assets/images/martinstepanek-techseo-2.jpg',
    MARTIN_TECHSEO_3: '/assets/images/martinstepanek-techseo-3.jpg',
    MARTIN_TECHSEO_4: '/assets/images/martinstepanek-techseo-4.jpg',
    MARTIN_TECHSEO_5: '/assets/images/martinstepanek-techseo-5.jpg',
    MARTIN_MOUNTAINS: '/assets/images/martin-stepanek-mountains.jpg',
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
  NEWSLETTER: {
    action: 'https://app.kit.com/forms/7514069/subscriptions',
    uid: '06e277ea9a',
    formId: '7514069',
  },
  TECHNICAL_SEO_CHECKLIST: {
    action: 'https://app.kit.com/forms/7969566/subscriptions',
    uid: '6a3a12d7b3',
    formId: '7969566',
  },
  MIGRATION_CHECKLIST: {
    action: 'https://app.kit.com/forms/7945460/subscriptions',
    uid: '891c454eb6',
    formId: '7945460',
  },
  PERFORMANCE_METRICS: {
    action: 'https://app.kit.com/forms/7945460/subscriptions',
    uid: '891c454eb6',
    formId: '7945460',
  },
};

// Common CSS classes for reuse
export const COMMON_STYLES = {
  gradientText: 'bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent',
  gradientBg: 'bg-gradient-to-r from-purple-600 to-indigo-600',
  gradientBgBlue: 'bg-gradient-to-r from-blue-500 to-cyan-600',
  gradientBgGreen: 'bg-gradient-to-r from-green-500 to-emerald-600',
  cardShadow: 'shadow-xl hover:shadow-2xl transition-all duration-300',
  cardHover: 'hover:shadow-lg transition-all duration-300',
  blurredBlob: 'absolute bg-purple-200 rounded-full blur-3xl opacity-50',
  badge:
    'inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg',
  buttonPrimary:
    'group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl focus:ring-4 focus:ring-purple-500/30',
  heroImage: 'w-full rounded-3xl shadow-2xl border-4 border-white',
  sectionPadding: 'py-24',
  containerWidth: 'mx-auto max-w-7xl px-4 sm:px-6 lg:px-8',
};

// Testimonials and social proof
export const TESTIMONIALS = {
  VIKTOR_ZEMAN: {
    name: 'Viktor Zeman',
    title: 'CEO, LiveAgent & Post Affiliate Pro',
    quote:
      "Martin's development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.",
    image: '/assets/images/testimonials/viktor-zeman-real.webp',
  },
  DANIEL_PISON: {
    name: 'Daniel Pison',
    title: 'CMO, Quality Unit',
    quote:
      "Thanks in particular to Martin's skills and expertise, we have long been able to compete with much stronger competitors in website quality. I consider him one of the greatest technical SEO experts on the market.",
    image: '/assets/images/testimonials/daniel-pison.jpeg',
  },
};
