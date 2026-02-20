"use client";

import React, { useState } from 'react'
import CardData from '../components/ui/PricingCard/data'
import { inter } from '@/app/layout'

const PricingSecion = () => {
    const [change, setChange] = useState(true)
    return (
        <div>
            <div className=' max-w-[350px] sm:max-w-[1450px] mx-auto w-full mt-10'>
                <div className='flex flex-col border-2 bg-[#ECE9E4] border-[#BEBEBE] rounded-xl py-8 justify-center items-center'>
                    <div className={`${inter.className} `}>
                        <p className='text-[#000000] hidden sm:text-[18px] text-center'>Pricing Plans</p>
                        <h1 className='font-bold text-[22px] sm:text-[35px] text-center mx-auto w-55 sm:w-120 sm:mt-6'>Simple Transparent Pricing
                            Built for Every Team</h1>
                        <div className='flex justify-center mt-8 sm:mt-6'>
                            <div className='border-2 border-[#BEBEBE] rounded-xl w-[296px] h-[55px] flex justify-center items-center'>
                                <button onClick={() => setChange(true)} className={`w-[140px] h-[39px]  rounded-xl ${change ? "bg-[#4D8FF3] text-[#FFF]" : "bg-[#D9D9D9]/50"}`}>Monthly Plan</button>
                                <button onClick={() => setChange(false)} className={`w-[140px] h-[39px] rounded-xl ${change ? "bg-[#D9D9D9]/50" : "bg-[#4D8FF3] text-[#FFF]"}`}>Annual Plan</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center gap-[3.6rem] sm:gap-[2.2rem] mt-12 sm:mt-24">
                        {CardData && CardData.map((card) => (
                            <div
                                className="border-2 border-[#BEBEBE] rounded-xl max-w-[225px] sm:max-w-[260px] min-h-[490px] group transition-all flex flex-col bg-white hover:border-[#28a745] py-7 sm:py-5 px-2 sm:px-3"
                                key={card.id}
                            >
                                {/* Top content */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex justify-between items-center">
                                        <h1 className="font-inter text-[17px] sm:text-[19px] font-bold text-[#000024]">{card.heading}</h1>
                                        {card.showHeaderButton && <p className={`${inter.className} border flex items-center justify-center border-hidden rounded-lg sm:rounded-xl bg-[#28a745] text-[#FFF] text-[12px] sm:text-[15px] font-light text-center max-w-[90px] sm:max-w-[115px] w-full min-h-[27px]`}>Most Popular</p>}
                                    </div>

                                    {card.buttonText === "Contact Us" ? (
                                        <strong className="font-inter font-bold text-[28px] text-[#3B82F6]">{card.pricing}</strong>
                                    ) : (
                                        <p className="font-inter font-medium text-base">
                                            {
                                                card.pricing !== "Custom Pricing" ? change ? (<strong className="font-inter font-bold text-[28px] text-[#3B82F6] group-hover:text-[#28a745] transition-all duration-150">{card.pricing}</strong>)
                                                    : (<strong className="font-inter font-bold text-[28px] text-[#3B82F6] group-hover:text-[#28a745] transition-all duration-150">{card.yearPricing}</strong>)
                                                    : (<strong className="font-inter font-bold text-[28px] text-[#3B82F6] group-hover:text-[#28a745] transition-all duration-150">{card.pricing}</strong>)
                                            }
                                            {
                                                card.pricing !== "Custom Pricing" ?
                                                    change ? (<span className='font-bold text-[25px]'>/mo</span>)
                                                        : (<span className='font-bold text-[25px]'>/year</span>)
                                                    : (null)
                                            }
                                        </p>
                                    )}
                                    {
                                        card.pricing !== "Custom Pricing" ?
                                            change ?
                                                (<p className="font-inter font-semibold text-sm text-[#4B4B55]">{card.yearPricing}/year</p>)
                                                : (<p className="font-inter font-semibold text-sm text-[#4B4B55]">{card.pricing}/mo</p>)
                                            : (null)

                                    }
                                    <h2 className="font-inter font-normal text-[16px] sm:text-[20px] text-[#000024] w-[10.9rem] sm:w-[14.8rem]">{card.perfectFor}</h2>
                                </div>

                                <hr className='text-[#D9D9D9] mt-2' />

                                {/* Middle content */}
                                <ul className="flex-1 list-disc mt-4 space-y-2 px-8">
                                    {card.points.map((point, index) => (
                                        <li key={index} className={`${inter.className} text-[#4B4B55] text-[10px] sm:text-[15px] leading-3 sm:leading-4  group-hover:font-light transition-all duration-150`}>
                                            {point}
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto mx-auto">
                                    <button className=" px-9 py-3.5  rounded-xl border-none font-inter font-medium transition-all text-base text-white bg-[#4a90e2] mx-auto group-hover:bg-[#28a745]">
                                        {card.buttonText}
                                    </button>
                                </div>
                            </div >

                        ))}
                    </div >
                </div >
            </div >
        </div >
    )
}

export default PricingSecion
