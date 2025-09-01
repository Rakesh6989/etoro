import React, { useState, useEffect } from 'react';

const StockSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  // Auto scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === stocks.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [stocks.length]);

  const LogoComponent = ({ logo, className }) => {
    const logoStyles = `${className} font-bold text-white flex items-center justify-center`;
    
    switch(logo) {
      case 'amazon':
        return <div className={logoStyles}>a</div>;
      case 'tesla':
        return <div className={`${logoStyles} text-4xl font-black`}>TESLA</div>;
      case 'apple':
        return <div className={logoStyles}>🍎</div>;
      case 'google':
        return <div className={logoStyles}>G</div>;
      case 'microsoft':
        return <div className={logoStyles}>Ⓜ</div>;
      default:
        return <div className={logoStyles}>{logo[0]}</div>;
    }
  };

  const ChartSVG = ({ isActive }) => (
    <div className="absolute inset-0 flex items-center justify-center opacity-30">
      <svg 
        viewBox="0 0 300 100" 
        className={`${isActive ? 'w-72 h-24' : 'w-48 h-16'} fill-none`}
      >
        <path 
          d="M10,80 Q50,20 100,40 T200,30 T290,60" 
          stroke="rgba(255,255,255,0.6)" 
          strokeWidth="2"
          fill="none"
        />
        <path 
          d="M10,80 Q50,20 100,40 T200,30 T290,60 L290,90 L10,90 Z" 
          fill="rgba(255,255,255,0.2)"
        />
      </svg>
    </div>
  );

  // Get previous, current, and next indices
  const getPrevIndex = () => currentIndex === 0 ? stocks.length - 1 : currentIndex - 1;
  const getNextIndex = () => currentIndex === stocks.length - 1 ? 0 : currentIndex + 1;

  const renderCard = (stock, position, index) => {
    const isCenter = position === 'center';
    const cardWidth = isCenter ? 'w-80' : 'w-64';
    const cardHeight = isCenter ? 'h-64' : 'h-48';
    const scale = isCenter ? 'scale-100' : 'scale-90';
    const opacity = isCenter ? 'opacity-100' : 'opacity-70';
    
    return (
      <div
        key={`${stock.symbol}-${position}`}
        className={`${stock.bgColor} rounded-2xl shadow-2xl cursor-pointer transition-all duration-500 ease-in-out ${scale} ${opacity}`}
        onClick={() => setCurrentIndex(index)}
      >
        <div className={`relative overflow-hidden rounded-2xl ${cardWidth} ${cardHeight}`}>
          <ChartSVG isActive={isCenter} />
          
          <div className="relative z-10 p-6 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <LogoComponent 
                logo={stock.logo} 
                className={`${isCenter ? 'text-3xl w-12 h-12' : 'text-xl w-8 h-8'}`}
              />
              {stock.symbol === 'TSLA' && isCenter && (
                <div className="text-right">
                  <div className="text-white text-sm opacity-80">2024 1PM</div>
                </div>
              )}
            </div>

            <div className="mt-auto">
              <div className="text-white mb-2">
                <div className={`font-bold ${isCenter ? 'text-lg' : 'text-base'}`}>
                  {stock.symbol}
                </div>
                <div className={`opacity-80 ${isCenter ? 'text-sm' : 'text-xs'}`}>
                  {stock.company}
                </div>
              </div>

              <div className="text-white">
                <div className={`font-bold ${isCenter ? 'text-3xl' : 'text-xl'} mb-1`}>
                  {stock.price}
                </div>
                <div className={`flex items-center ${isCenter ? 'text-base' : 'text-sm'}`}>
                  <span className={`${stock.isPositive ? 'text-green-300' : 'text-red-300'} mr-1`}>
                    {stock.isPositive ? '▲' : '▼'}
                  </span>
                  <span className={stock.isPositive ? 'text-green-300' : 'text-red-300'}>
                    {stock.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full  bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center p-4">
      <div className="relative w-full max-w-6xl">
        {/* Main cards container */}
        <div className="flex items-center justify-center gap-8 px-4">
          {/* Left card */}
          <div className="flex-shrink-0">
            {renderCard(stocks[getPrevIndex()], 'left', getPrevIndex())}
          </div>
          
          {/* Center card (active) */}
          <div className="flex-shrink-0 z-10">
            {renderCard(stocks[currentIndex], 'center', currentIndex)}
          </div>
          
          <div className="flex-shrink-0">
            {renderCard(stocks[getNextIndex()], 'right', getNextIndex())}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {stocks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-white scale-125' : 'bg-white/30 hover:bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StockSlider;