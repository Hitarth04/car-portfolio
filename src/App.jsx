import React, { useState, useEffect, useRef } from 'react';
import Garage from './components/Sections/Garage';
import WarpTunnel from './components/UI/WarpTunnel';
import CarMouse from './components/CarMouse/CarMouse'; 
import Studio from './components/Sections/Studio';
import OrbitalHUD from './components/UI/OrbitalHUD';
import Engine from './components/Sections/Engine';
import Boardroom from './components/Sections/Boardroom';
import Finish from './components/Sections/Finish'; // Adding the final piece

function App() {
  const [engineStarted, setEngineStarted] = useState(false);
  const [isWarping, setIsWarping] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const [showHUD, setShowHUD] = useState(false);
  
  // Use a Ref to keep track of the timer across renders
  const hudTimerRef = useRef(null);

  const handleStart = () => {
    setIsWarping(true);
    setTimeout(() => {
      setEngineStarted(true);
      setIsWarping(false);
    }, 1000);
  };

  // 1. Logic for Scrolling and HUD Visibility
  useEffect(() => {
    if (!engineStarted) return;

    const handleWheel = (e) => {
      if (isWarping) return;

      // Show the HUD
      setShowHUD(true);

      // Clear any existing timer using the Ref
      if (hudTimerRef.current) clearTimeout(hudTimerRef.current);

      // Gear Shifting
      if (e.deltaY > 50 && currentSection < 3) {
        setCurrentSection(prev => prev + 1);
      } else if (e.deltaY < -50 && currentSection > 0) {
        setCurrentSection(prev => prev - 1);
      }

      // Set the timer to hide HUD after 1 second of no scrolling
      hudTimerRef.current = setTimeout(() => {
        setShowHUD(false);
      }, 1000);
    };

    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (hudTimerRef.current) clearTimeout(hudTimerRef.current);
    };
  }, [engineStarted, isWarping, currentSection]);

  // 2. Logic for the Warp Effect when Section Changes
  useEffect(() => {
    if (!engineStarted) return;

    const handleWheel = (e) => {
      // 1. Always show HUD and reset timer
      setShowHUD(true);
      if (hudTimerRef.current) clearTimeout(hudTimerRef.current);

      // 2. Logic for Shifting (Functional Updates)
      if (!isWarping) {
        if (e.deltaY > 50) {
          // Instead of currentSection + 1, we use a function
          setCurrentSection((prev) => (prev < 3 ? prev + 1 : prev));
        } else if (e.deltaY < -50) {
          setCurrentSection((prev) => (prev > 0 ? prev - 1 : prev));
        }
      }

      // 3. Always set the hide timer
      hudTimerRef.current = setTimeout(() => {
        setShowHUD(false);
      }, 1000);
    };

    // Use { passive: true } to make scrolling feel faster in the browser
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (hudTimerRef.current) clearTimeout(hudTimerRef.current);
    };
  }, [engineStarted, isWarping]); // Removed currentSection from here to prevent loops

  return (
    <main className="bg-black text-white min-h-screen cursor-none overflow-hidden">
      <CarMouse />
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