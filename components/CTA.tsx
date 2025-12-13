import React from 'react';
import { ArrowRight, ShieldCheck, Lock, History } from 'lucide-react';

export const CTA: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center gap-4 py-8 px-4">
      <a 
        href="https://pay.kirvano.com/089e6173-a1b6-4727-b50e-55d729b41b64"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-shine group w-full max-w-md bg-[#E2E8F0] hover:bg-white text-black font-display font-black text-base md:text-lg py-4 px-8 rounded-xl shadow-[0_0_20px_rgba(226,232,240,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
      >
        QUERO SER UM IRMÃO POR R$50
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </a>
      
      <div className="flex justify-center gap-4 text-[10px] text-silver-metallic/60 font-tech uppercase tracking-wider w-full">
        <div className="flex items-center gap-1">
          <Lock className="w-3 h-3 text-green-500" /> Pagamento Seguro
        </div>
        <div className="flex items-center gap-1">
          <History className="w-3 h-3 text-green-500" /> Acesso Vitalício
        </div>
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-green-500" /> 7 Dias Garantia
        </div>
      </div>
    </div>
  );
};