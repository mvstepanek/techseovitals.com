import Link from 'next/link';

interface BenefitCard {
  icon: React.ReactNode;
  iconGradient: string;
  hoverBorderColor: string;
  title: string;
  description: string;
  metric: string;
  metricColor: string;
}

interface WhyTechnicalSEOSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: React.ReactNode;
  benefits: BenefitCard[];
}

export default function WhyTechnicalSEOSection({
  badge,
  badgeIcon,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  benefits
}: WhyTechnicalSEOSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {badge && (
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
              {badgeIcon}
              {badge}
            </div>
          </div>
        )}
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-10">
            {description}
          </p>
          <div className="flex flex-col items-center gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                <span className="relative z-10">{primaryCTA.text}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Link>
            )}
            {secondaryCTA}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className={`group relative bg-white p-8 rounded-2xl border border-gray-200 hover:border-${benefit.hoverBorderColor}-200 hover:shadow-lg transition-all duration-300`}>
              <div className={`absolute -top-4 -right-4 w-24 h-24 ${benefit.iconGradient} rounded-2xl rotate-12 opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className={`w-14 h-14 ${benefit.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {benefit.description}
              </p>
              <div className={`flex items-center gap-2 text-${benefit.metricColor}-600 font-semibold`}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                </svg>
                {benefit.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}