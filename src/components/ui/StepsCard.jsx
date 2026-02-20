import React from 'react'
import { inter } from "..//..//app/layout.js"

const StepsCard = (props) => {
    return (
        <div className={`border-[#BEBEBE] border-2 rounded-lg  flex flex-col gap-2 sm:gap-4 bg-[#F5F5F5] justify-center items-center max-w-[280px] sm:max-w-[380px] w-full py-5 sm:py-7 px-0 sm:px-4`}>
            <img src={props.Image} />
            <p className={`${inter.className} text-[#000000] font-bold text-[12px] sm:text-[18px]`}>{props.heading}</p>
            <p className={`${inter.className} text-[#000000] w-75 text-center text-[8px] sm:text-[16px]`}>{props.text}</p>
        </div>
    )
}

export default StepsCard
