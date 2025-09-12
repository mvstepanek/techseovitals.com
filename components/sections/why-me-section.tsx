import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/section-header';
import { designTokens } from '@/lib/design-tokens';

interface Expertise {
  icon: React.ReactNode;
  iconGradient: string;
  title: string;
  description: string;
}

interface Testimonial {
  text: string;
  author?: string;
  link?: {
    text: string;
    href: string;
  };
}

interface WhyMeSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  expertise: Expertise[];
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  imageBadge?: {
    icon?: React.ReactNode;
    title: string;
    subtitle: string;
  };
  testimonial?: Testimonial;
}

export default function WhyMeSection({
  badge,
  badgeIcon,
  title,
  description,
  expertise,
  image,
  imageBadge,
  testimonial
}: WhyMeSectionProps) {
  return (
    <section className={`${designTokens.containers.section} ${designTokens.gradients.whyMeSection}`}>
      <div className={designTokens.containers.maxWidth}>
        <SectionHeader
          badge={badge}
          badgeIcon={badgeIcon}
          title={title}
          description={description}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <div className="space-y-8">
              {expertise.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`w-16 h-16 ${item.iconGradient} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {image && (
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 rounded-3xl blur-xl"></div>
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  className="rounded-3xl shadow-2xl border-4 border-white"
                />
                {imageBadge && (
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      {imageBadge.icon}
                      <div>
                        <div className="text-sm font-bold text-gray-900">{imageBadge.title}</div>
                        <div className="text-xs text-gray-500">{imageBadge.subtitle}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
        
        {testimonial && (
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-200">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
                  "{testimonial.text}"
                </p>
                {testimonial.link && (
                  <div className="flex items-center gap-4">
                    <div>
                      <Link 
                        href={testimonial.link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                      >
                        {testimonial.link.text}
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}