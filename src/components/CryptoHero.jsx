// components/HeroSection.jsx
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CryptoHero = () => {
  return (
    <div className="bg-white py-5   Container-Div">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center lg:space-x-12">
          {/* Left Side: Text and Button */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-[#1a2033]">
              YOUR CRYPTO, <br />
              <span className="text-[#3b82f6]">YOUR OPPORTUNITIES ON ETORO</span>
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

          {/* Right Side: Image with Background Shape */}
          <div className="flex-1 relative mt-8 lg:mt-0 flex justify-center items-center">
            {/* Blue Background Shape */}
            <div className="absolute inset-0 rounded-2xl lg:rounded-3xl" />

            {/* Image */}
            <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
              <Image
                src="/crypto-half-cover-desk.png"
                alt="eToro mobile app displaying crypto trading interface"
                width={600}
                height={600}
                quality={100}
                priority
                className="z-10 relative object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoHero;
