
import React from 'react';
import { Quote } from 'lucide-react';

export const FounderMessage: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-panel p-8 md:p-12 rounded-2xl border border-silver-metallic/20 relative">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-silver-metallic/10 rotate-180" />
          
          <div className="relative z-10 text-center">
            <h3 className="font-display font-bold text-silver-light text-lg mb-6 tracking-widest uppercase opacity-70">O que dizem sobre o Presidente</h3>
            <p className="font-serif text-xl md:text-2xl text-white italic leading-relaxed mb-6">
              "Nosso presidente tem várias estratégias que dão certo assim como essa aqui, ganha mais de 10k por mês de lucro, e mesmo trabalhando no CLT, fica na call até de madrugada ajudando os parceiros a subir campanha, dando ideia e projetando. Ele mesmo se ofereceu para dar aulas. Deus abençoe nosso presidente, Cauã Santos — você é uma bênção na vida de todos nós!"
            </p>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>
          
          <Quote className="absolute bottom-8 right-8 w-12 h-12 text-silver-metallic/10" />
        </div>
      </div>
    </section>
  );
};
