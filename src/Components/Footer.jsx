import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";


const Footer = () => {
  return(
    <div className=" flex items-center justify-between w-full px-4 md:px-16 lg:32">
      <div className="flex py-4 gap-4">
        <img src={belsoft.x} className="w-8" alt="" />
        <img src={belsoft.insta} className="w-8" alt="" />
        <img src={belsoft.face} className="w-8" alt="" />
      </div>
      <ul className="md:flex space-x-4 text-gray-900 text-sm md:text-base lg:text-lg">
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">Home</a>
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">About Us</a>
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">Gallery</a>
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">Contact Us</a>
      </ul>

    </div>
  )
}

export default Footer;