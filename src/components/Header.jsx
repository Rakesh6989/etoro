"use client";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";

const navItems = [
    {
        label: "Trading",
        links: [
            "Trade Markets on eToro",
            "Trading Platform",
            "Crypto on eToro",
            "CFD Trading",
            "Local Trading",
            "Demo Account",
            "Fees",
            "Market Hours and Events",
            "Professional Account",
        ],
    },
    {
        label: "Investing",
        links: [
            "Stocks",
            "Copy Top Investors",
            "Investment Portfolios",
            "Popular Investor Program",
            "Staking Crypto",
            "eToro Earnings Reports Calendar",
            "Delta",
            "ESG"
        ],
    },
    {
        label: "Top Markets",
        links: ["Cryptocurrencies",
            "Stocks",
            "Commodities",
            "Currencies",
            "All Markets"],
    },
    {
        label: "Education",
        links: ["eToro Academy",
            "News and Analysis",
            "In Depth Analysis",
            "Digest & Invest",
            "Loud Investing",
            "Retail Investor Beat",
            "Account Security"],
    },
    {
        label: "Company",
        links: ["eToro Unlocked",
            "About",
            "Help Center",
            "Investor Relations",
            "Media Center",
            "Careers",
            "eToro Club",
            "eToro Money",
            "Socially Responsible"],
    },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="bg-white shadow-lg">
            <header className="w-full Container-Div">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center space-x-8">
                        <Image
                            src="/logo.png"
                            alt="etoro"
                            width={100}
                            height={40}
                            className="object-contain"
                        />

                        <nav className="hidden md:flex gap-6 text-[#404059] text-base relative ">
                            {navItems.map((item) => (
                                <div key={item.label} className="group  relative hover:bg-[#f7f7f7] p-2 ">
                                    <button className=" text-lg text-[#404059] cursor-pointer z-20">
                                        {item.label}
                                    </button>

                                    <div className="absolute cursor-pointer left-0 top-full hidden group-hover:block bg-white shadow-lg rounded-md w-80 z-20">
                                        <ul className="flex flex-col p-5 text-sm text-gray-700">
                                            {item.links.map((link) => (
                                                <li key={link}>
                                                    <a
                                                        href="#"
                                                        className="block px-3 py-2 hover:bg-gray-100 rounded-md text-lg"
                                                    >
                                                        {link}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center space-x-6 text-[#404059] text-base">
                        <button className="flex items-center space-x-1 hover:text-black">
                            <Search size={18} />
                            <span>Search</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-black">
                            <Image
                                src="/uk-flag.jpg"
                                alt="English (UK)"
                                width={20}
                                height={20}
                                className="rounded-sm"
                            />
                            <span>English (UK)</span>
                        </button>
                        <a href="#" className="hover:text-black text-[#404059]">
                            Login
                        </a>
                    </div>

                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden text-[#404059]"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {menuOpen && (
                    <div className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-[#404059] text-base bg-white shadow-md">
                        {navItems.map((item) => (
                            <div key={item.label}>
                                <p className="font-semibold">{item.label}</p>
                                <ul className="ml-3 mt-1 space-y-1">
                                    {item.links.map((link) => (
                                        <li key={link}>
                                            <a href="#" className="block hover:text-black">
                                                {link}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <hr className="border-gray-200" />

                        <button className="flex items-center space-x-1 hover:text-black">
                            <Search size={18} />
                            <span>Search</span>
                        </button>
                        <button className="flex items-center space-x-1 hover:text-black">
                            <Image
                                src="/uk-flag.jpg"
                                alt="English (UK)"
                                width={20}
                                height={20}
                                className="rounded-sm"
                            />
                            <span>English (UK)</span>
                        </button>
                        <a href="#" className="hover:text-black">Login</a>
                    </div>
                )}
            </header>
        </div>
    );
}
