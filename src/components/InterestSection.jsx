import React from 'react';
import Image from 'next/image';

const InterestSection = () => {
    return (
        <section className="bg-white py-12 md:py-20 lg:py-24">
            <div className="Container-Div mx-auto flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left mb-12 lg:mb-0 lg:w-1/2">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-black leading-tight mb-4">
                        Earn up to <span className="text-[#16a34a]">4.3%*</span> annual <br className="hidden md:inline" />
                        <span className="text-[#16a34a]">interest</span>
                    </h2>
                    <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0 mb-8">
                        Start receiving monthly interest payments straight to your cash balance, with no commitment.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                        <a
                            href="#"
                            className="w-full sm:w-auto inline-block bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-md text-lg text-center"
                        >
                            Join eToro
                        </a>
                        <a
                            href="#"
                            className="w-full sm:w-auto inline-block border border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-semibold py-3 px-8 rounded-full text-lg text-center"
                        >
                            Learn More
                        </a>
                    </div>
                    <p className="text-xs text-gray-500 mt-6 max-w-lg mx-auto lg:mx-0">
                        *Credit and other risks apply, please read the <a href="#" className="underline hover:text-gray-700">Terms and Conditions</a>
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <Image
                        src="/earn-interest.png"
                        alt="4.3% with an upward-trending chart"
                        width={700}
                        height={400}
                        className="w-full h-auto object-contain max-w-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default InterestSection;