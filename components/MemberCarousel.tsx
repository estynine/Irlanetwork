import React from 'react';
import { MEMBERS } from '../constants';
import { Users, FileSpreadsheet } from 'lucide-react';

export const MemberCarousel: React.FC = () => {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden border-t border-white/5">
      
      <div className="text-center mb-12 px-4 relative z-10">
        <div className="inline-flex items-center justify-center p-3 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20">
          <Users className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="font-display text-2xl md:text-3xl font-bold text-white mb-2 tracking-wide">
          MEMBROS <span className="text-blue-500">CONECTADOS</span>
        </h2>
        <p className="text-sm font-tech text-silver-metallic/60 tracking-wider uppercase flex items-center justify-center gap-2">
          <FileSpreadsheet className="w-4 h-4" />
          Registro de Entrada em Tempo Real
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        {/* Simple Spreadsheet Look */}
        <div className="bg-[#0A0F16] border border-white/20 rounded-lg overflow-hidden shadow-2xl backdrop-blur-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#0F1621] border-b border-white/20">
                  <th className="py-3 px-4 font-mono text-xs text-silver-metallic/70 uppercase border-r border-white/10">Data</th>
                  <th className="py-3 px-4 font-mono text-xs text-silver-metallic/70 uppercase border-r border-white/10">Membro</th>
                  <th className="py-3 px-4 font-mono text-xs text-silver-metallic/70 uppercase border-r border-white/10">Idade</th>
                  <th className="py-3 px-4 font-mono text-xs text-silver-metallic/70 uppercase border-r border-white/10">Estado</th>
                  <th className="py-3 px-4 font-mono text-xs text-silver-metallic/70 uppercase">Especialidade</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {MEMBERS.map((member, index) => (
                  <tr key={index} className="hover:bg-white/5 transition-colors">
                    <td className="py-2 px-4 font-mono text-xs text-silver-metallic/60 border-r border-white/10">
                      {member.date}
                    </td>
                    <td className="py-2 px-4 border-r border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white text-sm">
                          {member.name}
                        </span>
                      </div>
                    </td>
                    <td className="py-2 px-4 text-xs text-silver-light/80 border-r border-white/10">
                      {member.age}
                    </td>
                    <td className="py-2 px-4 text-xs text-silver-light/80 border-r border-white/10">
                      {member.state}
                    </td>
                    <td className="py-2 px-4 text-xs">
                      <span className="text-blue-300">
                        {member.skills}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="text-center mt-4">
            <p className="text-[10px] text-silver-metallic/30 uppercase tracking-widest font-mono">Atualizado a cada 5 minutos</p>
        </div>
      </div>
    </section>
  );
};