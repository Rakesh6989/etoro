// components/DepositsSection.js
import React from 'react';
import Image from 'next/image';

const SmartPortfolio = () => {
    return (
        <div className="bg-white py-16 Container-Div ">
            <div className="container mx-auto ">
                <div className="flex flex-col lg:flex-row items-center justify-around lg:space-x-12">

                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Make sure to place your image file in the /public directory */}
                        <div className="relative w-full  h-auto">
                            <Image
                                src="/sec-7-img.png"
                                alt="eToro app and cards"
                                width={700}
                                height={800}
                                layout="responsive"
                                objectFit="contain"
                                className="transform w-full hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            Smart Portfolios

                        </h2>
                        <p className="text-gray-600 mb-4">
                            Another unique product offered by eToro is Smart Portfolios, which are ready-made, investment strategies, offering thematic investment, such as medical cannabis, driverless cars, and people-based portfolios.


                        </p>

                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                            Start Copying Other Traders
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default SmartPortfolio;