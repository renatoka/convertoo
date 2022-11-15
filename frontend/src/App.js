import logo from './images/logo.png'
import React, { useState, useEffect } from 'react';

function App() {

  const [top, setTop] = useState(true);

  const handlePostMethod = (e) => {
    e.preventDefault();
    document.getElementById('forma').submit();
  }

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (

    <>
      <header className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top && 'bg-white backdrop-blur-sm shadow-lg'}`}>
        <div className="max-w-6xl mx-auto px-5 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Site branding */}
            <div className="flex-shrink-0 mr-4">
              {/* Logo */}
              <a href="/" className="flex flex-row-reverse gap-2 items-center" aria-label="Cruip">
                <p className="text-lg md:text-xl ld:text-2xl font-bold text-gray-800">Convertoo</p>
                <img src={logo} width='32' height='32' alt="logo" />
              </a>
            </div>

            {/* Site navigation */}
            <nav className="flex flex-grow">
              <ul className="flex flex-grow justify-end flex-wrap items-center">
                <li>
                  <p className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 sm:flex items-center transition duration-150 ease-in-out p-3 rounded-lg hidden">GitHub</p>
                </li>
                <li>
                  <p className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 p-3 rounded-lg">
                    <span>Buy me a Coffee</span>
                  </p>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

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
              <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Converting was never this easy <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">with Convertoo</span></h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Convertoo is a free tool that helps you convert your DOCX files to PDF in seconds. No registration required.
                </p>
              </div>
            </div>
            <div>
              <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex flex-col justify-center w-full">
                  {/* <img className="mx-auto" src={HeroImage} width="768" height="432" alt="Hero" /> */}
                  <div className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <form className="flex flex-col text-sm text-gray-600 w-full" action="/" method="POST" encType="multipart/form-data" id='forma' onChange={handlePostMethod}>
                        <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                          <span>Upload a file</span>
                          <input id="file-upload" name="file" type="file" className="sr-only" />
                          {/* <input type="submit" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 p-3 rounded-lg" value="Convert" /> */}
                        </label>
                      </form>
                      <p className="text-xs text-gray-500">DOCX up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Convertoo? */}
      <section className="bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-12 pb-16 md:pt-16 md:pb-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Why Convertoo?</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">
                  Convertoo is a free tool that helps you convert your DOCX files to PDF in seconds. No registration required.
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
                <h3 className="text-xl font-semibold mb-2">Free</h3>
                <p className="text-gray-600">Convertoo is a free tool that helps you convert your DOCX files to PDF in seconds. No registration required.</p>
              </div>
              <div className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-xl" data-aos="zoom-y-out" data-aos-delay="350">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h12V3H5zm2 2h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Secure</h3>
                <p className="text-gray-600">We do not store your files. All files are deleted from our servers immediately after the conversion.</p>
              </div>
              <div className="flex flex-col justify-between p-8 bg-white rounded-lg shadow-xl" data-aos="zoom-y-out" data-aos-delay="450">
                <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-blue-100">
                  <svg className="w-8 h-8 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1H4a1 1 0 01-1-1V3zm2 0v14h12V3H5zm2 2h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1V6a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1zm0 4h8a1 1 0 011 1v2a1 1 0 01-1 1H7a1 1 0 01-1-1v-2a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Simple</h3>
                <p className="text-gray-600">Upload your DOCX file and we will start the process. That's it. You will get your PDF file in seconds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="bg-gray-100">
        <div className="container mx-auto px-4">
          <p className="text-center text-gray-600 text-sm">© 2022 Convertoo. All rights reserved.</p>
          <p className="text-center text-gray-600 text-sm mb-8">Made with ❤️ by <a href="https://github.com/renatoka" className="text-blue-500 hover:underline">@renatoka</a></p>
        </div>
      </section>
    </>
  );
}
export default App;