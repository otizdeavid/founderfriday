import React from 'react';
import { belsoft } from '../assets/Belsoftasset/assets';

const Attendant = ( ) => {
  return (
    <div className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden">
      <h3 className='text-center font-bold mb-4 text-2xl'>What Do Our Attendees Have To Say?</h3>
      <p className=" text-center text-sm ">Well See For Yourself</p>

      <div className="flex justify-end items-center mb-8">
        <button className=" p-3  bg-white border-2 border-purple-600 rounded-full mr-2" aria-label="Previous Project">
          <img src={belsoft.arrowleft} alt="" />
        </button>
        <button className=" p-3 bg-white border-2 border-purple-600 rounded-full mr-2" aria-label="Previous Project">
          <img src={belsoft.arrowright} alt="" />
        </button>
      </div>
      <div className='flex items-center justify-between gap-8'>
        <div className=" flex items-center justify-center flex-col">
          <img src={belsoft.testimonial} className='w-32 h-32' alt="" />
          <h4 className='font-bold text-sm'>Mr Belba Ngoy</h4>
          <p className='text-center text-sm text-gray-400'>Always a remarkable experience for my team and myself.</p>
        </div>
        <div className=" flex items-center justify-center flex-col">
          <img src={belsoft.testimonial} className='w-32 h-32' alt="" />
          <h4 className='font-bold text-sm'>Mr Belba Ngoy</h4>
          <p className='text-center text-sm text-gray-400'>Always a remarkable experience for my team and myself.</p>
        </div>
        <div className=" flex items-center justify-center flex-col">
          <img src={belsoft.testimonial} className='w-32 h-32' alt="" />
          <h4 className='font-bold text-sm'>Mr Belba Ngoy</h4>
          <p className='text-center text-sm text-gray-400'>Always a remarkable experience for my team and myself.</p>
        </div>
      </div>

    </div>
  )
}

export default Attendant;