import React from 'react';

export interface CTAContent {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: React.ReactNode;
}

export const ctaContent = {
  primary: {
    badge: "Ready to Get Started?",
    title: (
      <>
        Let's Transform Your Website Into a{' '}
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Revenue Engine
        </span>
      </>
    ),
    description: "Don't let technical issues hold your business back. Get expert technical SEO guidance and turn your website into your most powerful sales tool.",
    primaryCTA: {
      text: "Schedule Free Consultation",
      href: "/book-consultation/"
    },
    secondaryCTA: (
      <div className="flex items-center justify-center gap-4 text-gray-600">
        <span className="text-sm">✓ Free consultation</span>
        <span className="text-sm">✓ No commitment</span>
      </div>
    )
  },

  business: {
    badge: "Ready to Transform Your Business?",
    title: (
      <>
        Turn Your Website Into a{' '}
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Revenue Engine
        </span>
      </>
    ),
    description: "Stop losing customers to poor performance, search, and AI visibility. Get a comprehensive technical SEO audit and discover exactly how I can boost your conversions and revenue.",
    primaryCTA: {
      text: "Schedule Free Consultation",
      href: "/book-consultation/"
    }
  },

  consultation: {
    badge: "Start Your SEO Journey",
    title: (
      <>
        Ready to Boost Your{' '}
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
          Search Rankings?
        </span>
      </>
    ),
    description: "Get personalized technical SEO recommendations that will improve your website's performance, search visibility, and user experience.",
    primaryCTA: {
      text: "Book Free Consultation",
      href: "/book-consultation/"
    }
  }
} as const;

export const socialProof = {
  businesses: {
    icon: (
      <div className="flex text-yellow-400 text-sm">
        {'★'.repeat(5)}
      </div>
    ),
    text: "50+ businesses trust me"
  },
  
  newsletter: {
    icon: (
      <div className="flex text-yellow-300 text-sm">
        {'★'.repeat(5)}
      </div>
    ),
    text: "250+ people trust this newsletter"
  }
} as const;