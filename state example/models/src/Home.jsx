import React from 'react'

export default function Home() {
  return (
    <div> 
      <div className='fixed w-[400px] m-auto top-[50%] left-[50%] shadow-xl translate-x-[-50%] translate-y-[-50%] '>
        <h2 className='font-bold text-center py-3 border-b-1'>Enquiry Now</h2>
        <form action="" className='p-[15px]'>
        <p>Feel free to contact us if you need any assistance, any help or another question.</p>
        <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Full Name</span>
            <input class="w-full bg-white border text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
            <div>
            <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input class="w-full bg-white border text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder=""/>
          </div>
          </div>
        </form>
      </div>
    </div>
  )
}
