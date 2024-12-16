import React from "react";
import { belsoft } from "../assets/Belsoftasset/assets";

  const reactBelsoft = ["Kaduna", "Abuja", "Kano"];

  function getRandom(max) {
    return Math.floor(Math.random() * (max + 1));
  }





const Events = () => {
   const belSoft = reactBelsoft[getRandom(2)];
  
  return (
    <div className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden" style={{backgroundImage: "url('IMG_2647 1.png')"}}>
      
      <div className="px-6 py-4 md:px-20 lg:px-32 flex items-center justify-between gap-16">
        <div className="">
          <p className="text-white text-4xl font-medium pb-4">Founders Friday is coming to </p>
          <h3 className="text-purple-400 text-4xl font-extrabold pb-4">{belSoft}</h3>
          <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat tempora earum ipsam. Dolore, eum quisquam distinctio quas sapiente aliquid tempore ea. Ipsum, quod temporibus vitae quisquam perspiciatis ad laborum pariatur?Quo nulla quia nostrum laboriosam quae. Eaque quis alias earum, atque labore ratione animi vitae aspernatur, modi dolo.</p> <br />
          <a className="border border-purple-400 text-purple-400 px-8 py-3 rounded-full bg-transparent " href="">Register</a>
        </div>
        <img src={belsoft.logoB}  className="w-64 h-64"alt="" />
      </div>
    </div>
  )
}

export default Events;