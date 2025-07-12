import React from 'react';
import assets from '../assets/assets';

const Collection = () => {
    const collections = [
        {
            title: 'Championship Belts Collection',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum.',
            img: assets.Collection_1,
        },
        {
            title: 'Jackets',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum.',
            img: assets.Collection_2,
        },
        {
            title: 'Design Your Own Custom Belts',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum.',
            img: assets.Collection_3,
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-36 px-2 ">
                <h2 className="text-3xl font-medium uppercase text-left text-[#181616] mb-1">
                    Our Collection
                </h2>
                <p className="text-sm text-black mb-10 text-left">
                    Customizable Championship Belts For Any Achievements
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
                    {collections.map((col, idx) => (
                        <div
                            key={idx}
                            className="group flex flex-col bg-white overflow-hidden transform rounded-md transition duration-300 hover:scale-125 hover:bg-blue hover:rounded-md"

                        >
                            {/* Text content */}
                            <div className="p-6 flex flex-col min-h-[220px] justify-between">
                                <div>
                                    <p className="text-left text-xl text-black font-normal transition-all duration-150 group-hover:font-bold group-hover:text-4xl ">
                                        0{idx + 1}
                                    </p>
                                    <hr className="w-6 border-gray-600  mb-2 group-hover:border-none" />
                                    <h3 className="text-2xl font-medium uppercase text-left mb-2 text-[#181616]  transition-all duration-300 delay-100">
                                        {col.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-800 text-left">
                                    {col.desc}
                                </p>
                            </div>

                            {/* Image */}
                            <div className="w-full h-56 overflow-hidden transition-all duration-300 group-hover:p-4">
                                <img
                                    src={col.img}
                                    alt={col.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Collection;
