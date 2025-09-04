import React from 'react';

// Main component that can be used in your Next.js application.
const AllInOnePlace = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center p-8 lg:p-16">
      <div className="container max-w-7xl mx-auto text-center">
        {/* Main Header Section */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Everything all in one place
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Managing your funds on eToro just got easier, faster, and more flexible. Now, you can see all your eToro accounts in one place on your 
            <span className="font-bold text-gray-800"> Wallet tab</span>.
          </p>
        </div>

        {/* Feature Cards Section */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 items-stretch">
          {/* Card 1: One tab, total control */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center items-start text-left">
            <div className="p-3 bg-green-100 rounded-full mb-6">
              <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4 4c0-1.1.9-2 2-2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0v16h12V4H6zm10 4a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zM9 8a1 1 0 011 1v4a1 1 0 11-2 0V9a1 1 0 011-1zM7 16a1 1 0 100 2h10a1 1 0 100-2H7z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              One tab, total control
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              All your eToro holdings visible in one place
            </p>
          </div>

          {/* Card 2: Move your money, your way */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center items-start text-left">
            <div className="p-3 bg-green-100 rounded-full mb-6">
              <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 4a8 8 0 110 16 8 8 0 010-16zM13 12a1 1 0 00-1-1H9.5a1 1 0 000 2h2.5v4.5a1 1 0 002 0V12zM12 6a1 1 0 00-1 1v1a1 1 0 102 0V7a1 1 0 00-1-1z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Move your money, your way
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Quickly and seamlessly transfer funds between your eToro accounts
            </p>
          </div>

          {/* Card 3: Your funds, your currency */}
          <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col justify-center items-start text-left">
            <div className="p-3 bg-green-100 rounded-full mb-6">
              <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zM12 4a8 8 0 110 16 8 8 0 010-16zm4 8c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V9c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v3zm-4-1c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zM9 13v-2h5v2H9z"/>
              </svg>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
              Your funds, your currency
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              View your funds on eToro in your preferred currency
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllInOnePlace;
