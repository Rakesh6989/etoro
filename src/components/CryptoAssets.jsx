// components/CryptoAssets.jsx
import React from "react";
import Image from "next/image";

const cryptoCards = [
  { id: 1, src: "/btc.png", alt: "Bitcoin" },
  { id: 2, src: "/eth.s", alt: "Ethereum" },
  { id: 3, src: "/sql.png", alt: "Solana" },
  { id: 4, src: "/miota.png", alt: "IOTA" },
//   { id: 5, src: "/eth.svg", alt: "Cardano" },
];

const CryptoAssets = () => {
  return (
    <div className="bg-[#050520] py-12  px-6 sm:px-12 lg:px-24">
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Popular <span className="text-[#3b82f6]">cryptoassets</span>
        </h2>
        <p className="text-gray-300 mt-3 text-sm sm:text-base max-w-2xl mx-auto">
          Discover the benefits of investing in any of the 100 vetted cryptoassets
          on a secure platform
        </p>
      </div>

      {/* Cards Section */}
      <div className="overflow-x-auto">
        <div className="flex lg:grid lg:grid-cols-4 gap-6">
          {cryptoCards.map((card) => (
            <div
              key={card.id}
              className="min-w-[250px] sm:min-w-[280px] lg:min-w-0 flex-shrink-0"
            >
              <Image
                src={card.src}
                alt={card.alt}
                width={300}
                height={350}
                className="rounded-xl shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-10">
        <button className="px-8 py-3 rounded-full border border-green-500 text-green-500 hover:bg-green-500 hover:text-white transition-colors">
          Explore all
        </button>
      </div>
    </div>
  );
};

export default CryptoAssets;
