'use client';

import CryptoHero from "@/components/CryptoHero";
import WhyInvestSection from "@/components/WhyInvestSection";
import CryptoAssets from "@/components/CryptoAssets";
import CommunitySection from "@/components/CommunitySection";
import FingertipsSection from "@/components/FingertipsSection";
import TradeWithCryptoSection from "@/components/TradeWithCryptoSection";
import LearnCryptoSection from "@/components/LearnCryptoSection";
import EtoroAcademySection from "@/components/EtoroAcademySection";
import Footer from "@/components/Footer";
import DisclaimerFooter from "@/components/DisclaimerFooter";
import FAQ from "@/components/FAQ";
export default function Crypto() {
    const faqData = [
        {
            "question": "What is cryptocurrency?",
            "answer": "A cryptocurrency is a digital or virtual currency that is secured by cryptography, making it nearly impossible to counterfeit or double-spend. Many cryptocurrencies are decentralized networks based on blockchain technology—a distributed ledger enforced by a disparate network of computers."
        },
        {
            "question": "What is a blockchain?",
            "answer": "A blockchain is a decentralized, distributed digital ledger that records transactions across many computers. Each 'block' in the chain contains a number of transactions, and every time a new transaction occurs on the blockchain, a record of that transaction is added to a new block."
        },
        {
            "question": "What is staking?",
            "answer": "Staking is the process of actively participating in transaction validation on a proof-of-stake (PoS) blockchain. It involves locking up your cryptocurrency in a wallet to support the network's operations, and in return, you earn rewards, similar to earning interest in a savings account."
        },
        {
            "question": "How do I trade cryptocurrency?",
            "answer": "To trade cryptocurrency, you typically need to use a cryptocurrency exchange platform like eToro. You first need to create an account, deposit funds (either fiat currency like USD or other cryptocurrencies), and then you can buy and sell various cryptocurrencies based on their current market prices. You can choose from different types of orders, such as market orders or limit orders, to control your trades."
        },
        {
            "question": "Which cryptocurrencies can I trade on the eToro platform?",
            "answer": "eToro offers a wide range of cryptocurrencies for trading. You can trade popular coins like Bitcoin (BTC), Ethereum (ETH), Ripple (XRP), Litecoin (LTC), and many others. The available list is subject to change, and new coins are added periodically, so it's best to check the platform directly for the most current list."
        },
        {
            "question": "How do I transfer coins from the eToro trading platform to my eToro Wallet?",
            "answer": "To transfer coins from your eToro trading platform to your eToro Money Crypto Wallet, you'll need to open a position on the trading platform and then initiate the transfer from the portfolio screen. Not all coins are transferable, and there may be minimum transfer amounts. It is important to note that once a cryptocurrency is transferred to the eToro Wallet, it cannot be transferred back to the eToro trading platform."
        }
    ]
    return (
        <>
            <CryptoHero />
            <WhyInvestSection />
            <CryptoAssets />
            <CommunitySection />
            <FingertipsSection />
            <TradeWithCryptoSection />
            <LearnCryptoSection />
            <EtoroAcademySection />
            <FAQ data={faqData} />
            <Footer />
            <div className="bg-gray-900 text-gray-400 font-sans p-6 md:p-12">
                <div className="Container-Div mx-auto space-y-8">
                    <div>
                        <h2 className="text-lg font-semibold text-white mb-2">General Risk Disclosure | Terms & Conditions</h2>
                        <p className="text-sm leading-relaxed">
                            You should seek advice from an independent and suitably licensed financial advisor and ensure that you have the risk appetite, relevant experience and knowledge before you decide to trade. Under no circumstances shall eToro have any liability to any person for any direct, indirect, special, consequential or incidental damages whatsoever.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm leading-relaxed">
                            The provision of Virtual Assets Services is governed by the Virtual Assets Service Providers Act 2024. No compensation scheme is available under the said Act. For dispute resolution, you have access to the Financial Services Authority dispute resolution mechanisms.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm leading-relaxed">
                            The wallet is provided by eToro (Seychelles) Ltd (&quot;eToroSey&quot;), a limited liability company incorporated in Seychelles with company number 8426215-1 and with its registered office at Room 12, Kingsgate House, Independence Avenue, Victoria, Mahe, Seychelles. eToro Seychelles is a regulated Virtual Asset Service Provider licensed by the Financial Services Authority (&quot;FSA&quot;) under the Virtual Asset Service Providers Act, 2024. <a href="#" className="text-blue-500 hover:underline">See Terms of Use.</a>
                        </p>

                    </div>

                    <div>
                        <p className="text-sm leading-relaxed">
                            Trading with eToro by following and/or copying or replicating the trades of other traders involves a high level of risk, even when following and/or copying or replicating the top-performing traders. Such risks include the risk that you may be following/copying the trading decisions of possibly inexperienced/unprofessional traders, or traders whose ultimate purpose or intention, or financial status may differ from yours. Past performance of an eToro Community Member is not a reliable indicator of their future performance.
                        </p>
                    </div>

                    <div>
                        <p className="text-sm leading-relaxed">
                            Content on eToro’s social trading platform is generated by members of its community and does not contain advice or recommendations by or on behalf of eToro - Your Social Investment Network.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}