import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroSection from './_components/sections/HeroSection';
import ExperienceSection from './_components/sections/ExperienceSection';
import PublicSpeechesSection from './_components/sections/PublicSpeechesSection';
import NewsletterSection from './_components/sections/NewsletterSection';
import ServicesSection from './_components/sections/ServicesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import CTASection from './_components/sections/CTASection';
import CTAFeatures from './_components/cta/CTAFeatures';
import BadgeIcons from './_components/ui/BadgeIcons';
import Icons from './_components/ui/Icons';

export const data = {
  title: 'Technical SEO Consultant',
  description:
    'Expert technical SEO consultant with 10+ years experience. Get proven strategies that boost rankings, traffic, and conversions for your business.',
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
          Martin Stepanek,{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Technical SEO Expert
          </span>
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
          icon: (
            <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
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
          How I Can{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Help Your Business
          </span>
        </>
      }
      colorScheme="variant2"
    />
    <CTASection
      badge={{
        icon: BadgeIcons.lightning,
        text: 'Ready to Transform Your Business?',
      }}
      title={
        <>
          Turn Your Website Into a{' '}
          <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Revenue Engine
          </span>
        </>
      }
      description="Your competitors are stealing your traffic while you struggle with technical issues. Get the expert help that turns your website into an unstoppable growth machine."
      primaryCta={{
        text: 'Get Free Website Check',
        href: '/contact/',
      }}
      trustSignals={['Free consultation', 'No commitment']}
      features={CTAFeatures({})}
    />
    <NewsletterSection />
  </main>
);

export default TechnicalSEOConsultantPage;
