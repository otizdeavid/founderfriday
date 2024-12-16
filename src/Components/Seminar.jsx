import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";

const Seminar = () =>{
  return (
    <div className=" relative container py-16 px-6 md:px-20 lg:px-32 w-full gap-8 ">
        <div className="flex">
          <img src={belsoft.herovector} className="absolute max-w-[100%] bottom-2 left-8 inset-0 -z-10" alt="" />
          <div className="">
              <p className="text-left font-bold text-purple-700 my-4">Founder's Friday</p>
              <h2 className="font-bold lg:text-4xl md:text-3xl sm:text-2xl text-gray-800 my-8">What Happens At <br /> Founder Friday</h2>
              <p className="sm:text-xs md:text-sm lg:text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quo amet quam vitae sed vel fugiat ut molestias deserunt, non sequi maxime natus perferendis sapiente provident rerum. Iure, aspernatur numquam?
              Corrupti velit dolore culpa dignissimos quibusdam possimus? Ex consectetur maiores magni eum dolore reiciendis voluptatum qu
              </p>
              <button className="bg-purple-700 text-white px-5 py-1 rounded mt-8 ">Learn More</button>
          </div>
          <img src={belsoft.seminar} className="sm:w-1/2 max-w-lg pt-8" alt="" />
        </div>
    </div>
  )
}

export default Seminar;