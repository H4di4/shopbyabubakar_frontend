import React from 'react';
import assets from '../assets/assets';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import TwoLineMenuSVG from '../assets/icons/TwoLinesMenu.jsx';

const Navbar = () => {
  return (
    <div className="flex h-[650px] w-full relative">
      {/* Left side - 9% white bg */}
      <div className="w-[6%] bg-white flex flex-col relative">
        {/* Text at the top */}
        <p className="font-medium absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap tracking-tight -rotate-90">
          SHOP ABUBAKAR
        </p>

        {/* Icon centered vertically and horizontally */}
        <div className="flex-grow flex items-center justify-center">
          <TwoLineMenuSVG />
        </div>
      </div>

      {/* Middle side - image, 60% */}
      <div
        className="w-[56%] bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.headerImg})` }}
      ></div>

      {/* Right side - blue bg */}
      <div className="flex-1 bg-[#b0dcf9] flex flex-col justify-center pl-4 relative">
        {/* Icons container at top right */}
        <div className="absolute top-4 right-4 mt-2 flex space-x-7 text-black text-2xl cursor-pointer pr-4">
          <HiOutlineShoppingBag />
          <AiOutlineHeart />
        </div>

        <div className="flex flex-col">
          <h1 className="text-black uppercase text-4xl font-bold leading-10 mb-4">
            championship <br /> belts <br /> collection
          </h1>
          <hr className="border-black mt-2 w-20" />
          <p className="uppercase text-black font-medium text-sm mt-2">
            Design your custom belt
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
