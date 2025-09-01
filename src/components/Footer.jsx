import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a2033] text-gray-300 py-12 px-6 sm:px-12 lg:px-24">
      <div className="container mx-auto max-w-6xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* eToro Info */}
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">eToro</span>
            </div>
            <p className="text-sm">
              With innovative investment tools and a collaborative trading community, eToro
              empowers millions of users in over 140 countries to trade and invest in a simple and
              transparent way.
            </p>
          </div>

          {/* Top Instruments */}
          <div>
            <h4 className="font-semibold text-white mb-4">Top Instruments</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Bitcoin (BTC)</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Ethereum (ETH)</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Amazon shares</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tesla</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Apple</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Nio</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">How to Deposit</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">How to Withdraw</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">How to Open an Account</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">How to Verify Your Account</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Customer Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Client Vulnerability</Link></li>
            </ul>
          </div>

          {/* Learn More */}
          <div>
            <h4 className="font-semibold text-white mb-4">Learn More</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">How CopyTrading Works</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Responsible Trading</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Interest on Balance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">What is Leverage & Margin</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Buy and Sell Explained</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Tax report</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">eToro Academy</Link></li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />

        {/* Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Find us on */}
          <div>
            <h4 className="font-semibold text-white mb-4">Find us on</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="p-2 border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" aria-label="Twitter" className="p-2 border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" aria-label="Instagram" className="p-2 border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
                <Instagram className="w-4 h-4" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="p-2 border border-gray-600 rounded-full hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* About Us */}
          <div>
            <h4 className="font-semibold text-white mb-4">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About eToro</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">eToro Reviews</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Our Offices</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Accessibility</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Imprint</Link></li>
            </ul>
          </div>

          {/* Privacy and Regulation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Privacy and Regulation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">eToro Cookie Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Regulation & License</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">General Risk Disclosure</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Partners and Promotions */}
          <div>
            <h4 className="font-semibold text-white mb-4">Partners and Promotions</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Invite a Friend</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Affiliate Program</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">eToro Club</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Investment Insurance</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Partner Smart Portfolios</Link></li>
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="flex flex-col md:flex-row md:justify-start md:items-start space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12">
          <div>
            <h4 className="font-semibold text-white mb-4">Download our app from the stores</h4>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Download on the App Store">
                <div className="relative w-[130px] h-[40px]">
                  <Image
                    src="/appstore.svg"
                    alt="App Store"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
              <Link href="#" aria-label="Get it on Google Play">
                <div className="relative w-[130px] h-[40px]">
                  <Image
                    src="/googleplay.svg"
                    alt="Google Play"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-gray-700 my-8" />
      </div>
    </footer>
  );
};

export default Footer;