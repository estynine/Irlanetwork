import React from 'react';
import { CheckCircle2, Box, Hourglass, AlertCircle } from 'lucide-react';
import { BENEFITS } from '../constants';

interface OfferCardProps {
  showButton?: boolean;
}

export const OfferCard: React.FC<OfferCardProps> = ({ showButton = true }) => {
  return (
    <section className="py-10 px-4 relative z-10">
      <div className="max-w-md mx-auto relative group">
        
        {/* Main Card */}
        <div className="relative glass-panel rounded-lg p-6 border border-silver-metallic/30 shadow-2xl bg-[#0A0F16]">
          
          <div className="text-center mb-6">
             <h2 className="font-tech text-xs uppercase tracking-widest text-silver-metallic mb-4">
               COMUNIDADE - NETWORK DOS IRMÃOS - MARKETING DIGITAL
             </h2>
          </div>

          {/* New Text Info Block replacing Progress Bar */}
          <div className="mb-8 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg">
             <div className="flex justify-center mb-2">
                <AlertCircle className="w-5 h-5 text-blue-400" />
             </div>
             <p className="text-center text-silver-light text-sm leading-relaxed mb-2">
               As vagas do <strong className="text-white">1º Lote</strong> têm limite. Assim que lotar, o <strong className="text-white">Lote 2</strong> será aberto e o valor aumentará.
             </p>
             <p className="text-center text-xs text-silver-metallic/50 font-mono uppercase tracking-widest border-t border-white/5 pt-2 mt-2">
               Total de 1000 vagas
             </p>
          </div>

          <div className="border-t border-dashed border-white/10 my-4"></div>

          {/* Benefits List */}
          <ul className="space-y-4 mb-0">
            {BENEFITS.map((benefit) => (
              <li key={benefit.id} className="flex items-start gap-3">
                <div className="mt-0.5">
                  {benefit.highlight ? (
                     <Box className="w-5 h-5 text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]" />
                  ) : (
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                  )}
                </div>
                <span className={`font-light text-sm ${benefit.highlight ? 'text-white font-bold' : 'text-silver-light'}`}>
                  {benefit.text}
                </span>
              </li>
            ))}
            {/* Show summarized tools in the card */}
             <li className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                <span className="font-light text-sm text-silver-light">Pack de Vídeos Lifestyle</span>
             </li>
             <li className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 className="w-5 h-5 text-green-500" /></div>
                <span className="font-light text-sm text-silver-light">Acesso a Cursos e PLRs (+500GB)</span>
             </li>
          </ul>
        </div>

        {/* CTA Button - Outside the card ("Fora do quadrado"), Bigger ("Maior"), and Green ("Verde") */}
        {showButton && (
          <div className="mt-6">
            <a 
              href="https://pay.kirvano.com/089e6173-a1b6-4727-b50e-55d729b41b64"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-neon-green hover:bg-[#32e612] text-deep-metal font-black py-5 rounded-xl text-xl md:text-2xl uppercase transition-all shadow-[0_0_30px_rgba(57,255,20,0.4)] hover:shadow-[0_0_50px_rgba(57,255,20,0.6)] hover:-translate-y-1 transform flex items-center justify-center gap-2 animate-pulse-slow"
            >
              Quero ser um irmão por R$50 <span className="text-3xl leading-none">→</span>
            </a>
            
            <div className="flex justify-between text-[10px] text-silver-metallic/50 px-2 mt-3 font-tech uppercase tracking-wider">
              <div className="flex items-center gap-1"><span className="text-neon-green">🛡️</span> Pagamento Seguro</div>
              <div className="flex items-center gap-1"><span className="text-neon-green">∞</span> Acesso Vitalício</div>
              <div className="flex items-center gap-1"><span className="text-neon-green">✓</span> 7 Dias de Garantia</div>
            </div>
          </div>
        )}

        {/* Lote 2 Box (Below Card) */}
        {showButton && (
          <div className="mt-8 bg-[#0F1621] border border-white/5 rounded-lg p-6 text-center opacity-60 hover:opacity-100 transition-opacity">
               <div className="flex justify-center mb-2">
                  <Hourglass className="w-5 h-5 text-silver-metallic/50" />
               </div>
               <h3 className="text-silver-light font-bold text-lg mb-1">Lote 2: R$100,00</h3>
               <p className="text-xs text-silver-metallic/40">O valor irá subir assim que o Lote 1 esgotar.</p>
          </div>
        )}

      </div>
    </section>
  );
};