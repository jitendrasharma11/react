import React, { useState } from 'react'
import { MdDashboard } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { Link } from 'react-router';
import { IoChevronUp } from "react-icons/io5";
import { IoMdRadioButtonOn } from "react-icons/io";
import { menulist } from "../Data/MenuList"
import { IoChevronDownOutline } from "react-icons/io5";

export default function LeftSide() {
  let [currentId, setcurrentId] = useState(0)


  return (
    <div>
      <div className='h-full py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800  border-b-1 border-[#ccc] px-[30px]'>
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

        {menulist.map((items) => {

          console.log(items)
          return (
            <div className=''>
              <div className='flex justify-between items-center hover:bg-gray-100 p-[10px] rounded-[10px] cursor-pointer' onClick={() => setcurrentId(items.id == currentId ? 0 : items.id)}>
                <div className='flex items-center gap-3 ' >
                  <span>{items.icon}</span>
                  <h2 className='font-semibold text-[18px]'> {items.navName}</h2>
                </div>
                <span>
                  {currentId == items.id ?
                    <IoChevronUp />
                    : <IoChevronDownOutline />}
                </span>
              </div>
              <div>
                <div className={` items-center gap-2 p-[10px]  hover:bg-gray-100 
                   ${currentId == items.id ? '' : 'hidden'}
                  `}>
                  {items.iconradio}


                  {items.subMenu?.map((v, i) => {
                    return (
                      <h2 className='font-semibold text-[15px]'>
                        <Link to={v.url} >{v.navName}</Link>
                      </h2>
                    )
                  })}

                  {/* <h2 className='font-semibold text-[15px]'>
                    <Link to={items.routes1} >{items.submenu2}</Link>
                  </h2>
                  <h2 className='font-semibold text-[15px]'>{items.submenu2}</h2> */}
                </div>
              </div>
            </div >
          )
        })}




      </div>
    </div>
  )
}
