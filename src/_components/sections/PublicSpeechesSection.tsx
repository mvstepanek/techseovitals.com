import React from 'react';
import SectionHeader from '../ui/SectionHeader';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import { COMMON_STYLES } from '../../_data/constants';
import Icons from '../ui/Icons';

interface PublicSpeechesSectionProps {
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const PublicSpeechesSection: React.FC<PublicSpeechesSectionProps> = ({ t = defaultT }) => (
  <section className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
    <BackgroundDecorations variant="centered" />
    <div className={`relative ${COMMON_STYLES.containerWidth}`}>
      <SectionHeader
        badge={{
          icon: <Icons.video className="w-4 h-4" />,
          text: t('speaking.badge'),
        }}
        title={<span dangerouslySetInnerHTML={{ __html: t('speaking.title') }} />}
        subtitle={t('speaking.subtitle')}
      />
      <div className="max-w-6xl mx-auto">
        <div className={COMMON_STYLES.twoColumnGrid}>
          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-3xl p-6 shadow-xl border border-gray-200">
            <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube-nocookie.com/embed/XUgiA17sMK4?si=5uspHyBCvqLjQDco"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                <a href="https://www.youtube.com/watch?v=XUgiA17sMK4" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-purple-600 transition-colors">
                  #seocharity - Crawl Budget From the Other Side
                </a>
              </h3>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-gray-50 rounded-3xl p-6 shadow-xl border border-gray-200 flex items-center justify-center">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{t('speaking.more-soon')}</h3>
              <p className="text-gray-600 text-sm">{t('speaking.more-soon.description')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PublicSpeechesSection;
