"use client";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import Image from "next/image";

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

                        <nav className="hidden md:flex gap-5 text-[#404059] text-base">
                            <a href="#" className="hover:text-black">Trading</a>
                            <a href="#" className="hover:text-black">Investing</a>
                            <a href="#" className="hover:text-black">Top Markets</a>
                            <a href="#" className="hover:text-black">Education</a>
                            <a href="#" className="hover:text-black">Company</a>
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

                    <button
                        className="md:hidden text-[#404059]"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {menuOpen && (
                    <div className="md:hidden flex flex-col space-y-4 px-6 pb-4 text-[#404059] text-base bg-white shadow-md">
                        <a href="#" className="hover:text-black">Trading</a>
                        <a href="#" className="hover:text-black">Investing</a>
                        <a href="#" className="hover:text-black">Top Markets</a>
                        <a href="#" className="hover:text-black">Education</a>
                        <a href="#" className="hover:text-black">Company</a>

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