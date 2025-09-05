"use client"
import { User, Wallet, ShieldCheck } from 'lucide-react';
import CfdTradingSection from "@/components/CfdTradingSection";
const DemoAc = () => {
    const features = [
        {
            icon: <User className="w-8 h-8 md:w-10 md:h-10 text-green-600" />,
            title: 'Create an account',
            description: 'credited with $100K to build your virtual portfolio',
            bg: 'bg-green-50',
            iconBg: 'bg-green-100',
        },
        {
            icon: <Wallet className="w-8 h-8 md:w-10 md:h-10 text-sky-600" />,
            title: 'Practise investing',
            description: 'a variety of assets: stocks, crypto, commodities & more',
            bg: 'bg-sky-50',
            iconBg: 'bg-sky-100',
        },
        {
            icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-indigo-600" />,
            title: 'Discuss strategies',
            description: 'and learn from top-performing investors',
            bg: 'bg-indigo-50',
            iconBg: 'bg-indigo-100',
        },
    ];

    return (<>

        <CfdTradingSection
            breadcrumbs={[
                { label: "Home", href: "/" },
                { label: "Trading", href: "/trading" },
                { label: "Demo Account", href: "/demo-account" },
            ]}
            titleLines={["REGISTER FOR A", "FREE DEMO ACCOUNT"]}
            titleColors={["#1a2033", "#8ed6fb"]}
            description="Hone your financial skills with a $100K virtual eToro account"
            buttonText="Let's Start"
            buttonLink="/demo-account"
            imageSrc="/demo-account-half.jpg"
            imageAlt="Man and woman checking financial app on phone"
        />

        <div className="flex justify-center items-center min-h-screen bg-gray-50 p-4">
            <div className="container mx-auto max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-3xl"
                        >
                            <div
                                className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-4 md:mb-6 ${feature.iconBg}`}
                            >
                                {feature.icon}
                            </div>
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div className="flex justify-center items-center min-h-screen bg-white p-4">
            <div className="container mx-auto max-w-6xl py-12">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
                    <div className="flex-1 text-center lg:text-left">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                            Get the confidence to trade
                        </h2>
                        <p className="text-gray-600 mb-8 leading-relaxed max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            Learn about the markets and hone your trading skills at your own
                            pace, with zero risk. Then, when you’re ready, you can easily
                            switch to real trading.
                        </p>

                        <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
                            How do I set up my free demo account?
                        </h3>
                        <ol className="list-decimal list-inside text-gray-600 space-y-3 mb-8 text-left max-w-xl lg:max-w-none mx-auto lg:mx-0">
                            <li>
                                <p>
                                    <span className="font-semibold">Log in</span> to the eToro
                                    platform or{' '}
                                    <a href="#" className="text-blue-600 hover:underline">
                                        create an account for free
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    Access the demo account by selecting{' '}
                                    <span className="font-semibold">Virtual Portfolio</span> from
                                    the menu under your username
                                </p>
                            </li>
                            <li>
                                <p>
                                    Now you can practise trading{' '}
                                    <span className="font-semibold">live markets</span> in real
                                    time without risking any capital
                                </p>
                            </li>
                        </ol>

                        <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition duration-300">
                            Get Started
                        </button>
                    </div>

                    <div className="flex-1 flex justify-center lg:justify-end">
                        <div className="w-full max-w-md lg:max-w-lg aspect-video bg-gray-200 rounded-lg overflow-hidden relative shadow-lg">
                            <img
                                src="maxresdefault (1).jpg"
                                alt="Video Thumbnail"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <svg
                                    className="w-20 h-20 text-white opacity-90 cursor-pointer"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)


}

export default DemoAc;