import { useState } from "react";

const SidebarLayout = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex flex-wrap h-screen w-full">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-full sm:w-64" : "w-0"
        } bg-gray-800 text-white h-full fixed top-0 left-0 z-50 overflow-y-auto transition-all duration-300`}
      >
        {/* Sidebar Header */}
        <div className="p-4">
          <h2 className="text-lg font-bold">Sidebar Header</h2>
        </div>

        {/* Sidebar Content */}
        <div className="p-4">
          <ul className="space-y-4">
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          isOpen ? "ml-0 sm:ml-64" : "ml-0"
        }`}
      >
        {/* Header Section */}
        <div className="p-4 bg-gray-100">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
            onClick={toggleSidebar}
          >
            {isOpen ? "Close Sidebar" : "Open Sidebar"}
          </button>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold">Main Content</h1>
          <p>This is the main content area that adjusts beside the sidebar.</p>
        </div>

        {/* Footer Section */}
        <footer className="bg-gray-100 p-4">
          <p className="text-center text-sm text-gray-600">
            © 2024 My Application. All rights reserved.
          </p>
        </footer>
      </div>
      transform -translate-y-1/2
    </div>
  );
};

export default SidebarLayout;

<div className="2xl:p-6 xl:p-4 lg:p-3 p-2 xl:pl-3">
                    <h2 className="text-sm lg:text-sm xl:text-base 2xl:text-2xl md:text-[10px] text-[#94A7CB66] opacity-40 2xl:p-5 xl:p-3 md:p-3 mt-4 p-2 pt-4">MAIN MENU</h2>
                    <button className="flex space-x-3 2xl:p-5 p-3  w-full bg-[#3563E9] rounded-lg 2xl:rounded-xl">
                     <img src="/icons/home.svg" alt="logo" className="2xl:h-8 2xl:w-8"/>
                     <p className="text-white sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Dashboard</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-3 p-2">
                      <img src="/icons/car.svg" alt="logo" className="2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Car Rent</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-3 p-2">
                      <img src="/icons/insight.svg" alt="logo" className="2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Insight</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-3 p-2">
                      <img src="/icons/wallet.svg" alt="logo" className="2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Reimburse</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-3 p-2">
                      <img src="/icons/message.svg" alt="logo" className="2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Inbox</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-3 p-2">
                      <img src="/icons/calender.svg" alt="logo" className="2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Calender</p>
                      </button>
            
                      <h2 className="text-sm lg:text-sm md:text-[10px] text-[#94A7CB66] xl:text-base 2xl:text-2xl opacity-40 2xl:p-5 xl:p-3 md:p-3 p-2 mt-5">PREFERENCE</h2>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-3 p-2">
                      <img src="/icons/settings.svg" alt="logo" className="2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Settings</p>
                      </button>
                      <button className="flex w-full space-x-3 2xl:p-5 xl:p-3 md:p-3 p-2 xl:pt-4">
                      <img src="/icons/infoCircle.svg" alt="logo" className="2xl:h-8 2xl:w-8" />
                      <p className="text-[#90A3BF] sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl sm:mt-1 lg:mt-0">Help & Center</p>
                      </button>
                      
                       <button className="flex w-full 2xl:p-5  justify-between xl:p-3 md:p-3 p-2">
                      <div className="flex space-x-3 lg:space-x-2 xl:space-x-3 ">
                      <img src="/icons/briefcase.svg" alt="logo" className="2xl:h-8 2xl:w-8 "/>
                      <p className="text-[#90A3BF] mt-2 sm:mt-1 xl:mt-2 sm:text-xs lg:text-sm xl:text-base 2xl:text-2xl">Dark Mode</p>
                      </div>
                      <img src="/icons/button.svg" alt="" className="2xl:h-12 2xl:w-28"/>
                      </button>
                
                  </div>