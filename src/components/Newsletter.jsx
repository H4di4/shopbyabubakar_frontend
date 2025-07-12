import React from 'react'

const Newsletter = () => {
  return (
    <div className="relative z-10">
      <div className="max-w-7xl mx-36 px-6 h-24 bg-[#b0dcf9] text-white 
                      flex items-center justify-between 
                      -mb-12 md:-mb-12 ">
        
        <h2 className="text-black font-semibold text-2xl whitespace-nowrap">
          Ready To Get Started?
        </h2>
        
       <input type="email" className="border bg-white text-black px-4 py-2 w-60  rounded font-medium"  placeholder='Write Email'/>
         
        
      </div>
    </div>
  )
}

export default Newsletter
