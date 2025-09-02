// components/TradeWithCryptoSection.jsx
import React from 'react';
import { Flag, Download, ArrowRight, Wallet } from 'lucide-react';
import Link from 'next/link';

const TradeWithCryptoSection = () => {
    return (
        <div className="bg-white py-16 px-6 sm:px-12 lg:px-24 text-center">
            <div className="container mx-auto">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a2033] mb-4">
                    Trade with your crypto on eToro
                </h2>
                <p className="text-gray-700 max-w-3xl mx-auto mb-8">
                    Trade 100+ cryptoassets on a trusted global multi-asset broker, with powerful tools, user-friendly features, and industry-leading security protocols—all with transparent, fixed fees.
                </p>
                <p className="text-gray-700 max-w-3xl mx-auto mb-12">
                    <Link href="#" className="text-[#3b82f6] font-semibold hover:underline">
                        Eligible eToro Club members
                    </Link>
                    {' '}can also take their crypto further by <span className="text-[#3b82f6] font-semibold">selling it for EUR or GBP</span>, and unlocking the flexibility to reinvest, trade, or explore new opportunities.
                </p>

                <h3 className="text-xl font-semibold text-[#1a2033] mb-8">Here's how it works</h3>

                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-[#50b240] rounded-full p-3 mb-4">
                            <Flag className="text-white w-6 h-6" />
                        </div>
                        <p className="font-semibold text-lg text-[#1a2033] mb-2">
                            If you don't have one, create your eToro GBP or EUR account.
                        </p>
                        <Link href="#" className="text-[#3b82f6] text-sm hover:underline">
                            (Click here)
                        </Link>
                    </div>

                    {/* Step 2 */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-[#3b82f6] rounded-full p-3 mb-4">
                            <Download className="text-white w-6 h-6" />
                        </div>
                        <p className="font-semibold text-lg text-[#1a2033]">
                            Download the eToro Money app to get your eToro crypto wallet.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-[#3b82f6] rounded-full p-3 mb-4">
                            <ArrowRight className="text-white w-6 h-6" />
                        </div>
                        <p className="font-semibold text-lg text-[#1a2033]">
                            Transfer your crypto to your eToro Crypto Wallet.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <div className="bg-[#50b240] rounded-full p-3 mb-4">
                            <Wallet className="text-white w-6 h-6" />
                        </div>
                        <p className="font-semibold text-lg text-[#1a2033]">
                            Sell your crypto for EUR, then reinvest your funds or explore new opportunities.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <h3 className="text-2xl font-bold text-[#1a2033] mb-6">
                    Your crypto, your choice. Take it further with eToro
                </h3>
                <Link href="#">
                    <span className="bg-[#50b240] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#60c250] transition-colors">
                        Download eToro Crypto Wallet
                    </span>
                </Link>
                <p className='text-xs text-center mt-10'>

                    Don’t invest unless you’re prepared to lose all the money you invest. This is a high-risk investment and you should not expect to be protected if something goes wrong. Take 2 mins to learn more

                    The Crypto Wallet is offered and operates via eToro (Europe) Ltd. eToro EUR account operates via eToro Money Malta Ltd.

                </p>
            </div>
        </div>
    );
};

export default TradeWithCryptoSection;