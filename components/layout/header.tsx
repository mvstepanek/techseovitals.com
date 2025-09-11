'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/ui/logo';
import { mainNavigation, type NavigationItem } from '@/lib/navigation';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-gray-200 p-4">
          <Logo variant="light" className="max-w-[150px]" />
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
          >
            <span className="sr-only">Close menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            {mainNavigation.map((item) => (
              <li key={item.name}>
                {item.children ? (
                  <div>
                    <div className="font-medium text-gray-900 py-2">{item.name}</div>
                    <ul className="ml-4 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            onClick={onClose}
                            className="block py-2 text-sm text-gray-600 hover:text-primary"
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 text-gray-900 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}


export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Resources Banner */}
      <div className="bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center text-center text-sm font-medium">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-white/20 text-white mr-4">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              Free Resources
            </div>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-4">
              <Link
                href="/technical-seo-checklist/"
                className="hover:underline"
              >
                Technical SEO Checklist
              </Link>
              <span className="text-primary-light">•</span>
              <Link
                href="/website-migration-checklist/"
                className="hover:underline"
              >
                Website Migration Checklist
              </Link>
              <span className="text-primary-light">•</span>
              <Link
                href="/5-web-performance-metrics-every-business-owner-should-track/"
                className="hover:underline"
              >
                5 Web Performance Metrics For Business Owners
              </Link>
            </div>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-40 bg-white shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Logo variant="light" className="max-w-[180px]" priority />

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:space-x-8">
              {mainNavigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                >
                  {item.children ? (
                    <div>
                      <button className="flex items-center text-gray-700 hover:text-primary transition-colors">
                        {item.name}
                        <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="absolute left-0 top-full z-10 mt-2 w-80 rounded-lg bg-white shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block rounded-lg px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-gray-700 hover:text-primary transition-colors"
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              
              {/* CTA Button */}
              <Link
                href="/contact/"
                className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white hover:bg-primary-dark transition-colors"
              >
                Contact Me
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              type="button"
              className="lg:hidden rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      </header>
    </>
  );
}