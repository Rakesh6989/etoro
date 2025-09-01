// components/DepositsSection.js
import React from 'react';
import Image from 'next/image';

const DepositsSection = () => {
  return (
    <div className="bg-white py-16 ">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center justify-around lg:space-x-12">
          {/* Left Column (Text Content) */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Deposits, withdrawals and fees
            </h2>
            <p className="text-gray-600 mb-4">
              You can **deposit**, **hold** and **withdraw** using both an eToro USD account and an eToro GBP or EUR account*.
            </p>
            <p className="text-gray-600 mb-4">
              Deposits made in the same currency as the eToro account you’re using, are free.
            </p>
            <p className="text-gray-600 mb-6">
              We offer a range of deposit and withdrawal methods, including bank transfers, cards, and more, depending on your region and preferred currency. eToro offers low minimum deposits and unified fees. Read more on the <a href="#" className="text-green-500 hover:underline">Market Hours</a> and <a href="#" className="text-green-500 hover:underline">Fees page.</a>
            </p>
            <p className="text-sm text-gray-400 mb-8">
              *GBP and EUR accounts are only available in selected regions, <a href="#" className="text-green-500 hover:underline">see here.</a>
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
              Get Started
            </button>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            {/* Make sure to place your image file in the /public directory */}
            <div className="relative w-full  h-auto">
              <Image
                src="/withdraw-funds-etoro-money.png"
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

export default DepositsSection;