import React from 'react'
import { inter } from '@/app/layout'

const page = () => {
    return (
        <div className='px-8 py-8'>
            <div className={`${inter.className}`}>
                <p className='font-medium text-[22px]'>Create New Project</p>
                <p className='font-medium text-[#000000] text-[14px] mt-2'>Add project details to get started</p>
            </div>
            <div className={`${inter.className} flex flex-col mt-8`}>
                <label className='mt-4'>
                    Project Name
                </label>
                <input placeholder='Enter a clear project name' className='mt-2 border-[#E5E7EB] border h-[42px] rounded-lg px-3 w-[480px]' />
                <label className='mt-4'>
                    Project Type
                </label>
                <input placeholder='Select project type' className='mt-2 border-[#E5E7EB] border h-[42px] rounded-lg px-3 w-[480px]' />
                <label className='mt-4'>
                    Description
                </label>
                <textarea name="" id="" placeholder='Optional' className='mt-2 border-[#E5E7EB] border h-[84px] rounded-lg px-3 w-[480px]' ></textarea>
                <label className='mt-4'>
                    Enter email
                </label>
                <div className='flex gap-4'>
                <input placeholder='Enter a clear project name' className='mt-2 border-[#E5E7EB] border h-[42px] rounded-lg px-3 w-[387px]' />
                <button className='w-[85px] h-[42px] bg-[#4a90e2] rounded-lg text-white mt-2'>Add</button>
                </div>
            </div>
            <div className=''>
                <button className={`${inter.className} bg-[#4a90e2] text-white text-[14px] font-medium w-[480px] h-[42px] rounded-lg mt-16`}>Continue to Upload</button>
            </div>
            <div>

            </div>
        </div>
    )
}

export default page
