import React from 'react';
import Image from 'next/image';

const DownloadSection = () => {
  return (
    <div className="bg-white py-16 px-4 Container-Div">
      <div className="container mx-auto ">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:space-x-12">
          <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Download Now!
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Discover eToro’s intuitive and innovative trading app. Trade and invest anytime, anywhere, and alternate between your laptop, tablet or mobile device with ease.
            </p>
            <div className="flex justify-center lg:justify-start space-x-4">
              <a href="https://apps.apple.com/us/app/etoro-investing-and-trading/id1278912423" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/appstore.svg"
                  alt="Download on the App Store"
                  width={160}
                  height={60}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </a>
              <a href="https://play.google.com/store/apps/details?id=com.etoro.etoro&hl=en" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/googleplay.svg"
                  alt="Get it on Google Play"
                  width={180}
                  height={80}
                  className="hover:scale-105 h-full transition-transform duration-300"
                />
              </a>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg h-auto">
              <Image
                src="/sec-8-img.png"
                alt="eToro app on phone and tablet"
                width={700}
                height={500}
                layout="responsive"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;