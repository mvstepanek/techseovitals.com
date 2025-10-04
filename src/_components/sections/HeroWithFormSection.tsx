import React from 'react';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import ConvertKitForm from '../forms/ConvertKitForm';
import OptimizedImage from '../common/OptimizedImage';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import { COMMON_STYLES } from '../../_data/constants';

interface TrustSignalsProps {
  show: boolean;
  text?: string;
  images?: string[];
  stars?: boolean;
}

interface FormField {
  placeholder: string;
  type: 'text' | 'email';
  name: string;
  required?: boolean;
}

interface HeroWithFormProps {
  badge: {
    text: string;
  };
  title: React.ReactNode;
  description: string;
  trustSignals?: TrustSignalsProps;
  form: {
    title: string;
    subtitle: string;
    action: string;
    method?: string;
    fields: FormField[];
    submitButton: {
      text: string;
      variant?: 'primary' | 'newsletter';
    };
    dataAttributes?: {
      [key: string]: string;
    };
    convertKitOptions?: string;
  };
}

const HeroWithFormSection: React.FC<HeroWithFormProps> = ({ badge, title, description, trustSignals = { show: true, text: 'Trusted by website owners worldwide' }, form }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
      <div className="absolute inset-0 bg-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      <BackgroundDecorations variant="centered" />

      <div className={COMMON_STYLES.containerWidth}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <Badge icon={<div className="w-2 h-2 bg-white rounded-full animate-pulse" />}>{badge.text}</Badge>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl leading-tight">{title}</h1>

            <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg">{description}</p>

            {trustSignals?.show && (
              <div className="mt-10 flex flex-col gap-4">
                <div className="flex items-center gap-3 text-gray-600">
                  {trustSignals.stars ? (
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  ) : (
                    <div className="flex -space-x-2">
                      {trustSignals.images ? (
                        trustSignals.images.map((image, index) => (
                          <OptimizedImage key={index} src={image} alt={`Industry leader ${index + 1}`} className="w-12 h-12 rounded-full border-2 border-white object-cover" />
                        ))
                      ) : (
                        <>
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white" />
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-600 rounded-full border-2 border-white" />
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white" />
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full border-2 border-white" />
                        </>
                      )}
                    </div>
                  )}
                  <span className="text-sm font-semibold">{trustSignals.text}</span>
                </div>
              </div>
            )}
          </div>

          <div className="relative lg:ml-8">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-600/20 to-brand-600/20 rounded-3xl blur-2xl opacity-30" />
            <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-3">
                  <span>{form.title}</span>
                </h3>
                <p className="text-gray-600 text-lg">{form.subtitle}</p>
              </div>

              {form.dataAttributes && form.convertKitOptions ? (
                <ConvertKitForm
                  formType={(() => {
                    const formId = form.dataAttributes['data-sv-form'];
                    switch (formId) {
                      case '7514069':
                        return 'newsletter-page';
                      case '7969566':
                        return 'technical-seo-checklist';
                      case '7945460':
                        return 'website-migration-checklist';
                      case '8513383':
                        return '5-web-performance-metrics';
                      default:
                        return 'newsletter-page';
                    }
                  })()}
                  buttonText={form.submitButton.text}
                />
              ) : (
                <form action={form.action} method={form.method || 'POST'} className="space-y-4">
                  <div className="space-y-4">
                    {form.fields.map((field, index) => (
                      <div key={index} className="flex-1">
                        <input
                          className="w-full px-6 py-4 text-lg rounded-xl border border-gray-300 bg-white placeholder-gray-500 focus:ring-4 focus:ring-primary-500 focus:ring-opacity-20 focus:border-primary-500 transition-all duration-200"
                          placeholder={field.placeholder}
                          required={field.required !== false}
                          type={field.type}
                          name={field.name}
                          aria-label={field.placeholder}
                        />
                      </div>
                    ))}

                    <Button type="submit" variant={form.submitButton.variant || 'primary'} className="w-full AhrefsAnalytics-event-newsletter_signup">
                      <span>{form.submitButton.text}</span>
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroWithFormSection;
