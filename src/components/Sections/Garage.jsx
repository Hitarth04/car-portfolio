import React, { useState } from 'react';
import { Power } from 'lucide-react'; // A cool power icon

const Garage = ({ onStart }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
      
      {/* 1. The Flickering Ambient Light */}
      <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-5'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900 to-transparent" />
      </div>

      {/* 2. The Car Silhouette (Placeholder for now) */}
      <div className="mb-12 transform transition-transform duration-700 hover:scale-105">
         <div className="w-64 h-32 bg-zinc-900 rounded-full blur-2xl opacity-50" />
         <p className="text-zinc-700 font-mono text-center mt-4 tracking-tighter">PROJECT INTERCEPTOR V1</p>
      </div>

      {/* 3. The "Engine Start" Button */}
      <button 
        onClick={onStart}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center p-4 rounded-full border-2 border-zinc-800 hover:border-cyan-500 transition-all duration-500"
      >
        <Power className="text-zinc-600 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_10px_rgba(0,242,255,0.8)]" size={48} />
        
        {/* Button Label */}
        <span className="absolute -bottom-10 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-500 font-mono text-xs tracking-[0.3em]">
          START ENGINE
        </span>
      </button>
    </div>
  );
};

export default Garage;