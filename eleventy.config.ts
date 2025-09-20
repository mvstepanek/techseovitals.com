import "tsx/esm";
import { renderToStaticMarkup } from "react-dom/server";
import type { UserConfig } from "@11ty/eleventy";

export default function (eleventyConfig: any): UserConfig {
  // Add blog collection
  eleventyConfig.addCollection("blog", function(collectionApi: any) {
    return collectionApi.getFilteredByGlob("src/blog/*.md").reverse();
  });

  // Add support for TSX/JSX templates
  eleventyConfig.addTemplateFormats("11ty.tsx");
  eleventyConfig.addExtension("11ty.tsx", {
    key: "11ty.js",
    compile: function () {
      return async function (data: any) {
        let content = await this.defaultRenderer(data);
        return renderToStaticMarkup(content);
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

  // HTML Minification
  eleventyConfig.addTransform("htmlmin", async function(content: string, outputPath: string) {
    if (outputPath && outputPath.endsWith(".html")) {
      const { minify } = await import("html-minifier-terser");
      return minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      });
    }
    return content;
  });

  // JS Minification for inline scripts
  eleventyConfig.addTransform("jsmin", async function(content: string, outputPath: string) {
    if (outputPath && outputPath.endsWith(".html") && content.includes("<script>")) {
      const { minify } = await import("terser");

      // Process script tags asynchronously
      const scriptRegex = /<script[^>]*>([\s\S]*?)<\/script>/g;
      const matches = Array.from(content.matchAll(scriptRegex));

      for (const match of matches) {
        const [fullMatch, jsCode] = match;
        if (jsCode.trim()) {
          try {
            const result = await minify(jsCode, {
              compress: true,
              mangle: true
            });
            if (result.code) {
              content = content.replace(fullMatch, fullMatch.replace(jsCode, result.code));
            }
          } catch (e) {
            // If minification fails, keep original
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