// components/StayAheadSection.js

import React from 'react';
import Image from 'next/image';

const StayAheadSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* Left Side: Image */}
        <div className="relative w-full md:w-1/2 flex justify-center md:justify-end">
          {/* Replace 'your-image.png' with the actual file name of your image.
            Make sure the image is in the 'public' directory of your Next.js project.
          */}
          <Image
            src="/Stay-ahead-of-the-curve.png" // Update this path to your image file name
            alt="Stay ahead of the curve"
            width={500} // Adjust width and height to your image's dimensions
            height={500}
            className="w-full max-w-lg h-auto"
            priority
          />
        </div>

        {/* Right Side: Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 leading-tight">
            Stay ahead <span className="font-bold">of the curve</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            In a trading community of millions of users, you can really feel when the sentiment changes. Follow the real-time moves of traders from over 100 countries and join the conversation as they discuss their strategies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StayAheadSection;