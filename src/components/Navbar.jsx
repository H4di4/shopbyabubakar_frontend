import React from 'react';
import assets from '../assets/assets';
import { AiOutlineHeart } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import TwoLineMenuSVG from '../assets/icons/TwoLinesMenu.jsx';

const Navbar = () => {
  return (
    <div className="flex flex-col lg:flex-row h-auto lg:h-[650px] w-full relative">

      {/* Left side - 9% white bg */}
      <div className="w-full lg:w-[6%] bg-white flex flex-col lg:relative">
        {/* Mobile layout: flex row */}
        <div className="flex lg:hidden items-center justify-between px-4 py-3 space-x-3">
          <div className="flex items-center space-x-2">
            <TwoLineMenuSVG className="w-6 h-6" />
            <p className="text-sm font-medium tracking-tight">SHOP ABUBAKAR</p>
          </div>
          <div className="flex items-center space-x-4 text-xl">
            <HiOutlineShoppingBag />
            <AiOutlineHeart />
          </div>
        </div>

        {/* Desktop layout: original vertical stack */}
        <p className="hidden lg:block font-medium absolute top-20 left-1/2 -translate-x-1/2 whitespace-nowrap tracking-tight -rotate-90">
          SHOP ABUBAKAR
        </p>

        <div className="hidden lg:flex-grow lg:flex lg:items-center lg:justify-center">
          <TwoLineMenuSVG />
        </div>
      </div>



      {/* Middle side - image, 60% */}
      <div
        className="w-full lg:w-[56%] h-[300px] lg:h-auto bg-cover bg-center"
        style={{ backgroundImage: `url(${assets.headerImg})` }}
      ></div>

      {/* Right side - blue bg */}
      <div className="w-full lg:flex-1 bg-[#b0dcf9] flex flex-col justify-center pl-4 relative p-6">
        {/* Icons container at top right */}
        <div className="hidden lg:flex absolute top-4 right-4 mt-2 space-x-4 text-2xl pr-4">
          <HiOutlineShoppingBag />
          <AiOutlineHeart />
        </div>


        <div className="flex flex-col">
          <h1 className="text-black uppercase text-2xl sm:text-3xl md:text-4xl font-bold leading-snug md:leading-10 mb-4">

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
