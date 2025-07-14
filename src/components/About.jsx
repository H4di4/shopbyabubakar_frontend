import React from 'react';
import assets from '../assets/assets';

const About = () => {
  return (
    <div className="bg-white py-16 mt-6">
      <div className="max-w-7xl mx-36 px-2 grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        
        {/* Left Side - Text */}
        <div>
          <p className="text-[#b0dcf9] text-sm font-normal uppercase tracking-wide mb-2">
            Shop By Abubakar
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#181616] mb-6 tracking-tight">
            We’re Experienced in <br /> The Field
          </h2>

          <p className="text-black text-sm md:text-base mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id turpis id nisi convallis consequat.
          </p>
          <p className="text-black text-sm md:text-base mb-6 leading-relaxed">
            Aenean vel odio a magna pharetra lobortis. Vivamus vel libero blandit, malesuada orci sed, tristique augue.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-black">28+</h3>
              <p className="text-sm text-black font-bold uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-black">879+</h3>
              <p className="text-sm text-black font-bold uppercase tracking-wider mt-1">Project Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-black">42+</h3>
              <p className="text-sm text-black font-bold uppercase tracking-wider mt-1">Best Partners</p>
            </div>
          </div>

          <button className="bg-[#b0dcf9] text-black px-5 py-2 text-sm sm:text-base w-full sm:w-36 mt-6">
            Read More
          </button>
        </div>

        {/* Right Side - Images */}
        <div className="flex flex-col gap-4 h-full">
          {/* Top Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <img src={assets.About_1} alt="About 1" className="w-full sm:w-32 h-32 object-cover" />
            <img src={assets.About_2} alt="About 2" className="w-full sm:flex-1 h-60 object-cover" />
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col sm:flex-row gap-3">
            <img src={assets.About_3} alt="About 3" className="w-full sm:flex-1 h-48 object-cover" />
            <img src={assets.About_4} alt="About 4" className="w-full sm:w-48 h-64 object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
