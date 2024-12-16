import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";

const HeroSecond = () => {
  return (
    <div className="flex items-center justify-center container m-auto py-16 w-full gap-8 overflow-hidden">
      <img src={belsoft.image1} className="w-full sm:w-1/2 max-w-lg" alt="" />
      <div className="border-l-4 border-purple-600 rounded-2xl">
        <h3 className="font-bold px-4 sm:mb-2 md:mb-2 lg:mb-4 sm:text-xl md:text-xl lg:text-2xl">Who Are We?</h3>
        <p className="text-gray-500 px-4 sm:text-xs md:text-sm lg:text-sm " >Born from the vibrant startup ecosystem of Abuja, we recognized the need for a consistent high-quality networking platform where founders, innovators, and tech enthusiasts could connect, share ideas, and foster collaboration.</p>
        <div className="space-x-6 mb-16 flex px-4">
          <a href="#Projects" className="border bg-purple-600 text-white text-sm px-8 py-1 rounded-full">Register</a>
          <a href="#Contact" className="border-2 border-purple-600 text-sm
           border-solid text-purple-700 px-8 py-1 gap-2 rounded-full flex items-center">Donate <img src={belsoft.moneybag} className="w-4 h-4" alt="" /> </a>
        </div>
        <p className="font-bold mt-16 px-4 sm:text-xs md:text-sm lg:text-sm">Founder's Friday is more than just a meetup - it's a movement.</p>
      </div>
    </div>
  )
}

export default HeroSecond;