"use client";
import React from "react";

const EtoroSection = () => {
  return (
    <div className="bg-white relative">
      {/* Green Background Section */}
      <div className="relative bg-[#12C637] min-h-[60vh] flex items-center overflow-hidden">
        {/* Full-width image */}
        <img
          src="/Trading-Platform_Cover_final_EN.jpg"
          alt="Man using phone"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom Black Content Box */}
      <div className="relative -mt-16 px-6">
        <div className="bg-[#0a0a23] text-white max-w-6xl mx-auto rounded-sm flex flex-col md:flex-row justify-between items-center gap-6 p-8">
          <div>
            <p className="text-sm text-gray-400 mb-2">
              Home / Trading / Platforms
            </p>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              The eToro investing platform and app
            </h2>
            <p className="text-lg">
              Access eToro with an easy-to-use web platform and intuitive mobile app
            </p>
          </div>

          <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-full hover:bg-green-600 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default EtoroSection;
