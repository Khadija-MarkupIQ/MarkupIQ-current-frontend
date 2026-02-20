"use client";
import React from 'react'
import Link from 'next/link'
import markupIQ from './assets/Group 62.png'
import { useState, useRef, useEffect } from "react";
import { inter } from "../app/layout"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    return (
        <>
            <div className='flex '>
                <div className='bg-[#4D8FF3] flex items-center justify-between px-4 w-full py-4 sm:px-18 '>
                    {/* <div> */}
                    <div>
                        <img src={markupIQ.src} alt='header-logo' className='w-[120px] sm:w-[143px]' />
                    </div>
                    <div className={`${inter.className} hidden md:flex list-none gap-12 text-[#F5F5F5]`}>
                        <li>Features</li>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Resources</li>
                    </div>
                    <div className={`${inter.className} hidden md:flex gap-6`}>
                        <div className=''>
                            <Link href="/Login">
                                <button className='w-[78px] h-9 border-hidden rounded-sm bg-[#D9D9D9]/50 text-[#F5F5F5] text-[10.29px] font-medium'>Log In</button>
                            </Link>
                        </div>
                        <div>
                            <Link href="/SignUp">
                                <button className='w-[78px] h-9  border-hidden rounded-sm bg-[#F5F5F5] text-[#4D8FF3] font-bold text-[10.29px]'>Get Started</button>
                            </Link>
                        </div>
                    </div>
                </div>
                {/* Hamburger menu for mobile */}
                < div className="flex md:hidden items-center relative" >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                            />
                        </svg>
                    </button>

                    {/* Mobile menu container below hamburger */}
                    {
                        isOpen && (
                            <div
                                ref={menuRef}
                                className="absolute right-2 flex flex-col justify-center mt-56 w-48 bg-[#4D8FF3] border border-gray-200 rounded-md shadow-lg z-50"
                            >
                                <div className={`${inter.className} px-2 md:flex list-none gap-12 text-black text-[11px]`}>
                                    <li>Features</li>
                                    <li>About</li>
                                    <li>Pricing</li>
                                    <li>Resources</li>
                                </div>
                                <div className={`${inter.className} md:flex gap-6`}>
                                    <div className=''>
                                        <Link href="/Login">
                                            <button className='w-[55px] h-6 border-hidden rounded-sm bg-[#D9D9D9]/50 text-[#F5F5F5] text-[8px] font-medium'>Log In</button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link href="/SignUp">
                                            <button className='w-[55px] h-6  border-hidden rounded-sm bg-[#F5F5F5] text-[#4D8FF3] font-bold text-[8px]'>Get Started</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    {/* </div> */}
                    {/* </div> */}
                </div >
            </div>
        </>
    )
}

export default Header
