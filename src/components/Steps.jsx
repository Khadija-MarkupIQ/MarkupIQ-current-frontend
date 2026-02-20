import React from 'react'
import StepsCard from './ui/StepsCard'
import uploadicon from './assets/File Icon.png'
import downloadicon from './assets/Download Icon.png'
import aiicon from './assets/AI Icon.png'
import { inter } from "../app/layout"

const Steps = () => {
    return (
        <div className=' -mt-14 sm:-mt-1 bg-[#E2E2E2] relative z-20 '>
            <div className='h-10 '>

            </div>

            <div className='max-w-[350px] sm:max-w-[1450px] mx-auto w-full flex flex-col sm:flex-row border-2 border-[#BEBEBE] rounded-xl justify-center items-center gap-8 sm:gap-50 py-6 sm:py-10  bg-[#ECE9E4]'>
                <div className="flex flex-col justify-center gap-8">
                    <h1 className={`${inter.className} text-[15px] text-center sm:text-left sm:text-[40px] font-bold w-48 sm:w-130 leading-5 mx-auto sm:leading-12`}>Turn Redlines to As-Builts
                        in <strong className='text-[#4D8FF3] font-semibold'>3 Easy Steps</strong></h1>
                    <p className={`${inter.className} text-[#000000] w-60 text-center sm:text-left mx-auto sm:mx-0 sm:w-120 text-[10px] sm:text-[16px]`}>MarkupIQ simplifies the contruction documents process. Just
                        upload your markups, let our AI turn Redlines to As-Builts</p>
                </div>
                <div className='flex flex-col gap-4 sm:gap-8'>
                    <StepsCard Image={uploadicon.src} heading="Upload Markups" text="Select PDF, DWG, DXF, or image files." />
                    <StepsCard Image={downloadicon.src} heading="AI Parses Changes" text="Computer Vision + OCR + NLP detect and apply edits." />
                    <StepsCard Image={aiicon.src} heading="Download As-Builts" text="AI + Rule Engine ensures every line, note, and edit is accurate." />
                </div>
            </div>

        </div>
    )
}

export default Steps
