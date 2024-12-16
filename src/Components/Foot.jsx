import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";


const Foot = () => {
  return (
    <div className=" px-4 w-full py-8 pb-10 border border-t-2 border-b-2 md:px-8 lg:16">
      <img src={belsoft.title} className="w-32" alt="" />
      <div className=" text-center">
        <p className="font-bold text-xl text-gray-600 mb-4">Want To Be A Part Of Abuja's Biggest Tech  <br />Community?</p>
        <a href="" className="text-sm bg-white px-8 py-2 mt-8 mb-2 rounded-full border text-purple-700 border-purple-700">Register For Our Next Event</a>
      </div>
    </div>
  )
}

export default Foot;