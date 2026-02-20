import React from 'react'
import { inter } from "../app/layout"
import FreeTrialButton from './buttons/FreeTrialButton'
import DemoButton from './buttons/DemoButton'

const FromRedline = () => {
    return (
        <div className='text-center flex flex-col mt-8 sm:mt-12'>
            <div className={``}>
                <h1 className={`${inter.className} w-full text-[#F5F5F5] font-bold mx-auto sm:max-w-[320px] max-w-[170px] text-[20px] sm:text-[32px] leading-7 sm:leading-10`}>From Redlines to
                    As-Builts in Minutes</h1>
            </div>
            <div className={`${inter.className} mt-4 sm:mt-7 text-[#F5F5F5] text-[14px] max-w-70 sm:text-[18px] sm:max-w-100 mx-auto`}>
                <p>AI-powered automation for the Architecture, Engineering, and Construction (AEC) industry</p>
            </div>
            <div className='mt-4 sm:mt-6 flex gap-6 sm:gap-10 justify-center'>
                <FreeTrialButton />
                <DemoButton />
            </div>
        </div>
    )
}

export default FromRedline
