'use client'

import Link from "next/link";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import HeartButton from "@/components/HeartButton";
import "./home.css"
import Footer from "@/components/Footer";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    // Toggle the sidebar
    const toggleSidebar = () => {
      setIsOpen(!isOpen);
    };
  return (
    <div className="flex flex-col">
         {/* for mobile */}
         <div className="sm:hidden bg-white  w-full h-64">
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
          isOpen ? "w-56 md:w-64" : "w-0"
        } bg-black md:bg-white text-white md:text-black h-full md:absolute fixed top-0  left-0 z-50  overflow-y-auto transition-all duration-300`}
      >
        <button className="text-[#555] absolute right-3 font-bold text-[28px] hover:text-[#e74c3c] transition-colors duration-300 ease-in-out" onClick={() => {
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
        className="flex flex-col flex-1 transition-all duration-300 w-full"
      >
      <div className={`md:hidden  ${isOpen ? "block z-40 bg-black fixed opacity-20 top-0 h-full w-full": "hidden"}`}></div>

        <div className="flex-1  p-8 lg:p-1 md:p-7 w-full md:w-full lg:w-[1024px] xl:w-full  overflow-hidden sm:overflow-visible bg-[#F6F7F9]
        ">
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-[32px] mt-9 md:mt-0 lg:mt-12 2xl:mt-16 2xl:mb-12 mb-8  lg:ml-7 2xl:mx-32 w-full lg:w-[95%] 2xl:w-[90%] 2xl:gap-16 transition-all duration-300">
{/* Card 1 for Mobile*/}
<div className="flex sm:hidden absolute -top-24 left-8 bg-blue-100 rounded-lg 2xl:rounded-2xl shadow-md w-[84%]">
    <img
      src="/ads/Ads1ForMobile.png"
      alt="Car"
      className="w-full h-full object-contain rounded-lg 2xl:rounded-2xl"
    />
    <button
      className="absolute top-[52.8%] left-[4.3%] transform -translate-y-1/2 bg-blue-600 xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-3 px-8 rounded-md z-10"
    >
      Rental Car
    </button>
  </div>

  {/* Card 1 */}
  <div className="hidden sm:flex sm:relative sm:bg-blue-100 sm:rounded-lg 2xl:rounded-2xl sm:shadow-md">
    <img
      src="/ads/Ads1.png"
      alt="Car"
      className="w-full h-full object-contain"
    />
    <button
      className="absolute xl:top-[56%] md:top-[53%] xl:left-[3.5%] md:left-[3.4%] bg-blue-600 md:text-[10px] lg:text-base 2xl:text-2xl text-white py-2 xl:py-3 2xl:py-7 px-4 2xl:px-14 xl:px-6 md:px-2 rounded-md  md:rounded-sm lg:rounded-md z-10 "
    >
      Rental Car
    </button>
  </div>


        {/* Card 2 */}
        <div className="hidden sm:flex sm:relative sm:bg-blue-100 sm:rounded-lg 2xl:rounded-2xl sm:shadow-md
        ">
    <img
      src="/ads/Ads2.png"
      alt="Car"
      className="w-full h-full object-contain"
    />
    <button
      className="absolute xl:top-[56%] md:top-[53%] xl:left-[3.5%] md:left-[3.4%] bg-[rgba(84,166,255,1)] md:text-[10px] lg:text-base 2xl:text-2xl text-white py-2 xl:py-3 2xl:py-7 px-4 2xl:px-14 xl:px-6 md:px-2 rounded-md  md:rounded-sm lg:rounded-md z-10"
    >
      Rental Car 
    </button>
  </div>
</div>

      <div className="lg:p-6 lg:pl-8 lg:pr-8 xl:px-12 2xl:px-32 w-[100%] lg:w-[100%]  md:w-[80%] md:ml-20 lg:ml-0">
        {/* Search Section */}

  <div className="flex flex-col  sm:mt-0 lg:flex-row gap-9 lg:gap-0 2xl:space-x-16 lg:space-x-10 mb-9 mt-28">
  <div className="flex flex-wrap pickup-search w-full  bg-white px-6 py-2 xl:px-8 2xl:pl-20 2xl:pr-0 2xl:py-7 rounded-lg 2xl:rounded-2xl">

<div className="flex w-full mb-4">
  <div className="h-4 w-4 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8 rounded-full bg-[rgba(53,99,233,0.3)]  mr-2 mt-3 flex justify-center items-center">
    <div className="h-2 w-2 lg:h-3 lg:w-3 2xl:h-4 2xl:w-4 bg-[rgba(53,99,233,1)] rounded-full"></div>
  </div>
  <h1 className="text-[16px] font-semibold 2xl:text-3xl md:font-bold mt-2 lg:mt-3">Pick-Up</h1>
</div>
<div className="flex  w-full lg:w-auto justify-between 2xl:justify-normal 2xl:space-x-16">
<div className="flex-1 pickup-location mr-2 mb-2 lg:mb-4 2xl:mr-0  lg:mr-4 md:mr-14">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Locations</label>
  <select name="location" id="location" className="h-10 w-full 2xl:w-[230px] pickup-location-input mr-4 text-[#90A3BF] lg:mr-4 xl:mr-24 2xl:mr-0  xl:px-0  md:mr-9 md:text-base lg:text-xs 2xl:text-2xl text-xs">
    <option value="" disabled selected className="text-[#90A3BF]">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Quetta">Quetta</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
  </select>
</div>
<div className="flex-1 mb-2 lg:mb-4 pickup-date px-3 lg:px-3 2xl:w-[310px] xl:px-5 2xl:px-12 md:px-9 border-x-2 border-x-[#C3D4E966] w-32  ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Date</label>
  <input
    type="date"
    className="date-input p-2 h-10 w-full xl:px-0 2xl:w-[200px] text-[#90A3BF] text-xs md:text-base lg:text-xs 2xl:text-2xl"
  />
</div>
<div className="flex-1 pickup-time mb-2 sm:mb-4 ml-4 2xl:w-[200px] w-32 ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Time</label>
  <input
    type="time"
    className=" pickup-time-input p-2 h-10 w-[90%] 2xl:w-[200px] xl:px-0 text-[#90A3BF] sm:w-full text-xs md:text-base lg:text-xs 2xl:text-2xl"
  />
</div>
</div>
</div>

    <div className={`h-16 w-16 xl:w-36 2xl:w-60 2xl:h-[102px] 2xl:mt-14 absolute lg:static z-50 lg:h-14 lg:w-32 sm:mt-11 bg-[#3563E9] shadow-lg shadow-[rgba(53,99,233,0.5)] flex justify-center items-center rounded-lg 2xl:rounded-2xl mt-24  ${
          isOpen ? "hidden" : "block"
        } ${
          showMore ? " md:top-[9.4%] md:left-[47%] left-[42%] top-[5.7%]" : " md:top-[11%] md:left-[47%] left-[42%] top-[8.1%]"
        }`}><img src="/icons/arrows.svg" alt="arrows" className="lg:w-[36%] 2xl:w-[36%]"/></div>
         {isOpen && ( <div className="h-16 w-16 mt-0 absolute top-[3.7%] lg:static  md:top-[10.7%] md:left-[47%] left-[42%] z-20 lg:h-14 lg:w-32 sm:mt-11 bg-[#3563E9] shadow-lg shadow-[rgba(53,99,233,0.5)] flex justify-center items-center rounded-lg 2xl:rounded-2xl"
         ><img src="/icons/arrows.svg" alt="arrows"/></div>
        )}
           
        

    {/* Second block */}
    <div className="flex dropoff-search flex-wrap w-full bg-white px-6 xl:px-8 2xl:pl-20 2xl:pr-0 py-2 2xl:py-7 rounded-lg 2xl:rounded-2xl">

    <div className="flex w-full mb-4">
  <div className="h-4 w-4 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8  rounded-full bg-[rgba(92,175,252,0.3)]  mr-2 mt-3 flex justify-center items-center">
    <div className="h-2 w-2 lg:h-3 lg:w-3 2xl:h-4 2xl:w-4  bg-[#54A6FF] rounded-full"></div>
  </div>
  <h1 className="text-[16px] font-semibold 2xl:text-3xl md:font-bold mt-2 lg:mt-3">Drop-Off</h1>
</div>
<div className="flex w-full lg:w-auto justify-between 2xl:space-x-16">
<div className="flex-1 dropoff-location mr-2 mb-2 lg:mb-4 lg:mr-4 md:mr-14">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Locations</label>
  <select name="location" id="location" className="h-10 w-full dropoff-location-input mr-4 lg:mr-4 xl:mr-24  xl:px-0 text-[#90A3BF] md:mr-9 2xl:mr-0 2xl:w-[230px]  2xl:text-2xl md:text-base lg:text-xs text-xs">
    <option value="" disabled selected className="">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Quetta">Quetta</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
  </select>
</div>
<div className="flex-1 mb-2 lg:mb-4 dropoff-date px-3 lg:px-3 xl:px-5 md:px-9 2xl:px-12 border-x-2 border-x-[#C3D4E966] 2xl:w-[310px] w-32  ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Date</label>
  <input
    type="date"
    className="dropoff-date-input p-2 h-10 w-full xl:px-0 text-[#90A3BF] text-xs md:text-base lg:text-xs  2xl:text-2xl "
  />
</div>
<div className="flex-1 mb-2 sm:mb-4 dropoff-time ml-4 2xl:w-[200px] w-32 ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Time</label>
  <input
    type="time"
    className="dropoff-time-input p-2 h-10 w-[90%] xl:px-0 text-[#90A3BF] sm:w-full text-xs md:text-base lg:text-xs  2xl:text-2xl"
  />
</div>
</div>
</div>
  </div>


        {/* Popular Cars Section */}
        <div className="mb-9">

         {/* for laptop */}
<div className="flex justify-between mt-5 mb-5 md:mb-4 md:mt-5 lg:mb-7 lg:mt-7 2xl:mb-12 2xl:mt-16">
<h2 className="md:text-lg lg:text-xl text-base 2xl:text-[29px]  text-[#90A3BF]"
> Popular Cars</h2>
<div>
<span className="hidden sm:block"> <button
className="px-4 text-[#3563E9] md:text-lg lg:text-xl text-xl 2xl:text-[29px]"
><Link href="./Category-Car-Rent" className="font-semibold">View Link</Link> 
</button></span></div>

{/* for Mobile */}
<span className="flex sm:hidden"> <button
className="px-4 text-[#3563E9] text-base font-medium"
><Link href="./Category-Car-Rent">View Link</Link> 
</button></span>
</div>
          <div className={`grid  
          transition-all duration-300 2xl:gap-16
          ${
              isOpen ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            }`}>
            
                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px]  font-bold mt-2 ">Koenigsegg</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px]  mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image1.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$99.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF]">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">Nissan GT - R</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image2.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <p className="text-sm text-[#90A3BF] 2xl:text-[26px] font-bold line-through ">$100.00</p>
                  </div>
                 <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md "><Link href="./CarDetail">
                    Rent Now</Link>
                  </button>
                  
                  </div>
                </div>



                <div
                  className={`border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white md:block"
                  ${
                    isOpen ? "block md:block" : "hidden md:block"
                  }`}>
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">Rolls - Royce</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$96.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>


                <div
                  className={`border 2xl:block rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ?  "block md:hidden  " : "md:block hidden"
        }`}
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">Nissan GT - R</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image2.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <p className="text-sm text-[#90A3BF] font-bold  2xl:text-[26px] line-through ">$100.00</p>
                  </div>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
            
          </div>
        </div>

        {/* Recommendation Cars Section */}
        <div className="mb-6  ">
          <h2 className={`text-xl 2xl:text-[29px] mb-9 2xl:mb-12 2xl:mt-16 text-[#90A3BF] ${isOpen ? "hidden" : "block"}`}>Recommended Cars</h2>
          <div className={`grid 2xl:gap-16  transition-all duration-300
          ${
              isOpen ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            }`}>
          
                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">All New Rush</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image8.png" alt="car Image" className="hidden md:block"/>
                    <img src="/cars/image8ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] inline">$72.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF]">day</span></p>
                  <p className="text-sm text-[#90A3BF] font-bold 2xl:text-[26px] line-through ">$100.00</p>
                  </div>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image4ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">All New Terios</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">Sports</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image3.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image3ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-leftmx-1 md:ml-5  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$74.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? "md:hidden block" : "md:block hidden"
        }`}
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image5ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white md:flex"
                ${
                    isOpen ? " block md:block " : "hidden md:block"
                  }`}>
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">MG ZX Exclusice</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">Hatchback</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image6.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image6ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$76.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className={`hidden sm:block border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white md:block "
                ${
                    isOpen ? "block " : "hidden"
                  }`}>
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">New MG ZS</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image7.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image7ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className="hidden sm:block border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">MG ZX Exclusice</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">Hatchback</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image6.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image6ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$76.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className={`hidden sm:block border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? "md:hidden block" : "md:block hidden"
        }`}
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">New MG ZS</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image7.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image7ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
            
          </div>
        </div>

     
        {/* Show More Button */}
        {showMore && (
          <div className={`grid 2xl:gap-16 2xl:my-16 transition-all duration-300
            ${
                isOpen ? "grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              }`}>
          
          <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">All New Rush</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image8.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image8ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5  flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] inline">$72.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <p className="text-sm text-[#90A3BF] font-bold 2xl:text-[26px] line-through ">$100.00</p>
                  </div>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 justify-between">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image4ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 ">All New Terios</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">Sports</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image3.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image3ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$74.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? "hidden" : "block"
        }`}
                >
                  <div className="text-left mx-1 md:ml-6 flex justify-between">
                   <div className="text-lg 2xl:text-[32px] font-bold mt-2 justify-between">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image4ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] inline">$80.00/<span className="text-sm 2xl:text-[26px] text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8  py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                
               </div>
               

               
              
            )}
          
        </div>

        {!showMore && (
      <div className="w-[70%] 2xl:w-[57%] xl:w-[60%] lg:w-[60%] md:w-[62%] float-end showMore-button-div">
        <div className="flex  mt-[19px]  mb-20 xl:py-2 xl:px-12 w-full justify-between items-center">
          <button
            className="bg-blue-600 2xl:text-2xl text-white py-3 2xl:py-4 2xl:px-8 xl:py-3 xl:px-7 md:py-2 px-2 sm:px-6 rounded-sm  2xl:rounded-md "
            onClick={() => setShowMore(true)} // Display additional cars and hide the button
          >
            Show More Cars
          </button>
          <div  className="text-[#90A3BF] 2xl:text-2xl xl:text-md">120 Car</div>
         
        </div>
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


