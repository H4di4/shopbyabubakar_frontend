import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Toolbar from './Toolbar';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Breadcrumb from './Breadcrums';
import { Link } from 'react-router';
import { Squares2X2Icon, Bars3Icon } from '@heroicons/react/24/solid';

// Utility Components
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
  <div className="flex mt-1 mb-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} filled={i < rating} />
    ))}
  </div>
);

// Category Maps
const categorySlugMap = {
  'AEW Belts': 'aew-belts',
  'Boxing': 'boxing',
  'CNC Belts': 'cnc-belts',
  'IWGP Belts': 'iwgp-belts',
  'MLB Championship Belts': 'mlb-championship-belts',
  'NBA Championship Belts': 'nba-championship-belts',
  'NFL Championship Belts': 'nfl-championship-belts',
  'NHL Championship Belts': 'nhl-championship-belts',
  'WWE/WWF/WCW': 'wwe-wwf-wcw',
  'Design Your Custom Belt': 'design-your-custom-belt',
  'Custom Design Ideas': 'custom-design-ideas',
};

const categories = [
  "AEW Belts", "Boxing", "CNC Belts", "IWGP Belts",
  "MLB Championship Belts", "NBA Championship Belts", "NFL Championship Belts",
  "NHL Championship Belts", "WWE/WWF/WCW"
];

const customizedSubcategories = [
  "Design Your Custom Belt", "Custom Design Ideas"
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customizedOpen, setCustomizedOpen] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('best-selling');
  const [selectedCategory, setSelectedCategory] = useState('AEW Belts');

  const fetchProducts = async (category) => {
    setLoading(true);
    try {
      const slug = categorySlugMap[category] || category.toLowerCase().replace(/\s+/g, '-');
      const res = await axios.get(`http://localhost:5000/api/products/category/${slug}`);
      setProducts(res.data);
    } catch (error) {
      console.error('Error fetching products:', error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  return (
    <>
      <Toolbar />

      {/* Breadcrumb */}
      <div className="w-full bg-gray-100 py-2 px-4 mb-4 rounded-sm">
        <Breadcrumb title="Collection" category={selectedCategory} />
      </div>

      <div className="bg-white pt-0 pb-16">
        <div className="w-full mx-auto px-4 flex flex-col md:flex-row gap-6">
          {/* Sidebar */}
          <div className="w-full md:w-1/4 pl-24 p-4 -mt-3">
            <h2 className="text-lg font-medium mb-4 text-darkText uppercase">Our Categories</h2>
            <ul className="space-y-2 text-sm text-[#707070] mt-2">
              {categories.map((category, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer text-[13px] hover:text-blue ${selectedCategory === category ? ' hover:text-blue' : ''}`}
                >
                  {category}
                  <hr className="mt-3 mb-3 w-56" />
                </li>
              ))}

              {/* Customized section */}
              <li className="text-[13px] cursor-pointer">
                <div
                  className="flex justify-between items-center hover:text-blue transition"
                  onClick={() => setCustomizedOpen(!customizedOpen)}
                >
                  <span>Customized</span>
                  <span className="text-lg hover:text-[#707070]">{customizedOpen ? '−' : '+'}</span>
                </div>
                <hr className="mt-2 mb-2" />
                {customizedOpen && (
                  <ul className="ml-4 mt-1 space-y-1">
                    {customizedSubcategories.map((sub, index) => (
                      <li
                        key={index}
                        onClick={() => setSelectedCategory(sub)}
                        className={`hover:text-blue cursor-pointer text-[13px] ${selectedCategory === sub ? 'font-bold text-blue' : ''}`}
                      >
                        {sub}
                        <hr className="mt-2 mb-2" />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            </ul>
          </div>

          {/* Products Column */}
          <div className="w-full md:w-3/5 pl-8">
            <hr className="mb-2" />
            <div className="flex flex-col md:flex-row items-center justify-between w-full mb-4 px-1">
              {/* View toggle and result count */}
              <div className="flex items-center space-x-4 w-full md:w-auto mb-2 md:mb-0">
                <div className="flex space-x-2">
                  <button onClick={() => setViewMode('grid')} className={`p-1 ${viewMode === 'grid' ? 'text-blue' : 'text-gray-400'}`}>
                    <Squares2X2Icon className="h-6 w-6" />
                  </button>
                  <button onClick={() => setViewMode('list')} className={`p-1 ${viewMode === 'list' ? 'text-blue' : 'text-gray-400'}`}>
                    <Bars3Icon className="h-6 w-6" />
                  </button>
                </div>
                <span className="text-[12px] text-[#878787]">
                  Showing 1 - {products.length} of {products.length} results
                </span>
              </div>

              {/* Sort dropdown */}
              <div className="flex items-center space-x-2 text-[12px] text-black w-full md:w-auto">
                <span className="text-[#878787]">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 px-3 py-1 text-sm rounded-sm focus:outline-none"
                >
                  <option value="featured">Featured</option>
                  <option value="best-selling">Best Selling</option>
                  <option value="a-z">Alphabetically, A-Z</option>
                  <option value="z-a">Alphabetically, Z-A</option>
                  <option value="low-high">Price, low to high</option>
                  <option value="high-low">Price, high to low</option>
                  <option value="new-old">Date, new to old</option>
                  <option value="old-new">Date, old to new</option>
                </select>
              </div>
            </div>
            <hr className="mt-2" />

            {/* Product grid/list */}
            {loading ? (
              <p className="text-center text-gray-500">Loading...</p>
            ) : (
              <div className={`${viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-28' : 'flex flex-col space-y-6  mt-3'}`}>
                {products.map((product) => (
                  <Link to={`/product/${product.slug}`} key={product._id}>
                    <div
                      className={`bg-white p-4 border border-gray-300  transition ${viewMode === 'list'
                        ? 'flex space-x-2 h-72 '  // fixed height for list
                        : 'flex flex-col items-start mt-6 -mb-2 h-96 w-64'  // keep original grid styles
                        }`}
                    >
                      {/* Image */}
                      <img
                        src={product.imageUrl?.[0] ? `http://localhost:5000${product.imageUrl[0]}` : '/placeholder.jpg'}
                        alt={product.name}
                        className={viewMode === 'list' ? 'w-72 h-64 object-cover rounded-sm' : 'w-full h-60 mb-3 object-cover rounded-sm'}
                      />

                      {/* Info */}
                      <div className={viewMode === 'list' ? 'flex flex-col justify-center flex-1' : ''}>
                        {/* Title */}
                        <h3 className="text-[14px] font-medium  text-darkText hover:text-blue">{product.name}</h3>

                        {/* Price */}
                        <div className="flex space-x-4 mt-1 mb-2">
                          {product.discountPrice && (
                            <p className="text-[14px] font-medium text-gray-500 line-through">
                              ${product.discountPrice.toFixed(2)}
                            </p>
                          )}
                          <p className="text-[14px] font-semibold text-blue">${product.price.toFixed(2)}</p>
                        </div>
                        {/* Description below price (only in list view) */}
                        {viewMode === 'list' && (
                          <p className="text-sm text-[#707070] line-clamp-3 mt-3">{product.description}</p>
                        )}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}

          </div>
        </div>
      </div>

      <Newsletter />
      <Footer />
    </>
  );
};

export default Products;
