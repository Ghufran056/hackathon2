import Link from "next/link"
import Footer from "@/components/Footer"
export default function PaymentCarRent() {
    return(
        <div>
            {/* Header */}
            <div className="bg-white h-30">
    <div className="relative h-[80px] md:h-[124px] justify-between w-full md:border bg-white flex items-center px-4  md:px-8">
     
      {/* Text Logo */}
      <div
        className="text-[28px] font-bold leading-[36px] md:leading-[48px] 
        tracking-[-0.03em] text-blue-600 font-[Plus Jakarta Sans] flex-shrink-0 "
      >
        MORENT
      </div>

      
       <div className="   flex lg:space-x-4 md:space-x-3">
        {/* Heart Button */}
        <button className=" hidden md:flex w-10 h-10 xl:w-12 xl:h-12 border border-[rgba(195,212,233,0.4)] rounded-full items-center justify-center">
          <img src="/icons/heart.svg" alt="Heart Icon" className="w-6 h-6" />
        </button>

        {/* Notification Button */}
        <div className="hidden md:flex relative w-10 h-10 xl:w-12 xl:h-12 border border-[rgba(195,212,233,0.4)] rounded-full  items-center justify-center">
          <button>
          <img
            src="/icons/notification.svg"
            alt="Notification Icon"
            className="w-6 h-6"
          /></button>
          {/* Notification Badge */}
          <span className="hidden md:block absolute top-0 right-0 w-2.5 h-2.5 xl:w-3 xl:h-3 bg-red-600 rounded-full"></span>
        </div>

        {/* Settings Button */}
        <button className=" hidden md:flex w-10 h-10 border xl:w-12 xl:h-12 border-[rgba(195,212,233,0.4)] rounded-full items-center justify-center">
          <img src="/icons/setting.svg" alt="Settings Icon" className="w-6 h-6" />
        </button>

        {/* Profile Image */}
        <button>
        <img
          src="/icons/image.svg"
          alt="Profile Icon"
          className="w-10 h-10 xl:w-12 xl:h-12 border border-[rgba(195,212,233,0.4)] rounded-full"
        /></button>
        </div>
        </div>
    </div>

     {/* main */}
     <div className="flex flex-col-reverse gap-6 p-6 md:gap-0 md:flex-row md:p-4 lg:p-5 xl:p-8 2xl:p-12 md:space-x-4 lg:space-x-5 xl:space-x-8 2xl:space-x-12 bg-[#F6F7F9]">
        {/* first div */}
        <div className="flex flex-col w-[100%] md:w-[62%] ">
            {/* billing  */}
            <div className="w-full mx-auto p-5 lg:p-6 2xl:p-9 bg-white rounded-md 2xl:rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg 2xl:text-4xl font-semibold text-gray-900">Billing Info</h2>
          <p className="xl:text-sm 2xl:text-2xl text-xs text-[#90A3BF]">Please enter your billing info</p>
        </div>
        <p className="text-sm 2xl:text-2xl text-[#90A3BF]">Step 1 of 4</p>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 2xl:gap-11">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="mt-1 block py-4  px-5 md:py-3 lg:py-4 2xl:py-9  w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Phone number"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* Address Field */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* Town/City Field */}
        <div>
          <label
            htmlFor="town"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Town / City
          </label>
          <input
            type="text"
            id="town"
            placeholder="Town or city"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>
      </form>
    </div>

           <div className="lg:mt-7 2xl:mt-12 md:mt-4 mt-8 ">
             {/* Rental-info  */}
             <div className="w-full mx-auto p-5 lg:p-6 2xl:p-9 bg-white rounded-md 2xl:rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center lg:mb-6 mb-3">
        <div>
          <h2 className="text-lg 2xl:text-4xl font-semibold text-gray-900">Rental Info</h2>
          <p className="xl:text-sm 2xl:text-2xl text-xs text-[#90A3BF]">Please select your rental date</p>
        </div>
        <p className="text-sm 2xl:text-2xl text-[#90A3BF]">Step 2 of 4</p>
      </div>

      <div className="flex w-full mb-4">
     <div className="h-4 w-4 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8 rounded-full bg-[rgba(53,99,233,0.3)]  mr-2 mt-3 flex justify-center items-center">
       <div className="h-2 w-2 lg:h-3 lg:w-3 2xl:h-4 2xl:w-4 bg-[rgba(53,99,233,1)] rounded-full"></div>
      </div>
       <h1 className="text-[16px] 2xl:text-3xl font-semibold md:font-bold mt-2 lg:mt-3">Pick-Up</h1>
     </div>
      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 2xl:gap-11">
        {/* location Field */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Locations
          </label>
          <input
            type="text"
            id="location"
            placeholder="Select your city"
            className="mt-1 block py-4 md:py-3 lg:py-4 2xl:py-9 px-5 w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* date Field */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            placeholder="Phone number"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* time Field */}
        <div>
          <label
            htmlFor="time"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            placeholder="Address"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>
      </form>
    
    <div className="lg:mt-8  mt-5">
    <div className="flex w-full mb-4">
  <div className="h-4 w-4 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8 rounded-full bg-[rgba(92,175,252,0.3)]  mr-2 mt-3 flex justify-center items-center">
    <div className="h-2 w-2 lg:h-3 lg:w-3  2xl:h-4 2xl:w-4 bg-[#54A6FF] rounded-full"></div>
  </div>
  <h1 className="text-[16px]  2xl:text-3xl font-semibold md:font-bold mt-2 lg:mt-3">Drop-Off</h1>
</div>
      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 2xl:gap-11">
        {/* location Field */}
        <div>
          <label
            htmlFor="location"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Locations
          </label>
          <input
            type="text"
            id="location"
            placeholder="Select your city"
            className="mt-1 block py-4 md:py-3 lg:py-4 2xl:py-9 px-5 w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* date Field */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            placeholder="Phone number"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* time Field */}
        <div>
          <label
            htmlFor="time"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            placeholder="Address"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>
      </form>
      </div>
    </div>
           </div>

           <div className="w-full mx-auto lg:mt-7 2xl:mt-12 md:mt-4 mt-8 p-5 lg:p-6 2xl:p-9 bg-white rounded-md 2xl:rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg 2xl:text-4xl font-semibold text-gray-900">Payment Method</h2>
          <p className="xl:text-sm 2xl:text-2xl text-xs text-[#90A3BF]">Please enter your payment method</p>
        </div>
        <p className="text-sm 2xl:text-2xl text-[#90A3BF]">Step 3 of 4</p>
      </div>
    
      <div className="bg-[#F6F7F9] p-5 lg:p-5 2xl:p-9 rounded-lg">
      <div className="flex justify-between items-center mb-4">
      <div className="flex w-full">
     <div className="h-4 w-4 mt-1 lg:mt-0 lg:h-6 lg:w-6 2xl:h-8 2xl:w-8 rounded-full bg-[rgba(53,99,233,0.3)]  mr-2 flex justify-center items-center">
       <div className="h-2 w-2 lg:h-3 lg:w-3 2xl:h-4 2xl:w-4 bg-[rgba(53,99,233,1)] rounded-full"></div>
      </div>
       <h1 className="text-[16px] 2xl:text-3xl font-semibold">Credit Card</h1>
     </div>
     <img src="/icons/visa.svg" alt="Visa logo" className="2xl:w-40"/>
     </div>
      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6 2xl:gap-11">
        {/* Card Number Field */}
        <div>
          <label
            htmlFor="CardNumber"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Card Number
          </label>
          <input
            type="text"
            id="CardNumber"
            placeholder="Card number"
            className="mt-1 block py-4 md:py-3 lg:py-4 2xl:py-9 px-5 w-full rounded-md 2xl:rounded-xl bg-white border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* Expration Date Field */}
        <div>
          <label
            htmlFor="ExprationDate"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Expiration Date
          </label>
          <input
            type="date"
            id="ExprationDate"
            placeholder="Expration Date"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-white border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* Card Holder Field */}
        <div>
          <label
            htmlFor="CardHolder"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            Card Holder
          </label>
          <input
            type="time"
            id="CardHolder"
            placeholder="Card Holder"
            className="mt-1 py-4 md:py-3 lg:py-4 2xl:py-9 px-5 block w-full rounded-md 2xl:rounded-xl bg-white border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>

        {/* CVC Field */}
        <div>
          <label
            htmlFor="CVC"
            className="block text-sm 2xl:text-2xl font-semibold"
          >
            CVC
          </label>
          <input
            type="text"
            id="CVC"
            placeholder="CVC"
            className="mt-1 block py-4 md:py-3 lg:py-4 2xl:py-9 px-5 w-full rounded-md 2xl:rounded-xl bg-white border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm 2xl:text-2xl"
          />
        </div>
      </form>
      </div>

       {/* PayPal */}
        <div className="bg-[#F6F7F9] p-3 lg:p-5 2xl:p-9 lg:mt-6 xl:mt-8 mt-4 flex gap-[40%] 2xl:gap-[77%] xl:gap-[74%] lg:gap-[70%] md:gap-[50%] rounded-lg">
          <div className="flex">
            <input type="radio" name="Payment" id="Payment" className="h-4 w-4 2xl:h-8 2xl:w-8" />
            <label htmlFor="Payment" className="block text-sm 2xl:text-2xl font-semibold ml-4 2xl:ml-8">PayPal</label>
          </div>
          <div><img src="/icons/paypal.svg" alt="PayPal" className="2xl:w-40"/></div>
        </div>
        {/* Bitcoin */}
        <div className="bg-[#F6F7F9] p-3 lg:p-5 2xl:p-9 lg:mt-6 xl:mt-8 mt-4 flex 2xl:gap-[77%] xl:gap-[74%] lg:gap-[70%] gap-[40%] md:gap-[50%] rounded-lg">
          <div className="flex">
            <input type="radio" name="Payment" id="Payment" className="h-4 w-4 2xl:h-8 2xl:w-8" />
            <label htmlFor="Payment" className="block text-sm 2xl:text-2xl font-semibold ml-4 2xl:ml-8">Bitcoin</label>
          </div>
          <div><img src="/icons/bitcoin.svg" alt="Bitcoin" className="2xl:w-40"/></div>
        </div>

           </div>

           <div className="w-full mx-auto p-5 lg:p-6 2xl:p-9 2xl:mt-12 lg:mt-7 md:mt-4 mt-8 bg-white rounded-md 2xl:rounded-xl shadow-sm">
      {/* Header */}
      <div className="flex lg:justify-between lg:items-center gap-[10%] md:gap-[31%] lg:gap-0 mb-6">
        <div>
          <h2 className="text-lg 2xl:text-4xl font-semibold text-gray-900">Confirmation</h2>
          <p className="xl:text-sm 2xl:text-2xl text-xs text-[#90A3BF]">We are getting to the end. Just few clicks and your rental is ready!</p>
        </div>
        <p className="text-sm 2xl:text-2xl text-[#90A3BF] w-36  lg:w-fit ">Step 4 of 4</p>
      </div>
      <div className="bg-[#F6F7F9] p-5 2xl:p-9 2xl:mt-9 mt-6 rounded-lg">
          <div className="flex">
            <input type="checkbox" name="spamAgreement" id="spamAgreement" className="xl:h-5 xl:w-5 2xl:h-8 2xl:w-8 h-4 w-4" />
            <label htmlFor="Payment" className="block text-xs xl:text-sm 2xl:text-2xl text-[#1F2544] font-semibold ml-4 2xl:ml-8">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
          </div>
        </div>

        <div className="bg-[#F6F7F9] p-5  2xl:p-9 2xl:mt-9  mt-6 rounded-lg">
          <div className="flex">
            <input type="checkbox" name="spamAgreement" id="spamAgreement" className="xl:h-5 xl:w-5 2xl:h-8 2xl:w-8 h-4 w-4" />
            <label htmlFor="Payment" className="md:flex text-xs xl:text-sm 2xl:text-2xl text-[#1F2544] font-semibold ml-4 2xl:ml-8">I agree with our <span className="hidden md:block ml-[4px] mr-[4px]">terms and conditions</span><u className="md:hidden">terms and conditions</u> and <span className="hidden md:block ml-[4px] ">privacy policy</span><u className="md:hidden">privacy policy</u><span className="md:hidden">!</span><span className="hidden md:block">.</span></label>
          </div>
        </div>

             <div className="mt-8 md:mt-10 lg:mt-6 2xl:mt-9 xl:mt-7 ">
                  <button className="bg-blue-600 text-white px-7 py-3 rounded-md 2xl:rounded-xl 2xl:py-5 2xl:px-11 md:py-2 md:px-6 lg:py-3 lg:px-6 lg:rounded-lg "><Link href="./Dashboard-Admin-Car-Rent">
                    Rent Now</Link>
                  </button>
                  </div>
           <div className="xl:mt-7 lg:mt-6 2xl:mt-9 mt-8 space-y-2 2xl:space-y-4">
            <img src="/icons/security.svg" alt="Security-Safety Logo" className="2xl:h-14 2xl:w-14"/>
            <p className=" font-semibold 2xl:text-2xl">All your data are safe</p>
            <p className="text-[#90A3BF] xl:text-sm 2xl:text-2xl text-xs">We are using the most advanced security to provide you the best experience ever.</p>
           </div>

           </div>
        </div>
        {/* second div */}
        <div className="w-[100%] md:w-[37%] rounded-lg">
            <div className="bg-white rounded-lg"><img src="/ads/AdforPayment.png" alt="ads" className="w-full rounded-lg hidden md:block"/>
            <div className="bg-white rounded-lg"><img src="/ads/AdforPaymentforMobile.png" alt="ads" className="w-full rounded-lg px-2 block md:hidden"/>
            <div className="flex mt-4 px-4 2xl:px-9 justify-between">
                <p className="text-[#90A3BF] text-sm md:text-xs lg:text-base 2xl:text-3xl">Subtotal</p>
                <p className=" font-semibold md:text-xs lg:text-base 2xl:text-3xl">$80.00</p>
            </div>
            <div className="flex mt-4 2xl:mt-7  px-4 2xl:px-9 justify-between">
                <p className="text-[#90A3BF] text-sm md:text-xs lg:text-base 2xl:text-3xl">Tax</p>
                <p className="font-semibold md:text-xs lg:text-base 2xl:text-3xl">$0</p>
            </div>
            <div className="flex items-center justify-between bg-gray-50 p-3 lg:p-5 2xl:p-9 m-4 2xl:my-8 2xl:mx-9  rounded-md 2xl:rounded-xl shadow-sm">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Apply promo code"
        className="w-[65%] border-none bg-transparent text-gray-500 text-xs lg:text-sm 2xl:text-2xl focus:outline-none focus:ring-0"
      />

      {/* Label on the Right */}
      <button className="text-xs lg:text-sm 2xl:text-2xl font-semibold text-gray-900 hover:underline">
        Apply now
      </button>
    </div>
            <div className="flex lg:mt-4 px-4 p-2 pb-5 lg:pb-2 lg:p-5 xl:py-7 2xl:py-10 2xl:px-9 justify-between">
                <div>
                <p className="font-semibold text-lg 2xl:text-4xl md:text-sm lg:text-base xl:text-xl">Total Rental Price</p>
                <p className="text-[#90A3BF] hidden md:block xl:text-sm 2xl:text-2xl md:text-xs">Overall price and includes rental discount</p>
                <p className="text-[#90A3BF] md:hidden block text-xs">Overall price rental</p>
                </div>
                <p className="font-semibold 2xl:text-5xl xl:text-2xl lg:text-xl md:text-md text-xl">$80.00</p>
            </div>
            </div>
            </div>
            </div>
     </div>

    {/* footer */}
    <Footer/>
        </div>
    )
}