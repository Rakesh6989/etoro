'use client';
import React from 'react';

export default function CallToAction({ title, description, buttonText, buttonLink, disclaimer }) {
  return (
    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-xl mx-auto text-left">
        <h2 className="text-2xl w-[70%] font-bold leading-tight text-[#0B0B29] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-lg font-semibold text-gray-700">
          {description}
        </p>
        <div className="mt-8">
          <a
            href={buttonLink}
            className="inline-block rounded-full hover:text-[#13C737] bg-[#13C737] px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-white "
          >
            {buttonText}
          </a>
        </div>
        {disclaimer && (
          <p className="mt-8 text-sm text-[#000]">
            {disclaimer}
          </p>
        )}
      </div>
    </div>
  );
}