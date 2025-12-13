import React, { useState } from 'react';
import { LIBRARY_CATEGORIES } from '../constants';
import { Brain, TrendingUp, Video, Monitor, Heart, ChevronDown, ChevronUp } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  brain: <Brain className="w-5 h-5" />,
  chart: <TrendingUp className="w-5 h-5" />,
  video: <Video className="w-5 h-5" />,
  code: <Monitor className="w-5 h-5" />,
  heart: <Heart className="w-5 h-5" />
};

export const ToolsPackage: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>("MINDSET & SUCESSO");

  const toggleCategory = (title: string) => {
    setOpenCategory(openCategory === title ? null : title);
  };

  return (
    <section className="py-12 bg-transparent border-y border-white/5">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="font-display text-2xl font-bold text-silver-light mb-2 uppercase">
            Acesso Completo
          </h2>
          <p className="text-silver-metallic/60 text-sm">
            Banco de dados com centenas de PLRs, cursos e ferramentas.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {LIBRARY_CATEGORIES.map((category) => {
            const isOpen = openCategory === category.title;
            return (
              <div 
                key={category.title} 
                className={`rounded-lg border transition-colors ${
                  isOpen 
                    ? 'bg-navy-metal border-blue-500/30' 
                    : 'bg-[#0A0F16] border-white/5'
                }`}
              >
                <button 
                  onClick={() => toggleCategory(category.title)}
                  className="w-full flex items-center justify-between p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded ${
                      isOpen ? 'text-blue-400' : 'text-silver-metallic/50'
                    }`}>
                      {IconMap[category.icon]}
                    </div>
                    <div className="text-left">
                      <h3 className={`font-bold text-sm md:text-base ${
                        isOpen ? 'text-white' : 'text-silver-light'
                      }`}>
                        {category.title}
                      </h3>
                      <p className="text-[10px] text-silver-metallic/40 uppercase tracking-wider block md:hidden">
                        {category.description}
                      </p>
                    </div>
                  </div>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-blue-500" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-silver-metallic/30" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-0 animate-fade-in">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 border-t border-white/5">
                      {category.items.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs md:text-sm text-silver-metallic/70">
                          <div className="w-1 h-1 rounded-full bg-blue-500/50 shrink-0"></div>
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};