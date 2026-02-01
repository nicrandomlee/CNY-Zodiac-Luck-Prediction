import React, { useMemo } from 'react';
import { generateLuckData, ZODIACS } from '../data/zodiacData';

const LuckView = ({ zodiacName, onBack }) => {
  // Memoize data to prevent regeneration on re-renders (if any)
  const luckData = useMemo(() => generateLuckData(zodiacName), [zodiacName]);
  const zodiacInfo = ZODIACS.find(z => z.name === zodiacName);

  const renderStars = (rating) => {
    return (
      <div className="flex space-x-1 text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-xl ${i < rating ? 'opacity-100' : 'opacity-30'}`}>★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8 animate-fadeIn">
      <button 
        onClick={onBack}
        className="mb-6 px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 text-yellow-100 transition-colors flex items-center gap-2 backdrop-blur-sm"
      >
        ← Back to Home
      </button>

      {/* Header Card */}
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 mb-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-yellow-500 to-red-500" />
        <h1 className="text-5xl font-bold text-yellow-200 mb-2 uppercase tracking-wide">{luckData.zodiac}</h1>
        <p className="text-red-100 mb-8 font-mono text-sm opacity-80">
          {zodiacInfo?.years.join(', ')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Stats */}
          <div className="space-y-4 text-left bg-black/20 p-6 rounded-xl">
            {Object.entries(luckData.ratings).map(([key, rating]) => (
              <div key={key} className="flex items-center justify-between">
                <span className="capitalize text-lg text-white font-medium">{key}</span>
                {renderStars(rating)}
              </div>
            ))}
          </div>
          
          {/* Lucky Items */}
          <div className="flex flex-col justify-center space-y-4 bg-black/20 p-6 rounded-xl">
            <div className="flex justify-between items-center border-b border-white/10 pb-2">
              <span className="text-lg text-white">Lucky Color</span>
              <span className="text-xl font-bold text-yellow-300">{luckData.luckyColor}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-lg text-white">Lucky Number</span>
              <span className="text-xl font-bold text-yellow-300">{luckData.luckyNumber}</span>
            </div>
          </div>
        </div>

        {/* General Writeup */}
        <div className="text-lg leading-relaxed text-yellow-50 bg-red-900/30 p-6 rounded-xl border border-red-500/20">
          {luckData.generalWriteup}
        </div>
      </div>

      {/* Detailed Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Object.entries(luckData.categories).map(([category, text]) => (
          <div key={category} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors">
            <h3 className="text-2xl font-bold text-yellow-200 mb-3 capitalize border-b border-white/10 pb-2">
              {category}
            </h3>
            <p className="text-gray-100 leading-relaxed text-sm md:text-base">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LuckView;
