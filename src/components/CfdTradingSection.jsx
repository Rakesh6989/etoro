"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const CfdTradingSection = ({
  breadcrumbs = [],
  titleLines = [],
  titleColors = [],
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
}) => {
  return (
    <section className="w-full bg-white py-5 lg:py-8 Container-Div">
      <div className=" mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center lg:items-center lg:justify-between gap-12">
          {/* Left Side: Text and Button */}
          <div className="flex-1 text-center lg:text-left">
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <p className="text-sm text-gray-500 mb-4">
                {breadcrumbs.map((item, index) => (
                  <span key={index}>
                    <Link href={item.href} className="hover:underline">
                      {item.label}
                    </Link>
                    {index < breadcrumbs.length - 1 && " / "}
                  </span>
                ))}
              </p>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              {titleLines.map((line, index) => (
                <React.Fragment key={index}>
                  <span style={{ color: titleColors[index] || "#1a2033" }}>
                    {line}
                  </span>
                  <br />
                </React.Fragment>
              ))}
            </h1>

            {/* Description */}
            {description && (
              <p className="text-lg text-gray-700 mb-8 max-w-xl mx-auto lg:mx-0">
                {description}
              </p>
            )}

            {/* Button */}
            {buttonText && (
              <div className="flex justify-center lg:justify-start">
                <Link href={buttonLink || "#"}>
                  <span className="inline-block bg-[#50b240] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#60c250] transition-colors">
                    {buttonText}
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Right Side: Image */}
          <div className="flex-1 relative w-full h-[280px] sm:h-[380px] lg:h-[420px] flex justify-center items-center rounded-2xl overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              style={{ objectFit: "cover" }}
              quality={100}
              className="rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CfdTradingSection;
