# TechSEO Vitals - Hugo Site

This is the Hugo migration of TechSEO Vitals website, a technical SEO and web performance consulting site. The site has been migrated from Next.js to Hugo v0.150.0 while maintaining identical design and functionality.

## 🚀 Features

- **Hugo v0.150.0** with advanced features
- **Tailwind CSS** for styling
- **Responsive Design** optimized for all devices
- **SEO Optimized** with structured data and meta tags
- **Performance Focused** with image optimization and asset pipelines
- **Accessibility** with WCAG compliance features
- **Modern JavaScript** with vanilla JS for interactions

## 📁 Project Structure

```
├── archetypes/          # Content templates
├── assets/              # Source assets (CSS, JS, images)
├── content/             # Site content (Markdown)
├── data/               # Data files (YAML/JSON)
├── layouts/            # Hugo templates
│   ├── _default/       # Default templates
│   ├── partials/       # Reusable template parts
│   ├── shortcodes/     # Custom shortcodes
│   └── blog/           # Blog-specific layouts
├── static/             # Static files (copied as-is)
├── hugo.toml           # Hugo configuration
├── package.json        # Dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── postcss.config.js   # PostCSS configuration
```

## 🛠️ Getting Started

### Prerequisites

- **Hugo Extended v0.150.0+** ([Install Hugo](https://gohugo.io/installation/))
- **Node.js 18+** and **npm** for asset processing
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd techseovitals.com
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or use make
   make install
   ```

3. **Start development server**
   ```bash
   hugo server --disableFastRender --navigateToChanged
   # or use make
   make dev
   ```

4. **Visit** http://localhost:1313

### Available Commands

#### Using npm scripts:
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run clean     # Clean build artifacts
```

#### Using Makefile (recommended):
```bash
make help         # Show available commands
make dev          # Start development server
make build        # Build for production
make clean        # Clean build artifacts
make preview      # Preview production build
make lint         # Lint CSS
make test         # Run tests and validation
make new-post TITLE="Post Title"  # Create new blog post
make new-page PATH="path/to/page" # Create new page
```

## 🎨 Customization

### Styling

The site uses **Tailwind CSS** with custom design tokens defined in:
- `tailwind.config.js` - Tailwind configuration
- `assets/css/tailwind.css` - Custom CSS and utilities

### Content

- **Pages**: Add new pages in `content/`
- **Blog Posts**: Add new posts in `content/blog/`
- **Data**: Modify site data in `data/` directory

### Templates

- **Layouts**: Modify templates in `layouts/`
- **Partials**: Reusable components in `layouts/partials/`
- **Shortcodes**: Custom content elements in `layouts/shortcodes/`

## 🔧 Advanced Features

### Custom Shortcodes

The site includes several custom shortcodes:

```markdown
<!-- Hero Section -->
{{< hero-section 
  title="Your Title"
  description="Your description"
  primaryCTA="Button Text"
  primaryHref="/link/"
>}}

<!-- Call-to-Action Section -->
{{< cta-section 
  badge="Badge Text"
  title="Section Title"
  description="Description text"
  primaryCTA="Button Text"
  primaryHref="/link/"
>}}

<!-- Alert Box -->
{{< alert type="info" title="Alert Title" >}}
Alert content here
{{< /alert >}}

<!-- Highlight Box -->
{{< highlight-box title="Box Title" color="primary" >}}
Content here
{{< /highlight-box >}}

<!-- Custom Button -->
{{< button 
  text="Button Text" 
  href="/link/" 
  style="primary" 
  size="md" 
>}}

<!-- YouTube Video -->
{{< youtube "VIDEO_ID" title="Video Title" >}}

<!-- Optimized Image -->
{{< image 
  src="/images/example.jpg" 
  alt="Alt text" 
  width="800" 
  height="600" 
  caption="Image caption" 
>}}
```

### Hugo Functions

Custom functions available in templates:

- `partial "functions/format-date.html"` - Date formatting
- `partial "functions/reading-time.html"` - Calculate reading time
- `partial "functions/truncate-words.html"` - Truncate text
- `partial "functions/generate-toc.html"` - Generate table of contents

## 📦 Deployment

### Netlify

The site is configured for Netlify deployment:

1. **Connect your repository** to Netlify
2. **Build settings** are configured in `netlify.toml`
3. **Environment variables** are set automatically

### Vercel

For Vercel deployment:

1. **Connect your repository** to Vercel  
2. **Build settings** are configured in `vercel.json`
3. **Deploy** with `make deploy-vercel`

### Manual Deployment

1. **Build the site**
   ```bash
   make build
   ```

2. **Deploy the `public/` directory** to your hosting provider

## 🔍 SEO Features

- **Structured Data** (JSON-LD) for rich snippets
- **Open Graph** and **Twitter Card** meta tags
- **Canonical URLs** and proper meta descriptions
- **XML Sitemap** and **RSS Feed** generation
- **Robots.txt** with proper directives
- **Performance optimization** for Core Web Vitals

## 🚀 Performance

The site is optimized for performance:

- **Hugo Pipes** for asset processing
- **Image optimization** with WebP support
- **CSS/JS minification** and compression
- **Lazy loading** for images and videos
- **Service Worker** ready (optional)
- **CDN-friendly** asset structure

## 🧪 Testing

Run tests and validation:

```bash
make test           # Run all tests
make lint           # Lint CSS
make check-hugo     # Check Hugo configuration
make stats          # Show site statistics
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support and questions:

- **Email**: martin@techseovitals.com
- **Website**: [techseovitals.com](https://techseovitals.com)
- **LinkedIn**: [Martin Stepanek](https://linkedin.com/in/techseovitals)

---

Built with ❤️ using Hugo v0.150.0
