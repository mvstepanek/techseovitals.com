import React from 'react';
import Badge from '../ui/Badge';
import { COMMON_STYLES } from '../../_data/constants';

interface SectionLayoutProps {
  // Section configuration
  as?: 'section' | 'div';
  className?: string;

  // Background & styling
  background?: 'white' | 'gray' | 'gradient' | 'purple-gradient';
  borders?: 'none' | 'top' | 'vertical';
  decorations?: boolean | 'simple' | 'complex';

  // Header content
  badge?: {
    text: string;
    icon?: React.ReactNode;
    variant?: 'default' | 'outline' | 'newsletter';
  };
  title?: React.ReactNode;
  subtitle?: string;
  headerAlign?: 'center' | 'left';
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl';

  // CTA section (appears after header, before main content)
  cta?: {
    button: {
      text: string;
      href: string;
      target?: string;
    };
    trustSignals?: string[];
  };

  // Main content
  children: React.ReactNode;
  contentClassName?: string;

  // Footer content (appears after main content)
  footer?: React.ReactNode;

  // Schema/SEO
  schema?: object;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({
  as: Component = 'section',
  className,
  background = 'white',
  borders = 'none',
  decorations = false,
  badge,
  title,
  subtitle,
  headerAlign = 'center',
  maxWidth = '3xl',
  cta,
  children,
  contentClassName,
  footer,
  schema,
}) => {
  // Background classes
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-slate-50 to-blue-50/30',
    'purple-gradient': 'bg-gradient-to-br from-gray-50 to-slate-100',
  };

  // Border classes
  const borderClasses = {
    none: '',
    top: 'border-t border-gray-200',
    vertical: 'border-y border-gray-100',
  };

  // Max width classes for subtitle
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
    '2xl': 'max-w-2xl',
    '3xl': 'max-w-3xl',
    '4xl': 'max-w-4xl',
  };

  // Header alignment classes
  const alignmentClasses = headerAlign === 'center' ? 'text-center' : 'text-left';

  return (
    <>
      {/* Schema markup */}
      {schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      )}

      <Component className={`${COMMON_STYLES.sectionPadding} ${backgroundClasses[background]} ${borderClasses[borders]} relative overflow-hidden ${className}`}>
        {/* Background decorations */}
        {decorations && (
          <div className="absolute inset-0">
            {decorations === 'complex' ? (
              <>
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
                <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
                <div className={`${COMMON_STYLES.blurredBlob} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96`} />
              </>
            ) : decorations === 'simple' ? (
              <>
                <div className="absolute top-20 left-20 w-32 h-32 bg-purple-300 rounded-full blur-3xl opacity-40" />
                <div className="absolute top-32 right-24 w-24 h-24 bg-indigo-300 rounded-full blur-3xl opacity-30" />
                <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-25" />
                <div className="absolute bottom-20 right-16 w-28 h-28 bg-slate-300 rounded-full blur-3xl opacity-35" />
              </>
            ) : (
              <div className={`${COMMON_STYLES.blurredBlob} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96`} />
            )}
          </div>
        )}

        <div className={`relative ${COMMON_STYLES.containerWidth}`}>
          {/* Header Section */}
          {(badge || title || subtitle) && (
            <div className={`${alignmentClasses} mb-16`}>
              {/* Badge */}
              {badge && (
                <Badge icon={badge.icon} variant={badge.variant}>
                  {badge.text}
                </Badge>
              )}

              {/* Title */}
              {title && <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">{title}</h2>}

              {/* Subtitle */}
              {subtitle && <p className={`text-lg text-gray-600 ${maxWidthClasses[maxWidth]} ${headerAlign === 'center' ? 'mx-auto' : ''} leading-relaxed`}>{subtitle}</p>}
            </div>
          )}

          {/* CTA Section */}
          {cta && (
            <div className="flex flex-col items-center gap-4 mb-16">
              <a className={COMMON_STYLES.buttonPrimary} href={cta.button.href} target={cta.button.target}>
                <span className="relative z-10">{cta.button.text}</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </a>

              {/* Trust Signals */}
              {cta.trustSignals && (
                <div className="flex items-center justify-center gap-4 text-gray-600">
                  {cta.trustSignals.map((signal, index) => (
                    <span key={index} className="text-sm">
                      ✓ {signal}
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Main Content */}
          <div className={contentClassName}>{children}</div>

          {/* Footer Content */}
          {footer && <div className="mt-16">{footer}</div>}
        </div>
      </Component>
    </>
  );
};

export default SectionLayout;
