import CfdTradingSection from "@/components/CfdTradingSection";
import BestOfBothWorlds from "@/components/BestOfBothWorlds";
import LocalAssetsSection from "@/components/LocalAssetsSection";
import FxFeesSection from "@/components/FxFeesSection";
import ConvertSection from "@/components/ConvertSection";
import FundsSection from "@/components/FundsSection";
import TradeStepsSection from "@/components/TradeStepsSection";
import EToroCardComponent from "@/components/EtoroCardComponent";
import AllInOnePlace from "@/components/AllinOnePlace";
import TermsAndConditions from "@/components/TermAndCondition";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import DisclaimerFooter from "@/components/DisclaimerFooter";
const localtrading = () => {
    const faqData = [
        {
            question: "What are the benefits of using funds from my EUR account for trading on eToro?",
            answer: "Using funds from your EUR account allows for faster withdrawals, simplified transfers, and potentially reduced fees compared to other methods. Club members also continue to enjoy exclusive offers alongside eToro Money benefits."
        },
        {
            question: "Who can use EUR account services?",
            answer: "EUR account services are available only to EU residents via SEPA bank transfers. eToro Money services are designed for payment transactions and follow EU regulatory standards."
        },
        {
            question: "Can I have both a USD and an EUR account?",
            answer: "Yes, you can hold both USD and EUR accounts. However, specific services and conversion fees may apply when transferring funds between them."
        },
        {
            question: "Can I have both an EUR and a GBP account?",
            answer: "No, currently you can only hold a EUR account alongside a USD account. A GBP account is not supported."
        },
        {
            question: "What type of trades can I fund with my EUR account?",
            answer: "You can use funds from your EUR account to trade across various instruments on the eToro platform, subject to the platform’s available assets and services."
        },
        {
            question: "What process does my money go through when I open a position using funds from my EUR account?",
            answer: "When you open a position, the required funds are transferred from your EUR account to the eToro investment platform instantly for trade execution."
        },
        {
            question: "What process does my money go through when I close a position and send funds to my EUR account?",
            answer: "When closing a position, proceeds are first settled in your eToro investment account, then transferred to your EUR account if requested."
        },
        {
            question: "How are fees applied when using funds from my EUR account?",
            answer: "FX conversion fees may apply for withdrawals from the eToro platform to your EUR account. These are generally lower compared to other withdrawal methods."
        },
        {
            question: "How do I add funds to my EUR account?",
            answer: "You can add funds to your EUR account using SEPA bank transfers. Other deposit methods are not currently supported."
        },
        {
            question: "How do I transfer funds between my EUR account (eToro Money) and my USD account (eToro investment)?",
            answer: "Funds can be transferred seamlessly between your EUR and USD accounts within eToro Money and the eToro investment platform, though FX conversion fees may apply."
        },
        {
            question: "How are funds in my EUR account protected?",
            answer: "Funds in your EUR account are safeguarded under EU regulatory standards. However, they are not covered by the Depositor Compensation Scheme (DCS) in Malta."
        },
        {
            question: "What’s the maximum position size that I can close to my EUR account?",
            answer: "The maximum position size depends on platform limits and regulatory requirements. Please check eToro’s platform guidelines for the most up-to-date details."
        }
    ];

    return (

        <>
            <CfdTradingSection
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Trading", href: "/trading" },
                    { label: "Currency Accounts", href: "/currency-accounts" },
                ]}
                titleLines={["TRADE LOCAL", "TRADE GLOBAL"]}
                titleColors={["#22c55e", "#1a2033"]}
                description="Discover eToro’s EUR account: get the advantages of a local broker and a global investment platform — all in one"
                buttonText="Open a EUR Account"
                buttonLink="/eur-account"
                imageSrc="/Trade-local-trade-global.png"
                imageAlt="Man holding phone with global trading icons"
            />
            <BestOfBothWorlds />
            <LocalAssetsSection />
            <FxFeesSection />
            <ConvertSection />
            <FundsSection />
            <TradeStepsSection />
            <EToroCardComponent />
            <AllInOnePlace />
            <div className="flex justify-center p-6 sm:p-8 md:p-12 lg:p-16 bg-white">
                <div className="max-w-4xl mx-auto space-y-6">
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        <span className="font-bold">Legal bits:</span> EUR account (eToro Money Malta Ltd.) services are only available to EU residents via SEPA bank transfers only. eToro Money services are designed for the purpose of making payment transactions. Funds in your EUR account are safeguarded per regulatory standards, but are not covered by the Depositor Protection Scheme (DCS in Malta). Please refer to the <a href="#" className="text-blue-600 underline hover:text-blue-800">safe and secure page</a> for further information.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                        Currently only crypto-to-crypto conversion is available. FX conversion fees for withdrawals from the eToro investment platform to the EUR account can be found <a href="#" className="text-blue-600 underline hover:text-blue-800">here</a>. Withdrawals made from the eToro investment platform to the EUR account are faster in comparison to other withdrawal methods available on the investment platform. Club members will continue to enjoy Club offers alongside the eToro Money benefits.
                    </p>
                </div>
            </div>
            <TermsAndConditions />
            <FAQ data={faqData} />
            <Footer/>
            <DisclaimerFooter/>
        </>
    )


}
export default localtrading;