import React from 'react';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-metal border-t border-white/5 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <Logo className="opacity-70 grayscale hover:grayscale-0 transition-all" />
        
        <div className="flex flex-wrap justify-center gap-6 text-sm font-tech text-silver-metallic/50">
          <a href="#" className="hover:text-silver-light transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-silver-light transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-silver-light transition-colors">Suporte</a>
        </div>
        
        <div className="text-xs text-silver-metallic/30 font-tech text-center md:text-right">
          <p>© {new Date().getFullYear()} IRLA - Networking.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};