// components/FeaturesSection.jsx
import React from 'react';
import { Wrench, Repeat, Users, GraduationCap } from 'lucide-react';
import Link from 'next/link';

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16 px-6 Container-Div">
      <div className=" mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1: Pro Tools for Traders */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <Wrench className="text-[#50b240] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1a2033] mb-2 text-center">
              Pro Tools for Traders
            </h3>
            <p className="text-gray-700 text-sm text-center">
              All the advanced features you need, from research and analysis to risk management
            </p>
          </div>

          {/* Card 2: 7000+ Tradeable Assets */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <Repeat className="text-[#50b240] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1a2033] mb-2 text-center">
              7000+ Tradeable Assets
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Leverage or short the most popular stocks, currencies, commodities and indices
            </p>
          </div>

          {/* Card 3: 30M+ Investing Community */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <Users className="text-[#50b240] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1a2033] mb-2 text-center">
              30M+ Investing Community
            </h3>
            <p className="text-gray-700 text-sm text-center">
              Follow top traders to stay ahead of the curve and spot the next opportunity
            </p>
          </div>

          {/* Card 4: FREE Online Education */}
          <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
            <div className="bg-gray-100 rounded-full p-4 mb-4">
              <GraduationCap className="text-[#50b240] w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-[#1a2033] mb-2 text-center">
              FREE Online Education
            </h3>
            <p className="text-gray-700 text-sm text-center">
              The eToro Academy is your expert resource for trading courses, webinars and tutorials
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;