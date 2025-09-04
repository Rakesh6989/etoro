"use client";
import React from "react";
import {
  MapPin,
  Coins,
  Percent,
  Scale,
  Wallet,
  CreditCard,
} from "lucide-react";

export default function BestOfBothWorlds() {
  const features = [
    {
      icon: <MapPin className="w-8 h-8 text-white" />,
      bg: "bg-green-500",
      text: (
        <>
          Diversify cost-effectively with hundreds of{" "}
          <a href="#" className="text-blue-600 underline">
            European stocks
          </a>
        </>
      ),
    },
    {
      icon: <Coins className="w-8 h-8 text-white" />,
      bg: "bg-gray-900",
      text: "Trade EUR-based assets without FX fees",
    },
    {
      icon: <Percent className="w-8 h-8 text-white" />,
      bg: "bg-sky-400",
      text: "Get discounted FX fees when converting funds",
    },
    {
      icon: <Scale className="w-8 h-8 text-white" />,
      bg: "bg-pink-500",
      text: "Manage currency exposure",
    },
    {
      icon: <Wallet className="w-8 h-8 text-white" />,
      bg: "bg-yellow-500",
      text: "No withdrawal fees on your EUR account",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-white" />,
      bg: "bg-orange-500",
      text: (
        <>
          <a href="#" className="text-blue-600 underline">
            Exclusive eToro debit card
          </a>
        </>
      ),
    },
  ];

  return (
    <section className="w-full bg-white py-12 px-6 lg:px-20 text-center">
      {/* Heading */}
      <h2 className="text-3xl lg:text-4xl font-bold mb-4">The best of Both worlds</h2>
      <p className="max-w-3xl mx-auto text-gray-700 mb-12">
        On eToro, you’ll have access to leading local and global assets — plus
        insights from analysts and investors in your area, as well as from
        around the world. When you{" "}
        <a href="#" className="text-blue-600 underline">
          open a EUR account
        </a>{" "}
        (also known as an eToro Money account), you add the flexibility to{" "}
        <span className="font-semibold">
          deposit, hold and fund trades in EUR or USD
        </span>{" "}
        — whichever suits you at any moment.
      </p>

      {/* Feature Grid */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {features.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center text-center space-y-4 px-4"
          >
            <div
              className={`w-16 h-16 flex items-center justify-center rounded-full ${item.bg}`}
            >
              {item.icon}
            </div>
            <p className="text-gray-800 text-lg">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
