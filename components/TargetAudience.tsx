import React from 'react';
import { TARGET_AUDIENCE } from '../constants';
import { Target, AlertTriangle } from 'lucide-react';

export const TargetAudience: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-transparent">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-10">
          <Target className="w-8 h-8 text-blue-400" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-silver-light text-center">PARA QUEM É ISSO?</h2>
        </div>

        <div className="grid gap-4">
          {TARGET_AUDIENCE.map((text, idx) => (
            <div key={idx} className="glass-panel p-4 rounded-lg flex items-center gap-4 border-l-4 border-l-blue-500 hover:bg-white/5 transition-colors">
              <div className="w-2 h-2 rounded-full bg-silver-metallic shrink-0" />
              <p className="font-tech text-lg text-silver-light">{text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-red-900/20 border border-red-500/30 rounded-xl flex flex-col items-center text-center">
          <AlertTriangle className="w-10 h-10 text-red-500 mb-4 animate-pulse" />
          <h3 className="font-display font-bold text-red-400 text-xl mb-2">A ÚNICA REGRA:</h3>
          <p className="font-bold text-white tracking-widest uppercase">Um ajudando o outro. SEMPRE!</p>
        </div>
      </div>
    </section>
  );
};