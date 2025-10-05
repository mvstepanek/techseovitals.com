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
      'url.services': '/technicke-seo-sluzby/',
      'url.consultant': '/konzultant-technicke-seo/',
      'url.blog': '/blog/',
      'url.contact': '/kontakt/',
      'url.newsletter': '/newsletter/',
      'url.checklist': '/technicky-seo-checklist/',
      'url.migration': '/seo-migracny-checklist/',
      'url.customers': '/klienti/',
      'url.thank-you': '/ste-prihlaseni/',
      'url.performance-metrics': '/5-klucovych-webovych-metrik-pre-kazdeho-podnikatela/',
      'url.privacy-policy': '/ochrana-osobnych-udajov/',
      'url.terms': '/obchodne-podmienky/',

      // Navigation
      'nav.home': 'Domov',
      'nav.services': 'Služby',
      'nav.consultant': 'Konzultant',
      'nav.blog': 'Blog',
      'nav.contact': 'Kontakt',
      'nav.newsletter': 'Newsletter',
      'nav.checklist': 'Checklist',
      'nav.about': 'O mne',
      'nav.customers': 'Klienti',
      'nav.skip-to-content': 'Prejsť na hlavný obsah',
      'nav.open-menu': 'Otvoriť menu',
      'nav.close-menu': 'Zatvoriť menu',

      // TopBar
      'topbar.free-resources': 'Bezplatné zdroje',
      'topbar.technical-seo-checklist': 'Technický SEO checklist',
      'topbar.website-migration-checklist': 'SEO migračný checklist',
      'topbar.web-performance-metrics': '5 kľúčových webových metrík pre každého podnikateľa',

      // Hero section
      'hero.badge.expertise': 'Viac ako 10 rokov odborných skúseností',
      'hero.title': 'Nenechajte <span>zákazníkov</span> odísť ku konkurencii',
      'hero.description': 'Pomáham firmám zvyšovať tržby s rýchlejšími a lepšie optimalizovanými webovými stránkami. Špecializujem sa na technické SEO a optimalizáciu výkonu - kľúčové faktory, ktoré rozhodujú o tom, či návštevníci zostanú a nakúpia, alebo odídu ku konkurencii.',
      'hero.cta.primary': ' Získať bezplatnú analýzu webu',
      'hero.testimonial': 'Martina považujem za jedného z najlepších expertov na technické SEO na trhu.',
      'hero.testimonial.source': 'Overený klient na LinkedIn',
      'hero.status.available': 'Prijímam nových klientov',

      // Common CTAs
      'cta.free-check': ' Získať bezplatnú analýzu webu',
      'cta.start-transformation': 'Začať bezplatnou analýzou webu',
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
      'trust.no-commitment': 'Bez záväzkov',
      'trust.projects': 'Viac ako 50 úspešných projektov',
      'trust.websites-optimized': 'Viac ako 50 úspešne optimalizovaných webov',
      'trust.businesses-trust': 'Viac ako 50 firiem mi dôveruje',

      // Feature Grid
      'features.badge': 'Prečo je technické SEO kľúčové?',
      'features.title': 'Používatelia prví. <span>Vyhľadávače následujú</span>',
      'features.subtitle': 'Keď navštívite webovú stránku a všetko funguje bezchybne, ani si to neuvedomíte. Ale keď je pomalá, chaotická alebo nefunkčná, odídete okamžite. Technické SEO a výkon rozhodujú o tom, či návštevník zostane a stane sa zákazníkom alebo odíde a už sa nevráti.',

      'features.visitors-to-customers.title': 'Premeňte návštevníkov na zákazníkov',
      'features.visitors-to-customers.description': 'Každá sekunda je rozhodujúca. Keď sa stránka načíta rýchlo a používatelia nájdu to, čo potrebujú, zostanú a konvertujú. Pomalé stránky a chaotická navigácia ich však pošlú priamo ku konkurencii.',

      'features.remove-friction.title': 'Zjednodušte cestu k nákupu a zvýšte predaje',
      'features.remove-friction.description': 'Nefunkčné odkazy, pomalé načítavanie a zlá štruktúra frustrujú návštevníkov. Technická optimalizácia odstráni tieto prekážky a vytvorí plynulú cestu od prvého kontaktu až po úspešnú konverziu.',

      'features.maximize-visibility.title': 'Zvýšte svoju viditeľnosť tam, kde na tom záleží',
      'features.maximize-visibility.description': 'Technicky dokonalé webové stránky dominujú vo vyhľadávačoch a AI platformy ako ChatGPT ich častejšie odporúčajú. Profesionálne technické SEO zabezpečí, že vás zákazníci nájdu všade, kde vás hľadajú.',

      // CTA Section
      'cta.badge': 'Pripravení premeniť návštevníkov na zákazníkov?',
      'cta.title': 'Poskytnite návštevníkom skúsenosť, <span>ktorú si zaslúžia</span>',
      'cta.description': 'Vaša webová stránka môže vyzerať dokonale, ale pod povrchom skrýva technické problémy, ktoré potichu odrádzajú potenciálnych zákazníkov. Odhaľte, čo skutočne blokuje konverzie a ako to efektívne vyriešiť.',

      // Newsletter
      'newsletter.title': 'Zostaňte o krok vpred',
      'newsletter.description': 'Získajte praktické informácie o technickom SEO a výkone webu priamo do vašej schránky.',
      'newsletter.placeholder': 'Zadajte váš email',
      'newsletter.button': 'Prihlásiť sa',
      'newsletter.success': 'Skvelé! Teraz skontrolujte svoj email a potvrďte odber.',

      // Blog
      'blog.title': 'Najnovšie články o technickom SEO',
      'blog.description': 'Zostaňte napred s praktickými stratégiami z oblasti technického SEO, tipmi na optimalizáciu výkonu a dôležitými novinkami.',
      'blog.latest': 'Najnovšie články',
      'blog.read-time': 'min čítania',
      'blog.share-on': 'Zdieľať na',
      'blog.cta.badge': 'Pripravení transformovať svoju webovú stránku?',
      'blog.cta.title': 'Premeňte svoju webovú stránku na',
      'blog.cta.description': 'Aplikujte tieto poznatky na svoju webovú stránku. Získajte komplexný technický audit, ktorý odhalí presne to, čo brzdí váš výkon a ako to napraviť.',
      'blog.author.name': 'Martin Štěpánek',
      'blog.author.bio': 'S viac ako 10 rokmi skúseností s vývojom a optimalizáciou webových stránok som sa naučil, že technická dokonalosť vedie k obchodnému úspechu. Pomáham firmám maximalizovať potenciál ich webových stránok prostredníctvom strategického technického SEO a vylepšení výkonu, ktoré vytvárajú lepšiu skúsenosť pre používateľov a lepšie výsledky pre firmy.',

      'blog.hero.badge': 'Bezplatné praktické rady',
      'blog.hero.title': 'Blog o <span>technickom SEO</span>',
      'blog.hero.description': 'Dominujte v technickom SEO s pokročilými stratégiami, expertnými metódami optimalizácie výkonu a inovatívnymi riešeniami.',

      // Footer
      'footer.heading': 'Pätička',
      'footer.description': 'Konzultant technického SEO a optimalizácie rýchlosti stránok s viac ako 10 rokmi skúseností v oblasti vývoja webových stránok.',
      'footer.services': 'Služby',
      'footer.social.linkedin': 'LinkedIn',
      'footer.social.bluesky': 'Bluesky',
      'footer.social.youtube': 'YouTube',
      'footer.copyright': '© 2024 - 2025 TechSEO Vitals. Všetky práva vyhradené.',
      'footer.privacy': 'Zásady ochrany osobných údajov',
      'footer.terms': 'Podmienky používania',
      'footer.quick-links': 'Rýchle linky',
      'footer.resources': 'Bezplatné zdroje',
      'footer.connect': 'Spojte sa',

      // Cookie Consent
      'cookie.heading': 'Zdravím!',
      'cookie.description': 'Používam pár cookies, aby sme vám spríjemnil prehliadanie a lepšie pochopili, aký obsah máte najradšej.',
      'cookie.privacy-link': 'Prečítajte si Zásady ochrany súkromia',
      'cookie.decline': 'Odmietnuť',
      'cookie.accept': 'Prijať',

      // Meta descriptions
      'meta.home.title': 'TechSEO Vitals s Martinom Štěpánkom',
      'meta.home.description': 'Pomáham firmám zvyšovať tržby s rýchlejšími a lepšie optimalizovanými webovými stránkami. Špecializujem sa na technické SEO a optimalizáciu výkonu.',

      'meta.services.title': 'Technické SEO služby - TechSEO Vitals',
      'meta.services.description': 'Profesionálne technické SEO služby: komplexný audit webu, nepretržité monitorovanie výkonu a bezpečná migrácia stránky. Eliminujte technické problémy, ktoré vás pripravujú o zákazníkov, a zvýšte svoje tržby.',

      'meta.consultant.title': 'Konzultant technického SEO - Martin Štěpánek',
      'meta.consultant.description': 'Konzultant technického SEO s viac ako 10 rokmi skúseností v programovaní a optimalizácii webových stránok. Pomáham firmám zvýšiť tržby prostredníctvom technickej optimalizácie a lepšieho výkonu.',

      'meta.blog.title': 'Blog o technickom SEO - TechSEO Vitals',
      'meta.blog.description': 'Expertné poznatky o technickom SEO, optimalizácii výkonu webu a používateľskej skúsenosti. Naučte sa stratégie na zlepšenie viditeľnosti a konverzií svojho webu.',

      'meta.contact.title': 'Kontakt - TechSEO Vitals',
      'meta.contact.description': 'Ozvite sa pre bezplatnú konzultáciu technického SEO. Porozprávajme sa o tom, ako zlepšiť výkon vášho webu a viditeľnosť v Google.',

      'meta.404.title': '404 - Stránka nenájdená - TechSEO Vitals',
      'meta.404.description': 'Stránka, ktorú hľadáte, neexistuje. Preskúmajte naše služby technického SEO, blogové posty a bezplatné zdroje.',

      'meta.newsletter.title': 'Newsletter - TechSEO Vitals',
      'meta.newsletter.description': 'Prihláste sa na odber a získajte praktické poznatky o technickom SEO a výkone webu priamo do schránky. Zostaňte o krok vpred s expertnými tipmi a stratégiami.',

      'meta.thank-you.title': 'Ďakujeme - TechSEO Vitals',
      'meta.thank-you.description': 'Ďakujeme za prihlásenie! Skontrolujte si email a potvrďte prihlásenie, aby ste získali bezplatné zdroje technického SEO.',

      'meta.checklist.title': 'Technický SEO checklist - TechSEO Vitals',
      'meta.checklist.description': 'Bezplatný technický SEO checklist s viac ako 100 kontrolnými bodmi. Komplexný sprievodca optimalizáciou webovej stránky pre lepšie pozície vo vyhľadávačoch a vyššie konverzie.',

      'meta.migration.title': 'SEO migračný checklist - TechSEO Vitals',
      'meta.migration.description': 'Bezplatný SEO migračný checklist s viac ako 50 kontrolnými bodmi pre bezpečnú migráciu webovej stránky. Eliminujte riziká straty organickej návštevnosti a zachovajte svoje pozície vo vyhľadávačoch.',

      'meta.customers.title': 'Príbehy úspechu zákazníkov - TechSEO Vitals',
      'meta.customers.description': 'Pozrite sa, ako sme pomohli firmám zlepšiť ich technické SEO, výkon webu a organickú návštevnosť. Skutočné výsledky od skutočných klientov.',

      // 404 Page
      '404.title': 'Ups! Stránka sa nenašla',
      '404.description': 'Vyzerá to, že sa táto stránka stratila v bludisku technického SEO. Obsah, ktorý hľadáte bol možno premenovaný, vymazaný, alebo nikdy neexistoval.',
      '404.cta.home': 'Na domovskú stránku',
      '404.cta.blog': 'Prečítať si niečo z blogu',
      '404.popular-pages.title': 'Oblúbené stránky',
      '404.popular-pages.services': 'Služby',
      '404.popular-pages.newsletter': 'Newsletter',
      '404.popular-pages.about': 'O mne',
      '404.popular-pages.contact': 'Kontakt',
      '404.seo-tip.title': 'Technický SEO tip',
      '404.seo-tip.description': 'Dobre navrnutá 404 stránka s užitočnou navigáciou môže znížiť mieru okamžitých odchodov a zlepšiť používateľskú skúsenosť. Vždy zahrňte odkazy na oblúbené stránky a jasnú cestu späť na hlavnú stránku!',

      // Newsletter Page
      'newsletter.hero.badge': 'Nová epizóda každé dva týždne',
      'newsletter.hero.title': 'Praktické <span>technické SEO</span> tipy, ktoré fungujú',
      'newsletter.hero.description': 'Odhaľte, ako najúspešnejšie firmy transformujú svoje webové stránky na výkonné predajné nástroje. Získajte pokročilé technické SEO stratégie a metódy optimalizácie výkonu, ktoré zabezpečia skvelé výsledky.',
      'newsletter.hero.trust-signals': 'Odporúčané najlepšími SEO expertmi',
      'newsletter.form.title': 'Prihlásiť sa teraz',
      'newsletter.form.subtitle': 'Nové tipy každé dva týždne',
      'newsletter.form.first-name': 'Krstné meno',
      'newsletter.form.email': 'Email',
      'newsletter.form.submit': 'Prihlásiť sa',
      'newsletter.form.success': 'Super! Skontrolujte si teraz email a potvrďte prihlásenie.',
      'newsletter.badge': 'Newsletter',
      'newsletter.subscribe': 'Prihlásiť sa',
      'newsletter.section.title': 'Bezplatné <span class="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">technické SEO</span> tipy a analýzy',
      'newsletter.section.title.part1': 'Bezplatné <span class="text-transparent bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text">technické SEO</span> tipy a analýzy',
      'newsletter.section.description': 'Každé dva týždne posielam praktické tipy na zlepšenie technického SEO a výkonu webovej stránky. Žiadne teórie, iba overené postupy s preukazateľnými výsledkami.',
      'newsletter.section.recommended': 'Odporúčané najlepšími SEO expertmi',
      'newsletter.section.no-spam': 'Žiadny spam. Odhlásenie kedykoľvek jedným klikom.',
      'newsletter.section.consent': 'Prihlásením súhlasím so',
      'newsletter.section.and': 'a',
      'newsletter.section.english-only': 'Newsletter je iba v angličtine',

      // Newsletter Content Section
      'newsletter-content.badge': 'Čo získate',
      'newsletter-content.title': 'Čo je v každej <span>epizóde</span>',
      'newsletter-content.subtitle': 'Praktické stratégie technického SEO a optimalizácie výkonu, ktoré vám pomôžu vytvoriť lepšiu používateľskú skúsenosť a zvýšiť svoj ranking v Google a viditeľnosť v AI.',
      'newsletter-content.card1.title': 'Expertné analýzy',
      'newsletter-content.card1.description': 'Hlboké ponory do trendov technického SEO, prípadové štúdie z reálnych webov a techniky optimalizácie výkonu, ktoré skutočne fungujú.',
      'newsletter-content.card1.label': 'Hlboké poznatky',
      'newsletter-content.card2.title': 'Praktické sprievodcovia',
      'newsletter-content.card2.description': 'Postupy krok za krokom, ktoré môžete použiť okamžite. Žiadne zbytočnosti - iba praktický návod s jasnými príkladmi pred/po.',
      'newsletter-content.card2.label': 'Akciovateľné',
      'newsletter-content.card3.title': 'Trendy v odvetví',
      'newsletter-content.card3.description': 'Najnovšie informácie o zmenách vyhľadávacieho algoritmu, vývoji AI a nových príležitostiach optimalizácie, o ktorých potrebujete vedieť.',
      'newsletter-content.card3.label': 'Zostaňte v obraze',

      // 5 Performance Metrics Page
      'performance-metrics.badge': 'Prestaňte strácať zákazníkov kvôli pomalej webovej stránke',
      'performance-metrics.title': '<span>5 kľúčových webových metrík,</span> ktoré skutočne prinášajú tržby',
      'performance-metrics.subtitle': 'Objavte, ktoré metriky v rámci technického SEO a výkonu priamo ovplyvňujú spokojnosť zákazníkov a príjmy. Naučte sa sledovať to, čo skutočne zlepšuje konverzie.',
      'performance-metrics.rating': '50+ firiem si stiahlo túto e-knihu',
      'performance-metrics.form.title': 'Získajte <span>bezplatnú e-knihu</span>',
      'performance-metrics.form.subtitle': 'Doručenie do vašej e-mailovej schránky',
      'performance-metrics.form.button': 'Získať bezplatnú e-knihu',
      'performance-metrics.form.english-only': 'E-kniha je iba v angličtine',

      // Newsletter Benefits Section
      'newsletter-benefits.badge': 'Prečo sa prihlásiť',
      'newsletter-benefits.title': 'Prečo majitelia firiem <span>dôverujú tomuto newsletteru</span>',
      'newsletter-benefits.subtitle': 'Newsletter, ktorý transformuje váš prístup k používateľskej skúsenosti a technickej optimalizácii.',
      'newsletter-benefits.stat1.value': '10+',
      'newsletter-benefits.stat1.label': 'Rokov skúseností',
      'newsletter-benefits.stat2.value': '2×',
      'newsletter-benefits.stat2.label': 'Mesačne',
      'newsletter-benefits.stat3.value': '100 %',
      'newsletter-benefits.stat3.label': 'Actionable obsah',
      'newsletter-benefits.card1.title': 'Rýchlejšie rozhodnutia',
      'newsletter-benefits.card1.description': 'Prestaňte sa domnievať pri svojich technických rozhodnutiach. Získajte jasný návod na to, čo funguje, čo nie a prečo je to dôležité pre vašu špecifickú situáciu.',
      'newsletter-benefits.card2.title': 'Konkurenčná výhoda',
      'newsletter-benefits.card2.description': 'Naučte sa optimalizačné techniky, ktoré väčšina webov prehliadne. Predbehnite zmeny pred tým, než zasiahnu vaše rankingy a odhaľte príležitosti, ktoré ostatní prehliadnu.',
      'newsletter-benefits.card3.title': 'Merateľný rast',
      'newsletter-benefits.card3.description': 'Sledujte transformáciu svojho webu s lepším zapojením používateľov, lepšou viditeľnosťou v Google a vyššími tržbami cez osvedčené optimalizačné techniky.',

      // Thank You Page
      'thank-you.hero.badge': 'Prihlásenie na odber newslettera potvrdené',
      'thank-you.hero.title': 'Ďakujem za <span>prihlásenie!</span>',
      'thank-you.hero.description': 'Váš email bol potvrdený a teraz ste prihlásení na odber TechSEO Vitals newsletteru. Už čoskoro môžete očakávať prvú epizódu vo svojej e-mailovej schránke.',
      'thank-you.hero.checklist-notice': 'Ak ste požiadali o získanie bezplatnej kópie checklistu alebo e-knihy, odkaz nájdete v priebehu pár minút v ďalšom e-maile!',
      'thank-you.hero.cta.services': 'Technické SEO služby',
      'thank-you.hero.cta.blog': 'Najnovšie články',

      // Checklist Page
      'checklist.hero.badge': 'Komplexná optimalizácia technického SEO',
      'checklist.hero.title': 'Získajte svoj <span>technický SEO checklist</span>',
      'checklist.hero.description': 'Kompletný checklist pre technické SEO pokrývajúci prehľadávateľnosť, indexovateľnosť a ďalšie optimalizácie. Viac ako 100 praktických bodov, ktoré pomôžu zmeniť návštevníkov na zákazníkov.',
      'checklist.hero.trust-signals': 'Viac ako 100 ľudí už používa tento checklist',
      'checklist.hero.cta': 'Stiahnuť kontrolný zoznam',
      'checklist.form.title': 'Získajte svoj bezplatný checklist',
      'checklist.form.subtitle': 'Doručenie do vašej e-mailovej schránky',
      'checklist.form.first-name': 'Krstné meno',
      'checklist.form.email': 'Email',
      'checklist.form.success': 'Super! Skontrolujte si teraz email a potvrďte prihlásenie - pošlem vám kópiu kontrolného zoznamu.',
      'checklist.form.submit': 'Získať bezplatný checklist',
      'checklist.form.english-only': 'Checklist je iba v angličtine',
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
      'checklist.benefits.title': 'Opravte to, čo odháňa <span>vašich zákazníkov</span>',
      'checklist.benefits.subtitle': 'Prestaňte strácať zákazníkov kvôli technickým problémom. Získajte plán, ktorý zlepší používateľskú skúsenosť a zároveň prinesie nové tržby.',
      'checklist.benefits.benefit1.title': 'Kompletné technické základy',
      'checklist.benefits.benefit1.description': 'Zabezpečte, aby vyhľadávače mohli správne prehľadávať, indexovať a pochopiť váš obsah. Odstráňte prekážky, ktoré bránia vášmu webu v lepšom umiestnení.',
      'checklist.benefits.benefit1.tagline': 'Prehľadávateľnosť a indexovateľnosť',
      'checklist.benefits.benefit2.title': 'Odhaľte problémy, ktoré vás pripravujú o tržby',
      'checklist.benefits.benefit2.description': 'Identifikujte technické problémy, ktoré vás pripravujú o zákazníkov každý deň. Zistite, čo odrádza návštevníkov a ako to opraviť čím skôr.',
      'checklist.benefits.benefit2.tagline': '100+ odporúčaní',
      'checklist.benefits.benefit3.title': 'Viditeľnosť vo vyhľadávačoch',
      'checklist.benefits.benefit3.description': 'Zdokonaľte architektúru vášho webu, Schema Markup a ďalšie technické zlepšenia pre maximálne pochopenie obsahu vyhľadávačmi.',
      'checklist.benefits.benefit3.tagline': 'Zlepšená viditeľnosť vo vyhľadávaní',

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
      'migration.benefits.badge': 'Chráňte svoje SEO investície',
      'migration.benefits.title': 'Minimalizujte riziká <span>migrácie</span>',
      'migration.benefits.subtitle': 'Väčšina webových stránok stráca po migrácii významnú návštevnosť a tržby. Tento checklist pomáha minimalizovať riziká a chrániť vašu viditeľnosť vo vyhľadávačoch.',
      'migration.benefits.benefit1.title': 'Používateľská skúsenosť bez kompromisov',
      'migration.benefits.benefit1.description': 'Vaša webová stránka zostane rýchla, funkčná a intuitívna. Žiadne spomalenia ani pokazené funkcie, ktoré by mohli odradiť zákazníkov.',
      'migration.benefits.benefit1.tagline': 'Migrácia bez výpadkov',
      'migration.benefits.benefit2.title': 'Vaše pozície zostanú zachované',
      'migration.benefits.benefit2.description': 'Roky budované pozície vo vyhľadávačoch sú v bezpečí. Správne presmerovania a technické optimalizácie zabezpečia, že nestratíte cennú organickú návštevnosť.',
      'migration.benefits.benefit2.tagline': '50+ kontrolných bodov',
      'migration.benefits.benefit3.title': 'Tržby z webovej stránky v bezpečí',
      'migration.benefits.benefit3.description': 'Migrácia s minimálnym rizikom strát tržieb. Minimálne zmeny v návštevnosti, žiadne stratené objednávky a stabilné príjmy.',
      'migration.benefits.benefit3.tagline': 'S dôrazom na vaše obchodné ciele',

      // About Section
      'about.badge': 'O mne',
      'about.title': 'Čo ma robí <span>iným</span>',
      'about.subtitle': 'Zameriavam sa na praktické zlepšenia, ktoré zvyšujú tržby. Už viac ako 10 rokov zlepšujem webové stránky tak, aby si získali dôveru ľudí a vyhľadávačov a poskytovali výbornú používateľskú skúsenosť návštevníkom.',
      'about.point1.title': '10+ rokov skúsenosti s webovým vývojom',
      'about.point1.description': 'Kombinujem programátorské znalosti so SEO expertízou. Rozumiem technickým detailom a architektúre webových stránok, čo mi umožňuje vyriešiť aj tie najzložitejšie problémy.',
      'about.point2.title': 'Komplexný technický prístup',
      'about.point2.description': 'Zameriavam sa na technické SEO aj optimalizáciu výkonu. Všetky technické prvky vašej webovej stránky sa podieľajú na tom, aby ste boli lepšie viditeľní vo vyhľadávačoch aj na AI platformách.',
      'about.point3.title': 'Overené výsledky',
      'about.point3.description': 'Od startupov až po veľké projekty. Pomohol som firmám výrazne zvýšiť tržby a príjmy z organickej návštevnosti vyriešením ich technických problémov.',
      'about.stats.title': 'Viac ako 50 úspešne optimalizovaných webových stránok',
      'about.stats.subtitle': 'Spolupracoval som s firmami po celom svete',

      // Migration Checklist Page
      'migration.hero.badge': 'Migračný plán pre zachovanie organického rastu',
      'migration.hero.title': 'Získajte svoj <span>SEO migračný checklist</span>',
      'migration.hero.description': 'Väčšina migrácií webových stránok zlyháva kvôli slabému plánovaniu, čo následne spôsobuje pokles návštevnosti a strátu tržieb. Tento kompletný checklist zníži riziká migrácie a chráni vašu viditeľnosť vo vyhľadávačoch.',
      'migration.hero.trust-signals': 'Viac ako 100 ľudí už používa tento checklist',
      'migration.hero.cta': 'Stiahnuť kontrolný zoznam',
      'migration.form.title': 'Získajte svoj bezplatný checklist',
      'migration.form.subtitle': 'Doručenie do vašej e-mailovej schránky',
      'migration.form.first-name': 'Krstné meno',
      'migration.form.email': 'Email',
      'migration.form.submit': 'Získať bezplatný checklist',
      'migration.form.success': 'Super! Skontrolujte si teraz email a potvrďte prihlásenie - pošlem vám kópiu kontrolného zoznamu.',
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
      'customers.hero.badge': 'Výsledky overené klientami',
      'customers.hero.title': 'Strategický partner pre <span>rastúce firmy</span>',
      'customers.hero.description': 'Od SaaS po e-commerce, firmy využívajú technické SEO a optimalizáciu rýchlosti na vytvorenie skvelej používateľskej skúsenosti, ktorá pozitívne ovplyvňuje konverzie a tržby.',
      'customers.hero.cta': 'Získať bezplatnú analýzu webu',
      'customers.hero.rating': 'Spolupracoval som už s viac ako 50 firmami',

      // Customers Page - Case Studies Section
      'customers.case-studies.badge': 'Prípadové štúdie',
      'customers.case-studies.title': 'Technická dokonalosť, ktorá <span>slúži návštevníkom</span>',
      'customers.case-studies.subtitle': 'Inšpirujte sa príbehmi firiem, ktoré transformovali svoje webové stránky na platformy prinášajúce skvelé výsledky',

      // Customers Page - TOUCHIT Case Study
      'customers.touchit.alt': 'TOUCHIT',
      'customers.touchit.category': 'Technologický spravodajský portál',
      'customers.touchit.description': 'Modernizácia infrastruktúry a profesionálna optimalizácia výkonu pre jeden z najnavštevovanejších technologických portálov na Slovensku.',
      'customers.touchit.feature1': 'Komplexná migrácia infrastruktúry a CMS',
      'customers.touchit.feature2': 'Rýchlejšia webová stránka a lepšie Core Web Vitals',
      'customers.touchit.feature3': 'Dozor nad externými agentúrami a konzultácie dizajnu',

      // Customers Page - expertise.ai Case Study
      'customers.expertiseai.alt': 'expertise.ai',
      'customers.expertiseai.category': 'Demand Conversion AI Platforma',
      'customers.expertiseai.description': 'Migrácia dvoch značiek do jednej platformy a profesionálna optimalizácia webovej stránky pre maximálnu rýchlosť a konverzie.',
      'customers.expertiseai.feature1': 'Komplexná migrácia dvoch značiek do jednej',
      'customers.expertiseai.feature2': 'Nová architektúra webovej stránky a SEO stratégia',
      'customers.expertiseai.feature3': 'Optimalizácia výkonu a efektivity prehľadávania',

      // Customers Page - Testimonials Section
      'customers.testimonials.badge': 'Úspešní klienti',
      'customers.testimonials.title': 'Čo hovoria <span>klienti</span>',
      'customers.testimonials.subtitle': 'Skutočné hodnotenia od firiem, ktoré dosiahli lepšie konverzie, obrat a organický rast.',

      // Customers Page - Testimonial: Daniel Pison
      'customers.testimonial.pison.name': 'Daniel Pison',
      'customers.testimonial.pison.position': 'CMO',
      'customers.testimonial.pison.company': 'Quality Unit',
      'customers.testimonial.pison.text': 'Martin bol vedúcim členom tímu zodpovedného za technický stav webových stránok liveagent.com a postaffiliatepro.com. Vďaka jeho schopnostiam a odbornosti sme sa dlho dokázali konkurovať silnejším firmám na trhu.\nUrčite by som bol rád, keby som s Martinom spolupracoval aj v budúcnosti, považujem ho za jedného z najlepších odborníkov na technické SEO na trhu. Určite odporúčam spoluprácu s ním.',
      'customers.testimonial.pison.image': '/assets/images/testimonials/daniel-pison.jpg',

      // Customers Page - Testimonial: Tomas Buransky
      'customers.testimonial.buransky.name': 'Tomáš Buranský',
      'customers.testimonial.buransky.position': 'Marketing Manager',
      'customers.testimonial.buransky.company': 'TOUCHIT',
      'customers.testimonial.buransky.text': 'S Martinom spolupracujeme už niekoľko rokov a veľmi si ceníme jeho profesionalitu a systematický prístup. Vždy berie do úvahy naše obchodné ciele. Má nielen detailné znalosti SEO, ale vie aj rozložiť stratégie na konkrétne kroky a vďaka svojim predchádzajúcim skúsenostiam programátora ich efektívne komunikovať našej redakcii ako aj externým programátorom.',
      'customers.testimonial.buransky.image': '/assets/images/testimonials/tomas-buransky.jpg',

      // Customers Page - Testimonial: Viktor Zeman
      'customers.testimonial.zeman.name': 'Viktor Zeman',
      'customers.testimonial.zeman.position': 'CEO',
      'customers.testimonial.zeman.company': 'LiveAgent & Post Affiliate Pro',
      'customers.testimonial.zeman.text': 'Martinove skúsenosti v oblasti vývoja webových stránok vytvorili základ pre implementáciu sofistikovanejších stratégií, najmä v oblasti technického SEO. Náš tím s ním výrazne vylepšil rýchlosť webových stránok s vysokou návštevnosťou.',
      'customers.testimonial.zeman.image': '/assets/images/testimonials/viktor-zeman.jpg',

      // Customers Page - CTA Section
      'customers.cta.badge': '100% bezplatná konzultácia',
      'customers.cta.title': 'Pripravení pridať sa k <span>úspešným firmám?</span>',
      'customers.cta.subtitle': 'Transformujte svoju webovú stránku na výkonný predajný nástroj, ktorý používatelia milujú a vyhľadávače odmeňujú.',
      'customers.cta.button': 'Získať bezplatnú analýzu webu',
      'customers.cta.trust.free': 'Bezplatná konzultácia',
      'customers.cta.trust.commitment': 'Bez záväzkov',
      'customers.cta.feature1.title': '100% zadarmo',
      'customers.cta.feature1.description': 'Komplexná analýza webovej stránky bez skrytých podmienok',
      'customers.cta.feature2.title': '30 minút',
      'customers.cta.feature2.description': 'Konzultácia o kľúčových príležitostiach vašej webovej stránky',
      'customers.cta.feature3.title': 'Okamžitá hodnota',
      'customers.cta.feature3.description': 'Odporúčania, ktoré váš tím môže okamžite implementovať',

      // Services Page - Hero
      'services.hero.cta': ' Získať bezplatnú analýzu webu',

      // Services Page - CTA
      'services.cta.button': ' Získať bezplatnú analýzu webu',

      // Consultant Page - CTAs
      'consultant.hero.cta': ' Získať bezplatnú analýzu webu',
      'consultant.cta.button': ' Získať bezplatnú analýzu webu',

      // Contact Page - Hero
      'contact.hero.badge': 'Začnime spoluprácu',
      'contact.hero.title': 'Spojte sa <span>so mnou</span>',
      'contact.hero.description': 'Zoptimalizujte váš web prostredníctvom pokročilého technického SEO a optimalizácie výkonu. Zlepšite používateľskú skúsenosť a dosiahnite lepšie umiestnenia vo vyhľadávačoch a na AI platformách.',
      'contact.hero.cta': 'Dohodnúť si bezplatnú konzultáciu',
      'contact.hero.status': 'Prijímam nové projekty',

      // Contact Page
      'contact.methods.title': 'Spojte sa so mnou',
      'contact.methods.subtitle': 'Kontaktujte ma priamo ohľadom projektov alebo ma sledujte na sociálnych sieťach pre bezplatné tipy',
      'contact.email.title': 'Email',
      'contact.email.description': 'Komunikácia o projektoch',
      'contact.email.address': 'martin@techseovitals.com',
      'contact.linkedin.description': 'Bezplatné tipy a príbehy úspešných klientov',
      'contact.linkedin.handle': '/in/techseovitals',
      'contact.bluesky.description': 'Novinky a tipy z technického SEO',
      'contact.bluesky.handle': '@techseovitals.com',
      'contact.youtube.description': 'Podrobné návody a prípadové štúdie',
      'contact.youtube.handle': '@techseovitals',

      // Calendly Section
      'calendly.badge': 'Expertná konzultácia',
      'calendly.title': 'Zarezervujte si <span>bezplatnú konzultáciu</span>',
      'calendly.subtitle': 'Vyberte si čas, ktorý vám najlepšie vyhovuje a prediskutujme možnosti zlepšenia vašej webovej stránky.',

      // Speaking Section
      'speaking.badge': 'Prednášky',
      'speaking.title': 'Verejné <span>prednášky</span>',
      'speaking.subtitle': 'Zdieľanie poznatkov a náhľadov na priemyselných konferenciách a podujatiach',
      'speaking.more-soon': 'Viac čoskoro...',
      'speaking.more-soon.description': 'Ďalšie prednášky a prezentácie budú čoskoro',

      // Business Info Section
      'business-info.title': 'Firemné informácie',
      'business-info.subtitle': 'Firemné údaje pre fakturáciu a zmluvy',
      'business-info.company-details': 'Údaje o spoločnosti',
      'business-info.business-name': 'Názov spoločnosti',
      'business-info.business-id': 'IČO',
      'business-info.vat-id': 'IČ DPH',
      'business-info.address': 'Adresa',

      // Blog Cards Section
      'blog-cards.title': 'Najnovšie poznatky o <span>technickom SEO</span>',
      'blog-cards.subtitle': 'Zostaňte o krok vpred s praktickými stratégiami technického SEO, tipmi na optimalizáciu výkonu a osvedčenými postupmi v odvetví.',
      'blog-cards.badge': 'Expertné poznatky',

      // Testimonials Section
      'testimonials.default.title': 'Čo hovoria <span>klienti</span>',
      'testimonials.default.subtitle': 'Skutočné hodnotenia od firiem, ktoré dosiahli lepšie konverzie, obrat a organický rast.',
      'testimonials.default.badge': 'Úspešní klienti',
      'testimonials.default.trust-text': 'Spolupracoval som už s viac ako 50 firmami',
      'testimonials.default.cta': 'Ďalšie referencie',
      'testimonials.position.ceo': 'CEO',
      'testimonials.position.cmo': 'CMO',
      'testimonials.company.liveagent': 'LiveAgent & Post Affiliate Pro',
      'testimonials.company.quality-unit': 'Quality Unit',

      // Why Choose Me Section
      'why-choose-me.badge': 'Prečo práve ja?',
      'why-choose-me.title': 'Expert na technické SEO, ktorý <span>prináša skutočné výsledky</span>',

      // Why Audit Section
      'why-audit.badge': 'Prečo začať s auditom?',
      'why-audit.title': 'Koniec hádania. <span>Viac faktov</span>',
      'why-audit.subtitle': 'Nemôžete opraviť niečo, o čom ani neviete. Môj audit vám ukáže všetky skryté technické problémy, ktoré znižujú konverzie a príjmy, a poskytne jasný plán na ich odstránenie.',
      'why-audit.cta': 'Získať bezplatnú kontrolu webu',
      'why-audit.card1.title': 'Identifikujem problémy, ktoré vás stoja peniaze',
      'why-audit.card1.description': 'Nájdem technické problémy, ktoré vás potichu stoja peniaze. Nájdem presne to, čo bráni návštevníkom v dokončení nákupu.',
      'why-audit.card1.badge': 'Komplexná technická analýza',
      'why-audit.card2.title': 'Maximalizujem finančný dopad opráv',
      'why-audit.card2.description': 'Zameriavam sa na to, čo je najdôležitejšie. Priorizujem opravy podľa finančného dopadu. Vyriešime najskôr problémy s najväčším potenciálom.',
      'why-audit.card2.badge': 'Nové príležitosti na vyššie tržby',
      'why-audit.card3.title': 'Zabránim ďalšiemu strácaniu peňazí',
      'why-audit.card3.description': 'Identifikujem, kde konkurencia kradne vašich zákazníkov, a získate tak technické zlepšenia, ktoré vám pomôžu získať späť trhový podiel a príjmy.',
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
      'brutal-truth.title': '<span class="text-red-500">Tvrdá pravda</span> o vašej webovej stránke',
      'brutal-truth.subtitle': 'Technické problémy odháňajú zákazníkov ku konkurencii. Pomalé načítavanie, chaotická navigácia a štruktúra frustrujú vašich návštevníkov. Každá stratená sekunda vás navyše stojí peniaze.',

      'brutal-truth.card1.badge': 'Amazon štúdia',
      'brutal-truth.card1.stat': '1%',
      'brutal-truth.card1.stat-label': 'stratených príjmov za každých 100ms oneskorenia',
      'brutal-truth.card1.title': 'Používatelia vnímajú každé oneskorenie',
      'brutal-truth.card1.description': 'Viete, že ľudia vnímajú aj 100-milisekundové oneskorenie? Amazon na vlastnej koži zistil, že každých 100ms oneskorenia znamená mínus 1% v ich tržbách. Zákazníci sú jednoducho netrpezlivý.',

      'brutal-truth.card2.badge': 'Google štúdia',
      'brutal-truth.card2.stat': '53%',
      'brutal-truth.card2.stat-label': 'mobilných používateľov opustí webovú stránku, ktorá sa načítava pomaly',
      'brutal-truth.card2.title': 'Trpezlivosť pri načítaní má svoje hranice',
      'brutal-truth.card2.description': 'Návštevníci vám dajú presne 3 sekundy pred tým, ako sa rozhodnú, že vaša webová stránka stojí za ich čas. Google zistil, že 53% zákazníkov odíde po troch sekundách a vezme si svoje peniaze inam.',

      'brutal-truth.card3.badge': 'Používateľská skúsenosť',
      'brutal-truth.card3.stat': '79%',
      'brutal-truth.card3.stat-label': 'návštevníkov sa už nevráti po zlej používateľskej skúsenosti',
      'brutal-truth.card3.title': 'Prvý dojem je mimoriadne dôležitý',
      'brutal-truth.card3.description': '79% používateľov, ktorí zažili zlú používateľskú skúsenosť na webovej stránke, vám už druhú šancu nedá. Vyhľadávače a AI platformy sa spoliehajú na tie isté signály, ktoré vytvárajú dobrý používateľský zážitok.',

      // Services Page - Hero
      'services.hero.badge': 'Technické SEO služby s dôrazom na výsledky',
      'services.hero.title': 'Technické SEO, ktoré <span>prináša skutočné výsledky</span>',
      'services.hero.description': 'Každý používateľ očakáva webovú stránku, ktorá funguje bezchybne. Technické problémy vás potichu pripravujú o zákazníkov každý deň – pomalé načítavanie, nefunkčné odkazy a chaotická navigácia odrádzajú potenciálnych zákazníkov. Profesionálna optimalizácia to dokáže kompletne vyriešiť.',
      'services.hero.rating': 'Spolupracoval som už s viac ako 50 firmami',
      'services.hero.status': 'Prijímam nových klientov',

      // Services Page - CTAs
      'services.cta.badge': 'Pripravení premeniť návštevníkov na zákazníkov?',
      'services.cta.title': 'Poskytnite návštevníkom skúsenosť, <span>ktorú si zaslúžia</span>',
      'services.cta.description': 'Vaša webová stránka môže vyzerať dokonale, ale pod povrchom skrýva technické problémy, ktoré potichu odrádzajú potenciálnych zákazníkov. Odhaľte, čo skutočne blokuje konverzie a ako to efektívne vyriešiť.',

      // Services - Service Cards
      'services.audit.title': 'Technický SEO audit',
      'services.audit.price': '2 500 €',
      'services.audit.description': 'Komplexný technický SEO audit, ktorý odhalí, čo blokuje vašu viditeľnosť a konverzie. Získajte detailný plán na vyriešenie kľúčových problémov a maximalizáciu potenciálu vašej webovej stránky.',
      'services.audit.feature1.title': 'Detailná technická analýza',
      'services.audit.feature1.description': 'Dôkladná analýza vašej webovej stránky vo všetkých kľúčových oblastiach - technické SEO, výkon, používateľská skúsenosť. S viac ako 50 kontrolnými bodmi odhalím väčšinu skrytých problémov.',
      'services.audit.feature2.title': 'Komplexný plán s prioritizáciou',
      'services.audit.feature2.description': 'Získate zoznam odporúčaní zoradených podľa ich dopadu na vaše obchodné výsledky. Žiadne hádanie, len konkrétne kroky, ktoré váš tím môže ihneď začať riešiť.',
      'services.audit.feature3.title': '90-minutová expertná konzultácia',
      'services.audit.feature3.description': 'Online konzultácia, počas ktorej detailne prejdeme všetky problémy a spoločne doladíme plán na premenu vašej webovej stránky na najlepšieho predajcu.',
      'services.audit.cta': 'Objednať audit',

      'services.monitoring.title': 'Technický SEO monitoring',
      'services.monitoring.price': '2 000 €',
      'services.monitoring.price.unit': '/mesiac',
      'services.monitoring.description': 'Nepretržité profesionálne monitorovanie a proaktívna optimalizácia pre udržanie výnimočného výkonu. Pokročilé monitorovanie odhalí problémy skôr, než ovplyvnia vaše tržby, a identifikuje nové príležitosti na rast.',
      'services.monitoring.feature1.title': 'Nepretržité profesionálne monitorovanie',
      'services.monitoring.feature1.description': 'Pokročilé monitorovanie vašej webovej stránky s odhaľovaním problémov s indexovaním, crawlovaním a výkonom. Proaktívne upozornenia zabezpečia, že problémy vyriešime skôr, než môže ovplyvnia vaše tržby.',
      'services.monitoring.feature2.title': 'Mesačný audit s odporúčaniami',
      'services.monitoring.feature2.description': 'Mesačný prehľad s identifikáciou nových príležitostí na rast. Udržíte sa vždy o krok pred zmenami v algoritmoch a pred vašou konkurenciou.',
      'services.monitoring.feature3.title': 'Podpora a expertné konzultácie',
      'services.monitoring.feature3.description': 'Mesačná 60-minutová konzultácia. Pri kritických problémoch poskytujem bezplatné urgentne konzultácie.',
      'services.monitoring.cta': 'Objednať monitoring',
      'services.monitoring.commitment': 'Minimálna viazanosť 3 mesiace',

      'services.migration.title': 'Migrácia webovej stránky',
      'services.migration.price': '4 500 €',
      'services.migration.description': 'Ochráňte svoje peniaze, návštevnosť a pozície počas aj po migrácii webovej stránky. Komplexný migračný plán s dôkladnými auditmi pred a po migrácii garantuje minimálne riziká a maximálnu ochranu vašich tržieb.',
      'services.migration.feature1.title': 'Príprava a plánovanie pred migráciou',
      'services.migration.feature1.description': 'Pripravím detailný migračný plán - od presmerovania cez mapovanie URL až po technické nastavenia. Urobím maximum, aby ste si udržali svoje pozície vo vyhľadávačoch aj návštevnosť, pričom vaši zákazníci nič nepostrehnu.',
      'services.migration.feature2.title': 'Audit a podpora po migrácii',
      'services.migration.feature2.description': 'Po migrácii dôkladne skontrolujem, či všetko funguje ako má. Potom vašu webovú stránku ešte vyladíme, aby bežala lepšie než pred migráciou.',
      'services.migration.feature3.title': 'Nepretržitá podpora a monitorovanie',
      'services.migration.feature3.description': 'Som s vami počas celej migrácie a aj po nej. Vašu webovú stránku mám neustále pod dohľadom, takže ak sa niečo pokazí, hneď o tom viem a riešime to.',
      'services.migration.cta': 'Objednať migráciu',

      // Services Section Headers
      'services.section.badge': 'Vyberte si službu, ktorá vyhovuje vaším potrebám',
      'services.section.title': '<span>Technické SEO</span> služby',
      'services.section.subtitle': 'Vaša webová stránka môže byť vaším najlepším predajcom. Získajte technickú SEO analýzu, ktorá z vašej webovej stránky spraví nástroj na zvyšovanie tržieb.',

      // Service Cards Common
      'services.starting-at': 'Začína na',

      // What Makes Me Different Section
      'what-makes-me.badge': 'Prečo si vybrať práve mňa?',
      'what-makes-me.title': 'Čo ma robí <span>iným</span>',
      'what-makes-me.subtitle': 'Technické SEO vedené skúseným programátorom, ktoré premení problémy na konkurenčnú výhodu a systematicky zvyšuje vaše tržby.',
      'what-makes-me.card1.title': 'Expertné programátorské znalosti',
      'what-makes-me.card1.description': 'Viac ako 10 rokov skúseností s pokročilými technológiami a navrhovaním komplexnej architektúry moderných webových aplikácií.',
      'what-makes-me.card2.title': 'Komplexný plán pre systematický rast tržieb',
      'what-makes-me.card2.description': 'Získate detailné zoznamy úloh s presnými postupmi a prioritizáciou, ktoré váš tím môže okamžite začať implementovať na vašej webovej stránke.',
      'what-makes-me.card3.title': 'Vytváram nezavislé a skúsené tímy',
      'what-makes-me.card3.description': 'Váš tím získa kompletné znalosti a detailné usmernenia na udržanie webovej stránky v optimálnom stave dlhodobo po našej spoločnej práci.',

      // Consultant Page - Hero
      'consultant.hero.badge': 'Technické SEO postavené na vývojárskych základoch',
      'consultant.hero.title': 'Martin Štěpánek, <span>Expert na technické SEO</span>',
      'consultant.hero.description': 'Pomáham ambicióznym firmám zlepšiť výkon ich webových stránok prostredníctvom pokročalého technického SEO a optimalizácie výkonu pre lepšie výsledky z organickej návštevnosti a vyššie tržby.',
      'consultant.hero.rating': 'Martina považujem za jedného z najlepších expertov na technické SEO na trhu.',
      'consultant.hero.rating.testimonial': true,
      'consultant.hero.rating.source': 'Overený klient na LinkedIn',
      'consultant.hero.testimonial': 'Martina považujem za jedného z najlepších expertov na technické SEO na trhu.',
      'consultant.hero.testimonial.source': 'Overený klient na LinkedIn',
      'consultant.hero.status': 'Prijímam nových klientov',

      // Consultant Page - Experience Section
      'consultant.experience.badge': 'Prečo si vybrať práve mňa?',
      'consultant.experience.title': 'Čo ma robí <span>iným</span>',
      'consultant.experience.subtitle': 'Zameriavam sa na praktické zlepšenia, ktoré zvyšujú tržby. Už viac ako 10 rokov zlepšujem webové stránky tak, aby si získali dôveru ľudí a vyhľadávačov a poskytovali výbornú používateľskú skúsenosť návštevníkom.',
      'consultant.experience.point1.title': '10+ rokov skúsenosti s webovým vývojom',
      'consultant.experience.point1.description': 'Kombinujem programátorské znalosti so SEO expertízou. Rozumiem technickým detailom a architektúre webových stránok, čo mi umožňuje vyriešiť aj tie najzložitejšie problémy.',
      'consultant.experience.point2.title': 'Komplexný technický prístup',
      'consultant.experience.point2.description': 'Zameriavam sa na technické SEO aj optimalizáciu výkonu. Všetky technické prvky vašej webovej stránky sa podieľajú na tom, aby ste boli lepšie viditeľní vo vyhľadávačoch aj na AI platformách.',
      'consultant.experience.point3.title': 'Overené výsledky',
      'consultant.experience.point3.description': 'Od startupov až po veľké projekty. Pomohol som firmám výrazne zvýšiť tržby a príjmy z organickej návštevnosti vyriešením ich technických problémov.',
      'consultant.experience.stats': 'Viac ako 50 úspešne optimalizovaných webových stránok',
      'consultant.experience.testimonial': 'Pod Martinovým vedením náš tím výrazne zlepšil rýchlosť dvoch webových stránok s vysokou návštevnosťou. Jeho prístup k technickému SEO neustále prinášal skvelé výsledky.',
      'consultant.experience.testimonial.source': 'LinkedIn odporúčanie',

      // Consultant Page - Services
      'consultant.services.title': 'Ako môžem pomôcť <span>vašej firme</span>',

      // Consultant Page - CTA
      'consultant.cta.badge': 'Pripravení premeniť návštevníkov na zákazníkov?',
      'consultant.cta.title': 'Poskytnite návštevníkom skúsenosť, <span>ktorú si zaslúžia</span>',
      'consultant.cta.description': 'Vaša webová stránka môže vyzerať dokonale, ale pod povrchom skrýva technické problémy, ktoré potichu odrádzajú potenciálnych zákazníkov. Odhaľte, čo skutočne blokuje konverzie a ako to efektívne vyriešiť.',

      // Trusted Companies Section
      'trusted.title': 'Spolupracujem s najlepšími',
      'trusted.subtitle': 'Pomáham firmám dosiahnuť ich ciele pomocou technického SEO',

      // Testimonials Section
      'testimonials.badge': 'Úspešní klienti',
      'testimonials.title': 'Čo hovoria <span>klienti</span>',
      'testimonials.subtitle': 'Skutočné hodnotenia od firiem, ktoré dosiahli lepšie konverzie, obrat a organický rast.',
      'testimonials.cta': 'Ďalšie referencie',
      'testimonials.trust': 'Spolupracoval som už s viac ako 50 firmami',

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
      'why-me.testimonial': 'Pod Martinovým vedením náš tím výrazne zlepšil rýchlosť dvoch webových stránok s vysokou návštevnosťou. Jeho prístup k technickému SEO neustále prinášal skvelé výsledky.',

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

      // About Content (duplicate - using same as above)
      'about.subtitle.alt': 'Zameriavam sa na praktické zlepšenia, ktoré zvyšujú tržby. Už viac ako 10 rokov zlepšujem webové stránky tak, aby si získali dôveru ľudí a vyhľadávačov a poskytovali výbornú používateľskú skúsenosť návštevníkom.',

      'about.point1.title.alt': '10+ rokov skúsenosti s webovým vývojom',
      'about.point1.description.alt': 'Kombinujem programátorské znalosti so SEO expertízou. Rozumiem technickým detailom a architektúre webových stránok, čo mi umožňuje vyriešiť aj tie najzložitejšie problémy.',

      'about.point2.title.alt': 'Komplexný technický prístup',
      'about.point2.description.alt': 'Zameriavam sa na technické SEO aj optimalizáciu výkonu. Všetky technické prvky vašej webovej stránky sa podieľajú na tom, aby ste boli lepšie viditeľní vo vyhľadávačoch aj na AI platformách.',

      'about.point3.title.alt': 'Overené výsledky',
      'about.point3.description.alt': 'Od startupov až po veľké projekty. Pomohol som firmám výrazne zvýšiť tržby a príjmy z organickej návštevnosti vyriešením ich technických problémov.',

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
