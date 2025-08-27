"use client"
import React, { useEffect, useRef } from 'react';

const EToroAcademy = () => {
    const carouselRef = useRef(null);

    const courses = [
        {
            id: 1,
            title: "Stock investing strategies",
            image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=300&fit=crop&crop=face",
            bgColor: "bg-gray-100"
        },
        {
            id: 2,
            title: "Technical analysis",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
            bgColor: "bg-blue-400",
            featured: true
        },
        {
            id: 3,
            title: "eToro's How-Tos",
            image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=300&fit=crop&crop=face",
            bgColor: "bg-gray-100"
        },
        {
            id: 4,
            title: "Investment basics",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
            bgColor: "bg-yellow-100"
        },
        {
            id: 5,
            title: "Risk management",
            image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop&crop=face",
            bgColor: "bg-green-100"
        },
        {
            id: 6,
            title: "Market trends",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=300&fit=crop&crop=face",
            bgColor: "bg-purple-100"
        }
    ];

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        let scrollAmount = 0;
        const cardWidth = 320;
        const totalWidth = cardWidth * courses.length;

        const animate = () => {
            scrollAmount += 0.5;

            if (scrollAmount >= totalWidth) {
                scrollAmount = 0;
            }

            carousel.style.transform = `translateX(-${scrollAmount}px)`;
            requestAnimationFrame(animate);
        };

        const animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
        };
    }, [courses.length]);

    return (
        <div className="w-full bg-white py-12 lg:py-20 overflow-hidden">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12 lg:mb-16">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 lg:mb-6">
                        Investing courses, podcasts, and webinars
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        The eToro Academy provides free professional financial education for all levels
                    </p>
                </div>

                {/* Scrolling Cards Section */}
                <div className="relative mb-12 lg:mb-16">
                    <div className="overflow-hidden">
                        <div
                            ref={carouselRef}
                            className="flex gap-6 lg:gap-8"
                            style={{ width: `${courses.length * 2 * 320}px` }}
                        >
                            {[...courses, ...courses].map((course, index) => (
                                <div
                                    key={`${course.id}-${index}`}
                                    className={`flex-shrink-0 w-72 lg:w-80 h-64 lg:h-72 rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${course.bgColor}`}
                                >
                                    <div className="relative w-full h-full p-6 lg:p-8 flex flex-col justify-between">
                                        <div className="absolute inset-0 opacity-10">
                                            <div className="w-full h-full bg-gradient-to-br from-black/5 to-transparent"></div>
                                        </div>

                                        <div className="relative z-10 flex-1 flex flex-col justify-between">
                                            <div></div>

                                            <div className="flex justify-center mb-4">
                                                <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden border-4 border-white shadow-lg">
                                                    <img
                                                        src={course.image}
                                                        alt={course.title}
                                                        className="w-full h-full object-cover"
                                                    />
                                                </div>
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl lg:text-2xl font-bold text-gray-900 text-center leading-tight">
                                                {course.title}
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center">
                    <button className="inline-flex items-center px-8 lg:px-12 py-3 lg:py-4 bg-white border-2 border-green-500 text-green-600 font-semibold text-lg lg:text-xl rounded-full hover:bg-green-50 hover:border-green-600 hover:text-green-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        Start Learning Now
                    </button>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 640px) {
          .overflow-hidden {
            -webkit-overflow-scrolling: touch;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .hover\\:scale-105 {
            transform: none;
          }
        }
      `}</style>
        </div>
    );
};

export default EToroAcademy;