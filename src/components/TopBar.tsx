import React from 'react';
import { Sparkles } from 'lucide-react';

interface TopBarProps {
  onCtaClick: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onCtaClick }) => {
  return (
    <>
      {/* Top Festive Announcement Strip */}
      <aside aria-label="Aviso de promoção especial" className="bg-gradient-to-r from-red-900 via-rose-950 to-red-900 border-b border-red-800/40 py-2 px-4 text-center text-xs sm:text-sm font-medium text-amber-200/90 tracking-wide">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
          <span>Oferta Especial de Fim de Ano: 250 Receitas + 3 Bônus Grátis</span>
          <span className="hidden sm:inline text-amber-400/60">·</span>
          <span className="hidden sm:inline text-amber-100">Acesso imediato no WhatsApp</span>
        </span>
      </aside>

      {/* Top Bar following Top Bar Contract (Zone 1 - Zone 2 - Zone 3) */}
      <header className="sticky top-0 z-30 bg-[#09120e]/95 backdrop-blur-md border-b border-[#1d3329] px-4 sm:px-8 py-3.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-8">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg sm:text-xl font-bold tracking-tight text-white hover:text-amber-300 transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 font-display"
          >
            <span className="text-xl">🎄</span>
            <span>250 Receitas de Natal</span>
          </a>

          {/* Zone 2: 4-5 concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300">
            <a href="#vantagens" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Vantagens
            </a>
            <a href="#receitas" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Cardápios
            </a>
            <a href="#bonus" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Bônus
            </a>
            <a href="#calculadora" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Calculadora
            </a>
            <a href="#depoimentos" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Depoimentos
            </a>
            <a href="#faq" className="hover:text-amber-300 transition-colors whitespace-nowrap shrink-0">
              Dúvidas
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onCtaClick}
              className="px-4 py-2 text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg shadow-md shadow-red-950/50 hover:shadow-red-600/25 transition-all active:scale-95 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Garantir por R$ 12
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
