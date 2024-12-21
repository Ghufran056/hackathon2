export default function Footer() {
 
  return (
    <div className="
        w-full 
        h-[825px]
        sm:h-[480px]
        bg-white
        flex flex-col /* Stack elements vertically */
        px-[40px] /* Padding for horizontal spacing */
        mx-auto 
        relative 
      "
    >

      {/* Top Sections */}
      <div className="sm:flex sm:items-start">
        {/* Left Inner Div */}
        <div
          className="
             h-auto
             w-auto
            gap-[16px]
            mt-[5px]
            sm:mt-[80px]
          "
        >
          {/* Text Logo */}
          <div
            className="
              w-[148px] h-[44px] 
              text-[32px] xl:text-[35px] 2xl:text-[40px] font-bold leading-[48px] tracking-[-0.03em]
              text-left text-[rgba(53,99,233,1)] font-[Plus Jakarta Sans]
              mb-[24px]
            "
          >
            MORENT
          </div>

          {/* Vision Text */}
          <div
            className="
              w-[18rem] h-[48px] 2xl:w-[24rem]
              text-[16px] lg:text-[14px] md:text-[12px] xl:text-[16px] 2xl:text-[20px] font-medium leading-[24px] tracking-[-0.02em]
              text-left text-[rgba(19,19,19,0.6)] font-[Plus Jakarta Sans]
              
            "
          >
            Our vision is to provide convenience and help increase your sales business.
          </div>
        </div>

        {/* Right Inner Sections */}
        <div className="ml-0 flex flex-wrap mt-[45px] sm:flex-nowrap lg:ml-[220px] md:ml-20  xl:ml-[40%] 2xl:ml-[57%] gap-[34px] 2xl:gap-[63px] sm:mt-[75px]">
          {/* About Section */}
          <div className="w-[152px] 2xl:w-[180px] lg:w-[140px] md:w-[100px] h-[244px] flex flex-col justify-around ">
            <div
              className="
                text-[23px] sm:text-[20px] md:text-[20px] xl:text-[22px] 2xl:text-[25px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]
              "
            >
              About
            </div>
            <div className="flex flex-col gap-[16px] ">
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">How it works</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Featured</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Partnership</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Business Relation</div>
            </div>
          </div>
         {/* for mobile */}
          <div className="sm:hidden w-[100px] 2xl:w-[180px] lg:w-[140px] md:w-[100px] h-[244px] flex flex-col justify-around ml-14">
            <div
              className="
                text-[23px] sm:text-[20px] md:text-[20px] xl:text-[22px] 2xl:text-[25px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]
              "
            >
              Socials
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Discord</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Instagram</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Twitter</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Facebook</div>
            </div>
          </div>
        

          {/* Community Section */}
          <div className="w-[152px] 2xl:w-[180px] lg:w-[140px] md:w-[100px] h-[244px] flex flex-col justify-around ">
            <div
              className="
                text-[23px] sm:text-[20px] md:text-[20px] xl:text-[22px] 2xl:text-[25px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]
              "
            >
              Community
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Events</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Blog</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Podcast</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[#90A3BF] sm:text-[rgba(19,19,19,0.6)]">Invite a friend</div>
            </div>
          </div>

          {/* Socials Section */}
          <div className="hidden sm:w-[140px] 2xl:w-[180px] lg:w-[110px] md:w-[90px] h-[244px] sm:flex  flex-col justify-around">
            <div
              className="
                text-[20px] md:text-[20px] xl:text-[22px] 2xl:text-[25px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]
              "
            >
              Socials
            </div>
            <div className="flex flex-col gap-[16px]">
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[rgba(19,19,19,0.6)]">Discord</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[rgba(19,19,19,0.6)]">Instagram</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[rgba(19,19,19,0.6)]">Twitter</div>
              <div className="2xl:text-[20px] xl:text-[16px] lg:text-[14px] md:text-[12px] text-[rgba(19,19,19,0.6)]">Facebook</div>
            </div>
          </div>
          </div>
      </div>

      {/* Bottom Section */}
      <div
        className=" flex-wrap sm:flex-nowrap
          flex items-center justify-between
          sm:border-t border-[rgba(19,19,19,0.16)]
          h-[70px]
          absolute
          sm:bottom-[24px]
          bottom-[38px] /* Stay inside the footer bounds */
          sm:left-[60px]
          sm:right-[60px]
        "
      >
        {/* Left Div */}
        <div className=" hidden sm:block
                text-[16px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]">
          ©2022 MORENT. All rights reserved
        </div>

        {/* Right Divs */}
        <div className="flex gap-[90px] sm:gap-[60px]">
          <div className="
                text-[16px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]">Privacy & Policy</div>
          <div className="
                text-[16px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]">Terms & Condition</div>
        </div>
        <div className=" sm:hidden block w-full sm:auto mt-5
                text-[16px] font-medium leading-[24px]
                text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]">
          ©2022 MORENT. All rights reserved
        </div>
      
      </div>
      
     
    </div>
  );
}
