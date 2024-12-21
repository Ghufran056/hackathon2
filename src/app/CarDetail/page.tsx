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
        } bg-black md:bg-white md:w-56 lg:w-60 xl:w-72 2xl:w-96 text-white md:text-black h-full md:absolute fixed top-0  left-0 z-50 md:z-20 overflow-y-auto transition-all duration-300`}
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
        className="flex flex-col flex-1 transition-all duration-300 ml-0 sm:ml-56 lg:ml-60 xl:ml-72 2xl:ml-96 overflow-x-hidden  bg-[#F6F7F9]"
         
      >
      <div className={`md:hidden  ${isOpen ? "block z-40 bg-black fixed opacity-20 top-0 h-full w-full": "hidden"}`}></div>
      <div className="flex-1 p-5 xl:p-8 lg:p-6 md:p-4 w-[425px] md:w-full lg:w-full xl:w-full  overflow-hidden sm:overflow-visible
        ">
     
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-4 lg:space-x-7 pb-8 md:pb-4 lg:pb-6 w-[100%] lg:w-full  md:w-full  lg:ml-0  md:mt-0">
    {/* div1 */}
    <div className="w-[100%] md:w-[50%]">
      <div className="h-[260px] md:h-[170px] lg:h-[260px] xl:h-[370px] 2xl:h-[670px]">
      {show != 2 && show != 3  && (
        <img
         src="/ads/detailcar1pic.png"
         alt="Car Picture"
         className="w-full h-full rounded-lg"
       /> 
      )
      }
      {show == 2 && (
        <img
         src="/ads/carinterior.png"
         alt="Car Picture"
         className="w-full h-full rounded-lg"
       /> 
      )
      }
      {show == 3 && (
        <img
         src="/ads/carseat.png"
         alt="Car Picture"
         className="w-full h-full rounded-lg"
       /> 
      )
      }
      </div>
    

      <div className="flex mt-4 lg:mt-4 md:mt-2 ">
        <button className="p-2 md:p-1 lg:p-2 border-2 border-transparent hover:border-[#3563E9] rounded-lg focus:scale-[0.9]"
        onClick={() => setShow(show = 1)}
        >
          <img
            src="/ads/car.png"
            alt="Car"
            className="w-[160px] md:w-[170px] lg:w-[160px] h-[110px] md:h-[70px] lg:h-[110px] xl:h-[130px] 2xl:h-[230px] 2xl:w-[340px] rounded-lg"
          />
        </button>
        <button className="p-2 md:p-1 lg:p-2 border-2 border-transparent hover:border-[#3563E9] rounded-lg focus:scale-[0.9]
        "
        onClick={() => setShow(show = 2)}
        >
          <img
            src="/ads/carinterior.png"
            alt="Car Interior"
            className="w-[160px] md:w-[170px] lg:w-[160px] h-[110px] md:h-[70px] lg:h-[110px] xl:h-[130px] 2xl:h-[230px] 2xl:w-[340px] rounded-lg"
          />
        </button>
        <button className = "p-2 md:p-1 lg:p-2 border-2 border-transparent hover:border-[#3563E9] rounded-lg focus:scale-[0.9]"
        onClick={() => setShow(show = 3)}
        >
          <img
            src="/ads/carseat.png"
            alt="Car Seats"
            className="w-[160px] md:w-[170px] lg:w-[160px] h-[110px] md:h-[70px] lg:h-[110px] xl:h-[130px] 2xl:h-[230px] 2xl:w-[340px] rounded-lg"
          />
        </button>
      </div>
    </div>
    {/* div2 */}
    <div className="w-[100%] md:w-[50%] ml-0 flex flex-col bg-white">
      <img
        src="/ads/detailcar1.png"
        alt="Car details"
        className="w-full h-[70%]  rounded-lg"
      />
      
      <div className="h-[30%] mb-4 sm:mb-0 mt-0 sm:mt-5 text-left lg:lg:ml-4 xl:ml-5 ml-5 md:ml-2 2xl:ml-16">
                  <p className="font-bold inline text-lg md:text-base lg:text-xl xl:text-[23px] 2xl:text-[50px]">$80.00/<span className="text-xs lg:text-base 2xl:text-3xl text-[#90A3BF] mr-32  md:mr-10 lg:mr-16 xl:mr-32 2xl:mr-80">days</span></p>
                 <button className="bg-blue-600 text-white px-3 py-2 md:py-1 md:px-4 lg:py-2 lg:px-6 xl:py-3 xl:px-10 2xl:px-16 2xl:py-7 rounded-sm lg:rounded-md "><Link href="./Payment-Car-Rent" className="md:text-xs lg:text-base 2xl:text-[35px]">
                    Rent Now</Link>
                  </button>
                  <p className="2xl:text-3xl lg:text-base text-xs text-[#90A3BF] font-bold line-through mt-[-0.5rem]">$100.00</p>
                  </div>
    </div>
  </div>

  <div className="h-auto w-full bg-white flex flex-col p-5">
  <div className="text-xs font-semibold md:text-sm lg:text-xl 2xl:text-[45px] w-full mx-0 md:mx-1 lg:mx-6 mb-3 self-start flex">
    Reviews 
    <span className="h-3 font-normal md:h-4 lg:h-6 w-3 md:w-4 lg:w-6 ml-2 md:ml-2 lg:ml-5 text-xs md:text-xs lg:text-base 2xl:text-3xl px-3 py-2 md:px-3 md:py-2 lg:px-5 lg:py-3 2xl:px-7 2xl:py-5 font-[Plus Jakarta Sans] bg-blue-600 text-white flex items-center justify-center rounded-sm">
      13
    </span>
  </div>
    <img src="/ads/reviews.png" alt="reviews"/>
    {showMore && (
      <div className="w-full">
      <img src="/ads/reviews.png" alt="reviews" className="w-full" />
      <img src="/ads/reviews.png" alt="reviews" className="w-full"/>
      <img src="/ads/reviews.png" alt="reviews" className="w-full"/>
      <img src="/ads/reviews.png" alt="reviews" className="w-full"/>
      <img src="/ads/reviews.png" alt="reviews" className="w-full"/>
      </div>
    )}
    {!showMore && (
        <div className="text-center pb-3 ml-[35%] md:ml-[38%] lg:ml-[42%] xl:ml-[45%]">
          <button
            className=" flex text-xs md:text-sm lg:text-base 2xl:text-[40px] py-2 px-6 rounded-md mt-[19px] text-[#90A3BF]"
            onClick={() => setShowMore(true)} 
          >
            Show All <span className="md:ml-3 ml-2 mt-0 md:mt-1"><img src="/icons/arrow.svg" alt="arrow" className="2xl:h-12 2xl:w-16 pb-5"/></span>
          </button>
          
        </div>
      )}
      </div>
     

      {/* Popular Cars Section */}
      <div className="mb-9  lg:mb-9 md:mb-6">

{/* for laptop */}
<div className="flex gap-x-[23%] md:gap-x-[55%] lg:gap-x-[66%] xl:gap-x-[73%] mt-5 mb-5 md:mb-4 md:mt-5 lg:mb-7 lg:mt-7">
<h2 className={`md:text-lg lg:text-xl text-base  text-[#90A3BF] ${
isOpen ? "hidden" : "block"
} ${
isValue ? "hidden" : "block"
}`}> Recent Cars</h2>
{ !isOpen && (<div>
<span className="hidden sm:block"> <button
onClick={toggleSidebar}
className="px-4 text-[#3563E9] md:text-lg lg:text-xl text-xl"
><Link href="./Category-Car-Rent">View Link</Link> 
</button></span></div>)}

{/* for Mobile */}
<span className={`flex sm:hidden ${
isValue ? "hidden" : "block"
}`}> <button
onClick={() => {
  setIsValue(!isValue)}}
className="px-4 text-[#3563E9] text-base font-medium"
>View Link
</button></span>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-5 gap-6 md:gap-4 xl:gap-6">
  <div
        className="border rounded-lg p-4 shadow-md text-center bg-white"
      >
        <div className="text-left ml-6 flex">
         <div className="text-lg font-bold mt-2 mr-[11rem] md:mr-[2.5rem] lg:mr-[2.5rem] xl:mr-[5.7rem] 2xl:mr-[25rem]">Koenigsegg</div>
         <HeartButton/>
        </div>
        <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
          
        <div className="h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px]  mb-4 mt-14 sm:mt-11 flex items-center justify-center">
          {/* Image Placeholder */}
          <img src="/cars/image1.png" alt="car Image"  />
        </div>
        <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left  lg:ml-2 xl:ml-5 ml-5 md:ml-2 2xl:ml-12">
          <p className="font-bold inline text-lg md:text-base">$99.00/<span className="text-sm text-[#90A3BF]  mr-20 md:mr-5 lg:mr-2 xl:mr-11 2xl:mr-36">day</span></p>
          <button className="bg-blue-600 text-white  px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-2 xl:py-2 xl:px-3 rounded-md ">
            Rent Now
          </button>
          </div>
      </div>

      <div
        className="border rounded-lg p-4 shadow-md text-center bg-white"
      >
        <div className="text-left ml-6 flex">
         <div className="text-lg font-bold mt-2 mr-[10rem] md:mr-[1.5rem] lg:mr-[0.7rem] xl:mr-[4rem] 2xl:mr-[25rem]">Nissan GT - R</div>
         <HeartButton/>
        </div>
        <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
          
        <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
          {/* Image Placeholder */}
          <img src="/cars/image2.png" alt="car Image"  />
        </div>
        <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem]  text-left lg:lg:ml-2 xl:ml-5 ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline text-lg md:text-base">$80.00/<span className="text-sm text-[#90A3BF]  mr-20 md:mr-5 lg:mr-2 xl:mr-11 2xl:mr-36">day</span></p>
                 <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-2 xl:py-2 xl:px-3 rounded-md "><Link href="./CarDetail">
                    Rent Now</Link>
                  </button>
                  <p className="text-sm text-[#90A3BF] font-bold line-through mt-[-0.5rem]">$100.00</p>
                  </div>
      </div>



      <div
        className={`border lg:block rounded-lg p-4 shadow-md text-center bg-white md:hidden"
        ${
          isOpen ? "block" : "hidden"
        }`}>
        <div className="text-left ml-6 flex">
         <div className="text-lg font-bold mt-2 mr-[3.6rem] lg:mr-[1rem] xl:mr-[4.2rem] 2xl:mr-[25rem]">Rolls - Royce</div>
         <HeartButton/>
        </div>
        <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
          
        <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
          {/* Image Placeholder */}
          <img src="/cars/image.png" alt="car Image"  />
        </div>
        <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline">$96.00/<span className="text-sm text-[#90A3BF]  mr-7 lg:mr-2 xl:mr-11 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-2 xl:py-2 xl:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
        </div>
      </div>
      </div>

 {/* Recommendation Cars Section */}
        <div className="mb-6">
         {/* for laptop */}
<div className="flex gap-x-[13%] md:gap-x-[36%] lg:gap-x-[52%] xl:gap-x-[62%] mt-3 mb-6 md:mb-4 md:mt-4 lg:mb-7 lg:mt-7">
<h2 className={`md:text-lg lg:text-xl text-base  text-[#90A3BF] ${
isOpen ? "hidden" : "block"
} ${
isValue ? "hidden" : "block"
}`}> Recommendation Cars</h2>
{ !isOpen && (<div>
<span className="hidden sm:block"> <button
onClick={toggleSidebar}
className="px-4 text-[#3563E9] md:text-lg lg:text-xl text-xl"
><Link href="./Category-Car-Rent">View Link</Link> 
</button></span></div>)}

{/* for Mobile */}
<span className={`flex sm:hidden ${
isValue ? "hidden" : "block"
}`}> <button
onClick={() => {
  setIsValue(!isValue)}}
className="px-4 text-[#3563E9]  text-base font-medium"
>View Link
</button></span>
</div>
          <div className="grid lg:gap-5 gap-6 md:gap-4 xl:gap-6 grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[10rem] md:mr-[1.6rem] lg:mr-[0.9rem] xl:mr-[4.3rem] 2xl:mr-[25rem]">All New Rush</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image5.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-5 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline text-lg md:text-base">$72.00/<span className="text-sm text-[#90A3BF]  mr-20 md:mr-6 lg:mr-2 xl:mr-11 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-2 xl:py-2 xl:px-3 rounded-md ">
                    Rent Now
                  </button>
                  <p className="text-sm text-[#90A3BF] font-bold line-through mt-[-0.5rem]">$100.00</p>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[14rem] md:mr-[5rem] lg:mr-[4.5rem] xl:mr-[8rem] 2xl:mr-[25rem]">CR - V</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">SUV</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image4.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-6 md:ml-2 xl:ml-6 2xl:ml-12">
                  <p className="font-bold inline text-lg md:text-base">$80.00/<span className="text-sm text-[#90A3BF]  mr-20 md:mr-6 lg:mr-2 xl:mr-11 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-2 xl:py-2 xl:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
                </div>

                <div
                  className="border rounded-lg p-4 shadow-md text-center bg-white"
                >
                  <div className="text-left ml-6 flex">
                   <div className="text-lg font-bold mt-2 mr-[9rem] md:mr-[1rem] lg:mr-[0.2rem] xl:mr-[3.5rem] 2xl:mr-[25rem]">All New Terios</div>
                   <HeartButton/>
                  </div>
                  <div className="text-sm text-[#90A3BF] text-left font-bold relative mt-[-0.5rem] ml-6">Sports</div>
                    
                  <div className=" h-[120px] md:h-[100px] xl:h-[110px] 2xl:h-[250px] mb-4 mt-14 sm:mt-11 flex items-center justify-center">
                    {/* Image Placeholder */}
                    <img src="/cars/image3.png" alt="car Image"  />
                  </div>
                  <div className="mt-[4.3rem] md:mt-10 lg:mt-[3.5rem] xl:mt-[4.3rem] text-left ml-5 lg:lg:ml-2 xl:ml-6 md:ml-2 2xl:ml-12">
                  <p className="font-bold inline text-lg md:text-base">$74.00/<span className="text-sm text-[#90A3BF]  mr-20 md:mr-6 lg:mr-2 xl:mr-11 2xl:mr-36">day</span></p>
                  <button className="bg-blue-600 text-white px-3 py-2 md:py-2 md:px-2 lg:py-2 lg:px-2 xl:py-2 xl:px-3 rounded-md ">
                    Rent Now
                  </button>
                  </div>
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