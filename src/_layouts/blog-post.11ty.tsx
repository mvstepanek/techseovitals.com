import React from 'react';
import NewsletterSection from '../_components/sections/NewsletterSection';
import BlogPostHeader from '../_components/sections/BlogPostHeader';
import AuthorBio from '../_components/sections/AuthorBio';
import CTASection from '../_components/sections/CTASection';

interface BlogPostData {
  title?: string;
  description?: string;
  permalink?: string;
  date?: string;
  content: string;
}

export const data = {
  layout: 'base',
};

const BlogPostLayout: React.FC<BlogPostData> = (data: BlogPostData) => (
  <main className="flex-1">
    <BlogPostHeader title={data.title} description={data.description} date={data.date} permalink={data.permalink} />
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div
          className="text-base sm:text-lg leading-6 sm:leading-7 text-gray-700 max-w-none prose prose-base sm:prose-lg prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-12 prose-h2:mb-4 sm:prose-h2:mb-6 prose-h2:leading-tight prose-h2:tracking-tight prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-3 sm:prose-h3:mb-4 prose-h3:leading-snug prose-h4:text-lg sm:prose-h4:text-xl prose-h4:font-bold prose-h4:text-gray-900 prose-h4:mt-4 sm:prose-h4:mt-6 prose-h4:mb-2 sm:prose-h4:mb-3 prose-p:mb-4 sm:prose-p:mb-6 prose-p:leading-6 sm:prose-p:leading-7 prose-p:text-gray-700 prose-ul:my-4 sm:prose-ul:my-6 prose-ul:pl-4 sm:prose-ul:pl-6 prose-ul:list-disc prose-ul:list-outside prose-ul:space-y-1 sm:prose-ul:space-y-2 prose-ol:my-4 sm:prose-ol:my-6 prose-ol:pl-4 sm:prose-ol:pl-6 prose-ol:list-decimal prose-ol:list-outside prose-ol:space-y-1 sm:prose-ol:space-y-2 prose-li:leading-relaxed prose-li:text-gray-700 prose-li:mb-1 sm:prose-li:mb-2 prose-li:ml-0 prose-a:text-primary-500 prose-a:no-underline prose-a:font-semibold hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-code:text-primary-500 prose-code:bg-gray-100 prose-code:px-1.5 sm:prose-code:px-2 prose-code:py-0.5 sm:prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-semibold prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg sm:prose-pre:rounded-xl prose-pre:p-3 sm:prose-pre:p-4 prose-pre:my-4 sm:prose-pre:my-6 prose-pre:overflow-x-auto prose-pre:font-mono prose-pre:text-sm prose-blockquote:relative prose-blockquote:bg-white prose-blockquote:border prose-blockquote:border-gray-200 prose-blockquote:rounded-lg sm:prose-blockquote:rounded-xl prose-blockquote:px-4 sm:prose-blockquote:px-6 prose-blockquote:py-4 sm:prose-blockquote:py-5 prose-blockquote:my-6 sm:prose-blockquote:my-8 prose-blockquote:shadow-md prose-blockquote:shadow-gray-100 prose-blockquote:text-gray-800 prose-blockquote:font-semibold prose-blockquote:text-base sm:prose-blockquote:text-lg prose-blockquote:leading-relaxed prose-blockquote:before:absolute prose-blockquote:before:top-0 prose-blockquote:before:left-0 prose-blockquote:before:w-1 prose-blockquote:before:h-full prose-blockquote:before:bg-gradient-to-b prose-blockquote:before:from-primary-500 prose-blockquote:before:to-purple-600 prose-blockquote:before:rounded-l-lg sm:prose-blockquote:before:rounded-l-xl prose-hr:border-0 prose-hr:border-t prose-hr:border-gray-200 prose-hr:my-8 sm:prose-hr:my-12"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <AuthorBio />
      </div>
    </section>
    <NewsletterSection />
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
      description="Stop losing customers to poor performance, search, and AI visibility. Get a comprehensive technical SEO audit and discover exactly how to boost your conversions and revenue."
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
  </main>
);

export default BlogPostLayout;
export const render = BlogPostLayout;
