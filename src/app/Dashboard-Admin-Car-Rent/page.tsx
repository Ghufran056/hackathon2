'use client'
import { useState } from "react"
import Navbar from "@/components/Navbar"
import "./Dashboard-Admin-Car-Rent.css"
export default function AdminCarRent() {
     const [isOpen, setIsOpen] = useState(false);
      // Toggle the sidebar
      const toggleSidebar = () => {
        setIsOpen(!isOpen);
      };
    return(
        <div>
            {/* for mobile */}
                          <div className="sm:hidden bg-white  w-full  py-6">
                            <div className="flex justify-between mx-6 pt-3 mb-3">
                           <button className="h-9 w-9 " onClick={toggleSidebar}><img src="./icons/lines.svg" className="h-full w-full" alt="" /></button>
                           <button>
                           <img
                            src="/icons/image.svg"
                           alt="Profile Icon"
                            className="block md:hidden w-9 h-9 xl:w-12 xl:h-12 border border-[rgba(195,212,233,0.4)] rounded-full"
                            /></button>
                            <div className="h-[70px] w-24 block md:hidden rounded bg-white absolute z-40 top-[14.8%] right-[3.8%]"></div>
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
                    } bg-black md:bg-white md:w-48 lg:w-56 xl:w-64 2xl:w-[400px] text-white md:text-black h-full md:absolute fixed top-0  left-0 z-50 md:z-20 overflow-y-auto transition-all duration-300`}
                  >
                    <button className="text-[#555] block md:hidden absolute right-3 font-bold text-[28px] hover:text-[#e74c3c] transition-colors duration-300 ease-in-out" onClick={() => {
                      setIsOpen(!isOpen)
                    }}>&times;</button>
                  <div className="2xl:p-6 xl:p-4 lg:p-3 p-2 md:p-2 xl:pl-3">
                    <h2 className="text-sm lg:text-sm xl:text-base 2xl:text-2xl md:text-[10px] text-[#94A7CB66] opacity-40 2xl:p-5 xl:p-3 md:px-2 md:py-1 mt-4 p-2 pt-4">MAIN MENU</h2>
                    <button className="flex space-x-3 2xl:p-5 p-3  w-full bg-[#3563E9] rounded-lg 2xl:rounded-xl">
                     <img src="/icons/home.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8"/>
                     <p className="text-white md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Dashboard</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-2 p-2">
                      <img src="/icons/car.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Car Rent</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-2 p-2">
                      <img src="/icons/insight.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Insight</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-2 p-2">
                      <img src="/icons/wallet.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Reimburse</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-2 p-2">
                      <img src="/icons/message.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Inbox</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-2 p-2">
                      <img src="/icons/calender.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Calender</p>
                      </button>
            
                      <h2 className="text-sm lg:text-sm md:text-[10px] text-[#94A7CB66] xl:text-base 2xl:text-2xl opacity-40 2xl:p-5 xl:p-3 md:px-2 md:py-1 p-2 mt-5 md:mt-3 lg:mt-5">PREFERENCE</h2>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-2 p-2">
                      <img src="/icons/settings.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Settings</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-2 p-2 xl:pt-4">
                      <img src="/icons/infoCircle.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl lg:mt-0">Help & Center</p>
                      </button>
                      
                       <button className="flex w-full 2xl:p-5  justify-between xl:p-3 md:p-2 p-2">
                      <div className="flex space-x-3 lg:space-x-2 xl:space-x-3 ">
                      <img src="/icons/briefcase.svg" alt="logo" className="md:h-4 md:w-4 lg:h-auto lg:w-auto 2xl:h-8 2xl:w-8 "/>
                      <p className="text-[#90A3BF] mt-2 md:mt-0 lg:mt-2 md:text-[11px] lg:text-sm xl:text-base 2xl:text-2xl">Dark Mode</p>
                      </div>
                      <img src="/icons/button.svg" alt="" className="md:h-5 md:w-12 lg:h-auto lg:w-auto 2xl:h-12 2xl:w-28"/>
                      </button>
                
                  </div>
                </div> 
      


                <div
        className="flex flex-col flex-1 transition-all duration-300 ml-0 md:ml-48 lg:ml-56 xl:ml-64 2xl:ml-[400px] overflow-x-hidden  bg-[#F6F7F9]"
         
      >
      <div className={`md:hidden  ${isOpen ? "block z-40 bg-black fixed opacity-20 top-0 h-full w-full": "hidden"}`}></div>
      <div className="flex-1 p-5  2xl:p-12 xl:p-7 lg:p-4 md:p-3 w-full md:w-full lg:w-full xl:w-full  overflow-hidden sm:overflow-visible
        ">
     {/* content here */}
     <div className="flex flex-col md:flex-row 2xl:space-x-10  xl:space-x-5 lg:space-x-4 md:space-x-3 ">
        <div className="md:w-[50%] w-full p-4  sm:p-3 lg:p-4 xl:p-5 2xl:p-10 bg-white rounded-lg">
          <h2 className="font-bold text-xl md:text-sm lg:text-lg 2xl:text-3xl">Details Rental</h2>
          <img src="/icons/map.png" alt="map" className="lg:mt-4  mt-5 h-72 object-cover md:h-40 lg:h-52 xl:h-72 2xl:h-[500px] md:mt-3 w-full rounded-lg"/>
          <div className="flex 2xl:mt-14  xl:mt-7 lg:mt-6 md:mt-4 mt-7">
            <img src="/ads/car.png" alt="car" className="2xl:h-36 2xl:w-72 xl:h-20 xl:w-44 lg:h-16 lg:w-40 md:h-14 md:w-36 h-20 w-60 rounded-lg 2xl:rounded-xl"/>
           <div className="ml-4 md:ml-2 lg:ml-4 flex justify-between w-full"> 
            <div className="w-full">
            <h3 className="flex flex-col justify-between font-bold 2xl:text-4xl xl:text-lg lg:text-base md:text-xs text-[24px]">Nissan GT - R</h3>
           <div className="flex justify-between w-full">
           <p className="text-[#3D5278] xl:text-sm lg:text-xs md:text-[10px] text-sm 2xl:text-2xl ">Sport Car</p>
           <p className="text-[#3D5278]  block md:hidden text-sm">#9761</p>
           </div>
           </div>
           <p className="text-[#3D5278] hidden md:block lg:mt-1 2xl:text-2xl xl:text-sm lg:text-xs md:text-[10px] text-sm">#9761</p>
           </div>
            </div>

            <div className="pb-7 md:pb-4 lg:pb-6 xl:pb-8 2xl:pb-16 border-b-2 border-[#C3D4E966] border-opacity-40 ">
                <div>
                <div className="flex w-full my-7 md:my-1 lg:my-3 2xl:my-12">
              <div className="h-6 w-6 md:h-4 md:w-4 xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 rounded-full bg-[rgba(53,99,233,0.3)]  mr-2 mt-3 flex justify-center items-center">
               <div className="h-3 w-3 md:h-2 md:w-2 xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 bg-[rgba(53,99,233,1)] rounded-full"></div>
               </div>
               <h1 className="text-2xl md:text-xs lg:text-[16px] xl:text-[18px] 2xl:text-3xl font-semibold md:font-bold mt-2 md:mt-3 xl:mt-4 2xl:mt-3">Pick-Up</h1>
              </div>
              <div className="grid grid-cols-1 gap-6 md:gap-0 md:flex md:justify-between">
                <div className="md:w-[35%] md:border-r-2 border-[#C3D4E966] border-opacity-40  md:pr-1 lg:pr-2 xl:pr-2 2xl:pr-7"> 
                 <label htmlFor="location" className="font-bold text-base md:text-xs lg:text-base 2xl:text-3xl">Locations</label>  
                 <div className="w-full bg-gray-50 md:bg-white rounded-lg md:rounded-none mt-2 pr-8 md:mt-0 md:py-0 md:px-0">
                  <select name="location" id="location" className="text-[#90A3BF] w-full text-base md:text-xs lg:text-base 2xl:text-3xl bg-gray-50 md:bg-white rounded-lg md:rounded-none py-7 px-8 mt-1  md:mt-0 md:py-0 md:px-0">
                    <option value="" disabled selected>Kota Semarang</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="quetta">quetta</option>
                  </select>
                  </div>
                </div>
                <div className="md:w-[35%] md:border-r-2 border-[#C3D4E966] border-opacity-40  md:pl-1 md:pr-2 lg:pl-2 lg:pr-3 xl:pl-3 xl:pr-6 2xl:pl-6 2xl:pr-7"> 
                  <label htmlFor="date" className="font-bold text-base md:text-xs lg:text-base 2xl:text-3xl">Date</label>
                  <input type="date" id="date" className="text-[#90A3BF] text-base md:text-xs lg:text-base 2xl:text-3xl w-full bg-gray-50 md:bg-white rounded-lg md:rounded-none py-7 px-8 mt-2 md:mt-0 md:py-0 md:px-0"/>
                </div>
                <div className="md:w-[28%] md:pl-3"> 
                  <label htmlFor="time" className="font-bold text-base md:text-xs lg:text-base 2xl:text-3xl">Time</label>
                  <input type="time" id="time" className="text-[#90A3BF] text-base md:text-xs lg:text-base 2xl:text-3xl w-full bg-gray-50 md:bg-white rounded-lg md:rounded-none py-7 px-8 mt-2 md:mt-0 md:py-0 md:px-0"/>
                </div>
                </div>
                </div>

                <div>
                <div className="flex w-full my-6 md:my-1 lg:my-3 2xl:my-12">
              <div className="h-6 w-6 md:h-4 md:w-4   xl:h-6 xl:w-6 2xl:h-8 2xl:w-8 rounded-full bg-[rgba(92,175,252,0.3)]  mr-2 mt-3 flex justify-center items-center">
               <div className="h-3 w-3 md:h-2 md:w-2  xl:h-3 xl:w-3 2xl:h-4 2xl:w-4 bg-[#54A6FF] rounded-full"></div>
               </div>
               <h1 className="text-2xl md:text-xs lg:text-[16px] xl:text-[18px] 2xl:text-3xl font-semibold md:font-bold mt-2 md:mt-3 xl:mt-4 2xl:mt-3">Drop-Off</h1>
              </div>
              <div className="grid grid-cols-1 gap-6 md:gap-0 md:flex md:justify-between">
                <div className="md:w-[35%] md:border-r-2 border-[#C3D4E966] border-opacity-40  md:pr-1 lg:pr-2 xl:pr-2 2xl:pr-7"> 
                 <label htmlFor="location2" className="font-bold text-base md:text-xs lg:text-base 2xl:text-3xl">Locations</label>  
                 <div className="w-full bg-gray-50 md:bg-white rounded-lg md:rounded-none mt-2 pr-8 md:mt-0 md:py-0 md:px-0">
                  <select name="location2" id="location2" className="text-[#90A3BF] w-full text-base md:text-xs lg:text-base 2xl:text-3xl bg-gray-50 md:bg-white rounded-lg md:rounded-none py-7 px-8 mt-1  md:mt-0 md:py-0 md:px-0">
                    <option value="" disabled selected>Kota Semarang</option>
                    <option value="Karachi">Karachi</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Islamabad">Islamabad</option>
                    <option value="Peshawar">Peshawar</option>
                    <option value="quetta">quetta</option>
                  </select>
                  </div>
                </div>
                <div className="md:w-[35%] md:border-r-2 border-[#C3D4E966] border-opacity-40  md:pl-1 md:pr-2 lg:pl-2 lg:pr-3 xl:pl-3 xl:pr-6 2xl:pl-6 2xl:pr-7"> 
                  <label htmlFor="date2" className="font-bold text-base md:text-xs lg:text-base 2xl:text-3xl">Date</label>
                  <input type="date" id="date2" className="text-[#90A3BF] text-base md:text-xs lg:text-base 2xl:text-3xl w-full bg-gray-50 md:bg-white rounded-lg md:rounded-none py-7 px-8 mt-2 md:mt-0 md:py-0 md:px-0"/>
                </div>
                <div className="md:w-[28%] md:pl-3"> 
                  <label htmlFor="time2" className="font-bold text-base md:text-xs lg:text-base 2xl:text-3xl">Time</label>
                  <input type="time" id="time2" className="text-[#90A3BF] text-base md:text-xs lg:text-base 2xl:text-3xl w-full bg-gray-50 md:bg-white rounded-lg md:rounded-none py-7 px-8 mt-2 md:mt-0 md:py-0 md:px-0"/>
                </div>
                </div>
                </div>
            </div>
            
            <div className="flex justify-between pt-8 md:pt-4 lg:pt-6 xl:pt-8 2xl:pt-14 2xl:pb-3">
                <div>
                  <div>
                <p className="font-semibold text-xl md:text-sm lg:text-base 2xl:text-3xl">Total Rental Price</p>
                <p className="text-[#90A3BF] hidden lg:block xl:text-sm 2xl:text-2xl">Overall price and includes rental discount</p>
                <p className="text-[#90A3BF] lg:hidden block mt-1 text-sm md:text-[10px] md:mt-0">Overall price rental</p>
                </div>
                </div>
                <p className=" font-semibold 2xl:text-6xl xl:text-3xl lg:text-2xl md:text-base text-2xl">$80.00</p>
            </div>
          </div>
        <div className="md:w-[50%] w-full mt-8 md:mt-0">
          <div className="bg-white p-4 md:px-2 md:py-4 lg:p-4 xl:p-5 2xl:p-12 rounded-lg">
            <div className="flex justify-between">
          <h2 className="font-bold text-xl md:text-sm lg:text-lg 2xl:text-3xl">Top 5 Car Rental</h2>
          <img src="/icons/dots.svg" alt="" className="2xl:h-9 2xl:w-12"/>
          </div>
          <div className="flex flex-col items-center md:flex-row md:justify-between mt-6 2xl:mt-12 lg:mt-6 md:mt-2">
          <img src="/icons/chart.png" alt="chart" className="md:h-28  md:w-28 lg:h-36 lg:w-36 xl:h-52 xl:w-52 2xl:h-96 2xl:w-96 h-56 w-56 "/>
           <div className="md:w-[50%] lg:w-[52%] xl:w-[47%] 2xl:w-[50%] mt-6 md:mt-0 gap-4 md:gap-0 lg:gap-3 xl:gap-5 2xl:gap-10 w-full flex flex-col justify-between ">
            {/* sports car */}
            <div className="flex justify-between ">
            <div className="flex gap-2">
              <div className="h-3 w-3 md:h-2 md:w-2 lg:h-3 lg:w-3 2xl:h-5 2xl:w-5 rounded-full bg-[#0D3559] mt-[5px] md:mt-[7px] lg:mt-[5px]"></div>
              <p  className="text-[#90A3BF] text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">Sport Car</p>
            </div>
            <h3 className="font-bold text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">17,439</h3>
            </div>
           {/* SUV */}
           <div className="flex justify-between ">
            <div className="flex gap-2">
              <div className="h-3 w-3 md:h-2 md:w-2 lg:h-3 lg:w-3 2xl:h-5 2xl:w-5 rounded-full bg-[#175D9C] mt-[5px] md:mt-[7px] lg:mt-[5px]"></div>
              <p  className="text-[#90A3BF] text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">SUV</p>
            </div>
            <h3 className="font-bold text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">9,478</h3>
            </div>
            {/* Coupe */}
            <div className="flex justify-between ">
            <div className="flex gap-2">
              <div className="h-3 w-3 md:h-2 md:w-2 lg:h-3 lg:w-3 2xl:h-5 2xl:w-5 rounded-full bg-[#2185DE] mt-[5px] md:mt-[7px] lg:mt-[5px]"></div>
              <p  className="text-[#90A3BF] text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">Coupe</p>
            </div>
            <h3 className="font-bold text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">18,197</h3>
            </div>
            {/* Hatchback */}
            <div className="flex justify-between ">
            <div className="flex gap-2">
              <div className="h-3 w-3 md:h-2 md:w-2 lg:h-3 lg:w-3 2xl:h-5 2xl:w-5 rounded-full bg-[#63A9E8] mt-[5px] md:mt-[7px] lg:mt-[5px]"></div>
              <p  className="text-[#90A3BF] text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">Hatchback</p>
            </div>
            <h3 className="font-bold text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">12,510</h3>
            </div>
            {/* MPV */}
            <div className="flex justify-between ">
            <div className="flex gap-2">
              <div className="h-3 w-3 md:h-2 md:w-2 lg:h-3 lg:w-3 2xl:h-5 2xl:w-5  rounded-full bg-[#A6CEF2] mt-[5px] md:mt-[7px] lg:mt-[5px]"></div>
              <p  className="text-[#90A3BF] text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">MPV</p>
            </div>
            <h3 className="font-bold text-base md:text-[10px] lg:text-sm xl:text-base 2xl:text-2xl">14,406</h3>
            </div>
            </div>
          </div>
          </div>
          <div className=" 2xl:p-14 2xl:pb-4 2xl:mt-12 xl:mt-6 lg:mt-4 md:mt-3 mt-8 bg-white p-4 md:p-3 lg:p-4 xl:p-5 rounded-lg">
            <div className="flex justify-between">
          <h2 className="font-bold text-xl md:text-sm lg:text-lg 2xl:text-3xl">Recent Transaction</h2>
          <button className="text-[#3563E9]  2xl:text-2xl xl:text-sm sm:text-[10px] text-sm">View all</button>
          </div>
          {/* car1 */}
          <div className="flex items-center justify-between mt-4">
            <div className="flex  2xl:gap-10 xl:gap-5 lg:gap-2 gap-5 md:gap-2">
            <img src="/cars/car1.png" alt="car picture" className="2xl:h-[183px] 2xl:w-48 xl:h-24 xl:w-32 lg:h-[85px] lg:w-28 md:h-[70px] md:w-20 h-24 w-28 car-detail object-contain"/>
            <div className="flex flex-col justify-center lg:gap-2 md:gap-0 gap-2">
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">Nissan GT - R</h3>
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-sm text-[#90A3BF]">Sport Car</p>
            </div>
            </div>
            <div className="flex flex-col lg:gap-2 md:gap-0 gap-2">
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-sm text-[#90A3BF] text-right">20 July</p>
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">$80.00</h3>
            </div>
          </div>
          {/* car2 */}
          <div className="flex items-center justify-between border-t-[1.7px] border-[#C3D4E966] border-opacity-40">
            <div className="flex 2xl:gap-10 xl:gap-5 lg:gap-2 gap-5 md:gap-2">
            <img src="/cars/car2.png" alt="car picture" className="2xl:h-[183px] 2xl:w-48 xl:h-[100px] xl:w-32 lg:h-[85px] lg:w-28 md:h-[70px] md:w-20 h-24 w-28 car-detail object-contain"/>
            <div className="flex flex-col justify-center lg:gap-2 md:gap-0 gap-2">
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">Koegnigsegg</h3>
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-xs text-[#90A3BF]">Sport Car</p>
            </div>
            </div>
            <div className="flex flex-col lg:gap-2 md:gap-0 gap-2">
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-sm text-[#90A3BF] text-right">19 July</p>
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">$99.00</h3>
            </div>
          </div>
          {/* car3 */}
          <div className="flex items-center justify-between border-t-[1.7px] border-[#C3D4E966] border-opacity-40">
            <div className="flex 2xl:gap-10 xl:gap-5 lg:gap-2 gap-5 md:gap-2">
            <img src="/cars/car3.png" alt="car picture" className="2xl:h-[183px] 2xl:w-48 xl:h-[100px] xl:w-32 lg:h-[85px] lg:w-28 md:h-[70px] md:w-20 h-24 w-28 car-detail object-contain"/>
            <div className="flex flex-col justify-center lg:gap-2 md:gap-0 gap-2">
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">Rolls - Royce</h3>
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-xs text-[#90A3BF] ">Sport Car</p>
            </div>
            </div>
            <div className="flex flex-col lg:gap-2 md:gap-0 gap-2">
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-sm text-[#90A3BF] text-right">18 July</p>
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">$96.00</h3>
            </div>
          </div>
          {/* car4 */}
          <div className="flex items-center justify-between border-t-[1.7px] border-[#C3D4E966] border-opacity-40">
            <div className="flex 2xl:gap-10 xl:gap-5 lg:gap-2 gap-5 md:gap-2">
            <img src="/cars/car4.png" alt="car picture" className="2xl:h-[183px] 2xl:w-48 xl:h-[100px] xl:w-32 lg:h-[85px] lg:w-28 md:h-[70px] md:w-20 h-24 w-28 car-detail object-contain"/>
            <div className="flex flex-col justify-center lg:gap-2 md:gap-0 gap-2">
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">CR - V</h3>
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-xs text-[#90A3BF]">SUV</p>
            </div>
            </div>
            <div className="flex flex-col lg:gap-2 md:gap-0 gap-2">
              <p className="2xl:text-xl xl:text-sm sm:text-[10px] text-xs  text-[#90A3BF] text-right">17 July</p>
              <h3 className="car-name font-bold text-base sm:text-xs xl:text-base 2xl:text-2xl">$80.00</h3>
            </div>
          </div>
          </div>
        </div>
     </div>
       </div>
      </div>

            
        </div>
        </div>
    )}