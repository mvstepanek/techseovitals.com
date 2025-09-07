# TechSEO Vitals Website

A modern, performant Next.js website for TechSEO Vitals - Technical SEO and Web Performance consulting services.

## 🚀 Features

- **Next.js 15.5.2** with App Router and TypeScript
- **Tailwind CSS v4** for modern, responsive styling
- **Static Site Generation** - Fully static, ultra-fast loading
- **SEO Optimized** - Complete meta tags, JSON-LD, OG graph
- **Mobile-First** - Responsive design for all devices
- **Performance Optimized** - Built for Core Web Vitals excellence
- **Cookie Consent** - GDPR compliant cookie management

## 📁 Project Structure

```
├── app/                          # Next.js App Router pages
│   ├── (pages)/                  # All website pages
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout
│   ├── sitemap.ts               # XML sitemap generation
│   ├── robots.ts                # Robots.txt generation
│   ├── manifest.ts              # Web app manifest
│   └── feed.xml/route.ts        # RSS feed
├── components/                   # React components
│   ├── layout/                  # Layout components
│   ├── seo/                     # SEO components
│   └── ui/                      # UI components
├── lib/                         # Utility libraries
├── public/                      # Static assets
└── types/                       # TypeScript definitions
```

## 🛠 Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## 📋 Available Scripts

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production with static export
npm run start        # Start production server
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # TypeScript type checking
npm run check-all    # Run all checks (types, lint, format)
```

## 🚀 Deployment

The website is configured for static export and can be deployed to any static hosting service:

### Vercel (Recommended)
```bash
vercel deploy
```

### Netlify
1. Connect your repository
2. Set build command: `npm run build`
3. Set publish directory: `out`

### Any Static Host
```bash
npm run build
# Upload the `out` directory to your hosting service
```

## 📊 SEO Features

- **XML Sitemap** - Auto-generated at `/sitemap.xml`
- **Robots.txt** - SEO-friendly robots file at `/robots.txt`
- **RSS Feed** - Blog feed at `/feed.xml`
- **JSON-LD Schema** - Structured data for better search results
- **Open Graph** - Social media optimization
- **Meta Tags** - Complete SEO meta tags for all pages
- **Canonical URLs** - Proper canonical link management

## 🎨 Styling

- **Tailwind CSS v4** with custom color scheme
- **Primary Color**: Purple (`#7c3aed`)
- **Mobile-First** responsive design
- **Custom CSS Variables** for consistent theming

## 📱 Pages Included

1. **Homepage** - Hero section with value propositions
2. **Services** - Technical SEO service offerings
3. **Newsletter** - Newsletter signup page  
4. **Blog** - Blog listing and content
5. **About** - Technical SEO consultant information
6. **Contact** - Contact form and information
7. **Book Consultation** - Consultation booking
8. **Legal Pages** - Privacy Policy & Terms
9. **Free Resources** - Technical SEO checklists
10. **Webinar** - Free webinar registration
11. **Thank You Pages** - Conversion confirmation pages

## 🔧 Configuration

### Environment Variables
Create `.env.local` for any environment-specific configuration:

```bash
NEXT_PUBLIC_SITE_URL=https://www.techseovitals.com
```

### Customization
- Update colors in `app/globals.css`
- Modify SEO defaults in `lib/seo.ts`  
- Update navigation in `lib/navigation.ts`

## 📈 Performance

Built with performance best practices:
- Static generation for fastest loading
- Optimized images with Next.js Image component
- `fetchpriority="high"` for LCP images
- Minimal JavaScript bundle size
- Efficient CSS with Tailwind

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Run `npm run check-all` to ensure code quality
4. Commit your changes
5. Push to the branch
6. Create a Pull Request

## 📄 License

This project is private and proprietary to TechSEO Vitals.
