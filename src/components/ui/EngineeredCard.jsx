import React from 'react'
import { inter } from "..//..//app/layout.js"

const EngineeredCard = (props) => {
    return (
        <div className='flex flex-col justify-center border-2 border-[#BEBEBE] rounded-xl max-w-[325px] gap-4 y-8 min-h-[200px] bg-[#F5F5F5] px-4'>
            <img src={props.Image} className='w-9 h-9' />
            <h1 className={`${inter.className} text-[#000000] font-bold text-[20px]`}>{props.heading}</h1>
            <div className=''>
                <p className={`${inter.className} w-[18rem] text-[#4B4B55] text-[16px] font-medium`}>{props.text}</p>
            </div>

        </div>
    )
}

export default EngineeredCard
