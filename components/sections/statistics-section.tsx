import Link from 'next/link';

interface StatCard {
  source: string;
  sourceColor: string;
  value: string;
  valueColor: string;
  metric: string;
  title: string;
  description: string;
}

interface StatisticsSectionProps {
  title: React.ReactNode;
  description: string;
  stats: StatCard[];
  ctaText?: string;
  ctaHref?: string;
  ctaIcon?: React.ReactNode;
}

export default function StatisticsSection({
  title,
  description,
  stats,
  ctaText,
  ctaHref,
  ctaIcon
}: StatisticsSectionProps) {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/50 to-orange-50/30"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200">
              <div className="mb-4">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-${stat.sourceColor}-100 text-${stat.sourceColor}-700 mb-3`}>
                  {stat.source}
                </div>
                <div className={`text-4xl font-bold text-${stat.valueColor}-500 mb-2`}>{stat.value}</div>
                <div className="text-sm text-gray-500 mb-4">{stat.metric}</div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{stat.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
        {ctaText && ctaHref && (
          <div className="text-center mt-12">
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              {ctaIcon}
              <span>{ctaText}</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}