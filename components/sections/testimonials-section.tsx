import Image from 'next/image';
import { SectionWrapper, Badge } from '@/components/ui';

interface Testimonial {
  avatar: {
    src: string;
    alt: string;
  };
  name: string;
  title: string;
  company: string;
  quote: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  testimonials: Testimonial[];
  socialProof?: {
    icon: React.ReactNode;
    text: string;
  };
}

export default function TestimonialsSection({
  badge,
  badgeIcon,
  title,
  description,
  testimonials,
  socialProof
}: TestimonialsSectionProps) {
  return (
    <SectionWrapper variant="default" size="xl">
      <div className="text-center mb-16">
        {badge && (
          <Badge variant="gradient" icon={badgeIcon} className="mb-6">
            {badge}
          </Badge>
        )}
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                <div className="flex items-start gap-6 mb-6">
                  <div className="relative">
                    <Image
                      src={testimonial.avatar.src}
                      alt={testimonial.avatar.alt}
                      width={64}
                      height={64}
                      className="rounded-2xl"
                    />
                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                      {testimonial.rating && (
                        <div className="flex text-yellow-400">
                          {'★'.repeat(testimonial.rating)}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-600 text-sm font-medium">{testimonial.title}, {testimonial.company}</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-2 -top-2 text-6xl text-primary/20 font-serif">"</div>
                  <blockquote className="text-gray-700 leading-relaxed pl-6">
                    {testimonial.quote}
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {socialProof && (
          <div className="text-center mt-12">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              {socialProof.icon}
              <span className="text-sm font-medium">{socialProof.text}</span>
            </div>
          </div>
        )}
    </SectionWrapper>
  );
}