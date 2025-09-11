import Image from 'next/image';

interface CompanyLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface TrustedBySectionProps {
  title?: string;
  subtitle?: string;
  logos: CompanyLogo[];
}

export default function TrustedBySection({
  title = "Brands That Trust My Expertise",
  subtitle = "Trusted by innovative companies",
  logos
}: TrustedBySectionProps) {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all duration-300 w-full flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="h-10 w-auto grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}