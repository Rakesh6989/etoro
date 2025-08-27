"use client"
import React from 'react';
import { Users, FileText, ShieldCheck, Globe } from 'lucide-react';

const TrustedWorldwide = () => {
    const features = [
        {
            icon: Users,
            title: 'Social',
            description: 'More than 35 million users globally'
        },
        {
            icon: FileText,
            title: 'Reliable',
            description: 'A leader in the fintech space since 2007'
        },
        {
            icon: ShieldCheck,
            title: 'Secured',
            description: 'Utilising best security practices for client money and assets safety'
        },
        {
            icon: Globe,
            title: 'Global',
            description: 'Providing services around the world'
        },
    ];

    return (
        <section className="bg-white py-16 md:py-24 lg:py-32">
            <div className="container mx-auto px-6 lg:px-12 text-center">

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] leading-tight mb-4">
                    Trusted worldwide
                </h2>
                <p className="text-lg text-[#4b5563] mb-12">
                    Discover why millions of investors from over 100 countries joined eToro
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg shadow-md flex flex-col items-center justify-start text-center border border-gray-200 transition-shadow duration-300 hover:shadow-lg">
                            <div className="text-[#16a34a] mb-4">
                                <feature.icon size={48} strokeWidth={1.5} />
                            </div>
                            <h3 className="text-xl font-bold text-[#111827] mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-base text-gray-700">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustedWorldwide;