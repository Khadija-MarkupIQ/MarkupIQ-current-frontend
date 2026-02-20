"use client";

import React from 'react'
import icon from '../../components/assets/PHOTO-2025-11-14-12-57-26 (2).png'
import group6 from '../../components/assets/group6 (2).png'
import { inter } from '../layout'
import { useState } from "react";
import { getSupabaseClient } from '../lib/supabaseClient'

const page = () => {

    const supabase = getSupabaseClient();

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    // Generic input handler
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSignup = async () => {
        const { email, password, confirmPassword, fullName } = formData;

        // 1️⃣ Check confirm password
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // 2️⃣ Supabase Sign Up
        const { error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    fullName,
                },
            },
        });

        if (error) {
            alert(error.message);
        } else {
            alert("Signup successful! Verify your email.");
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
                    <h1 className='font-semibold text-[24px]'>Let’s join with us</h1>
                    <p className='mt-1.5'>Smarter workflows start here</p>
                </div>
                <div className={`${inter.className} flex flex-col text-[15px] mt-6`}>
                    <label className='mt-4'>
                        Full Name
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 w-80 px-3' type='text' name="fullName"
                        value={formData.fullName} onChange={handleChange} />
                    <label className='mt-4'>
                        Email
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 px-3 w-80' type='text' name="email"
                        value={formData.email} onChange={handleChange} />
                    <label className='mt-4'>
                        Password
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 px-3 w-80' type='text' name="password"
                        value={formData.password} onChange={handleChange} />
                    <label className='mt-4'>
                        Confirm Password
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 px-3 w-80' type='text' name="confirmPassword"
                        value={formData.confirmPassword} onChange={handleChange} />
                    <label className='flex items-center gap-2 cursor-pointe mt-3'>
                        <input type='checkbox' className='w-[19px] h-[19px] border-[#D9D9D9] rounded-sm border-2' />
                        <span>I agree to Terms & Privacy</span>
                    </label>
                    <div className='flex flex-col justify-center items-center mt-8'>
                        <button className={`${inter.className} border rounded-lg bg-[#4D8FF3] text-[17px] text-[#F5F5F5] w-[195px] h-10`} onClick={handleSignup}>
                            Sign Up
                        </button>
                        <p className={`${inter.className} mt-2`}>Already have an account? <strong>Sign in</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
