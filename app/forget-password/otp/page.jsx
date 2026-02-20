"use client";

import { useState, useEffect, useRef } from "react";
import { getSupabaseClient } from '..//..//lib//supabaseClient'
import { useRouter } from "next/navigation";
import React from 'react'
import icon from '../..//..//components//assets/PHOTO-2025-11-14-12-57-26 (2).png'
import group6 from '../..//../components//assets/group6 (2).png'
import { inter } from '@/app/layout'
import Link from 'next/link'

const page = () => {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [email, setEmail] = useState("");
    const router = useRouter();
    const inputsRef = useRef([]);
    const supabase = getSupabaseClient();

    useEffect(() => {
        const storedEmail = localStorage.getItem("resetEmail");
        if (!storedEmail) router.push("/forgot-password/reset-password");
        else setEmail(storedEmail);
    }, []);

    const handleChange = (value, index) => {
        if (!/^\d?$/.test(value)) return;

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 5) {
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handlePaste = (e) => {
        const pasted = e.clipboardData.getData("text").slice(0, 6);
        if (!/^\d{6}$/.test(pasted)) return;

        setOtp(pasted.split(""));
        inputsRef.current[5].focus();
    };

    const handleVerify = async (e) => {
        e.preventDefault();
        const token = otp.join("");
        if (token.length !== 6) {
            setError("Enter 6-digit OTP");
            return;
        }

        const { error } = await supabase.auth.verifyOtp({
            email,
            token,
            type: "recovery", // 🔥 REQUIRED
        });

        if (error) {
            console.log(error.message);
        } else {
            router.push("/forgot-password/reset");
        }
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
                    <h1 className='font-semibold text-[24px]'>Password Reset</h1>
                    <p className='mt-1.5'>We’ve sent a 6 digit code to useremail@gmail.com</p>
                </div>
                <div className='flex gap-6 mt-22' onPaste={handlePaste}>
                    {otp.map((digit, index) => (
                        <input
                            key={index}
                            ref={(el) => (inputsRef.current[index] = el)}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            className='border-2 border-[#D9D9D9] w-8 h-8 rounded-md text-center'
                            value={digit}
                            onChange={(e) => handleChange(e.target.value, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                        />
                    ))}
                </div>

                <div className='flex flex-col justify-center items-center mt-8'>
                    <button onClick={handleVerify} className={`${inter.className} border rounded-lg bg-[#4D8FF3] text-[17px] text-[#F5F5F5] w-[195px] h-10 mt-18`}>
                        Continue
                    </button>

                    <p className={`${inter.className} mt-2`}>Resend Code</p>
                    <Link href="/Login">
                        <p className={`${inter.className} mt-2`}>Return to Login</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default page
