// components/AssetShowcase.jsx

import React from 'react';
import { AreaChart, Bitcoin, Banknote, Landmark, FlaskConical, CircleDollarSign } from 'lucide-react';

const assets = [
  { name: 'Stocks', value: 6450, icon: AreaChart, color: 'text-gray-900', bg: 'bg-gray-100', iconColor: 'text-white', iconBg: 'bg-gray-900' },
  { name: 'ETFs', value: 756, icon: FlaskConical, color: 'text-cyan-600', bg: 'bg-cyan-50', iconColor: 'text-white', iconBg: 'bg-cyan-600' },
  { name: 'Commodities', value: 49, icon: Landmark, color: 'text-amber-500', bg: 'bg-amber-50', iconColor: 'text-white', iconBg: 'bg-amber-500' },
  { name: 'Currencies', value: 62, icon: Banknote, color: 'text-orange-500', bg: 'bg-orange-50', iconColor: 'text-white', iconBg: 'bg-orange-500' },
  { name: 'Indices', value: 35, icon: AreaChart, color: 'text-pink-500', bg: 'bg-pink-50', iconColor: 'text-white', iconBg: 'bg-pink-500' },
  { name: 'Crypto', value: 144, icon: Bitcoin, color: 'text-green-500', bg: 'bg-green-50', iconColor: 'text-white', iconBg: 'bg-green-500' },
];

const AssetShowcase = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">
          Diversify with ease on a <span className="font-bold">multi-asset platform</span>
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Take advantage of all price movements – whether up or down – on a variety of assets from leading global markets
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
          {assets.map((asset, index) => (
            <div key={index} className="flex flex-col items-center p-6 rounded-3xl">
              <div className={`p-4 rounded-full ${asset.iconBg} mb-4 flex items-center justify-center`}>
                <asset.icon className={`h-10 w-10 ${asset.iconColor}`} />
              </div>
              <div className="text-3xl font-bold text-gray-900">{asset.value}</div>
              <div className="mt-2 text-xl font-medium text-gray-700">{asset.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetShowcase;