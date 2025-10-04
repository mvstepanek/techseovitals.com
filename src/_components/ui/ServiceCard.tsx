import React from 'react';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import Icons from '../ui/Icons';
import CardDecoration from '../ui/CardDecoration';
import { COLOR_SCHEMES } from '../../_data/constants';

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  price: string | number;
  priceUnit?: string;
  priceLabel?: string;
  description: string;
  features: ServiceFeature[];
  ctaText: string;
  ctaHref: string;
  color: 'green' | 'orange' | 'indigo' | 'blue' | 'purple';
  id?: string;
  commitment?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = React.memo(({ icon, title, price, priceUnit, priceLabel = 'Starting at', description, features, ctaText, ctaHref, color, id, commitment }) => {
  const colorClasses = COLOR_SCHEMES[color] || COLOR_SCHEMES.green;

  return (
    <div className="relative">
      <BackgroundDecorations variant="minimal" />

      {id && <div className="text-center mb-10" id={id} />}

      <div className="max-w-7xl mx-auto">
        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 pb-16 sm:pb-8 lg:pb-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden sm:overflow-visible">
          <CardDecoration color={color} size="lg" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div
                  className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br ${colorClasses.bg} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  {icon}
                </div>
                <h4 className="text-2xl sm:text-2xl font-sans font-bold text-gray-900">{title}</h4>
              </div>

              <div className="mb-4 sm:mb-5">
                <div className="text-sm text-gray-500 mb-1">{priceLabel}</div>
                <div className="text-3xl sm:text-3xl lg:text-4xl font-sans font-bold text-gray-900">
                  {typeof price === 'string' ? price : `$${price.toLocaleString()}`}
                  {priceUnit && <span className="text-base sm:text-lg lg:text-lg text-gray-600">{priceUnit}</span>}
                </div>
              </div>

              <p className="text-base sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6">{description}</p>

              <a
                className={`inline-block w-full sm:w-auto group relative overflow-hidden rounded-xl bg-gradient-to-r ${colorClasses.button} px-5 sm:px-6 py-2.5 sm:py-3 text-center text-base sm:text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 ${colorClasses.focus}`}
                href={ctaHref}
                aria-label={ctaText}
              >
                {ctaText}
              </a>
            </div>

            <div>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
                {features.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3 sm:gap-4">
                    <Icons.checkCircle className={`w-5 sm:w-6 h-5 sm:h-6 ${colorClasses.checkmark} mt-0.5 sm:mt-1 flex-shrink-0`} />
                    <div>
                      <h5 className="font-semibold text-base sm:text-base mb-1">{feature.title}</h5>
                      <p className="text-base sm:text-base text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {commitment && <div className="absolute bottom-4 right-4 text-xs text-gray-500">{commitment}</div>}
        </div>
      </div>
    </div>
  );
});

ServiceCard.displayName = 'ServiceCard';

export default ServiceCard;
