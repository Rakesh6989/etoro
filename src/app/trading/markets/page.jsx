"use client"
import { BarChart2, Network, Droplets, Coins, BarChart3, Boxes } from "lucide-react";
import HeroBanner from "@/components/HeroBanner"
import MarketDataItem from "@/components/MarketDataItem"
import StockSection from "@/components/StockCard";
import CallToAction from "@/components/CallToAction";
const statsData = [
    { icon: <BarChart2 size={28} />, value: 6452, label: "Stocks" },
    { icon: <Network size={28} />, value: 756, label: "ETFs" },
    { icon: <Droplets size={28} />, value: 49, label: "Commodities" },
    { icon: <Coins size={28} />, value: 62, label: "Currencies" },
    { icon: <BarChart3 size={28} />, value: 32, label: "Indices" },
    { icon: <Boxes size={28} />, value: 143, label: "Crypto" },
];
const Markets = () => {
    const stocks = [
        {
            symbol: 'AMZN',
            company: 'Amazon.com Inc',
            price: '142.56',
            change: '+2.8%',
            isPositive: true,
            bgColor: 'bg-gray-400',
            logo: 'amazon'
        },
        {
            symbol: 'TSLA',
            company: 'Tesla Motors, Inc.',
            price: '334.37',
            change: '-12 (-3.5%)',
            isPositive: false,
            bgColor: 'bg-red-500',
            logo: 'tesla'
        },
        {
            symbol: 'AAPL',
            company: 'Apple Inc.',
            price: '232.51',
            change: '+0.8%',
            isPositive: true,
            bgColor: 'bg-gray-400',
            logo: 'apple'
        },
        {
            symbol: 'GOOGL',
            company: 'Alphabet Inc.',
            price: '2,847.63',
            change: '+1.2%',
            isPositive: true,
            bgColor: 'bg-gray-400',
            logo: 'google'
        },
        {
            symbol: 'MSFT',
            company: 'Microsoft Corp.',
            price: '421.89',
            change: '+2.1%',
            isPositive: true,
            bgColor: 'bg-gray-400',
            logo: 'microsoft'
        }
    ];
    const data = {
        title: "Invest in stocks from around the globe",
        description: "From technology to healthcare, New York to Hong Kong — with fractional shares, it’s easy to fill your portfolio with a variety of leading stocks from the world’s top exchanges.",
        buttonText: "Start Investing in Stocks",
        buttonLink: "#",
        disclaimer: "Your capital is at risk. Other fees apply. eToro Service ARSN 637 489 466 promoted by eToro AUS Capital Limited ACN 612 791 803 AFSL 491139. Capital at risk. See PDS.",
    };

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
            <div className="flex">



                <div className="w-[50%]">

                    <CallToAction
                        title={data.title}
                        description={data.description}
                        buttonText={data.buttonText}
                        buttonLink={data.buttonLink}
                        disclaimer={data.disclaimer}
                    />

                </div>
                <div className="w-[50%]">

                    <StockSection


                        stocks={stocks}
                    />

                </div>

            </div>
        </>

    )
}
export default Markets