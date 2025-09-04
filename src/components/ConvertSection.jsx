"use client";
import React from "react";
import Image from "next/image";

export default function ConvertSection() {
  return (
    <section className="w-full bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10">
        
        {/* Left side: Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <Image
            src="/Need-to-convert-No-problem.png" // <-- apni image ka path yaha lagao
            alt="App Preview"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>

        {/* Right side: Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Need to convert? No problem.
          </h2>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold">
              When opening a position in a different currency,
            </span>{" "}
            convert only the funds you need — keeping FX fees to a minimum.
          </p>
          <p className="text-gray-700 mb-4">
            <span className="font-semibold underline">
              When transferring between your EUR and USD accounts,
            </span>{" "}
            receive lower FX fees than any other method of payment.
            eToro Club members pay even less with discounted rates, see{" "}
            <a
              href="#"
              className="text-green-600 underline hover:text-green-800"
            >
              here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
