import Footer from "@/components/Footer"
export default function PaymentCarRent() {
    return(
        <div>
            {/* Header */}
            <div className="bg-white h-30">
    <div className="relative h-[80px] md:h-[124px] w-full md:border bg-white flex items-center px-4  md:px-8">
     
      {/* Text Logo */}
      <div
        className="text-[28px] font-bold leading-[36px] md:leading-[48px] 
        tracking-[-0.03em] text-blue-600 font-[Plus Jakarta Sans] flex-shrink-0 "
      >
        MORENT
      </div>

      
       <div className="ml-[56%] lg:ml-[62%] xl:ml-[70%]  flex lg:space-x-4 md:space-x-3 md:ml-[51%]  2xl:ml-[80%]">
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
     <div className="flex p-5 space-x-5">
        {/* first div */}
        <div className="flex flex-col w-[62%]">
            {/* billing  */}
            <div className="w-full mx-auto p-6 bg-white rounded-md shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Billing Info</h2>
          <p className="text-sm text-[#90A3BF]">Please enter your billing info</p>
        </div>
        <p className="text-sm text-[#90A3BF]">Step 1 of 4</p>
      </div>

      {/* Form */}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="Your name"
            className="mt-1 block py-2 px-5 w-full rounded-md bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Phone Number Field */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            placeholder="Phone number"
            className="mt-1 py-2 px-5 block w-full rounded-md bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Address Field */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Address"
            className="mt-1 py-2 px-5 block w-full rounded-md bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Town/City Field */}
        <div>
          <label
            htmlFor="town"
            className="block text-sm font-medium text-gray-700"
          >
            Town / City
          </label>
          <input
            type="text"
            id="town"
            placeholder="Town or city"
            className="mt-1 py-2 px-5 block w-full rounded-md bg-gray-50 border border-transparent text-[#90A3BF] shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
          />
        </div>
      </form>
    </div>

           <div></div>
           <div></div>
           <div></div>
        </div>
        {/* second div */}
        <div className="w-[37%] rounded-lg">
            <div className="bg-white rounded-lg"><img src="/ads/AdforPayment.png" alt="ads" className="w-full rounded-lg"/>
            <div className="flex mt-4 px-4">
                <p className="text-[#90A3BF]">Subtotal</p>
                <p className="ml-[12rem] font-semibold">$80.00</p>
            </div>
            <div className="flex mt-4 px-4">
                <p className="text-[#90A3BF]">Tax</p>
                <p className="ml-[16.6rem] font-semibold">$0</p>
            </div>
            <div className="flex items-center justify-between bg-gray-50 px-5 py-3 m-4 rounded-md shadow-sm">
      {/* Input Field */}
      <input
        type="text"
        placeholder="Apply promo code"
        className="w-[65%] border-none bg-transparent text-gray-500 text-sm focus:outline-none focus:ring-0"
      />

      {/* Label on the Right */}
      <button className="text-sm font-semibold text-gray-900 hover:underline">
        Apply now
      </button>
    </div>
            <div className="flex mt-4 px-4 p-5">
                <div>
                <p className="text-semibold">Total Rental Price</p>
                <p className="text-[#90A3BF]">Overall price and includes rental discount</p>
                </div>
                <p className="ml-[1rem] font-semibold text-2xl">$80.00</p>
            </div>
            </div>
        </div>
     </div>

    {/* footer */}
    <Footer/>
        </div>
    )
}