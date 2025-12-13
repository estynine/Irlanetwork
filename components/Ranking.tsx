
import React from 'react';
import { Trophy } from 'lucide-react';

export const Ranking: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-md mx-auto">
        
        <div className="flex flex-col items-center mb-6">
          <Trophy className="w-8 h-8 text-silver-metallic mb-2" />
          <h2 className="font-bold text-blue-400 text-lg uppercase tracking-wide">Líder em Destaque</h2>
        </div>
        
        {/* Card */}
        <div className="relative rounded-xl border border-blue-500/50 bg-[#080C11] p-6 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
             
             <div className="flex flex-col items-center -mt-12 mb-4">
               <div className="w-24 h-24 rounded-full border-4 border-[#080C11] overflow-hidden shadow-lg">
                  <img src="https://picsum.photos/seed/CauaSantos/300/300" alt="Cauã Santos" className="w-full h-full object-cover grayscale" />
               </div>
               <p className="text-white font-bold mt-2">@Cauã Santos</p>
             </div>

             <div className="bg-[#0F1724] rounded-lg p-4 relative mt-2">
               <h3 className="text-blue-400 font-bold text-xs uppercase mb-2">Reconhecimento da Comunidade:</h3>
               <p className="text-silver-light/80 text-sm italic font-light leading-relaxed">
                 Nosso presidente tem várias estratégias que dão certo assim como essa aqui, ganha mais de 10k por mês de lucro, e mesmo trabalhando no CLT, fica na call até de madrugada ajudando os parceiros a subir campanha, dando ideia e projetando. Ele mesmo se ofereceu para dar aulas. Deus abençoe nosso presidente, Cauã Santos — você é uma bênção na vida de todos nós!
               </p>
               <div className="w-1 h-full absolute top-0 left-0 bg-blue-500 rounded-l-lg opacity-50"></div>
             </div>
        </div>

      </div>
    </section>
  );
};
