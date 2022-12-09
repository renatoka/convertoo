import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { UploadPopup } from "./chakra/UploadPopup";
import { useDropzone } from 'react-dropzone'

const allowedTypes = ['application/pdf', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
const errorAnimation = {
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5
    },
    y: 100
  },
  enter: {
    opacity: 1,
    transition: {
      duration: 0.5
    },
    y: 0
  },
  initial: {
    opacity: 0,
    y: 0
  }
}

const Main = () => {

  const { t } = useTranslation()
  const [error, setError] = useState('none')

  const uploadFile = (file) => {
    const formData = new FormData()
    formData.append("file", file)

    if (allowedTypes.includes(file.type) && file.size <= 10000000) {
      if (file.type === 'application/pdf') {
        setIsPDF(true)
      } else {
        setError('success')
        setTimeout(() => {
          setError('none')
          document.getElementById('forma').submit();
        }, 2000)
      }
    } else {
      if (file.size > 10000000) {
        setError('size')
      } else {
        setError('type')
      }
    }
  }

  const { getRootProps, getInputProps } = useDropzone({
    accept: '.docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf',
    onDrop: acceptedFiles => {
      uploadFile(acceptedFiles[0])
    }
  })

  return (
    <>
      <section className="relative overflow-hidden">
        {/* Illustration behind hero content */}
        <div className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none -z-10" aria-hidden="true">
          <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="228" r="88" />
              <circle cx="155" cy="443" r="124" />
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
              <div className="flex flex-col items-center justify-center w-full h-96 border-2 border-gray-300 border-dashed rounded-b-md" {...getRootProps()}>
                <form action="/upload" method="POST" encType="multipart/form-data" id='forma'>
                  <input {...getInputProps()} />
                  <div className="space-y-1 text-center">
                    <div className="flex flex-col text-sm text-gray-600 w-full">
                      <label htmlFor="file-upload" className="cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>{t('upload')}</span>
                        <input id="file-upload" name="file" type="file" className="sr-only" accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document, .pdf" />
                      </label>
                    </div>
                    <p className="text-xs text-gray-500">{t('upload-subheading')}</p>
                  </div>
                </form>
              </div>
            </div>
            {/* Error displaying under upload form */}
            <motion.div>
              <AnimatePresence>
                <motion.div variants={errorAnimation} initial="initial" animate="enter" exit="exit">
                  <UploadPopup error={error} />
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;