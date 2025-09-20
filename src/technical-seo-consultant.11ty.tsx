import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroSection from './_components/sections/HeroSection';
import ExperienceSection from './_components/sections/ExperienceSection';
import PublicSpeechesSection from './_components/sections/PublicSpeechesSection';
import NewsletterSection from './_components/sections/NewsletterSection';
import ServicesSection from './_components/sections/ServicesSection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import CTASection from './_components/sections/CTASection';

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
        icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
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
        loading: 'eager',
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
          icon: <div className="w-2 h-2 bg-white rounded-full animate-pulse" />,
          text: 'Why Choose Martin',
        }}
        title={
          <>
            What Makes Me <span className={COMMON_STYLES.gradientText}>Different</span>
          </>
        }
        subtitle="I combine deep development expertise with technical SEO knowledge. This combination allows me to solve complex optimization challenges that drive measurable business growth."
        experiencePoints={[
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            ),
            title: 'Professional Web Development Skills',
            description:
              'Over a decade of hands-on development experience combined with deep technical SEO expertise. I solve complex challenges from enterprise migrations to advanced JavaScript optimization.',
            color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
          },
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7A2 2 0 005 7v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            ),
            title: 'Actionable Implementation Guides',
            description:
              'Get detailed, prioritized task lists with step-by-step guidance and code examples. Your team can implement improvements immediately with clear, practical instructions.',
            color: 'bg-gradient-to-br from-green-500 to-emerald-600',
          },
          {
            icon: (
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8-8 8-4-4-6 6" />
              </svg>
            ),
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
    />
    <CTASection
      badge={{
        icon: (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
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
      features={[
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: '100% Free',
          description: 'Free website check with no hidden costs',
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
          ),
          title: '30 Minutes',
          description: 'Quick call to discuss your biggest opportunities',
        },
        {
          icon: (
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ),
          title: 'Immediate Value',
          description: 'Actionable insights you can implement today',
        },
      ]}
    />
    <NewsletterSection />
  </main>
);

export default TechnicalSEOConsultantPage;
