import React from 'react'
import { inter } from '@/app/layout'
import vector2 from './assets/Vector (1).png'

const QNASection = () => {
    return (
        <div>
            <div className={`${inter.className}`}>
                <div className='text-center mt-15 sm:mt-40'>
                    <p className='text-[#000000] font-normal sm:font-semibold text-[14px] sm:text-[20px]'>Got questions? We’ve got answers</p>
                    <h1 className='font-inter text-[#000024] text-[24px] sm:text-[26px] font-bold mt-2'>Frequently Asked <strong className='font-bold text-[#4D8FF3] sm:text-[#000024]'>Questions </strong></h1>
                    <p className='text-[14px] w-60 sm:w-auto text-center mx-auto sm:text-base font-openSans text-[#000000] font-normal sm:font-medium mt-1 sm:mt-6'>Everything you need to know about MarkupIQ from setup to support</p>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center mt-12 '>
                    <div className='max-w-[300.50px] sm:max-w-[749px] w-full px-4 py-3 border rounded-xl bg-white flex items-center'>
                        <select className=' text-[#000024] text-[10px] sm:text-[18.97px] font-normal bg-[#FFF] flex-1'>
                            <option className='text-left'>How does MarkupIQ process redlines?</option>
                        </select>
                    </div>
                    <div className='max-w-[300.50px] sm:max-w-[749px] w-full px-4 py-3 border rounded-xl bg-white flex items-center'>
                        <select className=' text-[#000024] text-[10px] sm:text-[18.97px] font-normal bg-[#FFF] flex-1'>
                            <option> What file formats are supported ?</option>
                        </select>
                    </div>
                    <div className='max-w-[300.50px] sm:max-w-[749px] w-full px-4 py-3 border rounded-xl bg-white flex items-center'>
                        <select className=' text-[#000024] text-[10px] sm:text-[18.97px] font-normal bg-[#FFF] flex-1'>
                            <option> Can I collaborate with my team?</option>
                        </select>
                    </div>
                    <div className='max-w-[300.50px] sm:max-w-[749px] w-full px-4 py-3 border rounded-xl bg-white flex items-center'>
                        <select className='text-[#000024] text-[10px] sm:text-[18.97px] font-normal bg-[#FFF] flex-1'>
                            <option> Do pages roll over each month?</option>
                        </select>
                    </div>
                    <div className='max-w-[300.50px] sm:max-w-[749px] w-full px-4 py-3 border rounded-xl bg-white flex items-center'>
                        <select className='text-[#000024] text-[10px] sm:text-[18.97px] font-normal bg-[#FFF] flex-1'>
                            <option>Is there an API or integration option</option>
                        </select>
                    </div>
                    <div className='max-w-[300.50px] sm:max-w-[749px] w-full px-4 py-3 border rounded-xl bg-white flex items-center'>
                        <select className='text-[#000024] text-[10px] sm:text-[18.97px] font-normal bg-[#FFF] flex-1'>
                            <option> How do I get support if I need help?</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QNASection
