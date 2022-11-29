import * as React from 'react';
import { useTranslation } from 'react-i18next';

const Bottom = () => {

  const { t } = useTranslation();

  return (
    <>
      {/* <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 pb-16 md:pt-16 md:pb-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">{t('why')}</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  {t('why-subheading')}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-xl" data-aos="zoom-y-out" data-aos-delay="250">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h12V3H5zm2 2h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('free')}</h3>
                <p className="text-gray-600">{t('free-subheading')}</p>
              </div>
              <div className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-xl" data-aos="zoom-y-out" data-aos-delay="350">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h12V3H5zm2 2h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('secure')}</h3>
                <p className="text-gray-600">{t('secure-subheading')}</p>
              </div>
              <div className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-xl" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h12V3H5zm2 2h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">{t('simple')}</h3>
                <p className="text-gray-600">{t('simple-subheading')}</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>

  );
}

export default Bottom;