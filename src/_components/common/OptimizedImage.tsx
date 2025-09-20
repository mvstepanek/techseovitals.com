import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  decoding?: 'auto' | 'sync' | 'async';
  fetchpriority?: 'high' | 'low' | 'auto';
  sizes?: string;
  responsive?: boolean;
}

const RESPONSIVE_SIZES = [480, 640, 768, 1024];

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  loading = 'lazy',
  decoding = 'async',
  fetchpriority,
  sizes,
  responsive = false,
}) => {
  const isExternal = src.startsWith('http');
  const isSvg = src.endsWith('.svg');

  // For SVG images, return simple img tag without WebP optimization
  if (isSvg) {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchpriority}
      />
    );
  }

  // Generate srcset for responsive images
  const generateSrcSet = (format?: 'webp') => {
    if (isExternal || !responsive) {
      return format ? getOptimizedSrc(src, format) : src;
    }

    const basePath = src.replace(/\.[^/.]+$/, '');
    const extension = format || src.split('.').pop();

    return RESPONSIVE_SIZES.map(size => {
      const suffix = size === 1024 ? '' : `-${size}w`;
      return `${basePath}${suffix}.${extension} ${size}w`;
    }).join(', ');
  };

  // Generate WebP version
  const getOptimizedSrc = (originalSrc: string, format: 'webp') => {
    if (isExternal) {
      return originalSrc;
    }

    const extension = originalSrc.split('.').pop();
    return originalSrc.replace(`.${extension}`, `.${format}`);
  };

  return (
    <picture>
      {/* WebP format - good compression, wide support */}
      <source
        srcSet={generateSrcSet('webp')}
        type="image/webp"
        sizes={sizes}
      />

      {/* Fallback - original format */}
      <img
        src={src}
        srcSet={responsive ? generateSrcSet() : undefined}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchpriority={fetchpriority}
        sizes={sizes}
      />
    </picture>
  );
};

export default OptimizedImage;
