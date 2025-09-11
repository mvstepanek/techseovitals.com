interface Benefit {
  icon: React.ReactNode;
  iconGradient: string;
  title: string;
  description: string;
}

interface BenefitsGridSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description?: string;
  benefits: Benefit[];
  columns?: 2 | 3 | 4;
  backgroundColor?: string;
}

export default function BenefitsGridSection({
  badge,
  badgeIcon,
  title,
  description,
  benefits,
  columns = 4,
  backgroundColor = "bg-gradient-to-br from-slate-50 to-blue-50/30"
}: BenefitsGridSectionProps) {
  const gridColsClass = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3", 
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
  }[columns];

  return (
    <section className={`py-24 ${backgroundColor}`}>
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
          {description && (
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {description}
            </p>
          )}
        </div>
        <div className={`grid ${gridColsClass} gap-8`}>
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
              <div className={`w-16 h-16 ${benefit.iconGradient} rounded-2xl flex items-center justify-center mb-6`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}