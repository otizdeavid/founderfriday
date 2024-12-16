import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";

const HeroSection = () => {
  return (
    <div className="flex items-center justify-center container mx-auto px-4 pt-36 md:px-8 lg:px-8 w-full relative ">
      <div className=" ">
        <p className="sm:text-xs md:text-xs lg:text-xs font-semibold">Join our premier monthly meetup for startup founders and tech visionaries</p>
        <h2 className="font-bold text-purple-700 text-xl md:text-1.5xl lg:text-4xl mb-8">Connect, Collaborate, Innovate!</h2>
        <p className="md:text-xs sm:text-xs lg:text-lg">Every last friday of the month, we bring together the brighest minds in our local tech ecosystem. Whether you're a seasoned enterpreneur or just starting your journey. Founder's Friday is your launchpad for new ideas, valueable connection, and game-shanging opportunities.</p>
        <button className="text-sm md:text-base lg:text-lg sm:text-xs bg-white px-8 py-2 mt-8 mb-2 rounded-full border text-purple-700 border-purple-700">Register For Our Next Event</button>
        <p className="text-xs font-semibold text-purple-800">Join Us for our next meetup on the 26th of July 2024</p>
        <div className=" flex w-8 h-8 gap-8 mt-8  cursor-pointer">
          <img src={belsoft.elicpse1} alt="" />
          <img src={belsoft.elicpse2} alt="" />
          <img src={belsoft.elicpse3} alt="" />
          <img src={belsoft.elicpse5} alt="" />
        </div>
        <div className="flex items-center gap-4 mt-4">
          <p className="text-xs font-bold ">Become a collaborator today </p>
          <span><img src={belsoft.arrowbox} className="w-1/2 cursor-pointer" alt="" /></span>
        </div>
      </div>
      <div className=" absolute inset-0 -z-10 bg-cover">
          <img src={belsoft.herovector} className="" alt="" />
      </div>
      <img src={belsoft.heroimage}  className="sm:w-1/2 lg:w-1/2" alt="" />
      
    </div>
  )
}

export default HeroSection;