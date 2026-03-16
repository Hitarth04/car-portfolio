import React from 'react';

const Boardroom = () => {
  return (
    <div className="h-screen w-full bg-zinc-950 flex flex-col items-center justify-center p-10 overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-fuchsia-900/10 blur-[120px] rounded-full" />
      
      <div className="z-10 text-center mb-12">
        <h2 className="text-4xl font-light tracking-[0.2em] text-fuchsia-200 uppercase">Executive Roadmap</h2>
        <p className="text-zinc-500 font-mono text-sm mt-2">BCA // DESIGNER // DEVELOPER</p>
      </div>

      <div className="z-10 flex gap-6 w-full max-w-5xl">
        {/* Card: BCA Progress */}
        <div className="flex-1 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all">
          <h3 className="text-fuchsia-400 font-bold mb-4">Academic Status</h3>
          <div className="space-y-4">
            <div className="text-left">
              <p className="text-xs text-zinc-400 font-mono">DEGREE</p>
              <p className="text-lg text-white">BCA (In Progress)</p>
            </div>
            <div className="w-full h-1 bg-zinc-800 rounded-full overflow-hidden">
              <div className="h-full bg-fuchsia-500 w-2/3 shadow-[0_0_10px_#d946ef]" />
            </div>
          </div>
        </div>

        {/* Card: Professional Experience */}
        <div className="flex-1 bg-white/5 border border-white/10 backdrop-blur-xl p-8 rounded-2xl hover:bg-white/10 transition-all">
          <h3 className="text-fuchsia-400 font-bold mb-4">Experience</h3>
          <ul className="text-left space-y-4 text-sm text-zinc-300">
            <li><span className="text-white">Web Designer</span> — Present</li>
            <li><span className="text-white">Flutter Intern</span> — Dots & Coms</li>
            <li><span className="text-white">Senior Talent Specialist</span> — Collabera</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boardroom;