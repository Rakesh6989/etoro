"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Stock Card Component
function StockCard({ stock }) {
  return (
    <div className="p-3">
      <div
        className={`rounded-2xl shadow-md p-6 text-white ${
          stock.color === "red" ? "bg-red-600" : "bg-gray-700"
        }`}
      >
        <h2 className="text-lg font-bold">{stock.symbol}</h2>
        <p className="text-sm">{stock.name}</p>
        <div className="text-3xl font-bold mt-2">{stock.price}</div>
        <div
          className={`text-sm ${
            stock.change < 0 ? "text-red-300" : "text-green-300"
          }`}
        >
          {stock.change} ({stock.percent}%)
        </div>
      </div>
    </div>
  );
}

// Main Component
export default function StockSection({ reverse = false }) {
  const stocks = [
    {
      symbol: "AMZN",
      name: "Amazon.com Inc",
      price: "289.12",
      change: "+2",
      percent: "+1.5",
      color: "gray",
    },
    {
      symbol: "TSLA",
      name: "Tesla Motors, Inc.",
      price: "334.37",
      change: "-12",
      percent: "-3.5",
      color: "red",
    },
    {
      symbol: "AAPL",
      name: "Apple Inc",
      price: "232.51",
      change: "+0",
      percent: "+0.18",
      color: "gray",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // 3 items in one row
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center gap-8 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Left Side - Text */}
        <div className="md:w-1/2 space-y-6 px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Invest in stocks <br /> from around the globe
          </h1>
          <p className="text-gray-600">
            From technology to healthcare, New York to Hong Kong — with
            fractional shares, it’s easy to fill your portfolio with a variety
            of leading stocks from the world’s top exchanges.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 text-lg">
            Start Investing in Stocks
          </button>
          <button
            variant="outline"
            className="rounded-full px-6 py-3 text-lg mt-3"
          >
            See All Stocks
          </button>
        </div>

        {/* Right Side - Slider */}
        <div className="md:w-1/2 px-6">
          <Slider {...settings}>
            {stocks.map((stock, index) => (
              <StockCard key={index} stock={stock} />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
