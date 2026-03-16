import React from 'react';

const OrbitalHUD = ({ currentSection, show }) => {
  const sections = [
    { id: 0, name: "STUDIO", icon: "01" },
    { id: 1, name: "ENGINE", icon: "02" },
    { id: 2, name: "BOARDROOM", icon: "03" },
    { id: 3, name: "FINISH", icon: "04" }
  ];

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center transition-all duration-700 ease-in-out"
      style={{ 
        opacity: show ? 1 : 0,
        visibility: show ? 'visible' : 'hidden', // Forces it to disappear from the engine
        transform: show ? 'scale(1)' : 'scale(1.1)', // Smooth zoom out
        pointerEvents: 'none'
      }}
    >
      {/* The main rotating ring */}
      <div className="relative w-72 h-72 rounded-full border border-cyan-500/20 flex items-center justify-center">
        
        {/* The Outer Spinning Ring */}
        <div className="absolute inset-0 border-2 border-dashed border-cyan-500/10 rounded-full animate-[spin_20s_linear_infinite]" />

        {/* Section Markers */}
        {sections.map((section, index) => {
          // Math to place icons in a circle
          const angle = (index * 90) - 90; // Adjust start position
          const active = currentSection === index;

          return (
            <div
              key={section.id}
              className="absolute transition-all duration-500"
              style={{
                transform: `rotate(${angle}deg) translate(140px) rotate(-${angle}deg)`
              }}
            >
              <div className={`flex flex-col items-center ${active ? 'scale-125' : 'scale-75 opacity-30'}`}>
                <span className={`text-[10px] font-mono tracking-widest ${active ? 'text-cyan-400' : 'text-zinc-500'}`}>
                   {section.name}
                </span>
                <div className={`w-8 h-8 flex items-center justify-center border mt-1 rounded-sm ${active ? 'border-cyan-400 bg-cyan-400/20 shadow-[0_0_15px_rgba(0,242,255,0.5)]' : 'border-zinc-700'}`}>
                  <span className="text-xs font-bold font-mono">{section.icon}</span>
                </div>
              </div>
            </div>
          );
        })}

        {/* The "Locked" Indicator (Small bars around the center) */}
        <div className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>
    </div>
  );
};

export default OrbitalHUD;