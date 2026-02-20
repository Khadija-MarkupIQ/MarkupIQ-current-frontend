import React from 'react'
import { inter } from "../app/layout"
import sidelogo5 from './assets/Frame 208.png'
import sidelogo2 from './assets//Frame 208.png'
import sidelogo4 from './assets//Frame 214.png'
import sidelogo3 from './assets//Frame 216.png'
import sidelogo1 from './assets//panel-left-open.png'
import tablelogo from './assets//group9.png'
import { FaSearch, FaBell } from "react-icons/fa";
import ProjectCards from './ProjectCards'
import Link from 'next/link'


const CreateProject = () => {
    return (
        <div className='mt-18 sm:mt-24 flex justify-center items-center '>
            <div className="border:none  max-w-[342.53px] lg:max-w-[1320px] w-full mx-auto rounded-2xl bg-[#F5F5F5]">
                <div className="flex justify-between gap-4 sm:gap-0 items-center border-b px-2 sm:px-8 py-1 sm:py-2 ">
                    {/* <div className='flex gap-18 '> */}
                    <div className=''>
                        <img src={tablelogo.src} className='w-[118px] sm:w-[143px]' />
                    </div>
                    {/* <div className='flex gap-2'> */}
                    <div className={`${inter.className} list-none flex text-[#4B4B55] text-[5px] sm:text-[14px] font-semibold`}>
                        <ul className="flex gap-2 sm:gap-10">
                            <li className="relative cursor-pointer
    after:absolute after:left-0 after:bottom-0
    after:h-0.5 sm:after:h-[3px]
    after:w-full
    after:bg-[#0A0A3C]
    after:scale-x-0 after:origin-left
    hover:after:scale-x-100
    after:transition-transform after:duration-300">
                                Projects
                            </li>
                            <li className="relative cursor-pointer
    after:absolute after:left-0 after:bottom-0
    after:h-0.5 sm:after:h-[3px]
    after:w-full
    after:bg-[#0A0A3C]
    after:scale-x-0 after:origin-left
    hover:after:scale-x-100
    after:transition-transform after:duration-300">Uploads</li>
                            <li className="relative cursor-pointer
    after:absolute after:left-0 after:bottom-0
    after:h-0.5 sm:after:h-[3px]
    after:w-full
    after:bg-[#0A0A3C]
    after:scale-x-0 after:origin-left
    hover:after:scale-x-100
    after:transition-transform after:duration-300">Docs</li>
                            <li className="relative cursor-pointer
    after:absolute after:left-0 after:bottom-0
    after:h-0.5 sm:after:h-[3px]
    after:w-full
    after:bg-[#0A0A3C]
    after:scale-x-0 after:origin-left
    hover:after:scale-x-100
    after:transition-transform after:duration-300">Support</li>
                        </ul>
                        {/* </div> */}
                    </div>
                    {/* <div className='flex gap-22 items-center '> */}
                    <div className="flex justify-between relative">
                        <input className={`${inter.className} rounded-sm sm:rounded-lg h-[13px] sm:h-8  w-28 sm:w-88 border border-[#D1D5DB] text-[10px] sm:text-[15px] px-4 sm:px-8`} type='searchbar' placeholder='Search' />
                        <span className="absolute left-[0.4rem] sm:left-[0.8rem] top-[30%] text-[6px] sm:text-[12px] text-[#888]"><FaSearch /></span>
                    </div>
                    {/* </div> */}
                    <div className='flex items-center gap-2 sm:gap-10'>
                        <div ><FaBell className='flex text-[8px] sm:text-[16px] items-start justify-center ' />
                        </div>
                        <div className='flex flex-col items-center '>
                            <p className={`${inter.className} w-4 sm:w-10 h-4 sm:h-10 rounded-full bg-[#4a90e2] text-white flex justify-center items-center font-medium text-[7px] sm:text-[16px] uppercase `}>M</p>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

                <div className="flex justify-center">
                    {/* <div className=""> */}
                    <div className="flex justify-center ">
                        <div className='border-r border-black mr-2 sm:mr-8'>
                            <div className="flex mr-2 sm:mr-8 flex-col w-4 h-4 sm:w-10 sm:h-10 gap-[0.1rem] sm:gap-[0.6rem] items-center mt-2 sm:mt-8  ">
                                <img src={sidelogo1.src} />
                                <img src={sidelogo2.src} />
                                <img src={sidelogo3.src} />
                                <Link href="/Settings/Sidebar"><img src={sidelogo4.src} /></Link>
                                <img src={sidelogo5.src} />
                            </div>
                        </div>

                        {/* <div >
                            <div className=" ">
                                <div className='flex gap-184 '>
                                    <div className='mt-6'>
                                        <h1 className={`${inter.className} font-bold text-[25px]`}>Welcome Mish!</h1>
                                        <h1 className={`${inter.className} text-[12px] font-medium text-[#4B4B55]`}>Get started by creating your first project</h1>
                                    </div>
                                    <div>
                                        <button className={`${inter.className} w-[10.6rem] h-[2.4rem] bg-[#000024] text-white rounded-[10px] mt-12 border-none`}>Create new project</button>
                                    </div>
                                </div>
                                <p className={`${inter.className} mt-[1.2rem] font-bold text-[16px]`}>Your projects</p> */}
                        {/* </div>

                        </div> */}
                        <div className='mr-2 sm:mr-16'>
                            <ProjectCards />
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}

export default CreateProject
