import React, { useRef, useState, MouseEvent } from 'react';
import { SOCIAL_PROOF_IMAGES } from '../constants';
import { MessageSquare, ShieldCheck, Hand, CheckCircle } from 'lucide-react';

export const SocialProof: React.FC = () => {
  const displayProof = SOCIAL_PROOF_IMAGES;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if (!sliderRef.current) return;
    setIsDown(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDown(false);
  };

  const handleMouseUp = () => {
    setIsDown(false);
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDown || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll-fast multiplier
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="py-20 bg-transparent relative overflow-hidden">
       <div className="text-center mb-12 px-4 flex flex-col items-center">
        
        {/* Explicit Social Proof Label */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6 backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.1)]">
           <ShieldCheck className="w-5 h-5 text-green-500" />
           <span className="text-sm font-bold text-green-500 uppercase tracking-[0.2em]">PROVAS SOCIAIS REAIS</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 mb-4">
           <MessageSquare className="w-6 h-6 text-silver-metallic/30 hidden md:block" />
           <h2 className="font-display text-xl md:text-2xl font-bold text-white uppercase tracking-wide text-center">
             TIPO DE COISAS QUE FALAMOS <br className="md:hidden" /> NO <span className="text-blue-500">GRUPO</span> E NO <span className="text-[#5865F2]">DISCORD</span> E <span className="text-green-500">WHATSAPP</span>
           </h2>
        </div>

        <p className="font-tech text-sm text-silver-metallic/60 max-w-2xl mx-auto leading-relaxed border-t border-white/5 pt-4 mt-2 uppercase tracking-wide">
           É claro que são provas sociais. Resultados de quem está no campo de batalha.
        </p>
      </div>

      <div className="w-full relative group/carousel">
        {/* Manual Scroll Container with Drag Support */}
        <div 
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          className={`flex overflow-x-auto gap-4 md:gap-6 px-4 pb-8 w-full scrollbar-hide select-none ${isDown ? 'cursor-grabbing' : 'cursor-grab'}`}
        >
          {displayProof.map((item, index) => (
            <div 
              key={`${item.id}-${index}`} 
              className="shrink-0 w-[260px] md:w-[320px] rounded-2xl overflow-hidden border border-white/10 relative group shadow-2xl bg-[#050E17] transition-all hover:border-blue-500/30"
            >
              <div className="aspect-[9/16] relative overflow-hidden pointer-events-none">
                <img 
                  src={item.imageUrl} 
                  alt={item.caption} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90"></div>
                
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <div className="flex items-center gap-2 mb-2 bg-black/50 backdrop-blur-md w-fit px-3 py-1 rounded-full border border-white/10">
                     <CheckCircle className="w-3 h-3 text-green-400" />
                     <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Resultado Verificado</span>
                  </div>
                  <p className="text-white font-tech text-sm font-medium drop-shadow-md leading-tight">{item.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Visual Cue */}
        <div className="flex justify-center items-center gap-2 mt-4 text-xs text-silver-metallic/30 uppercase tracking-widest animate-pulse">
           <Hand className="w-4 h-4" />
           <span>Arraste para ver mais</span>
        </div>
      </div>
    </section>
  );
};