import React from 'react';
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
    title: (data: { pagination: { pageNumber: number } }) => {
      const pageNum = data.pagination.pageNumber + 1;
      return pageNum > 1 ? `Technical SEO Blog - Page ${pageNum}` : 'Technical SEO Blog';
    },
    description: (data: { pagination: { pageNumber: number } }) => {
      const pageNum = data.pagination.pageNumber + 1;
      return pageNum > 1
        ? `Expert insights on technical optimization - Page ${pageNum}. Learn actionable strategies that transform technical barriers into competitive advantages.`
        : 'Expert insights on creating exceptional user experiences through technical optimization. Learn actionable strategies that transform technical barriers into competitive advantages.';
    },
    permalink: (data: { pagination: { pageNumber: number } }) => {
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
  pages: BlogPost[];
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

const BlogPage: React.FC<EleventyData> = ({ posts, pagination }) => {
  // Process posts for display
  const processedPosts = posts.map((post) => {
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
              Technical SEO <span>Insights</span>
            </>
          }
          description="Learn optimization strategies that create websites users love while driving more conversions and revenue."
          image={{
            src: '/assets/images/martin-stepanek-6.jpg',
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-4">
              Technical SEO <span>Blog</span>
            </h1>
            <p className="text-lg text-gray-600 text-center">Page {pagination.pageNumber + 1}</p>
          </div>
        </div>
      )}

      <BlogCardsSection showBadge={false} title="" subtitle="" posts={processedPosts} />

      {/* Simple pagination navigation */}
      {pagination && pagination.pages && pagination.pages.length > 1 && (
        <nav className="flex justify-center px-8 pt-12 pb-24 sm:px-12 lg:px-16 max-w-7xl mx-auto -mt-12">
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

export default function BlogTemplate(data: { posts: BlogPost[]; pagination: PaginationData }) {
  // The pagination data creates 'posts' from the alias
  // and 'pagination' is at the root level
  return <BlogPage posts={data.posts || []} pagination={data.pagination} />;
}
