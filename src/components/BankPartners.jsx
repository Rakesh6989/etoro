"use client";
import React from "react";

const BankPartners = () => {
  const bankPartners = [
    {
      name: "J.P. Morgan",
      src: "https://cdn.pixabay.com/photo/2022/06/02/02/32/visa-7236927_1280.jpg",
      link: "https://www.jpmorgan.com",
    },
    {
      name: "Deutsche Bank",
      src: "https://cdn.pixabay.com/photo/2018/03/09/22/06/card-3212764_1280.png",
      link: "https://www.db.com",
    },
    {
      name: "Coutts",
      src: "https://cdn.pixabay.com/photo/2021/07/12/10/54/credit-card-6406010_1280.png",
      link: "https://www.coutts.com",
    },
    {
      name: "J. Safra Sarasin",
      src: "https://cdn.pixabay.com/photo/2021/07/10/08/58/payment-terminal-6400952_1280.png",
      link: "https://www.jsafrasarasin.com",
    },
    {
      name: "Pictet",
      src: "https://cdn.pixabay.com/photo/2021/07/10/09/23/payment-terminal-6400997_1280.png",
      link: "https://www.pictet.com",
    },
    {
      name: "UBP",
      src: "https://cdn.pixabay.com/photo/2021/07/11/15/07/payment-terminal-6403991_1280.jpg",
      link: "https://www.ubp.com",
    },
    {
      name: "Mizuho",
      src: "https://cdn.pixabay.com/photo/2021/07/11/15/07/payment-terminal-6403991_1280.jpg",
      link: "https://www.mizuho-fg.com",
    },
  ];

  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-4">
          Your funds are held in top-tier institutions
        </h2>
        <p className="text-lg text-[#4b5563] mb-12">
          The group works with globally renowned banking partners including:
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-12 justify-items-center mb-8">
          {bankPartners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={partner.src}
                alt={partner.name}
                className="w-auto h-10 object-contain mx-auto transition-transform duration-300 transform hover:scale-110"
              />
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          *These banks are partnered and do not serve all entities within the group
        </p>
      </div>
    </section>
  );
};

export default BankPartners;
