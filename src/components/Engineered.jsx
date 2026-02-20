import React from 'react'
import { inter } from "../app/layout"
import EngineeredCard from './ui/EngineeredCard'
import featureIcon from '.././components/assets/featureIcon.png'

const Engineered = () => {
  return (
    <div className='max-w-[350px] sm:max-w-[1450px] mx-auto w-full mt-8'>
      <div className='flex flex-col border-2 bg-[#ECE9E4] border-[#BEBEBE] rounded-xl py-6 justify-center '>
        <div className='flex flex-col text-center justify-center items-center'>
          <h1 className={`${inter.className} text-[14px] sm:text-[40px] font-bold leading-5 max-w-40 sm:max-w-180 sm:leading-12`}>Engineered for <i className='text-[#4D8FF3] font-semibold'>Accuracy</i> and Speed</h1>
          <p className={`${inter.className} text-[#000000] max-w-54.5 sm:max-w-115 text-[11px] sm:text-[18px] mt-5 sm:mt-6`}>MarkupIQ combines AI and automation to deliver
            clean, reliable As-Builts in minutes</p>
        </div>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-14 justify-center items-center mt-12 '>
          <EngineeredCard Image={featureIcon.src} heading="AI-Powered Parsing" text="Automatically detect redlines, notes and edits with high accuracy using advanced AI" />
          <EngineeredCard Image={featureIcon.src} heading="Multi-Format Support" text="Upload your Redline PDFs, DWGs, DXFs or images markups and work seamlessly across formats" />
          <EngineeredCard Image={featureIcon.src} heading="Fast Turnaround" text="Convert markups into clean As-Builts in minutes instead of days" />
        </div>
        <div className='flex flex-col sm:flex-row gap-4 sm:gap-14 justify-center mt-4 sm:mt-12 items-center '>
          <EngineeredCard Image={featureIcon.src} heading="Seamless Collaboration" text="Share updated drawings instantly with your team and clients to keep projects moving" />
          <EngineeredCard Image={featureIcon.src} heading="Version Tracking" text="Select PDF, DWG, DXF, or image files." />
          <EngineeredCard Image={featureIcon.src} heading="Secure Storage" text="Keep your files safe with encrypted, cloud-based storage you can trust" />
        </div>
      </div>
    </div>
  )
}

export default Engineered
