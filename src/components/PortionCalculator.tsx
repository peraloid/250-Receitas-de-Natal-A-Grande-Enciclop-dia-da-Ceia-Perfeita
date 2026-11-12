import React, { useState } from 'react';
import { Calculator, Users, UtensilsCrossed, Sparkles, TrendingDown } from 'lucide-react';

interface PortionCalculatorProps {
  onCtaClick: () => void;
}

export const PortionCalculator: React.FC<PortionCalculatorProps> = ({ onCtaClick }) => {
  const [adults, setAdults] = useState<number>(8);
  const [children, setChildren] = useState<number>(3);

  // Calculations
  const meatKg = ((adults * 0.4 + children * 0.2)).toFixed(1);
  const riceKg = ((adults * 0.12 + children * 0.06)).toFixed(1);
  const saladKg = ((adults * 0.15 + children * 0.08)).toFixed(1);
  const dessertPortions = adults + children;

  // Cost estimates
  const cateringCost = (adults * 65 + children * 35);
  const homeCookedCost = Math.round(cateringCost * 0.32);
  const savings = cateringCost - homeCookedCost;

  return (
    <section id="calculadora" className="py-16 sm:py-24 bg-[#09120e] border-b border-[#182a22]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>FERRAMENTA INTERATIVA GRATUITA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display [text-wrap:balance]">
            Calculadora de Ceia de Natal: Quantidades & Economia
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Descubra a quantidade ideal de comida para sua família sem sobras exageradas e veja quanto você economiza fazendo em casa com as receitas do livro.
          </p>
        </div>

        <div className="p-6 sm:p-8 rounded-3xl bg-[#111e18] border border-[#233d31] shadow-2xl">
          {/* Controls */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-[#1e3429]">
            {/* Adults */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-amber-400" />
                  <span>Número de Adultos</span>
                </label>
                <span className="text-lg font-bold text-amber-300 font-mono">
                  {adults} pessoas
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="30"
                value={adults}
                onChange={(e) => setAdults(Number(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer h-2 bg-[#1b2f24] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>2 pessoas</span>
                <span>30 pessoas</span>
              </div>
            </div>

            {/* Children */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-sm font-semibold text-white flex items-center gap-2">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Número de Crianças (até 11 anos)</span>
                </label>
                <span className="text-lg font-bold text-emerald-300 font-mono">
                  {children} crianças
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                value={children}
                onChange={(e) => setChildren(Number(e.target.value))}
                className="w-full accent-emerald-400 cursor-pointer h-2 bg-[#1b2f24] rounded-lg"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>0 crianças</span>
                <span>15 crianças</span>
              </div>
            </div>
          </div>

          {/* Results: Portions Breakdown */}
          <div className="mb-8">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
              <UtensilsCrossed className="w-4 h-4 text-amber-400" />
              <span>Quantidades Recomendadas Para Sua Ceia:</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-[#16261f] border border-[#233f31] text-center">
                <span className="text-xs text-slate-400 block mb-1">Carnes & Aves</span>
                <span className="text-2xl font-bold text-amber-300 font-mono">
                  {meatKg} kg
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Peru, Chester ou Lombo
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#16261f] border border-[#233f31] text-center">
                <span className="text-xs text-slate-400 block mb-1">Arroz Festivo</span>
                <span className="text-2xl font-bold text-white font-mono">
                  {riceKg} kg
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Grãos crus calculados
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#16261f] border border-[#233f31] text-center">
                <span className="text-xs text-slate-400 block mb-1">Salpicão & Saladas</span>
                <span className="text-2xl font-bold text-emerald-300 font-mono">
                  {saladKg} kg
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Guarnições frias
                </span>
              </div>

              <div className="p-4 rounded-xl bg-[#16261f] border border-[#233f31] text-center">
                <span className="text-xs text-slate-400 block mb-1">Sobremesas</span>
                <span className="text-2xl font-bold text-rose-300 font-mono">
                  {dessertPortions} fatias
                </span>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Pavê ou rabanadas
                </span>
              </div>
            </div>
          </div>

          {/* Cost Comparison & Savings Callout */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-[#172b22] to-[#14261e] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-semibold text-emerald-400">
                <TrendingDown className="w-4 h-4" />
                <span>Economia Garantida com o Livro do Chef Antônio</span>
              </div>
              <div className="text-slate-300 text-xs sm:text-sm">
                Comprando ceia pronta encomendada: <span className="line-through font-mono">R$ {cateringCost},00</span>
              </div>
              <div className="text-slate-200 text-sm">
                Fazendo em casa com as receitas econômicas:{' '}
                <strong className="text-emerald-300 font-mono text-base font-bold">R$ {homeCookedCost},00</strong>
              </div>
            </div>

            <div className="text-center md:text-right shrink-0">
              <div className="text-xs text-slate-400 mb-0.5">Você economiza cerca de:</div>
              <div className="text-3xl font-extrabold text-amber-300 font-mono">
                R$ {savings},00
              </div>
              <button
                onClick={onCtaClick}
                className="mt-3 py-2.5 px-5 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Garantir o Livro por R$ 12 e Economizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
