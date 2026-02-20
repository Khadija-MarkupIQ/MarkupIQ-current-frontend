"use client";

import React, { useState } from 'react'
import profile from '..//..//..//components//assets//circle-user.png'
import security from '..//..//..//components//assets//lock.png'
import billing from '..//..//..//components//assets//credit-card.png'
import integrations from '..//..//..//components//assets//squares-intersect.png'
import { inter } from '@/app/layout'
import { Content } from 'next/font/google'
import Profile from '../Profile'
import Security from '../Security'
import Billing from '../Billing'
import Integrations from '../Integrations'

const page = () => {
  const [showContent, setShowContent] = useState("Profile")
  return (
    <div className='flex'>
      <div className='bg-[#F5F6FA] h-[833px] w-52'>
        <div className={`${inter.className} flex flex-col gap-8 font-medium text-[16px] py-6 px-2`}>
          <div className='flex gap-2'>
            <img src={profile.src} />
            <p onClick={() => setShowContent("Profile")}>Profile</p>
          </div>
          <div className='flex gap-2'>
            <img src={security.src} />
            <p onClick={() => setShowContent("Security")}>Security</p>
          </div>
          <div className='flex gap-2'>
            <img src={billing.src} />
            <p onClick={() => setShowContent("Billing")}>Billing</p>
          </div>
          <div className='flex gap-2'>
            <img src={integrations.src} />
            <p onClick={() => setShowContent("Integrations")}>Integrations</p>
          </div>

        </div>
      </div>
      <div>

        {showContent === "Profile" && <Profile />}
        {showContent === "Security" && <Security />}
        {showContent === "Billing" && <Billing />}
        {showContent === "Integrations" && <Integrations />}

      </div>
    </div>
  )
}

export default page