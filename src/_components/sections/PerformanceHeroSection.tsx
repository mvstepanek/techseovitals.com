import React from 'react';
import ConvertKitForm from '../forms/ConvertKitForm';
import Badge from '../ui/Badge';
import BackgroundDecorations from '../ui/BackgroundDecorations';
import { COMMON_STYLES } from '../../_data/constants';

interface Props {
  t?: (key: string) => string;
}

const defaultT = (key: string) => key;

const PerformanceHeroSection: React.FC<Props> = ({ t = defaultT }) => (
  <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-20 lg:py-28">
    <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
    <BackgroundDecorations variant="centered" />
    <div className={COMMON_STYLES.containerWidth}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl text-center sm:text-left">
          <Badge icon={<div className="w-2 h-2 bg-white rounded-full animate-pulse" />}>{t('performance-metrics.badge')}</Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight text-left sm:text-left" dangerouslySetInnerHTML={{ __html: t('performance-metrics.title') }} />
          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-lg text-left sm:text-left">
            {t('performance-metrics.subtitle')}
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <div className="flex items-center gap-3 text-gray-600 justify-start">
              <div className="flex text-yellow-400 text-sm">★★★★★</div>
              <span className="text-sm font-semibold text-left">{t('performance-metrics.rating')}</span>
            </div>
          </div>
        </div>
        <div className="relative lg:ml-8">
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-primary-600/20 rounded-3xl blur-2xl opacity-30" />
          <div className="relative bg-white rounded-3xl shadow-2xl border-4 border-white p-8">
            <div className="text-center mb-6">
              <h3 className="text-3xl font-bold mb-3" dangerouslySetInnerHTML={{ __html: t('performance-metrics.form.title') }} />
              <p className="text-gray-600 text-lg mb-2">{t('performance-metrics.form.subtitle')}</p>
              {t('performance-metrics.form.english-only') !== 'performance-metrics.form.english-only' && (
                <div className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-600">{t('performance-metrics.form.english-only')}</span>
                </div>
              )}
            </div>
            <ConvertKitForm formType="5-web-performance-metrics" buttonText={t('performance-metrics.form.button')} t={t} />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PerformanceHeroSection;
