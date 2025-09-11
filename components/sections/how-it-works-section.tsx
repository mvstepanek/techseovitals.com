import Link from 'next/link';

interface Step {
  number: string;
  label: string;
  bgGradient: string;
  title: string;
  description: string;
  features: string[];
  featureColor: string;
}

interface HowItWorksSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  steps: Step[];
  ctaText?: string;
  ctaHref?: string;
}

export default function HowItWorksSection({
  badge,
  badgeIcon,
  title,
  description,
  steps,
  ctaText,
  ctaHref
}: HowItWorksSectionProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-purple-600 text-white mb-6">
              {badgeIcon}
              {badge}
            </div>
          )}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className={`w-36 h-14 ${step.bgGradient} rounded-3xl mx-auto flex items-center justify-center text-xs font-bold text-white shadow-xl group-hover:scale-110 transition-transform duration-300 mb-8`}>
                  <span>{step.number}. {step.label}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                <div className={`mt-6 text-${step.featureColor}-600 font-semibold text-sm flex justify-center gap-6`}>
                  {step.features.map((feature, featureIndex) => (
                    <span key={featureIndex}>✓ {feature}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {ctaText && ctaHref && (
          <div className="text-center mt-16">
            <Link
              href={ctaHref}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-primary/30"
            >
              <span className="relative z-10">{ctaText}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}