// ConvertKit Form Utility Functions
window.ConvertKitFormUtils = (function () {
  function initForm(formId, buttonText) {
    // Wait for DOM to be ready
    const forms = document.querySelectorAll(`[data-sv-form="${formId}"]`);

    forms.forEach(function (form) {
      // Find the submit button within this specific form
      let submitBtn =
        form.querySelector('[data-element="submit"]') || form.querySelector('button[type="submit"]') || form.querySelector('.formkit-submit') || form.querySelector('button');

      if (!submitBtn) {
        return;
      }

      let isProcessing = false;

      // Function to update button state
      function showLoading() {
        if (isProcessing) return;

        const emailInput = form.querySelector('input[name="email_address"]');

        // Check if fields are valid
        if (!emailInput || !emailInput.value.trim()) {
          return;
        }
        isProcessing = true;

        // Find the span that contains the button text
        const textSpan = submitBtn.querySelector('span.relative') || submitBtn.querySelector('span:not(.formkit-spinner)') || submitBtn.querySelector('span');

        if (textSpan) {
          textSpan.innerHTML = '<span class="loading-spinner"></span> Processing...';
        }
      }

      // Function to reset button
      function resetButton() {
        isProcessing = false;
        const textSpan = submitBtn.querySelector('span.relative') || submitBtn.querySelector('span:not(.formkit-spinner)') || submitBtn.querySelector('span');

        if (textSpan) {
          textSpan.textContent = buttonText;
        }
      }

      // Listen for form submission
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        showLoading();

        const formData = new FormData(form);
        const actionUrl = form.action;

        fetch(actionUrl, {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Network response was not ok');
          })
          .then((data) => {
            if (data.status === 'success' || data.success) {
              // Show success message
              let alertEl = form.querySelector('.formkit-alert');
              if (!alertEl) {
                alertEl = document.createElement('div');
                alertEl.className = 'formkit-alert';
                form.appendChild(alertEl);
              }

              alertEl.style.display = 'inline-flex';
              alertEl.textContent = data.message || 'Thank you for subscribing!';

              // Hide form elements
              const formElements = form.querySelectorAll('input, button');
              formElements.forEach((el) => {
                if (!el.classList.contains('formkit-alert')) {
                  el.style.display = 'none';
                }
              });
            } else {
              throw new Error(data.message || 'Subscription failed');
            }
          })
          .catch((error) => {
            console.error('Form submission error:', error);
            resetButton();

            // Show error message
            let alertEl = form.querySelector('.formkit-alert');
            if (!alertEl) {
              alertEl = document.createElement('div');
              alertEl.className = 'formkit-alert';
              form.appendChild(alertEl);
            }

            alertEl.style.display = 'inline-flex';
            alertEl.textContent = 'Something went wrong. Please try again.';
            alertEl.style.background = 'rgba(239, 68, 68, 0.4)';
            alertEl.style.color = 'rgb(239, 68, 68)';
            alertEl.style.border = '1px solid rgba(239, 68, 68, 0.3)';
          });
      });

      // Handle real-time validation
      const emailInput = form.querySelector('input[name="email_address"]');
      if (emailInput) {
        emailInput.addEventListener('blur', function () {
          const email = this.value.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

          if (email && !emailRegex.test(email)) {
            this.style.borderColor = '#ef4444';
            this.style.boxShadow = '0 0 0 3px rgba(239, 68, 68, 0.1)';
          } else {
            this.style.borderColor = '';
            this.style.boxShadow = '';
          }
        });
      }
    });
  }

  // Global configuration for forms
  function getFormSettings() {
    return {
      poweredBy: false,
      displayOptInPage: false,
      embedSettings: {
        backgroundColor: '#ffffff',
        borderColor: '#e5e7eb',
        borderRadius: '12px',
        fontFamily: '"Open Sans", system-ui, sans-serif',
      },
    };
  }

  // Public API
  return {
    initForm: initForm,
    getFormSettings: getFormSettings,
  };
})();
