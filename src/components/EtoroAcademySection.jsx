// components/EtoroAcademySection.jsx
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const EtoroAcademySection = () => {
  return (
    <div className="bg-[#1a2033] py-16 px-6 text-center text-gray-300 Container-Div">
      <div className=" mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
          eToro Academy: The Knowledge to Trade
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12">
          Your one-stop resource for learning to master the markets. It's all here in one place, and all for free!
        </p>

        {/* Cards container */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
          {/* Card 1: Academy Archive */}
          <div className="w-full md:w-1/3 p-4 bg-[#14182b] rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/academy-archive.png" // Replace with your image path
                alt="Invest in your knowledge"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Academy Archive
            </h3>
            <p className="text-sm text-gray-400">
              Discover a wealth of educational articles, videos, tutorials and more
            </p>
          </div>

          {/* Card 2: Digest & Invest */}
          <div className="w-full md:w-1/3 p-4 bg-[#14182b] rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/digest-and-invest.png" // Replace with your image path
                alt="Digest & Invest"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Digest & Invest
            </h3>
            <p className="text-sm text-gray-400">
              Tune in as industry leaders discuss today's hot topics
            </p>
          </div>

          {/* Card 3: Free Courses */}
          <div className="w-full md:w-1/3 p-4 bg-[#14182b] rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="/free-courses_-1.png" // Replace with your image path
                alt="Learn for free"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Free Courses
            </h3>
            <p className="text-sm text-gray-400">
              Live online education on a variety of topics for all levels
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtoroAcademySection;