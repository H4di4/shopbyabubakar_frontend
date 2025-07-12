import React from 'react'
import { FaStar } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Review = () => {
  return (
    <div className="bg-white py-16 px-2 mt-2 mb-2">
      <div className="max-w-7xl mx-36 px-2 grid md:grid-cols-2 gap-6 items-center relative">

        {/* Left Arrow (aligned with left margin) */}
        <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 hidden md:block">
          <IoIosArrowBack className="text-[#949494] text-3xl mr-2" />
        </div>

        {/* Left: Text Content */}
        <div className="flex flex-col md:items-start items-center text-center md:text-left">
          <h2 className="text-6xl md:text-4xl font-normal text-[#181616] mb-8">
            What Our <span className="text-[#b0dcf9] font-bold">Client Say?</span>
          </h2>
          <p className="text-black mb-4 text-sm md:text-base max-w-none ">
            Working with Shop By Abubakar was a fantastic experience. The quality of the products, attention to detail, and customer support exceeded our expectations!
          </p>
          <div className="flex justify-center md:justify-start gap-2">
            {[...Array(5)].map((_, index) => (
              <FaStar key={index} className="text-blue-500 stroke-blue-500 fill-transparent" />
            ))}
          </div>
        </div>

        {/* Right: Image + Arrow aligned to far right */}
        <div className="flex justify-end items-center gap-6">
          {/* Reviewer Info */}
          <div className="flex flex-col items-center">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Client"
              className="w-36 h-36 rounded-full object-cover mb-2"
            />
            <h4 className="text-lg font-normal text-[#737373] tracking-tighter">Sarah Johnson</h4>
            <p className="text-xs text-[#b0dcf9] tracking-tighter">Managing Director</p>
          </div>

          {/* Right Arrow */}
          <div>
            <IoIosArrowForward className="text-[#949494] text-3xl ml-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
