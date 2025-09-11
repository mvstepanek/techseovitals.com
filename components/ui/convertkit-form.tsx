'use client';

interface ConvertKitFormProps {
  formId: string;
  title?: string;
  description?: string;
  buttonText?: string;
  emailPlaceholder?: string;
  firstNamePlaceholder?: string;
  className?: string;
}

export default function ConvertKitForm({
  formId,
  title,
  description,
  buttonText = "Get Your Free Checklist",
  emailPlaceholder = "Your email address",
  firstNamePlaceholder = "First name",
  className = ""
}: ConvertKitFormProps) {
  return (
    <div className={`w-full max-w-2xl mx-auto ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 mb-6 text-center">{description}</p>
      )}
      
      <div className="space-y-4">
        <input 
          className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 bg-white placeholder-gray-500 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-200"
          name="first_name" 
          placeholder={firstNamePlaceholder}
          required 
          type="text" 
        />
        
        <input 
          className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 bg-white placeholder-gray-500 focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-200"
          name="email_address" 
          placeholder={emailPlaceholder}
          required 
          type="email" 
        />
        
        <button 
          type="submit"
          className="w-full rounded-xl bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-lg font-bold text-white shadow-lg transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5"
        >
          {buttonText}
        </button>
      </div>
      
      <p className="text-sm text-gray-500 text-center mt-4">
        No spam, ever. Unsubscribe at any time.<br />
        By subscribing, I agree to the <a href="/privacy-policy" className="underline hover:no-underline">Privacy Policy</a> and <a href="/terms-and-conditions" className="underline hover:no-underline">Terms and Conditions</a>.
      </p>

      <script async data-uid={formId} src="https://techseovitals.ck.page/1b414d8dc5/index.js"></script>
    </div>
  );
}