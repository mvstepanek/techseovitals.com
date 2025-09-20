import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

const ContactForm: React.FC = () => (
  <section id="contact-form" className="py-20 bg-white relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${COMMON_STYLES.gradientBg} text-white shadow-lg mb-6`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 8l7.89 4.26a2 2 0 002.22.0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z"
            />
          </svg>
          Get in Touch
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Start Your <span className={COMMON_STYLES.gradientText}>Project Today</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Ready to transform your website&apos;s performance? Fill out the form below and I&apos;ll get back to you
          within 24 hours with a personalized strategy.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 lg:p-10">
          <form id="contactForm" className="space-y-6">
            {/* Status Messages */}
            <div id="form-status" className="hidden" />

            {/* Honeypot (hidden spam trap) */}
            <input
              type="text"
              name="honeypot"
              style={{ position: 'absolute', left: '-9999px' }}
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
                  Your Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="Martin Stepanek"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  maxLength={320}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="martin@techseovitals.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  maxLength={100}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="TechSEO Vitals"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-semibold text-gray-900 mb-2">
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  maxLength={200}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                  placeholder="https://www.example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="projectType" className="block text-sm font-semibold text-gray-900 mb-2">
                What type of project are you interested in?
              </label>
              <select
                id="projectType"
                name="projectType"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
              >
                <option value="">Select a service</option>
                <option value="Technical SEO Audit">Technical SEO Audit</option>
                <option value="Technical SEO Monitoring">Technical SEO Monitoring</option>
                <option value="Website Migration Planning">Website Migration Planning</option>
                <option value="Web Performance Optimization">Web Performance Optimization</option>
                <option value="SEO Consultation">SEO Consultation</option>
                <option value="Other">Other / Custom Project</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
                Tell me about your project <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                maxLength={2000}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                placeholder="Describe your current challenges, goals, and what you'd like to achieve with technical SEO..."
              />
              <div className="text-sm text-gray-500 mt-2">
                <span id="char-count">0</span> / 2000 characters
              </div>
            </div>

            <button
              type="submit"
              id="submit-button"
              className={`w-full group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-8 py-4 text-lg rounded-xl hover:scale-105 hover:shadow-2xl ${COMMON_STYLES.gradientBg} text-white shadow-xl focus:ring-4 focus:ring-purple-500/30`}
            >
              <span id="button-text" className="relative z-10">
                Send Message
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

              {/* Loading spinner (hidden by default) */}
              <svg
                id="loading-spinner"
                className="hidden animate-spin -ml-1 mr-3 h-5 w-5 text-white relative z-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
            </button>

            <p className="text-sm text-gray-600 text-center">
              By submitting form, I agree to the{' '}
              <a href="/privacy-policy/" className="text-purple-600 hover:text-purple-700 underline">
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms-and-conditions/" className="text-purple-600 hover:text-purple-700 underline">
                Terms and Conditions
              </a>
              .
            </p>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22.0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-sm text-gray-600 mb-2">Prefer direct communication?</p>
                  <a
                    href="mailto:martin@techseovitals.com"
                    className="text-sm text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    martin@techseovitals.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-sm text-gray-600">I typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Free Consultation</h4>
                  <p className="text-sm text-gray-600">No obligation initial discussion about your project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Quick Tip</h4>
            </div>
            <p className="text-gray-700">
              The more details you provide about your current challenges and goals, the better I can tailor my initial
              recommendations to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* JavaScript for form handling */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
        document.addEventListener('DOMContentLoaded', function() {
          const form = document.getElementById('contactForm');
          const submitButton = document.getElementById('submit-button');
          const buttonText = document.getElementById('button-text');
          const loadingSpinner = document.getElementById('loading-spinner');
          const statusDiv = document.getElementById('form-status');
          const messageTextarea = document.getElementById('message');
          const charCount = document.getElementById('char-count');

          // Character counter
          if (messageTextarea && charCount) {
            messageTextarea.addEventListener('input', function() {
              charCount.textContent = this.value.length;
            });
          }

          // Form submission
          if (form) {
            form.addEventListener('submit', async function(e) {
              e.preventDefault();

              // Disable submit button and show loading
              submitButton.disabled = true;
              buttonText.textContent = 'Sending...';
              loadingSpinner.classList.remove('hidden');
              statusDiv.className = 'hidden';

              try {
                const formData = new FormData(form);
                const data = Object.fromEntries(formData.entries());

                const response = await fetch('https://contact-form.techseovitals.com/', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(data)
                });

                const result = await response.json();

                if (result.success) {
                  // Success message
                  statusDiv.className = 'bg-green-50 border border-green-200 rounded-xl p-4 mb-6';
                  statusDiv.innerHTML = \`
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                      </svg>
                      <div>
                        <h4 class="text-green-800 font-semibold">Message sent successfully!</h4>
                        <p class="text-green-700 text-sm mt-1">\${result.message}</p>
                      </div>
                    </div>
                  \`;

                  // Reset form
                  form.reset();
                  if (charCount) charCount.textContent = '0';

                } else {
                  // Error message
                  statusDiv.className = 'bg-red-50 border border-red-200 rounded-xl p-4 mb-6';
                  statusDiv.innerHTML = \`
                    <div class="flex items-center">
                      <svg class="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                      </svg>
                      <div>
                        <h4 class="text-red-800 font-semibold">Error sending message</h4>
                        <p class="text-red-700 text-sm mt-1">\${result.error}</p>
                        \${result.details ? '<ul class="text-red-600 text-sm mt-2 list-disc list-inside">' + result.details.map(detail => '<li>' + detail + '</li>').join('') + '</ul>' : ''}
                      </div>
                    </div>
                  \`;
                }

              } catch (error) {
                // Network error
                statusDiv.className = 'bg-red-50 border border-red-200 rounded-xl p-4 mb-6';
                statusDiv.innerHTML = \`
                  <div class="flex items-center">
                    <svg class="w-5 h-5 text-red-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                    </svg>
                    <div>
                      <h4 class="text-red-800 font-semibold">Connection error</h4>
                      <p class="text-red-700 text-sm mt-1">Please check your internet connection and try again, or email martin@techseovitals.com directly.</p>
                    </div>
                  </div>
                \`;
              } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                buttonText.textContent = 'Send Message';
                loadingSpinner.classList.add('hidden');
              }
            });
          }
        });
      `,
      }}
    />
  </section>
);

export default ContactForm;
