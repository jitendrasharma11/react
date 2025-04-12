import React from 'react'
import { FaAnglesDown } from "react-icons/fa6";
import Footer from './common/Footer';
import { IoIosArrowForward } from "react-icons/io";

export default function Home() {
  return (
    <>
      <div className='w-[100%] h-screen overflow-hidden relative'>
        <video className='w-[100%] h-[100%] object-cover' src='https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4' autoPlay muted loop />
        <div className='absolute w-[100%] h-[100%] top-0 bg-[rgba(0,0,0,0.5)] flex flex-col items-center justify-end'>
          <div className='text-center pb-[45px]'>
            <img src="/images/logo.webp" class="lg:w-[250px] md:w-[200px] sm:w-[100px] w-[150px] mx-auto lg:pb-[20px] pb-4" alt="" />
            <h1 className='lg:text-[70px] text-[25px] text-white font-bold lg:leading-[70px] pb-[20px]'>India’s #1<br />
              food delivery app</h1>
            <p className='text-white lg:font-bold pb-[40px] lg:text-2xl'>Experience fast & easy online ordering<br />
              on the Zomato app</p>
            <div className='flex gap-3 justify-center'>
              <div className="hidden sm:block">
                <img className='w-[200px] h-[60px] transform hover:scale-108 transition duration-200' src="/images/aad864bd17860b27634fe621001c32db1739350431.webp" alt="" /></div>
              <div className="hidden sm:block">
                <img className='w-[200px] h-[60px] transform hover:scale-108 transition duration-200' src="/images/df6464de32f4a09262cee301f65aaa661739351256.webp" alt="" />
              </div>
            </div>
            <a href="#scrool" className='scroll-smooth'>
              <div className='flex justify-center items-center pt-[60px] animate-bounce gap-1'>
                <p className='text-white hidden sm:block scroll-smooth'>Scroll Down</p>
                <span className='text-white hidden sm:block'><FaAnglesDown /></span>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* Better Food Section */}
      <section className="bg-double  my-[60px] scroll-smooth pt-[20px]" id='scrool'>
        <div className='max-w-[1280px] m-auto grid grid-cols-[25%_40%_25%] justify-between'>
          <div>
            <img src="/images/70b50e1a48a82437bfa2bed925b862701742892555.webp" className='lg:w-[50px] w-[30px] lg:ms-[100%]' alt="" />
            <img src="/images/110a09a9d81f0e5305041c1b507d0f391743058910.webp" className='lg:w-[250px] w-[100px] lg:mt-20 lg:ms-24' alt="" />
            <img src="/images/9ef1cc6ecf1d92798507ffad71e9492d1742892584.webp" className='w-[50px]' alt="" />
          </div>
          <div className=' flex flex-col justify-center items-center'>
            <h1 className='lg:text-6xl text-[21px] font-bold text-[#EF4F5F] text-center pb-[25px]'>Better food for
              more people</h1>
            <p className='text-gray-500 lg:text-[24px] text-center'>For over a decade, we’ve enabled our customers to discover new tastes, delivered right to their doorstep</p>
          </div>
          <div>
            <img src="/images/3d1b3a891e2c59fd5ae7654dd207370b1739514134.webp" alt="" />
            <img src="/images/9ef1cc6ecf1d92798507ffad71e9492d1742892584.webp" className='w-[50px] lg:ms-[100%]' alt="" />
            <img src="/images/c7523de995639024918c6947c4b2cdcd1742894059.webp" className='w-[200px]' alt="" />
          </div>
        </div>
      </section>
      <div className='max-w-[1080px] m-auto shadow-[0px_2.777px_13.401px_0px_rgba(0,0,0,0.09)] grid lg:grid-cols-3 grid-cols-1 md:grid-cols-1 justify-between p-8 lg:rounded-[32px]'>
        <div className='flex items-center justify-center gap-3 lg:border-r-1 border-gray-500'>
          <div>
            <h3 className='text-[35px] font-bold text-[#596378]'>3,00,000+</h3>
            <p className='text-[17px] text-gray-500 font-bold'>restaurants</p>
          </div>
          <img src="/images/d19ec60986487a77bcb026e5efc3325f1742908200.webp" className='w-[70px]' alt="" />
        </div>
        <div className='flex items-center justify-center gap-3 lg:border-r-1 border-gray-500'>
          <div>
            <h3 className='text-[35px] font-bold text-[#596378]'>800+</h3>
            <p className='text-[17px] text-gray-500 font-bold'>cities</p>
          </div>
          <img src="/images/e7533c4081d6140da37b9f430cb7b8051743006192.webp" className='w-[40px]' alt="" />
        </div>
        <div className='flex items-center justify-center gap-3'>
          <div>
            <h3 className='text-[35px] font-bold text-[#596378]'>3 billion+</h3>
            <p className='text-[17px] text-gray-500 font-bold'>orders delivered</p>
          </div>
          <img src="/images/713443cc5944ce4284d7e49e75e2aacf1742466222.webp" className='w-[70px]' alt="" />
        </div>
      </div>
      {/* Waiting for you*/}
      <section className='background py-[100px] my-41 '>
        <div className='max-w-[700px] m-auto font-bold text-[#EF4F5F]'>
          <h2 className='text-center text-[60px] leading-15 pb-[20px]'>What’s waiting for you
            on the app?</h2>
          <div className='max-w-[500px] m-auto'>
            <p className='text-center font-light text-gray-500 text-[29px] leading-9'>Our app is packed with features that enable you to experience food delivery like never before</p>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 max-w-[1000px] m-auto  mt-11 gap-15'>
          <div className='relative grid grid-cols-2'>
            <div className='bg-white shadow rounded-2xl  w-[110px]  mt-5 h-[126px]'>
              <img src="/images/d0f1639403f80f8f2c19e0d538222e661742455804.webp" alt="" />
              <p className='text-center text-gray-500'>Healthy</p>
            </div>
            <div className='bg-white shadow rounded-2xl  w-[110px] h-[126px]'>
              <img src="/images/82f145180cd6f920a8a8617dda366a0a1742455963.webp" alt="" />
              <p className='text-center text-gray-500'>Veg Mode</p>
            </div>
            <div className='bg-white shadow rounded-2xl  w-[110px] ms-[20px] mt-[20px] h-[126px]'>
              <img src="/images/5e7aab0f183b36fc12c29279f0cb55181742462245.webp" alt="" />
              <p className='text-center text-gray-500'>Plan a Party</p>
            </div>
            <div className='bg-white shadow rounded-2xl  w-[110px] ms-[20px] mt-3 h-[126px]'>
              <img src="/images/867f86a10503998e437963bb37c451591742455764.webp" alt="" />
              <p className='text-center text-gray-500'>Gift Cards</p>
            </div>
          </div>
          <div className='w-[280px] relative'>
            <img src="/images/3f7e2757e62fd22592b879bd56b666011742294630.webp" className='relative' alt="" />
            <div className="absolute top-[30%] left-[22%] right-2 shadow p-[10px] w-[150px] rounded-2xl bg-white">
              <img src="/images/85fa7a0c955ba0f8d894b6b68a27cdf81742978539.webp" alt="" />
              <p className='text-gray-500 text-center font-semibold'>Quick <br />
                delivery</p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-0'>
            <div className='bg-white shadow rounded-2xl  w-[110px] h-[126px] mt-5'>
              <img src="/images/6e27c9acde6045c272a28e6eb275727e1742455789.webp" alt="" />
              <p className='text-center text-gray-500'>Gourmet</p>
            </div>
            <div className='bg-white shadow rounded-2xl  w-[110px] h-[126px]'>
              <img src="/images/813952c961fd13588cb71867d84ea7dc1742455815.webp" alt="" />
              <p className='text-center text-gray-500'>Offers</p>
            </div>
            <div className='bg-white shadow rounded-2xl p-3 w-[110px] ms-[20px] mt-[20px] h-[126px]'>
              <img src="/images/06d090307e02772693ac06123b53459b1742455939.avif" alt="" />
              <p className='text-center text-gray-500'>Food on Train</p>
            </div>
            <div className='bg-white shadow rounded-2xl p-3 w-[110px] ms-[20px] mt-3 h-[126px]'>
              <img src="/images/541a9b65443d5d378e1b2d18319663f41742455727.webp" alt="" />
              <p className='text-center text-gray-500'>Homely meals</p>
            </div>
          </div>
        </div>
      </section>
      {/* Zomato Gold*/}
      <section className='bg-black py-[250px] relative'>
        <div className='carve'></div>
      </section>
      {/* Eternal Section */}
      <section className='bg-white max-w-[100%] px-[20px] py-[150px] '>
        <div className='flex justify-center mb-[60px]'>
          <img src="/images/81ed35564614cbdf5188bb72dc7e57b51739536377.webp" className='w-[300px]' alt="" />
        </div>
        <div className='grid grid-cols-3 justify-center items-center m-auto'>
          <div className='h-0.5 w-12 bg-gradient-to-r from-transparent to-[#D2D2D2] md:w-28 ms-[370px]'></div>
          <h2 className='text-gray-500 font-semibold text-[38px] text-center'>POWERING INDIA’S CHANGING LIFESTYLES</h2>
          <div className='h-0.5 w-12 bg-gradient-to-l from-transparent to-[#D2D2D2] md:w-28'></div>
        </div>
        <div className='max-w-[100%] grid grid-cols-4 gap-[30px] pt-15'>
          <div className='flex flex-col items-center justify-center rounded-[32px] border-[3px] border-red-100 bg-1 p-[60px] hover:scale-110 ease-out duration-100'>
            <img src="/images/d1eee2be61cf47e2332cb7c49475c0981739777714.webp" className='w-[200px] aspect-square h-36 rounded-[32px] object-cover 2xl:h-[200px]' alt="" />
            <h2 className='font-bold text-2xl mt-3'>zomato</h2>
            <p className='font-medium text-gray-500 text-center text-[19px] mt-2.5'>Get the app now to start ordering your favorite dishes!</p>
            <div className='flex justify-center items-center text-gray-500 mt-6 gap-[6px]'>
              <p className='font-bold'>Check it out</p>
              <p className='text-[#EF4F5F] font-bold'><IoIosArrowForward /></p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center rounded-[32px] border-[3px] border-[#FAECBD]  p-[60px] hover:scale-110 ease-out duration-100 ' style={{"backgroundColor":"rgb(255, 249, 229)"}} >
            <img src="/images/071cb96db84f20eea3a39804e113bdee1739777655.webp" className='w-[200px] aspect-square h-36 rounded-[32px] object-cover 2xl:h-[200px]' alt="" />
            <h2 className='font-bold text-2xl mt-3'>blinkit</h2>
            <p className='font-medium text-gray-500 text-center text-[19px] mt-2.5'>Choose from 10,000+ products & get them delivered in minutes</p>
            <div className='flex justify-center items-center text-gray-500 mt-6 gap-[6px]'>
              <p className='font-bold'>Check it out</p>
              <p className='text-[#EF4F5F] font-bold'><IoIosArrowForward /></p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center rounded-[32px] border-[3px] border-[#E2D4FF] p-[60px] hover:scale-110 ease-out duration-100 bg-3'>
            <img src="/images/38bf2d77d9391b8b1866e3ae2b5fe19a1739777683.webp" className='w-[200px] aspect-square h-36 rounded-[32px] object-cover 2xl:h-[200px]' alt="" />
            <h2 className='font-bold text-2xl mt-3'>district</h2>
            <p className='font-medium text-gray-500 text-center text-[19px] mt-2.5'>The best of events, movies, dining, and everything you love!</p>
            <div className='flex justify-center items-center text-gray-500 mt-6 gap-[6px]'>
              <p className='font-bold'>Check it out</p>
              <p className='text-[#EF4F5F] font-bold'><IoIosArrowForward /></p>
            </div>
          </div>
          <div className='flex flex-col items-center justify-center rounded-[32px] border-[3px] border-red-100 bg-gradient-to-b p-[60px] hover:scale-110 ease-out duration-100 bg-4'>
            <img src="/images/9207cd0fc68c4ac55cfd3bfa00c02a351739777699.webp" className='w-[200px] aspect-square h-36 rounded-[32px] object-cover 2xl:h-[200px]' alt="" />
            <h2 className='font-bold text-2xl mt-3'>hyperpure</h2>
            <p className='font-medium text-gray-500 text-center text-[19px] mt-2.5'>Offering complete supply chain solution for your restaurant</p>
            <div className='flex justify-center items-center text-gray-500 mt-6 gap-[6px]'>
              <p className='font-bold'>Check it out</p>
              <p className='text-[#EF4F5F] font-bold'><IoIosArrowForward /></p>
            </div>
          </div>
        </div>
      </section>
      {/* Download App Section */}
      <section>
        <div className='shadow-[0px_8px_10px_0px_#1C1C1C14] bg-[linear-gradient(180deg,_#FFFFFF_0%,_#FFEDEF_100%)] border-[#FFDBE0] border-4 max-w-[1320px] m-auto  rounded-[45px] lg:my-[120px]'>
          <div className='grid lg:grid-cols-2'>
            <div className='flex flex-col py-36 px-[60px]'>
              <h4 className='font-bold text-[47px]'>Download the app now!</h4>
              <p className='text-2xl mt-2'>Experience seamless online ordering <br />
                only on the Zomato app</p>
              <div className='flex gap-3 mt-10'>
                <div className="">
                  <img className='w-[200px] h-[60px] transform hover:scale-108 transition duration-200' src="/images/aad864bd17860b27634fe621001c32db1739350431.webp" alt="" /></div>
                <div className="">
                  <img className='w-[200px] h-[60px] transform hover:scale-108 transition duration-200' src="/images/df6464de32f4a09262cee301f65aaa661739351256.webp" alt="" />
                </div>
              </div>
            </div>
            <div className='relative md:block hidden'>
              <img src="/images/3f7e2757e62fd22592b879bd56b666011742294630.webp" className='w-[450px] mt-20' alt="" />
              <h4 className='absolute font-bold text-3xl text-center top-[180px] left-20 text-gray-500'>Scan the QR code to <br /> download the app</h4>
              <img src="/images/98cc4eba0a6f59e728e5223a70fd39551742471514.webp" className='absolute w-[200px] top-[270px] left-27' alt="" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
