# Cloudflare Workers + Resend Contact Form Setup

## Overview
The contact form is now implemented using Cloudflare Workers + Resend for secure email delivery with global edge performance.

## Prerequisites
1. Cloudflare account with Workers enabled
2. Resend account for email delivery (already configured)
3. Node.js installed for Wrangler CLI

## Setup Steps

### 1. Install Dependencies
```bash
# Install Wrangler CLI globally
npm install -g wrangler

# Install Resend SDK for the worker
npm install resend
```

### 2. Authenticate with Cloudflare
```bash
wrangler login
```

### 3. Set Environment Variables
```bash
# Set the Resend API key as a secret
wrangler secret put RESEND_API_KEY
# When prompted, enter: re_a63cotsC_HRLCiNwgecF7hb72kEcJMkFf
```

### 4. Deploy the Worker
```bash
# Deploy to production
wrangler deploy

# The worker will be available at:
# https://techseovitals-contact-form.YOUR_USERNAME.workers.dev
```

### 5. Custom Domain Setup (Recommended)
1. Go to Cloudflare Dashboard → Workers & Pages → Your Worker
2. Click "Settings" → "Triggers" → "Add Custom Domain"
3. Add: `contact-form.techseovitals.com`
4. Cloudflare will automatically create the DNS record

### 6. Update Form Endpoint
The contact form is already configured to use: `https://contact-form.techseovitals.com/`

If you use the default workers.dev subdomain, update the endpoint in:
`src/_components/forms/ContactForm.tsx` line 256

## Cloudflare Workers Advantages

### 🚀 **Performance**
- **Global Edge Network**: Runs in 300+ cities worldwide
- **Zero Cold Starts**: Faster than traditional serverless functions
- **Sub-10ms Response Times**: Ultra-fast form processing

### 🛡️ **Security**
- **Built-in DDoS Protection**: Enterprise-grade security
- **CF-Connecting-IP Header**: Accurate client IP detection
- **Automatic SSL/TLS**: Secure by default

### 💰 **Cost-Effective**
- **Free Tier**: 100,000 requests/day
- **$5/month Paid Plan**: 10 million requests + additional features
- **No Per-Request Charges**: Predictable pricing

### 🔧 **Features**
- **Advanced Rate Limiting**: Built-in protection
- **Real-time Logs**: Monitor form submissions
- **Edge Caching**: Optimal performance
- **Zero Maintenance**: Fully managed platform

## Security Features

### Rate Limiting
- 5 requests per IP per 15-minute window
- Uses Cloudflare's edge for distributed tracking

### Input Validation
- Server-side validation for all fields
- XSS protection through sanitization
- Spam pattern detection

### CORS Security
- Restricted to `https://staging.techseovitals.com`
- Proper preflight handling

### Cloudflare-Specific Protections
- Bot protection and challenge pages
- DDoS mitigation
- WAF (Web Application Firewall) rules

## Monitoring & Debugging

### Worker Analytics
- View in Cloudflare Dashboard → Workers & Pages → Analytics
- Monitor request volume, success rates, and errors
- Track performance metrics

### Real-time Logs
```bash
# View live logs during development
wrangler tail

# View logs for specific deployment
wrangler tail --env production
```

### Error Tracking
- Errors are logged to Cloudflare's logging system
- Failed requests include detailed error information
- Monitor via dashboard or API

## Local Development

### 1. Install Dependencies
```bash
npm install -g wrangler
```

### 2. Set Local Environment
Create `.env` file:
```
RESEND_API_KEY=re_a63cotsC_HRLCiNwgecF7hb72kEcJMkFf
```

### 3. Run Locally
```bash
# Start local development server
wrangler dev

# Test the worker locally
curl -X POST http://localhost:8787 \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test message"}'
```

## Domain Configuration

### Option 1: Custom Domain (Recommended)
- `contact-form.techseovitals.com` → Worker
- Automatic SSL certificate
- Better branding and security

### Option 2: Workers.dev Subdomain
- `techseovitals-contact-form.YOUR_USERNAME.workers.dev`
- Free but less professional
- Update form endpoint accordingly

## Email Configuration

### Resend Setup
1. Domain verification in Resend dashboard
2. Add DNS records for `techseovitals.com`
3. Configure SPF, DKIM, and DMARC records
4. Test email delivery

### Email Template
- Professional HTML design with TechSEO Vitals branding
- Responsive layout for all email clients
- Plain text fallback included
- Direct reply-to functionality

## Deployment Commands

```bash
# Deploy to production
wrangler deploy

# Deploy with specific name
wrangler deploy --name techseovitals-contact-form

# Deploy to specific environment
wrangler deploy --env production

# View deployment status
wrangler deployments list

# Rollback if needed
wrangler rollback [deployment-id]
```

## Troubleshooting

### Common Issues
1. **Worker not receiving requests**: Check custom domain configuration
2. **CORS errors**: Verify origin restrictions in worker code
3. **Rate limiting**: Wait 15 minutes or adjust limits
4. **Email not sending**: Check Resend API key and domain setup

### Debug Steps
1. Check Cloudflare Dashboard for worker status
2. View real-time logs with `wrangler tail`
3. Test worker directly via curl
4. Verify environment variables are set

### Support Resources
- Cloudflare Workers Documentation
- Resend API Documentation
- Wrangler CLI Reference

## Cost Estimates

### Cloudflare Workers
- **Free Tier**: 100,000 requests/day (sufficient for most contact forms)
- **Paid Plan**: $5/month for 10M requests + additional features

### Resend
- **Current Plan**: $20/month for 100k emails
- **Contact Form Usage**: Typically <100 emails/month

### Total Monthly Cost
- **Cloudflare**: $0-5/month
- **Resend**: $20/month
- **Total**: $20-25/month

Much more cost-effective than traditional server hosting!