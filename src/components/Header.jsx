"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navItems = [
    {
        label: "Trading",
        links: [
            { label: "Trade Markets on eToro", href: "/trading/markets" },
            { label: "Trading Platform", href: "/trading/platform" },
            { label: "Crypto on eToro", href: "/crypto" },
            { label: "CFD Trading", href: "/trading/cfd" },
            { label: "Local Trading", href: "local-trading" },
            { label: "Demo Account", href: "/demo-account" },
            { label: "Fees", href: "/trading/fees" },
            { label: "Market Hours and Events", href: "/trading/market-hours" },
            { label: "Professional Account", href: "/trading/professional" },
        ],
    },
    {
        label: "Investing",
        links: [
            { label: "Stocks", href: "/investing/stocks" },
            { label: "Copy Top Investors", href: "/investing/copy" },
            { label: "Investment Portfolios", href: "/investing/portfolios" },
            { label: "Popular Investor Program", href: "/investing/popular" },
            { label: "Staking Crypto", href: "/investing/staking" },
            { label: "eToro Earnings Reports Calendar", href: "/investing/calendar" },
            { label: "Delta", href: "/investing/delta" },
            { label: "ESG", href: "/investing/esg" },
        ],
    },
    {
        label: "Top Markets",
        links: [
            { label: "Cryptocurrencies", href: "/markets/crypto" },
            { label: "Stocks", href: "/markets/stocks" },
            { label: "Commodities", href: "/markets/commodities" },
            { label: "Currencies", href: "/markets/currencies" },
            { label: "All Markets", href: "/markets" },
        ],
    },
    {
        label: "Education",
        links: [
            { label: "eToro Academy", href: "/education/academy" },
            { label: "News and Analysis", href: "/education/news" },
            { label: "In Depth Analysis", href: "/education/analysis" },
            { label: "Digest & Invest", href: "/education/digest" },
            { label: "Loud Investing", href: "/education/loud" },
            { label: "Retail Investor Beat", href: "/education/retail" },
            { label: "Account Security", href: "/education/security" },
        ],
    },
    {
        label: "Company",
        links: [
            { label: "eToro Unlocked", href: "/company/unlocked" },
            { label: "About", href: "/company/about" },
            { label: "Help Center", href: "/company/help" },
            { label: "Investor Relations", href: "/company/investor" },
            { label: "Media Center", href: "/company/media" },
            { label: "Careers", href: "/company/careers" },
            { label: "eToro Club", href: "/company/club" },
            { label: "eToro Money", href: "/company/money" },
            { label: "Socially Responsible", href: "/company/sr" },
        ],
    },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const router = useRouter();
    const headerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (headerRef.current && !headerRef.current.contains(event.target)) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleLinkClick = () => {
        setOpenDropdown(null);
        setMenuOpen(false);
    };

    const handleMouseEnter = (index) => {
        setOpenDropdown(index);
    };

    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <div className="bg-white shadow-lg" ref={headerRef}>
            <header className="w-full Container-Div">
                <div className="flex items-center justify-between px-6 py-4">
                    <div className="flex items-center space-x-8">
                        <Link href="/" onClick={handleLinkClick}>
                            <Image
                                src="/logo.png"
                                alt="etoro"
                                width={150}
                                height={40}
                                className="object-contain cursor-pointer"
                            />
                        </Link>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex gap-6 text-[#404059] text-base relative">
                            {navItems.map((item, index) => (
                                <div
                                    key={item.label}
                                    className="group relative hover:bg-[#f7f7f7] p-2"
                                    onMouseEnter={() => handleMouseEnter(index)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    <button className="text-lg text-[#404059] cursor-pointer z-20">
                                        {item.label}
                                    </button>

                                    <div
                                        className={`absolute left-0 top-full ${openDropdown === index ? 'block' : 'hidden'
                                            } bg-white shadow-lg rounded-md w-80 z-20`}
                                    >
                                        <ul className="flex flex-col p-5 text-sm text-gray-700">
                                            {item.links.map((link) => (
                                                <li key={link.href}>
                                                    <Link
                                                        href={link.href}
                                                        className="block px-3 py-2 hover:text-[#13C737] rounded-md text-lg"
                                                        onClick={handleLinkClick}
                                                    >
                                                        {link.label}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center space-x-6 text-[#404059] text-base">
                        <button
                            className="flex items-center space-x-1 hover:text-black"
                            onClick={() => {
                                router.push("/search");
                                handleLinkClick();
                            }}
                        >
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

                        <Link href="/login" className="hover:text-black text-[#404059]" onClick={handleLinkClick}>
                            Login
                        </Link>
                    </div>

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
                                        <li key={link.href}>
                                            <Link
                                                href={link.href}
                                                className="block hover:text-black"
                                                onClick={handleLinkClick}
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        <hr className="border-gray-200" />

                        <button
                            className="flex items-center space-x-1 hover:text-black"
                            onClick={() => {
                                router.push("/search");
                                handleLinkClick();
                            }}
                        >
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

                        <Link href="/login" className="hover:text-black" onClick={handleLinkClick}>
                            Login
                        </Link>
                    </div>
                )}
            </header>
        </div>
    );
}