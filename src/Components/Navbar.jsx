import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";



const Navbar = () => {
  return(
    <div className="fixed top-0 left-0 w-full z-50 pt-4 bg-white bg-transparent">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-16 lg:px-32 border-t-2 border-b-2">
        <div className="flex items-center justify-center">
          <img src={belsoft.logoB} className="w-8 h-8" alt="" /> <span className="font-bold">Founder's Friday</span>
        </div>
        <ul className="md:flex space-x-2 text-gray-900 text-sm md:text-base lg:text-lg">
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">Home</a>
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">About Us</a>
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">Gallery</a>
          <a href="" className="text-sm md:text-base lg:text-lg cursor-pointer hover:text-purple-700">Contact Us</a>
        </ul>
        <button className="text-sm md:text-base lg:text-lg md:block bg-white px-8 py-2 rounded-full border text-purple-700 border-purple-700">Register</button>
      </div>
    </div>
  )
}

export default Navbar;