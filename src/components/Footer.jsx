import React from 'react'
import footerImage from './assets/Group 62.png'

const Footer = () => {
    return (
        <div>
            <div className='bg-black flex flex-col sm:flex-row justify-between py-8'>
                <div className='px-4 sm:px-24'>
                    <img src={footerImage.src} className='max-w-[193.49px] h-[50px] mt-4' />
                    <p className='text-base font-openSans text-white font-normal'>From Redlines to As-Builts in minutes</p>
                </div>
                <div className='flex flex-col sm:flex-row gap-14 justify-between px-4 sm:px-0 sm:pr-24'>
                    <div className='text-base font-openSans text-white font-semibold'>
                        <h1 className='text-base font-inter text-white font-semibold mt-4 sm:mt-0'>Product</h1>
                        <p className='text-sm font-openSans text-white font-normal mt-4 sm:mt-8'>How It Works</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>Features</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>Pricing</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>Request Demo</p>
                    </div>
                    <div className='text-base font-openSans text-white font-semibold'>
                        <h1 className='text-base font-inter text-white font-semibold '>Company</h1>
                        <p className='text-sm font-openSans text-white font-normal mt-4 sm:mt-8'>About Us</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>Blog</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>Contact</p>
                    </div>
                    <div className='text-base font-openSans text-white font-semibold'>
                        <h1 className='text-base font-inter text-white font-semibold'>Resources</h1>
                        <p className='text-sm font-openSans text-white font-normal mt-4 sm:mt-8'>Help Center</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>Documentation</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>Tutorials</p>
                        <p className='text-sm font-openSans text-white font-normal mt-1.5'>FAQs</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
