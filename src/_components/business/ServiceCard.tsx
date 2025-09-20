import React from 'react';

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
  color: 'green' | 'orange' | 'indigo' | 'blue';
  id?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  price,
  priceUnit,
  priceLabel = 'Starting at',
  description,
  features,
  ctaText,
  ctaHref,
  color,
  id,
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'green':
        return {
          bg: 'from-green-500 to-green-600',
          accent: 'from-green-500 to-green-600',
          button: 'from-green-600 to-green-700',
          focus: 'focus:ring-green-300',
          checkmark: 'text-green-500',
        };
      case 'orange':
        return {
          bg: 'from-orange-500 to-yellow-600',
          accent: 'from-orange-500 to-yellow-600',
          button: 'from-orange-600 to-yellow-600',
          focus: 'focus:ring-orange-300',
          checkmark: 'text-green-500',
        };
      case 'indigo':
        return {
          bg: 'from-indigo-500 to-indigo-600',
          accent: 'from-indigo-500 to-indigo-600',
          button: 'from-indigo-600 to-indigo-700',
          focus: 'focus:ring-indigo-300',
          checkmark: 'text-green-500',
        };
      case 'blue':
        return {
          bg: 'from-blue-500 to-blue-600',
          accent: 'from-blue-500 to-blue-600',
          button: 'from-blue-600 to-blue-700',
          focus: 'focus:ring-blue-300',
          checkmark: 'text-green-500',
        };
      default:
        return {
          bg: 'from-green-500 to-green-600',
          accent: 'from-green-500 to-green-600',
          button: 'from-green-600 to-green-700',
          focus: 'focus:ring-green-300',
          checkmark: 'text-green-500',
        };
    }
  };

  const colorClasses = getColorClasses();

  return (
    <div className="relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-16 left-16 w-32 h-32 bg-gradient-to-br ${colorClasses.bg} rounded-full blur-3xl opacity-30 animate-pulse`}
        />
        <div
          className={`absolute bottom-20 right-20 w-24 h-24 bg-gradient-to-br ${colorClasses.bg} rounded-full blur-3xl opacity-25 animate-pulse`}
        />
      </div>

      {id && <div className="text-center mb-10" id={id} />}

      <div className="max-w-7xl mx-auto">
        <div className="group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
          <div
            className={`absolute -top-4 -right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br ${colorClasses.accent} rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity`}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div
                  className={`w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 bg-gradient-to-br ${colorClasses.bg} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0`}
                >
                  {icon}
                </div>
                <h4 className="text-xl sm:text-2xl font-sans font-bold text-gray-900">{title}</h4>
              </div>

              <div className="mb-4 sm:mb-5">
                <div className="text-xs text-gray-500 mb-1">{priceLabel}</div>
                <div className="text-2xl sm:text-3xl lg:text-4xl font-sans font-bold text-gray-900">
                  {typeof price === 'string' ? price : `$${price.toLocaleString()}`}
                  {priceUnit && <span className="text-base sm:text-lg lg:text-xl text-gray-600">{priceUnit}</span>}
                </div>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed mb-5 sm:mb-6">
                {description}
              </p>

              <a
                className={`inline-block w-full sm:w-auto group relative overflow-hidden rounded-xl bg-gradient-to-r ${colorClasses.button} px-4 sm:px-6 py-2 sm:py-3 text-center text-sm sm:text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 ${colorClasses.focus}`}
                href={ctaHref}
                target="_self"
              >
                {ctaText}
              </a>
            </div>

            <div>
              <ul className="space-y-3 sm:space-y-4 text-gray-700">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 sm:gap-4">
                    <svg
                      className={`w-5 sm:w-6 h-5 sm:h-6 ${colorClasses.checkmark} mt-0.5 sm:mt-1 flex-shrink-0`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div>
                      <h5 className="font-semibold text-sm sm:text-base mb-1">{feature.title}</h5>
                      <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
