export default function Footer() {
    return (
      <div
        className="
          w-[1440px] /* Fixed width for the footer */
          h-[480px]
          bg-white
          flex flex-col /* Stack elements vertically */
          px-[60px] /* Padding for horizontal spacing */
          mx-auto /* Center the footer */
          relative /* Ensure child elements are positioned within the footer */
        "
      >
        {/* Top Sections */}
        <div className="flex items-start">
          {/* Left Inner Div */}
          <div
            className="
              w-[292px] h-auto
              gap-[16px]
              mt-[80px]
            "
          >
            {/* Text Logo */}
            <div
              className="
                w-[148px] h-[44px]
                text-[32px] font-bold leading-[48px] tracking-[-0.03em]
                text-left text-[rgba(53,99,233,1)] font-[Plus Jakarta Sans]
                mb-[64px]
              "
            >
              MORENT
            </div>
  
            {/* Vision Text */}
            <div
              className="
                w-[292px] h-[48px]
                text-[16px] font-medium leading-[24px] tracking-[-0.02em]
                text-left text-[rgba(19,19,19,0.6)] font-[Plus Jakarta Sans]
                mt-[60px]
              "
            >
              Our vision is to provide convenience and help increase your sales business.
            </div>
          </div>
  
          {/* Right Inner Sections */}
          <div className="flex ml-[452px] gap-[60px] mt-[80px]">
            {/* About Section */}
            <div className="w-[152px] h-[244px] flex flex-col justify-between">
              <div
                className="
                  text-[20px] font-medium leading-[24px]
                  text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]
                "
              >
                About
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">How it works</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Featured</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Partnership</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Business Relation</div>
              </div>
            </div>
  
            {/* Community Section */}
            <div className="w-[152px] h-[244px] flex flex-col justify-between">
              <div
                className="
                  text-[20px] font-medium leading-[24px]
                  text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]
                "
              >
                Community
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Events</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Blog</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Podcast</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Invite a friend</div>
              </div>
            </div>
  
            {/* Socials Section */}
            <div className="w-[152px] h-[244px] flex flex-col justify-between">
              <div
                className="
                  text-[20px] font-medium leading-[24px]
                  text-[rgba(26, 32, 44, 1)] font-[Plus Jakarta Sans]
                "
              >
                Socials
              </div>
              <div className="flex flex-col gap-[16px]">
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Discord</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Instagram</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Twitter</div>
                <div className="text-[16px] text-[rgba(19,19,19,0.6)]">Facebook</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Section */}
        <div
          className="
            flex items-center justify-between
            border-t border-[rgba(19,19,19,0.16)]
            h-[70px]
            absolute
            bottom-[24px] /* Stay inside the footer bounds */
            left-[60px]
            right-[60px]
          "
        >
          {/* Left Div */}
          <div className="text-[14px] text-[rgba(19,19,19,0.6)]">
            ©2022 MORENT. All rights reserved
          </div>
  
          {/* Right Divs */}
          <div className="flex gap-[60px]">
            <div className="text-[14px] text-[rgba(19,19,19,0.6)]">Privacy & Policy</div>
            <div className="text-[14px] text-[rgba(19,19,19,0.6)]">Terms & Condition</div>
          </div>
        </div>
      </div>
    );
  }
  