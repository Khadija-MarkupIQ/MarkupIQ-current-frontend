import React from 'react'
import { inter } from '../layout'
import ToggleButon from '@/components/buttons/ToggleButon'

const Security = () => {
  return (
    <div>
      <div className='px-6'>
        <div>
          <h1 className={`${inter.className} text-[#000024] mt-4 font-semibold text-[20px]`}>Security</h1>
          <p className={`${inter.className} text-[#4B4B55] font-medium mt-2 text-[14px]`}>Manage your password and account protection settings</p>
        </div>
        <div className='border-2 mt-8 border-[#E5E7EB] flex flex-col justify-center items-center w-[528px] h-[237px] rounded-xl'>
          <div className={`${inter.className} text-[#000024] font-semibold text-[14px] flex flex-col`}>
            <h1 className={`${inter.className} text-[#000024] font-bold text-[16px]`}>Edit Email & Password</h1>
            <label className='mt-4'>Email</label>
            <input className='border border-[#E5E7EB] w-[480px] h-[42px] rounded-lg mt-2 px-4' />
          </div>

          <div className={`${inter.className} text-[#000024] mt-4 font-semibold text-[14px] flex flex-col`}>
            <label>Password</label>
            <div className='flex gap-4 mt-2'>
              <input className='border border-[#E5E7EB] w-[321px] h-[42px] rounded-lg px-4' />
              <button className={`${inter.className} w-[143px] h-[42px] bg-[#4D8FF3] text-[#FFF] rounded-xl text-[14px] font-medium`}>Edit Password</button>
            </div>

          </div>
        </div>
        <div className='border-2 mt-8 border-[#E5E7EB] flex pl-4 pr-4 flex-col justify-center w-[528px] h-[143px] rounded-xl'>
          <div>
            <h1 className={`${inter.className} text-[#000024] mt-4 font-bold text-[18px]`}>Two-factor Authentication</h1>
            <p className={`${inter.className} text-[#4B4B55] font-medium mt-1 text-[14px]`}>Manage your Two-factor authentication</p>
          </div>
          <div className='flex flex-col justify-center mt-4'>
            <div className={`${inter.className} flex text-[#000000] font-normal items-center text-[14px] justify-between`}>
              <p>Enable Two-factor authentication</p>
              <ToggleButon />
            </div>
          </div>
          <div>
          </div>
        </div>
        <div className='mt-18'>
          <button className={`${inter.className} w-[167px] h-10 bg-[#4D8FF3] text-[#FFF] rounded-xl`}>Save Changes</button>
        </div>
      </div>
    </div>
  )
}

export default Security
