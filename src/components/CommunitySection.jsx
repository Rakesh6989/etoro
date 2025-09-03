// components/CommunitySection.jsx
import React from 'react';
import Image from 'next/image';

const CommunitySection = () => {
  return (
    <div className="bg-white py-20 px-6  Container-Div">
      <div className=" mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:space-x-20">
          {/* Left Side: Text Content */}
          <div className="flex-1 max-w-xl mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1a2033] mb-6">
              A safe community space <br /> to <span className="text-[#3b82f6]">grow your crypto</span>
            </h2>
            <p className="text-gray-700 text-lg mb-4">
              Feel among friends in our 30 million-strong community—get new insights, ask questions, and{' '}
              <span className="text-[#3b82f6] font-semibold">copy other traders’ portfolios</span>.
              Invest in crypto on a reliable platform with a track record of well over a decade. Your cryptoassets are safeguarded with
              advanced security and free military-grade offline (“cold”) storage.
            </p>
            <p className="text-gray-500 text-sm italic">
              CopyTrading does not amount to investment advice. The value of your investments may go up or down. Your capital is at risk.
            </p>
          </div>

          {/* Right Side: Image Placeholder */}
          <div className="flex-1 w-full lg:max-w-2xl relative">
            <div className="relative w-full h-auto" style={{ paddingBottom: '75%' }}>
              <Image
                src="/image-3.png" // Replace with your image path
                alt="eToro community members and their crypto growth"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;