"use client";
import React from "react";
import CfdTradingSection from "@/components/CfdTradingSection";
import FeaturesSection from "@/components/FeaturesSectionoftrade";
import AssetShowcase from "@/components/AssetShowcase";
import FeatureSlider from "@/components/FeatureSlidermovement";
import StayAheadSection from "@/components/StayAheadSection";
import EducationalArticles from "@/components/EducationalArticles";
import TestDriveSection from "@/components/TestDriveSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
const Cfd = () => {
    const faqData = [
        {
            "question": "What is CFD trading?",
            "answer": "CFD trading, or Contract for Difference trading, allows you to speculate on the rising or falling prices of fast-moving global financial markets (such as forex, indices, commodities, shares, etc.) without actually owning the underlying assets."
        },
        {
            "question": "How do CFDs work?",
            "answer": "When you trade a CFD, you are entering into a contract with a broker. You and the broker agree to exchange the difference in the price of an asset from the time the contract is opened until the time it is closed. If the price moves in your favor, you earn a profit; if it moves against you, you incur a loss."
        },
        {
            "question": "What does “underlying asset” mean?",
            "answer": "An underlying asset is the financial instrument or security on which a derivative, like a CFD, is based. When you trade a CFD, you don't buy or sell the actual asset (like a share of a company), but rather a contract whose value is derived from that asset's price movement."
        },
        {
            "question": "Which assets can I trade as CFDs?",
            "answer": "With CFDs, you can trade a wide variety of assets, including stocks, indices, commodities (like gold and oil), currencies (forex), and cryptocurrencies. The specific assets available will depend on your broker."
        },
        {
            "question": "What is leveraged trading?",
            "answer": "Leveraged trading allows you to open a larger position in the market with a smaller amount of initial capital. This can magnify your potential profits, but it also increases your risk of significant losses. It's a key feature of CFD trading."
        },
        {
            "question": "What is short selling?",
            "answer": "Short selling is a trading strategy where you speculate on a decrease in the price of an asset. Instead of buying low and selling high, you 'sell' a CFD first and then 'buy' it back later at a lower price, profiting from the price drop."
        },
        {
            "question": "How can I use CFDs for diversification?",
            "answer": "CFDs offer a way to diversify your portfolio by allowing you to easily access a wide range of global markets and asset classes, such as commodities and indices, without requiring large capital outlays or direct ownership of the assets."
        },
        {
            "question": "Is CFD trading legal?",
            "answer": "The legality of CFD trading varies by country. It is legal in many parts of the world, including Europe and Asia, but it is banned in some countries, such as the United States, due to regulatory restrictions."
        },
        {
            "question": "Is CFD trading safe?",
            "answer": "CFD trading involves significant risks, and it's not considered safe for inexperienced traders due to leverage. While brokers are regulated, the high risk of leverage means you can lose more than your initial deposit. It's crucial to understand the risks before trading."
        }
    ];
    return (
        <>
            <CfdTradingSection
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Trading", href: "/trading" },
                    { label: "CFD Trading", href: "/cfd-trading" },
                ]}
                titleLines={["ACCESS THE POWER OF", "CFD TRADING"]}
                titleColors={["#3b82f6", "#50b240"]}
                description="Apply leverage, go short, and trade multiple assets with CFDs on eToro's innovative, user-friendly platform."
                buttonText="Join eToro"
                buttonLink="/signup"
                imageSrc="/trading-cfd-half-cover-desk.jpg"
                imageAlt="eToro mobile app displaying CFD trading charts"
            />            <FeaturesSection />
            <AssetShowcase />
            <FeatureSlider />
            <StayAheadSection />
            <EducationalArticles />
            <TestDriveSection />
            <FAQ data={faqData} />
            <Footer />

        </>
    );
};

export default Cfd;
