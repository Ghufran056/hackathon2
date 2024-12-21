export default function Navbar() {
  return (
    <div className="bg-white h-30">
    <div className="relative h-[80px] md:h-[124px] w-full md:border bg-white flex items-center px-4  md:px-8">
     
      {/* Text Logo */}
      <div
        className="text-[28px] font-bold leading-[36px] md:leading-[48px] 
        tracking-[-0.03em] text-blue-600 font-[Plus Jakarta Sans] flex-shrink-0 "
      >
        MORENT
      </div>

      {/* Search Bar */}
      <div
        className=" items-center mx-4 w-full max-w-[470px] md:w-[300px] h-7 md:h-11 lg:w-[440px]
        bg-white rounded-full border border-[rgba(195,212,233,0.4)] px-3 py-1
        hidden md:flex lg: ml-20 md:ml-5 xl:ml-24 xl:w-[500px]"
      >
        {/* Search Icon */}
        <img
          src="/icons/search.svg"
          alt="Search Icon"
          className="h-3 w-3 md:w-5 md:h-5 text-gray-500"
        />

        {/* Search Input */}
        <input
          type="search"
          id="search"
          placeholder="Search something here"
          className="flex-1 bg-transparent border-none outline-none px-2 text-sm text-gray-700"
        />

        {/* Filter Icon */}
        <button>
        <img
          src="/icons/filter.svg"
          alt="Filter Icon"
          className="w-5 h-5 text-gray-500"
        /></button>
      </div>

      
       <div className="ml-[56%] lg:ml-[17%] xl:ml-[22%]  flex lg:space-x-4 md:space-x-3 md:ml-[8%]  2xl:ml-[58%]">
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

        {/* Action Buttons */}
      <div className="flex px-4 pb-6 w-full items-center ml-auto space-x-4 md:hidden ">
        <div className="border rounded-lg">
        {/* Search Icon for Mobile */}
        <button className="md:hidden pl-6 pt-2 ">
          <img
            src="/icons/search.svg"
            alt="Search Icon"
            className="w-6 h-6 text-gray-500"
          />
        </button>
         {/* Search Input */}
         <input
          type="search"
          placeholder="Search something here"
          className="flex-1 bg-transparent border-none text-[19px] outline-none pl-2 pr-3 mb-4  text-gray-700"
        />
        </div>

        {/* Filter Icon */}
        <img
          src="/icons/filter.svg"
          alt="Filter Icon"
          className="w-13 h-13 p-3 text-gray-500 border rounded-lg"
        />
      </div>
    </div>
  );
}
