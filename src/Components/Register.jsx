import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";

const Register = () => {
  return (
    <div className="text-center w-full py-16 ">
      <h4 classname="font-bold text-gray-900 my-4">Register And Be Part of Our Community</h4>
      <p className="text-gray-500 text-sm">Join our community of over 1000+ founders, developers, and tech junkies in general.<br/> Be inspired by people who live to inspire!</p>
      <div className="my-8 md:my-16 lg:32  relative w-full">
        <div className="m-auto">
          <img src={belsoft.vector} className="absolute inset-0 -z-10 top-0 left-0" alt="" /> 
        </div>
        <img src={belsoft.image2} alt="h-8" />
      </div>
      <button className="text-purple-500 text-sm border-2 border-purple-500 bg-white rounded-full px-6 py-2 ">Register Now</button>
    </div>
  )
}

export default Register;