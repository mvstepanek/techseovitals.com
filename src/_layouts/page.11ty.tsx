import React from 'react';
import { COMMON_STYLES } from '../_data/constants';

interface PageData {
  title?: string;
  description?: string;
  permalink?: string;
  content: string;
}

export const data = {
  layout: 'base',
};

const PageLayout: React.FC<PageData> = (data: PageData) => (
  <main className="flex-1">
    <section className={`${COMMON_STYLES.sectionPadding} bg-white`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6">{data.title?.split('|')[0]?.trim() || data.title}</h1>
        </div>
        <div
          className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 prose-p:mb-4 prose-p:text-gray-700 prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-6 prose-li:mb-2 prose-strong:font-bold prose-strong:text-gray-900 prose-a:text-primary-500 prose-a:no-underline hover:prose-a:underline prose-a:font-medium"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    </section>
  </main>
);

export default PageLayout;
export const render = PageLayout;
