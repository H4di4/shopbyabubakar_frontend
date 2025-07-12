import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useCart } from '../context/CartContext'; // <-- Import hook

const Toolbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart(); // <-- Access cart items

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Collection', path: '/collection' },
    { name: 'Customized', path: '/customized' },
    { name: 'Payment Method', path: '/payment' },
    { name: 'Contact Us', path: '/contact' },
  ];

  // Calculate total quantity
  const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-200 h-[99px]">
      <div className="relative max-w-7xl mx-auto px-4 py-8 flex items-center justify-between">
        {/* Logo Left */}
        <div className="flex-shrink-0 z-20">
          <Link to="/" className="text-xl font-bold text-black">
            Shop <span className="text-blue">Abubakar</span>
          </Link>
        </div>

        {/* Nav Links Center */}
        <ul className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[13px] font-medium text-[#292929] space-x-8 uppercase z-10">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-blue-600 transition duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Icons Right */}
        <div className="flex items-center space-x-6 z-20">
          <button className="text-black hover:text-blue transition">
            <FiSearch size={25} strokeWidth={1} />
          </button>

          {/* Cart Icon */}
          <button className="text-black hover:text-blue transition relative">
            <HiOutlineShoppingBag size={25} strokeWidth={1} />
            {totalQty > 0 && (
              <span className="absolute -top-5 -right-2 bg-blue-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {totalQty}
              </span>
            )}
          </button>

          {/* Mobile Menu */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 space-y-2 text-sm font-medium text-gray-800 border-t">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="block py-2 hover:text-blue-600"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Toolbar;
