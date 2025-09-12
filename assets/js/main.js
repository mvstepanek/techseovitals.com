/**
 * Main JavaScript file for TechSEO Vitals Hugo site
 */

// Utility functions
const utils = {
  // Debounce function for performance optimization
  debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        timeout = null;
        if (!immediate) func(...args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func(...args);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let lastFunc;
    let lastRan;
    return function(...args) {
      if (!lastRan) {
        func(...args);
        lastRan = Date.now();
      } else {
        clearTimeout(lastFunc);
        lastFunc = setTimeout(() => {
          if ((Date.now() - lastRan) >= limit) {
            func(...args);
            lastRan = Date.now();
          }
        }, limit - (Date.now() - lastRan));
      }
    };
  },

  // Check if element is in viewport
  isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  },

  // Smooth scroll to element
  scrollTo(element, offset = 0) {
    const targetPosition = element.offsetTop - offset;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
};

// Mobile navigation
class MobileNav {
  constructor() {
    this.toggle = document.querySelector('.mobile-menu-toggle');
    this.menu = document.querySelector('.mobile-menu');
    this.init();
  }

  init() {
    if (!this.toggle || !this.menu) return;

    this.toggle.addEventListener('click', () => this.toggleMenu());
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.toggle.contains(e.target) && !this.menu.contains(e.target)) {
        this.closeMenu();
      }
    });

    // Close menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeMenu();
      }
    });

    // Close menu on resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        this.closeMenu();
      }
    });
  }

  toggleMenu() {
    const isOpen = this.menu.classList.contains('hidden');
    if (isOpen) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }

  openMenu() {
    this.menu.classList.remove('hidden');
    this.toggle.setAttribute('aria-expanded', 'true');
    document.body.classList.add('overflow-hidden');
  }

  closeMenu() {
    this.menu.classList.add('hidden');
    this.toggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('overflow-hidden');
  }
}

// Smooth scrolling for anchor links
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          utils.scrollTo(target, 80); // Account for fixed header
        }
      });
    });
  }
}

// Lazy loading for images
class LazyImages {
  constructor() {
    this.images = document.querySelectorAll('img[data-src]');
    this.init();
  }

  init() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
          }
        });
      });

      this.images.forEach(img => this.observer.observe(img));
    } else {
      // Fallback for browsers without IntersectionObserver
      this.images.forEach(img => {
        img.src = img.dataset.src;
        img.classList.remove('lazy');
      });
    }
  }
}

// Form handling
class FormHandler {
  constructor() {
    this.forms = document.querySelectorAll('form[data-form-type]');
    this.init();
  }

  init() {
    this.forms.forEach(form => {
      form.addEventListener('submit', (e) => this.handleSubmit(e, form));
    });
  }

  async handleSubmit(e, form) {
    e.preventDefault();
    
    const formType = form.dataset.formType;
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    
    try {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Handle different form types
      switch (formType) {
        case 'newsletter':
          await this.handleNewsletterSubmit(data, form);
          break;
        case 'contact':
          await this.handleContactSubmit(data, form);
          break;
        default:
          console.warn('Unknown form type:', formType);
      }
      
    } catch (error) {
      console.error('Form submission error:', error);
      this.showMessage(form, 'An error occurred. Please try again.', 'error');
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  }

  async handleNewsletterSubmit(data, form) {
    // Integration with ConvertKit or other email service
    // This would typically make an API call to your email service
    console.log('Newsletter signup:', data);
    this.showMessage(form, 'Thank you for subscribing!', 'success');
    form.reset();
  }

  async handleContactSubmit(data, form) {
    // Integration with form handling service
    console.log('Contact form:', data);
    this.showMessage(form, 'Thank you for your message. We\'ll get back to you soon!', 'success');
    form.reset();
  }

  showMessage(form, message, type) {
    const existingMessage = form.querySelector('.form-message');
    if (existingMessage) {
      existingMessage.remove();
    }

    const messageElement = document.createElement('div');
    messageElement.className = `form-message p-4 rounded-md mt-4 ${
      type === 'success' ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
    }`;
    messageElement.textContent = message;
    
    form.appendChild(messageElement);
    
    // Remove message after 5 seconds
    setTimeout(() => {
      messageElement.remove();
    }, 5000);
  }
}

// Analytics and tracking
class Analytics {
  constructor() {
    this.trackingEnabled = this.checkTrackingConsent();
    this.init();
  }

  checkTrackingConsent() {
    const consent = localStorage.getItem('cookieConsent');
    return consent === 'accepted';
  }

  init() {
    if (!this.trackingEnabled) return;

    // Track page views
    this.trackPageView();
    
    // Track scroll depth
    this.trackScrollDepth();
    
    // Track outbound links
    this.trackOutboundLinks();
  }

  trackPageView() {
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href
      });
    }
  }

  trackScrollDepth() {
    let maxScroll = 0;
    const milestones = [25, 50, 75, 90];
    
    const trackScroll = utils.throttle(() => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        milestones.forEach(milestone => {
          if (scrollPercent >= milestone && !this[`tracked${milestone}`]) {
            this[`tracked${milestone}`] = true;
            
            if (typeof gtag !== 'undefined') {
              gtag('event', 'scroll', {
                event_category: 'engagement',
                event_label: `${milestone}%`,
                value: milestone
              });
            }
          }
        });
      }
    }, 250);
    
    window.addEventListener('scroll', trackScroll);
  }

  trackOutboundLinks() {
    document.querySelectorAll('a[href^="http"]').forEach(link => {
      if (!link.href.includes(window.location.hostname)) {
        link.addEventListener('click', () => {
          if (typeof gtag !== 'undefined') {
            gtag('event', 'click', {
              event_category: 'outbound',
              event_label: link.href,
              transport_type: 'beacon'
            });
          }
        });
      }
    });
  }
}

// Performance monitoring
class Performance {
  constructor() {
    this.init();
  }

  init() {
    // Monitor Core Web Vitals
    if ('web-vitals' in window) {
      this.monitorWebVitals();
    }
    
    // Monitor page load performance
    window.addEventListener('load', () => {
      this.measurePageLoad();
    });
  }

  monitorWebVitals() {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(this.sendToAnalytics);
      getFID(this.sendToAnalytics);
      getFCP(this.sendToAnalytics);
      getLCP(this.sendToAnalytics);
      getTTFB(this.sendToAnalytics);
    });
  }

  measurePageLoad() {
    if ('performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0];
      
      if (typeof gtag !== 'undefined') {
        gtag('event', 'timing_complete', {
          name: 'page_load',
          value: Math.round(navigation.loadEventEnd - navigation.fetchStart)
        });
      }
    }
  }

  sendToAnalytics(metric) {
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        event_category: 'Web Vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true
      });
    }
  }
}

// Accessibility enhancements
class Accessibility {
  constructor() {
    this.init();
  }

  init() {
    // Skip links
    this.addSkipLinks();
    
    // Focus management
    this.manageFocus();
    
    // Keyboard navigation
    this.enhanceKeyboardNav();
  }

  addSkipLinks() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    
    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  manageFocus() {
    // Focus on main content when skip link is used
    document.querySelector('.skip-link')?.addEventListener('click', (e) => {
      e.preventDefault();
      const main = document.querySelector('#main, main');
      if (main) {
        main.focus();
        main.scrollIntoView();
      }
    });
  }

  enhanceKeyboardNav() {
    // Add keyboard support for custom interactive elements
    document.querySelectorAll('[role="button"]').forEach(element => {
      element.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          element.click();
        }
      });
    });
  }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new MobileNav();
  new SmoothScroll();
  new LazyImages();
  new FormHandler();
  new Analytics();
  new Performance();
  new Accessibility();
});

// Handle service worker for offline functionality (if needed)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(registration => {
        console.log('SW registered: ', registration);
      })
      .catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}