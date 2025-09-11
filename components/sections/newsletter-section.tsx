import Link from 'next/link';

interface NewsletterSectionProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  description: string;
  formAction?: string;
  firstNamePlaceholder?: string;
  emailPlaceholder?: string;
  submitText?: string;
  socialProof?: {
    icon: React.ReactNode;
    text: string;
  };
  disclaimer?: string;
  privacyLink?: {
    text: string;
    href: string;
  };
  termsLink?: {
    text: string;
    href: string;
  };
}

export default function NewsletterSection({
  badge,
  badgeIcon,
  title,
  description,
  formAction = "/thank-you-for-subscribing/",
  firstNamePlaceholder = "First name",
  emailPlaceholder = "Business email",
  submitText = "Subscribe",
  socialProof,
  disclaimer,
  privacyLink,
  termsLink
}: NewsletterSectionProps) {
  return (
    <section className="relative py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-700 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse" style={{
          animation: 'pulse 20s ease-in-out infinite, bounce 25s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/5 rounded-full blur-3xl" style={{
          animation: 'pulse 18s ease-in-out infinite reverse'
        }}></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl rotate-45 opacity-20" style={{
          animation: 'bounce 22s ease-in-out infinite'
        }}></div>
        <div className="absolute top-16 right-1/4 w-20 h-20 bg-gradient-to-br from-indigo-300 to-purple-400 rounded-3xl rotate-12 opacity-15" style={{
          animation: 'pulse 24s ease-in-out infinite'
        }}></div>
        <div className="absolute bottom-40 left-1/4 w-28 h-28 bg-white/8 rounded-full blur-2xl" style={{
          animation: 'bounce 26s ease-in-out infinite reverse'
        }}></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 bg-gradient-to-br from-purple-300 to-indigo-300 rounded-2xl rotate-45 opacity-25" style={{
          animation: 'pulse 21s ease-in-out infinite, bounce 28s ease-in-out infinite reverse'
        }}></div>
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white border border-white/30 backdrop-blur-sm mb-6">
              {badgeIcon}
              {badge}
            </div>
          )}

          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
            {title}
          </h2>
          <p className="text-xl text-purple-100 mb-10 leading-relaxed max-w-3xl mx-auto">
            {description}
          </p>
          
          {/* Newsletter form */}
          <div className="max-w-3xl mx-auto mb-8">
            <form action={formAction} method="POST" className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder={firstNamePlaceholder}
                  className="w-full px-6 py-4 text-lg border-0 rounded-2xl bg-white/95 backdrop-blur-sm placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:bg-white transition-all shadow-lg"
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder={emailPlaceholder}
                  className="w-full px-6 py-4 text-lg border-0 rounded-2xl bg-white/95 backdrop-blur-sm placeholder-gray-500 focus:ring-4 focus:ring-white/30 focus:bg-white transition-all shadow-lg"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-purple-600 font-bold py-4 px-8 rounded-2xl hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl whitespace-nowrap"
              >
                {submitText}
              </button>
            </form>
          </div>

          {/* Social proof */}
          {socialProof && (
            <div className="flex items-center justify-center gap-2 text-purple-200 mb-4">
              {socialProof.icon}
              <span className="text-sm font-medium">{socialProof.text}</span>
            </div>
          )}

          {disclaimer && (
            <p className="text-sm text-purple-300 mb-2">
              {disclaimer}
            </p>
          )}
          
          {(privacyLink || termsLink) && (
            <p className="text-xs text-purple-300">
              By subscribing, I agree to the{' '}
              {privacyLink && (
                <>
                  <Link href={privacyLink.href} className="underline hover:text-white transition-colors">
                    {privacyLink.text}
                  </Link>
                  {termsLink && ' and '}
                </>
              )}
              {termsLink && (
                <Link href={termsLink.href} className="underline hover:text-white transition-colors">
                  {termsLink.text}
                </Link>
              )}
              .
            </p>
          )}
        </div>
      </div>
    </section>
  );
}