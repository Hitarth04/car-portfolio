import { useState, useCallback } from 'react';
import gsap from 'gsap';

export const useWarpDrive = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const executeWarp = useCallback((targetSection, onComplete) => {
    setIsTransitioning(true);

    // Create the Timeline for the "Insane" zoom
    const tl = gsap.timeline({
      onComplete: () => {
        setIsTransitioning(false);
        if (onComplete) onComplete();
      }
    });

    // 1. Pre-jump shake (The engine revving)
    tl.to(".main-container", {
      x: "+=2",
      yoyo: true,
      repeat: 5,
      duration: 0.05
    });

    // 2. The Warp Zoom (Through the windshield)
    tl.to(".current-environment", {
      scale: 5,
      opacity: 0,
      filter: "blur(20px)",
      duration: 0.8,
      ease: "power4.in"
    }, "+=0.1");

    // 3. Bring in the new world
    tl.fromTo(".new-environment", 
      { scale: 0.2, opacity: 0, filter: "blur(10px)" },
      { scale: 1, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power2.out" },
      "-=0.4"
    );

    return tl;
  }, []);

  return { isTransitioning, executeWarp };
};