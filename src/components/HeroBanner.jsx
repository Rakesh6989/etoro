"use client";
import React from 'react';
import Image from 'next/image';

const HeroBanner = () => {
    return (
        <section className="bg-gray-100 flex items-center justify-center min-h-[500px] py-12 md:py-20 lg:py-24">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center">
                <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-tusker lg:text-7xl font-extrabold text-[#111827] leading-tight mb-4">
                        YEP, IT’S <br className="hidden sm:inline" />
                        <span className="text-[#111827]">ALL IN ONE APP</span>
                    </h1>
                    <p className="text-lg sm:text-xl text-[#4b5563] max-w-lg mx-auto lg:mx-0 mb-8">
                        Invest in thousands of stocks, crypto, ETFs... all in one easy-to-use app
                    </p>
                    <a
                        href="#"
                        className="inline-block bg-[#16a34a] hover:bg-[#15803d] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200 shadow-md text-lg"
                    >
                        Join eToro
                    </a>
                </div>

                <div className="relative w-full lg:w-1/2 flex items-center justify-center">
                    <Image
                        src="/user.webp"
                        alt="Smiling man using a phone"
                        width={700}
                        height={700}
                        className="rounded-lg object-cover w-full h-auto max-w-md lg:max-w-none"
                    />

                    <div className="absolute bottom-[-24px] right-4 text-lg text-[#000]">
                        **Terms and Conditions apply.
                    </div>
                </div>

            </div>


        </section>
    );
};

export default HeroBanner;