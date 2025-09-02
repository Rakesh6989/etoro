// components/LearnCryptoSection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const LearnCryptoSection = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between lg:space-x-12">
          {/* Left Side: Text Content */}
          <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#1a2033] mb-6">
              Learn crypto <span className="text-[#3b82f6]">before you buy crypto</span>
            </h2>
            <p className="text-gray-700 text-lg max-w-lg mx-auto lg:mx-0">
              The <Link href="#" className="text-[#3b82f6] font-semibold hover:underline">eToro Academy</Link> is a totally free resource to help you upgrade your skills and make better trading decisions. Then practise what you learn risk-free in the{' '}
              <Link href="#" className="text-[#3b82f6] font-semibold hover:underline">virtual portfolio</Link>.
            </p>
          </div>

          {/* Right Side: Image and Badge */}
          <div className="flex-1 w-full relative">
            <div className="relative w-full h-[300px] sm:h-[450px] lg:h-[550px]">
              <Image
                src="/image-5.png" // Replace with your image path
                alt="eToro Academy learning platform"
                layout="fill"
                objectFit="contain"
                quality={100}
                priority
              />
            </div>
            {/* Optional: The green graduation cap badge */}
            <div className="hidden lg:block absolute bottom-1/4 -right-8 w-20 h-20 bg-[#50b240] rounded-full flex items-center justify-center shadow-lg">
                {/* I am using a placeholder SVG here. You may need to replace it with an appropriate image or icon. */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2l10 5.5v11L12 22 2 17.5V6.5L12 2zM12 10a2 2 0 100 4 2 2 0 000-4zM2 6.5L12 12l10-5.5M12 12v10"/>
                </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnCryptoSection;