import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import IconContainer from '../ui/IconContainer';
import SectionHeader from '../ui/SectionHeader';
import GridLayout from '../ui/GridLayout';
import Icons from '../ui/Icons';

interface ContactMethodsSectionProps {
  t?: (key: string) => string;
}

const ContactMethodsSection: React.FC<ContactMethodsSectionProps> = ({ t = (key) => key }) => (
  <section className={`${COMMON_STYLES.sectionPadding} bg-gray-50`}>
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader title={t('contact.methods.title')} subtitle={t('contact.methods.subtitle')} />
      <GridLayout columns={4}>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.email className="w-8 h-8 text-white" />} color="purple" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">{t('contact.email.title')}</h3>
          <p className="text-gray-600 mb-4">{t('contact.email.description')}</p>
          <a href="mailto:martin@techseovitals.com" className="text-primary-500 hover:text-primary-700 font-semibold">
            {t('contact.email.address')}
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.linkedin className="w-8 h-8 text-white" />} color="blue" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">{t('footer.social.linkedin')}</h3>
          <p className="text-gray-600 mb-4">{t('contact.linkedin.description')}</p>
          <a href="https://www.linkedin.com/in/techseovitals/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            {t('contact.linkedin.handle')}
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.bluesky className="w-8 h-8 text-white" />} color="blue" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">{t('footer.social.bluesky')}</h3>
          <p className="text-gray-600 mb-4">{t('contact.bluesky.description')}</p>
          <a href="https://bsky.app/profile/techseovitals.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            {t('contact.bluesky.handle')}
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.youtube className="w-8 h-8 text-white" />} color="red" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">{t('footer.social.youtube')}</h3>
          <p className="text-gray-600 mb-4">{t('contact.youtube.description')}</p>
          <a href="https://youtube.com/@techseovitals" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            {t('contact.youtube.handle')}
          </a>
        </div>
      </GridLayout>
    </div>
  </section>
);

export default ContactMethodsSection;
