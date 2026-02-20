"use client";

import { useState } from "react";
import React from 'react'
import icon from '../../components/assets/PHOTO-2025-11-14-12-57-26 (2).png'
import group6 from '../../components/assets/group6 (2).png'
import { inter } from '../layout'
import Link from 'next/link'
import { getSupabaseClient } from '../lib/supabaseClient'

const page = () => {

    const supabase = getSupabaseClient();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleLogin = async () => {
        const { email, password } = formData;

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            alert(error.message);
        } else {
            window.location.href = "/dashboard";
        }
    };

    return (
        <div className='flex bg-[#F5F5F5] justify-center items-center gap-8 h-screen'>
            <div className=''>
                <img src={icon.src} className='hidden sm:block sm:h-[700px]' />
            </div>
            <div className={`${inter.className}`}>
                <div className='px-30'>
                    <img src={group6.src} />
                </div>
                <div className='mt-24'>
                    <h1 className='font-semibold text-[24px]'>Welcome Back!</h1>
                    <p className='mt-1.5'>Sign in to continue where you left off</p>
                </div>
                <div className={`${inter.className} flex flex-col text-[15px] mt-6`}>
                    <label className='mt-4'>
                        Email
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 px-3 w-80 sm:w-94' type='text' value={formData.email} name="email" onChange={handleChange} />
                    <label className='mt-4'>
                        Password
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 px-3 w-80 sm:w-94' type='text' value={formData.password} name="password" onChange={handleChange} />
                    <label className='flex items-center gap-2 cursor-pointe mt-3'>
                        <input type='checkbox' className='w-[1w] sm:w-[19px] h-[19px] border-[#D9D9D9] rounded-sm border-2' />
                        {/* <div className='flex justify-between w-full'> */}
                        <p>Remember me</p>

                        <Link href="/forget-password/reset">
                            <p className='ml-auto'>Forgot Password?</p>
                        </Link>
                        {/* </div> */}
                    </label>
                    <div className='flex flex-col justify-center items-center mt-8'>
                        <button className={`${inter.className} border rounded-lg bg-[#4D8FF3] text-[17px] text-[#F5F5F5] w-[195px] h-10`} onClick={handleLogin}>
                            Sign In
                        </button>
                        <Link href="/SignUp">
                            <p className={`${inter.className} mt-2`}>Don’t have an account?<strong>Sign Up</strong></p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
