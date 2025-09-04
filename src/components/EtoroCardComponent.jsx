import React from 'react';

const EToroCardComponent = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            More freedom on the go
          </h2>
          <p className="text-base text-gray-600 mb-4">
            Your <a href="#" className="text-green-600 font-medium">eToro Visa Debit Card</a> connects to your EUR account, so your funds are available to spend anytime, anywhere
          </p>
          <p className="text-base text-gray-600 font-semibold mb-6">
            No FX fees | No added fees abroad | Keep track of your spending
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Your EUR Account
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-sm">
            <img
              src="/Credit-card-1.png"
              alt="eToro Visa Debit Card"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EToroCardComponent;