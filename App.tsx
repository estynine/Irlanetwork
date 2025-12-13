import React from 'react';
import { Hero } from './components/Hero';
import { OfferCard } from './components/OfferCard';
import { GroupDescription } from './components/GroupDescription';
import { ToolsPackage } from './components/ToolsPackage';
import { MemberCarousel } from './components/MemberCarousel';
import { SocialProof } from './components/SocialProof';
import { TargetAudience } from './components/TargetAudience';
import { Ranking } from './components/Ranking';
import { FounderMessage } from './components/FounderMessage';
import { Footer } from './components/Footer';
import { RecentPurchasePopup } from './components/RecentPurchasePopup';
import { SplashScreen } from './components/SplashScreen';

function App() {
  return (
    <div className="min-h-screen text-silver-light selection:bg-blue-500 selection:text-white relative overflow-x-hidden">
      
      <SplashScreen />

      {/* Fixed Ambient Background - ensures no black void when scrolling */}
      {/* Added will-change-transform and transform-gpu to prevent crashing on zoom/resize events */}
      <div className="fixed inset-0 z-0 bg-[#050E17] transform-gpu will-change-transform">
        <div className="absolute inset-0 bg-gradient-to-b from-[#050E17] via-[#08121f] to-[#050E17]" />
        
        {/* Ambient Lights - Fixed Position */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/15 rounded-full blur-[120px] animate-pulse-slow pointer-events-none transform-gpu" />
        <div className="absolute top-[40%] right-[-10%] w-[40%] h-[40%] bg-purple-900/15 rounded-full blur-[120px] pointer-events-none transform-gpu" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-blue-900/15 rounded-full blur-[120px] pointer-events-none transform-gpu" />
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }}></div>
      </div>

      <main className="flex flex-col relative z-10 w-full">
        <Hero />
        
        <div className="space-y-0 w-full">
          <GroupDescription />
          
          <ToolsPackage />
          <MemberCarousel />
          <TargetAudience />
          <SocialProof />
          <Ranking />
          <FounderMessage />
          
          {/* Final Section with the only Action Button */}
          <section className="py-20 flex flex-col items-center relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-t from-[#050E17] via-[#050E17]/80 to-transparent pointer-events-none"></div>
             
             <div className="relative z-10 w-full flex flex-col items-center">
                <h2 className="font-display text-2xl font-bold mb-8 text-center px-4">NÃO DEIXE ESSA OPORTUNIDADE PASSAR</h2>
                <OfferCard showButton={true} />
             </div>
          </section>
        </div>
      </main>
      <RecentPurchasePopup />
      <Footer />
    </div>
  );
}

export default App;