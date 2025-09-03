"use client";
import React from "react";

export default function MarketDataItem({ stats }) {
    return (
        <section className=" Container-Div w-full py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-center gap-6">
                {stats.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-full sm:w-[45%] md:w-[30%] flex items-center shadow-md  rounded-lg px-6 py-4 "
                    >
                        <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#0b0b29] text-white flex-shrink-0">
                            {item.icon}
                        </div>

                        <div className="ml-4 text-left">
                            <h3 className="text-2xl font-bold text-[#0b0b29]">{item.value}</h3>
                            <p className="text-gray-600 text-lg">{item.label}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
