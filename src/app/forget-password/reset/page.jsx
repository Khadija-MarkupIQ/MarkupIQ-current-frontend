"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/app/lib/supabaseClient";
import { useRouter } from "next/navigation";
import React from 'react'
import icon from '../..//..//components//assets/PHOTO-2025-11-14-12-57-26 (2).png'
import group6 from '../..//../components//assets/group6 (2).png'
import { inter } from '@/app/layout'
import Link from 'next/link'

const page = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const router = useRouter();
    const supabase = getSupabaseClient();

    const handleReset = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            return;
        }
        const { error } = await supabase.auth.updateUser({ password });
        if (error) {
            console.log(error.message);
        } else {
            localStorage.removeItem("resetEmail");
            router.push("/forgot-password/login");
        }
    };

    return (
        <div className='flex bg-[#F5F5F5] justify-center items-center gap-8 h-screen'>
            <div className=''>
                <img src={icon.src} className='h-[700px]' />
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
                        New Password
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 px-3 w-94' type='text' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <label className='mt-4'>
                        Confirm Password
                    </label>
                    <input className='bg-[#D9D9D9]/50 rounded-md py-1 px-3 w-94' type='text' />
                    <div className='flex flex-col justify-center items-center mt-8'>
                        <button onClick={handleReset} className={`${inter.className} border rounded-lg bg-[#4D8FF3] text-[17px] text-[#F5F5F5] w-[195px] h-10`} value={password} onChange={(e) => setConfirmPassword(e.target.value)} required>
                            Reset Password
                        </button>
                        <Link href="/Login">
                            <p className={`${inter.className} mt-2`}>Return to Login</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page
