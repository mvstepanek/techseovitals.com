import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>
    <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8">
        <div className="space-y-6 sm:space-y-8 xl:col-span-1">
          <a className="block max-w-[180px] sm:max-w-[200px]" href="/" aria-label="TechSEO Vitals Home">
            <img
              alt=""
              loading="lazy"
              width="200"
              height="50"
              className="h-auto w-auto"
              src="/assets/logo-dark.svg"
              aria-hidden="true"
            />
          </a>
          <p className="text-sm leading-6 text-gray-300 max-w-md" style={{ fontSize: '0.9375rem' }}>
            Experienced technical SEO and web performance consultant with over a decade of web development experience.
          </p>
          <div className="flex space-x-3 sm:space-x-4" style={{ marginLeft: '-5px' }}>
            <a
              href="https://www.linkedin.com/in/techseovitals/"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 640 640" aria-hidden="true">
                <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z"/>
              </svg>
            </a>
            <a
              href="https://bsky.app/profile/techseovitals.com"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Bluesky Profile"
            >
              <span className="sr-only">Bluesky</span>
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 640 640" aria-hidden="true">
                <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM320 311.4C334.5 281.4 374 225.6 410.7 198.1C437.2 178.2 480 162.9 480 211.8C480 221.6 474.4 293.9 471.1 305.6C459.7 346.4 418.1 356.8 381.1 350.5C445.8 361.5 462.3 398 426.7 434.5C359.2 503.8 329.7 417.1 322.1 394.9L321.8 394C320.9 391.4 320.4 389.9 320 389.9C319.6 389.9 319.1 391.4 318.2 394C318.1 394.3 318 394.6 317.9 394.9C310.3 417.1 280.8 503.7 213.3 434.5C177.8 398 194.2 361.5 258.9 350.5C221.9 356.8 180.3 346.4 168.9 305.6C165.6 293.9 160 221.6 160 211.8C160 162.9 202.9 178.3 229.3 198.1C266 225.6 305.5 281.5 320 311.4z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@techseovitals"
              className="text-gray-400 hover:text-gray-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Channel"
            >
              <span className="sr-only">YouTube</span>
              <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 640 640" aria-hidden="true">
                <path d="M378 320.2L282.8 266.1L282.8 374.3L378 320.2zM480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96zM494.4 232.1C502 260.7 502 320.3 502 320.3C502 320.3 502 379.9 494.4 408.4C490.2 424.2 477.9 436.1 462.2 440.3C433.9 448 320 448 320 448C320 448 206.1 448 177.8 440.4C162.1 436.2 149.8 424.3 145.6 408.5C138 379.9 138 320.3 138 320.3C138 320.3 138 260.6 145.6 232.1C149.8 216.3 162.1 203.9 177.8 199.7C206.1 192 320 192 320 192C320 192 433.9 192 462.2 199.7C477.9 203.9 490.2 216.3 494.4 232.1z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 gap-6 sm:gap-8 xl:col-span-2 xl:mt-0 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-bold leading-6 text-white">TechSEO Vitals</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  href="/technical-seo-consultant/"
                >
                  About
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/customers/">
                  Customers
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/blog/">
                  Blog
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/newsletter/">
                  Newsletter
                </a>
              </li>
              <li>
                <a className="text-sm leading-6 text-gray-300 hover:text-white transition-colors" href="/contact/">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold leading-6 text-white">Services</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  href="/technical-seo-services/#technical-seo-audit"
                >
                  Technical SEO Audit
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  href="/technical-seo-services/#technical-seo-monitoring"
                >
                  Technical SEO Monitoring
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  href="/technical-seo-services/#website-migration-plan"
                >
                  Website Migration Plan
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-bold leading-6 text-white">Free Resources</h3>
            <ul className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <li>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  href="/technical-seo-checklist/"
                >
                  Technical SEO Checklist
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  href="/website-migration-checklist/"
                >
                  Website Migration Checklist
                </a>
              </li>
              <li>
                <a
                  className="text-sm leading-6 text-gray-300 hover:text-white transition-colors"
                  href="/5-web-performance-metrics-every-business-owner-should-track/"
                >
                  5 Web Performance Metrics Every Business Owner Should Track
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <p className="text-xs leading-5 text-gray-400">
            © 2024 - {new Date().getFullYear()} TechSEO Vitals. All rights reserved.
          </p>
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a
              className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors"
              href="/privacy-policy/"
            >
              Privacy Policy
            </a>
            <a
              className="text-xs leading-5 text-gray-400 hover:text-gray-300 transition-colors"
              href="/terms-and-conditions/"
            >
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
