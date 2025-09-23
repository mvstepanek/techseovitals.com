import React from 'react';
import HeroSection from './_components/sections/HeroSection';
import TrustedCompaniesSection from './_components/sections/TrustedCompaniesSection';
import CTASection from './_components/sections/CTASection';
import TestimonialsSection from './_components/sections/TestimonialsSection';
import BlogCardsSection from './_components/sections/BlogCardsSection';
import NewsletterSection from './_components/sections/NewsletterSection';
import FeatureGrid from './_components/business/FeatureGrid';
import BrutalTruthSection from './_components/sections/BrutalTruthSection';
import WhyChooseMeSection from './_components/sections/WhyChooseMeSection';
import WhyAuditSection from './_components/sections/WhyAuditSection';
import { COMMON_STYLES } from './_data/constants';

export const data = {
  layout: 'base',
  title: 'TechSEO Vitals With Martin Stepanek',
  description:
    "Expert technical SEO and web performance consulting services. Boost your website's visibility, speed, and search rankings with TechSEO Vitals.",
};

interface EleventyData {
  collections: {
    blog: Array<{
      data: {
        title: string;
        description: string;
        permalink: string;
        date: string;
      };
      content: string;
    }>;
  };
}

const HomePage: React.FC<{ collections: EleventyData['collections'] }> = ({ collections }) => {
  // Get latest 3 blog posts
  const latestPosts = collections.blog.slice(0, 3).map(post => ({
    title: post.data.title,
    href: post.data.permalink,
    image: `/assets/images/blog-thumbnails/${post.data.permalink
      .split('/')
      .filter(p => p)
      .pop()}.jpg`,
    date: new Date(post.data.date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }),
    dateTime: post.data.date,
    excerpt: post.data.description,
  }));

  return (
    <>
      <HeroSection
        badge={{
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ),
          text: '10+ Years of Industry Expertise',
        }}
        title={
          <>
            Transform Your Website Into a <span className={COMMON_STYLES.gradientText}>Revenue Engine</span>
          </>
        }
        description="When your site is fast, accessible, and easy to navigate, visitors stay longer and convert more. I combine technical SEO and performance optimization to create exceptional user experiences. Search engines and AI platforms naturally reward you with better visibility."
        primaryCta={{
          text: 'Get Free Website Check',
          href: '/contact/',
        }}
        image={{
          src: '/assets/images/martinstepanek-techseo-5.jpg',
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
          text: 'Currently taking new clients',
        }}
      />

      <TrustedCompaniesSection backgroundColor="white" />

      <FeatureGrid
        badge={{
          icon: <div className="w-2 h-2 bg-white rounded-full" />,
          text: 'Why Technical Excellence Matters',
        }}
        title={
          <>
            Users First. <span className={COMMON_STYLES.gradientText}>Search Engines Follow</span>
          </>
        }
        subtitle="Great user experience drives everything. Technical SEO and performance optimization work together to eliminate friction, boost engagement, and increase conversions. Websites that are technically excellent users love naturally more and they earn better visibility from search engines and AI platforms."
        cta={{
          text: 'Get Free Website Check',
          href: '/contact/',
          trustSignals: ['Free consultation', 'No commitment'],
        }}
        backgroundColor="gray"
        columns={3}
        features={[
          {
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            ),
            title: 'Happy Users Buy More',
            description:
              'When visitors can easily find products, pages load instantly, and navigation is intuitive, they convert. Technical SEO and performance create the frictionless experience that drives revenue.',
            color: 'green',
          },
          {
            icon: (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
              </svg>
            ),
            title: 'Remove User Friction',
            description:
              'Broken links, slow pages, and poor structure frustrate visitors. Technical optimization eliminates these barriers, ensuring every user journey is smooth from search to purchase.',
            color: 'blue',
          },
          {
            icon: (
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
            ),
            title: 'Maximize Your Visibility',
            description:
              'Well-structured sites rank better in Google and get recommended by AI systems like ChatGPT and Perplexity. Technical SEO excellence ensures maximum discoverability across all platforms.',
            color: 'purple',
          },
        ]}
      />

      <BrutalTruthSection />

      <WhyChooseMeSection />

      <WhyAuditSection />

      <TestimonialsSection backgroundColor="bg-gray-50" />

      <CTASection
        badge={{
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          ),
          text: "Ready to Delight Your Users?",
        }}
        title={
          <>
            Give Visitors The Experience <span className={COMMON_STYLES.gradientText}>They Deserve</span>
          </>
        }
        description="Your users are struggling with issues you might not even see. Get a comprehensive technical audit that reveals exactly what's frustrating visitors and how to create the seamless experience that delights them while naturally improving your visibility in search engines and AI systems."
        primaryCta={{
          text: 'Start Your Transformation',
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
            description: 'Website check with no hidden costs',
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

      <BlogCardsSection posts={latestPosts} />

      <NewsletterSection />
    </>
  );
};

export default function (data: EleventyData) {
  return <HomePage collections={data.collections} />;
}
