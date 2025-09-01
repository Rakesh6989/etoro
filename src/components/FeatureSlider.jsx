"use client";
import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  PieChart,
  Search,
  Pointer,
  HandCoins,
  CandlestickChart,
  ArrowUpDown,
} from "lucide-react";

const FeatureSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const features = [
    {
      id: "virtual-portfolio",
      image: "/tipranks-img.png",
      Icon: PieChart,
    },
    {
      id: "social-trading",
      image: "/virtual-mode-img.png",
      Icon: Search,
    },
    {
      id: "watchlist",
      image: "/one-click-trading.png",
      Icon: Pointer,
    },
    {
      id: "auto-trading",
      image: "/stoploss-img.png",
      Icon: HandCoins,
    },
    {
      id: "risk-management",
      image: "/trailing-sl0img.png",
      Icon: HandCoins,
    },
    {
      id: "portfolio-management",
      image: "/pro-chart-img.png",
      Icon: CandlestickChart,
    },
    {
      id: "market-analysis",
      image: "/offline-img.png",
      Icon: ArrowUpDown,
    },
  ];

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const currentFeature = features[activeIndex];

  return (
    <div className="w-full py-12 sm:py-16 md:py-20 bg-[#3E4551]">
      <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden px-4 sm:px-6 md:px-8">
        {/* Title */}
        <p className="text-center text-white text-2xl sm:text-3xl md:text-4xl py-3 font-semibold">
          Platform features
        </p>

        {/* Subtitle */}
        <p className="text-center text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto pb-6 sm:pb-10">
          eToro’s aims to open up markets to everyone, with an easy-to-use,
          intuitive interface. To help clients better manage their finances, it
          developed innovative trading features:
        </p>

        {/* Slider Section */}
        <div className="relative min-h-[280px] sm:min-h-[400px] md:min-h-[500px] bg-slate-750 flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Right Button */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 hover:bg-slate-600 bg-slate-700/80 rounded-full flex items-center justify-center transition-all duration-200"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
          </button>

          {/* Image */}
          <div className="w-[90%] sm:w-[75%] md:max-w-3xl">
            <img
              src={currentFeature.image}
              alt={currentFeature.id}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Feature Icons */}
        <div className="border-t border-[#64666e] px-2 sm:px-6 md:px-8 py-4 sm:py-6">
          <div className="flex justify-between gap-1 sm:gap-3  scrollbar-hide">
            {features.map((feature, index) => (
              <button
                key={feature.id}
                onClick={() => goToSlide(index)}
                className={`group relative flex-shrink-0 cursor-pointer p-2 sm:p-3 md:p-4 rounded-lg transition-all duration-300 ${
                  index === activeIndex
                    ? "text-[#3F9ADC]"
                    : "bg-transparent text-slate-300 hover:text-white"
                }`}
              >
                <feature.Icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-14 md:h-14" />

                {index === activeIndex && (
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 -translate-x-1/2 w-6 sm:w-8 md:w-10 h-[2px] md:h-1 bg-[#3F9ADC]"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <p className="text-lg sm:text-xl md:text-2xl text-white py-2 sm:py-3 uppercase">
          Virtual portfolio
        </p>
        <p className="text-[#ffffffde] text-sm sm:text-base md:text-lg">
          Upon opening an account with eToro, each user receives a free{" "}
          <span className="text-green-600">$100,000 demo account.</span> Using
          their account, eToro clients can build a virtual portfolio to practice
          and experiment with.
        </p>
      </div>
    </div>
  );
};

export default FeatureSlider;
