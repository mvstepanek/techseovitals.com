import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';

interface Company {
  name: string;
  logo: string;
  alt: string;
  caseStudyUrl?: string;
  colSpan?: string;
}

interface TrustedCompaniesProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: 'white' | 'gray';
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const TrustedCompaniesSection: React.FC<TrustedCompaniesProps> = ({
  title,
  subtitle,
  backgroundColor = 'white',
  t = defaultT,
}) => {
  const displayTitle = title || t('trusted.title');
  const displaySubtitle = subtitle || t('trusted.subtitle');
  const bgClasses = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  const borderClasses = backgroundColor === 'white' ? 'border-y border-gray-100' : '';

  const companies: Company[] = [
    {
      name: 'expertise.ai',
      logo: '/assets/images/clients/logo-expertiseai.svg',
      alt: 'Expertise AI',
      colSpan: 'lg:col-span-2',
    },
    {
      name: 'LiveAgent',
      logo: '/assets/images/clients/logo-liveagent.png',
      alt: 'LiveAgent',
      colSpan: 'lg:col-span-2',
    },
    {
      name: 'Post Affiliate Pro',
      logo: '/assets/images/clients/logo-postaffiliatepro.png',
      alt: 'Post Affiliate Pro',
      colSpan: 'lg:col-span-2',
    },
    {
      name: 'TOUCHIT',
      logo: '/assets/images/clients/logo-touchit.png',
      alt: 'TOUCHIT',
      caseStudyUrl: t('url.case-study.touchit') || '/customers/touchit/',
      colSpan: 'lg:col-span-3',
    },
    {
      name: 'Ecommerce Bridge',
      logo: '/assets/images/clients/logo-ecommerce-bridge.svg',
      alt: 'Ecommerce Bridge',
      colSpan: 'col-span-2 md:col-span-1 lg:col-span-3 max-w-xs mx-auto md:max-w-none',
    },
  ];

  const renderCompanyLogo = (company: Company) => {
    const content = (
      <div className="relative w-full h-full flex flex-col items-center justify-center">
        {company.logo.endsWith('.svg') ? (
          <img
            src={company.logo}
            alt={company.alt}
            width="200"
            height="50"
            className="max-h-8 sm:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
        ) : (
          <OptimizedImage
            src={company.logo}
            alt={company.alt}
            width={200}
            height={50}
            className="max-h-8 sm:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
          />
        )}
        {company.caseStudyUrl && (
          <span className="absolute -top-9 -right-9 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg whitespace-nowrap z-10">
            {t('common.case-study') || 'Case Study'}
          </span>
        )}
      </div>
    );

    const containerClasses = `group p-4 sm:p-6 md:p-8 rounded-2xl bg-gray-50 w-full flex items-center justify-center overflow-visible ${company.colSpan || ''} ${company.caseStudyUrl ? 'cursor-pointer hover:bg-gray-100 transition-colors' : ''}`;

    if (company.caseStudyUrl) {
      return (
        <a href={company.caseStudyUrl} className={containerClasses} key={company.name}>
          {content}
        </a>
      );
    }

    return (
      <div className={containerClasses} key={company.name}>
        {content}
      </div>
    );
  };

  return (
    <section className={`py-16 ${bgClasses} ${borderClasses} overflow-visible`}>
      <div className={`${COMMON_STYLES.containerWidth} overflow-visible`}>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{displayTitle}</p>
          <h2 className="text-2xl font-display font-bold text-gray-900">{displaySubtitle}</h2>
        </div>

        <div className="space-y-8 overflow-visible">
          {/* All logos in one responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center max-w-4xl mx-auto overflow-visible">
            {companies.map((company) => renderCompanyLogo(company))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
