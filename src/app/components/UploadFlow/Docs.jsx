import React from 'react'
import Frame330 from '..//..//..//components//assets//Frame 330.png'
import Frame329 from '..//..//..//components//assets//Frame 329.png'
import circlecheck from '..//..//..//components//assets//circle-check-big.png'
import ToggleButon from '@/components/buttons/ToggleButon'
import { inter } from '@/app/layout'
import Link from 'next/link'

const Docs = () => {
    return (
        <div className='sm:px-4 sm:py-10'>
            <div className={`${inter.className} flex justify-between mx-auto `}>
                <div className=''>
                    <h1 className='font-semibold text-[18px] sm:text-[24px] text-[#000024]'>As-Built Preview</h1>
                    <p className='font-medium  sm:text-[16px] text-[#4B4B55]'>Review your As-Built before download</p>
                </div>
                <div className='flex gap-4'>
                    <p className='font-semibold text-[16px] '>Overlay Mode</p>
                    <ToggleButon />
                </div>
            </div>
            <div className={`${inter.className} flex gap-4 mt-10`}>
                <div >
                    <p className='font-semibold text-[20px]'>Original Drawing</p>
                    <img src={Frame329.src} className='max-w-[640px] w-full' />

                </div>
                <div>
                    <p className='font-semibold text-[20px]'>Updated As-Built</p>
                    <img src={Frame330.src} className='max-w-[640px] w-full' />
                </div>
            </div>
            <div className={`${inter.className} border border-[#ADAAAA] px-6 py-6 rounded-lg bg-[#FFF] mt-8`}>
                <h1 className='font-semibold text-[16px]'>Markup list</h1>
                <div className='flex gap-2 font-normal text-[14px] mt-2'><img src={circlecheck.src} className='w-4 h-4' /><p>Pipe rerouted</p></div>
                <div className='flex gap-2 font-normal text-[14px] mt-1'><img src={circlecheck.src} className='w-4 h-4' /><p>Wall shifted 200mm</p></div>
                <div className='flex gap-2 font-normal text-[14px] mt-1'><img src={circlecheck.src} className='w-4 h-4' /><p>New door added on Level 2</p></div>
            </div>
                <div className={`${inter.className} flex justify-between mt-6`}>
                    <Link href='/dashboard'><button className='font-medium text-[16px] text-[#000000] border border-[#D1D5DB] px-8 py-2 bg-[#FFF] rounded-xl'>Back to Dashboard</button>
                    </Link>
                    <div className='flex gap-2'>
                        <button className='font-medium text-[16px] text-[#000000] border border-[#D1D5DB] px-8 py-2 bg-[#FFF] rounded-xl'>Share for Review</button>
                        <button className='text-[#FFF] text-[14px] font-medium bg-[#4a90e2] px-8 py-2 rounded-xl'>Download As-Built</button>

                    </div>
            </div>
        </div>
    )
}

export default Docs
