import React from 'react';
import { Check, ShieldCheck, Zap, Star, Gift, Sparkles, Printer } from 'lucide-react';

interface PricingSectionProps {
  onSelectOffer: (tier: 'basic' | 'premium') => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectOffer }) => {
  return (
    <section id="ofertas" className="py-16 sm:py-24 bg-[#0a1410] border-b border-[#182a22]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INVESTIMENTO ÚNICO SEM MENSALIDADE</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display [text-wrap:balance]">
            🎄 Escolha Sua Oferta Especial de Natal
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Acesso vitalício liberado imediatamente no seu WhatsApp. Escolha o plano ideal para a sua ceia.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Plan 1: Basic Offer */}
          <div className="p-7 sm:p-8 rounded-3xl bg-[#111e18] border border-[#20362c] flex flex-col justify-between shadow-xl relative hover:border-[#2d4d3e] transition-all">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  🎁 OFERTA BÁSICA
                </span>
                <span className="text-xs bg-[#192b22] text-slate-300 px-2.5 py-0.5 rounded font-semibold border border-[#264033]">
                  Apenas o Livro
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                250 Receitas de Natal
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Para quem deseja somente a coletânea de receitas, sem bônus extras ou versão de impressão.
              </p>

              {/* Price */}
              <div className="p-4 rounded-2xl bg-[#0d1713] border border-[#1d3127] mb-6">
                <div className="text-xs text-slate-400 line-through">De R$ 36,00</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-white font-mono">
                    R$ 12<span className="text-xl">,00</span>
                  </span>
                  <span className="text-xs text-slate-400">/ pagamento único</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-slate-300 mb-8">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>250 Receitas de Natal Completas e Testadas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acesso vitalício para ver no celular e computador</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acesso imediato no WhatsApp após confirmação</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Garantia incondicional de 7 dias</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400 line-through">
                  <span className="w-4 h-4 text-slate-400 text-center font-bold">✕</span>
                  <span>Sem os 3 Bônus Exclusivos de Natal</span>
                </li>
                <li className="flex items-start gap-2.5 text-slate-400 line-through">
                  <span className="w-4 h-4 text-slate-400 text-center font-bold">✕</span>
                  <span>Sem versão diagramada para impressão</span>
                </li>
              </ul>
            </div>

            <div>
              <button
                onClick={() => onSelectOffer('basic')}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#1a2d24] hover:bg-[#233c30] border border-[#2b4b3b] shadow transition-all active:scale-98 cursor-pointer text-sm"
              >
                ADQUIRIR OFERTA BÁSICA
              </button>
            </div>
          </div>

          {/* Plan 2: Premium Edition (Most Popular) */}
          <div className="p-7 sm:p-8 rounded-3xl bg-gradient-to-b from-[#14261e] via-[#101e18] to-[#0e1b15] border-2 border-amber-400/80 flex flex-col justify-between shadow-2xl relative group">
            {/* Ribbon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500 text-slate-950 font-black text-xs py-1 px-4 rounded-full shadow-lg tracking-wide uppercase flex items-center gap-1.5 whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-slate-950" />
              <span>★ MAIS POPULAR · 92% ESCOLHEM ESTA</span>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3 mt-1">
                <span className="text-xs font-extrabold text-amber-300 uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>🌟 EDIÇÃO PREMIUM VIP</span>
                </span>
                <span className="text-xs bg-red-950 text-red-300 border border-red-700/50 px-2.5 py-0.5 rounded font-bold">
                  MELHOR VALOR
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
                250 Receitas de Natal + 3 Bônus
              </h3>
              <p className="text-xs text-amber-100/80 mb-6">
                O pacote completo definitivo: livro completo + todos os 3 bônus exclusivos + versão imprimível em alta definição.
              </p>

              {/* Price */}
              <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 mb-6">
                <div className="text-xs text-slate-400 line-through">De R$ 60,00</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-black text-amber-300 font-mono">
                    R$ 17<span className="text-xl">,00</span>
                  </span>
                  <span className="text-xs text-emerald-300 font-semibold">/ pagamento único</span>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 text-xs sm:text-sm text-slate-200 mb-6">
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-semibold text-white">250 Receitas de Natal Completas & Testadas</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Entradas, aves nobres, carnes, sobremesas e drinks</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="flex items-center gap-1.5">
                    <Printer className="w-3.5 h-3.5 text-amber-400" />
                    <strong>Versão Imprimível em Alta Resolução (PDF A4)</strong>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Acesso vitalício com envio instantâneo no WhatsApp</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Garantia incondicional de 7 dias</span>
                </li>
              </ul>

              {/* Bonus Highlight Box */}
              <div className="p-4 rounded-xl bg-[#172b22] border border-amber-400/40 mb-8">
                <div className="text-xs font-bold text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-amber-400" />
                  <span>Incluso Gratuitamente Hoje (Valor R$ 74,70):</span>
                </div>
                <div className="space-y-1.5 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>🥗 Guia da Ceia Fitness de Natal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>🎀 Guia de Decoração e Mesa Posta de Natal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-400">✓</span>
                    <span>🍗 Mini Livro da 'Ceia Econômica' (10 menus até R$ 150)</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <button
                onClick={() => onSelectOffer('premium')}
                className="w-full py-4 px-6 rounded-xl font-extrabold text-white text-base bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-500 shadow-xl shadow-red-950/80 transition-all transform active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                <span>🎄 QUERO A EDIÇÃO PREMIUM COMPLETA</span>
              </button>
            </div>
          </div>
        </div>

        {/* Security & Trust Strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm text-slate-400 border-t border-[#1a2f24] pt-8">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Pagamento Seguro Criptografado</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-amber-400" />
            <span>Acesso Imediato no WhatsApp</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-400" />
            <span>Garantia de 7 Dias ou Reembolso</span>
          </div>
        </div>
      </div>
    </section>
  );
};
