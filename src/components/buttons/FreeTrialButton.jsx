import React from 'react'
import { inter } from '@/app/layout'

const FreeTrialButton = () => {
    return (
        <div className={`${inter.className} flex items-center text-[10.29px] sm:text-[15px] h-9 px-[12.86px] py-[6.43px] sm:px-5 sm:py-2.5 sm:h-14 border-hidden text-[#F5F5F5] rounded-[10px] bg-[#C1C7DB]/50`}>
            <button >Start Free Trail</button>
        </div>
    )
}

export default FreeTrialButton
