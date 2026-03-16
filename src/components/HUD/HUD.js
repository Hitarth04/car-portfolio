const HUD = ({ currentSection }) => {
  const sections = ["Studio", "Engine", "Boardroom", "Finish"];
  
  return (
    <div className="fixed inset-0 pointer-events-none z-40 flex items-center justify-center">
      {/* We'll link this to the Car-Mouse position later */}
      <div className="relative w-64 h-64 border-2 border-cyan-500/20 rounded-full animate-spin-slow">
        {sections.map((name, i) => (
          <div 
            key={name}
            className={`absolute text-[10px] font-mono tracking-widest transition-all ${
              currentSection === i ? "text-cyan-400 scale-125 opacity-100" : "text-gray-600 opacity-40"
            }`}
            style={{
              top: `${50 + 40 * Math.sin(i * (Math.PI / 2))}%`,
              left: `${50 + 40 * Math.cos(i * (Math.PI / 2))}%`,
            }}
          >
            {name.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};