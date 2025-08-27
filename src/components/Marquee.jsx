"use client"
const AwardsMarquee = () => {
    const awards = [
        {
            title: "Best Platform",
            subtitle: "TechAwards 2024",
            icon: "🏆"
        },
        {
            title: "Best Crypto Trading Platform",
            subtitle: "Beginners Finder 2023",
            icon: "🌟"
        },
        {
            title: "Winner - Share Dealing Innovation",
            subtitle: "Finder 2023",
            icon: "🥇"
        },
        {
            title: "#1 Ease of Use",
            subtitle: "ForexBrokers 2024",
            icon: "⭐"
        },
        {
            title: "Best Stock Trading",
            subtitle: "BrokerChooser Awards",
            icon: "🏅"
        },
        {
            title: "Innovation Leader",
            subtitle: "Finance Awards 2024",
            icon: "💎"
        }
    ];

    const duplicatedAwards = [...awards, ...awards];

    return (
        <div className="bg-gradient-to-r from-purple-900 via-black to-black text-white py-4 overflow-hidden relative">
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-purple-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-purple-900 to-transparent z-10"></div>

            <div className="flex animate-marquee whitespace-nowrap">
                {duplicatedAwards.map((award, index) => (
                    <div key={index} className="flex items-center mx-8 flex-shrink-0">
                        <div className="flex items-center mr-4">
                            <span className="text-green-400 text-2xl">🌿</span>
                            <span className="text-green-400 text-2xl transform scale-x-[-1]">🌿</span>
                        </div>

                        <div className="text-center">
                            <div className="text-lg font-bold text-yellow-300 mb-1">
                                {award.title}
                            </div>
                            <div className="text-sm text-gray-300">
                                {award.subtitle}
                            </div>
                        </div>

                        <div className="ml-4 text-2xl">
                            {award.icon}
                        </div>

                        <div className="flex items-center ml-4">
                            <span className="text-green-400 text-2xl">🌿</span>
                            <span className="text-green-400 text-2xl transform scale-x-[-1]">🌿</span>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
        }
      `}</style>
        </div>
    );
};

export default AwardsMarquee;