
import React from 'react';
import Image from 'next/image';

const TopInvestorSection = () => {
    return (
        <section className="bg-[#000d11] text-white py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center">

                <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">
                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
                        Copy top investors
                    </h2>
                    <p className="text-base text-gray-300 max-w-lg mx-auto lg:mx-0 mb-8">
                        With eToro’s innovative <span className="font-bold">CopyTrader™</span>, you can automatically copy the moves of other investors.
                        <br className="hidden sm:inline" /> Find investors you believe in and <span className="font-bold">replicate their actions</span> in real time.
                    </p>
                    <a
                        href="#"
                        className="inline-block border border-white text-white hover:bg-white hover:text-black transition-colors duration-200 font-semibold py-3 px-8 rounded-full text-lg mb-8"
                    >
                        Start Copying
                    </a>
                    <p className="text-lg max-w-lg mx-auto lg:mx-0">
                        Copy Trading does not amount to investment advice. The value of your investments may go up or down. Your capital is at risk. Past performance is not an indication of future results.
                    </p>
                </div>

                <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-end">
                    <Image
                        src="https://cdn.pixabay.com/photo/2023/12/19/22/46/woman-8458561_1280.jpg"
                        alt="An example of eToro's CopyTrader feature with a photo and a performance graph"
                        width={700}
                        height={500}
                        className="w-full h-auto object-contain max-w-2xl lg:max-w-none"
                    />
                </div>

            </div>
        </section>
    );
};

export default TopInvestorSection;