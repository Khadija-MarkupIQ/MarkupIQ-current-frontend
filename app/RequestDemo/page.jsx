"use client";
import React, { useRef, useState } from 'react'
import headerlogo from '..//..//components//assets//group6 (2).png'
import { inter } from '../layout'
import Footer from '@/components/Footer'
import Link from 'next/link';
// import axios from 'axios';

const page = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [newData, setNewData] = useState({ fullName: "", companyName: "", email: "", message: "" })
    const menuRef = useRef()

    function handleChange(e) {
        setNewData({ ...newData, [e.target.name]: e.target.value })
    }
    // const handleSubmit = async (e) => {
    //     // e.preventDefault();
    //     try {
    //         const res = await axios.post("/api/send-email", newData);
    //         if (res.data.success) {
    //             setNewData({ fullName: "", companyName: "", email: "", message: "" });
    //         } else {
    //             alert(res.data.error || "Something went wrong");
    //         }
    //     } catch (err) {
    //         console.error(err);
    //         alert("Failed to send message");
    //     }
    // };

    return (
        <div>
            <div className='flex justify-between py-4 px-18'>

                <div>
                    <img src={headerlogo.src} className='hidden sm:flex' />
                </div>
                <div className={`${inter.className} hidden md:flex text-[#4B4B55] font-medium text-[16px] gap-8`}>
                    <p>Features</p>
                    <p>How It Works</p>
                    <p>Pricing</p>
                    <p>Resources</p>
                </div>
                <div className={`${inter.className} hidden md:flex font-medium text-[16px] gap-4`}>
                    <button className='border-[#D1D5DB] border bg-[#FFF] px-8 p-4 rounded-lg'>Login </button>
                    <button className='text-[#FFF] bg-[#4a90e2] px-8 p-4 rounded-lg'>Get Started</button>
                </div>
            </div>
            {/* Hamburger menu for mobile */}
            <div className='flex justify-between px-4'>
                <img src={headerlogo.src} className='sm:hidden' />
                < div className="flex md:hidden items-center relative" >
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="p-2 rounded-md hover:bg-gray-100"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="black"
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
                </div>

                {/* Mobile menu container below hamburger */}
                {
                    isOpen && (
                        <div
                            ref={menuRef}
                            className="absolute right-2 flex flex-col justify-center mt-5 w-48 bg-[#4D8FF3] border border-gray-200 rounded-md shadow-lg z-50"
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
            </div>
            <div className='flex flex-col sm:flex-row justify-between px-18 mt-25'>
                <div className={`${inter.className} font-medium text-[16px]`}>
                    <p className='text-[14px] sm:text-[16px] font-medium text-[#4B4B55] text-center sm:text-left'>Contact Us</p>
                    <h1 className='text-[32px] sm:text-[48px] font-bold text-center sm:text-left'>Request<i className='text-[#4a90e2] font-normal'>Demo</i></h1>
                    <p className='text-[14px] sm:text-[16px] text-[#4B4B55] font-medium w-full max-w-80 sm:max-w-132 text-center sm:text-left mt-4'>Experience how MarkupIQ automates markups into precise As-Built drawings in minutes</p>
                </div>

                {/* <div className='max-w-[342px] sm:max-w-[634px] w-full'> */}
                <div className=' border-transparent bg-[#F5F6FA] px-3 py-4 sm:px-9 sm:py-11 rounded-sm mt-10 sm:mt-0'>
                    <div className={`${inter.className} font-medium text-[14px] flex flex-col gap-2`}>
                        <label>Full Name</label>
                        <input className='px-3 py-4 sm:px-4 sm:py-1.5 border-[#D9D9D9] border rounded-lg bg-[#FFF]' name='fullName' value={newData.fullName} onChange={(e) => handleChange(e)} />
                        <label>Company / Organization</label>
                        <input className='px-4 py-1.5 border-[#D9D9D9] border rounded-lg  bg-[#FFF]' name='companyName' value={newData.companyName} onChange={(e) => handleChange(e)} />
                        <label>Email</label>
                        <input className='px-4 py-1.5 border-[#D9D9D9] border rounded-lg bg-[#FFF]' name='email' value={newData.email} onChange={(e) => handleChange(e)} />
                        <label>Message</label>
                        <textarea className='px-4 py-1.5 border-[#D9D9D9] border rounded-lg bg-[#FFF]' name='message' value={newData.message} onChange={(e) => handleChange(e)}></textarea>
                    </div>
                    <div className={`${inter.className} text-[#4B4B55] font-medium text-[16px] mt-3`}>
                        <p className='text-center sm:text-left'>We’ll get back to you within 1-2 business days</p>
                    </div>
                    <div className={`${inter.className} text-[#FFF] font-medium text-[16px] px-8 py-4 rounded-xl bg-[#4a90e2] text-center mt-6 `}>
                        <button>Request Demo</button>
                    </div>
                    {/* </div> */}
                </div>

            </div>
            <div className='mt-24'>
                <Footer />
            </div>

        </div>
    )
}

export default page
