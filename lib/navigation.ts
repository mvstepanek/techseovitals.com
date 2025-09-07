export interface NavigationItem {
  name: string;
  href: string;
  children?: NavigationItem[];
}

export const mainNavigation: NavigationItem[] = [
  { name: 'Services', href: '/technical-seo-services/' },
  {
    name: 'Free Checklists',
    href: '#',
    children: [
      { name: 'Technical SEO Checklist', href: '/technical-seo-checklist/' },
      { name: 'Website Migration Checklist', href: '/website-migration-checklist/' },
      { name: 'Metrics Every Business Owner Should Track', href: '/5-web-performance-metrics-every-business-owner-should-track/' },
    ],
  },
  { name: 'Newsletter', href: '/newsletter/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'About Me', href: '/technical-seo-consultant/' },
];

export const footerNavigation = {
  techseoVitals: [
    { name: 'About Me', href: '/technical-seo-consultant/' },
    { name: 'Blog', href: '/blog/' },
    { name: 'Newsletter', href: '/newsletter/' },
    { name: 'Contact', href: '/contact/' },
  ],
  services: [
    { name: 'Technical SEO Audit', href: '/technical-seo-services/' },
    { name: 'Technical SEO Monitoring', href: '/technical-seo-services/' },
    { name: 'Website Migration Plan', href: '/technical-seo-services/' },
  ],
  resources: [
    { name: 'Technical SEO Checklist', href: '/technical-seo-checklist/' },
    { name: 'Website Migration Checklist', href: '/website-migration-checklist/' },
    { name: '5 Web Performance Metrics Every Business Owner Should Track', href: '/5-web-performance-metrics-every-business-owner-should-track/' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy/' },
    { name: 'Terms and Conditions', href: '/terms-and-conditions/' },
  ],
  social: [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/martin-stepanek-techseo/',
      icon: 'linkedin',
    },
    {
      name: 'Bluesky',
      href: 'https://bsky.app/profile/techseovitals.com',
      icon: 'bluesky',
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com/@techseovitals',
      icon: 'youtube',
    },
  ],
};