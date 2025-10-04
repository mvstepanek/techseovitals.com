import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import IconContainer from '../ui/IconContainer';
import SectionHeader from '../ui/SectionHeader';
import GridLayout from '../ui/GridLayout';
import Icons from '../ui/Icons';

const ContactMethodsSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader title="Multiple Ways to Connect" subtitle="Reach out directly for project inquiries or connect on social media for insights and updates" />
      <GridLayout columns={4}>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.email className="w-8 h-8 text-white" />} color="purple" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
          <p className="text-gray-600 mb-4">Direct communication for project inquiries</p>
          <a href="mailto:martin@techseovitals.com" className="text-primary-500 hover:text-primary-700 font-semibold">
            martin@techseovitals.com
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.linkedin className="w-8 h-8 text-white" />} color="blue" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">LinkedIn</h3>
          <p className="text-gray-600 mb-4">Connect professionally and see client success stories</p>
          <a href="https://www.linkedin.com/in/techseovitals/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            /in/techseovitals
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.bluesky className="w-8 h-8 text-white" />} color="blue" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Bluesky</h3>
          <p className="text-gray-600 mb-4">Quick updates and technical SEO tips</p>
          <a href="https://bsky.app/profile/techseovitals.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            @techseovitals.com
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer icon={<Icons.youtube className="w-8 h-8 text-white" />} color="red" size="md" className="mx-auto mb-6" />
          <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube</h3>
          <p className="text-gray-600 mb-4">In-depth tutorials and case studies</p>
          <a href="https://youtube.com/@techseovitals" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            @techseovitals
          </a>
        </div>
      </GridLayout>
    </div>
  </section>
);

export default ContactMethodsSection;
