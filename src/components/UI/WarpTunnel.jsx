import React from 'react';

const WarpTunnel = ({ active }) => {
  if (!active) return null;

  return (
    <div className="fixed inset-0 z-50 pointer-events-none overflow-hidden bg-transparent">
      {/* Generate 20 speed lines */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white opacity-60"
          style={{
            width: '2px',
            height: '100px',
            top: '50%',
            left: '50%',
            transform: `rotate(${i * 18}deg) translateY(-500px)`,
            animation: `warpLine 0.5s linear infinite`,
            animationDelay: `${Math.random()}s`
          }}
        />
      ))}
      <style>{`
        @keyframes warpLine {
          0% { transform: rotate(var(--rotation)) translateY(0) scaleY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: rotate(var(--rotation)) translateY(-1000px) scaleY(2); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default WarpTunnel;