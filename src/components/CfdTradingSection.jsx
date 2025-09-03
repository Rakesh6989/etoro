// components/CfdTradingSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CfdTradingSection = () => {
  return (
    <div className="py-2 Container-Div">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          {/* Left Side: Text and Button */}
          <div className="flex-1 text-center lg:text-left">
            {/* Breadcrumbs */}
            <p className="text-sm text-gray-500 mb-4">
              <Link href="#" className="hover:underline">Home</Link> / <Link href="#" className="hover:underline">Trading</Link> / CFD Trading
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4 text-[#1a2033]">
              <span className="text-[#3b82f6]">ACCESS THE POWER OF</span>
              <br />
              <span className="text-[#50b240]">CFD TRADING</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
              Apply leverage, go short, and trade multiple assets with CFDs on eToro's
              innovative, user-friendly platform
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="#">
                <span className="bg-[#50b240] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#60c250] transition-colors">
                  Join eToro
                </span>
              </Link>
            </div>
          </div>

          {/* Right Side: Image with background color */}
          <div className="flex-1 relative w-full h-[450px] sm:h-[600px] lg:h-[700px] mt-8 lg:mt-0 flex justify-center items-center rounded-[2rem]">
            <Image
              src="/trading-cfd-half-cover-desk.jpg" // Replace with your image path
              alt="eToro mobile app displaying CFD trading charts"
              layout="fill"
              objectFit="contain"
              quality={100}
              className="z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CfdTradingSection;