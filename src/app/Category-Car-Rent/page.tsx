'use client'

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeartButton from "@/components/HeartButton";

import Footer from "@/components/Footer";

export default function CategoryCarRent() {
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    // Toggle the sidebar
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="flex flex-col">
         {/* for mobile */}
         <div className="sm:hidden bg-white  w-full h-56">
          <button className="h-10 w-10 ml-4 mt-3" onClick={toggleSidebar}><img src="./icons/lines.svg" className="h-full w-full" alt="" /></button>
         <header>  
          <Navbar />
         </header>
         </div>
         {/* for other device */}
       < div className="hidden sm:block">
    <header>  
          <Navbar />
         </header>
         </div>
    
    <div className="relative flex flex-wrap h-full w-full">
    

    {/* Sidebar */}
    <div
        className={`${
          isOpen ? "w-56" : "w-0"
        } bg-black md:bg-white md:w-56 lg:w-64 2xl:w-96 text-white md:text-black h-full md:absolute fixed top-0  left-0 z-50 md:z-20 overflow-y-auto transition-all duration-300`}
      >
        <button className="text-[#555] block md:hidden absolute right-3 font-bold text-[28px] hover:text-[#e74c3c] transition-colors duration-300 ease-in-out" onClick={() => {
          setIsOpen(!isOpen)
        }}>&times;</button>
      <div className="p-4">
        <h2 className="text-sm text-[#90A3BF] mt-3">TYPE</h2>
        <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="type" id="type1" />
         <label htmlFor="type1">Sports</label>
          <p className="text-[#90A3BF]">(10)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="type" id="type2" />
         <label htmlFor="type2">SUV</label>
          <p className="text-[#90A3BF]">(12)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="type" id="type3" />
         <label htmlFor="type3">MPV</label>
          <p className="text-[#90A3BF]">(16)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="type" id="type4" />
         <label htmlFor="type4">Sedan</label>
          <p className="text-[#90A3BF]">(20)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="type" id="type5" />
         <label htmlFor="type5">Coupe</label>
          <p className="text-[#90A3BF]">(14)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="type" id="type6" />
         <label htmlFor="type6">Hatchback</label>
          <p className="text-[#90A3BF]">(14)</p>
          </div>

          <h2 className="text-sm text-[#90A3BF] mt-4">Capacity</h2>
        <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="Person" id="2Person" />
         <label htmlFor="2Person">2 Person</label>
          <p className="text-[#90A3BF]">(10)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="Person" id="4Person" />
         <label htmlFor="4Person">4 Person</label>
          <p className="text-[#90A3BF]">(14)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="Person" id="6Person" />
         <label htmlFor="6Person">6 Person</label>
          <p className="text-[#90A3BF]">(12)</p>
          </div>
          <div className="flex space-x-1 mt-3">
         <input type="checkbox" name="Person" id="8Person" />
         <label htmlFor="8Person">8 Person</label>
          <p className="text-[#90A3BF]">(16)</p>
          </div>
    
      </div>
    </div>

    
    <div
        className="flex flex-col flex-1 transition-all duration-300 ml-0 sm:ml-56 xl:ml-64 2xl:ml-96 overflow-x-hidden  bg-[#F6F7F9]"
         
      >
      <div className={`md:hidden  ${isOpen ? "block z-40 bg-black fixed opacity-20 top-0 h-full w-full": "hidden"}`}></div>

        <div className="flex-1 p-8 lg:p-1 md:p-4 w-[425px] md:w-full lg:w-full xl:w-full  overflow-hidden sm:overflow-visible
        ">
     
      <div className="lg:p-6 lg:pl-10 xl:pl-8 lg:pr-2 xl:pr-8 w-[100%] lg:w-full  md:w-full  lg:ml-0 -mt-16 md:mt-0">
        {/* Search Section */}

  <div className="flex flex-col  sm:mt-0 lg:flex-row gap-9 lg:gap-0 lg:space-x-3 xl:space-x-10 mt-20 mb-9">
  <div className="flex flex-wrap w-full  bg-white px-6 xl:px-6 lg:pr-3 lg:pl-2 pt-2 border rounded-lg">

<div className="flex w-full mb-4">
  <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-[rgba(53,99,233,0.3)]  mr-2 mt-3 flex justify-center items-center">
    <div className="h-2 w-2 lg:h-3 lg:w-3 bg-[rgba(53,99,233,1)] rounded-full"></div>
  </div>
  <h1 className="text-[16px] font-semibold md:font-bold mt-2 lg:mt-3">Pick-Up</h1>
</div>
<div className="flex justify-between">
<div className="flex-1 mr-2 mb-2 lg:mb-4 lg:mr-4 md:mr-14">
  <label className="block text-sm md:text-base  lg:text-sm  font-bold mb-1">Location</label>
  <select name="location" id="location" className="h-10 w-full mr-4 lg:mr-4 md:mr-9 md:text-base lg:text-xs text-xs">
    <option value="" disabled selected className="text-[#90A3BF]">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Quetta">Quetta</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
  </select>
</div>
<div className="flex-1 mb-2 lg:mb-4 px-3 lg:px-3 md:px-9 border-x-2 border-x-[#C3D4E966] w-32 ">
  <label className="block text-sm md:text-base  lg:text-sm  font-bold mb-1">Date</label>
  <input
    type="date"
    className="p-2 h-10 w-full text-xs md:text-base lg:text-xs "
  />
</div>
<div className="flex-1 mb-2 sm:mb-4 ml-4  w-32  ">
  <label className="block text-sm md:text-base  lg:text-sm  font-bold mb-1">Time</label>
  <input
    type="time"
    className=" p-2 h-10 w-[90%] sm:w-full text-xs md:text-base lg:text-xs"
  />
</div>
</div>
</div>

    <div className={`h-16 w-16 mt-0 absolute top-[6.6%] xl:static lg:top-[1.5rem] lg:left-[36.8rem]  md:top-[6rem] md:left-[30rem] left-[42%] z-50 xl:h-14 xl:w-32 sm:mt-11 bg-[#3563E9] shadow-lg shadow-[rgba(53,99,233,0.5)] flex justify-center items-center rounded-lg
      ${
          isOpen ? "hidden" : "block"
        }`}><img src="/icons/arrows.svg" alt="arrows"/></div>
         {isOpen && ( <div className="h-16 w-16 mt-0 absolute top-[3.73%] lg:static  md:top-[10.7%] md:left-[47%] left-[42%] z-20 lg:h-14 lg:w-32 sm:mt-11 bg-[#3563E9] shadow-lg shadow-[rgba(53,99,233,0.5)] flex justify-center items-center rounded-lg"
         ><img src="/icons/arrows.svg" alt="arrows"/></div>
        )}
           
        

    {/* Second block */}
    <div className="flex flex-wrap w-full bg-white px-6 xl:px-6 lg:pr-1 lg:pl-5 py-2 border rounded-lg">

    <div className="flex w-full mb-4">
  <div className="h-4 w-4 lg:h-6 lg:w-6 rounded-full bg-[rgba(53,99,233,0.3)]  mr-2 mt-3 flex justify-center items-center">
    <div className="h-2 w-2 lg:h-3 lg:w-3 bg-[rgba(53,99,233,1)] rounded-full"></div>
  </div>
  <h1 className="text-[16px] font-semibold md:font-bold mt-2 lg:mt-3">Drop-Off</h1>
</div>
<div className="flex justify-between">
<div className="flex-1 mr-2 mb-2 lg:mb-4 lg:mr-4 md:mr-14">
  <label className="block text-sm md:text-base  lg:text-sm  font-bold mb-1">Location</label>
  <select name="location" id="location" className="h-10 w-full mr-4 lg:mr-4 md:mr-9 md:text-base lg:text-xs text-xs">
    <option value="" disabled selected className="text-[#90A3BF]">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Quetta">Quetta</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
  </select>
</div>
<div className="flex-1 mb-2 lg:mb-4 px-3 lg:px-3 md:px-9 border-x-2 border-x-[#C3D4E966] w-32  ">
  <label className="block text-sm md:text-base  lg:text-sm  font-bold mb-1">Date</label>
  <input
    type="date"
    className="p-2 h-10 w-full text-xs md:text-base lg:text-xs "
  />
</div>
<div className="flex-1 mb-2 sm:mb-4 ml-4  w-32 ">
  <label className="block text-sm md:text-base  lg:text-sm  font-bold mb-1">Time</label>
  <input
    type="time"
    className=" p-2 h-10 w-[90%] sm:w-full text-xs md:text-base lg:text-xs"
  />
</div>
</div>
</div>
  </div>


        {/* Popular Cars Section */}
        <div className="mb-6">
          <div className="grid  
          transition-all duration-300 lg:grid-cols-3 2xl:grid-cols-4 xl:grid-cols-3 gap-6 xl:gap-6 lg:gap-4 md:gap-4 grid-cols-1 md:grid-cols-2">
            
                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[9rem] md:mr-[2.8rem] lg:mr-[2.5rem] xl:mr-[5.2rem] 2xl:mr-[15rem]">Koenigsegg</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image1.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left  lg:ml-2 xl:ml-5 ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$99.00/<span className="text-sm text-[#90A3BF]  mr-7 lg:mr-4 xl:mr-7 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white  px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-2 xl:py-2 xl:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[8rem] md:mr-[1.7rem] lg:mr-[1rem] xl:mr-[4.3rem] 2xl:mr-[15rem]">Nissan GT - R</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px]  mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image2.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem]  text-left lg:lg:ml-2 xl:ml-5 ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-7 lg:mr-2 xl:mr-7 2xl:mr-36">day</span></p>
                 <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md "><Link href="./CarDetail">
                    Rent Now</Link>
                  </button>
                  <p className="text-sm text-[#90A3BF] font-bold line-through mt-[-0.5rem]">$100.00</p>
                  </div>
                </div>



                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white hidden lg:block"
                 >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[3.6rem] lg:mr-[1.4rem] xl:mr-[3.6rem] 2xl:mr-[15rem]">Rolls - Royce</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$96.00/<span className="text-sm text-[#90A3BF]  mr-7 lg:mr-2 xl:mr-7 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>


                <div
                  className={`border rounded-lg p-4 shadow-md text-center md:hidden 2xl:block bg-white transition-all duration-300
      ${
          isOpen ?  "block   " : " hidden"
        }`}
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[3rem] 2xl:mr-[15rem]">Nissan GT - R</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image2.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5  md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-7 lg:mr-4 xl:mr-7 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  <p className="text-sm text-[#90A3BF] font-bold line-through mt-[-0.5rem]">$100.00</p>
                  </div>
                </div>
            
          </div>
        </div>

        {/* Recommendation Cars Section */}
          <div className="grid  transition-all duration-300 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-6 lg:gap-4 md:gap-4  mb-6 grid-cols-1 md:grid-cols-2">
          
                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[8rem] md:mr-[1.6rem] lg:mr-[1.2rem] xl:mr-[4.8rem] 2xl:mr-[15rem]">All New Rush</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$72.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  <p className="text-sm text-[#90A3BF] font-bold line-through mt-[-0.5rem]">$100.00</p>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[12rem] md:mr-[5rem] lg:mr-[5rem] xl:mr-[7rem] 2xl:mr-[15rem]">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6 ">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-6 md:ml-2 xl:ml-6 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[8rem] md:mr-[1rem] lg:mr-[0.6rem] xl:mr-[2.5rem] 2xl:mr-[15rem]">All New Terios</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image3.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$74.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? "md:hidden block" : "md:block hidden"
        }`}
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[12rem] md:mr-[5.2rem] lg:mr-[5rem] xl:mr-[7rem] 2xl:mr-[15rem]">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg p-4 shadow-md text-center bg-white md:flex"
                ${
                    isOpen ? " block md:block " : "hidden md:block"
                  }`}>
                  <div className="text-left ml-6 flex">
                   <div className="text-lg lg:text-lg md:text-base font-bold mt-2 mr-[1.3rem] md:mr-[1.4rem] md:-ml-[1rem] lg:mr-[0.2rem] xl:mr-[1.3] 2xl:mr-[15rem]">MG ZX Exclusice</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6 md:ml-3 lg:ml-2 xl:ml-6">Hatchback</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image6.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$76.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className={`hidden sm:block border rounded-lg p-4 shadow-md text-center bg-white md:block "
                ${
                    isOpen ? "block " : "hidden"
                  }`}>
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[4rem] md:mr-[2.5rem] lg:mr-[1.6rem] xl:mr-[4rem] 2xl:mr-[15rem]">New MG ZS</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image7.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className={`md:hidden 2xl:block border rounded-lg p-4 shadow-md text-center bg-white transition-all duration-300"
                ${
          isOpen ? " block" : "hidden"
        }`}>
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[1.3rem] 2xl:mr-[15rem]">MG ZX Exclusice</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Hatchback</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image6.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$76.00/<span className="text-sm text-[#90A3BF]  mr-7 lg:mr-4 xl:mr-7 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className={` md:hidden 2xl:block border rounded-lg p-4 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? " block" : "hidden"
        }`}
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[4rem] 2xl:mr-[15rem]">New MG ZS</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image7.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-7 lg:mr-4 xl:mr-7 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
            
          
        </div>

     
        {/* Show More Button */}
        {showMore && (
          <div className="grid  transition-all duration-300 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-6 lg:gap-4 md:gap-4 grid-cols-1 md:grid-cols-2">
          
          <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[9rem] md:mr-[1.6rem] lg:mr-[1.2rem] xl:mr-[4.8rem] 2xl:mr-[15rem]">All New Rush</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5  md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$72.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  <p className="text-sm text-[#90A3BF] font-bold line-through mt-[-0.5rem]">$100.00</p>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[12rem] md:mr-[5.2rem] lg:mr-[5rem] xl:mr-[7rem] 2xl:mr-[15rem]">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-6 md:ml-2 lg:ml-2 xl:ml-6 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[8rem] md:mr-[1rem] lg:mr-[0.6rem] xl:mr-[2.5rem] 2xl:mr-[15rem]">All New Terios</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image3.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$74.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`lg:hidden 2xl:block border rounded-lg p-4 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? "hidden" : "block"
        }`}
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[12rem] md:mr-[5.2rem] lg:mr-[7rem] 2xl:mr-[15rem]">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className="h-[100px] xl:h-[115px] 2xl:h-[240px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$80.00/<span className="text-sm text-[#90A3BF]  mr-6 lg:mr-2 xl:mr-6 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                
               </div>
               

               
              
            )}
          
        </div>

     {!showMore && (
        <div className="flex  mt-[19px]  mb-20 py-2 px-12 ">
          <button
            className="bg-blue-600 text-white py-3 md:py-2 px-2 sm:px-6 rounded-md ml-auto relative left-10 "
            onClick={() => setShowMore(true)} // Display additional cars and hide the button
          >
            Show More Cars
          </button>
          <div  className="text-[#90A3BF] ml-14 relative left-10 top-4 sm:static sm:ml-auto ">120 Car</div>
         
        </div>
      )}
      </div>
      </div>
      
    </div>
    <footer>
          <Footer/>
        </footer>
    </div>
  );
}


