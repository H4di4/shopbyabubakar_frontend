import React from 'react'
import assets from '../assets/assets'

const Instagram = () => {
  const images = [assets.Ig_1, assets.Ig_2, assets.Ig_3, assets.Ig_4, assets.Ig_5, assets.Ig_6, assets.Ig_7, assets.Ig_8]

  return (
    <div className="flex flex-col items-center py-8 px-0 w-full mb-10">
      {/* Text on top */}
      <div className="mb-6 text-center w-full">
        <a href="https://www.instagram.com/shopbyabubakar/?source=omni_redirect" target='_blank' className='text-blue'>@shopbyabubakar43</a>
        <h2 className="text-black font-medium text-2xl tracking-wider uppercase">
          Follow On Instagram
        </h2>
      </div>

      {/* Images grid full width, no gaps */}
      <div className="w-full grid grid-cols-8 gap-0">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Instagram ${index + 1}`}
            className="w-full h-auto object-cover"
            style={{ aspectRatio: '1 / 1' }}
          />
        ))}
      </div>
    </div>
  )
}

export default Instagram
