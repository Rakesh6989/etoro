import React from 'react';
import Image from 'next/image';

const HeroAISection = () => {
  return (
    <section className="bg-black text-white py-16 md:py-15 lg:py-10">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center justify-evenly">
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0 l just">
          <p className="text-sm md:text-base text-gray-400 font-medium tracking-wide mb-4">
            eToro Unlocked
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-3xl  font-extrabold leading-tight mb-8">
            Redefining Investing <br className="hidden sm:inline" />
            <span className="text-[#16a34a]">With the Power of AI</span>
          </h1>
          <a
            href="#"
            className="border border-[#16a34a] text-[#16a34a] hover:bg-[#16a34a] hover:text-white transition-colors duration-300 font-semibold py-3 px-8 rounded-full"
          >
            See the reveal
          </a>
        </div>
        
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/image-phone.webp"
            alt="AI-powered investing app on a phone"
            width={700}
            height={400}
            quality={100}
            className="w-full h-auto object-contain max-w-2xl"
          />
        </div>
        
      </div>
    </section>
  );
};

export default HeroAISection;