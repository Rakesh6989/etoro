"use client";
import React from "react";
import Image from "next/image";

export default function FxFeesSection() {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Say goodbye to <span className="font-extrabold">FX fees</span>
          </h2>
          <div className="space-y-4 text-gray-700 text-lg">
            <p>
              <span className="font-semibold">When opening a position,</span>{" "}
              simply fund the trade in the asset’s currency (whether EUR or USD).
            </p>
            <p>
              <span className="font-semibold">When depositing and withdrawing,</span>{" "}
              use whichever eToro account (EUR or USD) matches the currency of your
              bank, to avoid unnecessary conversion fees.{" "}
              <a href="#" className="text-green-700 underline">
                How to add funds to your EUR account.
              </a>
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/maxresdefault.jpg"
            alt="eToro local trading experience"
            width={600}
            height={400}
            className="rounded-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
}
