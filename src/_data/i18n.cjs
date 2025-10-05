// Get locale from environment variable or default to 'en'
const LOCALE = process.env.LOCALE || 'en';

module.exports = {
  // Current locale
  locale: LOCALE,

  // Available locales
  locales: ['en', 'sk'],

  // Locale configurations
  config: {
    en: {
      code: 'en',
      name: 'English',
      domain: 'https://www.techseovitals.com',
      htmlLang: 'en',
    },
    sk: {
      code: 'sk',
      name: 'Slovak',
      domain: 'https://www.technickeseo.sk',
      htmlLang: 'sk',
    },
  },

  // Translations
  translations: {
    en: {
      // Site metadata
      'site.name': 'TechSEO Vitals',
      'site.tagline': 'Technical SEO & Web Performance Consulting',

      // URL slugs
      'url.home': '/',
      'url.services': '/technical-seo-services/',
      'url.consultant': '/technical-seo-consultant/',
      'url.blog': '/blog/',
      'url.contact': '/contact/',
      'url.newsletter': '/newsletter/',
      'url.checklist': '/technical-seo-checklist/',
      'url.migration': '/website-migration-checklist/',
      'url.customers': '/customers/',
      'url.thank-you': '/thank-you-for-subscribing/',
      'url.performance-metrics': '/5-web-performance-metrics-every-business-owner-should-track/',
      'url.privacy-policy': '/privacy-policy/',
      'url.terms': '/terms-and-conditions/',

      // Navigation
      'nav.home': 'Home',
      'nav.services': 'Services',
      'nav.consultant': 'Consultant',
      'nav.blog': 'Blog',
      'nav.contact': 'Contact',
      'nav.newsletter': 'Newsletter',
      'nav.checklist': 'Checklist',
      'nav.about': 'About',
      'nav.customers': 'Customers',
      'nav.skip-to-content': 'Skip to main content',
      'nav.open-menu': 'Open menu',
      'nav.close-menu': 'Close menu',

      // TopBar
      'topbar.free-resources': 'Free Resources',
      'topbar.technical-seo-checklist': 'Technical SEO Checklist',
      'topbar.website-migration-checklist': 'Website Migration Checklist',
      'topbar.web-performance-metrics': '5 Web Performance Metrics For Business Owners',

      // Hero section
      'hero.badge.expertise': '10+ Years of Industry Expertise',
      'hero.title': 'Transform Your Website Into a <span>Revenue Engine</span>',
      'hero.description': 'When your site is fast, accessible, and easy to navigate, visitors stay longer and convert more. I combine technical SEO and performance optimization to create exceptional user experiences.',
      'hero.cta.primary': 'Get Free Website Check',
      'hero.testimonial': 'I consider Martin to be one of the greatest technical SEO experts on the market.',
      'hero.testimonial.source': 'Verified Client on LinkedIn',
      'hero.status.available': 'Currently taking new clients',

      // Common CTAs
      'cta.free-check': 'Get Free Website Check',
      'cta.start-transformation': 'Start Your Transformation',
      'cta.schedule-consultation': 'Schedule Free Consultation',
      'cta.transform-ux': 'Transform Your User Experience',
      'cta.get-checklist': 'Get the Checklist',
      'cta.download-ebook': 'Download Free eBook',
      'cta.read-more': 'Read More',
      'cta.view-all-posts': 'View All Posts',

      // Common Pagination
      'common.page': 'Page',
      'common.previous': 'Previous',
      'common.next': 'Next',

      // Common Alt Texts
      'common.alt.martin-expert': 'Martin Stepanek - Technical SEO Expert',
      'common.alt.martin-consultant': 'Martin Stepanek - Technical SEO Consultant',

      // Trust signals
      'trust.free-consultation': 'Free consultation',
      'trust.no-commitment': 'No commitment',
      'trust.projects': '50+ Successful Projects',
      'trust.websites-optimized': '50+ Websites Successfully Optimized',
      'trust.businesses-trust': '50+ businesses trust me',

      // Feature Grid
      'features.badge': 'Why Technical Excellence Matters',
      'features.title': 'Users First. <span>Search Engines Follow</span>',
      'features.subtitle': 'Great user experience drives everything. Technical SEO and performance optimization work together to boost engagement, and increase conversions. Websites that are technically excellent create better user experiences, leading to better visibility on search engines and AI platforms',

      'features.visitors-to-customers.title': 'Turn Visitors Into Customers',
      'features.visitors-to-customers.description': 'When visitors can easily find products and pages load instantly, they convert better. Optimizing technical SEO and web performance create a positive experience that drives revenue.',

      'features.remove-friction.title': 'Remove User Friction',
      'features.remove-friction.description': 'Broken links, slow pages, and poor structure frustrate visitors. Technical optimization eliminates these barriers, ensuring every user journey is smooth from search to purchase.',

      'features.maximize-visibility.title': 'Maximize Your Visibility',
      'features.maximize-visibility.description': 'Well-structured sites rank better in Google and get recommended by AI systems like ChatGPT and Perplexity. Technical SEO excellence ensures maximum discoverability across all platforms.',

      // CTA Section
      'cta.badge': 'Ready to Delight Your Users?',
      'cta.title': 'Give Visitors The Experience <span>They Deserve</span>',
      'cta.description': "Your users are struggling with issues you might not even see. Get a comprehensive technical audit that reveals exactly what's frustrating visitors and how to create a seamless experience while naturally improving your visibility in search engines and AI systems.",

      // Newsletter
      'newsletter.title': 'Stay Ahead of the Curve',
      'newsletter.description': 'Get actionable technical SEO and web performance insights delivered to your inbox.',
      'newsletter.placeholder': 'Enter your email',
      'newsletter.button': 'Subscribe',
      'newsletter.success': 'Great! Now check your email to confirm your subscription.',

      // Blog
      'blog.title': 'Technical SEO Insights & Strategies',
      'blog.description': 'In-depth guides on technical SEO, web performance, and user experience optimization.',
      'blog.latest': 'Latest Articles',
      'blog.read-time': 'min read',
      'blog.share-on': 'Share on',
      'blog.cta.badge': 'Ready to Transform Your Website?',
      'blog.cta.title': 'Turn Your Website Into a',
      'blog.cta.description': 'Apply these insights to your website. Get a comprehensive technical audit that reveals exactly what\'s holding back your performance and how to fix it.',
      'blog.author.name': 'Martin Stepanek',
      'blog.author.bio': 'With 10+ years building and optimizing websites, I\'ve learned that technical excellence drives business success. I help companies maximize their website\'s potential through strategic technical SEO and performance improvements that create better experiences for users and stronger results for businesses.',

      'blog.hero.badge': 'Expert Technical SEO Insights',
      'blog.hero.title': 'Technical SEO <span>Insights & Strategies</span>',
      'blog.hero.description': 'In-depth guides on technical SEO, web performance, and user experience optimization. Learn strategies to improve your website\'s visibility and conversions.',

      // Footer
      'footer.heading': 'Footer',
      'footer.description': 'Experienced technical SEO and web performance consultant with over a decade of web development experience.',
      'footer.services': 'Services',
      'footer.social.linkedin': 'LinkedIn',
      'footer.social.bluesky': 'Bluesky',
      'footer.social.youtube': 'YouTube',
      'footer.copyright': '© 2024 - 2025 TechSEO Vitals. All rights reserved.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms and Conditions',
      'footer.quick-links': 'Quick Links',
      'footer.resources': 'Free Resources',
      'footer.connect': 'Connect',

      // Cookie Consent
      'cookie.heading': 'Hey there!',
      'cookie.description': 'We use a few cookies to make your experience smoother and understand what content you love most.',
      'cookie.privacy-link': 'Read our privacy policy',
      'cookie.decline': 'Decline',
      'cookie.accept': 'Accept',

      // Meta descriptions
      'meta.home.title': 'TechSEO Vitals With Martin Stepanek',
      'meta.home.description': 'Expert technical SEO consultant helping businesses create websites that users love and search engines reward. Boost traffic and conversions today.',

      'meta.services.title': 'Technical SEO Services - TechSEO Vitals',
      'meta.services.description': 'Professional technical SEO services including audits, monitoring, and website migration support. Improve your site\'s performance and rankings.',

      'meta.consultant.title': 'Technical SEO Consultant - Martin Stepanek',
      'meta.consultant.description': 'Experienced technical SEO consultant with 10+ years in web development and 4+ years in technical SEO. Helping businesses optimize their online presence.',

      'meta.blog.title': 'Technical SEO Blog - TechSEO Vitals',
      'meta.blog.description': 'Expert insights on technical SEO, web performance optimization, and user experience. Learn strategies to improve your website\'s visibility and conversions.',

      'meta.contact.title': 'Contact - TechSEO Vitals',
      'meta.contact.description': 'Get in touch for a free technical SEO consultation. Let\'s discuss how to improve your website\'s performance and search visibility.',

      'meta.404.title': '404 - Page Not Found - TechSEO Vitals',
      'meta.404.description': 'The page you\'re looking for doesn\'t exist. Explore our technical SEO services, blog articles, and free resources instead.',

      'meta.newsletter.title': 'Newsletter - TechSEO Vitals',
      'meta.newsletter.description': 'Subscribe to get actionable technical SEO and web performance insights delivered to your inbox. Stay ahead with expert tips and strategies.',

      'meta.thank-you.title': 'Thank You - TechSEO Vitals',
      'meta.thank-you.description': 'Thank you for subscribing! Check your email to confirm your subscription and get your free technical SEO resources.',

      'meta.checklist.title': 'Technical SEO Checklist - Free Download - TechSEO Vitals',
      'meta.checklist.description': 'Download our comprehensive technical SEO checklist. Step-by-step guide to optimize your website\'s performance, crawlability, and search rankings.',

      'meta.migration.title': 'Website Migration Checklist - Free Download - TechSEO Vitals',
      'meta.migration.description': 'Download our complete website migration checklist. Protect your traffic and rankings during redesigns, platform changes, and domain migrations.',

      'meta.customers.title': 'Customer Success Stories - TechSEO Vitals',
      'meta.customers.description': 'See how we\'ve helped businesses improve their technical SEO, web performance, and organic traffic. Real results from real clients.',

      // 404 Page
      '404.title': 'Page Not Found',
      '404.description': 'The page you\'re looking for doesn\'t exist or has been moved. Let\'s get you back on track.',
      '404.cta.home': 'Go to Homepage',
      '404.cta.blog': 'Read Our Blog',
      '404.popular-pages.title': 'Popular Pages',
      '404.popular-pages.services': 'Services',
      '404.popular-pages.newsletter': 'Newsletter',
      '404.popular-pages.about': 'About',
      '404.popular-pages.contact': 'Contact',
      '404.seo-tip.title': 'SEO Tip',
      '404.seo-tip.description': 'Proper 404 pages are important for SEO. They help search engines understand your site structure and provide a better user experience when pages don\'t exist.',

      // Newsletter Page
      'newsletter.hero.badge': 'Stay Ahead of the Curve',
      'newsletter.hero.title': 'Get Technical SEO Insights <span>Delivered to Your Inbox</span>',
      'newsletter.hero.description': 'Subscribe to receive actionable technical SEO and web performance tips that help you stay competitive. No spam, just valuable insights.',
      'newsletter.hero.trust-signals': 'Join 500+ subscribers getting expert insights',
      'newsletter.form.title': 'Subscribe to Our Newsletter',
      'newsletter.form.subtitle': 'Get weekly insights on technical SEO and web performance',
      'newsletter.form.first-name': 'First Name',
      'newsletter.form.email': 'Email Address',
      'newsletter.form.submit': 'Subscribe',
      'newsletter.form.success': 'Great! Now check your email to confirm your subscription.',
      'newsletter.badge': 'Newsletter',
      'newsletter.subscribe': 'Subscribe',
      'newsletter.section.title': 'Get <span class="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">Biweekly</span> Technical SEO Insights',
      'newsletter.section.title.part1': 'Get <span class="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">Biweekly</span> Technical SEO Insights',
      'newsletter.section.description': 'Get actionable strategies that help business owners and developers create exceptional user experiences, optimize technical SEO and performance, and drive revenue growth.',
      'newsletter.section.recommended': 'Recommended by industry leaders',
      'newsletter.section.no-spam': 'No spam, ever. Unsubscribe at any time.',
      'newsletter.section.consent': 'By subscribing, I agree to the',
      'newsletter.section.and': 'and',

      // Newsletter Content Section
      'newsletter-content.badge': 'What You\'ll Get',
      'newsletter-content.title': 'What\'s in Each <span>Episode</span>',
      'newsletter-content.subtitle': 'Actionable technical SEO and performance strategies that help you create better user experiences while improving your search rankings and AI visibility.',
      'newsletter-content.card1.title': 'Expert Analysis',
      'newsletter-content.card1.description': 'Deep dives into technical SEO trends, case studies from real websites, and performance optimization techniques that actually move the needle.',
      'newsletter-content.card1.label': 'Deep insights',
      'newsletter-content.card2.title': 'Actionable Guides',
      'newsletter-content.card2.description': 'Step-by-step guides you can implement immediately. No fluff, just practical instructions with clear before-and-after examples.',
      'newsletter-content.card2.label': 'Ready to use',
      'newsletter-content.card3.title': 'Industry Trends',
      'newsletter-content.card3.description': 'Latest updates on search algorithm changes, AI developments, and emerging optimization opportunities you need to know about.',
      'newsletter-content.card3.label': 'Stay current',

      // 5 Performance Metrics Page
      'performance-metrics.badge': 'Stop Losing Customers to Slow Sites',
      'performance-metrics.title': '<span>5 Performance Metrics</span> That Actually Drive Business Results',
      'performance-metrics.subtitle': 'Discover which performance metrics directly impact customer satisfaction and revenue. Learn to track what drives conversions.',
      'performance-metrics.rating': '50+ businesses improving their business results',
      'performance-metrics.form.title': 'Grab Your <span>Free Ebook</span>',
      'performance-metrics.form.subtitle': 'Get the ebook delivered to your inbox',
      'performance-metrics.form.button': 'Get Your Free Ebook',

      // Newsletter Benefits Section
      'newsletter-benefits.badge': 'Why Subscribe',
      'newsletter-benefits.title': 'Why Business Owners Trust <span>This Newsletter</span>',
      'newsletter-benefits.subtitle': 'A newsletter that transforms how you think about user experience and technical optimization.',
      'newsletter-benefits.stat1.value': '10+',
      'newsletter-benefits.stat1.label': 'Years Experience',
      'newsletter-benefits.stat2.value': '2x',
      'newsletter-benefits.stat2.label': 'Monthly Frequency',
      'newsletter-benefits.stat3.value': '100%',
      'newsletter-benefits.stat3.label': 'Actionable Content',
      'newsletter-benefits.card1.title': 'Faster Decision Making',
      'newsletter-benefits.card1.description': 'Stop second-guessing your technical choices. Get clear guidance on what works, what doesn\'t, and why it matters for your specific situation.',
      'newsletter-benefits.card2.title': 'Competitive Advantage',
      'newsletter-benefits.card2.description': 'Learn optimization techniques most websites miss. Get ahead of changes before they impact your rankings and discover opportunities others overlook.',
      'newsletter-benefits.card3.title': 'Measurable Growth',
      'newsletter-benefits.card3.description': 'Watch your website transform with better user engagement, improved search visibility, and increased revenue through proven optimization techniques.',

      // Thank You Page
      'thank-you.hero.badge': 'Thank You!',
      'thank-you.hero.title': 'Check Your Email to <span>Confirm Your Subscription</span>',
      'thank-you.hero.description': 'We\'ve sent you a confirmation email. Click the link inside to confirm your subscription and receive your free resources.',
      'thank-you.hero.checklist-notice': 'Your checklist will be sent after you confirm your subscription.',
      'thank-you.hero.cta.services': 'Explore Services',
      'thank-you.hero.cta.blog': 'Read Blog',

      // Checklist Page
      'checklist.hero.badge': 'Free Technical SEO Resource',
      'checklist.hero.title': 'Complete Technical SEO <span>Checklist</span>',
      'checklist.hero.description': 'Download our comprehensive technical SEO checklist. Step-by-step guide to optimize your website\'s performance, crawlability, and search rankings.',
      'checklist.hero.trust-signals': 'Trusted by 50+ businesses',
      'checklist.hero.cta': 'Download Checklist',
      'checklist.form.title': 'Get Your Free Checklist',
      'checklist.form.subtitle': 'Enter your details to download the checklist',
      'checklist.form.first-name': 'First Name',
      'checklist.form.email': 'Email Address',
      'checklist.form.success': 'Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.',
      'checklist.form.submit': 'Download Checklist',
      'checklist.features.title': 'What\'s Inside',
      'checklist.features.feature1.title': 'Crawling & Indexing',
      'checklist.features.feature1.description': 'Ensure search engines can discover and index all your important pages',
      'checklist.features.feature2.title': 'Site Architecture',
      'checklist.features.feature2.description': 'Optimize your URL structure and internal linking for better SEO',
      'checklist.features.feature3.title': 'Technical Performance',
      'checklist.features.feature3.description': 'Improve Core Web Vitals and page speed for better rankings',
      'checklist.features.feature4.title': 'Mobile Optimization',
      'checklist.features.feature4.description': 'Ensure your site works perfectly on all devices',

      // Checklist Benefits Section
      'checklist.benefits.badge': 'Transform Your Website',
      'checklist.benefits.title': 'Fix What\'s Costing You <span>Customers Every Day</span>',
      'checklist.benefits.subtitle': 'Stop losing customers to technical issues. Get the optimization roadmap that improves user experience while driving measurable revenue growth.',
      'checklist.benefits.benefit1.title': 'Complete Technical Foundation',
      'checklist.benefits.benefit1.description': 'Ensure search engines can properly crawl, index, and understand your content. Fix the technical barriers that prevent your site from ranking.',
      'checklist.benefits.benefit1.tagline': 'Covers crawlability & indexability',
      'checklist.benefits.benefit2.title': 'Find Revenue-Killing Issues',
      'checklist.benefits.benefit2.description': 'Identify the technical problems costing you customers. Discover what\'s driving visitors away and how to fix it immediately.',
      'checklist.benefits.benefit2.tagline': '100+ issues prioritized',
      'checklist.benefits.benefit3.title': 'Search Engine Visibility',
      'checklist.benefits.benefit3.description': 'Perfect your site architecture, Schema Markup, and technical setup to maximize search engine understanding and help your content get discovered for relevant searches.',
      'checklist.benefits.benefit3.tagline': 'Enhanced search visibility',

      // Performance Benefits Section
      'performance.benefits.badge': 'Track What Matters',
      'performance.benefits.title': 'The 5 Metrics That <span>Actually Matter</span>',
      'performance.benefits.subtitle': 'Stop losing customers to slow sites. Learn the exact 5 performance metrics that directly impact conversions and revenue, plus the target numbers you need to hit.',
      'performance.benefits.benefit1.title': 'Server Response Optimization',
      'performance.benefits.benefit1.description': 'Discover the hidden server delays that kill conversions before customers even see your content. Learn the response time targets that keep visitors engaged.',
      'performance.benefits.benefit1.tagline': 'Server performance targets',
      'performance.benefits.benefit2.title': 'Loading Speed Fundamentals',
      'performance.benefits.benefit2.description': 'Learn the critical speed measurements that determine if customers stay or leave. Get specific target numbers that separate fast sites from slow ones.',
      'performance.benefits.benefit2.tagline': 'Exact target benchmarks',
      'performance.benefits.benefit3.title': 'Revenue Recovery Blueprint',
      'performance.benefits.benefit3.description': 'Discover how these 5 metrics work together to stop customer abandonment. Learn the proven system to identify which speed issues are costing you the most money.',
      'performance.benefits.benefit3.tagline': 'Revenue impact analysis',

      // Migration Benefits Section
      'migration.benefits.badge': 'Protect Your Investment',
      'migration.benefits.title': 'Minimize Migration <span>Risks and Losses</span>',
      'migration.benefits.subtitle': 'Most migrations lose significant traffic and revenue. This checklist helps minimize disruption to your search rankings, user experience, and business operations.',
      'migration.benefits.benefit1.title': 'Maintain User Experience',
      'migration.benefits.benefit1.description': 'Keep site speed, functionality, and user flows intact. Prevent the performance drops and broken features that drive customers away.',
      'migration.benefits.benefit1.tagline': 'Zero downtime strategy',
      'migration.benefits.benefit2.title': 'Preserve Search Rankings',
      'migration.benefits.benefit2.description': 'Protect your hard-earned search visibility. Proper redirects, URL mapping, and technical setup prevent ranking losses that destroy organic traffic.',
      'migration.benefits.benefit2.tagline': '45+ technical checkpoints',
      'migration.benefits.benefit3.title': 'Revenue Protection',
      'migration.benefits.benefit3.description': 'Safeguard your business from migration disasters. Avoid the traffic drops, broken conversions, and lost revenue that destroy ROI.',
      'migration.benefits.benefit3.tagline': 'Revenue-focused approach',

      // About Section
      'about.subtitle': 'I specialize in delivering measurable improvements that drive real business growth. 10+ years of experience optimizing websites for both search engines and exceptional user experiences.',
      'about.point1.title': 'Professional Web Development Skills',
      'about.point1.description': 'I combine development expertise with SEO knowledge. Deep understanding of technical aspects and architecture enables me to solve complex challenges.',
      'about.point2.title': 'Comprehensive Technical Approach',
      'about.point2.description': 'I specialize in both technical SEO and performance optimization. Every aspect of your site\'s technical foundation works together to maximize visibility across search engines and AI platforms.',
      'about.point3.title': 'Measurable Business Results',
      'about.point3.description': 'From enterprise migrations to startup growth, I have helped businesses significantly increase revenue and organic traffic by solving complex technical SEO challenges.',
      'about.stats.title': '50+ Successful Projects',
      'about.stats.subtitle': 'Trusted by businesses worldwide',

      // Migration Checklist Page
      'migration.hero.badge': 'Free Website Migration Resource',
      'migration.hero.title': 'Website Migration <span>Checklist</span>',
      'migration.hero.description': 'Download our complete website migration checklist. Protect your traffic and rankings during redesigns, platform changes, and domain migrations.',
      'migration.hero.trust-signals': 'Trusted by 50+ businesses',
      'migration.hero.cta': 'Download Checklist',
      'migration.form.title': 'Get Your Free Migration Checklist',
      'migration.form.subtitle': 'Enter your details to download the checklist',
      'migration.form.first-name': 'First Name',
      'migration.form.email': 'Email Address',
      'migration.form.submit': 'Download Checklist',
      'migration.form.success': 'Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.',
      'migration.features.title': 'What\'s Inside',
      'migration.features.feature1.title': 'Pre-Migration Planning',
      'migration.features.feature1.description': 'Complete audit and preparation steps before your migration',
      'migration.features.feature2.title': 'URL Mapping & Redirects',
      'migration.features.feature2.description': 'Ensure all old URLs redirect properly to new ones',
      'migration.features.feature3.title': 'Post-Migration Monitoring',
      'migration.features.feature3.description': 'Track rankings, traffic, and technical issues after launch',
      'migration.features.feature4.title': 'Recovery Strategies',
      'migration.features.feature4.description': 'Steps to take if you experience traffic drops',

      // Customers Page
      'customers.hero.badge': 'Customer Success Stories',
      'customers.hero.title': 'Real Results from <span>Real Clients</span>',
      'customers.hero.description': 'See how we\'ve helped businesses improve their technical SEO, web performance, and organic traffic. Discover the impact of technical excellence.',
      'customers.hero.cta': 'Start Your Success Story',
      'customers.hero.rating': 'Trusted by 50+ businesses',

      // Customers Page - Case Studies Section
      'customers.case-studies.badge': 'Featured Case Studies',
      'customers.case-studies.title': 'Technical Excellence That <span>Serves Users First</span>',
      'customers.case-studies.subtitle': 'See how these companies transformed their websites into high-performing platforms that drive measurable business results.',

      // Customers Page - TOUCHIT Case Study
      'customers.touchit.alt': 'TOUCHIT',
      'customers.touchit.category': 'Technology News Portal',
      'customers.touchit.description': 'Complete infrastructure modernization and performance optimization for Slovakia\'s leading technology news portal.',
      'customers.touchit.feature1': 'Infrastructure & CMS Migration',
      'customers.touchit.feature2': 'Faster Website & Better Core Web Vitals',
      'customers.touchit.feature3': 'External Agency Supervision & Design Consulting',

      // Customers Page - expertise.ai Case Study
      'customers.expertiseai.alt': 'expertise.ai',
      'customers.expertiseai.category': 'Demand Conversion AI Platform',
      'customers.expertiseai.description': 'Strategic merger migration and comprehensive optimization combining two brands into a unified, high-performance platform.',
      'customers.expertiseai.feature1': 'Complete Two-Brand Merger Migration',
      'customers.expertiseai.feature2': 'New Website Architecture & SEO Strategy',
      'customers.expertiseai.feature3': 'Performance Optimization & Crawl Efficiency',

      // Customers Page - Testimonials Section
      'customers.testimonials.badge': 'What Customers Say',
      'customers.testimonials.title': 'Real Results from <span>Real Customers</span>',
      'customers.testimonials.subtitle': 'Direct feedback from clients who\'ve experienced measurable improvements in conversions, revenue, and organic growth.',

      // Customers Page - Testimonial: Daniel Pison
      'customers.testimonial.pison.name': 'Daniel Pison',
      'customers.testimonial.pison.position': 'CMO',
      'customers.testimonial.pison.company': 'Quality Unit',
      'customers.testimonial.pison.text': 'Martin was a key member of the team responsible for the technical condition of the liveagent.com and postaffiliatepro.com websites. Thanks in particular to his skills and expertise, we were able to compete with much stronger competitors in terms of website quality for a long time.\nI would definitely be happy to work with Martin in the future, I consider him to be one of the greatest technical SEO experts on the market. I definitely recommend working with him.',
      'customers.testimonial.pison.image': '/assets/images/testimonials/daniel-pison.jpg',

      // Customers Page - Testimonial: Tomas Buransky
      'customers.testimonial.buransky.name': 'Tomas Buransky',
      'customers.testimonial.buransky.position': 'Marketing Manager',
      'customers.testimonial.buransky.company': 'TOUCHIT',
      'customers.testimonial.buransky.text': 'We\'ve been working with Martin for several years now and we truly appreciate his professional and systematic approach, which also takes our business goals into account. In addition to his deep knowledge of SEO, he\'s able to break down proposed strategies into actionable steps and, thanks to his previous experience as a programmer, communicate them effectively to both our editorial team and our developers.',
      'customers.testimonial.buransky.image': '/assets/images/testimonials/tomas-buransky.jpg',

      // Customers Page - Testimonial: Viktor Zeman
      'customers.testimonial.zeman.name': 'Viktor Zeman',
      'customers.testimonial.zeman.position': 'CEO',
      'customers.testimonial.zeman.company': 'LiveAgent & Post Affiliate Pro',
      'customers.testimonial.zeman.text': 'Martin\'s development background established a foundation for implementing sophisticated strategies, particularly technical SEO initiatives. With him, our team significantly enhanced the performance of two high-traffic websites.',
      'customers.testimonial.zeman.image': '/assets/images/testimonials/viktor-zeman.jpg',

      // Customers Page - CTA Section
      'customers.cta.badge': '100% Risk-Free Consultation',
      'customers.cta.title': 'Ready to Join These <span>Success Stories?</span>',
      'customers.cta.subtitle': 'Join these companies and transform your website into one that users love and search engines reward.',
      'customers.cta.button': 'Start Your Transformation',
      'customers.cta.trust.free': 'Free consultation',
      'customers.cta.trust.commitment': 'No commitment',
      'customers.cta.feature1.title': '100% Free',
      'customers.cta.feature1.description': 'Free website check with no hidden costs',
      'customers.cta.feature2.title': '30 Minutes',
      'customers.cta.feature2.description': 'Quick call to discuss your biggest opportunities',
      'customers.cta.feature3.title': 'Immediate Value',
      'customers.cta.feature3.description': 'Actionable insights you can implement today',

      // Services Page - Hero
      'services.hero.cta': 'Get Free Website Check',

      // Services Page - CTA
      'services.cta.button': 'Get Free Website Check',

      // Consultant Page - Hero
      'consultant.hero.badge': 'Developer-Led SEO Technical Excellence',
      'consultant.hero.title': 'Martin Stepánek, <span>Technical SEO Expert</span>',
      'consultant.hero.description': 'I help businesses build websites that prioritize both user satisfaction and revenue performance.',
      'consultant.hero.cta': 'Get Free Website Check',
      'consultant.hero.testimonial': 'I consider Martin to be one of the greatest technical SEO experts on the market.',
      'consultant.hero.testimonial.source': 'Verified Client on LinkedIn',
      'consultant.hero.status': 'Currently taking new clients',

      // Consultant Page - Experience
      'consultant.experience.badge': 'Why Martin',
      'consultant.experience.title': 'What Makes Me <span>Different</span>',
      'consultant.experience.subtitle': 'I combine deep developer expertise with technical SEO knowledge. This combination allows me to solve complex optimization challenges that drive measurable business growth.',
      'consultant.experience.point1.title': 'Professional Web Development Skills',
      'consultant.experience.point1.description': 'Over a decade of hands-on development experience combined with deep technical SEO expertise. I solve complex challenges from enterprise migrations to advanced JavaScript optimization.',
      'consultant.experience.point2.title': 'Action-Ready Implementation Guides',
      'consultant.experience.point2.description': 'Get detailed, prioritized task lists with step-by-step instructions and code examples. Your team can implement improvements immediately with clear, actionable guidance.',
      'consultant.experience.point3.title': 'Revenue-Focused Strategy',
      'consultant.experience.point3.description': 'Every optimization focuses on measurable business impact. I prioritize improvements that directly increase conversions, user engagement, and bottom-line growth.',
      'consultant.experience.stats': 'Over 50 websites successfully optimized',
      'consultant.experience.testimonial': 'Under Martin\'s guidance, our team significantly improved the performance of two high-traffic websites. His methodical approach to technical SEO and ability to communicate complex technical concepts continue to deliver remarkable results.',
      'consultant.experience.testimonial.source': 'LinkedIn Recommendation',

      // Consultant Page - Services
      'consultant.services.title': 'How I Can <span>Help Your Business</span>',

      // Consultant Page - CTA
      'consultant.cta.badge': 'Ready to Transform Your Business?',
      'consultant.cta.title': 'Transform Your Website Into a <span>Revenue Engine</span>',
      'consultant.cta.description': 'Your competitors are stealing your traffic while you struggle with technical issues. Get expert help that transforms your website into an unstoppable growth machine.',
      'consultant.cta.button': 'Start Improving Your Website',

      // Contact Page - Hero
      'contact.hero.badge': 'Get in Touch',
      'contact.hero.title': 'Let\'s Discuss Your <span>Technical SEO Needs</span>',
      'contact.hero.description': 'Schedule a free consultation to discuss how technical SEO can help your business grow.',
      'contact.hero.cta': 'Schedule Free Consultation',
      'contact.hero.status': 'Currently taking new clients',

      // Services Hero Rating
      'services.hero.rating': 'Trusted by 50+ businesses',

      // Contact Page
      'contact.methods.title': 'Multiple Ways to Connect',
      'contact.methods.subtitle': 'Reach out directly for project inquiries or connect on social media for insights and updates',
      'contact.email.title': 'Email',
      'contact.email.description': 'Direct communication for project inquiries',
      'contact.email.address': 'martin@techseovitals.com',
      'contact.linkedin.description': 'Connect professionally and see client success stories',
      'contact.linkedin.handle': '/in/techseovitals',
      'contact.bluesky.description': 'Quick updates and technical SEO tips',
      'contact.bluesky.handle': '@techseovitals.com',
      'contact.youtube.description': 'In-depth tutorials and case studies',
      'contact.youtube.handle': '@techseovitals',

      // Calendly Section
      'calendly.title': 'Book Your <span>Free Consultation</span>',
      'calendly.subtitle': 'Choose a time that works best for you to discuss your website\'s technical SEO needs and opportunities for growth.',

      // Speaking Section
      'speaking.badge': 'Speaking',
      'speaking.title': 'Public <span>Speaking</span>',
      'speaking.subtitle': 'Sharing knowledge and insights at industry conferences and events',
      'speaking.more-soon': 'More Soon...',
      'speaking.more-soon.description': 'Additional speaking engagements and presentations coming up',

      // Business Info Section
      'business-info.title': 'Business Information',
      'business-info.subtitle': 'Official business details for invoicing and contracts',
      'business-info.company-details': 'Company Details',
      'business-info.business-name': 'Business Name',
      'business-info.business-id': 'Business ID',
      'business-info.vat-id': 'VAT ID',
      'business-info.address': 'Address',

      // Blog Cards Section
      'blog-cards.title': 'Latest Technical SEO Insights',
      'blog-cards.subtitle': 'Stay ahead with actionable technical SEO strategies, performance optimization tips, and industry best practices.',
      'blog-cards.badge': 'Expert Insights',

      // Testimonials Section
      'testimonials.default.title': 'Real Results from <span>Real Clients</span>',
      'testimonials.default.subtitle': 'Discover how technical excellence drives real business results.',
      'testimonials.default.badge': 'Client Success Stories',
      'testimonials.default.trust-text': 'Trusted by 50+ businesses',
      'testimonials.default.cta': 'More success stories',
      'testimonials.position.ceo': 'CEO',
      'testimonials.position.cmo': 'CMO',
      'testimonials.company.liveagent': 'LiveAgent & Post Affiliate Pro',
      'testimonials.company.quality-unit': 'Quality Unit',

      // Why Choose Me Section
      'why-choose-me.badge': 'Why Me?',
      'why-choose-me.title': 'Technical SEO Expert Who <span>Delivers Real Results</span>',
      'why-me.testimonial': 'Under Martin\'s leadership, our team significantly improved the performance of two high-traffic websites. His methodical approach to technical SEO and ability to communicate complex technical concepts continues to deliver remarkable results.',

      // Why Audit Section
      'why-audit.badge': 'Why You Need an Audit',
      'why-audit.title': 'Stop Guessing. <span>Start Knowing</span>',
      'why-audit.subtitle': 'You can\'t fix what you can\'t see. My audit reveals the hidden technical issues killing your conversions and revenue with a clear roadmap to fix them.',
      'why-audit.cta': 'Get Free Website Check',
      'why-audit.card1.title': 'Uncover Revenue Killers',
      'why-audit.card1.description': 'Find the technical issues that are silently costing you money. Discover exactly what\'s preventing visitors from converting and completing purchases.',
      'why-audit.card1.badge': 'Full technical analysis',
      'why-audit.card2.title': 'Maximize Revenue Impact',
      'why-audit.card2.description': 'Focus on what matters most. I prioritize fixes by revenue impact, addressing high-conversion opportunities first to see faster ROI.',
      'why-audit.card2.badge': 'Revenue opportunities found',
      'why-audit.card3.title': 'Capture Lost Revenue',
      'why-audit.card3.description': 'Identify where competitors are stealing your customers and get the technical improvements that help you win back market share and revenue.',
      'why-audit.card3.badge': 'Competitive advantage',

      // About Section
      'about-section.badge': 'About Martin',
      'about-section.title': 'What Makes Me <span>Different</span>',

      // Services Cards Section
      'services-cards.audit.title': 'Technical SEO Audit',
      'services-cards.audit.price': '$2,500',
      'services-cards.audit.description': 'Comprehensive technical SEO audit that uncovers what\'s blocking your visibility and conversions. Get a prioritized roadmap to fix critical issues and maximize your website\'s potential.',
      'services-cards.audit.feature1.title': 'Comprehensive Technical Analysis',
      'services-cards.audit.feature1.description': 'Complete audit covering technical SEO, performance, and user experience with 50+ checkpoints to identify all issues affecting your site.',
      'services-cards.audit.feature2.title': 'Prioritized Action Plan',
      'services-cards.audit.feature2.description': 'Clear roadmap with fixes ranked by business impact. Specific recommendations your team can implement immediately to drive results.',
      'services-cards.audit.feature3.title': '90-Minute Strategy Consultation',
      'services-cards.audit.feature3.description': 'One-on-one strategy call to review findings, discuss priorities, and create your implementation roadmap.',
      'services-cards.audit.cta': 'Get Your Audit',

      'services-cards.monitoring.title': 'Technical SEO Monitoring',
      'services-cards.monitoring.price': '$2,000',
      'services-cards.monitoring.price-unit': '/month',
      'services-cards.monitoring.description': 'Ongoing monitoring and optimization to maintain peak performance. Regular analysis catches issues early and identifies new opportunities for growth.',
      'services-cards.monitoring.feature1.title': 'Regular Performance Monitoring',
      'services-cards.monitoring.feature1.description': 'Weekly expert analysis to identify crawl and indexing errors and performance issues. 24/7 monitoring alerts ensure problems are caught early before they impact revenue.',
      'services-cards.monitoring.feature2.title': 'Monthly Optimization Reports',
      'services-cards.monitoring.feature2.description': 'Monthly performance reports with new optimization opportunities. Stay ahead of algorithm updates and competitor improvements.',
      'services-cards.monitoring.feature3.title': 'Priority Support & Consultation',
      'services-cards.monitoring.feature3.description': '60-minute monthly strategy calls plus priority email support for urgent issues.',
      'services-cards.monitoring.cta': 'Start Monitoring',
      'services-cards.monitoring.commitment': 'Minimum 3 months commitment',

      'services-cards.migration.title': 'Website Migration Planning',
      'services-cards.migration.price': '$4,500',
      'services-cards.migration.description': 'Protect your traffic and rankings during website migration. Comprehensive migration planning with pre and post-migration audits to ensure zero losses.',
      'services-cards.migration.feature1.title': 'Pre-Migration Strategy & Planning',
      'services-cards.migration.feature1.description': 'Detailed pre-migration audit and strategy covering redirects, URL mapping, and technical requirements. Complete blueprint to preserve all rankings and traffic while keeping visitors happy.',
      'services-cards.migration.feature2.title': 'Post-Migration Audit & Support',
      'services-cards.migration.feature2.description': 'Comprehensive post-migration audit to verify everything transferred correctly. Ongoing optimization to improve performance beyond pre-migration levels.',
      'services-cards.migration.feature3.title': 'Continuous Support & Monitoring',
      'services-cards.migration.feature3.description': 'Ongoing support throughout the migration process and continued monitoring post-launch.',
      'services-cards.migration.cta': 'Plan Your Migration',

      // Services Section (new unified keys)
      'services.audit.title': 'Technical SEO Audit',
      'services.audit.price': '$2,500',
      'services.audit.description': 'Comprehensive technical SEO audit that uncovers what\'s blocking your visibility and conversions. Get a prioritized roadmap to fix critical issues and maximize your website\'s potential.',
      'services.audit.feature1.title': 'Comprehensive Technical Analysis',
      'services.audit.feature1.description': 'Complete audit covering technical SEO, performance, and user experience with 50+ checkpoints to identify all issues affecting your site.',
      'services.audit.feature2.title': 'Prioritized Action Plan',
      'services.audit.feature2.description': 'Clear roadmap with fixes ranked by business impact. Specific recommendations your team can implement immediately to drive results.',
      'services.audit.feature3.title': '90-Minute Strategy Consultation',
      'services.audit.feature3.description': 'One-on-one strategy call to review findings, discuss priorities, and create your implementation roadmap.',
      'services.audit.cta': 'Get Your Audit',

      'services.monitoring.title': 'Technical SEO Monitoring',
      'services.monitoring.price': '$2,000',
      'services.monitoring.price.unit': '/month',
      'services.monitoring.description': 'Ongoing monitoring and optimization to maintain peak performance. Regular analysis catches issues early and identifies new opportunities for growth.',
      'services.monitoring.feature1.title': 'Regular Performance Monitoring',
      'services.monitoring.feature1.description': 'Weekly expert analysis to identify crawl and indexing errors and performance issues. 24/7 monitoring alerts ensure problems are caught early before they impact revenue.',
      'services.monitoring.feature2.title': 'Monthly Optimization Reports',
      'services.monitoring.feature2.description': 'Monthly performance reports with new optimization opportunities. Stay ahead of algorithm updates and competitor improvements.',
      'services.monitoring.feature3.title': 'Priority Support & Consultation',
      'services.monitoring.feature3.description': '60-minute monthly strategy calls plus priority email support for urgent issues.',
      'services.monitoring.cta': 'Start Monitoring',
      'services.monitoring.commitment': 'Minimum 3 months commitment',

      'services.migration.title': 'Website Migration Planning',
      'services.migration.price': '$4,500',
      'services.migration.description': 'Protect your traffic and rankings during website migration. Comprehensive migration planning with pre and post-migration audits to ensure zero losses.',
      'services.migration.feature1.title': 'Pre-Migration Strategy & Planning',
      'services.migration.feature1.description': 'Detailed pre-migration audit and strategy covering redirects, URL mapping, and technical requirements. Complete blueprint to preserve all rankings and traffic while keeping visitors happy.',
      'services.migration.feature2.title': 'Post-Migration Audit & Support',
      'services.migration.feature2.description': 'Comprehensive post-migration audit to verify everything transferred correctly. Ongoing optimization to improve performance beyond pre-migration levels.',
      'services.migration.feature3.title': 'Continuous Support & Monitoring',
      'services.migration.feature3.description': 'Ongoing support throughout the migration process and continued monitoring post-launch.',
      'services.migration.cta': 'Plan Your Migration',

      // Services Section Headers
      'services.section.badge': 'Choose Your Service',
      'services.section.title': 'Technical SEO <span>Services</span>',
      'services.section.subtitle': 'Stop guessing. Start growing. Get the technical SEO expertise that turns your website into a revenue-generating machine.',

      // Service Cards Common
      'services.starting-at': 'Starting at',

      // What Makes Me Different Section
      'what-makes-me.badge': 'Why Choose Me',
      'what-makes-me.title': 'What Makes Me <span>Different</span>',
      'what-makes-me.subtitle': 'Developer-led technical SEO that transforms performance issues into competitive advantages. Actionable improvements that drive revenue.',
      'what-makes-me.card1.title': 'Web Development Expertise',
      'what-makes-me.card1.description': '10+ years experience with deep technical insight of website architecture and performance.',
      'what-makes-me.card2.title': 'Clear Action Plans',
      'what-makes-me.card2.description': 'Get actionable task lists with step-by-step guidance your team can implement immediately.',
      'what-makes-me.card3.title': 'Making Teams Self-Sufficient',
      'what-makes-me.card3.description': 'Get detailed guidance that empowers your team to maintain excellence long after our work together.',
      'what-makes-me.card4.title': 'Collaborative Approach',
      'what-makes-me.card4.description': 'Partner with your teams to build lasting improvements with sustained impact for your users.',

      // Services Page - Hero Section
      'services.hero.badge': 'Results-Driven Technical SEO Services',
      'services.hero.title': 'Technical SEO That <span>Drives Real Results</span>',
      'services.hero.description': 'Your website should work flawlessly for every visitor. Technical optimization removes the obstacles killing conversions. Better user experience leads to higher sales and better search rankings.',
      'services.hero.status': 'Currently taking new clients',

      // Services Page - CTA Section
      'services.cta.badge': 'Ready to Improve Your Website?',
      'services.cta.title': 'Transform Your Website Into a <span>Revenue Engine</span>',
      'services.cta.description': 'Your competition is getting ahead while technical issues cost you customers every day. Get a technical audit that pinpoints exactly what needs fixing and start converting more visitors into paying customers.',

      // Trusted Companies Section
      'trusted.title': 'Driving Growth for industry leaders',
      'trusted.subtitle': 'Trusted by innovative companies',

      // Form placeholders and messages
      'form.placeholder.first-name': 'First name',
      'form.placeholder.email': 'Email',
      'form.privacy.no-spam': 'No spam, ever. Unsubscribe at any time.',
      'form.privacy.consent': 'By subscribing, I agree to the',
      'form.privacy.and': 'and',
      'form.privacy.privacy-policy': 'Privacy Policy',
      'form.privacy.terms': 'Terms and Conditions',

      // Brutal Truth Section
      'brutal-truth.title': 'The Brutal <span class="text-red-500">Truth</span> About Your Website',
      'brutal-truth.subtitle': 'Technical issues destroy user trust. Slow pages, broken navigation, and poor structure frustrate real customers trying to use your site. When users struggle, your business suffers.',

      'brutal-truth.card1.badge': 'Amazon Study',
      'brutal-truth.card1.stat': '1%',
      'brutal-truth.card1.stat-label': 'Revenue loss per 100ms delay',
      'brutal-truth.card1.title': 'Users Feel Every Delay',
      'brutal-truth.card1.description': 'Amazon found users notice even 100ms delays. When frustrated by slow performance, they abandon purchases - costing businesses 1% revenue for every 100ms of delay.',

      'brutal-truth.card2.badge': 'Google Study',
      'brutal-truth.card2.stat': '53%',
      'brutal-truth.card2.stat-label': 'Mobile users abandon slow sites',
      'brutal-truth.card2.title': 'Patience Has Limits',
      'brutal-truth.card2.description': 'Users give you exactly 3 seconds before deciding your site isn\'t worth their time. Google found 53% of customers leave after those 3 seconds, taking their business elsewhere.',

      'brutal-truth.card3.badge': 'User Experience',
      'brutal-truth.card3.stat': '79%',
      'brutal-truth.card3.stat-label': 'Won\'t return after bad experience',
      'brutal-truth.card3.title': 'First Impressions Count',
      'brutal-truth.card3.description': '79% of users who experienced poor website performance won\'t give you a second chance. Search engines and AI platforms rely on the same signals that create good user experiences.',
    },
    sk: {
      // Site metadata
      'site.name': 'TechSEO Vitals',
      'site.tagline': 'Technické SEO & Optimalizácia Výkonu Webu',

      // URL slugs
      'url.home': '/',
      'url.services': '/sluzby-technicke-seo/',
      'url.consultant': '/konzultant-technicke-seo/',
      'url.blog': '/blog/',
      'url.contact': '/kontakt/',
      'url.newsletter': '/newsletter/',
      'url.checklist': '/kontrolny-zoznam-technicke-seo/',
      'url.migration': '/kontrolny-zoznam-migracie-webu/',
      'url.customers': '/zakaznici/',
      'url.thank-you': '/dakujeme-za-prihlasenie/',
      'url.performance-metrics': '/5-metriky-vykonu-webu-pre-majitelov-firiem/',
      'url.privacy-policy': '/zasady-ochrany-osobnych-udajov/',
      'url.terms': '/podmienky-pouzivania/',

      // Navigation
      'nav.home': 'Domov',
      'nav.services': 'Služby',
      'nav.consultant': 'Konzultant',
      'nav.blog': 'Blog',
      'nav.contact': 'Kontakt',
      'nav.newsletter': 'Newsletter',
      'nav.checklist': 'Kontrolný zoznam',
      'nav.about': 'O mne',
      'nav.customers': 'Zákazníci',
      'nav.skip-to-content': 'Preskočiť na hlavný obsah',
      'nav.open-menu': 'Otvoriť menu',
      'nav.close-menu': 'Zatvoriť menu',

      // TopBar
      'topbar.free-resources': 'Bezplatné zdroje',
      'topbar.technical-seo-checklist': 'Kontrolný zoznam technického SEO',
      'topbar.website-migration-checklist': 'Kontrolný zoznam migrácie webovej stránky',
      'topbar.web-performance-metrics': '5 metrík výkonu webu pre majiteľov firiem',

      // Hero section
      'hero.badge.expertise': 'Viac ako 10 rokov skúseností',
      'hero.title': 'Premeňte svoju webovú stránku na <span>zdroj príjmov</span>',
      'hero.description': 'Keď je vaša stránka rýchla, prístupná a ľahko navigovateľná, návštevníci zostávajú dlhšie a viac konvertujú. Kombinujem technické SEO a optimalizáciu výkonu pre vytvorenie výnimočnej používateľskej skúsenosti.',
      'hero.cta.primary': 'Získajte bezplatnú kontrolu webu',
      'hero.testimonial': 'Považujem Martina za jedného z najlepších expertov na technické SEO na trhu.',
      'hero.testimonial.source': 'Overený klient na LinkedIn',
      'hero.status.available': 'Aktuálne prijímam nových klientov',

      // Common CTAs
      'cta.free-check': 'Získajte bezplatnú kontrolu webu',
      'cta.start-transformation': 'Začnite svoju transformáciu',
      'cta.schedule-consultation': 'Naplánujte si bezplatnú konzultáciu',
      'cta.transform-ux': 'Transformujte používateľskú skúsenosť',
      'cta.get-checklist': 'Získajte kontrolný zoznam',
      'cta.download-ebook': 'Stiahnite si bezplatnú e-knihu',
      'cta.read-more': 'Čítať viac',
      'cta.view-all-posts': 'Zobraziť všetky články',

      // Common Pagination
      'common.page': 'Stránka',
      'common.previous': 'Predchádzajúca',
      'common.next': 'Ďalšia',

      // Common Alt Texts
      'common.alt.martin-expert': 'Martin Stepanek - expert na technické SEO',
      'common.alt.martin-consultant': 'Martin Stepanek - konzultant technického SEO',

      // Trust signals
      'trust.free-consultation': 'Bezplatná konzultácia',
      'trust.no-commitment': 'Žiadny záväzok',
      'trust.projects': 'Viac ako 50 úspešných projektov',
      'trust.websites-optimized': 'Viac ako 50 úspešne optimalizovaných webov',
      'trust.businesses-trust': 'Viac ako 50 firiem mi dôveruje',

      // Feature Grid
      'features.badge': 'Prečo záleží na technickej dokonalosti',
      'features.title': 'Používatelia na prvom mieste. <span>Vyhľadávače nasledujú</span>',
      'features.subtitle': 'Skvelá používateľská skúsenosť riadi všetko. Technické SEO a optimalizácia výkonu spolupracujú na zvýšení zapojenia a konverzií. Technicky dokonalé webové stránky vytvárajú lepšiu používateľskú skúsenosť, čo vedie k lepšej viditeľnosti vo vyhľadávačoch a AI platformách',

      'features.visitors-to-customers.title': 'Premeňte návštevníkov na zákazníkov',
      'features.visitors-to-customers.description': 'Keď návštevníci ľahko nájdu produkty a stránky sa načítajú okamžite, lepšie konvertujú. Optimalizácia technického SEO a výkonu webu vytvára pozitívnu skúsenosť, ktorá zvyšuje príjmy.',

      'features.remove-friction.title': 'Odstráňte prekážky používateľov',
      'features.remove-friction.description': 'Nefunkčné odkazy, pomalé stránky a zlá štruktúra frustrujú návštevníkov. Technická optimalizácia eliminuje tieto prekážky a zabezpečuje, že každá cesta používateľa je plynulá od vyhľadávania až po nákup.',

      'features.maximize-visibility.title': 'Maximalizujte svoju viditeľnosť',
      'features.maximize-visibility.description': 'Dobre štruktúrované stránky sa lepšie umiestňujú v Google a sú odporúčané AI systémami ako ChatGPT a Perplexity. Technická dokonalosť SEO zabezpečuje maximálnu zisťovateľnosť na všetkých platformách.',

      // CTA Section
      'cta.badge': 'Pripravení potešiť svojich používateľov?',
      'cta.title': 'Poskytnite návštevníkom skúsenosť, <span>ktorú si zaslúžia</span>',
      'cta.description': 'Vaši používatelia sa stretávajú s problémami, ktoré možno ani nevidíte. Získajte komplexný technický audit, ktorý odhalí presne to, čo frustruje návštevníkov a ako vytvoriť bezproblémovú skúsenosť a zároveň prirodzene zlepšiť vašu viditeľnosť vo vyhľadávačoch a AI systémoch.',

      // Newsletter
      'newsletter.title': 'Zostaňte o krok vpred',
      'newsletter.description': 'Získajte praktické informácie o technickom SEO a výkone webu priamo do vašej schránky.',
      'newsletter.placeholder': 'Zadajte váš email',
      'newsletter.button': 'Prihlásiť sa',
      'newsletter.success': 'Skvelé! Teraz skontrolujte svoj email a potvrďte odber.',

      // Blog
      'blog.title': 'Poznatky a stratégie technického SEO',
      'blog.description': 'Podrobné príručky o technickom SEO, výkone webu a optimalizácii používateľskej skúsenosti.',
      'blog.latest': 'Najnovšie články',
      'blog.read-time': 'min čítania',
      'blog.share-on': 'Zdieľať na',
      'blog.cta.badge': 'Pripravení transformovať vašu webovú stránku?',
      'blog.cta.title': 'Premeňte svoju webovú stránku na',
      'blog.cta.description': 'Aplikujte tieto poznatky na vašu webovú stránku. Získajte komplexný technický audit, ktorý odhalí presne to, čo brzdí váš výkon a ako to napraviť.',
      'blog.author.name': 'Martin Stepánek',
      'blog.author.bio': 'S viac ako 10 rokmi skúseností s vývojom a optimalizáciou webových stránok som sa naučil, že technická dokonalosť vedie k obchodnému úspechu. Pomáham firmám maximalizovať potenciál ich webových stránok prostredníctvom strategického technického SEO a vylepšení výkonu, ktoré vytvárajú lepšiu skúsenosť pre používateľov a lepšie výsledky pre firmy.',

      'blog.hero.badge': 'Expertné poznatky o technickom SEO',
      'blog.hero.title': 'Poznatky a stratégie <span>technického SEO</span>',
      'blog.hero.description': 'Podrobné príručky o technickom SEO, výkone webu a optimalizácii používateľskej skúsenosti. Naučte sa stratégie na zlepšenie viditeľnosti a konverzií vašej webovej stránky.',

      // Footer
      'footer.heading': 'Pätička',
      'footer.description': 'Skúsený konzultant technického SEO a výkonu webu s viac ako desaťročnými skúsenosťami s vývojom webových stránok.',
      'footer.services': 'Služby',
      'footer.social.linkedin': 'LinkedIn',
      'footer.social.bluesky': 'Bluesky',
      'footer.social.youtube': 'YouTube',
      'footer.copyright': '© 2024 - 2025 TechSEO Vitals. Všetky práva vyhradené.',
      'footer.privacy': 'Zásady ochrany osobných údajov',
      'footer.terms': 'Podmienky používania',
      'footer.quick-links': 'Rýchle odkazy',
      'footer.resources': 'Bezplatné zdroje',
      'footer.connect': 'Spojte sa',

      // Cookie Consent
      'cookie.heading': 'Ahoj!',
      'cookie.description': 'Používame niekoľko cookies na zlepšenie vašej skúsenosti a pochopenie toho, aký obsah máte najradšej.',
      'cookie.privacy-link': 'Prečítajte si naše zásady ochrany osobných údajov',
      'cookie.decline': 'Odmietnuť',
      'cookie.accept': 'Prijať',

      // Meta descriptions
      'meta.home.title': 'TechSEO Vitals s Martinom Stepánkom',
      'meta.home.description': 'Expertný technický SEO konzultant pomáhajúci firmám vytvárať webové stránky, ktoré používatelia milujú a vyhľadávače odmeňujú. Zvýšte návštevnosť a konverzie ešte dnes.',

      'meta.services.title': 'Služby technického SEO - TechSEO Vitals',
      'meta.services.description': 'Profesionálne služby technického SEO vrátane auditov, monitorovania a podpory pri migrácii webových stránok. Zlepšite výkon a umiestnenie vašej stránky.',

      'meta.consultant.title': 'Konzultant technického SEO - Martin Stepánek',
      'meta.consultant.description': 'Skúsený konzultant technického SEO s viac ako 10 rokmi vo vývoji webových stránok a 4+ rokmi v technickom SEO. Pomáham firmám optimalizovať ich online prítomnosť.',

      'meta.blog.title': 'Blog o technickom SEO - TechSEO Vitals',
      'meta.blog.description': 'Expertné poznatky o technickom SEO, optimalizácii výkonu webu a používateľskej skúsenosti. Naučte sa stratégie na zlepšenie viditeľnosti a konverzií vašej webovej stránky.',

      'meta.contact.title': 'Kontakt - TechSEO Vitals',
      'meta.contact.description': 'Ozvite sa pre bezplatnú konzultáciu technického SEO. Porozprávajme sa o tom, ako zlepšiť výkon vašej webovej stránky a viditeľnosť vo vyhľadávačoch.',

      'meta.404.title': '404 - Stránka nenájdená - TechSEO Vitals',
      'meta.404.description': 'Stránka, ktorú hľadáte, neexistuje. Preskúmajte naše služby technického SEO, blogové články a bezplatné zdroje.',

      'meta.newsletter.title': 'Newsletter - TechSEO Vitals',
      'meta.newsletter.description': 'Prihláste sa na odber a získajte praktické informácie o technickom SEO a výkone webu priamo do vašej schránky. Zostaňte o krok vpred s expertným tipmi a stratégiami.',

      'meta.thank-you.title': 'Ďakujeme - TechSEO Vitals',
      'meta.thank-you.description': 'Ďakujeme za prihlásenie! Skontrolujte svoj email a potvrďte odber, aby ste získali bezplatné zdroje technického SEO.',

      'meta.checklist.title': 'Kontrolný zoznam technického SEO - Bezplatné stiahnutie - TechSEO Vitals',
      'meta.checklist.description': 'Stiahnite si náš komplexný kontrolný zoznam technického SEO. Podrobný sprievodca na optimalizáciu výkonu, prehľadávateľnosti a pozícií vašej webovej stránky.',

      'meta.migration.title': 'Kontrolný zoznam migrácie webovej stránky - Bezplatné stiahnutie - TechSEO Vitals',
      'meta.migration.description': 'Stiahnite si náš kompletný kontrolný zoznam migrácie webovej stránky. Ochráňte svoju návštevnosť a pozície počas redizajnov, zmien platformy a migrácií domény.',

      'meta.customers.title': 'Príbehy úspechu zákazníkov - TechSEO Vitals',
      'meta.customers.description': 'Pozrite sa, ako sme pomohli firmám zlepšiť ich technické SEO, výkon webu a organickú návštevnosť. Skutočné výsledky od skutočných klientov.',

      // 404 Page
      '404.title': 'Stránka nenájdená',
      '404.description': 'Stránka, ktorú hľadáte, neexistuje alebo bola presunutá. Poďme vás vrátiť späť na správnu cestu.',
      '404.cta.home': 'Späť na domovskú stránku',
      '404.cta.blog': 'Čítať blog',
      '404.popular-pages.title': 'Populárne stránky',
      '404.popular-pages.services': 'Služby',
      '404.popular-pages.newsletter': 'Newsletter',
      '404.popular-pages.about': 'O mne',
      '404.popular-pages.contact': 'Kontakt',
      '404.seo-tip.title': 'SEO tip',
      '404.seo-tip.description': 'Správne 404 stránky sú dôležité pre SEO. Pomáhajú vyhľadávačom pochopiť štruktúru vašej stránky a poskytujú lepšiu používateľskú skúsenosť, keď stránky neexistujú.',

      // Newsletter Page
      'newsletter.hero.badge': 'Zostaňte o krok vpred',
      'newsletter.hero.title': 'Získajte poznatky o technickom SEO <span>priamo do vašej schránky</span>',
      'newsletter.hero.description': 'Prihláste sa na odber a získajte praktické tipy pre technické SEO a výkon webu, ktoré vám pomôžu zostať konkurencieschopnými. Žiadny spam, len hodnotné poznatky.',
      'newsletter.hero.trust-signals': 'Pridajte sa k viac ako 500 odberateľom získavajúcim expertné poznatky',
      'newsletter.form.title': 'Prihláste sa na odber nášho newsletteru',
      'newsletter.form.subtitle': 'Získajte týždenné poznatky o technickom SEO a výkone webu',
      'newsletter.form.first-name': 'Meno',
      'newsletter.form.email': 'Emailová adresa',
      'newsletter.form.submit': 'Prihlásiť sa',
      'newsletter.form.success': 'Skvelé! Teraz si skontrolujte email a potvrďte odber.',
      'newsletter.badge': 'Newsletter',
      'newsletter.subscribe': 'Prihlásiť sa',
      'newsletter.section.title': 'Získajte <span class="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">dvojtýždenne</span> poznatky o technickom SEO',
      'newsletter.section.title.part1': 'Získajte <span class="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">dvojtýždenne</span> poznatky o technickom SEO',
      'newsletter.section.description': 'Získajte praktické stratégie, ktoré pomôžu majiteľom firiem a vývojárom vytvárať výnimočné používateľské skúsenosti, optimalizovať technické SEO a výkon a zvyšovať príjmy.',
      'newsletter.section.recommended': 'Odporúčané lídrami v odvetví',
      'newsletter.section.no-spam': 'Žiadny spam. Odhlásenie kedykoľvek.',
      'newsletter.section.consent': 'Prihlásením sa súhlasím s',
      'newsletter.section.and': 'a',
      'newsletter.section.english-only': 'Newsletter je iba v angličtine',

      // Newsletter Content Section
      'newsletter-content.badge': 'Čo získate',
      'newsletter-content.title': 'Čo je v každej <span>epizóde</span>',
      'newsletter-content.subtitle': 'Praktické stratégie technického SEO a výkonu, ktoré vám pomôžu vytvárať lepšie používateľské skúsenosti pri zlepšovaní vášho umiestnenia vo vyhľadávačoch a viditeľnosti AI.',
      'newsletter-content.card1.title': 'Expertná analýza',
      'newsletter-content.card1.description': 'Hlboké ponory do trendov technického SEO, prípadové štúdie zo skutočných webov a techniky optimalizácie výkonu, ktoré skutočne robia rozdiel.',
      'newsletter-content.card1.label': 'Hlboké poznatky',
      'newsletter-content.card2.title': 'Praktické návody',
      'newsletter-content.card2.description': 'Krok za krokom návody, ktoré môžete implementovať okamžite. Žiadne zbytočnosti, len praktické pokyny s jasnými príkladmi pred a po.',
      'newsletter-content.card2.label': 'Pripravené na použitie',
      'newsletter-content.card3.title': 'Priemyselné trendy',
      'newsletter-content.card3.description': 'Najnovšie aktualizácie o zmenách algoritmov vyhľadávania, vývoji AI a vznikajúcich príležitostiach optimalizácie, o ktorých potrebujete vedieť.',
      'newsletter-content.card3.label': 'Zostaňte aktuálni',

      // 5 Performance Metrics Page
      'performance-metrics.badge': 'Prestaňte strácať zákazníkov kvôli pomalým stránkam',
      'performance-metrics.title': '<span>5 metrík výkonu</span>, ktoré skutočne prinášajú obchodné výsledky',
      'performance-metrics.subtitle': 'Zistite, ktoré metriky výkonu priamo ovplyvňujú spokojnosť zákazníkov a príjmy. Naučte sa sledovať, čo vedie ku konverziám.',
      'performance-metrics.rating': 'Viac ako 50 firiem zlepšuje svoje obchodné výsledky',
      'performance-metrics.form.title': 'Získajte svoju <span>bezplatnú e-knihu</span>',
      'performance-metrics.form.subtitle': 'Nechajte si e-knihu doručiť do schránky',
      'performance-metrics.form.button': 'Získať bezplatnú e-knihu',
      'performance-metrics.form.english-only': 'E-kniha je iba v angličtine',

      // Newsletter Benefits Section
      'newsletter-benefits.badge': 'Prečo sa prihlásiť',
      'newsletter-benefits.title': 'Prečo majitelia firiem <span>dôverujú tomuto newsletteru</span>',
      'newsletter-benefits.subtitle': 'Newsletter, ktorý transformuje váš pohľad na používateľskú skúsenosť a technickú optimalizáciu.',
      'newsletter-benefits.stat1.value': '10+',
      'newsletter-benefits.stat1.label': 'Rokov skúseností',
      'newsletter-benefits.stat2.value': '2x',
      'newsletter-benefits.stat2.label': 'Mesačná frekvencia',
      'newsletter-benefits.stat3.value': '100%',
      'newsletter-benefits.stat3.label': 'Praktický obsah',
      'newsletter-benefits.card1.title': 'Rýchlejšie rozhodovanie',
      'newsletter-benefits.card1.description': 'Prestaňte pochybovať o svojich technických voľbách. Získajte jasné rady, čo funguje, čo nefunguje a prečo je to dôležité pre vašu konkrétnu situáciu.',
      'newsletter-benefits.card2.title': 'Konkurenčná výhoda',
      'newsletter-benefits.card2.description': 'Naučte sa optimalizačné techniky, ktoré väčšina webov prehliadne. Predbehnite zmeny skôr, než ovplyvnia vaše umiestnenia a objavte príležitosti, ktoré ostatní prehliadajú.',
      'newsletter-benefits.card3.title': 'Merateľný rast',
      'newsletter-benefits.card3.description': 'Sledujte transformáciu vášho webu s lepším zapojením používateľov, zlepšenou viditeľnosťou vo vyhľadávačoch a zvýšenými príjmami prostredníctvom overených optimalizačných techník.',

      // Thank You Page
      'thank-you.hero.badge': 'Ďakujeme!',
      'thank-you.hero.title': 'Skontrolujte svoj email a <span>potvrďte odber</span>',
      'thank-you.hero.description': 'Poslali sme vám potvrdzovací email. Kliknite na odkaz vnútri a potvrďte odber, aby ste získali bezplatné zdroje.',
      'thank-you.hero.checklist-notice': 'Váš kontrolný zoznam bude odoslaný po potvrdení odberu.',
      'thank-you.hero.cta.services': 'Preskúmať služby',
      'thank-you.hero.cta.blog': 'Čítať blog',

      // Checklist Page
      'checklist.hero.badge': 'Bezplatný zdroj technického SEO',
      'checklist.hero.title': 'Kompletný kontrolný zoznam <span>technického SEO</span>',
      'checklist.hero.description': 'Stiahnite si náš komplexný kontrolný zoznam technického SEO. Podrobný sprievodca na optimalizáciu výkonu, prehľadávateľnosti a pozícií vašej webovej stránky.',
      'checklist.hero.trust-signals': 'Dôveruje mi viac ako 50 firiem',
      'checklist.hero.cta': 'Stiahnuť kontrolný zoznam',
      'checklist.form.title': 'Získajte bezplatný kontrolný zoznam',
      'checklist.form.subtitle': 'Zadajte svoje údaje a stiahnite si kontrolný zoznam',
      'checklist.form.first-name': 'Meno',
      'checklist.form.email': 'Emailová adresa',
      'checklist.form.success': 'Skvelé! Teraz si skontrolujte email, potvrďte odber a pošlem vám kópiu kontrolného zoznamu.',
      'checklist.form.submit': 'Stiahnuť kontrolný zoznam',
      'checklist.form.english-only': 'Kontrolný zoznam je iba v angličtine',
      'checklist.features.title': 'Čo je vnútri',
      'checklist.features.feature1.title': 'Crawlovanie a indexovanie',
      'checklist.features.feature1.description': 'Zabezpečte, aby vyhľadávače mohli objaviť a indexovať všetky dôležité stránky',
      'checklist.features.feature2.title': 'Architektúra stránky',
      'checklist.features.feature2.description': 'Optimalizujte štruktúru URL a interné odkazy pre lepšie SEO',
      'checklist.features.feature3.title': 'Technický výkon',
      'checklist.features.feature3.description': 'Zlepšite Core Web Vitals a rýchlosť stránky pre lepšie pozície',
      'checklist.features.feature4.title': 'Mobilná optimalizácia',
      'checklist.features.feature4.description': 'Zabezpečte, aby vaša stránka fungovala dokonale na všetkých zariadeniach',

      // Checklist Benefits Section
      'checklist.benefits.badge': 'Transformujte svoju webovú stránku',
      'checklist.benefits.title': 'Opravte, co vás stojí <span>zákazníkov každý deň</span>',
      'checklist.benefits.subtitle': 'Prestaňte strácať zákazníkov kvôli technickým problémom. Získajte plán optimalizácie, ktorý zlepšuje používateľskú skúsenosť a zároveň zvyšuje merateľný rast príjmov.',
      'checklist.benefits.benefit1.title': 'Kompletný technický základ',
      'checklist.benefits.benefit1.description': 'Zabezpečte, aby vyhľadávače mohli správne prehľadávať, indexovať a rozumieť vášmu obsahu. Opravte technické prekážky, ktoré bránia vašej stránke v umiestnení.',
      'checklist.benefits.benefit1.tagline': 'Pokrýva prehľadávateľnosť a indexovateľnosť',
      'checklist.benefits.benefit2.title': 'Nájdite problémy zabíjajúce príjmy',
      'checklist.benefits.benefit2.description': 'Identifikujte technické problémy, ktoré vás stoja zákazníkov. Zistite, čo odháňa návštevníkov a ako to okamžite opraviť.',
      'checklist.benefits.benefit2.tagline': 'Viac ako 100 prioritizovaných problémov',
      'checklist.benefits.benefit3.title': 'Viditeľnosť vo vyhľadávačoch',
      'checklist.benefits.benefit3.description': 'Zdokonaľte architektúru svojej stránky, Schema Markup a technické nastavenie na maximalizáciu porozumenia vyhľadávačov a pomôžte svojmu obsahu byť objavený pri relevantných vyhľadávaniach.',
      'checklist.benefits.benefit3.tagline': 'Vylepšená viditeľnosť vo vyhľadávaní',

      // Performance Benefits Section
      'performance.benefits.badge': 'Sledujte, čo je dôležité',
      'performance.benefits.title': '5 metrík, ktoré <span>skutočne záležia</span>',
      'performance.benefits.subtitle': 'Prestaňte strácať zákazníkov kvôli pomalým stránkam. Naučte sa presných 5 metrík výkonu, ktoré priamo ovplyvňujú konverzie a príjmy, plus cieľové čísla, ktoré musíte dosiahnuť.',
      'performance.benefits.benefit1.title': 'Optimalizácia odozvy servera',
      'performance.benefits.benefit1.description': 'Objavte skryté oneskorenia servera, ktoré zabíjajú konverzie skôr, než zákazníci vôbec uvidia váš obsah. Naučte sa cieľové časy odozvy, ktoré udržiavajú návštevníkov zapojených.',
      'performance.benefits.benefit1.tagline': 'Cieľové hodnoty výkonu servera',
      'performance.benefits.benefit2.title': 'Základy rýchlosti načítavania',
      'performance.benefits.benefit2.description': 'Naučte sa kritické merania rýchlosti, ktoré rozhodujú, či zákazníci zostanú alebo odídu. Získajte konkrétne cieľové čísla, ktoré oddeľujú rýchle stránky od pomalých.',
      'performance.benefits.benefit2.tagline': 'Presné cieľové benchmarky',
      'performance.benefits.benefit3.title': 'Plán obnovy príjmov',
      'performance.benefits.benefit3.description': 'Objavte, ako týchto 5 metrík spolupracuje na zastavení opúšťania zákazníkov. Naučte sa overený systém na identifikáciu toho, ktoré problémy s rýchlosťou vás stoja najviac peňazí.',
      'performance.benefits.benefit3.tagline': 'Analýza dopadu na príjmy',

      // Migration Benefits Section
      'migration.benefits.badge': 'Chráňte svoju investíciu',
      'migration.benefits.title': 'Minimalizujte riziká <span>a straty migrácie</span>',
      'migration.benefits.subtitle': 'Väčšina migrácií stratí významnú návštevnosť a príjmy. Tento kontrolný zoznam pomáha minimalizovať narušenie vašich pozícií vo vyhľadávaní, používateľskej skúsenosti a obchodných operácií.',
      'migration.benefits.benefit1.title': 'Udržte používateľskú skúsenosť',
      'migration.benefits.benefit1.description': 'Zachovajte rýchlosť stránky, funkčnosť a používateľské toky nedotknuté. Predchádzajte poklesom výkonu a nefunkčným funkciám, ktoré odháňajú zákazníkov.',
      'migration.benefits.benefit1.tagline': 'Stratégia nulového výpadku',
      'migration.benefits.benefit2.title': 'Zachovajte pozície vo vyhľadávaní',
      'migration.benefits.benefit2.description': 'Chráňte svoju ťažko získanú viditeľnosť vo vyhľadávaní. Správne presmerovania, mapovanie URL a technické nastavenie zabraňujú stratám pozícií, ktoré ničia organickú návštevnosť.',
      'migration.benefits.benefit2.tagline': 'Viac ako 45 technických kontrolných bodov',
      'migration.benefits.benefit3.title': 'Ochrana príjmov',
      'migration.benefits.benefit3.description': 'Chráňte svoj biznis pred migračnými katastrofami. Vyhnite sa poklesom návštevnosti, nefunkčným konverziám a strateným príjmom, ktoré ničia ROI.',
      'migration.benefits.benefit3.tagline': 'Prístup zameraný na príjmy',

      // About Section
      'about.subtitle': 'Špecializujem sa na poskytovanie merateľných vylepšení, ktoré vedú k skutočnému obchodnému rastu. Viac ako 10 rokov skúseností s optimalizáciou webových stránok pre vyhľadávače aj výnimočné používateľské skúsenosti.',
      'about.point1.title': 'Profesionálne webové vývojárske zručnosti',
      'about.point1.description': 'Kombinujem vývojársku expertízu so znalosťou SEO. Hlboké porozumenie technickým aspektom a architektúre mi umožňuje riešiť zložité výzvy.',
      'about.point2.title': 'Komplexný technický prístup',
      'about.point2.description': 'Špecializujem sa na technické SEO aj optimalizáciu výkonu. Každý aspekt technického základu vašej stránky spolupracuje na maximalizácii viditeľnosti vo vyhľadávačoch a AI platformách.',
      'about.point3.title': 'Merateľné obchodné výsledky',
      'about.point3.description': 'Od podnikových migrácií po rast startupov som pomohol firmám výrazne zvýšiť príjmy a organickú návštevnosť riešením zložitých technických SEO výziev.',
      'about.stats.title': 'Viac ako 50 úspešných projektov',
      'about.stats.subtitle': 'Dôverujú mi firmy po celom svete',

      // Migration Checklist Page
      'migration.hero.badge': 'Bezplatný zdroj pre migráciu webovej stránky',
      'migration.hero.title': 'Kontrolný zoznam migrácie <span>webovej stránky</span>',
      'migration.hero.description': 'Stiahnite si náš kompletný kontrolný zoznam migrácie webovej stránky. Ochráňte svoju návštevnosť a pozície počas redizajnov, zmien platformy a migrácií domény.',
      'migration.hero.trust-signals': 'Dôveruje mi viac ako 50 firiem',
      'migration.hero.cta': 'Stiahnuť kontrolný zoznam',
      'migration.form.title': 'Získajte bezplatný kontrolný zoznam migrácie',
      'migration.form.subtitle': 'Zadajte svoje údaje a stiahnite si kontrolný zoznam',
      'migration.form.first-name': 'Meno',
      'migration.form.email': 'Emailová adresa',
      'migration.form.submit': 'Stiahnuť kontrolný zoznam',
      'migration.form.success': 'Skvelé! Teraz si skontrolujte email, potvrďte odber a pošlem vám kópiu kontrolného zoznamu.',
      'migration.features.title': 'Čo je vnútri',
      'migration.features.feature1.title': 'Plánovanie pred migráciou',
      'migration.features.feature1.description': 'Kompletný audit a prípravné kroky pred migráciou',
      'migration.features.feature2.title': 'Mapovanie URL a presmerovania',
      'migration.features.feature2.description': 'Zabezpečte, aby všetky staré URL správne presmerovali na nové',
      'migration.features.feature3.title': 'Monitorovanie po migrácii',
      'migration.features.feature3.description': 'Sledujte pozície, návštevnosť a technické problémy po spustení',
      'migration.features.feature4.title': 'Stratégie obnovy',
      'migration.features.feature4.description': 'Kroky, ktoré treba podniknúť, ak zaznamenáte pokles návštevnosti',

      // Customers Page
      'customers.hero.badge': 'Príbehy úspechu zákazníkov',
      'customers.hero.title': 'Skutočné výsledky od <span>skutočných klientov</span>',
      'customers.hero.description': 'Pozrite sa, ako sme pomohli firmám zlepšiť ich technické SEO, výkon webu a organickú návštevnosť. Objavte dopad technickej dokonalosti.',
      'customers.hero.cta': 'Začnite svoj príbeh úspechu',
      'customers.hero.rating': 'Dôveruje mi viac ako 50 firiem',

      // Customers Page - Case Studies Section
      'customers.case-studies.badge': 'Vybrané prípadové štúdie',
      'customers.case-studies.title': 'Technická dokonalosť, ktorá <span>slúži používateľom</span>',
      'customers.case-studies.subtitle': 'Pozrite sa, ako tieto spoločnosti transformovali svoje webové stránky na vysoko výkonné platformy, ktoré prinášajú merateľné obchodné výsledky.',

      // Customers Page - TOUCHIT Case Study
      'customers.touchit.alt': 'TOUCHIT',
      'customers.touchit.category': 'Technologický spravodajský portál',
      'customers.touchit.description': 'Kompletná modernizácia infraštruktúry a optimalizácia výkonu pre vedúci slovenský technologický spravodajský portál.',
      'customers.touchit.feature1': 'Migrácia infraštruktúry a CMS',
      'customers.touchit.feature2': 'Rýchlejší web a lepšie Core Web Vitals',
      'customers.touchit.feature3': 'Dohľad nad externou agentúrou a dizajnové poradenstvo',

      // Customers Page - expertise.ai Case Study
      'customers.expertiseai.alt': 'expertise.ai',
      'customers.expertiseai.category': 'AI platforma pre konverziu dopytu',
      'customers.expertiseai.description': 'Strategická migrácia spojenia a komplexná optimalizácia spájajúca dve značky do jednej unified vysokovýkonnej platformy.',
      'customers.expertiseai.feature1': 'Kompletná migrácia spojenia dvoch značiek',
      'customers.expertiseai.feature2': 'Nová architektúra webu a SEO stratégia',
      'customers.expertiseai.feature3': 'Optimalizácia výkonu a efektivity crawlovania',

      // Customers Page - Testimonials Section
      'customers.testimonials.badge': 'Čo hovoria zákazníci',
      'customers.testimonials.title': 'Skutočné výsledky od <span>skutočných zákazníkov</span>',
      'customers.testimonials.subtitle': 'Priama spätná väzba od klientov, ktorí zažili merateľné zlepšenia v konverziách, príjmoch a organickom raste.',

      // Customers Page - Testimonial: Daniel Pison
      'customers.testimonial.pison.name': 'Daniel Pison',
      'customers.testimonial.pison.position': 'CMO',
      'customers.testimonial.pison.company': 'Quality Unit',
      'customers.testimonial.pison.text': 'Martin bol kľúčovým členom tímu zodpovedného za technický stav webových stránok liveagent.com a postaffiliatepro.com. Vďaka jeho schopnostiam a odbornosti sme dokázali dlhodobo konkurovať oveľa silnejším konkurentom z hľadiska kvality webovej stránky.\nV budúcnosti by som sa s Martinom určite rád opäť spolupracoval, považujem ho za jedného z najlepších expertov na technické SEO na trhu. Určite odporúčam s ním spolupracovať.',
      'customers.testimonial.pison.image': '/assets/images/testimonials/daniel-pison.jpg',

      // Customers Page - Testimonial: Tomas Buransky
      'customers.testimonial.buransky.name': 'Tomáš Buranský',
      'customers.testimonial.buransky.position': 'Marketing Manager',
      'customers.testimonial.buransky.company': 'TOUCHIT',
      'customers.testimonial.buransky.text': 'S Martinom spolupracujeme už niekoľko rokov a skutočne si ceníme jeho profesionálny a systematický prístup, ktorý zohľadňuje aj naše obchodné ciele. Okrem hlbokej znalosti SEO dokáže navrhované stratégie rozdeliť na konkrétne kroky a vďaka predchádzajúcej skúsenosti programátora ich efektívne komunikovať tak našej redakcii, ako aj vývojárom.',
      'customers.testimonial.buransky.image': '/assets/images/testimonials/tomas-buransky.jpg',

      // Customers Page - Testimonial: Viktor Zeman
      'customers.testimonial.zeman.name': 'Viktor Zeman',
      'customers.testimonial.zeman.position': 'CEO',
      'customers.testimonial.zeman.company': 'LiveAgent & Post Affiliate Pro',
      'customers.testimonial.zeman.text': 'Martinovo vývojárske zázemie vytvorilo základ pre implementáciu sofistikovaných stratégií, najmä technických SEO iniciatív. S ním náš tím výrazne zlepšil výkon dvoch webových stránok s vysokou návštevnosťou.',
      'customers.testimonial.zeman.image': '/assets/images/testimonials/viktor-zeman.jpg',

      // Customers Page - CTA Section
      'customers.cta.badge': '100% bezrizikovákonzultácia',
      'customers.cta.title': 'Pripravení pridať sa k týmto <span>príbehom úspechu?</span>',
      'customers.cta.subtitle': 'Pridajte sa k týmto spoločnostiam a transformujte svoju webovú stránku na takú, ktorú používatelia milujú a vyhľadávače odmeňujú.',
      'customers.cta.button': 'Začnite svoju transformáciu',
      'customers.cta.trust.free': 'Bezplatná konzultácia',
      'customers.cta.trust.commitment': 'Žiadny záväzok',
      'customers.cta.feature1.title': '100% zadarmo',
      'customers.cta.feature1.description': 'Bezplatná kontrola webu bez skrytých nákladov',
      'customers.cta.feature2.title': '30 minút',
      'customers.cta.feature2.description': 'Rýchly hovor o vašich najväčších príležitostiach',
      'customers.cta.feature3.title': 'Okamžitá hodnota',
      'customers.cta.feature3.description': 'Užitočné poznatky, ktoré môžete implementovať už dnes',

      // Services Page - Hero
      'services.hero.cta': 'Získajte bezplatnú kontrolu webu',

      // Services Page - CTA
      'services.cta.button': 'Získajte bezplatnú kontrolu webu',

      // Consultant Page - CTAs
      'consultant.hero.cta': 'Získajte bezplatnú kontrolu webu',
      'consultant.cta.button': 'Začnite zlepšovať svoju webovú stránku',

      // Contact Page - Hero
      'contact.hero.badge': 'Kontaktujte ma',
      'contact.hero.title': 'Prediskutujme vaše <span>potreby technického SEO</span>',
      'contact.hero.description': 'Naplánujte si bezplatnú konzultáciu na prediskutovanie toho, ako vám technické SEO môže pomôcť rozvinúť váš biznis.',
      'contact.hero.cta': 'Naplánujte bezplatnú konzultáciu',
      'contact.hero.status': 'Aktuálne prijímam nových klientov',

      // Services Hero Rating
      'services.hero.rating': 'Dôveruje mi viac ako 50 firiem',

      // Contact Page
      'contact.methods.title': 'Viacero spôsobov ako sa spojiť',
      'contact.methods.subtitle': 'Ozvite sa priamo pre projektové otázky alebo sa spojte na sociálnych sieťach pre poznatky a aktualizácie',
      'contact.email.title': 'Email',
      'contact.email.description': 'Priama komunikácia pre projektové otázky',
      'contact.email.address': 'martin@techseovitals.com',
      'contact.linkedin.description': 'Spojte sa profesionálne a pozrite si príbehy úspechu klientov',
      'contact.linkedin.handle': '/in/techseovitals',
      'contact.bluesky.description': 'Rýchle aktualizácie a tipy pre technické SEO',
      'contact.bluesky.handle': '@techseovitals.com',
      'contact.youtube.description': 'Podrobné návody a prípadové štúdie',
      'contact.youtube.handle': '@techseovitals',

      // Calendly Section
      'calendly.title': 'Rezervujte si <span>bezplatnú konzultáciu</span>',
      'calendly.subtitle': 'Vyberte si čas, ktorý vám najlepšie vyhovuje na diskusiu o potrebách technického SEO vašej webovej stránky a príležitostiach na rast.',

      // Speaking Section
      'speaking.badge': 'Prednášky',
      'speaking.title': 'Verejné <span>prednášky</span>',
      'speaking.subtitle': 'Zdieľanie poznatkov a náhľadov na priemyselných konferenciách a podujatiach',
      'speaking.more-soon': 'Viac čoskoro...',
      'speaking.more-soon.description': 'Ďalšie prednášky a prezentácie budú čoskoro',

      // Business Info Section
      'business-info.title': 'Obchodné informácie',
      'business-info.subtitle': 'Oficiálne obchodné údaje na fakturáciu a zmluvy',
      'business-info.company-details': 'Detaily spoločnosti',
      'business-info.business-name': 'Obchodné meno',
      'business-info.business-id': 'IČO',
      'business-info.vat-id': 'DIČ',
      'business-info.address': 'Adresa',

      // Blog Cards Section
      'blog-cards.title': 'Najnovšie poznatky o <span>technickom SEO</span>',
      'blog-cards.subtitle': 'Zostaňte o krok vpred s praktickými stratégiami technického SEO, tipmi na optimalizáciu výkonu a osvedčenými postupmi v odvetví.',
      'blog-cards.badge': 'Expertné poznatky',

      // Testimonials Section
      'testimonials.default.title': 'Skutočné výsledky od <span>skutočných klientov</span>',
      'testimonials.default.subtitle': 'Zistite, ako technická dokonalosť vedie k skutočným obchodným výsledkom.',
      'testimonials.default.badge': 'Príbehy úspechu klientov',
      'testimonials.default.trust-text': 'Dôveruje mi viac ako 50 firiem',
      'testimonials.default.cta': 'Viac príbehov úspechu',
      'testimonials.position.ceo': 'CEO',
      'testimonials.position.cmo': 'CMO',
      'testimonials.company.liveagent': 'LiveAgent & Post Affiliate Pro',
      'testimonials.company.quality-unit': 'Quality Unit',

      // Why Choose Me Section
      'why-choose-me.badge': 'Prečo ja?',
      'why-choose-me.title': 'Expert na technické SEO, ktorý <span>prináša skutočné výsledky</span>',

      // Why Audit Section
      'why-audit.badge': 'Prečo potrebujete audit',
      'why-audit.title': 'Prestaňte hádať. <span>Začnite vedieť</span>',
      'why-audit.subtitle': 'Nemôžete opraviť to, čo nevidíte. Môj audit odhalí skryté technické problémy, ktoré zabíjajú vaše konverzie a príjmy s jasným plánom na ich opravu.',
      'why-audit.cta': 'Získajte bezplatnú kontrolu webu',
      'why-audit.card1.title': 'Odhaľte zabijakov príjmov',
      'why-audit.card1.description': 'Nájdite technické problémy, ktoré vás ticho stoja peniaze. Zistite presne, čo bráni návštevníkom v konverzii a dokončení nákupov.',
      'why-audit.card1.badge': 'Kompletná technická analýza',
      'why-audit.card2.title': 'Maximalizujte dopad na príjmy',
      'why-audit.card2.description': 'Zamerajte sa na to, čo je najdôležitejšie. Prioritizujem opravy podľa dopadu na príjmy, pričom najprv riešim príležitosti s vysokými konverziami pre rýchlejšiu návratnosť investícií.',
      'why-audit.card2.badge': 'Nájdené príležitosti pre príjmy',
      'why-audit.card3.title': 'Zachyťte stratené príjmy',
      'why-audit.card3.description': 'Identifikujte, kde konkurencia kradne vašich zákazníkov a získajte technické vylepšenia, ktoré vám pomôžu získať späť trhový podiel a príjmy.',
      'why-audit.card3.badge': 'Konkurenčná výhoda',

      // About Section
      'about-section.badge': 'O Martinovi',
      'about-section.title': 'Čo ma robí <span>iným</span>',

      // Services Cards Section
      'services-cards.audit.title': 'Audit technického SEO',
      'services-cards.audit.price': '$2,500',
      'services-cards.audit.description': 'Komplexný audit technického SEO, ktorý odhalí, čo blokuje vašu viditeľnosť a konverzie. Získajte prioritizovaný plán na opravu kritických problémov a maximalizáciu potenciálu vašej webovej stránky.',
      'services-cards.audit.feature1.title': 'Komplexná technická analýza',
      'services-cards.audit.feature1.description': 'Kompletný audit zahŕňajúci technické SEO, výkon a používateľskú skúsenosť s viac ako 50 kontrolnými bodmi na identifikáciu všetkých problémov ovplyvňujúcich vašu stránku.',
      'services-cards.audit.feature2.title': 'Prioritizovaný akčný plán',
      'services-cards.audit.feature2.description': 'Jasný plán s opravami zoradenými podľa obchodného dopadu. Konkrétne odporúčania, ktoré váš tím môže okamžite implementovať pre dosiahnutie výsledkov.',
      'services-cards.audit.feature3.title': '90-minútová strategická konzultácia',
      'services-cards.audit.feature3.description': 'Individuálny strategický hovor na preskúmanie zistení, diskusiu o prioritách a vytvorenie plánu implementácie.',
      'services-cards.audit.cta': 'Získajte audit',

      'services-cards.monitoring.title': 'Monitorovanie technického SEO',
      'services-cards.monitoring.price': '$2,000',
      'services-cards.monitoring.price-unit': '/mesiac',
      'services-cards.monitoring.description': 'Priebežné monitorovanie a optimalizácia na udržanie maximálneho výkonu. Pravidelná analýza zachytáva problémy včas a identifikuje nové príležitosti na rast.',
      'services-cards.monitoring.feature1.title': 'Pravidelné monitorovanie výkonu',
      'services-cards.monitoring.feature1.description': 'Týždenná expertná analýza na identifikáciu chýb pri crawlovaní a indexovaní a problémov s výkonom. Nepretržité monitorovanie upozorňuje na problémy včas, skôr ako ovplyvnia príjmy.',
      'services-cards.monitoring.feature2.title': 'Mesačné optimalizačné reporty',
      'services-cards.monitoring.feature2.description': 'Mesačné výkonnostné reporty s novými príležitosťami na optimalizáciu. Buďte pred aktualizáciami algoritmov a vylepšeniami konkurencie.',
      'services-cards.monitoring.feature3.title': 'Prioritná podpora a konzultácie',
      'services-cards.monitoring.feature3.description': '60-minútové mesačné strategické hovory plus prioritná emailová podpora pre naliehavé problémy.',
      'services-cards.monitoring.cta': 'Začať monitorovanie',
      'services-cards.monitoring.commitment': 'Minimálny záväzok 3 mesiace',

      'services-cards.migration.title': 'Plánovanie migrácie webovej stránky',
      'services-cards.migration.price': '$4,500',
      'services-cards.migration.description': 'Ochráňte svoju návštevnosť a pozície počas migrácie webovej stránky. Komplexné plánovanie migrácie s auditmi pred a po migrácii na zaistenie nulových strát.',
      'services-cards.migration.feature1.title': 'Stratégia a plánovanie pred migráciou',
      'services-cards.migration.feature1.description': 'Podrobný audit a stratégia pred migráciou zahŕňajúca presmerovania, mapovanie URL a technické požiadavky. Kompletný plán na zachovanie všetkých pozícií a návštevnosti pri udržaní spokojnosti návštevníkov.',
      'services-cards.migration.feature2.title': 'Audit a podpora po migrácii',
      'services-cards.migration.feature2.description': 'Komplexný audit po migrácii na overenie správneho prenosu všetkého. Priebežná optimalizácia na zlepšenie výkonu nad úroveň pred migráciou.',
      'services-cards.migration.feature3.title': 'Nepretržitá podpora a monitorovanie',
      'services-cards.migration.feature3.description': 'Priebežná podpora počas celého procesu migrácie a pokračujúce monitorovanie po spustení.',
      'services-cards.migration.cta': 'Naplánujte migráciu',

      // Form placeholders and messages
      'form.placeholder.first-name': 'Meno',
      'form.placeholder.email': 'Email',
      'form.privacy.no-spam': 'Žiadny spam. Odhlásenie kedykoľvek.',
      'form.privacy.consent': 'Prihlásením sa súhlasím s',
      'form.privacy.and': 'a',
      'form.privacy.privacy-policy': 'Zásadami ochrany osobných údajov',
      'form.privacy.terms': 'Podmienkami používania',

      // Brutal Truth Section
      'brutal-truth.title': 'Tvrdá <span class="text-red-500">pravda</span> o vašej webovej stránke',
      'brutal-truth.subtitle': 'Technické problémy ničia dôveru používateľov. Pomalé stránky, nefunkčná navigácia a zlá štruktúra frustrujú skutočných zákazníkov, ktorí sa snažia používať vašu stránku. Keď používatelia bojujú, váš biznis trpí.',

      'brutal-truth.card1.badge': 'Štúdia Amazon',
      'brutal-truth.card1.stat': '1%',
      'brutal-truth.card1.stat-label': 'Strata príjmov na 100ms oneskorenie',
      'brutal-truth.card1.title': 'Používatelia vnímajú každé oneskorenie',
      'brutal-truth.card1.description': 'Amazon zistil, že používatelia vnímajú aj 100ms oneskorenia. Keď sú frustrovaní pomalým výkonom, opúšťajú nákupy - čo stojí firmy 1% príjmov za každých 100ms oneskorenia.',

      'brutal-truth.card2.badge': 'Štúdia Google',
      'brutal-truth.card2.stat': '53%',
      'brutal-truth.card2.stat-label': 'Mobilní používatelia opúšťajú pomalé stránky',
      'brutal-truth.card2.title': 'Trpezlivosť má svoje hranice',
      'brutal-truth.card2.description': 'Používatelia vám dajú presne 3 sekundy, než sa rozhodnú, že vaša stránka nestojí za ich čas. Google zistil, že 53% zákazníkov odchádza po týchto 3 sekundách a odnáša svoj biznis inam.',

      'brutal-truth.card3.badge': 'Používateľská skúsenosť',
      'brutal-truth.card3.stat': '79%',
      'brutal-truth.card3.stat-label': 'Sa nevráti po zlej skúsenosti',
      'brutal-truth.card3.title': 'Prvý dojem sa počíta',
      'brutal-truth.card3.description': '79% používateľov, ktorí čelili zlej skúsenosti s webom, vám nedá druhú šancu. Vyhľadávače a AI platformy sa spoliehajú na tie isté signály, ktoré vytvárajú dobrú používateľskú skúsenosť.',

      // Services Page - Hero
      'services.hero.badge': 'Služby technického SEO zamerané na výsledky',
      'services.hero.title': 'Technické SEO, ktoré <span>prináša skutočné výsledky</span>',
      'services.hero.description': 'Vaša webová stránka by mala fungovať bezchybne pre každého návštevníka. Technická optimalizácia odstraňuje prekážky, ktoré zabíjajú konverzie. Lepšia používateľská skúsenosť vedie k vyšším predajom a lepším pozíciám vo vyhľadávačoch.',
      'services.hero.rating': 'Dôveruje mi viac ako 50 firiem',
      'services.hero.status': 'Aktuálne prijímam nových klientov',

      // Services Page - CTAs
      'services.cta.badge': 'Pripravení zlepšiť svoju webovú stránku?',
      'services.cta.title': 'Premeňte svoju webovú stránku na <span>zdroj príjmov</span>',
      'services.cta.description': 'Vaša konkurencia napreduje, zatiaľ čo technické problémy vás každý deň stoja zákazníkov. Získajte technický audit, ktorý presne odhalí, čo je potrebné opraviť a začnite konvertovať viac návštevníkov na platiacich zákazníkov.',

      // Services - Service Cards
      'services.audit.title': 'Audit technického SEO',
      'services.audit.price': '$2,500',
      'services.audit.description': 'Komplexný audit technického SEO, ktorý odhalí, čo blokuje vašu viditeľnosť a konverzie. Získajte prioritizovaný plán na opravu kritických problémov a maximalizáciu potenciálu vašej webovej stránky.',
      'services.audit.feature1.title': 'Komplexná technická analýza',
      'services.audit.feature1.description': 'Kompletný audit zahŕňajúci technické SEO, výkon a používateľskú skúsenosť s viac ako 50 kontrolnými bodmi na identifikáciu všetkých problémov ovplyvňujúcich vašu stránku.',
      'services.audit.feature2.title': 'Prioritizovaný akčný plán',
      'services.audit.feature2.description': 'Jasný plán s opravami zoradenými podľa obchodného dopadu. Konkrétne odporúčania, ktoré váš tím môže okamžite implementovať pre dosiahnutie výsledkov.',
      'services.audit.feature3.title': '90-minútová strategická konzultácia',
      'services.audit.feature3.description': 'Individuálny strategický hovor na preskúmanie zistení, diskusiu o prioritách a vytvorenie plánu implementácie.',
      'services.audit.cta': 'Získajte audit',

      'services.monitoring.title': 'Monitorovanie technického SEO',
      'services.monitoring.price': '$2,000',
      'services.monitoring.price.unit': '/mesiac',
      'services.monitoring.description': 'Priebežné monitorovanie a optimalizácia na udržanie maximálneho výkonu. Pravidelná analýza zachytáva problémy včas a identifikuje nové príležitosti na rast.',
      'services.monitoring.feature1.title': 'Pravidelné monitorovanie výkonu',
      'services.monitoring.feature1.description': 'Týždenná expertná analýza na identifikáciu chýb pri crawlovaní a indexovaní a problémov s výkonom. Nepretržité monitorovanie upozorňuje na problémy včas, skôr ako ovplyvnia príjmy.',
      'services.monitoring.feature2.title': 'Mesačné optimalizačné reporty',
      'services.monitoring.feature2.description': 'Mesačné výkonnostné reporty s novými príležitosťami na optimalizáciu. Buďte pred aktualizáciami algoritmov a vylepšeniami konkurencie.',
      'services.monitoring.feature3.title': 'Prioritná podpora a konzultácie',
      'services.monitoring.feature3.description': '60-minútové mesačné strategické hovory plus prioritná emailová podpora pre naliehavé problémy.',
      'services.monitoring.cta': 'Začať monitorovanie',
      'services.monitoring.commitment': 'Minimálny záväzok 3 mesiace',

      'services.migration.title': 'Plánovanie migrácie webovej stránky',
      'services.migration.price': '$4,500',
      'services.migration.description': 'Ochráňte svoju návštevnosť a pozície počas migrácie webovej stránky. Komplexné plánovanie migrácie s auditmi pred a po migrácii na zaistenie nulových strát.',
      'services.migration.feature1.title': 'Stratégia a plánovanie pred migráciou',
      'services.migration.feature1.description': 'Podrobný audit a stratégia pred migráciou zahŕňajúca presmerovania, mapovanie URL a technické požiadavky. Kompletný plán na zachovanie všetkých pozícií a návštevnosti pri udržaní spokojnosti návštevníkov.',
      'services.migration.feature2.title': 'Audit a podpora po migrácii',
      'services.migration.feature2.description': 'Komplexný audit po migrácii na overenie správneho prenosu všetkého. Priebežná optimalizácia na zlepšenie výkonu nad úroveň pred migráciou.',
      'services.migration.feature3.title': 'Nepretržitá podpora a monitorovanie',
      'services.migration.feature3.description': 'Priebežná podpora počas celého procesu migrácie a pokračujúce monitorovanie po spustení.',
      'services.migration.cta': 'Naplánujte migráciu',

      // Services Section Headers
      'services.section.badge': 'Vyberte si službu',
      'services.section.title': 'Služby technického <span>SEO</span>',
      'services.section.subtitle': 'Prestaňte hádať. Začnite rásť. Získajte odborné znalosti v technickom SEO, ktoré premenia vašu webovú stránku na stroj generujúci príjmy.',

      // Service Cards Common
      'services.starting-at': 'Začína na',

      // What Makes Me Different Section
      'what-makes-me.badge': 'Prečo ja',
      'what-makes-me.title': 'Čo ma robí <span>iným</span>',
      'what-makes-me.subtitle': 'Technické SEO vedené vývojárom, ktoré premieňa problémy s výkonom na konkurenčné výhody. Akčné vylepšenia, ktoré zvyšujú príjmy.',
      'what-makes-me.card1.title': 'Vývojárska expertíza',
      'what-makes-me.card1.description': 'Viac ako 10 rokov skúseností s hlbokým technickým náhľadom na architektúru a výkon webových stránok.',
      'what-makes-me.card2.title': 'Jasné akčné plány',
      'what-makes-me.card2.description': 'Získajte akčné zoznamy úloh s podrobným návodom, ktoré váš tím môže okamžite implementovať.',
      'what-makes-me.card3.title': 'Budovanie samostatných tímov',
      'what-makes-me.card3.description': 'Získajte podrobné pokyny, ktoré vašmu tímu umožnia udržiavať excelentnosť dlho po našej spoločnej práci.',
      'what-makes-me.card4.title': 'Kolaboratívny prístup',
      'what-makes-me.card4.description': 'Spolupracujte so svojimi tímami na budovaní trvalých vylepšení s dlhodobým dopadom pre vašich používateľov.',

      // Consultant Page - Hero
      'consultant.hero.badge': 'Technická excelentnosť v SEO vedená vývojárom',
      'consultant.hero.title': 'Martin Stepánek, <span>expert na technické SEO</span>',
      'consultant.hero.description': 'Pomáham firmám vytvárať webové stránky, ktoré uprednostňujú spokojnosť používateľov aj výkonnosť príjmov.',
      'consultant.hero.rating': 'Považujem Martina za jedného z najlepších expertov na technické SEO na trhu.',
      'consultant.hero.rating.testimonial': true,
      'consultant.hero.rating.source': 'Overený klient na LinkedIn',
      'consultant.hero.testimonial': 'Považujem Martina za jedného z najlepších expertov na technické SEO na trhu.',
      'consultant.hero.testimonial.source': 'Overený klient na LinkedIn',
      'consultant.hero.status': 'Prijímam nových klientov',

      // Consultant Page - Experience Section
      'consultant.experience.badge': 'Prečo Martin',
      'consultant.experience.title': 'Čo ma robí <span>iným</span>',
      'consultant.experience.subtitle': 'Kombinujem hlbokú vývojárskú expertízu so znalosťou technického SEO. Táto kombinácia mi umožňuje riešiť zložité optimalizačné výzvy, ktoré vedú k merateľnému obchodnému rastu.',
      'consultant.experience.point1.title': 'Profesionálne webové vývojárske zručnosti',
      'consultant.experience.point1.description': 'Viac ako desaťročie praktických skúseností s vývojom kombinovaných s hlbokou expertízou v technickom SEO. Riešim zložité výzvy od podnikových migrácií až po pokročilú JavaScript optimalizáciu.',
      'consultant.experience.point2.title': 'Implementačné príručky pripravené na akciu',
      'consultant.experience.point2.description': 'Získajte podrobné, prioritizované zoznamy úloh s postupnými pokynmi a príkladmi kódu. Váš tím môže okamžite implementovať vylepšenia s jasnými, praktickými inštrukciami.',
      'consultant.experience.point3.title': 'Stratégia zameraná na príjmy',
      'consultant.experience.point3.description': 'Každá optimalizácia sa zameriava na merateľný obchodný dopad. Prioritizujem vylepšenia, ktoré priamo zvyšujú konverzie, zapojenie používateľov a rast zisku.',
      'consultant.experience.stats': 'Viac ako 50 úspešne optimalizovaných webov',
      'consultant.experience.testimonial': 'Pod Martinovým vedením náš tým výrazne zlepšil výkon dvoch vysoko navštevovaných webových stránok. Jeho metodický prístup k technickému SEO a schopnosť sprostredkovať zložité technické koncepty stále prinášajú pozoruhodné výsledky.',
      'consultant.experience.testimonial.source': 'Odporúčanie na LinkedIn',

      // Consultant Page - Services
      'consultant.services.title': 'Ako môžem <span>pomôcť vašej firme</span>',

      // Consultant Page - CTA
      'consultant.cta.badge': 'Pripravení transformovať svoj biznis?',
      'consultant.cta.title': 'Premeňte svoju webovú stránku na <span>zdroj príjmov</span>',
      'consultant.cta.description': 'Vaša konkurencia kradne vašu návštevnosť, zatiaľ čo vy bojujete s technickými problémami. Získajte odbornú pomoc, ktorá premení vašu webovú stránku na nezastaviteľný rastový stroj.',

      // Trusted Companies Section
      'trusted.title': 'Podporujem rast popredných firiem v odvetví',
      'trusted.subtitle': 'Dôverujú mi inovatívne spoločnosti',

      // Testimonials Section
      'testimonials.badge': 'Príbehy úspechu klientov',
      'testimonials.title': 'Skutočné výsledky od <span>skutočných klientov</span>',
      'testimonials.subtitle': 'Zistite, ako technická dokonalosť vedie k skutočným obchodným výsledkom.',
      'testimonials.cta': 'Viac príbehov úspechu',
      'testimonials.trust': 'Dôveruje mi viac ako 50 firiem',

      // Testimonial Content
      'testimonial.viktor.name': 'Viktor Zeman',
      'testimonial.viktor.position': 'CEO',
      'testimonial.viktor.company': 'LiveAgent & Post Affiliate Pro',
      'testimonial.viktor.quote': 'Martinovo vývojárske zázemie vytvorilo základ pre implementáciu sofistikovaných stratégií, najmä iniciatív v technickom SEO. S ním náš tým výrazne zlepšil výkon dvoch vysoko navštevovaných webových stránok.',

      'testimonial.daniel.name': 'Daniel Pison',
      'testimonial.daniel.position': 'CMO',
      'testimonial.daniel.company': 'Quality Unit',
      'testimonial.daniel.quote': 'Vďaka najmä Martinovým zručnostiam a expertíze sme dlhodobo dokázali konkurovať oveľa silnejším konkurentom v kvalite webových stránok. Považujem ho za jedného z najlepších expertov na technické SEO na trhu.',

      // Brutal Truth Section
      'brutal.title': 'Tvrdá <span>pravda</span> o vašej webovej stránke',
      'brutal.subtitle': 'Technické problémy ničia dôveru používateľov. Pomalé stránky, nefunkčná navigácia a zlá štruktúra frustrujú skutočných zákazníkov, ktorí sa snažia používať vašu stránku. Keď používatelia bojujú, váš biznis trpí.',

      'brutal.card1.badge': 'Štúdia Amazon',
      'brutal.card1.stat': '1%',
      'brutal.card1.subtitle': 'Strata príjmov na 100ms oneskorenie',
      'brutal.card1.title': 'Používatelia vnímajú každé oneskorenie',
      'brutal.card1.description': 'Amazon zistil, že používatelia vnímajú aj 100ms oneskorenia. Keď sú frustrovaní pomalým výkonom, opúšťajú nákupy - čo stojí firmy 1% príjmov za každých 100ms oneskorenia.',

      'brutal.card2.badge': 'Štúdia Google',
      'brutal.card2.stat': '53%',
      'brutal.card2.subtitle': 'Mobilní používatelia opúšťajú pomalé stránky',
      'brutal.card2.title': 'Trpezlivosť má svoje hranice',
      'brutal.card2.description': 'Používatelia vám dajú presne 3 sekundy, než sa rozhodnú, že vaša stránka nestojí za ich čas. Google zistil, že 53% zákazníkov odchádza po týchto 3 sekundách a odnáša svoj biznis inam.',

      'brutal.card3.badge': 'Používateľská skúsenosť',
      'brutal.card3.stat': '79%',
      'brutal.card3.subtitle': 'Sa nevráti po zlej skúsenosti',
      'brutal.card3.title': 'Prvý dojem sa počíta',
      'brutal.card3.description': '79% používateľov, ktorí čelili zlej skúsenosti s webom, vám nedá druhú šancu. Vyhľadávače a AI platformy sa spoliehajú na tie isté signály, ktoré vytvárajú dobrú používateľskú skúsenosť.',

      // Why Choose Me Section
      'why-me.badge': 'Prečo ja?',
      'why-me.title': 'Expert na technické SEO, ktorý <span>prináša skutočné výsledky</span>',
      'why-me.subtitle.part1': 'Špecializujem sa na poskytovanie merateľných vylepšení, ktoré vedú k skutočnému obchodnému rastu.',
      'why-me.subtitle.part2': 'Viac ako 10 rokov skúseností s optimalizáciou webových stránok pre vyhľadávače aj výnimočné používateľské skúsenosti.',
      'why-me.stats': '50+ úspešne optimalizovaných webov',
      'why-me.testimonial': 'Pod Martinovým vedením náš tým výrazne zlepšil výkon dvoch vysoko navštevovaných webových stránok. Jeho metodický prístup k technickému SEO a schopnosť sprostredkovať zložité technické koncepty stále prinášajú pozoruhodné výsledky.',

      'why-me.point1.title': 'Profesionálne webové vývojárske zručnosti',
      'why-me.point1.description': 'Kombinujem vývojársku expertízu so znalosťou SEO. Hlboké porozumenie technickým aspektom a architektúre mi umožňuje riešiť zložité výzvy.',

      'why-me.point2.title': 'Komplexný technický prístup',
      'why-me.point2.description': 'Špecializujem sa na technické SEO aj optimalizáciu výkonu. Každý aspekt technického základu vašej stránky spolupracuje na maximalizácii viditeľnosti vo vyhľadávačoch a AI platformách.',

      'why-me.point3.title': 'Merateľné obchodné výsledky',
      'why-me.point3.description': 'Od podnikových migrácií po rast startupov som pomohol firmám výrazne zvýšiť príjmy a organickú návštevnosť riešením zložitých technických SEO výziev.',

      // Why Audit Section
      'why-audit.badge': 'Prečo potrebujete audit',
      'why-audit.title': 'Prestaňte hádať. <span>Začnite vedieť</span>',
      'why-audit.subtitle': 'Nemôžete opraviť to, čo nevidíte. Môj audit odhalí skryté technické problémy, ktoré zabíjajú vaše konverzie a príjmy s jasným plánom na ich opravu.',

      'why-audit.card1.title': 'Odhaľte zabijakov príjmov',
      'why-audit.card1.description': 'Nájdite technické problémy, ktoré vás ticho stoja peniaze. Zistite presne, čo bráni návštevníkom v konverzii a dokončení nákupov.',
      'why-audit.card1.badge': 'Kompletná technická analýza',

      'why-audit.card2.title': 'Maximalizujte dopad na príjmy',
      'why-audit.card2.description': 'Zamerajte sa na to, čo je najdôležitejšie. Prioritizujem opravy podľa dopadu na príjmy, pričom najprv riešim príležitosti s vysokými konverziami pre rýchlejšiu návratnosť investícií.',
      'why-audit.card2.badge': 'Nájdené príležitosti pre príjmy',

      'why-audit.card3.title': 'Zachyťte stratené príjmy',
      'why-audit.card3.description': 'Identifikujte, kde konkurencia kradne vašich zákazníkov a získajte technické vylepšenia, ktoré vám pomôžu získať späť trhový podiel a príjmy.',
      'why-audit.card3.badge': 'Konkurenčná výhoda',

      // About Content
      'about.subtitle': 'Špecializujem sa na poskytovanie merateľných vylepšení, ktoré vedú k skutočnému obchodnému rastu. Viac ako 10 rokov skúseností s optimalizáciou webových stránok pre vyhľadávače aj výnimočné používateľské skúsenosti.',

      'about.point1.title': 'Profesionálne webové vývojárske zručnosti',
      'about.point1.description': 'Kombinujem vývojársku expertízu so znalosťou SEO. Hlboké porozumenie technickým aspektom a architektúre mi umožňuje riešiť zložité výzvy.',

      'about.point2.title': 'Komplexný technický prístup',
      'about.point2.description': 'Špecializujem sa na technické SEO aj optimalizáciu výkonu. Každý aspekt technického základu vašej stránky spolupracuje na maximalizácii viditeľnosti vo vyhľadávačoch a AI platformách.',

      'about.point3.title': 'Merateľné obchodné výsledky',
      'about.point3.description': 'Od podnikových migrácií po rast startupov som pomohol firmám výrazne zvýšiť príjmy a organickú návštevnosť riešením zložitých technických SEO výziev.',

      // Form Messages
      'form.newsletter.success': 'Skvelé! Teraz skontrolujte svoj email a potvrďte odber.',
      'form.checklist.success': 'Skvelé! Teraz skontrolujte svoj email a potvrďte odber a pošlem vám kópiu kontrolného zoznamu.',
      'form.ebook.success': 'Skvelé! Teraz skontrolujte svoj email a potvrďte odber a pošlem vám kópiu e-knihy.',

      // Common UI Elements
      'ui.more-success-stories': 'Viac príbehov úspechu',
      'ui.free-consultation': 'Bezplatná konzultácia',
      'ui.no-commitment': 'Žiadny záväzok',
      'ui.currently-available': 'Momentálne k dispozícii',
      'ui.accepting-clients': 'Prijímam nových klientov',
      'ui.trusted-by-businesses': 'Dôveruje mi viac ako 50 firiem',

      // Badge Text
      'badge.about-martin': 'O Martinovi',
      'badge.user-experience': 'Stratég používateľskej skúsenosti a špecialista na technické SEO',
      'badge.expert-insights': 'Poznatky o používateľskej skúsenosti',
      'badge.ux-transformations': 'Transformácie používateľskej skúsenosti',
      'badge.results-driven': 'Zamerané na výsledky',
      'badge.developer-led': 'Vedené vývojárom',
      'badge.why-choose': 'Prečo si vybrať',
      'badge.client-success': 'Úspech klientov',
      'badge.choose-service': 'Vyberte si službu',

      // Common Headlines
      'headline.transform-barriers': 'Transformujte technické prekážky na konkurenčné výhody',
      'headline.ux-strategy': 'Aká je vaša stratégia používateľskej skúsenosti?',
      'headline.ready-transform': 'Pripravení transformovať svoj biznis?',
      'headline.turn-into-revenue': 'Premeňte svoju webovú stránku na zdroj príjmov',

      // Technical SEO Terms
      'tech.crawlability': 'Prehľadávateľnosť',
      'tech.indexability': 'Indexovateľnosť',
      'tech.core-web-vitals': 'Core Web Vitals',
      'tech.page-speed': 'Rýchlosť stránky',
      'tech.mobile-optimization': 'Mobilná optimalizácia',
      'tech.structured-data': 'Štruktúrované dáta',
      'tech.site-architecture': 'Architektúra stránky',
      'tech.url-structure': 'Štruktúra URL',
      'tech.redirect-chains': 'Reťazce presmerovaní',
      'tech.broken-links': 'Nefunkčné odkazy',
      'tech.duplicate-content': 'Duplicitný obsah',
      'tech.canonicalization': 'Kanonizácia',
      'tech.hreflang': 'Hreflang',
      'tech.xml-sitemap': 'XML sitemap',
      'tech.robots-txt': 'Robots.txt',
      'tech.schema-markup': 'Schema markup',
      'tech.javascript-seo': 'JavaScript SEO',
      'tech.rendering': 'Renderovanie',
      'tech.lighthouse-score': 'Lighthouse skóre',
      'tech.ttfb': 'Time to First Byte',
      'tech.lcp': 'Largest Contentful Paint',
      'tech.cls': 'Cumulative Layout Shift',
      'tech.fid': 'First Input Delay',
      'tech.inp': 'Interaction to Next Paint',

      // Additional CTA variations
      'cta.get-started': 'Začať',
      'cta.learn-more': 'Dozvedieť sa viac',
      'cta.book-call': 'Rezervovať hovor',
      'cta.get-audit': 'Získať audit',
      'cta.start-monitoring': 'Začať monitorovanie',
      'cta.plan-migration': 'Naplánovať migráciu',
      'cta.see-how': 'Pozrite sa ako',
      'cta.discover-more': 'Objaviť viac',
      'cta.contact-me': 'Kontaktujte ma',
      'cta.lets-talk': 'Porozprávajme sa',

      // Status Messages
      'status.available': 'K dispozícii',
      'status.taking-clients': 'Prijímam klientov',
      'status.limited-spots': 'Obmedzené miesta',
      'status.booking-now': 'Rezervujte teraz',
    },
  },
};
