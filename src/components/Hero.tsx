import React from 'react';
import { ShieldCheck, Zap, Star, ChefHat, Check } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden border-b border-[#182a22]">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-red-950/25 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/3 -translate-x-1/2 w-[400px] h-[350px] bg-emerald-950/20 blur-[100px] pointer-events-none rounded-full" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Trust Kicker */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-emerald-300 text-xs sm:text-sm font-medium mb-6">
            <span className="flex text-amber-400">★★★★★</span>
            <span className="text-emerald-200">Mais de 14.800 ceias transformadas em todo o Brasil</span>
          </div>

          {/* Main Title with text-wrap: balance */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15] font-display [text-wrap:balance]">
            250 Receitas de Natal –{' '}
            <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-100 bg-clip-text text-transparent">
              A Grande Enciclopédia
            </span>{' '}
            da Ceia Perfeita
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-xl text-slate-300 leading-relaxed [text-wrap:balance]">
            Receitas deliciosas, práticas e tradicionais preparadas para encantar toda a sua família neste Natal.
            Do peru suculento às sobremesas geladas e drinks festivos, sem passar horas de sufoco na cozinha.
          </p>
        </div>

        {/* Centerpiece: 3D Mockup + Offer Highlight */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* 3D Book Visual with glow */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative group max-w-md w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-600/20 via-amber-500/20 to-emerald-600/20 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000" />
              <div className="relative rounded-2xl p-2 sm:p-4 bg-gradient-to-b from-[#14231d] to-[#0d1612] border border-[#243d32] shadow-2xl">
                <img
                  src="/assets/ebook-250.webp"
                  alt="Livro Digital 250 Receitas de Natal - Chef Antônio"
                  className="w-full h-auto object-contain rounded-lg animate-float"
                  width={900}
                  height={600}
                  fetchPriority="high"
                  onError={(e) => {
                    // Fallback to stylized box if missing
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Floating badge */}
                <div className="absolute -bottom-3 -right-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs sm:text-sm py-1.5 px-3.5 rounded-lg shadow-lg border border-amber-300/40 flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-slate-950" />
                  <span>Edição Especial 2026</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Box & CTA */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#121f19] border border-[#233d31] shadow-xl">
              <div className="flex items-center justify-between gap-2 border-b border-[#21372c] pb-4 mb-4">
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                  ⭐ Oferta Especial de Natal
                </span>
                <span className="text-xs bg-red-950 text-red-300 border border-red-800/40 px-2 py-0.5 rounded font-bold">
                  66% OFF
                </span>
              </div>

              <div className="space-y-1 mb-5">
                <p className="text-sm text-slate-400 line-through">
                  De R$ 36,00
                </p>
                <div className="flex items-baseline gap-2 justify-center lg:justify-start">
                  <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                    R$ 12<span className="text-2xl font-semibold">,00</span>
                  </span>
                  <span className="text-xs text-emerald-400 font-medium">
                    Pagamento Único
                  </span>
                </div>
                <p className="text-xs text-slate-400 pt-1">
                  Sem mensalidades · Acesso vitalício para sempre
                </p>
              </div>

              {/* Highlights checklist */}
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300 mb-6 text-left">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>250 receitas completas e testadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Entradas, aves, carnes, sobremesas e drinks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>3 Bônus especiais liberados hoje</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Garantia incondicional de 7 dias</span>
                </li>
              </ul>

              {/* Big CTA Button */}
              <button
                onClick={onCtaClick}
                className="w-full py-4 px-6 rounded-xl font-bold text-white text-base sm:text-lg bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-500 shadow-lg shadow-red-950/80 hover:shadow-red-600/30 transition-all transform active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>🧑‍🍳 QUERO MINHAS RECEITAS DE NATAL</span>
              </button>

              {/* Instant WhatsApp Delivery Badge */}
              <div className="mt-4 flex items-center justify-center gap-2 text-xs font-semibold text-emerald-400">
                <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400" />
                <span>Acesso imediato pelo WhatsApp após confirmação</span>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust Highlights Below Hero */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <div className="p-4 rounded-xl bg-[#0f1b16] border border-[#1c3327] text-center">
            <span className="text-2xl block mb-1">📖</span>
            <strong className="text-sm font-semibold text-white block">250 Receitas</strong>
            <span className="text-xs text-slate-400">Passo a passo testado</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0f1b16] border border-[#1c3327] text-center">
            <span className="text-2xl block mb-1">🎁</span>
            <strong className="text-sm font-semibold text-white block">3 Bônus Grátis</strong>
            <span className="text-xs text-slate-400">R$ 74,70 em presentes</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0f1b16] border border-[#1c3327] text-center">
            <span className="text-2xl block mb-1">💬</span>
            <strong className="text-sm font-semibold text-white block">Envio no WhatsApp</strong>
            <span className="text-xs text-slate-400">Liberação em segundos</span>
          </div>
          <div className="p-4 rounded-xl bg-[#0f1b16] border border-[#1c3327] text-center">
            <span className="text-2xl block mb-1">🛡️</span>
            <strong className="text-sm font-semibold text-white block">Garantia 7 Dias</strong>
            <span className="text-xs text-slate-400">100% de reembolso</span>
          </div>
        </div>
      </div>
    </section>
  );
};
