import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, TrendingUp, Eye, RefreshCw, Settings, Activity, Shield } from 'lucide-react';

const FeatureSlider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const features = [
        {
            id: 'virtual-portfolio',
            title: 'VIRTUAL PORTFOLIO',
            description: 'Upon opening an account with eToro, each user receives a free $100,000 demo account. Using their account, eToro clients can build a virtual portfolio to practice and experiment with.',
            icon: <BarChart3 className="w-8 h-8" />,
            image: '/api/placeholder/400/300',
            highlight: 'demo account',
            content: {
                stats: [
                    { label: 'Virtual Balance', value: '$100,000' },
                    { label: 'Risk Free', value: 'Practice Mode' }
                ]
            }
        },
        {
            id: 'social-trading',
            title: 'SOCIAL TRADING',
            description: 'Connect with millions of traders worldwide. Copy successful strategies from top performers and build your trading network.',
            icon: <TrendingUp className="w-8 h-8" />,
            image: '/api/placeholder/400/300',
            highlight: 'social trading',
            content: {
                stats: [
                    { label: 'Active Traders', value: '30M+' },
                    { label: 'Success Rate', value: '78%' }
                ]
            }
        },
        {
            id: 'watchlist',
            title: 'SMART WATCHLIST',
            description: 'Monitor your favorite assets with real-time alerts and advanced filtering. Never miss important market movements.',
            icon: <Eye className="w-8 h-8" />,
            image: '/api/placeholder/400/300',
            highlight: 'watchlist',
            content: {
                stats: [
                    { label: 'Assets Available', value: '3,000+' },
                    { label: 'Real-time Updates', value: 'Live' }
                ]
            }
        },
        {
            id: 'auto-trading',
            title: 'AUTO TRADING',
            description: 'Set up automated trading strategies that work 24/7. Use AI-powered tools to optimize your trading performance.',
            icon: <RefreshCw className="w-8 h-8" />,
            image: '/api/placeholder/400/300',
            highlight: 'automated',
            content: {
                stats: [
                    { label: 'Uptime', value: '99.9%' },
                    { label: 'Strategies', value: '50+' }
                ]
            }
        },
        {
            id: 'risk-management',
            title: 'RISK MANAGEMENT',
            description: 'Advanced risk management tools to protect your investments. Set stop losses, take profits, and manage your exposure.',
            icon: <Shield className="w-8 h-8" />,
            image: '/api/placeholder/400/300',
            highlight: 'risk management',
            content: {
                stats: [
                    { label: 'Protection Level', value: 'Advanced' },
                    { label: 'Loss Prevention', value: 'Active' }
                ]
            }
        },
        {
            id: 'portfolio-management',
            title: 'PORTFOLIO MANAGEMENT',
            description: 'Comprehensive portfolio tracking and analysis. Get insights into your performance and optimize your investments.',
            icon: <Settings className="w-8 h-8" />,
            image: '/api/placeholder/400/300',
            highlight: 'portfolio',
            content: {
                stats: [
                    { label: 'Analytics', value: 'Real-time' },
                    { label: 'Insights', value: 'AI-Powered' }
                ]
            }
        },
        {
            id: 'market-analysis',
            title: 'MARKET ANALYSIS',
            description: 'Deep market insights and analysis tools. Technical indicators, charts, and expert commentary to guide your decisions.',
            icon: <Activity className="w-8 h-8" />,
            image: '/api/placeholder/400/300',
            highlight: 'analysis',
            content: {
                stats: [
                    { label: 'Indicators', value: '100+' },
                    { label: 'Market Data', value: 'Global' }
                ]
            }
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
        <div className=' w-full pt-15  bg-[#3E4551]'>

            <div className=" max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
                <p className='text-center text-white text-3xl py-3 font-semibold'>

                    Platform features

                </p>

                <p className='text-center text-white text-lg w-[65%] mx-auto pb-10'>

                    eToro’s aims to open up markets to everyone, with an easy-to-use, intuitive interface. To help clients better manage their finances, it developed innovative trading features:



                </p>



                {/* Main Content Area */}
                <div className="relative min-h-96 bg-slate-750">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    >
                        <ChevronLeft className="w-6 h-6 text-white" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-slate-700/80 hover:bg-slate-600 rounded-full flex items-center justify-center transition-all duration-200 backdrop-blur-sm"
                    >
                        <ChevronRight className="w-6 h-6 text-white" />
                    </button>

                    {/* Content */}
                    <div className="px-8 py-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center min-h-96">
                        {/* Left Side - Content */}
                        <div className="space-y-6">
                            <div className="flex items-center space-x-3">
                                <div className="text-emerald-400">
                                    {currentFeature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white tracking-wider">
                                    {currentFeature.title}
                                </h3>
                            </div>

                            <p className="text-slate-300 text-lg leading-relaxed">
                                {currentFeature.description.split(currentFeature.highlight)[0]}
                                <span className="text-emerald-400 font-semibold">
                                    {currentFeature.highlight}
                                </span>
                                {currentFeature.description.split(currentFeature.highlight)[1]}
                            </p>

                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-4">
                                {currentFeature.content.stats.map((stat, index) => (
                                    <div key={index} className="bg-slate-700/50 rounded-lg p-4 border border-slate-600">
                                        <div className="text-emerald-400 text-2xl font-bold">
                                            {stat.value}
                                        </div>
                                        <div className="text-slate-400 text-sm">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - Visual */}
                       
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="bg-slate-700 px-8 py-6">
                    <div className="flex justify-center space-x-1">
                        {features.map((feature, index) => (
                            <button
                                key={feature.id}
                                onClick={() => goToSlide(index)}
                                className={`group relative p-4 rounded-lg transition-all duration-300 ${index === activeIndex
                                    ? 'bg-emerald-500 text-white'
                                    : 'bg-slate-600 text-slate-300 hover:bg-slate-500 hover:text-white'
                                    }`}
                            >
                                <div className="flex flex-col items-center space-y-1">
                                    <div className={`transition-transform duration-300 ${index === activeIndex ? 'scale-110' : 'group-hover:scale-105'
                                        }`}>
                                        {feature.icon}
                                    </div>
                                    <span className="text-xs font-medium tracking-wide">
                                        {feature.title.split(' ')[0]}
                                    </span>
                                </div>

                                {/* Active indicator */}
                                {index === activeIndex && (
                                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-emerald-400 rounded-full"></div>
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeatureSlider;