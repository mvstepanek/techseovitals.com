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
    <div className={`w-full max-w-lg mx-auto ${className}`}>
      {title && (
        <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{title}</h3>
      )}
      {description && (
        <p className="text-gray-600 mb-6 text-center">{description}</p>
      )}
      
      <form className="space-y-4">
        <div>
          <input 
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            name="first_name" 
            placeholder={firstNamePlaceholder}
            required 
            type="text" 
          />
        </div>
        
        <div>
          <input 
            className="w-full px-4 py-3 text-base border border-gray-300 rounded-lg bg-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
            name="email_address" 
            placeholder={emailPlaceholder}
            required 
            type="email" 
          />
        </div>
        
        <button 
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-200 shadow-md hover:shadow-lg"
        >
          {buttonText}
        </button>
      </form>
      
      <p className="text-xs text-gray-500 text-center mt-4 leading-relaxed">
        No spam, ever. Unsubscribe at any time.
        <br />
        By subscribing, I agree to the Privacy Policy and Terms and Conditions.
      </p>

      <script async data-uid={formId} src="https://techseovitals.ck.page/1b414d8dc5/index.js"></script>
    </div>
  );
}