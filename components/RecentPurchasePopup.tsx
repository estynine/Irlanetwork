import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';

const NAMES = [
  "João Silva", "Pedro Santos", "Lucas Oliveira", "Matheus Costa", "Gabriel Pereira", 
  "Rafael Rodrigues", "Felipe Almeida", "Bruno Lima", "Gustavo Martins", "Thiago Rocha", 
  "Arthur Azevedo", "Nicolas Fernandes", "Kaio Sousa", "Victor Gomes", "Igor Barbosa",
  "David Ribeiro", "Daniel Alves", "Luan Carvalho", "Diego Pinto", "Eduardo Castro",
  "Ana Souza", "Beatriz Lima", "Camila Rocha", "Larissa Mendes", "Fernanda Costa"
];

export const RecentPurchasePopup: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    const showPopup = () => {
      const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
      setName(randomName);
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 5000); // Show for 5 seconds
    };

    // Initial delay of 2 seconds
    const initialTimeout = setTimeout(showPopup, 2000);

    // Show every 10-20 seconds
    const interval = setInterval(() => {
      showPopup();
    }, 10000 + Math.random() * 10000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div 
      className={`fixed top-[430px] right-5 z-50 transition-all duration-700 ease-in-out transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-[150%] opacity-0'
      }`}
    >
      <div className="bg-[#0F1621] border border-neon-green/30 rounded-lg p-4 shadow-[0_0_20px_rgba(57,255,20,0.1)] flex items-center gap-3 max-w-[300px]">
        <div className="bg-neon-green/20 p-2 rounded-full shrink-0">
          <ShieldCheck className="w-5 h-5 text-neon-green" />
        </div>
        <div>
          <p className="text-white text-sm font-bold">{name}</p>
          <p className="text-[10px] md:text-xs text-silver-metallic/70 leading-tight">acabou de garantir acesso à irmandade.</p>
        </div>
      </div>
    </div>
  );
};