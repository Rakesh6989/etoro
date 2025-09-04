"use client";
import React from "react";
import Image from "next/image";

export default function LocalAssetsSection() {
  return (
    <section className="w-full bg-[#070728] py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
        {/* Left Image */}
        <div className="flex justify-center">
          <Image
            src="/image.png" // replace with your actual image path
            alt="European stocks logos"
            width={600}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Access hundreds of <span className="font-extrabold">local assets</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-md mx-auto lg:mx-0">
            Start investing in a variety of the best assets Europe has to offer —
            with more being added all the time
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full transition">
            Explore European Stocks
          </button>
        </div>
      </div>
    </section>
  );
}
