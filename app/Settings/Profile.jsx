
import React from 'react'
import { inter } from '@/app/layout'
import ToggleButon from '@/components/buttons/ToggleButon'

const Profile = () => {

  return (

    <div className='px-6'>
      <div>
        <h1 className={`${inter.className} text-[#000024] mt-4 font-semibold text-[20px]`}>Account Settings</h1>
        <p className={`${inter.className} text-[#4B4B55] mt-2 font-medium text-[14px]`}>Manage your MarkupIQ profile and preferences</p>
      </div>
      <div className='border-2 mt-8 border-[#E5E7EB] flex flex-col justify-center items-center w-[528px] h-[322px] rounded-xl'>
        <div className={`${inter.className} text-[#000024] font-semibold text-[14px] flex flex-col`}>
          <h1 className={`${inter.className} text-[#000024] font-bold text-[16px]`}>Personal Info</h1>
          <label className='mt-4'>Full Name</label>
          <input className='border border-[#E5E7EB] w-[480px] h-[42px] rounded-lg mt-2 px-4' />
        </div>
        <div className={`${inter.className} text-[#000024] mt-4 font-semibold text-[14px] flex flex-col`}>
          <label>Email</label>
          <input className='border border-[#E5E7EB] w-[480px] h-[42px] rounded-lg mt-2 px-4' />
        </div>
        <div className='flex gap-3'>
          <div className={`${inter.className} text-[#000024] mt-4 font-semibold text-[14px] flex flex-col`}>
            <label>Company</label>
            <input className='border border-[#E5E7EB] w-[234px] h-[42px] rounded-lg mt-2 px-4' />
          </div>
          <div className={`${inter.className} text-[#000024] mt-4 font-semibold text-[14px] flex flex-col`}>
            <label>Role</label>
            <input className='border border-[#E5E7EB] w-[234px] h-[42px] rounded-lg mt-2 px-4' />
          </div>

        </div>
      </div>
      <div className='border-2 mt-8 border-[#E5E7EB] flex pl-4 pr-4 flex-col justify-center w-[528px] h-[227px] rounded-xl'>
        <div>
          <h1 className={`${inter.className} text-[#000024] mt-4 font-bold text-[18px]`}>Notification Preferences</h1>
          <p className={`${inter.className} text-[#4B4B55] font-medium mt-1 text-[14px]`}>Manage your MarkupIQ notification preferences</p>
        </div>
        <div className='flex flex-col justify-center mt-4'>
          {/* <div className="space-y-4"> */}
          <div className={`${inter.className} flex text-[#000000] font-normal items-center text-[14px] justify-between`}>
            <p>Email alerts</p>
            <ToggleButon />
          </div>
          <div className={`${inter.className} flex text-[#000000] font-normal text-[14px] justify-between mt-4`}>
            <p>Comment mentions</p>
            <ToggleButon />

          </div>
          <div className={`${inter.className} flex text-[#000000] font-normal text-[14px] justify-between mt-4`}>
            <p>AI processing updates</p>
            <ToggleButon />
          </div>
          {/* </div> */}
        </div>
        <div>

        </div>

      </div>
      <div className='mt-18'>
        <button className={`${inter.className} w-[167px] h-10 bg-[#4D8FF3] text-[#FFF] rounded-xl`}>Save Changes</button>
      </div>
    </div>
  )
}

export default Profile
