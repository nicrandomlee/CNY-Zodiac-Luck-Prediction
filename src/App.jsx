import React, { useState } from 'react';
import HomeView from './components/HomeView';
import LuckView from './components/LuckView';

function App() {
  const [selectedZodiac, setSelectedZodiac] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-800 to-red-950 font-sans text-white overflow-x-hidden">
      {/* Decorative background elements */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/chinese-pattern.png')] mix-blend-overlay"></div>
      
      {selectedZodiac ? (
        <LuckView 
          zodiacName={selectedZodiac} 
          onBack={() => setSelectedZodiac(null)} 
        />
      ) : (
        <HomeView 
          onSelectZodiac={setSelectedZodiac} 
        />
      )}
    </div>
  );
}

export default App;
