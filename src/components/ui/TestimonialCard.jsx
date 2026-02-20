import React from 'react'
import vector1 from '../assets/Vector (1).png'
import { inter } from '@/app/layout'

const TestimonialCard = (props) => {
  return (
    <div className={`${inter.className} py-6 border-[#BEBEBE] rounded-xl border flex flex-col justify-center px-6`}>
      <img src={vector1.src} className='w-[19px] h-[15px] sm:w-[32.93px] sm:h-[26px]' />
      <h1 className='text-[#000000] font-bold text-[14.09px] sm:text-[22px] w-[16.1rem] sm:w-[25.8rem] mt-2'>{props.heading}</h1>
      <div className='mt-8 flex gap-4'>
        <div>
          <img src={props.image} className='w-[35px] h-[35px] sm:w-15 sm:h-15' />
        </div>
        <div >
          <p className='font-bold text-[14.09px] sm:text-[22px]'>{props.name}</p>
          <p className='text-[9.39px] sm:text-[16px]'>{props.designation}</p>
        </div>

      </div>
    </div>
  )
}

export default TestimonialCard
