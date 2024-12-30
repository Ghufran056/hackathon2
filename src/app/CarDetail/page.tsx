'use client'
import Link from "next/link"
import HeartButton from "@/components/HeartButton"
import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function CarDetail() {
  let[show, setShow] = useState(0)
  const [isOpen, setIsOpen] = useState(false);
  let[showMore, setShowMore] = useState(false);
  const [isValue, setIsValue] = useState(false);
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
                  <img src="/icons/image.svg" alt="Profile Icon" className="block md:hidden w-9 h-9 xl:w-12 xl:h-12 border border-[rgba(195,212,233,0.4)] rounded-full"/></button>
                    </div>
                   <header>  
                    <Navbar />
                     </header>
                    <div className="h-16 w-24 block md:hidden rounded bg-white absolute z-40 top-[18%] right-[3.8%]"></div>
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
        } bg-black md:bg-white md:w-48 lg:w-52 xl:w-64 2xl:w-[420px] text-white md:text-black h-full md:absolute fixed top-0  left-0 z-50 md:z-20 overflow-y-auto transition-all duration-300`}
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
        className="flex flex-col flex-1 transition-all duration-300 ml-0 md:ml-48 lg:ml-52 xl:ml-64 2xl:ml-[420px] overflow-x-hidden  bg-[#F6F7F9]"
         
      >
      <div className={`md:hidden  ${isOpen ? "block z-40 bg-black fixed opacity-20 top-0 h-full w-full": "hidden"}`}></div>
      <div className="flex-1 p-7 pt-9 xl:p-8 2xl:p-14 lg:p-6 md:p-4 w-full md:w-full lg:w-full xl:w-full  overflow-hidden sm:overflow-visible
        ">
     
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 lg:space-x-7 xl:space-x-8 2xl:space-x-14  pb-8 md:pb-4 lg:pb-6 xl:pb-8 2xl:pb-14 w-[100%] lg:w-full  md:w-full  lg:ml-0  md:mt-0">
    {/* div1 */}
    <div className="w-[100%] md:w-[50%]">
      <div className="h-[260px] md:h-[170px] lg:h-[260px] xl:h-[370px] 2xl:h-[670px]">
      {show != 2 && show != 3  && (
        <img
         src="/ads/detailcar1pic.png"
         alt="Car Picture"
         className="w-full h-full rounded-lg 2xl:rounded-2xl"
       /> 
      )
      }
      {show == 2 && (
        <img
         src="/ads/carinterior.png"
         alt="Car Picture"
         className="w-full h-full rounded-lg 2xl:rounded-2xl"
       /> 
      )
      }
      {show == 3 && (
        <img
         src="/ads/carseat.png"
         alt="Car Picture"
         className="w-full h-full rounded-lg 2xl:rounded-2xl"
       /> 
      )
      }
      </div>
    

      <div className="flex mt-4 lg:mt-4 xl:mt-6 2xl:mt-12 md:mt-2 ">
        <button className="p-2 md:p-1 lg:p-2 2xl:p-5 border-2 border-transparent hover:border-[#3563E9] rounded-lg 2xl:rounded-2xl focus:scale-[0.9]"
        onClick={() => setShow(show = 1)}
        >
          <img
            src="/ads/car.png"
            alt="Car"
            className="w-[160px] md:w-[170px] lg:w-[160px] h-[110px] md:h-[70px] lg:h-[90px] xl:h-[130px] 2xl:h-[230px] 2xl:w-[340px] rounded-lg 2xl:rounded-2xl"
          />
        </button>
        <button className="p-2 md:p-1 lg:p-2 2xl:p-5 border-2 border-transparent hover:border-[#3563E9] rounded-lg 2xl:rounded-2xl focus:scale-[0.9]
        "
        onClick={() => setShow(show = 2)}
        >
          <img
            src="/ads/carinterior.png"
            alt="Car Interior"
            className="w-[160px] md:w-[170px] lg:w-[160px] h-[110px] md:h-[70px] lg:h-[90px] xl:h-[130px] 2xl:h-[230px] 2xl:w-[340px] rounded-lg 2xl:rounded-2xl"
          />
        </button>
        <button className = "p-2 md:p-1 lg:p-2 2xl:p-5 border-2 border-transparent hover:border-[#3563E9] rounded-lg 2xl:rounded-2xl focus:scale-[0.9]"
        onClick={() => setShow(show = 3)}
        >
          <img
            src="/ads/carseat.png"
            alt="Car Seats"
            className="w-[160px] md:w-[170px] lg:w-[160px] h-[110px] md:h-[70px] lg:h-[90px] xl:h-[130px] 2xl:h-[230px] 2xl:w-[340px] rounded-lg 2xl:rounded-2xl"
          />
        </button>
      </div>
    </div>
    {/* div2 */}
    <div className="w-[100%] md:w-[50%] mt-6 md:mt-0 flex flex-col bg-white rounded-lg 2xl:rounded-2xl">
      <div className="flex justify-between items-center pt-4 px-4 md:px-3 md:pt-3 lg:pt-4 lg:px-4 xl:pt-6 xl:px-5 2xl:pt-16 2xl:px-11">
        <div className="text-[24px] md:text-lg lg:text-[24px] xl:text-[33px] 2xl:text-[66px] font-bold">Nissan GT - R</div>
        <HeartButton/>
      </div>
      <img
        src="/ads/detailcar1.png"
        alt="Car details"
        className="w-full h-[75%] 2xl:h-[70%]  rounded-lg"
      />
      
      <div className="pb-6 px-5 md:px-3 md:pb-3 lg:px-4 lg:pb-6 xl:pb-6 xl:px-5 2xl:pb-14 2xl:px-11 text-left flex justify-between items-center">
                  <div>
                  <p className="font-bold inline text-[24px] md:text-lg  lg:text-[24px] xl:text-[33px] 2xl:text-[63px]">$80.00/<span className=" text-[#90A3BF] text-sm md:text-xs lg:text-base xl:text-lg 2xl:text-[39px]">day</span></p>
                 <p className=" text-[#90A3BF] font-bold line-through text-sm md:text-xs lg:text-base xl:text-lg 2xl:text-[39px] 2xl:mt-5">$100.00</p>                
                 </div>
                 <button className="bg-blue-600 text-white px-10 py-4 md:py-1 md:px-3 lg:py-3 lg:px-6 xl:py-5 xl:px-10 2xl:py-10 2xl:px-16  rounded-md md:rounded-sm xl:rounded-md "><Link href="./Payment-Car-Rent" className="text-base md:text-xs lg:text-sm xl:text-base 2xl:text-[36px]">
                    Rent Now</Link>
                  </button>
                 
                  </div>
    </div>
  </div>

  <div className="h-auto w-full bg-white flex flex-col p-5 pb-0 2xl:p-8 2xl:pt-11 rounded-md 2xl:rounded-2xl">
  <div className="text-xl font-semibold md:text-sm lg:text-xl 2xl:text-[48px]  w-full mx-0 md:mx-1 lg:mx-4 mb-3 self-start flex">
    Reviews 
    <span className="h-6 font-normal md:h-4 lg:h-6 w-6 md:w-4 lg:w-6 ml-2 md:ml-2 lg:ml-5 text-xs md:text-xs lg:text-base 2xl:text-2xl px-5 py-2 md:px-3 md:py-2 lg:px-5 lg:py-3 2xl:px-8 2xl:py-6 font-[Plus Jakarta Sans] bg-blue-600 text-white flex items-center justify-center rounded-sm">
      13
    </span>
  </div>
    <img src="/ads/reviews.png" alt="reviews" className="hidden md:block w-full"/>
    <img src="/ads/reviews2.png" alt="reviews" className="md:hidden block w-full"/>
    {showMore && (
    <div className="w-full">
    <img src="/ads/reviews.png" alt="reviews" className="hidden md:block w-full"/>
    <img src="/ads/reviews2.png" alt="reviews" className="md:hidden block w-full"/>
    <img src="/ads/reviews.png" alt="reviews" className="hidden md:block w-full"/>
    <img src="/ads/reviews2.png" alt="reviews" className="md:hidden block w-full"/>
    <img src="/ads/reviews.png" alt="reviews" className="hidden md:block w-full"/>
    <img src="/ads/reviews2.png" alt="reviews" className="md:hidden block w-full"/>
    <img src="/ads/reviews.png" alt="reviews" className="hidden md:block w-full"/>
    <img src="/ads/reviews2.png" alt="reviews" className="md:hidden block w-full"/>
    <img src="/ads/reviews.png" alt="reviews" className="hidden md:block w-full"/>
    <img src="/ads/reviews2.png" alt="reviews" className="md:hidden block w-full"/>
      </div>
    )}
    {!showMore && (
        <div className="text-center pb-3 ml-[35%] md:ml-[38%] lg:ml-[42%] xl:ml-[45%]">
          <button
            className=" flex text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-[40px] py-2 px-6 rounded-md mt-[19px] text-[#90A3BF]"
            onClick={() => setShowMore(true)} 
          >
            Show All <span className="md:ml-3 ml-2 mt-0 md:mt-1"><img src="/icons/arrow.svg" alt="arrow" className="2xl:h-12 2xl:w-16 pb-5"/></span>
          </button>
          
        </div>
      )}
      </div>
     
      </div>
      {/* Popular Cars Section */}
      <div className="mb-7  lg:mb-0 md:mb-5">

{/* for laptop */}
<div className="flex justify-between px-7 md:px-4 2xl:px-14 lg:px-7 xl:px-8 mb-5 lg:mb-0">
<h2 className="md:text-lg lg:text-xl text-base 2xl:text-[29px]  text-[#90A3BF]"> Recent Cars</h2>
<div>
<span className="hidden sm:block"> <button
className="px-4 text-[#3563E9] md:text-lg lg:text-xl text-xl 2xl:text-[29px]"
><Link href="./Category-Car-Rent" className="font-semibold">View Link</Link> 
</button></span></div>

{/* for Mobile */}
<span className="block sm:hidden"> <button
className="px-4 text-[#3563E9] text-base font-medium"
><Link href="./Category-Car-Rent" className="font-semibold">View Link</Link> 
</button></span>
</div>

<div className="grid grid-cols-3 pl-7  md:px-4 2xl:p-14 lg:p-7 xl:p-8 overflow-x-scroll md:overflow-visible md:grid-cols-2 lg:grid-cols-3 lg:gap-5 2xl:gap-14 gap-6 md:gap-4 xl:gap-7">
            <div className="border rounded-lg w-[260px] md:w-auto 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left  ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px]  font-bold  mt-2 lg:mt-0 xl:mt-2">Koenigsegg</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-6 lg:ml-0 xl:ml-3">Sports</div>
                    
                  <div className=" h-[100px] md:h-[100px] xl:h-[170px] 2xl:h-[360px]  mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image1.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 lg:ml-0 lg:mr-0 xl:xl:mr-1 xl:ml-3 2xl:mr-0  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl  inline">$99.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-6 py-2 px-3 rounded-sm 2xl:rounded-md  ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg ml-36 md:ml-0 w-[260px] md:w-auto  2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold  mt-2 lg:mt-0 xl:mt-2">Nissan GT - R</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-6 lg:ml-0 xl:ml-3">Sports</div>
                    
                  <div className=" h-[100px] md:h-[100px] xl:h-[170px] 2xl:h-[360px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image2.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left ml-5 lg:ml-0 lg:mr-0 xl:xl:mr-1 xl:ml-3 2xl:mr-0  flex justify-between items-center">
                    <div>
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <p className="text-sm text-[#90A3BF] 2xl:text-[26px] xl:text-md  font-bold line-through ">$100.00</p>
                  </div>
                 <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-6 py-2 px-3 rounded-sm 2xl:rounded-md "><Link href="./CarDetail">
                    Rent Now</Link>
                  </button>
                  
                  </div>
                </div>



      <div
        className="border lg:block ml-72 md:ml-0 w-[260px] md:w-auto rounded-lg 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white md:hidden">
                    <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                     <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 lg:mt-0 xl:mt-2">Rolls - Royce</div>
                     <HeartButton/>
                    </div>
                    <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-6 lg:ml-0 xl:ml-3">Sports</div>
                      
                    <div className=" h-[100px] md:h-[100px] xl:h-[170px] 2xl:h-[360px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                      {/* Image Placeholder */}
                      <img src="/cars/image.png" alt="car Image"  />
                    </div>
                    <div className="mt-[4.3rem] text-left ml-5 lg:ml-0 lg:mr-0 xl:xl:mr-1 xl:ml-3 2xl:mr-0  flex justify-between items-center">
                    <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$96.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]  ">day</span></p>
                    <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-6 py-2 px-3 rounded-sm 2xl:rounded-md ">
                      Rent Now
                    </button>
                    </div>
        </div>
      </div>
      </div>

 {/* Recommendation Cars Section */}
        <div>
         {/* for laptop */}
<div className="flex justify-between px-7 md:px-4 2xl:px-14 lg:px-7 xl:px-8  mb-5 md:mb-0">
<h2 className="md:text-lg lg:text-xl text-base 2xl:text-[29px]  text-[#90A3BF]"> Recommendation Cars</h2>
<div>
<span className="hidden sm:block"> <button
className="px-4 text-[#3563E9] md:text-lg lg:text-xl text-xl 2xl:text-[29px]"
><Link href="./Category-Car-Rent" className="font-semibold" >View Link</Link> 
</button></span></div>

{/* for Mobile */}
<span className="block sm:hidden"> <button
className="px-4 text-[#3563E9]  text-base font-medium"
><Link href="./Category-Car-Rent" className="font-semibold">View Link</Link> 
</button></span>
</div>
          <div className="grid pl-7 mb-7 md:p-4 2xl:p-14 lg:p-7 xl:p-8 grid-cols-3 overflow-x-scroll md:overflow-visible lg:gap-5 gap-6 md:gap-4 xl:gap-8 2xl:gap-14 lg:grid-cols-3 md:grid-cols-2">
               <div
                   className="border rounded-lg w-[260px] md:w-auto 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                 >
                   <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                    <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">All New Rush</div>
                    <HeartButton/>
                   </div>
                   <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3 ">SUV</div>
                     
                   <div className=" h-[100px] xl:h-[170px] 2xl:h-[360px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                     {/* Image Placeholder */}
                     <img src="/cars/image8.png" alt="car Image"/>
                   </div>
                   <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:xl:mr-1 xl:ml-3 2xl:mr-0  flex justify-between items-center">
                     <div>
                   <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$72.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]">day</span></p>
                   <p className="text-sm text-[#90A3BF] font-bold 2xl:text-[26px] xl:text-md  line-through ">$100.00</p>
                   </div>
                   <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-6 py-2 px-3 rounded-sm 2xl:rounded-md ">
                     Rent Now
                   </button>
                   </div>
                 </div>

                <div
                  className="border rounded-lg ml-36 md:ml-0 w-[260px] md:w-auto 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                  <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className="h-[100px] xl:h-[170px] 2xl:h-[360px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image" />
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:xl:mr-1 xl:ml-3 2xl:mr-0  flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF]  ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-6 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg ml-72 md:ml-0  w-[260px] md:w-auto 2xl:rounded-2xl p-4 2xl:p-9 shadow-md text-center bg-white"
                >
                 <div className="text-left mx-1 md:ml-6 lg:ml-0 xl:ml-3 flex justify-between">
                   <div className="text-lg xl:text-xl 2xl:text-[32px] font-bold mt-2 ">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] 2xl:text-2xl xl:text-md text-left font-bold relative mt-[-0.5rem] ml-1 md:ml-6 lg:ml-0 xl:ml-3">SUV</div>
                    
                  <div className="h-[100px] xl:h-[170px] 2xl:h-[360px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image"/>
                  </div>
                  <div className="mt-[4.3rem] text-left mx-1 md:ml-5 lg:ml-0 lg:mr-0 xl:xl:mr-1 xl:ml-3 2xl:mr-0   flex justify-between items-center">
                  <p className="font-bold 2xl:text-[32px] xl:text-xl inline">$80.00/<span className="text-sm 2xl:text-[26px] xl:text-md  text-[#90A3BF] ">day</span></p>
                  <button className="bg-blue-600 2xl:text-2xl text-white 2xl:py-4 2xl:px-8 xl:py-3 xl:px-6 py-2 px-3 rounded-sm 2xl:rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>
                </div>
                </div>

      
      </div>
    </div>
   <Footer/>
   </div>
)
}