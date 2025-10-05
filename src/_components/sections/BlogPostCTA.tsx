import React from 'react';
import Icons from '../ui/Icons';
import SectionHeader from '../ui/SectionHeader';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import CTAWithTrustSignals from '../ui/CTAWithTrustSignals';
import { COMMON_STYLES } from '../../_data/constants';

interface BlogPostCTAProps {
  t?: (key: string) => string;
}

const BlogPostCTA: React.FC<BlogPostCTAProps> = ({ t = (key) => key }) => (
  <section className="py-24 bg-white relative overflow-hidden border-t border-gray-200">
    <BackgroundDecorations variant="default" />
    <div className={`relative ${COMMON_STYLES.containerWidth}`}>
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeader
          badge={{
            icon: <Icons.lightning className="w-4 h-4" />,
            text: t('blog.cta.badge'),
          }}
          title={t('blog.cta.title')}
          subtitle={t('blog.cta.description')}
          className="mb-12"
        />
        <CTAWithTrustSignals text={t('cta.free-check')} href={t('url.contact')} trustSignals={[t('trust.free-consultation'), t('trust.no-commitment')]} />
      </div>
    </div>
  </section>
);

export default BlogPostCTA;
