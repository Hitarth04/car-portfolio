import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Finish = () => {
  return (
    <div className="h-screen w-full bg-gradient-to-b from-[#1a0b2e] to-[#4a1d36] flex flex-col items-center justify-end pb-20 overflow-hidden relative">
      {/* Low-poly Retro Sun */}
      <div className="absolute top-1/4 w-80 h-80 rounded-full bg-gradient-to-t from-orange-500 to-yellow-400 blur-2xl opacity-40 animate-pulse" />
      
      <div className="z-10 text-center space-y-8">
        <h2 className="text-6xl font-black italic tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          DESTINATION REACHED
        </h2>
        
        <div className="flex gap-8 justify-center">
          <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white">
            <Github size={32} />
          </a>
          <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white">
            <Linkedin size={32} />
          </a>
          <a href="#" className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/20 hover:scale-110 transition-all text-white">
            <Mail size={32} />
          </a>
        </div>
        
        <p className="text-orange-200/50 font-mono text-xs tracking-[0.5em] uppercase">
          Engine Standby // Thank you for driving
        </p>
      </div>

      {/* Road leading to the horizon */}
      <div className="absolute bottom-0 w-[200%] h-40 bg-zinc-950/80 -rotate-1 skew-x-12 translate-y-10 border-t border-orange-500/20" />
    </div>
  );
};

export default Finish;