import Link from 'next/link';
import { SectionHeader } from '@/components/ui/section-header';
import { designTokens } from '@/lib/design-tokens';

interface AuditBenefit {
  icon: React.ReactNode;
  iconGradient: string;
  hoverBorderColor: string;
  title: string;
  description: string;
  metric: string;
  metricColor: string;
}

interface WhyAuditSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: React.ReactNode;
  benefits: AuditBenefit[];
}

export default function WhyAuditSection({
  badge,
  badgeIcon,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  benefits
}: WhyAuditSectionProps) {
  const getMetricTextClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      red: 'text-red-600',
      orange: 'text-orange-600'
    };
    return colorMap[color] || 'text-gray-600';
  };

  const getMetricDotClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      blue: 'bg-blue-600',
      green: 'bg-green-600',
      purple: 'bg-purple-600',
      red: 'bg-red-600',
      orange: 'bg-orange-600'
    };
    return colorMap[color] || 'bg-gray-600';
  };
  return (
    <section className={`${designTokens.containers.section} bg-white`}>
      <div className={designTokens.containers.maxWidth}>
        <div className="text-center mb-16">
          <SectionHeader
            badge={badge}
            badgeIcon={badgeIcon}
            title={title}
            description={description}
            className="mb-10"
          />
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
            <div key={index} className={`group relative bg-white p-8 rounded-3xl border border-gray-200 hover:border-${benefit.hoverBorderColor}-200 hover:shadow-lg transition-all duration-300`}>
              <div className={`absolute -top-4 -right-4 w-20 h-20 ${benefit.iconGradient} rounded-2xl opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className={`w-16 h-16 ${benefit.iconGradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {benefit.description}
              </p>
              <div className={`flex items-center gap-2 font-semibold ${getMetricTextClasses(benefit.metricColor)}`}>
                <div className={`w-2 h-2 rounded-full ${getMetricDotClasses(benefit.metricColor)}`}></div>
                {benefit.metric}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}