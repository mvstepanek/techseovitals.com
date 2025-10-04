import React from 'react';
import { COMMON_STYLES, CONVERTKIT_FORMS } from '../../_data/constants';

type FormType = keyof typeof CONVERTKIT_FORMS;

interface ConvertKitFormProps {
  formType: FormType;
  buttonText: string;
  design?: 'newsletter' | 'checklist';
  className?: string;
  buttonClassName?: string;
  fieldClassName?: string;
}

const ConvertKitFormSimple: React.FC<ConvertKitFormProps> = ({ formType, buttonText, design = 'checklist', className, buttonClassName, fieldClassName }) => {
  const config = CONVERTKIT_FORMS[formType];

  // Default styling based on design type
  const defaultFieldClassName =
    design === 'newsletter'
      ? 'formkit-input w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg border-0 rounded-xl bg-white/95 backdrop-blur-sm placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:bg-white transition-all shadow-lg'
      : 'w-full px-4 sm:px-6 py-3 sm:py-4 text-base sm:text-lg rounded-xl border border-gray-300 bg-white placeholder-gray-500 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-20 focus:border-primary-500 transition-all duration-200';

  const defaultButtonClassName =
    design === 'newsletter'
      ? 'formkit-submit group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-yellow-200 to-orange-200 text-purple-800 shadow-xl focus:ring-4 focus:ring-yellow-300/30 inline-flex items-center justify-center w-full sm:w-auto'
      : `formkit-submit group relative overflow-hidden transition-all duration-300 focus:outline-none font-bold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl hover:scale-105 hover:shadow-2xl ${COMMON_STYLES.gradientBg} text-white shadow-xl focus:ring-4 focus:ring-purple-500/30 w-full`;

  const defaultFormClassName =
    design === 'newsletter' ? 'seva-form formkit-form flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center' : 'space-y-3 sm:space-y-4';

  React.useEffect(() => {
    // Load ConvertKit utility script
    if (typeof window !== 'undefined' && window.ConvertKitFormUtils) {
      window.ConvertKitFormUtils.initForm(config.formId, buttonText);
    }
  }, [config.formId, buttonText]);

  return (
    <>
      {/* Load ConvertKit form styles */}
      <link rel="stylesheet" href="/styles/convertkit-forms.css" />

      {/* Load ConvertKit form utilities */}
      <script src="/utils/convertkit-form.js" defer />

      {/* Form */}
      <form
        action={config.action}
        className={`${defaultFormClassName} ${className}`}
        data-sv-form={config.formId}
        data-uid={config.uid}
        data-format="inline"
        data-version="5"
        method="post"
      >
        <div className="formkit-alert" role="alert" />

        <input name="email_address" aria-label="Email Address" placeholder="Enter your email address" required type="email" className={fieldClassName || defaultFieldClassName} />

        {design === 'checklist' && <input name="fields[first_name]" aria-label="First Name" placeholder="First Name" className={fieldClassName || defaultFieldClassName} />}

        <button data-element="submit" className={`${buttonClassName || defaultButtonClassName} AhrefsAnalytics-event-newsletter_signup`} type="submit">
          <span className="relative z-10">{buttonText}</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
        </button>
      </form>
    </>
  );
};

export default ConvertKitFormSimple;
