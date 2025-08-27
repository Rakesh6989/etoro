import React from 'react';
import { Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const FooterLinks = () => {
  const socialLinks = [
    { icon: Twitter, href: "#" },
    { icon: Facebook, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  const sections = [
    {
      title: "Top instruments",
      links: [
        "Bitcoin (BTC)", "Ethereum (ETH)", "Shiba (in Millions)",
        "Tesla", "Apple", "Nio"
      ]
    },
    {
      title: "Support",
      links: [
        "Help Center", "How to deposit", "How to withdraw",
        "How to Open an Account", "How to verify your account",
        "Customer Service", "Client Vulnerability"
      ]
    },
    {
      title: "Learn more",
      links: [
        "How CopyTrading Works", "Responsible Trading", "Interest on Balance",
        "What is Leverage & Margin", "Buy and Sell Explained", "Market research",
        "Tax Report", "eToro Academy"
      ]
    },
    {
      title: "About Us",
      links: [
        "About eToro", "eToro Reviews", "Careers", "Our offices",
        "Accessibility", "Imprint"
      ]
    },
    {
      title: "Privacy and Regulation",
      links: [
        "eToro Cookie Policy", "Privacy Policy", "Regulation & License",
        "General Risk Disclosure", "Terms & Conditions", "Key Information Documents"
      ]
    },
    {
      title: "Partners and Promotions",
      links: [
        "Invite a friend", "Affiliate Program", "eToro Club",
        "Investment Insurance", "Partner Smart Portfolios"
      ]
    },
  ];

  return (
    <section className="bg-gray-100 py-16 text-gray-700">
      <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-8">

        <div className="flex flex-col space-y-8">
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Find Us On</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="text-gray-500 hover:text-gray-900 transition-colors duration-200" aria-label={social.icon.name}>
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Download our app from the stores</h4>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" aria-label="App Store">
                <img src="/app-store.svg" alt="App Store" className="h-10" />
              </a>
              <a href="#" aria-label="Google Play">
                <img src="/google-play.svg" alt="Google Play" className="h-10" />
              </a>
            </div>
          </div>
        </div>

        {sections.map((section, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="text-sm font-bold text-gray-900 mb-4">{section.title}</h4>
            <ul className="space-y-2">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href="#" className="text-sm hover:text-gray-900 transition-colors duration-200">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>
    </section>
  );
};

export default FooterLinks;