import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";
import type { UserConfig } from "@11ty/eleventy";
import i18n from "eleventy-plugin-i18n";
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

export default function (eleventyConfig: any): UserConfig {
  // Add global data for i18n
  const i18nData = require('./src/_data/i18n.cjs');
  eleventyConfig.addGlobalData("i18n", i18nData);

  // Add blog collection sorted by date (newest first)
  eleventyConfig.addCollection("blog", function(collectionApi: any) {
    const locale = i18nData.locale;
    const blogPath = locale === 'sk' ? "src/blog-sk/*.md" : "src/blog/*.md";
    return collectionApi.getFilteredByGlob(blogPath)
      .sort((a: any, b: any) => b.date - a.date);
  });

  // Add support for TSX/JSX templates
  eleventyConfig.addTemplateFormats("11ty.tsx");
  eleventyConfig.addExtension("11ty.tsx", {
    key: "11ty.js",
    compile: function () {
      return async function (data: any) {
        let content = await this.defaultRenderer(data);
        // Check if this is a plain text file (robots.txt, sitemap.xml, etc.)
        const isPlainText = data.page?.outputPath?.match(/\.(txt|xml)$/);
        if (isPlainText) {
          return content;
        }
        return '<!DOCTYPE html>\n' + renderToStaticMarkup(content);
      };
    },
  });

  // Pass through assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Copy favicon and other root assets
  eleventyConfig.addPassthroughCopy({ "src/public": "/" });

  // Process CSS with PostCSS/Tailwind
  eleventyConfig.addTemplateFormats("css");
  eleventyConfig.addExtension("css", {
    outputFileExtension: "css",
    compile: async function (inputContent: string, inputPath: string) {
      if (inputPath !== "./src/styles/main.css") {
        return;
      }

      const postcss = await import("postcss");
      const tailwindcss = await import("tailwindcss");
      const autoprefixer = await import("autoprefixer");
      const cssnano = await import("cssnano");

      return async () => {
        const plugins = [
          tailwindcss.default,
          autoprefixer.default
        ];

        // Add cssnano for production builds
        if (process.env.NODE_ENV === 'production') {
          plugins.push(cssnano.default);
        }

        const result = await postcss.default(plugins).process(inputContent, { from: inputPath });

        return result.css;
      };
    }
  });

  // Watch for changes in all source files
  eleventyConfig.addWatchTarget("src/**/*.tsx");
  eleventyConfig.addWatchTarget("src/**/*.ts");
  eleventyConfig.addWatchTarget("src/**/*.js");
  eleventyConfig.addWatchTarget("src/**/*.md");
  eleventyConfig.addWatchTarget("src/**/*.css");

  // Set watch options for better file watching
  eleventyConfig.setWatchJavaScriptDependencies(true);

  // Add watch throttle to prevent rapid rebuilds
  eleventyConfig.setWatchThrottleWaitTime(100);

  // Debug file changes in development
  if (process.env.ELEVENTY_ENV === 'dev') {
    eleventyConfig.on('beforeWatch', (changedFiles) => {
      console.log('[11ty] File changed:', changedFiles);
    });
  }

  // HTML Minification (optimized)
  eleventyConfig.addTransform("htmlmin", async function(content: string, outputPath: string) {
    if (outputPath && outputPath.endsWith(".html") && process.env.NODE_ENV === 'production') {
      const { minify } = await import("html-minifier-terser");
      return minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: {
          // Only minify inline JS, not external scripts
          mangle: false,
          compress: {
            drop_console: false,
          }
        },
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        // Preserve some attributes for better performance
        keepClosingSlash: false,
        caseSensitive: false,
        minifyURLs: false
      });
    }
    return content;
  });

  // JS Minification for inline scripts (optimized)
  eleventyConfig.addTransform("jsmin", async function(content: string, outputPath: string) {
    if (outputPath && outputPath.endsWith(".html") && content.includes("<script>") && process.env.NODE_ENV === 'production') {
      const { minify } = await import("terser");

      // Only process inline scripts, skip external scripts and JSON-LD scripts
      const inlineScriptRegex = /<script(?![^>]*src)([^>]*)>([\s\S]*?)<\/script>/g;
      const matches = Array.from(content.matchAll(inlineScriptRegex));

      for (const match of matches) {
        const [fullMatch, attributes, jsCode] = match;
        // Skip JSON-LD scripts, analytics scripts, and speculation rules
        if (jsCode.trim() &&
            !attributes.includes('application/ld+json') &&
            !attributes.includes('speculationrules') &&
            !jsCode.includes('analytics') &&
            !jsCode.includes('gtag')) {
          try {
            const result = await minify(jsCode, {
              compress: {
                drop_console: false,  // Keep console.log for debugging
                drop_debugger: true,
                pure_funcs: []
              },
              mangle: {
                keep_fnames: true  // Preserve function names for better debugging
              },
              format: {
                comments: false
              }
            });
            if (result.code) {
              content = content.replace(fullMatch, `<script${attributes}>${result.code}</script>`);
            }
          } catch (e) {
            // If minification fails, keep original (silently)
          }
        }
      }

      return content;
    }
    return content;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data"
    },
    markdownTemplateEngine: "11ty.js",
    htmlTemplateEngine: "11ty.js"
  };
}