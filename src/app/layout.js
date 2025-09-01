import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins } from "next/font/google";

import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import FooterLinks from "@/components/FooterLinks";
import DisclaimerFooter from "@/components/DisclaimerFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "etoro",
  description: "crypto currency",
};

export default function RootLayout({ children }) {
  const text = `eToro is a multi-asset investment platform. Crypto investments are risky
        and highly volatile. Tax may apply. Understand the risks`;
  const url = "/about";
  const BtnText = "Here";

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <TopBar text={text} url={url} BtnText={BtnText} />
        <Header />
        <main>{children}</main>
        
      </body>
    </html>
  );
}
