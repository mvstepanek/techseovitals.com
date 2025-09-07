import Image from 'next/image';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  priority?: boolean;
}

export default function Logo({ variant = 'light', className = '', priority = false }: LogoProps) {
  const logoSrc = variant === 'dark' ? '/images/logos/logo-dark.svg' : '/images/logos/logo-light.svg';
  const alt = 'TechSEO Vitals - Technical SEO and Web Performance Consultant';

  return (
    <Link href="/" className={`block ${className}`}>
      <Image
        src={logoSrc}
        alt={alt}
        width={200}
        height={50}
        priority={priority}
        className="h-auto w-auto"
      />
    </Link>
  );
}