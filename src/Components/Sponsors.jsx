import React from "react";

const Sponsors = () => {
  return(
    <div className="container sm:py-4 md:py-8 lg:py-16 lg:mt-32 px-6 md:px-20 lg:px-32 w-full m-auto gap-8">
      <p className="text-purple-700 font-bold lg:text-xl md:text-sm sm:text-xs pt-4" >Sponsor The Next Friday</p>
      <h2 className="font-bold lg:text-4xl text-gray-800 mb-4 text-center pt-4"> Why Sponsor<br /> Founders Friday?</h2>
      <div className=" flex items-center justify-between space-x-8 ">
        <div className="border-2 border-purple-500 bg-white p-4 rounded-xl flex gap-4 my-8 md:max-w-md lg:max-w-lg">
          <div className=" items-center space-y-4 ">
            <div className="w-48 h-48 bg-purple-400 rounded-full border-2 border-purple-400 sm:max-w-sm md:max-w-md lg:max-w-lg">
              <h3 className="text-center pt-9 text-xs font-bold text-black pb-2">Networking <br />Opportunities</h3>
              <p className="text-center text-sm text-gray-700">Connect with industry learders, founders, and potential partners.</p>
            </div>
            <div className="w-48 h-48 bg-purple-300 rounded-full border-2 border-purple-400 sm:max-w-sm md:max-w-md lg:max-w-lg">
              <h3 className="text-center pt-9 text-xs font-bold text-black pb-2">Brand <br /> Association</h3>
              <p className="text-center text-sm text-gray-700">Align your brand with innovation and enterpreneurial success.</p>
            </div>
          </div>
          <div className="items-center space-y-4">
            <div className="w-48 h-48 bg-purple-300 rounded-full border-2 border-purple-400 sm:max-w-sm md:max-w-md lg:max-w-lg">
              <h3 className="text-center pt-9 text-xs font-bold text-black pb-2">Community <br /> Impact</h3>
              <p className="text-center text-sm text-gray-700">Support the growth and development of the <br /> startup ecosystem.</p>
            </div>
            <div className="w-48 h-48 bg-purple-400 rounded-full border-2 border-purple-400 sm:max-w-sm md:max-w-md lg:max-w-lg">
              <h3 className="text-center pt-9 text-xs font-bold text-black pb-2">Visibility</h3>
              <p className="text-center text-sm text-gray-700">Gain exposure to a targeted audience of young professionals and enterpreneurs..</p>
            </div>
          </div>
        </div>
        <div className=" ">
          <p className="font-bold text-gray-600">How To Sponsor</p>
          <p className="text-sm text-gray-700 font-semibold italic">Read to make an impact?</p>
          <p>Fill out the form below or contact us at | contact email/ phone number to learn more about how you can sponsor the next Founders Friday</p>
          <form action="">
            <div className="flex space-x-4 ">
              <div className=" w-full md:w-1/2 text-left font-semibold">Name 
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Full name" required name="Full name" />
              </div>
              <div className="text-left w-full md:w-1/2 font-semibold">Company(optional)
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" placeholder="Company name" required name="Company name" />
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="w-full md:w-1/2 text-left font-semibold">Email
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" placeholder="Email address" required name="Email address" />
              </div>
              <div className="w-full md:w-1/2 text-left font-semibold">Phone
                <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="number" placeholder="Phone number" required name="Phone number" />
              </div>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}
export default Sponsors; 