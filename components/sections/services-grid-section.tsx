import Link from 'next/link';

interface Service {
  icon: React.ReactNode;
  iconGradient: string;
  decorativeColor: string;
  title: string;
  price: string;
  priceUnit?: string;
  description: string;
  features: Array<{
    title: string;
    description: string;
  }>;
  ctaText: string;
  ctaHref: string;
  ctaGradient: string;
}

interface ServicesGridSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  services: Service[];
}

export default function ServicesGridSection({
  badge,
  badgeIcon,
  title,
  description,
  services
}: ServicesGridSectionProps) {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
              {badgeIcon}
              {badge}
            </div>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Services */}
        {services.map((service, index) => (
          <div key={index} className="mb-32 relative">
            {/* Background decorative elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div className={`absolute top-16 left-16 w-32 h-32 ${service.decorativeColor} rounded-full blur-3xl opacity-30`} style={{
                animation: 'pulse 20s ease-in-out infinite, bounce 25s ease-in-out infinite'
              }}></div>
              <div className={`absolute bottom-20 right-20 w-24 h-24 ${service.decorativeColor} rounded-full blur-3xl opacity-25`} style={{
                animation: 'pulse 18s ease-in-out infinite reverse'
              }}></div>
            </div>
            
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">{service.title}</h3>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto">
              <div className={`group relative bg-white rounded-3xl p-12 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300`}>
                <div className={`absolute -top-4 -right-4 w-24 h-24 ${service.iconGradient} rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className={`w-16 h-16 ${service.iconGradient} rounded-3xl flex items-center justify-center mb-8`}>
                      {service.icon}
                    </div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h4>
                    <div className="mb-6">
                      <div className="text-sm text-gray-500 mb-1">Starting at</div>
                      <div className="text-5xl font-bold text-gray-900">
                        {service.price}
                        {service.priceUnit && <span className="text-2xl text-gray-600">{service.priceUnit}</span>}
                      </div>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link
                      href={service.ctaHref}
                      className={`inline-flex items-center rounded-2xl ${service.ctaGradient} px-8 py-4 text-lg font-bold text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                    >
                      {service.ctaText}
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                  <div>
                    <ul className="space-y-4 text-gray-700">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-4">
                          <svg className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <h5 className="font-semibold text-lg mb-2">{feature.title}</h5>
                            <p className="text-gray-600">{feature.description}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}