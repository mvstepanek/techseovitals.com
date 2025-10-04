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
import { DEFAULT_CTA_FEATURES } from './_data/cta-features';
import BadgeIcons from './_components/ui/BadgeIcons';
import Icons from './_components/ui/Icons';

export const data = {
  layout: 'base',
  title: 'TechSEO Vitals With Martin Stepanek',
  description: 'Expert technical SEO consultant helping businesses create websites that users love and search engines reward. Boost traffic and conversions today.',
};

interface EleventyData {
  collections: {
    blog: Array<{
      data: {
        title: string;
        description: string;
        permalink: string;
        date: string;
        image?: string;
      };
      content: string;
    }>;
  };
}

const HomePage: React.FC<{ collections: EleventyData['collections'] }> = ({ collections }) => {
  // Get latest 3 blog posts (sorted by date, newest first)
  const sortedPosts = [...collections.blog].sort((a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime());
  const latestPosts = sortedPosts.slice(0, 3).map((post) => {
    const permalink =
      post.data.permalink ||
      `/blog/${post.data.title
        ?.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '')}/`;
    const fallbackImage = `/assets/images/blog/${permalink
      .split('/')
      .filter((p) => p)
      .pop()}.jpg`;
    return {
      title: post.data.title,
      href: permalink,
      image: post.data.image || fallbackImage,
      date: new Date(post.data.date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }),
      dateTime: post.data.date,
      excerpt: post.data.description,
    };
  });

  return (
    <>
      <HeroSection
        badge={{
          icon: BadgeIcons.checkCircle,
          text: '10+ Years of Industry Expertise',
        }}
        title={
          <>
            Transform Your Website Into a <span>Revenue Engine</span>
          </>
        }
        description="When your site is fast, accessible, and easy to navigate, visitors stay longer and convert more. I combine technical SEO and performance optimization to create exceptional user experiences."
        primaryCta={{
          text: 'Get Free Website Check',
          href: '/contact/',
        }}
        image={{
          src: '/assets/images/martin-stepanek-6.jpg',
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
          text: 'Currently taking new clients',
        }}
      />

      <TrustedCompaniesSection />

      <FeatureGrid
        badge={{
          icon: BadgeIcons.pulsingDot,
          text: 'Why Technical Excellence Matters',
        }}
        title={
          <>
            Users First. <span>Search Engines Follow</span>
          </>
        }
        subtitle="Great user experience drives everything. Technical SEO and performance optimization work together to boost engagement, and increase conversions. Websites that are technically excellent create better user experiences, leading to better visibility on search engines and AI platforms"
        cta={{
          text: 'Get Free Website Check',
          href: '/contact/',
          trustSignals: ['Free consultation', 'No commitment'],
        }}
        backgroundColor="gray"
        columns={3}
        features={[
          {
            icon: <Icons.growth className="w-8 h-8 text-white" />,
            title: 'Turn Visitors Into Customers',
            description:
              'When visitors can easily find products and pages load instantly, they convert better. Optimizing technical SEO and web performance create a positive experience that drives revenue.',
            color: 'blue',
          },
          {
            icon: <Icons.monitor className="w-8 h-8 text-white" />,
            title: 'Remove User Friction',
            description:
              'Broken links, slow pages, and poor structure frustrate visitors. Technical optimization eliminates these barriers, ensuring every user journey is smooth from search to purchase.',
            color: 'green',
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
          icon: BadgeIcons.lightning,
          text: 'Ready to Delight Your Users?',
        }}
        title={
          <>
            Give Visitors The Experience <span>They Deserve</span>
          </>
        }
        description="Your users are struggling with issues you might not even see. Get a comprehensive technical audit that reveals exactly what's frustrating visitors and how to create a seamless experience while naturally improving your visibility in search engines and AI systems."
        primaryCta={{
          text: 'Start Your Transformation',
          href: '/contact/',
        }}
        trustSignals={['Free consultation', 'No commitment']}
        features={DEFAULT_CTA_FEATURES}
      />

      <BlogCardsSection posts={latestPosts} />

      <NewsletterSection />
    </>
  );
};

export default function IndexTemplate(data: EleventyData) {
  return <HomePage collections={data.collections} />;
}
