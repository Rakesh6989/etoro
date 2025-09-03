// components/FeaturesSection.js
import React from 'react';

const features = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" y1="3" x2="12" y2="15" />
      </svg>
    ),
    text: '7,000+ assets',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <path d="M16 2l-4-4-4 4" />
        <line x1="12" y1="13" x2="12" y2="20" />
      </svg>
    ),
    text: 'Low and transparent fees',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    text: 'Features for novices and experts',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    text: 'Wisdom of the crowd via social trading',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z" />
        <path d="M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M16 18l-4-4-4 4" />
      </svg>
    ),
    text: 'Ready-made Smart Portfolios',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10 text-green-500"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2z" />
        <path d="M5 12h14" />
        <path d="M9 16l-4-4-4 4" />
      </svg>
    ),
    text: 'Intuitive, easy-to-use platforms',
  },
];

const FeaturesSection = () => {
  return (
    <div className="bg-white py-16 px-4 Container-Div">
      <div className="mx-auto text-center">
        <h2 className="text-xl md:text-2xl font-light text-gray-700 leading-snug mb-12">
          Join eToro today and start discovering a wide variety of <br className="hidden md:inline" /> benefits, on mobile or web platform:
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{feature.icon}</div>
              <p className="text-center text-gray-600 font-medium">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;