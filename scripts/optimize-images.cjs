const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

// Configuration
const IMAGE_DIR = './src/assets/images';
const OUTPUT_DIR = './src/assets/images';
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png'];
const RESPONSIVE_SIZES = [480, 640, 768, 1024];
const QUALITY_SETTINGS = {
  jpeg: 85,
  webp: 85
};

// Special handling for different image types
const IMAGE_CONFIGS = {
  'og.png': { maxWidth: 1200, responsive: false },
  'testimonials/': { maxWidth: 200, responsive: [64, 128, 200] },
  'blog/': { maxWidth: 1024, responsive: RESPONSIVE_SIZES },
  'default': { maxWidth: 1024, responsive: RESPONSIVE_SIZES }
};

function getImageConfig(filePath) {
  if (filePath.includes('og.png')) return IMAGE_CONFIGS['og.png'];
  if (filePath.includes('testimonials/')) return IMAGE_CONFIGS['testimonials/'];
  if (filePath.includes('blog/')) return IMAGE_CONFIGS['blog/'];
  return IMAGE_CONFIGS['default'];
}

function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

async function generateResponsiveImages(inputPath, outputBase, config) {
  const results = [];
  const sizes = config.responsive || [config.maxWidth];

  for (const size of sizes) {
    const baseName = path.basename(outputBase, path.extname(outputBase));
    const dir = path.dirname(outputBase);

    // Generate different formats
    const formats = [
      { ext: '.webp', format: 'webp' },
      { ext: path.extname(inputPath), format: path.extname(inputPath).slice(1) }
    ];

    for (const format of formats) {
      const suffix = size === config.maxWidth ? '' : `-${size}w`;
      const outputPath = path.join(dir, `${baseName}${suffix}${format.ext}`);

      try {
        let sharpInstance = sharp(inputPath);

        if (size < (await sharpInstance.metadata()).width) {
          sharpInstance = sharpInstance.resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          });
        }

        if (format.format === 'webp') {
          sharpInstance = sharpInstance.webp({ quality: QUALITY_SETTINGS.webp });
        } else if (format.format === 'jpeg' || format.format === 'jpg') {
          sharpInstance = sharpInstance.jpeg({ quality: QUALITY_SETTINGS.jpeg });
        }

        await sharpInstance.toFile(outputPath);

        const stats = fs.statSync(outputPath);
        results.push({
          path: outputPath,
          size: stats.size,
          width: size,
          format: format.format
        });

      } catch (error) {
        console.warn(`Failed to process ${outputPath}:`, error.message);
      }
    }
  }

  return results;
}

async function processImages() {
  console.log('🖼️  Starting advanced image optimization...\n');

  // Find all images (excluding favicons folder)
  const imagePattern = `${IMAGE_DIR}/**/*.{jpg,jpeg,png}`;
  const imagePaths = await glob(imagePattern, { ignore: ['**/*-*w.*', '**/*.webp', '**/favicons/**'] });

  if (imagePaths.length === 0) {
    console.log('No images found to optimize.');
    return;
  }

  console.log(`Found ${imagePaths.length} images to optimize:\n`);

  let totalOriginalSize = 0;
  let totalOptimizedSize = 0;
  let totalGeneratedFiles = 0;

  for (const imagePath of imagePaths) {
    const relativePath = path.relative('.', imagePath);
    console.log(`📸 Processing: ${relativePath}`);

    const originalStats = fs.statSync(imagePath);
    totalOriginalSize += originalStats.size;

    const config = getImageConfig(imagePath);
    const outputBase = imagePath;

    try {
      const results = await generateResponsiveImages(imagePath, outputBase, config);

      for (const result of results) {
        const relativeOutput = path.relative('.', result.path);
        console.log(`   ✅ ${result.format.toUpperCase()} ${result.width}w: ${formatBytes(result.size)} (${relativeOutput})`);
        totalOptimizedSize += result.size;
        totalGeneratedFiles++;
      }

    } catch (error) {
      console.error(`   ❌ Error processing ${imagePath}:`, error.message);
    }

    console.log(''); // Empty line for readability
  }

  // Summary
  console.log('📊 Optimization Summary:');
  console.log(`   Original images: ${imagePaths.length}`);
  console.log(`   Generated files: ${totalGeneratedFiles}`);
  console.log(`   Original total size: ${formatBytes(totalOriginalSize)}`);
  console.log(`   New total size: ${formatBytes(totalOptimizedSize)}`);

  if (totalOptimizedSize < totalOriginalSize) {
    const savings = totalOriginalSize - totalOptimizedSize;
    const percentage = ((savings / totalOriginalSize) * 100).toFixed(1);
    console.log(`   💾 Space saved: ${formatBytes(savings)} (${percentage}%)`);
  }

  console.log('\n🎉 Image optimization complete!');
}

// Generate srcset utility function
function generateSrcSet(basePath, sizes, format = 'webp') {
  const baseName = path.basename(basePath, path.extname(basePath));
  const dir = path.dirname(basePath);

  return sizes.map(size => {
    const suffix = size === Math.max(...sizes) ? '' : `-${size}w`;
    return `${dir}/${baseName}${suffix}.${format} ${size}w`;
  }).join(', ');
}

// Export utility function for use in components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { generateSrcSet, RESPONSIVE_SIZES };
}

// Run optimization if called directly
if (require.main === module) {
  processImages().catch(console.error);
}