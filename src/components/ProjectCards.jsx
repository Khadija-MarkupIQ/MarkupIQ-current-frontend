import React from 'react'
import carimg1 from './assets//Frame 190 (3).png'
import carimg2 from './assets//Frame 190 (1).png'
import carimg3 from './assets//Frame 190 (4).png'
import carimg4 from './assets//Frame 190 (5).png'
import carimg5 from './assets//Frame 190 (2).png'
import carimg6 from './assets//Frame 190 (3).png'
import carimg7 from './assets//Frame 190 (7).png'
import carimg8 from './assets//Frame 190 (3).png'
import CreateProjetCard from './ui/CreateProjectCard'
import { inter } from '@/app/layout'
import Link from 'next/link'

const ProjectCards = (props) => {
    return (
        <div>
            <div >
                <div className="">
                    <div className='flex justify-between '>
                        <div className='mt-3 sm:mt-6'>
                            <h1 className={`${inter.className} font-bold text-[10px] sm:text-[25px]`}>Welcome {props.data?.user_metadata?.fullName?.split(" ")[0]}!</h1>
                            <h1 className={`${inter.className} text-[6px] sm:text-[12px] font-medium text-[#4B4B55]`}>Get started by creating your first project</h1>
                        </div>
                        <Link href="/dashboard/CreateNewProjectModel">
                            <div>
                                <button className={`${inter.className} py-1.5 px-3 sm:py-3 sm:px-6 bg-[#4a90e2] text-white rounded-[6.2px] sm:rounded-[10px] mt-3 sm:mt-12 text-[6px] sm:text-[14px] border-none`}>Create new project</button>
                            </div>
                        </Link>
                    </div>
                    <div className='flex justify-between items-center mt-4'>
                        <p className={`${inter.className} mt-[0.51rem] sm:mt-[1.2rem] font-bold text-[8px] sm:text-[16px]`}>Your projects</p>
                        <div className='flex gap-1 sm:gap-2'>
                            <div className='border border-[#ADAAAA] px-0.5 py-0.2 sm:px-2 sm:py-0.5 rounded-sm sm:rounded-lg flex items-center justify-center'>
                                <select className={`${inter.className} text-[6px] sm:text-[12px] font-normal text-[#4B4B55] flex-1`}>
                                    <option >All status</option>
                                </select>
                            </div>
                            <div className='border border-[#ADAAAA] px-0.5 py-0.2 sm:px-2 sm:py-0.5 rounded-sm sm:rounded-lg flex items-center justify-center'>
                                <select className={`${inter.className} text-[6px] sm:text-[12px] font-normal text-[#4B4B55]`}>
                                    <option >All time</option>
                                </select>
                            </div>
                            <div className='border border-[#ADAAAA] px-0.5 py-0.2 sm:px-2 sm:py-0.5 rounded-sm sm:rounded-lg flex items-center justify-center'>
                                <select className={`${inter.className} text-[6px] sm:text-[12px] font-normal text-[#4B4B55]`}>
                                    <option >Sort</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex gap-[0.6rem] sm:gap-[1.6rem] justify-center items-center">
                <div className="flex flex-col gap-4 sm:gap-8">
                    <CreateProjetCard img={carimg1.src} heading="MetroLine Extension" date="14/10/2025" filecount="15/26 files processed" button="In Progress" />
                    <CreateProjetCard img={carimg3.src} heading="WestTower Extension" date="01/11/2025" filecount="12 files processed" button="Completed" />

                </div>
                <div className=" flex flex-col gap-4 sm:gap-8">
                    <CreateProjetCard img={carimg2.src} heading="Northgate Complex" date="12/09/2025" filecount="15 files " button="Draft" />
                    <CreateProjetCard img={carimg4.src} heading="East Complex Renovation" date="14/10/2025" filecount="9 files processed" button="Completed" />
                </div>
                <div className=" flex flex-col gap-4 sm:gap-8">
                    <CreateProjetCard img={carimg5.src} heading="Greentech Tower" date="14/10/2025" filecount="11 files processed" button="Completed" />
                    <CreateProjetCard img={carimg7.src} heading="Greenwich Estate" date="14/10/2025" filecount="25 files processed" button="Completed" />

                </div>
                <div className=" flex flex-col gap-4 sm:gap-8 ">
                    <CreateProjetCard img={carimg6.src} heading="Bridgeway Extension" date="09/10/2025" filecount="10 files processed" button="Completed" />
                    <CreateProjetCard img={carimg8.src} heading="Twintower Extension" date="14/10/2025" filecount="13 files processed" button="Completed" />
                    {/* </div> */}
                </div>

            </div>
        </div>
    )
}

export default ProjectCards
