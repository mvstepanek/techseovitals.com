import React from 'react';
import { COMMON_STYLES } from './_data/constants';
import HeroSection from './_components/sections/HeroSection';
import BlogCardsSection from './_components/sections/BlogCardsSection';
import NewsletterSection from './_components/sections/NewsletterSection';

export const data = {
  pagination: {
    data: 'collections.blog',
    size: 9,
    alias: 'posts',
  },
  eleventyComputed: {
    title: (data: any) => {
      const pageNum = data.pagination.pageNumber + 1;
      return pageNum > 1
        ? `Technical SEO Blog - Page ${pageNum} | TechSEO Vitals`
        : 'Technical SEO Blog | TechSEO Vitals';
    },
    description: (data: any) => {
      const pageNum = data.pagination.pageNumber + 1;
      return pageNum > 1
        ? `Expert insights on technical optimization - Page ${pageNum}. Learn actionable strategies that transform technical barriers into competitive advantages.`
        : 'Expert insights on creating exceptional user experiences through technical optimization. Learn actionable strategies that transform technical barriers into competitive advantages.';
    },
    permalink: (data: any) => {
      const pageNum = data.pagination.pageNumber;
      return pageNum === 0 ? '/blog/' : `/blog/${pageNum + 1}/`;
    },
  },
  layout: 'base',
};

interface BlogPost {
  data: {
    title: string;
    description: string;
    permalink: string;
    date: string;
    image?: string;
  };
  content: string;
}

interface PaginationData {
  pages: any[];
  page: {
    first: boolean;
    last: boolean;
  };
  href: {
    first: string;
    last: string;
    previous: string | null;
    next: string | null;
  };
  items: BlogPost[];
  pageNumber: number;
}

interface EleventyData {
  posts: BlogPost[];
  pagination: PaginationData;
}

const PaginationNav: React.FC<{ pagination: PaginationData }> = ({ pagination }) => {
  if (!pagination || !pagination.href) {
    return null; // No pagination data available
  }

  const { page, href } = pagination;

  if (page.first && page.last) {
    return null; // No pagination needed if there's only one page
  }

  return (
    <nav className="flex items-center justify-between border-t border-gray-200 px-4 py-8 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-1 justify-between">
        {href.previous ? (
          <a
            href={href.previous}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            <svg
              className="mr-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                clipRule="evenodd"
              />
            </svg>
            Previous
          </a>
        ) : (
          <div />
        )}

        {href.next ? (
          <a
            href={href.next}
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200"
          >
            Next
            <svg
              className="ml-2 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        ) : (
          <div />
        )}
      </div>
    </nav>
  );
};

const BlogPage: React.FC<EleventyData> = ({ posts, pagination }) => {
  // Process posts for display
  const processedPosts = posts.map(post => {
    const permalink = post.data.permalink || `/blog/${post.data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}/`;
    const fallbackImage = `/assets/images/blog-thumbnails/${permalink
      .split('/')
      .filter(p => p)
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

  const isFirstPage = pagination.page.first;

  return (
    <main className="flex-1">
      {isFirstPage && (
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
      )}

      {!isFirstPage && (
        <div className="bg-gradient-to-b from-gray-50 to-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
              Technical SEO <span className={COMMON_STYLES.gradientText}>Blog</span>
            </h1>
            <p className="text-xl text-gray-600 text-center">
              Page {pagination.pageNumber + 1}
            </p>
          </div>
        </div>
      )}

      <BlogCardsSection title="" subtitle="" showBadge={false} posts={processedPosts} />

      {/* Simple pagination navigation */}
      {pagination && pagination.pages && pagination.pages.length > 1 && (
        <nav className="flex justify-center px-8 pt-12 pb-24 sm:px-12 lg:px-16 max-w-7xl mx-auto">
          <div className="flex gap-4">
            {pagination.pageNumber > 0 ? (
              <a
                href={pagination.pageNumber === 1 ? '/blog/' : `/blog/${pagination.pageNumber}/`}
                className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-bold text-white hover:bg-purple-700 transition-colors duration-200 shadow-sm"
              >
                Previous
              </a>
            ) : null}

            {pagination.pageNumber < pagination.pages.length - 1 ? (
              <a
                href={`/blog/${pagination.pageNumber + 2}/`}
                className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-bold text-white hover:bg-purple-700 transition-colors duration-200 shadow-sm"
              >
                Next
              </a>
            ) : null}
          </div>
        </nav>
      )}

      {isFirstPage && <NewsletterSection />}
    </main>
  );
};

export default function (data: any) {
  // The pagination data creates 'posts' from the alias
  // and 'pagination' is at the root level
  return <BlogPage posts={data.posts || []} pagination={data.pagination} />;
}