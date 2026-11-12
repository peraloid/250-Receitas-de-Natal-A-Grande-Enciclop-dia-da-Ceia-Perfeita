import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const GuaranteeSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#09120e] border-b border-[#182a22]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#12221b] via-[#162920] to-[#12221b] border-2 border-emerald-500/30 shadow-2xl flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
          {/* Guarantee Badge */}
          <div className="shrink-0">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-tr from-amber-500 via-amber-400 to-amber-200 p-1 shadow-2xl flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0d1713] flex flex-col items-center justify-center text-center p-2 border-2 border-amber-400/50">
                <ShieldCheck className="w-8 h-8 text-amber-400 mb-0.5" />
                <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono leading-none">
                  7 DIAS
                </span>
                <span className="text-[9px] uppercase tracking-wider text-slate-300 font-bold mt-0.5">
                  Garantia Total
                </span>
              </div>
            </div>
          </div>

          {/* Guarantee Copy */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-400 mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>Sua Compra 100% Livre de Risco</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-3">
              Garantia Incondicional de 7 Dias ou Seu Dinheiro de Volta
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Temos tanta certeza da qualidade e do sabor dessas receitas que você assume <strong>risco zero</strong>. 
              Adquira hoje, receba no seu WhatsApp, teste as receitas para a ceia e, se por qualquer razão você não amar ou achar que não valeu a pena, basta nos mandar uma mensagem dentro de 7 dias e devolveremos 100% do seu investimento. Sem perguntas e sem letras miúdas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
