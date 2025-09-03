// components/DepositsSection.js
import React from 'react';
import Image from 'next/image';

const CopyTrader = () => {
    return (
        <div className="bg-white py-16 Container-Div ">
            <div className="container mx-auto ">
                <div className="flex flex-col lg:flex-row items-center justify-around lg:space-x-12">
                    {/* Left Column (Text Content) */}
                    <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                            CopyTrader

                        </h2>
                        <p className="text-gray-600 mb-4">
                            CopyTrader, enables traders to replicate other traders’ actions in real time. To encourage top traders to get copied, eToro created the Popular Investor program.            </p>

                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                       Start Copying Other Traders
                        </button>
                    </div>

                    {/* Right Column (Image) */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        {/* Make sure to place your image file in the /public directory */}
                        <div className="relative w-full  h-auto">
                            <Image
                                src="/dashlau.png"
                                alt="eToro app and cards"
                                width={800}
                                height={800}
                                layout="responsive"
                                objectFit="contain"
                                className="transform hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CopyTrader;