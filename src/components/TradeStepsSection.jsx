"use client";
import React from "react";
import Image from "next/image";

export default function TradeStepsSection() {
  return (
    <section className="w-full bg-[#0A0C2D] py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Left side: Video/Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            src="/LC_Phase-2_Launch_combined_EU-ezgif.com-gif-to-mp4-converter-1.mp4" // <-- apna video path yaha daalo
            controls
            className="rounded-xl shadow-lg w-full max-w-md"
          />
          {/* Agar video nahi hai to Image bhi use kar sakte ho:
          <Image src="/trade.png" alt="Trade" width={400} height={400} className="rounded-xl" />
          */}
        </div>

        {/* Right side: Steps */}
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            How to <span className="text-green-400">fund trades with EUR</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Both EUR and USD accounts appear in the Wallet tab. The choice is yours!
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">01</span>
              <p><span className="font-semibold">Choose an asset.</span> Currently available for trades with underlying assets, or USD-based CFDs.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">02</span>
              <p><span className="font-semibold">Select currency.</span> Choose between <em>Available EUR</em> or <em>Available USD</em> from the dropdown menu.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">03</span>
              <p><span className="font-semibold">Click BUY.</span> Your position is now open and appears in your portfolio.</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-green-400 text-2xl font-bold">04</span>
              <p><span className="font-semibold">When closing the position</span> choose which currency account you want your funds returned to.<br/>
              <span className="text-xs text-gray-400">*Closing positions to the EUR account not yet available in all regions.</span></p>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <a
              href="#"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition"
            >
              Get Your EUR Account
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
