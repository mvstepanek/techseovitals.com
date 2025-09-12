import Image from 'next/image';
import Link from 'next/link';
import { HeroSectionWrapper, Badge, Button, GradientText } from '@/components/ui';

interface HeroSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  statusBadge?: {
    text: string;
    icon?: React.ReactNode;
  };
}

export default function HeroSection({
  badge,
  badgeIcon,
  title,
  description,
  primaryCTA,
  secondaryCTA,
  image,
  statusBadge
}: HeroSectionProps) {
  return (
    <HeroSectionWrapper>
      <div className={`grid gap-16 items-center ${image ? 'grid-cols-1 lg:grid-cols-2' : 'grid-cols-1 justify-center text-center'}`}>
        <div className={image ? "max-w-4xl" : "max-w-4xl mx-auto"}>
          {badge && (
            <Badge variant="gradient" icon={badgeIcon} className="mb-6">
              {badge}
            </Badge>
          )}
            <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">
              {title}
            </h1>
            <p className={`mt-8 text-xl text-gray-600 leading-relaxed max-w-lg ${!image ? 'mx-auto' : ''}`}>
              {description}
            </p>
            <div className={`mt-10 flex flex-col sm:flex-row gap-4 ${!image ? 'justify-center items-center' : ''}`}>
              {primaryCTA && (
                <Button variant="cta" href={primaryCTA.href}>
                  {primaryCTA.text}
                </Button>
              )}
              {secondaryCTA}
            </div>
          </div>
          {image && (
            <div className="relative lg:ml-8">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-2xl opacity-30"></div>
              <div className="relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority
                  fetchPriority="high"
                  className="rounded-3xl shadow-2xl border-4 border-white"
                />
                {statusBadge && (
                  <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-2">
                      {statusBadge.icon}
                      <span className="text-sm font-semibold text-gray-800">{statusBadge.text}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
    </HeroSectionWrapper>
  );
}