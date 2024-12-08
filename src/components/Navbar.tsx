export default function Navbar() {
  return (
    <div className="relative h-[124px] w-[1440px] border bg-white flex">
      {/* Text Logo */}
      <div
        className={`absolute w-[148px] h-[44px] top-[40px] left-[60px] gap-0 opacity-100
          text-[32px] font-bold leading-[48px] tracking-[-0.03em] text-left
          text-[rgba(53,99,233,1)] font-[Plus Jakarta Sans]`}
      >
        MORENT
      </div>

      {/* Search Bar with Rounded Parent Div */}
      <div
        className="
          absolute top-[40px] left-[272px] 
          w-[492px] h-[44px]
          bg-white 
          rounded-[22px] 
          border border-solid border-[rgba(195,212,233,0.4)] flex items-center
        "
      >
        {/* Search Icon on the left */}
        <div className="ml-[10px] w-[24px] h-[24px]">
          <img src="/icons/search.svg" alt="Search Icon" width={24} height={24} />
        </div>

        {/* Search Input */}
        <input
          type="search"
          placeholder="Search something here"
          className="ml-[10px] flex-1 h-[30px] bg-transparent border-none outline-none"
        />

        {/* Settings Icon on the right */}
        <div className="mr-[10px] w-[24px] h-[24px]">
          <img src="/icons/filter.svg" alt="filter Icon" width={24} height={24} />
        </div>
      </div>

      {/* Div of Buttons */}
      <div
        className="
          absolute w-[236px] h-[44px] top-[40px] left-[1172px] gap-[20px] opacity-100 flex items-center
        "
      >
        {/* Heart Button */}
        <button
          className="
            w-[44px] h-[44px] gap-0 opacity-100
            border border-[rgba(195,212,233,0.4)]
            rounded-full flex items-center justify-center
          "
        >
          <img src="/icons/heart.svg" alt="Heart Icon" width={24} height={24} />
        </button>

        {/* Notification Button with Red Dot */}
        <div
          className="
            relative w-[44px] h-[44px] gap-0 opacity-100
            border border-[rgba(195,212,233,0.4)]
            rounded-full flex items-center justify-center
          "
        >
          {/* Notification Icon */}
          <img
            src="/icons/notification.svg"
            alt="notification Icon"
            width={24}
            height={24}
          />
          {/* Red Dot for Notification */}
          <div
            className="
              absolute top-[2px] right-[2px] /* Adjust position within notification button */
              w-[11px] h-[11px] 
              bg-red-600 
              rounded-full
            "
          />
        </div>

        {/* Setting Button */}
        <button
          className="
            w-[44px] h-[44px] gap-0 opacity-100
            border border-[rgba(195,212,233,0.4)]
            rounded-full flex items-center justify-center
          "
        >
          <img src="/icons/setting.svg" alt="setting Icon" width={24} height={24} />
        </button>

        {/* Image Button */}
        <img
          src="/icons/image.svg"
          alt="image Icon"
          className="
            w-[44px] h-[44px] gap-0 opacity-100
            border border-[rgba(195,212,233,0.4)]
            rounded-full flex items-center justify-center
          "
        />
      </div>
    </div>
  );
}
