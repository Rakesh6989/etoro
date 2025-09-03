"use client";
import React from "react";
import Image from "next/image";
const SocialTrading = () => {
    return (
        <div className="Container-Div">

            <div className="mx-auto  py-7">
                <p className="text-2xl font-black text-[#000] text-center">Social trading
                </p>
                <div className="max-w-[70%] mx-auto">

                    <p className="text-[#000] text-center text-xl py-3">

                        Since 2010, eToro has placed a growing focus on social trading, harnessing the wisdom of the crowd for the benefit of its clients.



                    </p>

                </div>

                <div className="mx-auto">

                    <Image

                        height={600}
                        width={600}
                        src="/bitco.png"
                        priority
                        alt="bitcoin"
                        className="w-full object-contain"
                    />

                </div>
                <div className="max-w-[80%] mx-auto">

                    <p className="text-[#777] text-center text-xl py-3">

                       One of eToro’s key differentiators is the fact that it created a community of traders and investors, in contrast to the often solitary feeling of trading online. eToro is a bustling online social network of traders who interact, discuss ideas and share their trading decisions and strategies on the social news feed.



                    </p>

                </div>
            </div>

        </div>
    );
};

export default SocialTrading;
