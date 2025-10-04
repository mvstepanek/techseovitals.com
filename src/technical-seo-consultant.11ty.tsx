import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import ExperienceSection from './_components/sections/ExperienceSection';
import PublicSpeechesSection from './_components/sections/PublicSpeechesSection';
import NewsletterSection from './_components/sections/NewsletterSection';
import ServicesSection from './_components/sections/ServicesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import CTASection from './_components/sections/CTASection';
import { DEFAULT_CTA_FEATURES } from './_data/cta-features';
import BadgeIcons from './_components/ui/BadgeIcons';
import Icons from './_components/ui/Icons';

export const data = {
  title: 'Technical SEO Consultant',
  description: 'Expert technical SEO consultant with 10+ years experience. Get proven strategies that boost rankings, traffic, and conversions for your business.',
  permalink: '/technical-seo-consultant/',
  layout: 'base',
};

const TechnicalSEOConsultantPage: React.FC = () => (
  <main className="flex-1">
    <HeroSection
      badge={{
        icon: BadgeIcons.pulsingDot,
        text: 'Developer-Led Technical SEO Excellence',
      }}
      title={
        <>
          Martin Stepanek, <span>Technical SEO Expert</span>
        </>
      }
      description="I help businesses create websites that prioritizes both user satisfaction and revenue performance."
      primaryCta={{
        text: 'Get Free Website Check',
        href: '/contact/',
        target: '_self',
      }}
      image={{
        src: '/assets/images/martin-stepanek-4.jpg',
        alt: 'Martin Stepanek - Technical SEO Expert',
      }}
      rating={{
        show: true,
        text: 'I consider Martin to be one of the greatest technical SEO experts on the market.',
        isTestimonial: true,
        source: 'Verified Client on LinkedIn',
        sourceLink: 'https://www.linkedin.com/in/techseovitals/details/recommendations/',
      }}
      statusBadge={{
        show: true,
        text: 'Accepting new clients',
      }}
    />
    <TestimonialsSection />
    <div className="border-t border-gray-200">
      <ExperienceSection
        badge={{
          icon: BadgeIcons.pulsingDot,
          text: 'Why Choose Martin',
        }}
        title={
          <>
            What Makes Me <span>Different</span>
          </>
        }
        subtitle="I combine deep development expertise with technical SEO knowledge. This combination allows me to solve complex optimization challenges that drive measurable business growth."
        experiencePoints={[
          {
            icon: <Icons.lightning className="w-6 h-6 text-white" />,
            title: 'Professional Web Development Skills',
            description:
              'Over a decade of hands-on development experience combined with deep technical SEO expertise. I solve complex challenges from enterprise migrations to advanced JavaScript optimization.',
            color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
          },
          {
            icon: <Icons.badge className="w-6 h-6 text-white" />,
            title: 'Actionable Implementation Guides',
            description:
              'Get detailed, prioritized task lists with step-by-step guidance and code examples. Your team can implement improvements immediately with clear, practical instructions.',
            color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          },
          {
            icon: <Icons.growth className="w-6 h-6 text-white" />,
            title: 'Revenue-Focused Strategy',
            description:
              'Every optimization targets measurable business impact. I prioritize improvements that directly increase conversions, user engagement, and bottom-line revenue growth.',
            color: 'bg-gradient-to-br from-purple-500 to-indigo-600',
          },
        ]}
        image={{
          src: '/assets/images/martin-stepanek-1.jpg',
          alt: 'Martin Stepanek - Technical SEO Consultant',
        }}
        statsBadge={{
          icon: <Icons.verifiedBadge className="w-5 h-5 text-green-600" />,
          title: '50+ Websites Successfully Optimized',
          subtitle: '',
        }}
        testimonial={{
          quote:
            "Under Martin's leadership, our team significantly enhanced the performance of two high-traffic websites. His methodical approach to technical SEO and aptitude for conveying complex technical concepts have consistently yielded remarkable results.",
          source: 'LinkedIn Recommendation',
        }}
        backgroundColor="gray"
      />
    </div>
    <PublicSpeechesSection />
    <ServicesSection
      title={
        <>
          How I Can <span>Help Your Business</span>
        </>
      }
    />
    <CTASection
      badge={{
        icon: BadgeIcons.lightning,
        text: 'Ready to Transform Your Business?',
      }}
      title={
        <>
          Turn Your Website Into a <span>Revenue Engine</span>
        </>
      }
      description="Your competitors are stealing your traffic while you struggle with technical issues. Get the expert help that turns your website into an unstoppable growth machine."
      primaryCta={{
        text: 'Get Free Website Check',
        href: '/contact/',
      }}
      features={DEFAULT_CTA_FEATURES}
    />
    <NewsletterSection />
  </main>
);

export default TechnicalSEOConsultantPage;
