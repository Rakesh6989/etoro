"use client"
import { BarChart2, Network, Droplets, Coins, BarChart3, Boxes } from "lucide-react";
import HeroBanner from "@/components/HeroBanner"
import MarketDataItem from "@/components/MarketDataItem"
import StockSection from "@/components/StockCard";
const statsData = [
    { icon: <BarChart2 size={28} />, value: 6452, label: "Stocks" },
    { icon: <Network size={28} />, value: 756, label: "ETFs" },
    { icon: <Droplets size={28} />, value: 49, label: "Commodities" },
    { icon: <Coins size={28} />, value: 62, label: "Currencies" },
    { icon: <BarChart3 size={28} />, value: 32, label: "Indices" },
    { icon: <Boxes size={28} />, value: 143, label: "Crypto" },
];
const Markets = () => {


    return (

        <>
            <HeroBanner
                breadcrumb={true}
                title="Trade and invest "
                highlight="in top markets"
                description="Manage all of your financial assets, long and short term, in one portfolio."
                buttonText="Let's Start"
                buttonLink="/staking/start"
                imageSrc="/Trade-Markets-on-eToro_desktop.png"
                imageAlt="eToro staking"
                termsText=""
                descclass="text-[#13c636]"

            />
            <MarketDataItem stats={statsData} />
            <StockSection />
        </>

    )
}
export default Markets