import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroSection from './_components/sections/HeroSection';
import BlogCardsSection from './_components/sections/BlogCardsSection';
import NewsletterSection from './_components/sections/NewsletterSection';

export const data = {
  title: 'Technical SEO Blog | TechSEO Vitals',
  description:
    'Expert insights on creating exceptional user experiences through technical optimization. Learn actionable strategies that transform technical barriers into competitive advantages.',
  permalink: '/blog/',
  layout: 'base',
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

const BlogPage: React.FC<{ collections: EleventyData['collections'] }> = ({ collections }) => {
  // Get all blog posts
  const allPosts = collections.blog.map(post => ({
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
    <main className="flex-1">
      <HeroSection
        badge={{
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          ),
          text: 'Expert Insights',
        }}
        title={
          <>
            Technical SEO <span className={COMMON_STYLES.gradientText}>Insights</span>
          </>
        }
        description="Learn optimization strategies that create websites users love while driving more conversions and revenue."
        image={{
          src: '/assets/images/martinstepanek-techseo-5.jpg',
          alt: 'Martin Stepanek - Technical SEO Expert',
        }}
        layout="centered"
        rating={{ show: false }}
        statusBadge={{ show: false }}
      />
      <BlogCardsSection title="" subtitle="" showBadge={false} posts={allPosts} />
      <NewsletterSection />
    </main>
  );
};

export default function (data: EleventyData) {
  return <BlogPage collections={data.collections} />;
}
