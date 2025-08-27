'use client';
import React, { useState, useEffect } from 'react';

const EToroTradeSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [bars, setBars] = useState([]);

  const slides = [
    {
      id: 1,
      title: "Trade Local, Trade Global",
      description: "Diversify cost-effectively across hundreds of local assets, and thousands more global assets, using eToro's GBP and USD accounts.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop&crop=face",
      flag1: "🇬🇧",
      flag2: "🌍",
      primaryButton: "Join eToro",
      secondaryButton: "Learn more"
    },
    {
      id: 2,
      title: "Invest in What You Know",
      description: "Start with familiar companies and markets in your region, then expand your portfolio globally with thousands of international assets.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&h=400&fit=crop&crop=face",
      flag1: "🇺🇸",
      flag2: "🇪🇺",
      primaryButton: "Start Trading",
      secondaryButton: "Explore Markets"
    },
    {
      id: 3,
      title: "Zero Commission Stock Trading",
      description: "Trade stocks with zero commission on both local and global markets. Access real-time market data and professional trading tools.",
      image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=500&h=400&fit=crop&crop=face",
      flag1: "💰",
      flag2: "📈",
      primaryButton: "Get Started",
      secondaryButton: "View Pricing"
    }
  ];

  // Auto-advance slider every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  // Generate random bars client-side only
  useEffect(() => {
    const generatedBars = Array.from({ length: 20 }).map(() => Math.random() * 40 + 10);
    setBars(generatedBars);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setCurrentSlide(index);

  return (
    <div className="w-full bg-slate-900 relative overflow-hidden">
      {/* Background Bars */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 top-0 w-64 h-full">
          <div className="w-full h-full bg-gradient-to-l from-green-500/20 to-transparent"></div>
          <div className="absolute right-8 top-1/2 transform -translate-y-1/2">
            <div className="flex flex-col space-y-1">
              {bars.map((height, i) => (
                <div
                  key={i}
                  className="w-2 bg-green-400 rounded-sm opacity-60"
                  style={{ height: `${height}px` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Slides */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide) => (
                <div key={slide.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px] p-8 lg:p-12">
                    {/* Image */}
                    <div className="relative order-2 lg:order-1">
                      <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                          <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg">
                          <span className="text-2xl">{slide.flag1}</span>
                        </div>
                        <div className="absolute -top-4 -right-4 bg-white rounded-full p-3 shadow-lg">
                          <span className="text-2xl">{slide.flag2}</span>
                        </div>
                      </div>
                    </div>

                    {/* Text */}
                    <div className="order-1 lg:order-2 text-center lg:text-left">
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 lg:mb-8 leading-tight">
                        {slide.title}
                      </h2>
                      <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        {slide.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
                        <button className="px-8 lg:px-10 py-3 lg:py-4 bg-green-500 hover:bg-green-600 text-white font-semibold text-lg lg:text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                          {slide.primaryButton}
                        </button>
                        <button className="px-8 lg:px-10 py-3 lg:py-4 border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold text-lg lg:text-xl rounded-full transition-all duration-300 hover:scale-105">
                          {slide.secondaryButton}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center space-x-3 pb-8 lg:pb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-green-500 scale-125' : 'bg-gray-500 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default EToroTradeSlider;
