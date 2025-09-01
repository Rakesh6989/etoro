"use client";
import React from "react";
import Image from "next/image";
import Breadcrumb from "./Breadcrumb";
import Link from "next/link";
const HeroBanner = ({
    breadcrumb = false,
    title,
    highlight,
    description,
    buttonText,
    buttonLink,
    imageSrc,
    imageAlt,
    termsText,
    descclass
}) => {
    return (
        <section className="flex items-center justify-center min-h-[500px] py-12 md:py-20 lg:py-10">
            <div className="container   flex flex-col lg:flex-row items-center justify-between Container-Div">

                {/* Left Section */}
                <div className="text-center lg:text-left lg:w-1/2 mb-12 lg:mb-0">

                    {/* Breadcrumb */}
                    {breadcrumb && <Breadcrumb />}

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-tusker lg:text-5xl font-extrabold text-[#111827] leading-tight mb-4">
                        {title} <br className="hidden sm:inline" />
                        <span className={`${descclass ? descclass : "text-black"} font-tusker uppercase`}>{highlight}</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-[#4b5563]  mx-auto font-semibold lg:mx-0 mb-8">
                        {description}
                    </p>

                    <Link
                        href={buttonLink}
                        className="inline-block bg-[#13c636] hover:bg-[#15803d] text-white font-semibold py-3 px-10 rounded-full transition-colors duration-200 shadow-md text-lg"
                    >
                        {buttonText}
                    </Link>
                </div>

                {/* Right Section */}
                <div className="relative w-full lg:w-[40%] flex items-center justify-center">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        priority
                        width={700}
                        height={700}
                        className="rounded-lg object-cover w-full h-auto max-w-md lg:max-w-none"
                    />

                    {termsText && (
                        <div className="absolute bottom-[-24px] right-4 text-lg text-[#000]">
                            {termsText}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HeroBanner;
