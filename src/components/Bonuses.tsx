import React from 'react';
import { BONUSES } from '../data/content';
import { Gift, Sparkles, Check, Salad, Palette, PiggyBank } from 'lucide-react';

interface BonusesProps {
  onCtaClick: () => void;
}

export const Bonuses: React.FC<BonusesProps> = ({ onCtaClick }) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Salad':
        return <Salad className="w-8 h-8 text-emerald-400" />;
      case 'Sparkles':
        return <Palette className="w-8 h-8 text-amber-400" />;
      case 'Coins':
        return <PiggyBank className="w-8 h-8 text-rose-400" />;
      default:
        return <Gift className="w-8 h-8 text-amber-400" />;
    }
  };

  return (
    <section id="bonus" className="py-16 sm:py-24 bg-[#0a1510] border-b border-[#182a22]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <Gift className="w-3.5 h-3.5 text-amber-400" />
            <span>PRESENTES DE NATAL PARA VOCÊ</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display [text-wrap:balance]">
            Compre Hoje e Receba 3 Bônus Exclusivos Grátis
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Presentes especiais de Natal para deixar sua ceia organizada, linda e econômica — inclusos gratuitamente no seu pedido hoje.
          </p>
        </div>

        {/* 3 Bonuses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BONUSES.map((bonus) => (
            <article
              key={bonus.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#111e18] border border-[#233d31] hover:border-amber-400/40 transition-all flex flex-col justify-between shadow-xl relative overflow-hidden group"
            >
              {/* Top tag */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded bg-[#182b22] text-amber-300 border border-amber-400/20">
                  {bonus.number}
                </span>
                <span className="text-xs font-extrabold px-2.5 py-1 rounded bg-emerald-950 text-emerald-300 border border-emerald-600/40">
                  {bonus.tag}
                </span>
              </div>

              {/* Bonus Icon Box */}
              <div className="w-16 h-16 rounded-2xl bg-[#172720] border border-[#243c31] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                {getIcon(bonus.iconName)}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-display">
                  {bonus.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {bonus.description}
                </p>

                {/* Bullets */}
                <ul className="space-y-1.5 text-xs text-slate-400 mb-6">
                  {bonus.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price comparison */}
              <div className="border-t border-[#1e3428] pt-4 flex items-center justify-between">
                <div>
                  <span className="text-xs text-slate-400">Vendido avulso por: </span>
                  <span className="text-xs text-slate-400 line-through">R$ {bonus.originalPrice}</span>
                </div>
                <strong className="text-sm font-bold text-emerald-400">
                  GRÁTIS HOJE
                </strong>
              </div>
            </article>
          ))}
        </div>

        {/* Totalizer Banner */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-red-950/60 via-[#182a21] to-red-950/60 border border-red-800/40 text-center max-w-3xl mx-auto shadow-2xl">
          <p className="text-sm sm:text-base text-slate-200 mb-2">
            🎄 Valor total somado dos 3 bônus exclusivos:{' '}
            <span className="line-through text-slate-400 font-semibold">R$ 74,70</span>
          </p>
          <div className="text-2xl sm:text-3xl font-extrabold text-amber-300 font-display mb-4">
            SAI POR R$ 0,00 NO SEU PEDIDO HOJE!
          </div>
          <button
            onClick={onCtaClick}
            className="py-4 px-8 rounded-xl font-bold text-white text-base bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-xl shadow-red-950/80 transition-all transform active:scale-95 cursor-pointer"
          >
            🎁 SIM, QUERO MINHAS 250 RECEITAS + TODOS OS BÔNUS
          </button>
        </div>
      </div>
    </section>
  );
};
