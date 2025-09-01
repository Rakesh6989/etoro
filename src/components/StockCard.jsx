'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const stocks = [
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc',
    logo: 'https://cdn.pixabay.com/photo/2021/04/18/06/15/amazon-6188204_1280.png',
    value: '228.45',
    change: '▲ 2.5 (1.1%)',
    chart: 'https://example.com/amazon-chart.svg', // Replace with your chart image
  },
  {
    symbol: 'TSLA',
    name: 'Tesla Motors, Inc.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Tesla_T_symbol.svg/1200px-Tesla_T_symbol.svg.png',
    value: '334.37',
    change: '▼ 12 (-3.5%)',
    chart: 'https://example.com/tesla-chart.svg', // Replace with your chart image
    highlight: true,
  },
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
    value: '232.51',
    change: '▲ 0 (-0.18%)',
    chart: 'https://example.com/apple-chart.svg', // Replace with your chart image
  },
];

export default function StockSlider() {
  const [activeSlide, setActiveSlide] = useState(1);
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Adjust scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = () => {
    const scrollPos = sliderRef.current.scrollLeft;
    const cardWidth = sliderRef.current.querySelector('.stock-card').offsetWidth;
    const centerIndex = Math.round(scrollPos / cardWidth);
    setActiveSlide(centerIndex);
  };

  useEffect(() => {
    const handleSnap = () => {
      if (!isDragging) {
        const cardWidth = sliderRef.current.querySelector('.stock-card').offsetWidth;
        const targetScroll = activeSlide * cardWidth;
        sliderRef.current.scrollTo({
          left: targetScroll,
          behavior: 'smooth',
        });
      }
    };
    handleSnap();
  }, [activeSlide, isDragging]);

  return (
    <div className="relative overflow-hidden w-full flex flex-col items-center py-10">
      <div
        ref={sliderRef}
        className="flex overflow-x-scroll no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-8"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onScroll={handleScroll}
      >
        {stocks.map((stock, index) => (
          <div
            key={stock.symbol}
            className={`
              stock-card
              flex-shrink-0 w-[20rem] h-[20rem] rounded-xl snap-center
              mx-4 transition-all duration-300 transform
              ${index === activeSlide ? 'scale-110 z-10 shadow-2xl' : 'scale-90 opacity-60'}
              ${stock.highlight ? 'bg-red-600' : 'bg-white'}
            `}
          >
            {/* Card Content */}
          </div>
        ))}
      </div>
      <a
        href="#"
        className="mt-12 px-10 py-4 border-2 border-[#161642] rounded-full font-semibold text-[#161642] hover:bg-[#161642] hover:text-white transition-colors"
      >
        See All Stocks
      </a>
    </div>
  );
}