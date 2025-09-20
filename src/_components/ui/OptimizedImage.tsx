import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  loading?: 'lazy' | 'eager';
  className?: string;
  sizes?: string;
  priority?: boolean;
  decoding?: 'sync' | 'async' | 'auto';
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  loading = 'lazy',
  className = '',
  sizes,
  priority: _priority = false,
  decoding = 'async',
}) => {
  // Generate WebP version of the image path
  // const _webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc: string, format: 'webp' | 'jpg') => {
    const ext = format === 'webp' ? '.webp' : baseSrc.includes('.jpg') ? '.jpg' : '.jpeg';
    const baseName = baseSrc.replace(/\.(jpg|jpeg|png|webp)$/i, '');

    // Generate 1x and 2x versions
    return [`${baseName}${ext} 1x`, `${baseName}@2x${ext} 2x`].join(', ');
  };

  const webpSrcSet = generateSrcSet(src, 'webp');
  const fallbackSrcSet = generateSrcSet(src, 'jpg');

  return (
    <picture>
      {/* WebP source with responsive images */}
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      {/* Fallback JPEG/PNG source with responsive images */}
      <source type={src.includes('.png') ? 'image/png' : 'image/jpeg'} srcSet={fallbackSrcSet} sizes={sizes} />
      {/* Fallback img element */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={loading}
        decoding={decoding}
        className={className}
        style={{ aspectRatio: `${width}/${height}` }}
      />
    </picture>
  );
};

export default OptimizedImage;
