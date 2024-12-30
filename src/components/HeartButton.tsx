'use client'
import { useState } from "react";

export default function HeartButton() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <button
      className=" xl:w-[36px] xl:h-[44px] 2xl:w-[50px] 2xl:h-[50px]   gap-0 opacity-100 rounded-full "
      onClick={() => setIsClicked(!isClicked)}
    >
      <svg 
  width="24" 
  height="24" 
  viewBox="0 0 24 24" 
  fill="currentColor" 
  xmlns="http://www.w3.org/2000/svg"
  className={`transition-colors xl:w-[25px] xl:h-[25px] 2xl:w-[50px] 2xl:h-[50px]  ${isClicked ? "fill-[#ED3F3F]" : "fill-white"}`}
>
  <path d="M16.44 3.09998C14.63 3.09998 13.01 3.97998 12 5.32998C10.99 3.97998 9.37 3.09998 7.56 3.09998C4.49 3.09998 2 5.59998 2 8.68998C2 9.87998 2.19 10.98 2.52 12C4.1 17 8.97 19.99 11.38 20.81C11.72 20.93 12.28 20.93 12.62 20.81C15.03 19.99 19.9 17 21.48 12C21.81 10.98 22 9.87998 22 8.68998C22 5.59998 19.51 3.09998 16.44 3.09998Z"
   stroke="#90A3BF" /* The "border" color */
   strokeWidth="1"/>
</svg>

    </button>
  );
}
