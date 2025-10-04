import React from 'react';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import CTAWithTrustSignals from '../cta/CTAWithTrustSignals';

const BlogPostCTA: React.FC = () => (
  <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
    <BackgroundDecorations variant="default" />
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          badge={{
            icon: <Icons.lightning className="w-4 h-4" />,
            text: 'Ready to Get Started?',
          }}
          title={
            <>
              Let&apos;s Transform Your Website Into a <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Revenue Engine</span>
            </>
          }
          subtitle="Don't let technical issues hold your business back. Get expert technical SEO guidance and turn your website into your most powerful sales tool."
          className="mb-12"
        />
        <CTAWithTrustSignals text="Get Free Website Check" href="/contact/" trustSignals={['Free consultation', 'No commitment']} />
      </div>
    </div>
  </section>
);

export default BlogPostCTA;
