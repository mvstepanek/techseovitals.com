// Cloudflare Worker for TechSEO Vitals Contact Form
// Handles form submissions and sends emails via Resend
import { Resend } from 'resend';

// Rate limiting storage
const rateLimitMap = new Map();

// Helper function for rate limiting
function isRateLimited(ip) {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  const limit = rateLimitMap.get(ip);

  if (now > limit.resetTime) {
    // Reset the counter
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return false;
  }

  if (limit.count >= maxRequests) {
    return true;
  }

  limit.count++;
  return false;
}

// Input validation and sanitization
function validateInput(data) {
  const errors = [];

  // Required fields
  if (!data.name || data.name.trim().length < 2) {
    errors.push('Name is required and must be at least 2 characters');
  }

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.push('Valid email address is required');
  }

  if (!data.message || data.message.trim().length < 10) {
    errors.push('Message is required and must be at least 10 characters');
  }

  // Length limits
  if (data.name && data.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  if (data.email && data.email.length > 320) {
    errors.push('Email must be less than 320 characters');
  }

  if (data.message && data.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  // Spam detection (basic patterns)
  const spamPatterns = [
    /viagra|cialis|casino|poker|lottery|bitcoin|crypto/i,
    /click here|buy now|limited time|urgent|act now/i,
    /(http|https):\/\/[^\s]+\.(tk|ml|ga|cf|click)/i
  ];

  const textToCheck = `${data.name} ${data.email} ${data.message}`.toLowerCase();
  for (const pattern of spamPatterns) {
    if (pattern.test(textToCheck)) {
      errors.push('Message appears to be spam');
      break;
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitized: {
      name: data.name ? data.name.trim().substring(0, 100) : '',
      email: data.email ? data.email.trim().toLowerCase().substring(0, 320) : '',
      message: data.message ? data.message.trim().substring(0, 2000) : '',
      company: data.company ? data.company.trim().substring(0, 100) : '',
      website: data.website ? data.website.trim().substring(0, 200) : '',
      projectType: data.projectType || 'Not specified'
    }
  };
}

// CORS headers
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://staging.techseovitals.com',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Max-Age': '86400',
};

// Main request handler
async function handleRequest(request, env) {
  // Handle CORS preflight requests
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders
    });
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({
      success: false,
      error: 'Method not allowed'
    }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }

  try {
    // Get client IP for rate limiting
    const clientIp = request.headers.get('CF-Connecting-IP') ||
                     request.headers.get('X-Forwarded-For') ||
                     'unknown';

    // Check rate limit
    if (isRateLimited(clientIp)) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Too many requests. Please try again later.'
      }), {
        status: 429,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

    // Parse request body
    const contentType = request.headers.get('Content-Type');
    let formData;

    if (contentType && contentType.includes('application/json')) {
      formData = await request.json();
    } else {
      // Handle form-encoded data
      const body = await request.text();
      formData = {};
      const params = new URLSearchParams(body);
      for (const [key, value] of params) {
        formData[key] = value;
      }
    }

    // Validate and sanitize input
    const validation = validateInput(formData);

    if (!validation.isValid) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Validation failed',
        details: validation.errors
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

    const { name, email, message, company, website, projectType } = validation.sanitized;

    // Honeypot check (if implemented in frontend)
    if (formData.honeypot) {
      return new Response(JSON.stringify({
        success: false,
        error: 'Spam detected'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json',
          ...corsHeaders
        }
      });
    }

    // Initialize Resend client
    const resend = new Resend(env.RESEND_API_KEY);

    // Send email using Resend SDK
    const emailResult = await resend.emails.send({
      from: 'TechSEO Vitals Contact Form <noreply@techseovitals.com>',
      to: ['martin@techseovitals.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
          <div style="font-family: system-ui, -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #7c3aed, #4f46e5); padding: 30px; border-radius: 12px 12px 0 0;">
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: bold;">
                📧 New Contact Form Submission
              </h1>
            </div>

            <div style="background: #f8fafc; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0;">
              <div style="background: white; padding: 25px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
                <div style="margin-bottom: 20px;">
                  <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Contact Information</h3>
                  <div style="background: #f1f5f9; padding: 15px; border-radius: 6px;">
                    <p style="margin: 0 0 8px 0;"><strong>Name:</strong> ${name}</p>
                    <p style="margin: 0 0 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #7c3aed;">${email}</a></p>
                    ${company ? `<p style="margin: 0 0 8px 0;"><strong>Company:</strong> ${company}</p>` : ''}
                    ${website ? `<p style="margin: 0 0 8px 0;"><strong>Website:</strong> <a href="${website}" style="color: #7c3aed;">${website}</a></p>` : ''}
                    <p style="margin: 0;"><strong>Project Type:</strong> ${projectType}</p>
                  </div>
                </div>

                <div>
                  <h3 style="color: #1e293b; margin: 0 0 8px 0; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Message</h3>
                  <div style="background: #f1f5f9; padding: 15px; border-radius: 6px; white-space: pre-wrap;">${message}</div>
                </div>
              </div>

              <div style="margin-top: 20px; padding: 15px; background: #e0e7ff; border-radius: 8px; border-left: 4px solid #7c3aed;">
                <p style="margin: 0; font-size: 14px; color: #4338ca;">
                  <strong>💡 Quick Actions:</strong> Reply to this email to respond directly to ${name}
                </p>
              </div>
            </div>

            <div style="text-align: center; margin-top: 20px; color: #64748b; font-size: 12px;">
              <p style="margin: 0;">Sent from TechSEO Vitals Contact Form</p>
              <p style="margin: 5px 0 0 0;">IP: ${clientIp} • Time: ${new Date().toISOString()}</p>
            </div>
          </div>
        `,
        text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
${company ? `Company: ${company}\n` : ''}${website ? `Website: ${website}\n` : ''}Project Type: ${projectType}

Message:
${message}

---
Sent from TechSEO Vitals Contact Form
IP: ${clientIp}
Time: ${new Date().toISOString()}
        `
    });

    // Check for Resend SDK errors
    if (emailResult.error) {
      console.error('Resend API error:', emailResult.error);
      throw new Error('Failed to send email');
    }

    // Log successful submission (for monitoring)
    console.log(`Contact form submission from ${email} (${clientIp}) - Email ID: ${emailResult.data?.id}`);

    return new Response(JSON.stringify({
      success: true,
      message: 'Message sent successfully! I\'ll get back to you within 24 hours.',
      emailId: emailResult.data?.id
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });

  } catch (error) {
    console.error('Contact form error:', error);

    // Don't expose internal errors to client
    return new Response(JSON.stringify({
      success: false,
      error: 'An error occurred while sending your message. Please try again or contact martin@techseovitals.com directly.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        ...corsHeaders
      }
    });
  }
}

// Export the worker
export default {
  async fetch(request, env, ctx) {
    return handleRequest(request, env);
  }
};