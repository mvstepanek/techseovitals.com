# TechSEO Vitals - Cloudflare Workers Deployment Guide

## Overview
This guide provides step-by-step instructions for deploying the TechSEO Vitals static website to Cloudflare Workers.

## Prerequisites
- Cloudflare account
- Node.js 18+ installed locally
- npm or yarn package manager
- Wrangler CLI (will be installed)

---

## Step 1: Install Wrangler CLI

Wrangler is Cloudflare's command-line tool for managing Workers.

```bash
# Install Wrangler globally
npm install -g wrangler

# Verify installation
wrangler --version
```

## Step 2: Authenticate with Cloudflare

```bash
# Login to your Cloudflare account
wrangler login

# This will open a browser window for authentication
# Grant the necessary permissions when prompted
```

## Step 3: Create Worker Configuration

Create a `wrangler.toml` file in the project root:

```toml
name = "techseovitals-website"
main = "worker.js"
compatibility_date = "2024-01-01"

[site]
bucket = "./_site"

[build]
command = "npm run build"

[env.production]
name = "techseovitals-website-production"
route = "techseovitals.com/*"

[env.staging]
name = "techseovitals-website-staging"
```

## Step 4: Create Worker Script

Create a `worker.js` file in the project root:

```javascript
import { getAssetFromKV } from '@cloudflare/kv-asset-handler';

addEventListener('fetch', event => {
  event.respondWith(handleEvent(event));
});

async function handleEvent(event) {
  try {
    // Serve static assets from KV
    return await getAssetFromKV(event, {
      mapRequestToAsset: serveSinglePageApp,
    });
  } catch (e) {
    // If asset not found, return 404
    return new Response('Not found', { status: 404 });
  }
}

// Optional: Handle single-page app routing
function serveSinglePageApp(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  // Serve index.html for directory requests
  if (pathname.endsWith('/')) {
    url.pathname = pathname + 'index.html';
  }

  return new Request(url.toString(), request);
}
```

## Step 5: Install Worker Dependencies

```bash
# Install KV asset handler
npm install @cloudflare/kv-asset-handler
```

## Step 6: Build the Static Site

```bash
# Build the Eleventy site
npm run build

# This creates the _site directory with all static files
```

## Step 7: Deploy to Cloudflare Workers

### Option A: Deploy to Production

```bash
# Deploy directly to production
wrangler deploy

# Or deploy to production environment specifically
wrangler deploy --env production
```

### Option B: Deploy to Staging First

```bash
# Deploy to staging environment
wrangler deploy --env staging

# Test the staging deployment
# URL will be: https://techseovitals-website-staging.<your-subdomain>.workers.dev
```

## Step 8: Configure Custom Domain (Production)

1. **In Cloudflare Dashboard:**
   - Navigate to Workers & Pages
   - Select your worker: `techseovitals-website-production`
   - Go to Settings → Triggers
   - Click "Add Custom Domain"

2. **Add your domain:**
   ```
   techseovitals.com
   www.techseovitals.com
   ```

3. **DNS Records (automatically created):**
   ```
   Type: AAAA    Name: @       Value: 100::
   Type: AAAA    Name: www     Value: 100::
   ```

## Step 9: Set Up Automatic Deployments (Optional)

### Using GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Workers

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build site
        run: npm run build

      - name: Deploy to Cloudflare Workers
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          command: deploy
```

### Set up API Token:
1. Go to Cloudflare Dashboard → My Profile → API Tokens
2. Create Token → Use "Edit Cloudflare Workers" template
3. Add token to GitHub repository secrets as `CLOUDFLARE_API_TOKEN`

## Step 10: Verify Deployment

1. **Check deployment status:**
   ```bash
   wrangler tail
   ```

2. **Test the live site:**
   - Production: `https://techseovitals.com`
   - Staging: `https://techseovitals-website-staging.<your-subdomain>.workers.dev`

3. **Monitor metrics:**
   - Go to Cloudflare Dashboard → Workers
   - Select your worker
   - View Analytics tab for requests, errors, and performance

## Important URLs and Endpoints

- **Main Website:** `https://techseovitals.com`
- **Google Calendar Integration:** Embedded directly in `/contact` page
- **Blog:** `/blog`
- **Newsletter:** `/newsletter`
- **Services:** `/technical-seo-services`

## Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf _site
npm run build
```

### Deployment Fails
```bash
# Check Wrangler authentication
wrangler whoami

# Re-login if needed
wrangler login
```

### 404 Errors
- Ensure `_site` directory contains all built files
- Check `worker.js` is properly handling routes
- Verify KV namespace is correctly bound

### Performance Issues
- Enable Cloudflare caching in worker script
- Use Cloudflare CDN for static assets
- Implement proper cache headers

## Rollback Procedure

If you need to rollback a deployment:

```bash
# List all deployments
wrangler deployments list

# Rollback to a previous version
wrangler rollback <deployment-id>
```

## Monitoring and Logs

```bash
# View real-time logs
wrangler tail

# View logs for specific environment
wrangler tail --env production

# Filter logs by status
wrangler tail --status error
```

## Cost Considerations

- **Free Tier:** 100,000 requests/day
- **Paid Plans:** Start at $5/month for 10 million requests
- **KV Storage:** First 1 GB free
- **No additional charges** for bandwidth or compute time on free tier

## Security Best Practices

1. **Enable Cloudflare WAF** for protection against common attacks
2. **Set up rate limiting** to prevent abuse
3. **Use Cloudflare Access** for staging environment protection
4. **Enable HTTPS everywhere** (automatic with Cloudflare)
5. **Regular security headers** are automatically applied by Cloudflare

## Support and Resources

- [Cloudflare Workers Documentation](https://developers.cloudflare.com/workers/)
- [Wrangler CLI Documentation](https://developers.cloudflare.com/workers/wrangler/)
- [KV Asset Handler Guide](https://github.com/cloudflare/kv-asset-handler)

---

## Quick Deploy Commands Summary

```bash
# One-time setup
npm install -g wrangler
wrangler login

# Build and deploy
npm run build
wrangler deploy --env production

# Monitor
wrangler tail --env production
```

**Deployment Time:** ~2-3 minutes total
**Global Propagation:** Instant (Cloudflare's edge network)