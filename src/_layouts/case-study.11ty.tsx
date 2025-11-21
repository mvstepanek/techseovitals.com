import React from 'react';
import NewsletterSection from '../_components/sections/NewsletterSection';
import BlogPostHeader from '../_components/sections/BlogPostHeader';
import BlogAuthorBio from '../_components/sections/BlogAuthorBio';
import { SITE_CONFIG } from '../_data/constants';

// Allowed services that can be linked
type ServiceType = 'Technical SEO Audit' | 'Technical SEO Monitoring' | 'Website Migration Plan';

interface Metric {
  value: string;
  label: string;
  color: 'blue' | 'green' | 'purple';
  prefix?: '+' | '-';
}

interface CaseStudyData {
  title?: string;
  description?: string;
  permalink?: string;
  date?: string;
  image?: string;
  content: string;
  company?: string;
  industry?: string;
  services?: ServiceType[];
  metrics?: Metric[];
  locale?: string;
  i18n?: {
    locale: string;
    config: {
      [key: string]: {
        domain: string;
        htmlLang: string;
        label: string;
      };
    };
  };
  t?: (key: string) => string;
}

// Service translation key mapping
const SERVICE_TRANSLATION_KEYS: Record<ServiceType, string> = {
  'Technical SEO Audit': 'services.audit.title',
  'Technical SEO Monitoring': 'services.monitoring.title',
  'Website Migration Plan': 'services.migration.title',
};

// Get service URLs based on locale
const getServiceUrls = (locale: string): Record<ServiceType, string> => {
  const baseUrl = locale === 'sk' ? '/technicke-seo-sluzby/' : '/technical-seo-services/';
  return {
    'Technical SEO Audit': `${baseUrl}#technical-seo-audit`,
    'Technical SEO Monitoring': `${baseUrl}#technical-seo-monitoring`,
    'Website Migration Plan': `${baseUrl}#website-migration-plan`,
  };
};

export const data = {
  layout: 'base',
  eleventyComputed: {
    ogImage: (data: { image?: string }) => {
      if (data.image) {
        return `${SITE_CONFIG.DOMAIN}${data.image}`;
      }
      return undefined;
    },
  },
};

const CaseStudyLayout: React.FC<CaseStudyData> = (data: CaseStudyData) => {
  const locale = data.i18n?.locale || data.locale || 'en';
  const domain = data.i18n?.config?.[locale]?.domain || 'https://www.techseovitals.com';
  const t = data.t || ((key: string) => key);
  const serviceUrls = getServiceUrls(locale);

  return (
    <main className="flex-1">
      <BlogPostHeader
        title={data.title}
        description={data.description}
        date={data.date}
        permalink={data.permalink}
        image={data.image}
        locale={locale}
        domain={domain}
        t={data.t}
        metrics={data.metrics}
      />

      {/* Case Study Meta Info */}
      {(data.company || data.industry || data.services) && (
        <section className="bg-gradient-to-br from-gray-50 to-blue-50/30 border-b border-gray-200 py-8 sm:py-12">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {data.company && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">{t('case-study.company')}</h3>
                  <p className="text-lg font-bold text-gray-900">{data.company}</p>
                </div>
              )}
              {data.industry && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">{t('case-study.industry')}</h3>
                  <p className="text-lg font-bold text-gray-900">{data.industry}</p>
                </div>
              )}
              {data.services && data.services.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">{t('case-study.services')}</h3>
                  <ul className="space-y-2">
                    {data.services.map((service) => (
                      <li key={service}>
                        <a
                          href={serviceUrls[service as ServiceType]}
                          className="text-base text-primary-600 hover:text-primary-700 font-semibold hover:underline transition-colors"
                        >
                          {t(SERVICE_TRANSLATION_KEYS[service as ServiceType])}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div
            className="text-base sm:text-lg leading-6 sm:leading-7 text-gray-700 max-w-none prose prose-base sm:prose-lg prose-gray prose-headings:font-bold prose-headings:text-gray-900 prose-h2:text-2xl sm:prose-h2:text-3xl prose-h2:mt-8 sm:prose-h2:mt-12 prose-h2:mb-4 sm:prose-h2:mb-6 prose-h2:leading-tight prose-h2:tracking-tight prose-h3:text-xl sm:prose-h3:text-2xl prose-h3:mt-6 sm:prose-h3:mt-8 prose-h3:mb-3 sm:prose-h3:mb-4 prose-h3:leading-snug prose-h4:text-lg sm:prose-h4:text-xl prose-h4:font-bold prose-h4:text-gray-900 prose-h4:mt-4 sm:prose-h4:mt-6 prose-h4:mb-2 sm:prose-h4:mb-3 prose-p:mb-4 sm:prose-p:mb-6 prose-p:leading-6 sm:prose-p:leading-7 prose-p:text-gray-700 prose-ul:my-4 sm:prose-ul:my-6 prose-ul:pl-4 sm:prose-ul:pl-6 prose-ul:list-disc prose-ul:list-outside prose-ul:space-y-1 sm:prose-ul:space-y-2 prose-ol:my-4 sm:prose-ol:my-6 prose-ol:pl-4 sm:prose-ol:pl-6 prose-ol:list-decimal prose-ol:list-outside prose-ol:space-y-1 sm:prose-ol:space-y-2 prose-li:leading-relaxed prose-li:text-gray-700 prose-li:mb-1 sm:prose-li:mb-2 prose-li:ml-0 prose-a:text-primary-500 prose-a:no-underline prose-a:font-semibold hover:prose-a:underline prose-strong:text-gray-900 prose-strong:font-semibold prose-code:text-primary-500 prose-code:bg-gray-100 prose-code:px-1.5 sm:prose-code:px-2 prose-code:py-0.5 sm:prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:font-semibold prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg sm:prose-pre:rounded-xl prose-pre:p-3 sm:prose-pre:p-4 prose-pre:my-4 sm:prose-pre:my-6 prose-pre:overflow-x-auto prose-pre:font-mono prose-pre:text-sm prose-pre:code:bg-transparent prose-pre:code:text-gray-100 prose-pre:code:p-0 prose-pre:code:font-normal prose-pre:code:text-inherit prose-pre:code:not-rounded prose-blockquote:relative prose-blockquote:bg-white prose-blockquote:border prose-blockquote:border-gray-200 prose-blockquote:rounded-lg sm:prose-blockquote:rounded-xl prose-blockquote:px-4 sm:prose-blockquote:px-6 prose-blockquote:py-4 sm:prose-blockquote:py-5 prose-blockquote:my-6 sm:prose-blockquote:my-8 prose-blockquote:shadow-md prose-blockquote:shadow-gray-100 prose-blockquote:text-gray-800 prose-blockquote:font-semibold prose-blockquote:text-base sm:prose-blockquote:text-lg prose-blockquote:leading-relaxed prose-blockquote:before:absolute prose-blockquote:before:top-0 prose-blockquote:before:left-0 prose-blockquote:before:w-1 prose-blockquote:before:h-full prose-blockquote:before:bg-gradient-to-b prose-blockquote:before:from-primary-500 prose-blockquote:before:to-purple-600 prose-blockquote:before:rounded-l-lg sm:prose-blockquote:before:rounded-l-xl prose-hr:border-0 prose-hr:border-t prose-hr:border-gray-200 prose-hr:my-8 sm:prose-hr:my-12"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `
                .prose pre code {
                  background-color: transparent !important;
                  color: inherit !important;
                  padding: 0 !important;
                  border-radius: 0 !important;
                  font-weight: inherit !important;
                }
              `,
            }}
          />
          <BlogAuthorBio t={data.t} />
        </div>
      </section>
      <NewsletterSection t={data.t} />
    </main>
  );
};

export default CaseStudyLayout;
export const render = CaseStudyLayout;
