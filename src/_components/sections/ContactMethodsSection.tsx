import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';
import IconContainer from '../ui/IconContainer';
import SectionHeader from '../ui/SectionHeader';

const ContactMethodsSection: React.FC = () => (
  <section className="py-20 bg-gray-50">
    <div className={COMMON_STYLES.containerWidth}>
      <SectionHeader title="Multiple Ways to Connect" subtitle="Reach out directly for project inquiries or connect on social media for insights and updates" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer
            icon={
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z"
                />
              </svg>
            }
            color="purple"
            size="md"
            className="mx-auto mb-6"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
          <p className="text-gray-600 mb-4">Direct communication for project inquiries</p>
          <a href="mailto:martin@techseovitals.com" className="text-primary-500 hover:text-primary-700 font-semibold">
            martin@techseovitals.com
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer
            icon={
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640">
                <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM165 266.2L231.5 266.2L231.5 480L165 480L165 266.2zM236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160C219.5 160 236.7 177.2 236.7 198.5zM413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480L413.9 480z" />
              </svg>
            }
            color="blue"
            size="md"
            className="mx-auto mb-6"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-3">LinkedIn</h3>
          <p className="text-gray-600 mb-4">Connect professionally and see client success stories</p>
          <a href="https://www.linkedin.com/in/techseovitals/" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            /in/techseovitals
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer
            icon={
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640">
                <path d="M160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96L160 96zM320 311.4C334.5 281.4 374 225.6 410.7 198.1C437.2 178.2 480 162.9 480 211.8C480 221.6 474.4 293.9 471.1 305.6C459.7 346.4 418.1 356.8 381.1 350.5C445.8 361.5 462.3 398 426.7 434.5C359.2 503.8 329.7 417.1 322.1 394.9L321.8 394C320.9 391.4 320.4 389.9 320 389.9C319.6 389.9 319.1 391.4 318.2 394C318.1 394.3 318 394.6 317.9 394.9C310.3 417.1 280.8 503.7 213.3 434.5C177.8 398 194.2 361.5 258.9 350.5C221.9 356.8 180.3 346.4 168.9 305.6C165.6 293.9 160 221.6 160 211.8C160 162.9 202.9 178.3 229.3 198.1C266 225.6 305.5 281.5 320 311.4z" />
              </svg>
            }
            color="blue"
            size="md"
            className="mx-auto mb-6"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-3">Bluesky</h3>
          <p className="text-gray-600 mb-4">Quick updates and technical SEO tips</p>
          <a href="https://bsky.app/profile/techseovitals.com" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            @techseovitals.com
          </a>
        </div>
        <div className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 text-center">
          <IconContainer
            icon={
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 640 640">
                <path d="M378 320.2L282.8 266.1L282.8 374.3L378 320.2zM480 96L160 96C124.7 96 96 124.7 96 160L96 480C96 515.3 124.7 544 160 544L480 544C515.3 544 544 515.3 544 480L544 160C544 124.7 515.3 96 480 96zM494.4 232.1C502 260.7 502 320.3 502 320.3C502 320.3 502 379.9 494.4 408.4C490.2 424.2 477.9 436.1 462.2 440.3C433.9 448 320 448 320 448C320 448 206.1 448 177.8 440.4C162.1 436.2 149.8 424.3 145.6 408.5C138 379.9 138 320.3 138 320.3C138 320.3 138 260.6 145.6 232.1C149.8 216.3 162.1 203.9 177.8 199.7C206.1 192 320 192 320 192C320 192 433.9 192 462.2 199.7C477.9 203.9 490.2 216.3 494.4 232.1z" />
              </svg>
            }
            color="orange"
            size="md"
            className="mx-auto mb-6"
          />
          <h3 className="text-xl font-bold text-gray-900 mb-3">YouTube</h3>
          <p className="text-gray-600 mb-4">In-depth tutorials and case studies</p>
          <a href="https://youtube.com/@techseovitals" target="_blank" rel="noopener noreferrer" className="text-primary-500 hover:text-primary-700 font-semibold">
            @techseovitals
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default ContactMethodsSection;
