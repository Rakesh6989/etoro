"use client"
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const PortfolioDiversify = () => {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    const cardsData = [
        {
            id: 'russell',
            title: 'Russell 200',
            percentage: '15%',
            progress: 85,
            className: 'bg-gradient-to-br from-indigo-500 to-purple-600',
            position: { top: '5%', right: '10%' },
            size: 'w-32 h-20 md:w-40 md:h-24'
        },
        {
            id: 'generic',
            percentage: '18%',
            progress: 72,
            className: 'bg-gradient-to-br from-gray-600 to-gray-700',
            position: { top: '15%', right: '45%' },
            size: 'w-28 h-18 md:w-36 md:h-22'
        },
        {
            id: 'bitcoin',
            title: 'Bitcoin',
            percentage: '7%',
            progress: 35,
            symbol: '₿',
            className: 'bg-gradient-to-br from-orange-500 to-red-500',
            position: { top: '25%', right: '15%' },
            size: 'w-36 h-22 md:w-44 md:h-28'
        },
        {
            id: 'apple',
            title: 'Apple',
            percentage: '30%',
            progress: 90,
            symbol: '🍎',
            className: 'bg-gradient-to-br from-gray-800 to-gray-900',
            position: { top: '40%', right: '20%' },
            size: 'w-40 h-28 md:w-52 md:h-36'
        },
        {
            id: 'spdr',
            title: 'SPDR',
            subtitle: 'S&P 500 ETF',
            percentage: '14%',
            progress: 70,
            className: 'bg-gradient-to-br from-green-400 to-green-600',
            position: { top: '50%', right: '5%' },
            size: 'w-36 h-24 md:w-44 md:h-30'
        },
        {
            id: 'ethereum',
            percentage: '5%',
            progress: 25,
            className: 'bg-gradient-to-br from-blue-500 to-purple-500',
            position: { top: '65%', right: '40%' },
            size: 'w-32 h-20 md:w-40 md:h-24'
        },
        {
            id: 'heart',
            percentage: '11%',
            symbol: '❤️',
            className: 'bg-gradient-to-br from-red-500 to-orange-500',
            position: { top: '75%', right: '10%' },
            size: 'w-30 h-18 md:w-36 md:h-22'
        }
    ];

    useEffect(() => {
        const cards = cardsRef.current;
        const container = containerRef.current;

        if (!container || cards.length === 0) return;

        cards.forEach((card, index) => {
            if (card) {
                gsap.set(card, {
                    rotation: gsap.utils.random(-15, 15),
                    scale: gsap.utils.random(0.8, 1),
                    x: gsap.utils.random(-20, 20),
                    y: gsap.utils.random(-20, 20)
                });
            }
        });

        const stackCards = () => {
            const containerRect = container.getBoundingClientRect();
            const centerX = containerRect.width / 2;
            const centerY = containerRect.height / 2;

            cards.forEach((card, index) => {
                if (!card) return;

                const cardRect = card.getBoundingClientRect();
                const containerRect = container.getBoundingClientRect();
                const delay = index * 0.1;

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: container,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1,
                        toggleActions: "play none none reverse"
                    }
                });

                tl.to(card, {
                    x: gsap.utils.random(-10, 10),
                    y: gsap.utils.random(-10, 10),
                    rotation: gsap.utils.random(-5, 5),
                    scale: 1,
                    duration: 0.3,
                    delay: delay,
                    ease: "power2.out"
                })
                    .to(card, {
                        x: centerX - cardRect.width / 2 - (cardRect.left - containerRect.left),
                        y: centerY - cardRect.height / 2 - (cardRect.top - containerRect.top) + (index * 8),
                        rotation: gsap.utils.random(-2, 2),
                        scale: 1.05,
                        duration: 0.4,
                        ease: "power3.inOut"
                    })
                    .to(card, {
                        rotation: 0,
                        scale: 1,
                        duration: 0.2,
                        ease: "back.out(1.7)"
                    });
            });
        };

        cards.forEach(card => {
            if (!card) return;

            const handleMouseEnter = () => {
                gsap.to(card, {
                    scale: 1.1,
                    rotation: gsap.utils.random(-3, 3),
                    z: 10,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            const handleMouseLeave = () => {
                gsap.to(card, {
                    scale: 1,
                    rotation: 0,
                    z: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        });

        stackCards();

        gsap.to(cards.filter(card => card), {
            yPercent: -20,
            ease: "none",
            scrollTrigger: {
                trigger: container,
                start: "top bottom",
                end: "bottom top",
                scrub: 1
            }
        });

        const createSparkle = (x, y) => {
            if (!container) return;

            const sparkle = document.createElement('div');
            sparkle.className = 'absolute w-2 h-2 bg-yellow-400 rounded-full pointer-events-none z-10';
            sparkle.style.left = x + 'px';
            sparkle.style.top = y + 'px';
            container.appendChild(sparkle);

            gsap.fromTo(sparkle,
                { scale: 0, rotation: 0, opacity: 1 },
                {
                    scale: 1.5,
                    rotation: 360,
                    opacity: 0,
                    duration: 1,
                    ease: "power2.out",
                    onComplete: () => sparkle.remove()
                }
            );
        };

        ScrollTrigger.create({
            trigger: container,
            start: "top center",
            end: "bottom center",
            onUpdate: self => {
                if (Math.random() < 0.1 && container) {
                    const rect = container.getBoundingClientRect();
                    createSparkle(
                        gsap.utils.random(0, rect.width),
                        gsap.utils.random(0, rect.height)
                    );
                }
            }
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const Card = ({ card, index }) => (
        <div
            ref={el => cardsRef.current[index] = el}
            className={`card absolute ${card.size} ${card.className} rounded-2xl shadow-xl p-3 md:p-4 text-white transform-gpu cursor-pointer`}
            style={card.position}
            data-card={card.id}
        >
            <div className="relative h-full flex flex-col justify-between">
                {card.symbol && (
                    <div className="flex items-center gap-2 mb-1">
                        <div className="text-xl md:text-2xl">{card.symbol}</div>
                        {card.title && (
                            <div className="text-xs md:text-sm opacity-80">{card.title}</div>
                        )}
                    </div>
                )}

                {!card.symbol && card.title && (
                    <div className="text-xs md:text-sm opacity-80 mb-1">{card.title}</div>
                )}

                {card.subtitle && (
                    <div className="text-xs md:text-sm opacity-80 mb-2">{card.subtitle}</div>
                )}

                <div className={`${card.id === 'apple' ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'} font-bold ${card.subtitle ? 'mb-0' : 'mb-2'}`}>
                    {card.percentage}
                </div>

                {card.progress && (
                    <div className="w-full bg-white/30 rounded-full h-1 md:h-2 mt-auto">
                        <div
                            className="bg-white h-full rounded-full transition-all duration-1000"
                            style={{ width: `${card.progress}%` }}
                        />
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className="min-h-[80vh] bg-gray-50 Container-Div">
            <div className=" mx-auto px-4 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
                    <div className="flex-1 ">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl  text-gray-900 mb-8 leading-tight">
                            Diversify your portfolio
                        </h1>

                        <p className="text-lg md:text-xl text-gray-700 font-semibold max-w-xl mb-10 leading-relaxed">
                            Invest in a variety of asset classes — including 20 global stock
                            exchanges and 100 cryptocurrencies — while managing all of
                            your holdings in one place
                        </p>

                        <button className="bg-white border-2 border-green-500 text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-lg transform">
                            Explore Top Markets
                        </button>
                    </div>

                    <div className="flex-1 relative h-96 md:h-[500px] w-full max-w-md">
                        <div
                            ref={containerRef}
                            className="relative w-full h-full overflow-hidden"
                        >
                            {cardsData.map((card, index) => (
                                <Card key={card.id} card={card} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PortfolioDiversify;