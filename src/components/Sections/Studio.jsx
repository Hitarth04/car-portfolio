import React from 'react';

const Studio = () => {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden flex flex-col items-center justify-center">
      
      {/* 1. The Moving Neon Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className="absolute inset-0 border-t border-cyan-500/30" 
          style={{
            background: `linear-gradient(transparent 0%, rgba(0, 242, 255, 0.05) 50%, rgba(255, 0, 255, 0.1) 100%),
                         linear-gradient(90deg, rgba(0, 242, 255, 0.1) 1px, transparent 1px),
                         linear-gradient(rgba(0, 242, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '100% 100%, 50px 50px, 50px 50px',
            transform: 'perspective(500px) rotateX(60deg) translateY(0)',
            height: '200%',
            top: '-50%',
            animation: 'gridMove 5s linear infinite'
          }}
        />
      </div>

      {/* 2. Floating Project Content */}
      <div className="z-10 text-center px-10">
        <h2 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 mb-8 drop-shadow-[0_0_15px_rgba(0,242,255,0.5)]">
          THE DESIGN STUDIO
        </h2>

        <div className="flex gap-10 justify-center">
          {/* Card 1: Shoe App */}
          <div className="w-64 h-80 bg-zinc-900/80 border border-cyan-500/50 rounded-xl backdrop-blur-md p-6 flex flex-col items-center hover:border-fuchsia-500 transition-colors">
            <div className="w-full h-32 bg-cyan-900/20 rounded-lg mb-4 flex items-center justify-center text-xs text-cyan-400 font-mono">
              FLUTTER_SHOE_APP.EXE
            </div>
            <h3 className="text-white font-bold">Shoe Shop E-comm</h3>
            <p className="text-zinc-400 text-xs mt-2 text-center">Mobile application with high-performance animations.</p>
          </div>

          {/* Card 2: Notes App */}
          <div className="w-64 h-80 bg-zinc-900/80 border border-cyan-500/50 rounded-xl backdrop-blur-md p-6 flex flex-col items-center hover:border-fuchsia-500 transition-colors">
            <div className="w-full h-32 bg-fuchsia-900/20 rounded-lg mb-4 flex items-center justify-center text-xs text-fuchsia-400 font-mono">
              NOTES_TASK_V2.APK
            </div>
            <h3 className="text-white font-bold">Notes & Tasks</h3>
            <p className="text-zinc-400 text-xs mt-2 text-center">Clean UI with GetX state management.</p>
          </div>
        </div>
      </div>

      {/* Grid Animation Style */}
      <style>{`
        @keyframes gridMove {
          from { transform: perspective(500px) rotateX(60deg) translateY(0); }
          to { transform: perspective(500px) rotateX(60deg) translateY(50px); }
        }
      `}</style>
    </div>
  );
};

export default Studio;