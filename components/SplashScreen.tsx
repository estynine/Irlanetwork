import React, { useEffect, useState } from 'react';
import { Shield, Hexagon } from 'lucide-react';

export const SplashScreen: React.FC = () => {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    // 1. Ensure page starts at the top
    window.scrollTo(0, 0);

    // 2. Lock scrolling while splash is active
    document.body.style.overflow = 'hidden';

    // 3. Start fading out after 4 seconds
    const fadeTimer = setTimeout(() => {
      setFading(true);
      // Unlock scrolling when fade starts
      document.body.style.overflow = 'unset';
    }, 4000); // Updated to 4 seconds

    // 4. Remove from DOM after fade transition completes (1s fade)
    const removeTimer = setTimeout(() => {
      setVisible(false);
    }, 5000); // 4000ms + 1000ms fade

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!visible) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050E17] transition-opacity duration-1000 ease-in-out ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Container wrapper for the Zoom Animation - extended duration */}
      <div className="flex flex-col items-center animate-[zoom_5s_ease-out_forwards]">
        
        <div className="relative mb-6 animate-pulse">
          <Shield className="w-20 h-20 text-silver-metallic fill-navy-metal stroke-[1.5]" />
          <Hexagon className="w-8 h-8 text-blue-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fill-blue-500/50" />
        </div>
        
        <h1 className="font-display font-black text-4xl md:text-6xl tracking-[0.2em] text-white text-center">
          IRLA <span className="text-blue-500">NETWORK</span>
        </h1>
        
        {/* Loading Bar - duration updated to match 4s wait */}
        <div className="mt-8 w-48 h-1 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-blue-500 animate-[loading_4s_ease-in-out_forwards] w-0"></div>
        </div>

      </div>
      
      <style>{`
        @keyframes loading {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes zoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
};