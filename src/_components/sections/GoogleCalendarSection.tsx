import React from 'react';
import { COMMON_STYLES } from '../../_data/constants';

const GoogleCalendarSection: React.FC = () => (
  <section id="appointment-form" className="py-20 bg-white relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute top-20 left-20 w-32 h-32 bg-purple-200 rounded-full blur-3xl" />
      <div className="absolute bottom-32 right-32 w-48 h-48 bg-indigo-200 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-150 to-indigo-150 rounded-full blur-3xl opacity-50" />
    </div>
    <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold ${COMMON_STYLES.gradientBg} text-white shadow-lg mb-6`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          Schedule a Meeting
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
          Book Your <span className={COMMON_STYLES.gradientText}>Free Consultation</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose a time that works best for you to discuss your website&apos;s technical SEO needs and opportunities for growth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Google Calendar Appointment Form */}
        <div className="lg:col-span-2 bg-white rounded-3xl shadow-lg border border-gray-200 p-8 lg:p-10">
          {/* Google Calendar Appointment Scheduling begin */}
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2ZET32Z5Gz3OvjkSN5ZjcX6qfVz-ZeY0GvkluzoPgQ2jnsOJO7ZVphGximWfh_ymjMYGF2A2oX?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="600"
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
          />
          {/* end Google Calendar Appointment Scheduling */}
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Let&apos;s Connect</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 4.26a2 2 0 002.22.0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5A2 2 0 003 7v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Email</h4>
                  <p className="text-sm text-gray-600 mb-2">Prefer direct communication?</p>
                  <a
                    href="mailto:martin@techseovitals.com"
                    className="text-sm text-purple-600 hover:text-purple-700 font-semibold"
                  >
                    martin@techseovitals.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-sm text-gray-600">I typically respond within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">Free Consultation</h4>
                  <p className="text-sm text-gray-600">No obligation initial discussion about your project</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-8 border border-purple-100">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900">Quick Tip</h4>
            </div>
            <p className="text-gray-700">
              The more details you provide about your current challenges and goals, the better I can tailor my initial
              recommendations to your specific needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default GoogleCalendarSection;