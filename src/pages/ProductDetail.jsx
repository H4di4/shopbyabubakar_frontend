import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Toolbar from '../components/Toolbar';
import Footer from '../components/Footer';
import Breadcrumb from '../components/Breadcrums';
import { useCart } from '../context/CartContext';
import { FaFacebook, FaTwitter, FaGoogle, FaPinterestP } from 'react-icons/fa';
import assets from '../assets/assets';



const ProductDetail = () => {
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [qty, setQty] = useState(1);
    const { addToCart } = useCart();


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/products/slug/${slug}`);

                setProduct(res.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, [slug]);

    if (!product) return <p className="text-center py-20">Loading product...</p>;

    return (
        <>
            <Toolbar />
            <div className="w-full bg-gray-100 py-2 px-4 mb-4 rounded-sm">
                <Breadcrumb title="Product Detail" category={product.category} />
            </div>

            <div className="max-w-6xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 gap-10 -mt-8">
                {/* Left: Image */}
                <img
                    src={`http://localhost:5000${product.imageUrl?.[0]}`}
                    alt={product.name}
                    className="w-full h-3/4 object-cover "
                />

                {/* Right: Info */}
                <div>
                    <h1 className="text-[18px] font-medium text-darkText mb-6">{product.name}</h1>

                    <div className="flex space-x-3 items-center mb-3">
                        {product.discountPrice && (
                            <span className="text-[14px] text-gray-500 line-through">${product.discountPrice}.00</span>
                        )}
                        <span className="text-[14px] font-bold text-[#24bbdb]">${product.price}.00</span>

                    </div>
                    <hr className='mb-2' />
                    <p className="text-sm text-[#707070] mb-6 tracking-widest leading-loose line-clamp-3">{product.description}</p>

                    {/* Quantity + Cart + Heart on same row */}
                    <div className="flex items-center space-x-3 mb-4 w-3/4">
                        {/* Quantity Selector */}
                        <div className="flex items-center border border-gray-300 rounded-sm">
                            <button
                                onClick={() => setQty((q) => (q > 1 ? q - 1 : 1))}
                                className="px-3 py-1 text-gray-700 hover:bg-gray-200"
                            >
                                −
                            </button>
                            <span className="px-4">{qty}</span>
                            <button
                                onClick={() => setQty((q) => q + 1)}
                                className="px-3 py-1 text-gray-700 hover:bg-gray-200"
                            >
                                +
                            </button>
                        </div>

                        {/* Add to Cart */}
                        <button onClick={() => addToCart(product, qty)} className="flex-1 text-[#86cfff]  border-[#86cfff] border-2 font-semibold hover:bg-[#86cfff] hover:text-white py-2 rounded-sm text-sm uppercase">
                            Add to Cart
                        </button>

                        {/* Heart Button */}
                        <button className="w-10 h-10 flex items-center justify-center border-2 border-[#86cfff] text-[#86cfff] hover:bg-[#86cfff] hover:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21.364l-7.682-7.682a4.5 4.5 0 010-6.364z" />
                            </svg>
                        </button>
                    </div>


                    {/* Buy it now button - full width matching the above */}
                    <button className="w-3/4 text-white bg-[#86cfff] h-12 font-semibold hover:bg-darkText py-2 uppercase text-sm transition">
                        Buy it now
                    </button>
                    {/* Share Section */}

                    <div className="w-3/4 mt-6 flex items-center space-x-4">
                        <p className="text-[#555] font-medium text-[14px] mb-0">Share:</p>
                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center border rounded-full border-gray-400 text-gray-300 hover:bg-[#86cfff] hover:text-white transition"
                        >
                            <FaFacebook size={16} />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center border rounded-full border-gray-400 text-gray-300 hover:bg-[#86cfff] hover:text-white transition"
                        >
                            <FaTwitter size={16} />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center border rounded-full border-gray-400 text-gray-300 hover:bg-[#86cfff] hover:text-white transition"
                        >
                            <FaGoogle size={16} />
                        </a>

                        <a
                            href="#"
                            className="w-9 h-9 flex items-center justify-center border rounded-full border-gray-400 text-gray-300 hover:bg-[#86cfff] hover:text-white transition"
                        >
                            <FaPinterestP size={16} />
                        </a>
                    </div>
                    {/* <div className='mt-5'>
                        <hr className='mb-3 w-12'/>
                        <img src={assets.patment_icon1} alt="" className='w-15 h-8'/>
                        
                    </div> */}
                    

                </div>

            </div>
            <div className='-mt-8 flex flex-col justify-between items-center mb-32'>
                <hr className='w-[85%] ' />
                <p className='text-[#484848] font-medium text-[18px] text-center mt-6'>Description</p>
                <div className='text-[#707070] flex flex-col justify-center items-start px-24 py-4 mt-8'>


                    <p className='leading-loose tracking-wider text-[14px]'>{product.description}</p>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
