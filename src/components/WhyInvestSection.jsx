// components/WhyInvestSection.jsx
import React from 'react';
import { Network, Globe, Smartphone } from 'lucide-react'; // Assuming you have lucide-react installed

const WhyInvestSection = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24 text-center Container-Div">
      <div className=" mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-12 text-[#1a2033]">
          Why invest in <span className="text-[#3b82f6]">crypto</span> on eToro?
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-12 md:space-y-0 md:space-x-8 lg:space-x-16">
          {/* Join a crypto community */}
          <div className="flex flex-col items-center max-w-xs px-4">
            <div className="bg-[#50b240] rounded-full p-4 mb-4">
              <Network className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a2033]">
              Join a crypto community
            </h3>
            <p className="text-gray-700 text-sm">
              Learn from and copy other investors
            </p>
          </div>

          {/* Trusted worldwide */}
          <div className="flex flex-col items-center max-w-xs px-4">
            <div className="bg-[#e0efff] rounded-full p-4 mb-4">
              <Globe className="text-[#3b82f6] w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a2033]">
              Trusted worldwide
            </h3>
            <p className="text-gray-700 text-sm">
              Rely on a brand chosen by millions
            </p>
          </div>

          {/* Keep it simple */}
          <div className="flex flex-col items-center max-w-xs px-4">
            <div className="bg-[#1a2033] rounded-full p-4 mb-4">
              <Smartphone className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#1a2033]">
              Keep it simple
            </h3>
            <p className="text-gray-700 text-sm">
              User-friendly platform with no hidden costs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyInvestSection;