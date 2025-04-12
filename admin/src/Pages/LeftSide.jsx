import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router';
import { IoChevronUp } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";

export default function LeftSide() {
  const [menu, submenu] = useState(-1);

  return (
    <div>
      <div className='h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800 scrollbar-hide border-b-1 border-[#ccc] px-[30px]'>
        <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" />
      </div>
      <div className='px-[20px] '>
        <div className='flex gap-4 items-center my-6 cursor-pointer hover:bg-gray-100 p-2 rounded'>
          <MdDashboard className='text-gray-500 text-[20px] font-semibold' />
          <h3 className='text-gray-500 text-[20px] font-semibold cursor-pointer'>
            <Link to={"/dashboard"} >Dashboard</Link>
          </h3>
        </div>
        {/* Left Menu*/}
        <div className='flex justify-between items-center hover:bg-gray-100 p-[10px] rounded-[10px] cursor-pointer'>
          <div className='flex items-center gap-3'>
            <FaUserAlt calcMode />
            <h2 className='font-semibold text-[18px]'>Users</h2>
          </div>
          <span><IoChevronUp /></span>
        </div>
        <div>
        <div className='flex items-center gap-2 p-[10px]  hover:bg-gray-100 '>
          <IoMdRadioButtonOn />
          <h2 className='font-semibold text-[15px]'>View Users</h2>
        </div>
        </div>
      </div>
    </div>
  )
}
