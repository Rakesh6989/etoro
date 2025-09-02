// components/FAQ.jsx
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react'; // Using lucide-react for the icons

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-6 sm:px-12 lg:px-24">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1a2033] mb-12">
          FAQ
        </h2>
        <div className="border-t border-b border-gray-300">
          {data.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
                onClick={() => handleToggle(index)}
              >
                <span className={`text-lg font-semibold ${openIndex === index ? 'text-[#3b82f6]' : 'text-[#1a2033]'}`}>
                  {item.question}
                </span>
                <span className="text-xl text-gray-500">
                  {openIndex === index ? <Minus /> : <Plus />}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;