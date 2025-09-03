// components/FeatureSlider.js

import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Card data with updated image paths
const slides = [
  {
    image: '/one-click-tradingimg.png', // Corrected path
    title: 'One-click trading',
    description: 'lets you execute your trades at lightning speed, so you never miss an opportunity',
  },
  {
    image: '/TradingView-charts.png', // Corrected path
    title: 'TradingView charts',
    description: 'give you rich, responsive data at a glance to trade like a pro',
  },
  {
    image: '/Real-time-execution.png', // Corrected path
    title: 'Real-time execution',
    description: 'with real-time price quotes lets you place your orders with precision',
  },
  {
    image: '/Price-alerts.png',
    title: 'Price alerts',
    description: 'lets you set custom alerts to get notifications when a specific price is reached',
  },
  {
    image: '/Zero-balance-protection.png',
    title: 'Zero-balance protection',
    description: 'automatically closes your trades if your balance drops below a certain level, protecting you from losses',
  },
  {
    image: '/Short-with-or-without-leverage.png',
    title: 'Short with or without leverage',
    description: 'gives you the flexibility to trade on both rising and falling markets with or without leverage',
  },
  {
    image: '/Risk-management.png',
    title: 'Risk management',
    description: 'offers a suite of tools to help you manage your risk, including stop-loss and take-profit orders',
  },
];

// Custom Arrow Components (same as before)
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer z-10 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer z-10 p-2 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </div>
  );
};

const FeatureSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#121124] py-16 px-4 text-white">
      <div className=" mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold">Pro Tools <span className="text-gray-400 font-normal">for Traders</span></h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          eToro’s innovative platform is packed with user-friendly advanced features, designed to give you the edge when making important trading decisions on the fly
        </p>
      </div>

      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="px-4">
              <div className="bg-[#1D1C33] rounded-xl overflow-hidden shadow-lg p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  <img src={slide.image} alt={slide.title} className="w-full h-auto rounded-lg" />
                </div>
                <h3 className="text-xl font-semibold mt-4">{slide.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeatureSlider;