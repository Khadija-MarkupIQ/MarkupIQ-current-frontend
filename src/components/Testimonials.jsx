import React from 'react'
import TestimonialCard from './ui/TestimonialCard'
import img1 from '../components/assets/Ellipse 7.png'
import img2 from '../components/assets/Ellipse 7 (1).png'
import img3 from '../components/assets/Ellipse 7 (2).png'
import { inter } from '@/app/layout'

const Testimonials = () => {
    return (
        <div className='mt-8 sm:mt-16'>
            <div className='flex flex-col-reverse sm:flex-row justify-center items-center gap-12 sm:gap-60'>
                <div className='flex flex-col gap-10'>
                    <TestimonialCard heading="MarkupIQ saves our team countless hours. it catches every detail in redlines that we used to miss" image={img1.src} name="James Earl" designation="Senior Engineer" />
                    <TestimonialCard heading="It feels like having an extra team member who never makes mistakes. MarkupIQ’s AI is incredibly precise and consistent" image={img2.src} name="Hassan Abdul" designation="Senior Drafting Engineer" />
                    <TestimonialCard heading="MarkupIQ has completely transformed how our team handles As-Builts. What used to take hours now takes minutes" image={img3.src} name="Jaxon Hayes" designation="BIM Coordinator" />
                </div>
                <div className={`${inter.className}`}>
                    <p className='hidden sm:text-[#000000]'>Testimonials</p>
                    <h1 className='font-bold  text-center sm:text-left text-[28px] mt-4'>What Our Clients Say</h1>
                    <p className='text-[#000000] text-[9.21px] text-center sm:text-left sm:text-[16px] mt-6 w-70 mx-auto sm:mx-0 sm:w-108'>See how our industry professionals are saving time and
                        improving accuracy with MarkupIQ</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
