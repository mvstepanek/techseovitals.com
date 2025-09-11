import Link from 'next/link';

interface BenefitItem {
  icon: React.ReactNode;
  iconGradient: string;
  title: string;
  description: string;
}

interface FinalCTASectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
    icon?: React.ReactNode;
  } | React.ReactNode;
  benefits?: BenefitItem[];
  socialProof?: {
    icon: React.ReactNode;
    text: string;
  };
}

export default function FinalCTASection({
  badge,
  badgeIcon,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  benefits,
  socialProof
}: FinalCTASectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-8">
              {badgeIcon}
              {badge}
            </div>
          )}

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {title}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
            {description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col items-center gap-4">
            {primaryCTA && (
              <Link
                href={primaryCTA.href}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
              >
                <span className="relative z-10">{primaryCTA.text}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
            )}
            
            {secondaryCTA && (
              typeof secondaryCTA === 'object' && 'href' in secondaryCTA ? (
                <Link
                  href={secondaryCTA.href}
                  className="group inline-flex items-center gap-2 px-6 py-4 text-lg font-semibold text-purple-600 hover:text-purple-700 transition-colors"
                >
                  <span>{secondaryCTA.text}</span>
                  {secondaryCTA.icon}
                </Link>
              ) : (
                secondaryCTA
              )
            )}
          </div>
          
          {/* Spacing for benefits or social proof */}
          <div className="mb-16"></div>

          {/* Benefits grid */}
          {benefits && benefits.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex flex-col items-center p-6 rounded-2xl bg-gradient-to-br from-green-50 to-green-100/50 border border-green-200">
                  <div className={`w-12 h-12 ${benefit.iconGradient} rounded-2xl flex items-center justify-center mb-4`}>
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600 text-center">{benefit.description}</p>
                </div>
              ))}
            </div>
          )}
          
          {/* Social proof */}
          {socialProof && (
            <div className="flex items-center justify-center gap-2 text-gray-600">
              {socialProof.icon}
              <span className="text-sm font-medium">{socialProof.text}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}