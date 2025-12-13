import React from 'react';
import { Users, Share2, Database } from 'lucide-react';

export const GroupDescription: React.FC = () => {
  return (
    <section className="py-12 md:py-20 px-4 relative z-10">
      <div className="max-w-5xl mx-auto">
        <div className="glass-panel rounded-2xl p-6 md:p-12 border border-white/5 bg-[#0A0F16]">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            
            {/* Left Content */}
            <div className="flex-1 space-y-6 text-left">
              
              {/* Social Icons - WhatsApp & Discord */}
              <div className="flex justify-center md:justify-start gap-4 mb-2">
                <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 shadow-[0_0_10px_rgba(34,197,94,0.2)]">
                  {/* WhatsApp Icon SVG */}
                  <svg className="w-5 h-5 text-green-500 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div className="w-10 h-10 bg-[#5865F2]/10 rounded-full flex items-center justify-center border border-[#5865F2]/20 shadow-[0_0_10px_rgba(88,101,242,0.2)]">
                  {/* Discord Icon SVG */}
                  <svg className="w-5 h-5 text-[#5865F2] fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.772-.6083 1.1588a18.2915 18.2915 0 00-5.4868 0c-.1636-.3933-.4058-.7835-.617-1.1588a.0771.0771 0 00-.0785-.0371 19.718 19.718 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/>
                  </svg>
                </div>
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-bold text-white uppercase tracking-wider leading-tight text-center md:text-left">
                Mais que um grupo, <br/>
                <span className="text-blue-500 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]">Uma Irmandade.</span>
              </h2>
              <div className="w-20 h-1 bg-blue-500 rounded-full mx-auto md:mx-0"></div>
              <p className="font-tech text-silver-metallic/80 text-base md:text-lg leading-relaxed text-center md:text-left">
                A <strong className="text-white">IRLA</strong> nasceu da necessidade de conexão real. O mercado digital é solitário, mas aqui você nunca caminha sozinho.
                Somos uma comunidade focada em <span className="text-silver-light font-bold">resultados práticos</span>, compartilhamento de estratégias validadas e networking de alto nível.
              </p>
              <p className="font-tech text-silver-metallic/60 text-xs md:text-sm text-center md:text-left">
                Esqueça os "gurus" inalcançáveis. Aqui todo mundo é irmão e ninguém solta a mão de ninguém. Se você quer escalar, aprender ou ensinar, seu lugar é na mesa com a gente.
              </p>
              
              {/* Ownership Text - Placed below VSL area / description as requested */}
              <div className="pt-4 border-t border-white/5 text-center md:text-left">
                <p className="text-[10px] text-silver-metallic/30 uppercase tracking-widest font-mono">
                  Empresa proprietária dono do grupo PROTOCOLO 777
                </p>
              </div>
            </div>

            {/* Right Grid */}
            <div className="flex-1 grid grid-cols-1 gap-4 w-full">
              <div className="bg-deep-metal/50 p-4 rounded-lg border border-white/5 flex items-start gap-4 hover:bg-white/5 transition-colors group">
                 <div className="p-3 bg-blue-500/10 rounded-lg shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Users className="w-6 h-6 text-blue-400" />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-sm mb-1 uppercase">Networking de Elite</h3>
                    <p className="text-xs text-silver-metallic/50">Conexão direta com quem está no campo de batalha todos os dias. Troca de experiências sem filtros.</p>
                 </div>
              </div>

              <div className="bg-deep-metal/50 p-4 rounded-lg border border-white/5 flex items-start gap-4 hover:bg-white/5 transition-colors group">
                 <div className="p-3 bg-blue-500/10 rounded-lg shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Share2 className="w-6 h-6 text-blue-400" />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-sm mb-1 uppercase">Estratégias Validadas</h3>
                    <p className="text-xs text-silver-metallic/50">Sem teoria furada. Compartilhamos o que está funcionando agora (White, Grey e Black).</p>
                 </div>
              </div>

              <div className="bg-deep-metal/50 p-4 rounded-lg border border-white/5 flex items-start gap-4 hover:bg-white/5 transition-colors group">
                 <div className="p-3 bg-blue-500/10 rounded-lg shrink-0 group-hover:bg-blue-500/20 transition-colors">
                    <Database className="w-6 h-6 text-blue-400" />
                 </div>
                 <div>
                    <h3 className="font-bold text-white text-sm mb-1 uppercase">Acervo Premium</h3>
                    <p className="text-xs text-silver-metallic/50">Acesso a PLRs, Scripts, Copys e Ferramentas para acelerar seu processo e economizar tempo.</p>
                 </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};