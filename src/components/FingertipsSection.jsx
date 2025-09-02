// components/FingertipsSection.jsx
import React from "react";
import Image from "next/image";

const FingertipsSection = () => {
  return (
    <section className="bg-white py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        <div className="flex justify-center">
          <Image
            src="/image-4.png"
            alt="Crypto Wallet App"
            width={400}
            height={600}
            className="object-contain"
            priority
          />
        </div>

        <div className="text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Everything <span className="text-black font-extrabold">at your fingertips</span>
          </h2>

          <p className="text-gray-600 mt-4 text-sm sm:text-base leading-relaxed">
            Eliminate the need for multiple platforms. You can build your
            ultimate crypto portfolio, then diversify with multiple assets and
            ready-made{" "}
            <a href="#" className="text-green-600 underline">
              Smart Portfolios
            </a>
            . Crypto in your eToro portfolio can accrue generous{" "}
            <a href="#" className="text-green-600 underline">
              crypto staking rewards
            </a>
            *, or be seamlessly transferred to the{" "}
            <a href="#" className="text-green-600 underline">
              eToro Money crypto wallet
            </a>{" "}
            at any time.
          </p>

          <p className="text-xs text-gray-500 italic mt-3">
            *Important note: Staking services are not available in the UK.
          </p>

          {/* Button */}
          <div className="mt-6">
            <button className="px-8 py-3 rounded-full bg-green-500 text-white font-medium hover:bg-green-600 transition">
              Invest in crypto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FingertipsSection;
