"use client";
import React from "react";
import Image from "next/image";

export default function FundsSection() {
  return (
    <section className="w-full bg-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  gap-10">
        
        {/* Left side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Preserve the value <span className="font-extrabold">of your funds</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Hold funds in EUR or USD — or both — to manage currency
            exposure based on your investment strategy and stay ahead of
            rate fluctuations.
          </p>
        </div>

        {/* Right side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="/Preserve-the-value-of-your-funds.png" // <-- apna right-side image ka path lagao
            alt="Funds Preview"
            width={500}
            height={500}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
