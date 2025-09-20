import React from 'react';

interface TrustedCompaniesProps {
  title?: string;
  subtitle?: string;
  backgroundColor?: 'white' | 'gray';
}

const TrustedCompaniesSection: React.FC<TrustedCompaniesProps> = ({
  title = 'Trusted by innovative companies',
  subtitle = 'Brands That Trust My Expertise',
  backgroundColor = 'white',
}) => {
  const bgClasses = backgroundColor === 'gray' ? 'bg-gray-50' : 'bg-white';
  const borderClasses = backgroundColor === 'white' ? 'border-y border-gray-100' : '';

  return (
    <section className={`py-16 ${bgClasses} ${borderClasses}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">{title}</p>
          <h2 className="text-2xl font-display font-bold text-gray-900">{subtitle}</h2>
        </div>

        <div className="space-y-8">
          {/* First row - 3 logos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
              <img
                src="/assets/images/clients/logo-expertiseai.svg"
                alt="Expertise AI"
                width="200"
                height="50"
                className="max-h-8 sm:max-h-10 md:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
              <img
                src="/assets/images/clients/liveagent-logo.png"
                alt="LiveAgent"
                width="200"
                height="50"
                className="max-h-8 sm:max-h-10 md:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
              <img
                src="/assets/images/clients/post-affiliate-pro-logo.png"
                alt="Post Affiliate Pro"
                width="200"
                height="50"
                className="max-h-8 sm:max-h-10 md:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Second row - 2 logos centered */}
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-items-center max-w-2xl">
              <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
                <img
                  src="/assets/images/clients/touchit-logo.png"
                  alt="TOUCHIT"
                  width="200"
                  height="50"
                  className="max-h-8 sm:max-h-10 md:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
                <img
                  src="/assets/images/clients/logo-ecommerce-bridge.svg"
                  alt="Ecommerce Bridge"
                  width="200"
                  height="50"
                  className="max-h-8 sm:max-h-10 md:max-h-12 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCompaniesSection;
