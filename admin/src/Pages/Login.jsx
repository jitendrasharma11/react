import React from 'react'

export default function Login() {
  return (
    <div>
      <div className='max-w-[500px] m-auto lg:mt-[150px] mt-[50px]'>
        <div className='flex justify-center items-center'>
          <img src="https://www.wscubetech.com/images/wscube-tech-logo-2.svg" alt="" />
        </div>
        <form className='mt-6  rounded-lg shadow-2xl p-6 space-y-4 border-[1px] border-[#ccc]' action="">
          <h3 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl'>Sign in to your account</h3>
          <div>
            <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>Email</label>
            <input type="email" placeholder='Enter Email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5' />
          </div>
          <div>
            <label htmlFor="" className='block mb-2 text-sm font-medium text-gray-900'>Password</label>
            <input type="password" placeholder='Enter Email' className='bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5' />
          </div>
          <button type="" className="w-full text-white bg-blue-600 hover:bg-blue-700  font-medium rounded-lg text-sm px-5 py-2.5">Sign In</button>
        </form>
      </div>
    </div>
  )
}
