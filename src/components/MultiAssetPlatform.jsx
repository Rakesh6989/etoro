// components/MultiAssetPlatform.js
import React from 'react';
import Image from 'next/image';
import { Info, CircleDollarSign } from 'lucide-react';
const MultiAssetPlatform = () => {
    return (
        <div className=" py-16 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Multi-asset platform
                </h2>
                <p className="text-base md:text-lg text-gray-600 mb-2">
                    eToro offers 7,000+ financial instruments across various classes, such as stocks, crypto and more.
                </p>
                <p className="text-base md:text-lg text-gray-600 mb-12">
                    To explore more visit the <a href="#" className="text-green-500 hover:underline">Trade Markets Page.</a>
                </p>

                {/* Image Section */}
                <div className="relative flex justify-center items-center my-12">
                    {/* Main Screenshot - Ensure you have this image in your public folder */}
                    <div className="relative w-full max-w-6xl h-auto z-10">
                        <Image
                            src="/multiassetsgoogle.jpg"
                            alt="eToro Watchlist Screenshot"
                            width={1024}
                            height={600}
                            layout="responsive"
                            className="rounded-lg shadow-2xl"
                        />
                    </div>

                    <div className="absolute top-10 left-0 transform -translate-x-1/4 -translate-y-1/4 z-20 hidden md:block">
                    </div>

                    <div className="absolute bottom-10 left-1/4 transform -translate-x-1/2 translate-y-1/2 z-20 hidden md:block">

                    </div>
                </div>
                <div className=" text-center ">
                    <div className=" flex items-center gap-3">
                        <span>
                            <CircleDollarSign className="w-12 h-12 text-gray-400" />

                        </span>
                        <p className="text-[#777] text-lg text-justify">
                            To enable eToro clients to use advanced trading features, such as leverage and short (SELL) orders, and to offer financial instruments that normally cannot be traded, such as indices and commodities, eToro utilises Contracts for Difference (CFDs). To read more about CFD trading, <a href="#" className="text-green-500 hover:underline">click here.</a>
                        </p>
                    </div>
                    <div className="flex pt-5 gap-3 items-center">
                        <span className="text-2xl font-bold"><Info  className="w-12 h-12 text-gray-400" /></span>
                        <p className="text-[#777] text-lg text-justify">
                            Additionally, to enable traders and investors direct access to the market, some asset classes, such as stocks and cryptoassets, offer direct ownership of the underlying assets, which we buy and hold in each client's name.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultiAssetPlatform;