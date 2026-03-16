import React from 'react';

const Engine = () => {
  const skills = ["Dart", "Flutter", "Firebase", "HTML/CSS", "JavaScript", "GetX"];

  return (
    <div className="relative h-screen w-full bg-[#050505] overflow-hidden flex items-center justify-center">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#1a3a4a 1px, transparent 1px), linear-gradient(90deg, #1a3a4a 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      <div className="z-10 w-full max-w-4xl px-10">
        <h2 className="text-4xl font-mono text-cyan-500 mb-10 tracking-widest uppercase border-l-4 border-cyan-500 pl-4">
          Core_Engine_Specs.sys
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <div key={i} className="group relative p-6 bg-zinc-900/50 border border-cyan-900/50 hover:border-cyan-400 transition-all">
              <span className="text-xs font-mono text-cyan-800 absolute top-2 right-2">REV_0{i+1}</span>
              <h3 className="text-xl font-mono text-white group-hover:text-cyan-400">{skill}</h3>
              <div className="mt-4 w-full h-1 bg-cyan-900/30">
                <div className="h-full bg-cyan-500 w-[80%] shadow-[0_0_10px_#00f2ff]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Engine;