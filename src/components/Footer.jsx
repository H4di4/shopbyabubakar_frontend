import React from 'react'
import assets from '../assets/assets'

const Footer = () => {
  return (
    <>
      <footer className="bg-black text-white py-10 sm:py-14 min-h-[400px] relative">
        <div className="max-w-7xl mx-4 sm:mx-8 md:mx-36 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left h-48 mt-10">

          <div>
            <h2 className="text-3xl font-semibold mb-2 uppercase">
              <span className="text-[#b0dcf9]">Shop by</span> <br /> Abubakar
            </h2>
            <p className="text-xs text-gray-300 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h3 className="font-medium mb-2 uppercase text-[15px]">Follow us Social Media</h3>
            <div className="flex justify-center md:justify-start gap-2 mt-6">
              {/* Social Icons */}
              <a href="#" className="p-1 text-center border border-[#0172b1] border-opacity-[20%] w-8 h-8 hover:bg-white hover:text-[#1877F2] transition">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="p-1  text-center border border-[#0172b1] border-opacity-[20%] w-8 h-8 hover:bg-white hover:text-[#1DA1F2] transition">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="p-1  text-center border border-[#0172b1] border-opacity-[20%] w-8 h-8  hover:text-[#E4405F] hover:bg-white transition">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="p-1 text-center  border border-[#0172b1] border-opacity-[20%] w-8 h-8 hover:bg-white hover:text-[#0A66C2] transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-medium">Contact us</h2>
            <hr className="border-white mt-2 w-10 border-t-2 " />

            <div className="flex items-center gap-3 mb-2 mt-8 cursor-pointer">
              <i className="fas fa-phone text-white text-sm"></i>
              <span className="text-sm text-gray-300">+92-332-7756-002</span>
            </div>
            <hr className="border-gray-800 border-t border-opacity-50  w-60" />

            <div className="flex items-center gap-3 mb-2 mt-2 cursor-pointer">
              <i className="fas fa-envelope text-white text-sm"></i>
              <span className="text-sm text-gray-300">astheticcollection@gmail.com</span>
            </div>
            <hr className="border-gray-800 border-t border-opacity-50  w-60" />

            <div className="flex items-center gap-3 mt-2 cursor-pointer">
              <i className="fas fa-map-marker-alt text-white text-sm"></i>
              <span className="text-sm text-gray-300 mb-2">Muhammad Pura Near Rahbars Academy Sialkot.</span>
            </div>
            <hr className="border-gray-800 border-t border-opacity-50  w-60 " />
          </div>

          <div>
            <h2 className="text-xl font-medium pl-7">Quick Links</h2>
            <hr className="border-white mt-2 w-10 ml-7 border-t-2 " />
            <ul className="space-y-2 text-sm text-gray-300 mt-4 pl-7">
              <li><a href="#"><span className="text-[20px]">•  </span> Home</a></li>
              <li><a href="#"><span className="text-[20px]">•  </span>About</a></li>
              <li><a href="/collections"><span className="text-[20px]">•  </span>Product</a></li>
              <li><a href="#"><span className="text-[20px]">•  </span>Inquiry</a></li>
              <li><a href="#"><span className="text-[20px]">•  </span>Site Map</a></li>
              <li><a href="#"><span className="text-[20px]">•  </span>Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-normal">Our Categories</h2>
            <hr className="border-white mt-2 w-10 border-t-2 " />
            <ul className="space-y-2 text-sm text-gray-300 mt-4">
              <li><a href="#"><span className="text-[20px]">• </span> Championship Belts Collection</a></li>
              <li><a href="#"><span className="text-[20px]"> • </span>Design Your Custom Belt</a></li>
              <li><a href="#"><span className="text-[20px]"> • </span>Fashion Jackets</a></li>
            </ul>
          </div>

          <div className="absolute right-4 bottom-6 md:right-40 md:flex flex-row gap-x-1 px-2 py-1">
            <img src={assets.patment_icon1} alt="" className="w-12 h-6 md:w-16 md:h-8 cursor-pointer" />
            <img src={assets.patment_icon2} alt="" className="w-12 h-6 md:w-16 md:h-8 cursor-pointer" />
            <img src={assets.patment_icon3} alt="" className="w-12 h-6 md:w-16 md:h-8 cursor-pointer" />
            <img src={assets.patment_icon4} alt="" className="w-12 h-6 md:w-16 md:h-8 cursor-pointer" />
            <img src={assets.patment_icon5} alt="" className="w-12 h-6 md:w-16 md:h-8 cursor-pointer" />
          </div>
        </div>
      </footer>

      {/* Footer Bottom */}
      <div className="bg-[#070707] text-center text-slate-200 text-xs py-4 ">
        Copyright © 2025 <span className="text-white font-medium">Shop By Abubakar</span>. All Rights Reserved.
      </div>
    </>
  )
}

export default Footer
