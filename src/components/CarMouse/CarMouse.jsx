import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const CarMouse = () => {
  const mouseRef = useRef(null);

  useEffect(() => {
    // This function runs every time you move the mouse
    const moveMouse = (e) => {
      gsap.to(mouseRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,           // Slight delay makes it feel "heavy" like a car
        ease: "power2.out",
        rotation: (e.movementX * 1.5), // The "Drift" effect
      });
    };

    window.addEventListener('mousemove', moveMouse);
    return () => window.removeEventListener('mousemove', moveMouse);
  }, []);

  return (
    <div 
      ref={mouseRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      {/* The Car SVG */}
      <svg width="40" height="60" viewBox="0 0 40 60" fill="none">
        {/* Car Body */}
        <path d="M10 5C10 2.23858 12.2386 0 15 0H25C27.7614 0 30 2.23858 30 5V50C30 55.5228 25.5228 60 20 60C14.4772 60 10 55.5228 10 50V5Z" fill="#111" stroke="#00F2FF" strokeWidth="2"/>
        {/* Headlights */}
        <rect x="12" y="2" width="4" height="6" rx="1" fill="#00F2FF" className="animate-pulse" />
        <rect x="24" y="2" width="4" height="6" rx="1" fill="#00F2FF" className="animate-pulse" />
        {/* Windshield */}
        <path d="M13 15H27L25 25H15L13 15Z" fill="#00F2FF" fillOpacity="0.3" />
      </svg>
    </div>
  );
};

export default CarMouse;