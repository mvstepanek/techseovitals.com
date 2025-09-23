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
}

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
}) => {
  // Generate WebP and AVIF versions
  const getOptimizedSrc = (originalSrc: string, format: 'webp' | 'avif') => {
    if (originalSrc.startsWith('http')) {
      return originalSrc; // External images, return as-is
    }

    const extension = originalSrc.split('.').pop();
    return originalSrc.replace(`.${extension}`, `.${format}`);
  };

  const webpSrc = getOptimizedSrc(src, 'webp');
  const avifSrc = getOptimizedSrc(src, 'avif');

  return (
    <picture>
      {/* AVIF format - best compression */}
      <source srcSet={avifSrc} type="image/avif" sizes={sizes} />

      {/* WebP format - good compression, wide support */}
      <source srcSet={webpSrc} type="image/webp" sizes={sizes} />

      {/* Fallback - original format */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchpriority}
        sizes={sizes}
      />
    </picture>
  );
};

export default OptimizedImage;
