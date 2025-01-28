import './styles/navbar.css';
export default function Navbar() {
  return (
    <div className="bg-white h-30">
    <div className="relative h-[80px] md:h-[124px] w-full md:border bg-white flex justify-between items-center px-6 xl:pl-12 lg:px-8 md:px-6 md:pl-8">
    <div className="flex lg:space-x-12 xl:space-x-20">
      {/* Text Logo */}
      <div
        className="text-[28px] font-bold leading-[36px] md:leading-[48px] 
        tracking-[-0.03em] text-blue-600 font-[Plus Jakarta Sans] flex-shrink-0 "
      >
        MORENT
      </div>

      {/* Search Bar */}
      <div
        className=" items-center mx-4 max-w-[470px] md:w-[280px] h-7 md:h-11 lg:w-[350px]
        bg-white rounded-full border border-[rgba(195,212,233,0.4)] px-3 py-1
        hidden md:flex lg: ml-20 md:ml-5  xl:w-[500px]"
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
      </div>

      
       <div className=" flex lg:space-x-4 md:space-x-3 ">
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
        <button >
        <img
          src="/icons/image.svg"
          alt="Profile Icon"
          className="w-10 h-10 xl:w-12 xl:h-12 border border-[rgba(195,212,233,0.4)] rounded-full"
        /></button>
        </div>
        </div>

        {/* Action Buttons */}
      <div className="flex pb-3 pt-1 px-6  w-full justify-between items-center  md:hidden ">
        <div className="border rounded-lg py-3 pr-2  flex items-center search-box">
        {/* Search Icon for Mobile */}
        <button className="md:hidden ml-5 search-button">
          <img
            src="/icons/search.svg"
            alt="Search Icon"
            className="w-6 h-7 object-contain text-gray-500"
          />
        </button>
         {/* Search Input */}
         <input
          type="search"
          placeholder="Search something here"
          className="flex-1 bg-transparent border-none text-lg  outline-none pl-2    text-gray-700 search-input"
        />
        </div>

        {/* Filter Icon */}
        <img
          src="/icons/filter.svg"
          alt="Filter Icon"
          className="w-14 h-[52px] p-3 text-gray-500 border rounded-lg"
        />
      </div>
    </div>
  );
}
