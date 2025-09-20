import React from 'react';

// Form configurations mapping
const FORM_CONFIG = {
  // Newsletter forms (same ID, different designs)
  'newsletter-section': {
    formId: '7514069',
    uid: '06e277ea9a',
    action: 'https://app.kit.com/forms/7514069/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription.',
  },
  'newsletter-page': {
    formId: '7514069',
    uid: '06e277ea9a',
    action: 'https://app.kit.com/forms/7514069/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription.',
  },
  // Checklist forms (unique IDs)
  'technical-seo-checklist': {
    formId: '7969566',
    uid: '1b414d8dc5',
    action: 'https://app.kit.com/forms/7969566/subscriptions',
    successMessage:
      'Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.',
  },
  'website-migration-checklist': {
    formId: '7945460',
    uid: '4ef42b0b85',
    action: 'https://app.kit.com/forms/7945460/subscriptions',
    successMessage:
      'Great! Now check your email to confirm your subscription and I will send you a copy of the checklist.',
  },
  '5-web-performance-metrics': {
    formId: '8513383',
    uid: 'e7077aaed9',
    action: 'https://app.kit.com/forms/8513383/subscriptions',
    successMessage: 'Great! Now check your email to confirm your subscription and I will send you a copy of the ebook.',
  },
};

type FormType = keyof typeof FORM_CONFIG;

interface ConvertKitFormProps {
  formType: FormType;
  buttonText: string;
  design?: 'newsletter' | 'checklist';
  className?: string;
  buttonClassName?: string;
  fieldClassName?: string;
}

const ConvertKitForm: React.FC<ConvertKitFormProps> = ({
  formType,
  buttonText,
  design = 'checklist',
  className = '',
  buttonClassName = '',
  fieldClassName = '',
}) => {
  const config = FORM_CONFIG[formType];

  // Default styling based on design type
  const defaultFieldClassName =
    design === 'newsletter'
      ? 'formkit-input w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-0 rounded-2xl bg-white/95 backdrop-blur-sm placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:bg-white transition-all shadow-lg'
      : 'w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl border border-gray-300 bg-white placeholder-gray-500 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-20 focus:border-primary-500 transition-all duration-200';

  const defaultButtonClassName =
    design === 'newsletter'
      ? 'formkit-submit group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-yellow-200 to-orange-200 text-purple-800 shadow-xl focus:ring-4 focus:ring-yellow-300/30 inline-flex items-center justify-center w-full sm:w-auto'
      : 'formkit-submit group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-xl focus:ring-4 focus:ring-purple-500/30 w-full';

  const defaultFormClassName =
    design === 'newsletter'
      ? 'seva-form formkit-form flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center'
      : 'space-y-3 sm:space-y-4';

  return (
    <>
      {/* ConvertKit Styles and Scripts */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
          .formkit-alert:not(:empty) {
            display: inline-flex !important;
            align-items: center !important;
            gap: 10px !important;
            padding: 12px 24px !important;
            border-radius: 9999px !important;
            font-size: ${design === 'newsletter' ? '14px' : '16px'} !important;
            font-weight: 600 !important;
            text-align: left !important;
            list-style: none !important;
            margin: 16px auto !important;
            background: rgba(34, 197, 94, 0.4) !important;
            color: rgb(34, 197, 94) !important;
            border: 1px solid rgba(34, 197, 94, 0.3) !important;
            backdrop-filter: blur(8px) !important;
            box-shadow: 0 4px 12px rgba(34, 197, 94, 0.15) !important;
          }
          .formkit-alert:not(:empty):before {
            content: "" !important;
            display: inline-block !important;
            width: 16px !important;
            height: 16px !important;
            background: rgb(34, 197, 94) !important;
            color: white !important;
            border-radius: 50% !important;
            font-size: 12px !important;
            line-height: 16px !important;
            text-align: center !important;
            flex-shrink: 0 !important;
            background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m13.854 3.646-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 9.293l6.646-6.647a.5.5 0 0 1 .708.708z'/%3e%3c/svg%3e") !important;
            background-size: 12px !important;
            background-position: center !important;
            background-repeat: no-repeat !important;
          }
          .formkit-alert:empty {
            display: none !important;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .loading-spinner {
            display: inline-block;
            width: 16px;
            height: 16px;
            border: 2px solid rgba(147, 51, 234, 0.3);
            border-radius: 50%;
            border-top-color: currentColor;
            animation: spin 1s ease-in-out infinite;
            vertical-align: middle;
            margin-right: 8px;
          }
        `,
        }}
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          (function() {
            // Wait for DOM to be ready
            function initForm() {
              const forms = document.querySelectorAll('[data-sv-form="${config.formId}"]');

              forms.forEach(function(form) {
                // Find the submit button within this specific form
                let submitBtn = form.querySelector('[data-element="submit"]') ||
                               form.querySelector('button[type="submit"]') ||
                               form.querySelector('.formkit-submit') ||
                               form.querySelector('button');

                if (!submitBtn) {
                  return;
                }

                let isProcessing = false;

                // Function to update button state
                function showLoading() {
                  if (isProcessing) return;

                  const firstNameInput = form.querySelector('input[name="fields[first_name]"]');
                  const emailInput = form.querySelector('input[name="email_address"]');

                  // Check if fields are valid
                  if (!emailInput || !emailInput.value.trim()) {
                    return;
                  }
                  isProcessing = true;

                  // Find the span that contains the button text
                  const textSpan = submitBtn.querySelector('span.relative') ||
                                  submitBtn.querySelector('span:not(.formkit-spinner)') ||
                                  submitBtn.querySelector('span');

                  if (textSpan) {
                    textSpan.innerHTML = '<span class="loading-spinner"></span> Processing...';
                  }
                }

                // Function to reset button
                function resetButton() {
                  isProcessing = false;
                  const textSpan = submitBtn.querySelector('span.relative') ||
                                  submitBtn.querySelector('span:not(.formkit-spinner)') ||
                                  submitBtn.querySelector('span');

                  if (textSpan) {
                    textSpan.textContent = '${buttonText}';
                  }
                }

                // Listen for form submission
                form.addEventListener('submit', function(e) {
                  showLoading();

                  // Set a timeout to reset after 5 seconds as fallback
                  setTimeout(function() {
                    if (isProcessing) {
                      resetButton();
                    }
                  }, 5000);
                });

                // Also listen for button click
                submitBtn.addEventListener('click', function(e) {
                  // Small delay to ensure form validation happens first
                  setTimeout(function() {
                    const emailInput = form.querySelector('input[name="email_address"]');
                    if (emailInput && emailInput.value.trim() && emailInput.validity.valid) {
                      showLoading();
                    }
                  }, 10);
                });

                // Watch for success message
                const observer = new MutationObserver(function(mutations) {
                  const alertElement = form.querySelector('.formkit-alert[data-element="errors"]');
                  if (alertElement && alertElement.textContent.trim()) {
                    setTimeout(resetButton, 2000);
                  }
                });

                const alertElement = form.querySelector('.formkit-alert[data-element="errors"]');
                if (alertElement) {
                  observer.observe(alertElement, { childList: true, subtree: true, characterData: true });
                }
              });
            }

            // Try to initialize immediately
            if (document.readyState === 'loading') {
              document.addEventListener('DOMContentLoaded', initForm);
            } else {
              // DOM is already ready, initialize now
              initForm();

              // Also try after a short delay in case forms are dynamically loaded
              setTimeout(initForm, 500);
            }
          })();
        `,
        }}
      />

      {/* ConvertKit Form */}
      <form
        action={config.action}
        className={className || defaultFormClassName}
        method="POST"
        data-sv-form={config.formId}
        data-uid={config.uid}
        data-format="inline"
        data-version="5"
        data-options={`{"settings":{"after_subscribe":{"action":"message","success_message":"${config.successMessage}","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}`}
        min-width="400 500 600 700 800"
      >
        <div data-style="clean">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert" />

          <div
            data-element="fields"
            data-stacked="false"
            className={`seva-fields formkit-fields ${design === 'newsletter' ? 'flex flex-col sm:flex-row gap-4' : 'space-y-4'}`}
          >
            <div className={`formkit-field ${design === 'newsletter' ? 'flex-1' : ''}`}>
              <input
                className={fieldClassName || defaultFieldClassName}
                aria-label="First Name"
                name="fields[first_name]"
                placeholder="First name"
                type="text"
              />
            </div>
            <div className={`formkit-field ${design === 'newsletter' ? 'flex-1' : ''}`}>
              <input
                className={fieldClassName || defaultFieldClassName}
                name="email_address"
                aria-label="Email Address"
                placeholder="Business email"
                required
                type="email"
              />
            </div>
            <button type="submit" data-element="submit" className={buttonClassName || defaultButtonClassName}>
              <div className="formkit-spinner">
                <div />
                <div />
                <div />
              </div>
              <span className="relative z-10">{buttonText}</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </div>

          {/* Privacy disclaimer for all forms except newsletter-section */}
          {formType !== 'newsletter-section' && (
            <div className="text-center mt-4 space-y-2">
              <p className="text-sm text-gray-500">No spam, ever. Unsubscribe at any time.</p>
              <p className="text-sm text-gray-500">
                By subscribing, I agree to the{' '}
                <a href="/privacy-policy/" className="text-purple-600 hover:text-purple-700 underline">
                  Privacy Policy
                </a>{' '}
                and{' '}
                <a href="/terms-and-conditions/" className="text-purple-600 hover:text-purple-700 underline">
                  Terms and Conditions
                </a>
                .
              </p>
            </div>
          )}
        </div>
      </form>
    </>
  );
};

export default ConvertKitForm;
