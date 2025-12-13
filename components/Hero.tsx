import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-4 py-20 bg-transparent overflow-hidden">
      
      <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto space-y-6">
        
        {/* Large Circular Image */}
        <div className="relative group">
          <div className="absolute inset-0 rounded-full bg-blue-500 blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
          <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-blue-500/30 shadow-[0_0_60px_rgba(59,130,246,0.3)] overflow-hidden bg-[#0A0F16] flex items-center justify-center backdrop-blur-xl group-hover:scale-105 transition-transform duration-500">
             <img 
               src="https://i.postimg.cc/Z5KbSPg5/Whats-App-Image-2025-12-06-at-00-49-33-6abe5d17.jpg" 
               alt="Emblema IR" 
               className="w-full h-full object-cover transform scale-110"
             />
          </div>
        </div>

        <div className="mb-2 pt-6">
          <ArrowDown className="w-6 h-6 text-silver-metallic/50 animate-bounce" />
        </div>
        
        <h1 className="font-display font-black text-4xl md:text-5xl lg:text-7xl leading-tight text-blue-500 uppercase tracking-tight">
          quer <span className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.4)]">COLAR</span> <br/>
          <span className="text-blue-500/80">com nós, irmão?</span>
        </h1>
        
        <p className="font-tech text-lg md:text-2xl text-silver-light/70 max-w-xl mx-auto font-light leading-relaxed mt-4">
          Vamos sair do CLT, juntos! <br/>
          <span className="text-silver-light">Vamos aprender a fazer dinheiro com marketing digital!</span>
        </p>
      </div>
    </section>
  );
};