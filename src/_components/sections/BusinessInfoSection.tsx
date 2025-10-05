import React from 'react';

interface BusinessInfoProps {
  backgroundColor?: string;
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const BusinessInfoSection: React.FC<BusinessInfoProps> = ({ backgroundColor = 'bg-gray-50', t = defaultT }) => (
  <section className={`py-24 ${backgroundColor}`}>
    <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{t('business-info.title')}</h2>
        <p className="text-lg text-gray-600">{t('business-info.subtitle')}</p>
      </div>
      <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('business-info.company-details')}</h3>
            <div className="space-y-2 text-gray-700">
              <p>
                <span className="font-semibold">{t('business-info.business-name')}:</span> mountain explorer, s. r. o.
              </p>
              <p>
                <span className="font-semibold">{t('business-info.business-id')}:</span> 53226119
              </p>
              <p>
                <span className="font-semibold">{t('business-info.vat-id')}:</span> SK2121306704
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('business-info.address')}</h3>
            <div className="space-y-2 text-gray-700">
              <p>Karpatske namestie 7770/10A</p>
              <p>83106 Bratislava</p>
              <p>Slovakia (European Union)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default BusinessInfoSection;
