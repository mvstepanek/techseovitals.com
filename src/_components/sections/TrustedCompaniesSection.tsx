import React from 'react';
import OptimizedImage from '../common/OptimizedImage';
import { COMMON_STYLES } from '../../_data/constants';

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

  return (
    <section className={`py-16 ${bgClasses} ${borderClasses}`}>
      <div className={COMMON_STYLES.containerWidth}>
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{displayTitle}</p>
          <h2 className="text-2xl font-display font-bold text-gray-900">{displaySubtitle}</h2>
        </div>

        <div className="space-y-8">
          {/* All logos in one responsive grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 items-center justify-items-center max-w-4xl mx-auto">
            {/* First row on mobile (2 logos) */}
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gray-50 w-full flex items-center justify-center lg:col-span-2">
              <img
                src="/assets/images/clients/logo-expertiseai.svg"
                alt="Expertise AI"
                width="200"
                height="50"
                className="max-h-8 sm:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>

            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gray-50 w-full flex items-center justify-center lg:col-span-2">
              <OptimizedImage
                src="/assets/images/clients/logo-liveagent.png"
                alt="LiveAgent"
                width={200}
                height={50}
                className="max-h-8 sm:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Second row on mobile (2 logos) */}
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gray-50 w-full flex items-center justify-center lg:col-span-2">
              <OptimizedImage
                src="/assets/images/clients/logo-postaffiliatepro.png"
                alt="Post Affiliate Pro"
                width={200}
                height={50}
                className="max-h-8 sm:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
              />
            </div>

            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gray-50 w-full flex items-center justify-center lg:col-span-3">
              <OptimizedImage
                src="/assets/images/clients/logo-touchit.png"
                alt="TOUCHIT"
                width={200}
                height={50}
                className="max-h-8 sm:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
              />
            </div>

            {/* Third row on mobile (1 logo centered) */}
            <div className="group p-4 sm:p-6 md:p-8 rounded-2xl bg-gray-50 w-full flex items-center justify-center col-span-2 md:col-span-1 lg:col-span-3 max-w-xs mx-auto md:max-w-none">
              <img
                src="/assets/images/clients/logo-ecommerce-bridge.svg"
                alt="Ecommerce Bridge"
                width="200"
                height="50"
                className="max-h-8 sm:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
