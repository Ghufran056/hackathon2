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
         <div className="sm:hidden bg-white  w-full  py-6">
            <div className="flex justify-between mx-6 pt-3 mb-3">
            <button className="h-9 w-9 " onClick={toggleSidebar}><img src="./icons/lines.svg" className="h-full w-full" alt="" /></button>
            <button>
             <img src="/icons/image.svg" alt="Profile Icon" className="block md:hidden w-9 h-9 xl:w-12 xl:h-12 border border-[rgba(195,212,233,0.4)] rounded-full"/></button>
             <div className="h-16 w-24 block md:hidden rounded bg-white absolute z-40 top-[18%] right-[3.8%]"></div>
            </div>
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
        } bg-black md:bg-white md:w-48 lg:w-52 xl:w-64 2xl:w-[400px] text-white md:text-black h-full md:absolute fixed top-0  left-0 z-50 md:z-20 overflow-y-auto transition-all duration-300`}
      >
        <button className="text-[#555] block md:hidden absolute right-3 font-bold text-[28px] hover:text-[#e74c3c] transition-colors duration-300 ease-in-out" onClick={() => {
          setIsOpen(!isOpen)
        }}>&times;</button>
      <div className="p-4 xl:p-6 2xl:p-8">
        <h2 className="text-xs text-[#90A3BF] font-semibold mt-3 2xl:mt-6 2xl:text-lg">TYPE</h2>
        <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8 ">
         <input type="checkbox" name="type" id="type1" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3"/>
         <label htmlFor="type1" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">Sports</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(10)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="type" id="type2" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="type2" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">SUV</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(12)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="type" id="type3" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="type3" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">MPV</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(16)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="type" id="type4" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="type4" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">Sedan</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(20)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="type" id="type5" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="type5" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">Coupe</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(14)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="type" id="type6" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="type6" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">Hatchback</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(14)</p>
          </div>

          <h2 className="text-xs text-[#90A3BF] font-semibold mt-4 lg:mt-7 xl:mt-8 2xl:mt-9 2xl:text-lg">Capacity</h2>
        <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="Person" id="2Person" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="2Person" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">2 Person</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(10)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8 ">
         <input type="checkbox" name="Person" id="4Person" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="4Person" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">4 Person</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(14)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="Person" id="6Person" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="6Person" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">6 Person</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(12)</p>
          </div>
          <div className="flex space-x-1 mt-3 lg:mt-5 xl:mt-5 2xl:mt-8">
         <input type="checkbox" name="Person" id="8Person" className="xl:h-7 xl:w-4 2xl:h-8 2xl:w-6 mr-1 2xl:mr-3" />
         <label htmlFor="8Person" className="textx-white md:text-[#2b4575] xl:text-lg 2xl:text-2xl">8 or More</label>
          <p className="text-[#90A3BF] xl:text-lg 2xl:text-2xl">(16)</p>
          </div>
        
<div className="relative my-6">
    <label htmlFor="labels-range-input" className="text-xs text-[#90A3BF] font-semibold mt-3 2xl:mt-6 2xl:text-lg">Price</label>
    <input id="labels-range-input" type="range" min="10" max="100" className="w-full h-2 bg-[#90A3BF] rounded-lg [&::-webkit-slider-thumb]:appearance-none  [&::-moz-range-track]:bg-[#3563E9] cursor-pointer dark:bg-gray-700"/>
    <div className="text-sm text-white md:text-[#596780] mt-1 2xl:mt-3 xl:text-lg 2xl:text-2xl">Max.$100.00</div>
</div>

      </div>
    </div>

    
    <div
        className="flex flex-col flex-1 transition-all duration-300 ml-0 md:ml-48 lg:ml-52 xl:ml-64 2xl:ml-[400px] overflow-x-hidden  bg-[#F6F7F9]"
         
      >
      <div className={`md:hidden  ${isOpen ? "block z-40 bg-black fixed opacity-20 top-0 h-full w-full": "hidden"}`}></div>

        <div className="flex-1 p-8  md:p-4 lg:p-2  md:w-full lg:w-full xl:w-full  overflow-hidden sm:overflow-visible
        ">
     
      <div className="lg:p-4 xl:px-9 xl:py-9 2xl:px-12 2xl:py-12 w-[100%] lg:w-full  md:w-full  lg:ml-0 -mt-16 md:mt-0">
        {/* Search Section */}

        <div className="flex flex-col  sm:mt-0 lg:flex-row gap-9 lg:gap-0 2xl:space-x-6  xl:space-x-12 lg:space-x-9 mb-9 2xl:mb-14 mt-28">
  <div className="flex flex-wrap w-full lg:w-[50%] bg-white px-6 py-2 md:py-3 lg:py-0 xl:px-8 lg:px-4 2xl:pl-10 2xl:pr-10 2xl:py-7 rounded-lg 2xl:rounded-2xl">

<div className="flex w-full mb-4">
  <div className="h-4 w-4 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8 rounded-full bg-[rgba(53,99,233,0.3)]  mr-2 mt-3 flex justify-center items-center">
    <div className="h-2 w-2 lg:h-3 lg:w-3 2xl:h-4 2xl:w-4 bg-[rgba(53,99,233,1)] rounded-full"></div>
  </div>
  <h1 className="text-[16px] font-semibold 2xl:text-3xl md:font-bold mt-2 lg:mt-3">Pick-Up</h1>
</div>
<div className="flex w-full justify-between 2xl:justify-normal 2xl:space-x-16">
<div className="flex-1 mr-2 mb-2 lg:mb-4 2xl:mr-0  lg:mr-4 md:mr-0">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Locations</label>
  <select name="location" id="location" className="h-10 w-full 2xl:w-[230px] mr-4 text-[#90A3BF] lg:mr-4 xl:mr-24 2xl:mr-0  xl:px-0  md:mr-4 md:w-[140px] lg:w-full md:text-base lg:text-xs 2xl:text-2xl text-xs">
    <option value="" disabled selected className="text-[#90A3BF]">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Quetta">Quetta</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
  </select>
</div>
<div className="flex-1 mb-2 lg:mb-4 px-3 lg:px-3 2xl:w-[310px] md:w-[160px] lg:w-full xl:px-5 2xl:px-12 md:px-4 border-x-2 border-x-[#C3D4E966] w-32  ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Date</label>
  <input
    type="date"
    className="p-2 h-10 w-full xl:px-0 2xl:w-[200px] md:w-[140px] lg:w-full text-[#90A3BF] text-xs md:text-base lg:text-xs 2xl:text-2xl"
  />
</div>
<div className="flex-1 mb-2 sm:mb-4 ml-4 lg:w-[80px] 2xl:w-[200px] md:w-[160px] w-32 ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Time</label>
  <input
    type="time"
    className=" p-2 h-10 w-[90%] 2xl:w-[200px] xl:px-0 text-[#90A3BF] sm:w-full text-xs md:w-[140px] lg:w-full md:text-base lg:text-xs 2xl:text-2xl"
  />
</div>
</div>
</div>

    <div className={`h-16 w-16 xl:w-16 xl:h-16 2xl:w-60 2xl:h-[102px] 2xl:mt-14 absolute 2xl:static   lg:top-[1.5%] lg:left-[53.7%] xl:top-[2.2%] xl:left-[53.5%] z-50 lg:h-14 lg:w-14  sm:mt-11 bg-[#3563E9] shadow-lg shadow-[rgba(53,99,233,0.5)] flex justify-center items-center rounded-lg 2xl:rounded-2xl mt-24 ${
          isOpen ? "hidden" : "block"
        } ${
          showMore ? " md:top-[4.5%] md:left-[58%] left-[42%] top-[3.1%]" : " md:top-[5.6%] md:left-[58%] left-[42%] top-[4.6%]"
        }`}><img src="/icons/arrows.svg" alt="arrows" className="lg:w-[36%] 2xl:w-[36%]"/></div>
         {isOpen && ( <div className={` ${ showMore ? "top-[4.29%]" : "top-[5.15%]"} h-16 w-16 mt-0 md:hidden absolute  lg:static  md:top-[8%] md:left-[47%] left-[42%] z-20 lg:h-14 lg:w-32 sm:mt-11 bg-[#3563E9] shadow-lg shadow-[rgba(53,99,233,0.5)] flex justify-center items-center rounded-lg 2xl:rounded-2xl`}
         ><img src="/icons/arrows.svg" alt="arrows"/></div>
        )}
       
           
        

    {/* Second block */}
    <div className="flex flex-wrap w-full lg:w-[50%] bg-white px-6 xl:px-8 lg:px-4 2xl:pl-10 2xl:pr-10 py-2 2xl:py-7 rounded-lg 2xl:rounded-2xl">

    <div className="flex w-full mb-4">
  <div className="h-4 w-4 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8  rounded-full bg-[rgba(92,175,252,0.3)]  mr-2 mt-3 flex justify-center items-center">
    <div className="h-2 w-2 lg:h-3 lg:w-3 2xl:h-4 2xl:w-4  bg-[#54A6FF] rounded-full"></div>
  </div>
  <h1 className="text-[16px] font-semibold 2xl:text-3xl md:font-bold mt-2 lg:mt-3">Drop-Off</h1>
</div>
<div className="flex w-full justify-between 2xl:space-x-16">
<div className="flex-1 mr-2 mb-2 lg:mb-4 lg:mr-4 md:mr-0">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Locations</label>
  <select name="location" id="location" className="h-10 w-full mr-4 lg:mr-4 xl:mr-24  xl:px-0 text-[#90A3BF] md:w-[140px] lg:w-full md:mr-4 2xl:mr-0 2xl:w-[230px]  2xl:text-2xl md:text-base lg:text-xs text-xs">
    <option value="" disabled selected className="">Select your city</option>
    <option value="Karachi">Karachi</option>
    <option value="Quetta">Quetta</option>
    <option value="Peshawar">Peshawar</option>
    <option value="Lahore">Lahore</option>
    <option value="Islamabad">Islamabad</option>
  </select>
</div>
<div className="flex-1 mb-2 lg:mb-4 px-3 lg:px-3 xl:px-5 md:px-4 2xl:px-12 md:w-[170px] lg:w-full border-x-2 border-x-[#C3D4E966] 2xl:w-[310px] w-32  ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Date</label>
  <input
    type="date"
    className="p-2 h-10 w-full xl:px-0 text-[#90A3BF] md:w-[140px] lg:w-full text-xs md:text-base lg:text-xs  2xl:text-2xl "
  />
</div>
<div className="flex-1 mb-2 sm:mb-4 ml-4 lg:w-[80px] md:w-[170px]  2xl:w-[200px] w-32 ">
  <label className="block text-sm md:text-base  lg:text-sm xl:text-md 2xl:text-3xl font-bold mb-1">Time</label>
  <input
    type="time"
    className=" p-2 h-10 w-[90%] xl:px-0 text-[#90A3BF] md:w-[140px] lg:w-full sm:w-full text-xs md:text-base lg:text-xs  2xl:text-2xl"
  />
</div>
</div>
</div>
  </div>


        {/* Popular Cars Section */}
        <div className="mb-6 xl:mb-9 2xl:mb-12">
          <div className="grid  
          transition-all duration-300 lg:grid-cols-3 2xl:grid-cols-4 xl:grid-cols-3 gap-6 xl:gap-9 2xl:gap-12 lg:gap-6 md:gap-4 grid-cols-1 md:grid-cols-2">
            
              <div className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px]  font-bold  mt-2 lg:mt-0 xl:mt-2">Koenigsegg</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-6 lg:ml-0 xl:ml-3">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[150px] 2xl:h-[250px]  mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image1.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-2 2xl:mr-0  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl  inline">$99.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md  ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold  mt-2 lg:mt-0 xl:mt-2">Nissan GT - R</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-6 lg:ml-0 xl:ml-3">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image2.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-2 2xl:mr-0  flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <p className="text-sm text-[#90A3BF] 2xl:text-[26px] xl:text-md  font-bold line-through ">$100.00</p>
                  </div>
                 <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md "><Link href="./CarDetail">
                    Rent Now</Link>
                  </button>
                  
                  </div>
                </div>



                  <div className={`border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white md:block"
                    ${
                      isOpen ? "block lg:block" : "hidden lg:block"
                    }`}>
                    <div className="text-left md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                     <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 lg:mt-0 xl:mt-2">Rolls - Royce</div>
                     <HeartButton/>
                    </div>
                    <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-6 lg:ml-0 xl:ml-3">Sports</div>
                      
                    <div className=" h-[120px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                      {/* Image Placeholder */}
                      <img src="/cars/image.png" alt="car Image"  />
                    </div>
                    <div className="mt-[4.3rem] text-left ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-2 2xl:mr-0  flex justify-between items-center">
                    <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$96.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]  ">day</span></p>
                    <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                      Rent Now
                    </button>
                    </div>
                  </div>

                  <div
                  className="border hidden 2xl:block rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 lg:mt-0 xl:mt-2 ">Nissan GT - R</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-6 lg:ml-0 xl:ml-3">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image2.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-2 2xl:mr-0  flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <p className="text-sm text-[#90A3BF] 2xl:text-[26px] xl:text-md  font-bold line-through ">$100.00</p>
                  </div>
                 <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md "><Link href="./CarDetail">
                    Rent Now</Link>
                  </button>
                  
                  </div>
                </div>
            
          </div>
        </div>

        {/* Recommendation Cars Section */}
          <div className="grid  transition-all duration-300 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-9 2xl:gap-12 lg:gap-6 md:gap-4  mb-6 xl:mb-12 grid-cols-1 md:grid-cols-2">
          
                 <div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">All New Rush</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3 ">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image8.png" alt="car Image" className="hidden md:block"/>
                    <img src="/cars/image8ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0  flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$72.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]">day</span></p>
                  <p className="text-sm text-[#90A3BF] font-bold 2xl:text-[26px] xl:text-md  line-through ">$100.00</p>
                  </div>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

<div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image4ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

<div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">All New Terios</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">Sports</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image3.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image3ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$74.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? "md:hidden block" : "md:block hidden"
        }`} >
                 <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image5ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0   flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white md:flex"
                ${
                    isOpen ? " block md:block " : "hidden md:block"
                  }`}>
                    <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                     <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">MG ZX Exclusice</div>
                     <HeartButton/>
                    </div>
                    <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">Hatchback</div>
                      
                    <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                      {/* Image Placeholder */}
                      <img src="/cars/image6.png" alt="car Image" className="hidden md:block"  />
                      <img src="/cars/image6ForMobile.png" alt="car Image" className="md:hidden block"/>
                    </div>
                    <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0   flex justify-between items-center">
                    <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$76.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                    <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                      Rent Now
                    </button>
                    </div>
                </div>
                <div
                  className={`hidden sm:block border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white md:block "
                ${
                    isOpen ? "block " : "hidden"
                  }`}>
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">New MG ZS</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image7.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image7ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0   flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className={`md:hidden 2xl:block border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white transition-all duration-300"
                ${
          isOpen ? " block" : "hidden"
        }`}>
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">MG ZX Exclusice</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">Hatchback</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image6.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image6ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0   flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$76.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                <div
                  className={` md:hidden 2xl:block border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? " block" : "hidden"
        }`}
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">New MG ZS</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image7.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image7ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
            
          
        </div>

     
        {/* Show More Button */}
        {showMore && (
          <div className="grid  transition-all duration-300 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:gap-9 lg:gap-4 md:gap-4 grid-cols-1 md:grid-cols-2">
          
<div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">All New Rush</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image8.png" alt="car Image" className="hidden md:block"/>
                    <img src="/cars/image8ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0  flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$72.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]">day</span></p>
                  <p className="text-sm text-[#90A3BF] font-bold 2xl:text-[26px] xl:text-md  line-through ">$100.00</p>
                  </div>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

<div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image4ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

<div
                  className="border rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">All New Terios</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">Sports</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image3.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image3ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0   flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$74.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className={`lg:hidden 2xl:block 2xl:rounded-2xl 2xl:p-9 border rounded-lg p-4 shadow-md text-center bg-white transition-all duration-300
      ${
          isOpen ? "hidden" : "block"
        }`}>
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className=" h-[35px] md:h-[100px] xl:h-[150px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image" className="hidden md:block"  />
                    <img src="/cars/image5ForMobile.png" alt="car Image" className="md:hidden block"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:mr-1 xl:ml-3  2xl:mr-0   flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                
               </div>
               

               
              
            )}
          
        

     {!showMore && (
      <div className="w-[70%] 2xl:w-[58%] xl:w-[62%] lg:w-[60%] md:w-[65%] float-end">
        <div className="flex  mt-[19px]  mb-20 xl:py-2 xl:px-12 w-full justify-between items-center">
          <button
            className="bg-blue-600 2xl:text-2xl text-white py-3 2xl:py-4 2xl:px-8 xl:py-3 xl:px-5 md:py-2 px-2 sm:px-6 rounded-sm  2xl:rounded-md "
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
      
    </div>
    <footer>
          <Footer/>
        </footer>
    </div>
  );
}


