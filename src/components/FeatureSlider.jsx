import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Eye, RefreshCw, Settings, Activity, Shield } from 'lucide-react';
import { PieChart, Search, Pointer, HandCoins, CandlestickChart, ArrowUpDown } from 'lucide-react';

const FeatureSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            id: 'virtual-portfolio',
            image: '/tipranks-img.png',
            Icon: PieChart
        },
        {
            id: 'social-trading',
            image: '/virtual-mode-img.png',
            Icon: Search

        },
        {
            id: 'watchlist',
            image: '/one-click-trading.png',
            Icon: Pointer

        },
        {
            id: 'auto-trading',
            image: '/stoploss-img.png',
            Icon: HandCoins

        },
        {
            id: 'risk-management',
            image: '/trailing-sl0img.png',
            Icon: HandCoins

        },
        {
            id: 'portfolio-management',
            image: '/pro-chart-img.png',
            Icon: CandlestickChart

        },
        {
            id: 'market-analysis',
            image: '/offline-img.png',
            Icon: ArrowUpDown

        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % features.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
    };

    const goToSlide = (index) => {
        setActiveIndex(index);
    };

    const currentFeature = features[activeIndex];

    return (
        <div className="w-full py-20 bg-[#3E4551]">
            <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden">
                <p className="text-center text-white text-3xl py-3 font-semibold">
                    Platform features
                </p>

                <p className="text-center text-white text-lg w-[65%] mx-auto pb-10">
                    eToro’s aims to open up markets to everyone, with an easy-to-use, intuitive interface.
                    To help clients better manage their finances, it developed innovative trading features:
                </p>

                <div className="relative min-h-[500px] bg-slate-750 flex items-center justify-center">
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all "
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12  hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-200 "
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    <div className='max-w-3xl'>

                        <img
                            src={currentFeature.image}
                            alt={currentFeature.id}
                            className="w-full h-full object-contain"
                        />

                    </div>
                </div>
                <div className="border-bottom border-[#64666e] px-8 py-6">
                    <div className="flex justify-between space-x-1">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => goToSlide(index)}
                                className={`group relative  cursor-pointer p-4 rounded-lg transition-all duration-300 ${index === activeIndex
                                    ? 'text-[#3F9ADC]'
                                    : 'bg-transparent text-slate-300  hover:text-white'
                                    }`}
                            >
                                {<feature.Icon size={55} />}

                                {index === activeIndex && (
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-[#3F9ADC] "></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
                <p className='text-md text-3xl text-white py-3'>
                    Virtual portfolio
                </p>
                <p className='text-[#ffffffde] text-xl'>
                    Upon opening an account with eToro, each user receives a free $100,000 <span className='text-green-600'>
                        demo account.
                    </span> Using their account, eToro clients can build a virtual portfolio to practice and experiment with.
                </p>
            </div>
        </div>
    );
};

export default FeatureSlider;
