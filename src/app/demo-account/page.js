import CfdTradingSection from "@/components/CfdTradingSection";
const DemoAc = () => {
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
            imageSrc="/demo-account-half-cover (1).png"
            imageAlt="Man and woman checking financial app on phone"
        />


    </>)


}

export default DemoAc;