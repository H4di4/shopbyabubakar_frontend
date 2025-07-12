import React from 'react';
import assets from '../assets/assets';

const products = [
  {
    id: 1,
    title: 'Championship Belts Collection',
    img: assets.Product_1,
    rating: 4,
    price: '150.00',
    discount: '221.00'
  },
  {
    id: 2,
    title: 'Championship Belts Collection',
    img: assets.Product_1,
    rating: 5,
    price: '150.00',
    discount: '221.00'
  },
  {
    id: 3,
    title: 'Championship Belts Collection',
    img: assets.Product_1,
    rating: 3,
    price: '150.00',
    discount: '221.00'
  },
  {
    id: 4,
    title: 'Championship Belts Collection',
    img: assets.Product_1,
    rating: 4,
    price: '150.00',
    discount: '221.00'
  },
];

// Star component
const Star = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`w-4 h-4 ${filled ? 'fill-black' : 'fill-white'} stroke-black`}
    viewBox="0 0 24 24"
    strokeWidth="1"
  >
    <path d="M12 .587l3.668 7.571 8.332 1.151-6.001 5.854 1.417 8.26L12 18.896l-7.416 4.527 1.417-8.26-6.001-5.854 8.332-1.151z" />
  </svg>
);

const StarRating = ({ rating }) => (
  <div className="flex mt-1 mb-1 ">
    {[...Array(5)].map((_, i) => (
      <Star key={i} filled={i < rating} />
    ))}
  </div>
);

const FeatureProducts = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-36 px-2">
        <h1 className="uppercase font-medium text-3xl  mb-1 text-center">Feature Products</h1>
        <p className="text-blue text-sm mb-8 text-center">Take Your Appreciation to the Next Level</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white text-left p-2 flex flex-col items-start justify-between"
            >
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-60 object-cover rounded-sm mb-3"
              />
              <h3 className="text-sm font-medium mb-1">{product.title}</h3>
              <hr className="w-full border-black mb-2" />
              <div className='w-full flex justify-center'>
                <StarRating rating={product.rating} />

              </div>
              <div className="flex flex-row justify-center space-x-5 w-full mt-2">
                <p className="text-sm font-medium text-black line-through">
                  ${product.discount}
                </p>
                <p className="text-sm font-medium  text-black">
                  ${product.price}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
