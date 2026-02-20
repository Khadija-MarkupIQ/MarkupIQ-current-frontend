import React from 'react'
import { inter } from '../layout'
import messageicon from '..//..//components//assets//message-circle-warning.png'
import creditcard from '..//..//components//assets//credit-card.png'
import cross from '..//..//components//assets//x.png'


const Billing = () => {
  return (
    <div>
      <div className='px-6'>
        <div>
          <h1 className={`${inter.className} text-[#000024] mt-4 font-semibold text-[20px]`}>Billing & Subscription</h1>
          <p className={`${inter.className} text-[#4B4B55] font-medium mt-1 text-[14px]`}>Manage your billing and subscription information</p>
        </div>
        <div className={`${inter.className} flex gap-3 mt-8`}>
          <img src={messageicon.src} className='w-5 h-5' />
          <p className='font-medium text-[14px] text-[#4B4B55]'>Your starter plan ends on November 17th, 2025</p>
          <button className={`${inter.className} w-[97px] h-[35px] bg-[#4D8FF3] font-medium text-[12px] rounded-xl text-[#FFF]`}>Explore plans</button>
        </div>
        <div className='mt-7'>
          <h1 className={`${inter.className} text-[#000024] font-semibold text-[16px]`}>Your Subscriptions</h1>
          <div className='border-2 mt-1 border-[#E5E7EB] flex flex-col justify-center w-[452px] pl-3 pr-3 h-[109px] rounded-xl'>
            <h1 className={`${inter.className} text-[#000024] font-medium text-[14px]`}>Starter</h1>
            <div className='flex justify-between'>
              <p className={`${inter.className} text-[#4B4B55] mt-1 font-medium text-[12px]`}>Perfect for Small GCs or Drafting Shops</p>
              <button className={`${inter.className} w-20 h-8 bg-[#4D8FF3] text-[10px] rounded-lg font-medium text-[#FFF]`} >Current plan</button>
            </div>
            <p className={`${inter.className} text-[#4D8FF3] font-bold text-[16px]`}>$249<strong className={`${inter.className} text-[#000000] font-medium text-[14px]`}>/month</strong></p>
          </div>
        </div>
        <div >
          <h1 className={`${inter.className} text-[#000024] mt-7 font-semibold text-[16px]`}>Payment Method
          </h1>
          <div className={`${inter.className} border-2 mt-1 border-[#E5E7EB] flex w-[452px] items-center justify-between pl-3 pr-4 h-[72px] rounded-xl`}>
            <div className='flex gap-3 items-center'>
              <img src={creditcard.src} className='w-7 h-7' />
              <div>
                <h1 className='text-[14px] font-medium leading-6'>Visa ending in 1234</h1>
                <p className='text-[#4B4B55] text-[12px] font-medium'>Expires 07/2028</p>
              </div>
            </div>

            <div className='flex gap-3 items-center'>
              <div>
                <button className={`${inter.className} bg-[#000024] font-medium text-[12px] rounded-xl w-[65px] h-[30px] text-[#FFF]`}>Update</button>
              </div>
              <div>
                <img src={cross.src} />
              </div>
            </div>
          </div>
          <button className={`${inter.className} font-medium text-[12px] w-[452px] h-[30px] rounded-xl mt-3 border-dashed border`}>+ Add New Payment Method</button>
        </div>
        <div className="mt-20 ">
          <table className={`${inter.className} w-[452px] h-50 border-collapse`} >

            {/* Table Header */}
            <thead className={`${inter.className} bg-[#F5F6FA] `}>
              <tr>
                <th className="px-4 py-3 text-left text-[14px] font-medium text-[#4B4B55]">
                  Date
                </th>
                <th className="px-4 py-3 text-left text-[14px] font-medium text-[#4B4B55]">
                  Amount
                </th>
                <th className="px-4 py-3 text-left text-[14px] font-medium text-[#4B4B55]">
                  Status
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              <tr className=" border-b border-[#D9D9D9] text-[12px] font-medium text-[#4B4B55]">
                <td className="px-4 py-3 ">Mar 1, 2025</td>
                <td className="px-4 py-3">$249</td>
                <td className="px-4 py-3"><button className='text-[#FFF] font-medium text-[12px] bg-green-500 w-[47px] h-5 rounded-xl'>Paid</button></td>
              </tr>

              <tr className="border-t border-b border-[#D9D9D9] text-[12px] font-medium text-[#4B4B55]">
                <td className="px-4 py-3 ">Apr 1, 2025</td>
                <td className="px-4 py-3">$249</td>
                <td className="px-4 py-3"><button className='text-[#FFF] font-medium text-[12px] bg-green-500 w-[47px] h-5 rounded-xl'>Paid</button></td>
              </tr>

              <tr className="border-t border-b border-[#D9D9D9] text-[12px] font-medium text-[#4B4B55]">
                <td className="px-4 py-3">May 1, 2025</td>
                <td className="px-4 py-3">$249</td>
                <td className="px-4 py-3"><button className='text-[#FFF] font-medium text-[12px] bg-green-500 w-[47px] h-5 rounded-xl'>Paid</button></td>
              </tr>
              <tr className="border-t border-b border-[#D9D9D9] text-[12px] font-medium text-[#4B4B55]">
                <td className="px-4 py-3">Jun 1, 2025</td>
                <td className="px-4 py-3">$249</td>
                <td className="px-4 py-3"><button className='text-[#FFF] font-medium text-[12px] bg-green-500 w-[47px] h-5 rounded-xl'>Paid</button></td>
              </tr>
            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Billing
