import React from 'react'
import { FaLinkedinIn } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <div>
            <footer className='bg-black py-[100px]'>
                <div className='max-w-[860px] m-auto px-[20px]'>
                    <img className='w-[160px]' src="/images/logo.webp" alt="" />
                    <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-10 '>
                        <div className='flex flex-col'>
                            <h5 className='text-white text-[20px] pb-2'>Eternal</h5>
                            <ul class="text-gray-500 flex gap-3 flex-col">
                                <li><a href="#" className='hover:text-white'>Zomato</a></li>
                                <li><a href="#" className='hover:text-white'>Blinkit</a></li>
                                <li><a href="#" className='hover:text-white'>District</a></li>
                                <li><a href="#" className='hover:text-white'>Hyperpure</a></li>
                                <li><a href="#" className='hover:text-white'>Feeding India</a></li>
                                <li><a href="#" className='hover:text-white'>Investor Relations</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col '>
                            <h5 className='text-white text-[20px] pb-2'>For Restaurants</h5>
                            <ul class="text-gray-500 flex gap-3 flex-col">
                                <li><a href="#" className='hover:text-white'>Partner With Us</a></li>
                                <li><a href="#" className='hover:text-white'>Apps For You</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col '>
                            <h5 className='text-white text-[20px] pb-2'>For Delivery Partners</h5>
                            <ul class="text-gray-500 flex gap-3 flex-col">
                                <li><a href="#" className='hover:text-white'>Partner With Us</a></li>
                                <li><a href="#" className='hover:text-white'>Apps For You</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='text-white text-[20px] pb-2'>Learn More</h5>
                            <ul class="text-gray-500 flex gap-3 flex-col">
                                <li><a href="#" className='hover:text-white'>Privacy</a></li>
                                <li><a href="#" className='hover:text-white'>Security</a></li>
                                <li><a href="#" className='hover:text-white'>Terms of Service</a></li>
                                <li><a href="#" className='hover:text-white'>Help & Support</a></li>
                                <li><a href="#" className='hover:text-white'>Report a Fraud</a></li>
                                <li><a href="#" className='hover:text-white'>Blog</a></li>
                            </ul>
                        </div>
                        <div className='flex flex-col'>
                            <h5 className='text-white text-[20px] pb-2'>Social Links</h5>
                            <div className='flex gap-1.5'>
                                <div className='bg-white rounded-2xl w-[25px] h-[25px] flex justify-center items-center'>
                                    <span className='text-black'><FaLinkedinIn /></span>
                                </div>
                                <div className='bg-white rounded-2xl w-[25px] h-[25px] flex justify-center items-center'>
                                    <span className='text-black'><FaInstagram /></span>
                                </div>
                                <div className='bg-white rounded-2xl w-[25px] h-[25px] flex justify-center items-center'>
                                    <span className='text-black'><IoLogoYoutube /></span>
                                </div>
                                <div className='bg-white rounded-2xl w-[25px] h-[25px] flex justify-center items-center'>
                                    <span className='text-black'><GrFacebookOption /></span>
                                </div>
                                <div className='bg-white rounded-2xl w-[25px] h-[25px] flex justify-center items-center'>
                                    <span className='text-black'><FaXTwitter /></span>
                                </div>
                            </div>
                            <img className='pt-4 transform hover:scale-108 transition duration-200 lg:w-[160px] w-[150px]' src="/images/df6464de32f4a09262cee301f65aaa661739351256.webp" alt="" />
                            <img className='pt-4 transform hover:scale-108 transition duration-200 lg:w-[160px] w-[150px]' src="/images/aad864bd17860b27634fe621001c32db1739350431.webp" alt="" />
                        </div>
                    </div>
                    <div className='border-t-1 border-gray-500 mt-15'>
                        <p className='text-gray-500 mt-2 text-[10px]'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners <br/>
                        2008-2025 © Zomato™ Ltd. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}
