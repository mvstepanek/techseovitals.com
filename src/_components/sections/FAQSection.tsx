import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { COMMON_STYLES } from '../../_data/constants';
import SchemaScript from '../utils/SchemaScript';
import FAQCard from '../ui/FAQCard';
import GridLayout from '../ui/GridLayout';

const FAQSection: React.FC = () => {
  // FAQ schema for SEO
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How is pricing determined?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pricing varies by site complexity and specific requirements. I provide transparent pricing after understanding your unique situation and goals.',
        },
      },
      {
        '@type': 'Question',
        name: 'How quickly will users notice improvements?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Users feel performance improvements immediately. Business metrics improve within weeks as better experiences lead to higher engagement and conversions.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are there long-term commitments?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No long-term commitments required, except for monitoring services which have a 3-month minimum to ensure meaningful results.',
        },
      },
      {
        '@type': 'Question',
        name: 'What makes the biggest impact?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Focusing on user experience first creates lasting value. I prioritize improvements that visitors actually feel, naturally driving better business outcomes.',
        },
      },
    ],
  };

  return (
    <>
      {/* FAQ Schema */}
      <SchemaScript schema={faqSchema} />

      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className={COMMON_STYLES.containerWidth}>
          <SectionHeader
            badge={{
              icon: (
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
              text: 'FAQ',
            }}
            title={
              <>
                Frequently Asked <span>Questions</span>
              </>
            }
            subtitle="Everything you need to know about creating exceptional website experiences that drive real results"
          />
          <GridLayout columns={2} gap="sm">
            <FAQCard question="How is pricing determined?" answer="Pricing varies by site complexity and specific requirements. I provide transparent pricing after understanding your unique situation and goals." />
            <FAQCard
              question="How quickly will users notice improvements?"
              answer="Users feel performance improvements immediately. Business metrics improve within weeks as better experiences lead to higher engagement and conversions."
            />
            <FAQCard
              question="Are there long-term commitments?"
              answer="No long-term commitments required, except for monitoring services which have a 3-month minimum to ensure meaningful results."
            />
            <FAQCard
              question="What makes the biggest impact?"
              answer="Focusing on user experience first creates lasting value. I prioritize improvements that visitors actually feel, naturally driving better business outcomes."
            />
          </GridLayout>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
