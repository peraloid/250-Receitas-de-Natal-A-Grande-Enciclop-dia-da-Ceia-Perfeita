import React from 'react';
import { ADVANTAGES, INDISPENSABLE_REASONS } from '../data/content';
import { Check, Sparkles, Heart, Clock } from 'lucide-react';

interface AdvantagesProps {
  onCtaClick: () => void;
}

export const Advantages: React.FC<AdvantagesProps> = ({ onCtaClick }) => {
  return (
    <section id="vantagens" className="py-16 sm:py-24 bg-[#0a1410] border-b border-[#182a22]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Advantages */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Tudo Para Sua Ceia Ser Perfeita</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display [text-wrap:balance]">
            Vantagens do Livro 250 Receitas de Natal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Chega de ficar perdida no mercado ou com medo de queimar ou ressecar a carne da ceia.
          </p>
        </div>

        {/* 6 Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ADVANTAGES.map((adv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#111e18] border border-[#20362b] hover:border-amber-400/30 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#182a22] flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform">
                {adv.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 font-display">
                {adv.title}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>

        {/* Section 2: Why it is indispensable */}
        <div className="mt-20 pt-16 border-t border-[#1a2f24]">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display [text-wrap:balance]">
              🎁 Por Que Este Livro É Indispensável Para Seu Fim de Ano?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300">
              O Natal só acontece uma vez por ano. Garanta que a sua ceia seja celebrada com orgulho e elogios.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDISPENSABLE_REASONS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-[#13221c] to-[#0e1914] border border-[#223a2d] relative"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-bold text-amber-200 mb-2 font-display">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Quick CTA */}
          <div className="mt-12 text-center">
            <button
              onClick={onCtaClick}
              className="inline-flex items-center gap-2 py-3.5 px-8 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-950/60 transition-all transform active:scale-95 cursor-pointer text-sm sm:text-base"
            >
              <span>🎄 SIM, QUERO MINHAS RECEITAS DE NATAL</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
