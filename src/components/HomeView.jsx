import React from 'react';
import { ZODIACS } from '../data/zodiacData';

const HomeView = ({ onSelectZodiac }) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-200 drop-shadow-sm mb-4">
          2026 Luck Prediction
        </h1>
        <p className="text-red-100 text-xl font-light">Select your Zodiac Animal</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {ZODIACS.map((zodiac) => (
          <button
            key={zodiac.name}
            onClick={() => onSelectZodiac(zodiac.name)}
            className="group relative overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] flex flex-col items-center justify-center text-center h-full min-h-[160px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <h2 className="text-3xl font-bold text-yellow-50 mb-3 group-hover:text-yellow-200 transition-colors">
              {zodiac.name}
            </h2>
            
            <p className="text-sm text-red-100/80 leading-relaxed font-mono">
              {zodiac.years.join(', ')}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};

export default HomeView;
