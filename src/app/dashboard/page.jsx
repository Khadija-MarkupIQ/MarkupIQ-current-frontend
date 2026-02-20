"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from '../lib/supabaseClient'
import { useRouter } from "next/navigation";
import { inter } from '../layout'
import sidelogo5 from '..//..//components//assets/Frame 208.png'
import sidelogo2 from '..//..//components//assets/Frame 208.png'
import sidelogo4 from '..//..//components//assets/Frame 214.png'
import sidelogo3 from '..//..//components//assets/Frame 216.png'
import sidelogo1 from '..//..//components//assets/panel-left-open.png'
import tablelogo from '..//..//components//assets/group6 (2).png'
import { FaSearch, FaBell } from "react-icons/fa";
import ProjectCards from "@/components/ProjectCards";
import FileUpload from "../components/UploadFlow/FileUpload";
import Docs from "../components/UploadFlow/Docs";

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("projects");
  const router = useRouter();
  const [user, setUser] = useState(null);

  const supabaseBrowser = getSupabaseClient()
  // 🔐 Check if user is logged in when page loads
  useEffect(() => {
    const getSession = async () => {
      const { data, error } = await supabaseBrowser.auth.getUser();

      if (error || !data?.user) {
        // Not logged in → redirect to login page
        router.push("/login");
      } else {
        setUser(data.user);
      }
    };

    getSession();
  }, [router]);

  if (!user) return <p>Loading...</p>;
  console.log(user)
  return (
    <div className="">
      <div className='mt-18 sm:mt-24 flex justify-center items-center '>
        <div className=" border:none  max-w-[342.53px] lg:max-w-[1320px] w-full mx-auto rounded-2xl bg-[#F5F5F5] ">
          <div className="flex justify-between gap-4 sm:gap-0 items-center border-b px-2 sm:px-8 py-1 sm:py-2 ">
            <div>
              <img src={tablelogo.src} className='w-[118px] sm:w-[143px]' />
            </div>
            <div className={`${inter.className} list-none flex text-[#4B4B55] text-[5px] sm:text-[14px] font-semibold`}>
              <ul className="flex gap-2 sm:gap-10">
                <li onClick={() => setActiveTab("projects")} className="relative cursor-pointer
             after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full
             after:bg-[#0A0A3C] after:scale-x-0 after:origin-left
             hover:after:scale-x-100 after:transition after:duration-300">
                  Projects
                </li>
                <li onClick={() => setActiveTab("uploads")} className="relative pb-2 cursor-pointer
             after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full
             after:bg-[#0A0A3C] after:scale-x-0 after:origin-left
             hover:after:scale-x-100 after:transition after:duration-300">Uploads</li>
                <li onClick={() => setActiveTab("docs")} className="relative pb-2 cursor-pointer
             after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full
             after:bg-[#0A0A3C] after:scale-x-0 after:origin-left
             hover:after:scale-x-100 after:transition after:duration-300">Docs</li>
                <li className="relative pb-2 cursor-pointer
             after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-full
             after:bg-[#0A0A3C] after:scale-x-0 after:origin-left
             hover:after:scale-x-100 after:transition after:duration-300">Support</li>
              </ul>
            </div>
            <div className="flex justify-between relative">
              <input className={`${inter.className} rounded-sm sm:rounded-lg h-[13px] sm:h-8  w-28 sm:w-88 border border-[#D1D5DB] text-[10px] sm:text-[15px] px-4 sm:px-8`} type='searchbar' placeholder='Search' />
              <span className="absolute left-[0.4rem] sm:left-[0.8rem] top-[30%] text-[6px] sm:text-[12px] text-[#888]"><FaSearch /></span>
            </div>
            <div className="flex items-center gap-2 sm:gap-10"><FaBell className='flex text-[8px] sm:text-[16px] items-start justify-center ' />
            </div>
            <div className="flex flex-col items-center">
              <p className={`${inter.className} w-4 sm:w-10 h-4 sm:h-10 rounded-full bg-[#4a90e2] text-white flex justify-center items-center font-medium text-[7px] sm:text-[16px] uppercase`}>{user.email[0]}</p>
            </div>
          </div>

          {/* <div className="flex"> */}
          {/* <div className=""> */}
          <div className="flex gap-6">
            <div className='border-r border-black pr-6'>
              <div className="flex flex-col w-10 h-10 gap-[0.6rem] items-center mt-8  ">
                <img src={sidelogo1.src} />
                <img src={sidelogo2.src} />
                <img src={sidelogo3.src} />
                <img src={sidelogo4.src} />
                <img src={sidelogo5.src} />
              </div>
            </div>
            <div className="">
              {activeTab === "uploads" && <FileUpload />}
              {activeTab === "projects" && <ProjectCards data={user} />}
              {activeTab === "docs" && <Docs />}
            </div>
            {/* </div> */}

          </div>

        </div>

      </div>


      <button
        onClick={async () => {
          await supabaseBrowser.auth.signOut();
          router.push("/login");
        }}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </div >
  );
}
