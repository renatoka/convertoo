import { useTranslation } from "react-i18next"

const Main = () => {

  const { t } = useTranslation()

  const handlePostMethod = (e) => {
    e.preventDefault();
    document.getElementById('forma').submit();
  }

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Illustration behind hero content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
          <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>
        {/* Hero */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 pb-12 md:pb-20">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">{t('convert')}<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Convertoo</span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  {t('convert-subheading')}
                </p>
              </div>
            </div>
            <div>
              <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex flex-col justify-center w-full">
                  <form className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-md" action="/upload" method="POST" encType="multipart/form-data" id='forma' onChange={handlePostMethod}>
                    <div className="space-y-1 text-center">
                      <div className="flex flex-col text-sm text-gray-600 w-full">
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>{t('upload')}</span>
                          <input id="file-upload" name="file" type="file" className="sr-only" />
                        </label>
                      </div>
                      <p className="text-xs text-gray-500">{t('upload-subheading')}</p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;