import React from 'react'
import { inter } from '@/app/layout'
import Link from 'next/link'

const DemoButton = () => {
  return (
    <div className={`${inter.className} flex items-center text-[10.29px] sm:text-[15px] h-9 px-[12.86px] py-[6.43px] sm:px-5 sm:py-2.5 sm:h-14 text-[#4D8FF3] rounded-[10px] bg-[#F5F5F5]`}>
      <Link href="/RequestDemo"><button >Request Demo</button>
      </Link>
    </div>
  )
}

export default DemoButton