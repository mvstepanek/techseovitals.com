import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import { COMMON_STYLES } from '../../_data/constants';
import SchemaMarkup from '../utils/SchemaMarkup';
import FAQCard from '../ui/FAQCard';
import GridLayout from '../ui/GridLayout';
import Icons from '../ui/Icons';

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
      <SchemaMarkup schema={faqSchema} />

      <section className="py-24 bg-gradient-to-br from-gray-50 to-slate-100">
        <div className={COMMON_STYLES.containerWidth}>
          <SectionHeader
            badge={{
              icon: <Icons.questionMark className="w-4 h-4" />,
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
