import React from 'react'
import frame190 from './assets/Frame 190 (8).png'
import FreeTrialButton from './buttons/FreeTrialButton'
import DemoButton from './buttons/DemoButton'
import { inter } from '@/app/layout'

const BuildFaster = () => {
    return (
        <>
            <div className='mt-40 '>
            </div>
            <div className={`${inter.className} text-[#FFF] bg-[#4a90e2] flex flex-col sm:flex-row justify-center gap-2 sm:gap-18 `}>
                <div className='flex flex-col justify-center px-6 py-16 sm:py-0 sm:px-60'>
                    <h1 className='font-bold text-[18px] sm:text-[24px]'>Build Faster, Deliver Smarter</h1>
                    <h1 className='font-light text-[13px] sm:text-[15px] w-68 sm:w-lg mt-2 sm:mt-4'>Automate your redline to As-Built workflow with MarkupIQ’s AI-powered
                        precision. Save time, reduce errors, and scale your projects effortlessly</h1>
                    <div className='mt-8 flex gap-6 sm:gap-10 '>
                        <FreeTrialButton />
                        <DemoButton />
                    </div>
                </div>
                <div className='mt-0 sm:mt-10 mx-auto'>
                    <img src={frame190.src} />
                </div>
            </div>

        </>
    )
}

export default BuildFaster
