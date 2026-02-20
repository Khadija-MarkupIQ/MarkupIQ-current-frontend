"use client";

import { useState } from "react";
import { getSupabaseClient } from '../../lib/supabaseClient'
import React from 'react'
import icon from '../..//..//components//assets/PHOTO-2025-11-14-12-57-26 (2).png'
import group6 from '../..//../components//assets/group6 (2).png'
import { inter } from '@/app/layout'
import { useRouter } from "next/navigation";
import Link from 'next/link'

const page = () => {
    const [email, setEmail] = useState("");
    const supabase = getSupabaseClient();
    const router = useRouter();

    const handleSendOtp = async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                shouldCreateUser: false, // IMPORTANT
            },
        });

        if (error) {
            setError(error.message);
        } else {
            localStorage.setItem("resetEmail", email);
            router.push("/forgot-password/otp");
        }

        setLoading(false);
    };
    return (
        <div className='flex bg-[#F5F5F5] justify-center items-center gap-12 h-screen'>
            <div className=''>
                <img src={icon.src} className='h-[700px]' />
            </div>
            <div className={`${inter.className}`}>
                <div className='px-30'>
                    <img src={group6.src} />
                </div>
                <div className='mt-24'>
                    <h1 className='font-semibold text-[24px]'>Forgot Password?</h1>
                    <p className='mt-1.5'>Enter your email to reset your password</p>
                </div>
                <div className=' mt-18'>
                    <input className='border-2 px-4 w-[303px] h-[35.50px] bg-[#F5F6FA]  rounded-lg required ' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className='flex flex-col justify-center items-center mt-8'>
                    <button onClick={handleSendOtp} className={`${inter.className} border rounded-lg bg-[#4D8FF3] text-[17px] text-[#F5F5F5] w-[195px] h-10 mt-6`}>
                        Send Reset Link
                    </button>
                    {/* <Link href="/forget-password/reset"> </Link> */}
                    <Link href="/Login">
                        <p className={`${inter.className} mt-2`}>Return to Login</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
