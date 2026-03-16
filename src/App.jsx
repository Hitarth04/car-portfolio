import React, { useState, useEffect, useRef } from 'react';
import Garage from './components/Sections/Garage';
import WarpTunnel from './components/UI/WarpTunnel';
import CarMouse from './components/CarMouse/CarMouse';
import Studio from './components/Sections/Studio';
import OrbitalHUD from './components/UI/OrbitalHUD';
import Engine from './components/Sections/Engine';
import Boardroom from './components/Sections/Boardroom';
import Finish from './components/Sections/Finish';

function App() {
  const [engineStarted, setEngineStarted] = useState(false);
  const [isWarping, setIsWarping] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showHUD, setShowHUD] = useState(false);
  
  // This Ref is the "box" that keeps our timer safe across re-renders
  const hudTimerRef = useRef(null);

  const handleStart = () => {
    setIsWarping(true);
    setTimeout(() => {
      setEngineStarted(true);
      setIsWarping(false);
    }, 1000);
  };

  // Logic for Scrolling and HUD Visibility
  useEffect(() => {
    if (!engineStarted) return;

    const handleWheel = (e) => {
      // 1. Show the HUD immediately
      setShowHUD(true);

      // 2. Clear any existing timer so they don't fight
      if (hudTimerRef.current) clearTimeout(hudTimerRef.current);

      // 3. Gear Shifting (using functional updates to prevent skipping)
      if (!isWarping) {
        if (e.deltaY > 20) {
          setCurrentSection((prev) => (prev < 3 ? prev + 1 : prev));
        } else if (e.deltaY < -20) {
          setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
        }
      }

      // 4. SET THE TIMER TO HIDE THE HUD
      hudTimerRef.current = setTimeout(() => {
        setShowHUD(false);
      }, 1200); // 1.2 seconds of no scrolling = hide wheel
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (hudTimerRef.current) clearTimeout(hudTimerRef.current);
    };
  }, [engineStarted, isWarping]); 

  // Visual Warp Effect trigger
  useEffect(() => {
    if (engineStarted) {
      setIsWarping(true);
      const timer = setTimeout(() => setIsWarping(false), 800);
      return () => clearTimeout(timer);
    }
  }, [currentSection, engineStarted]);

  return (
    <main className="bg-black text-white min-h-screen cursor-none overflow-hidden">
      <CarMouse isWarping={isWarping} />
      
      {/* HUD layer */}
      <OrbitalHUD currentSection={currentSection} show={showHUD} />
      
      {!engineStarted ? (
        <Garage onStart={handleStart} />
      ) : (
        <div className="relative w-full h-screen">
          {currentSection === 0 && <Studio />}
          {currentSection === 1 && <Engine />}
          {currentSection === 2 && <Boardroom />}
          {currentSection === 3 && <Finish />}
        </div>
      )}

      <WarpTunnel active={isWarping} />
    </main>
  );
}

export default App;