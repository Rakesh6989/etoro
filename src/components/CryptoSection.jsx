import React from 'react';
import Image from 'next/image';

const CryptoSection = () => {
    return (
        <section className="bg-white py-5 md:py-10 lg:py-15">
            <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-center">

                <div className="w-full lg:w-1/2 flex items-center justify-center mb-12 lg:mb-0">
                    <Image
                        src="/crypto2x.jpg"
                        alt="Various crypto logos including Ethereum, Bitcoin, Solana, and Shiba Inu"
                        width={350}
                        height={450}
                        className="w-auto h-auto object-contain max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none"
                    />
                </div>

                <div className="text-center lg:text-left lg:w-1/2 lg:pl-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black leading-tight mb-6">
                        Crypto trading at its best
                    </h2>
                    <p className="text-base text-gray-700 max-w-lg mx-auto lg:mx-0 mb-6">
                        Trade and manage 70+ cryptoassets on a trusted global platform that offers top-tier security, powerful tools, user-friendly features, and fixed transparent fees. Eligible eToro Club members can also <a href="#" className="underline font-semibold">sell their crypto for GBP or EUR</a>, unlocking even more flexibility to trade, invest, or explore new opportunities.
                    </p>
                    <p className="text-xs font-semibold text-gray-500 mb-6">
                        *Other fees apply
                    </p>
                    <a
                        href="#"
                        className="inline-block border border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a] hover:text-white transition-colors duration-200 font-semibold py-3 px-8 rounded-full text-lg text-center mb-6"
                    >
                        Invest in Crypto
                    </a>
                    <p className="text-xs text-gray-500 max-w-lg mx-auto lg:mx-0">
                        Cryptoasset investing is highly volatile and unregulated in some EU countries. No consumer protection. Tax on profits may apply.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default CryptoSection;