    // components/HeroSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CryptoHero = () => {
  return (
    <div className="bg-white py-5 px-6 sm:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row  lg:justify-between  lg:space-y-0 lg:space-x-12">
          {/* Left Side: Text and Button */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-4xl font-bold leading-tight mb-4 text-[#1a2033]">
              <span className="text-[#3b82f6]">YOUR CRYPTO, YOUR</span>
              <br />
              <span className="text-[#3b82f6]">OPPORTUNITIES ON ETORO</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg mx-auto lg:mx-0">
              From trading to reinvesting, manage your crypto on a single trusted
              global platform.
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link href="#">
                <span className="bg-[#1a2033] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#2b334d] transition-colors">
                  Get started
                </span>
              </Link>
            </div>
          </div>

          <div className="flex-1   relative w-full max-h-[450px] sm:max-h-[600px] lg:max-h-[700px] mt-8 lg:mt-0 flex justify-center items-center">
            <Image
              src="/crypto-half-cover-desk.png"
              alt="eToro mobile app displaying crypto trading interface"
              layout="fill"
              objectFit="contain"
              quality={100}
              priority
              className="z-10 h-full w-full"
            />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHero;