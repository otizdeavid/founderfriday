import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";

const Conference = () => {
  return (
    <div className="flex w-full items-center justify-center px-4 py-8 gap-8">
      <img src={belsoft.conference} className="w-full sm:w-1/2 max-w-lg" alt="" />
      <div>
        <p className="font-bold text-black my-4"> At Founders Friday, Every Friday is a learning <br /> Experience</p>
        <p className="mb-4 text-sm text-gray-600">Join us in our mission to transform ideas into impact and shape the future of <br /> Nigeria's startup landscape</p>
        <button className="border rounded-full py-1 px-5 bg-purple-500 text-white"> Register </button>
      </div>
    </div>
  )
}

export default Conference;