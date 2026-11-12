import React, { useEffect, useState } from 'react';
import { Zap, Sparkles } from 'lucide-react';

interface StickyBottomBarProps {
  onCtaClick: () => void;
}

export const StickyBottomBar: React.FC<StickyBottomBarProps> = ({ onCtaClick }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 450px
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0a1410]/95 backdrop-blur-md border-t border-[#1f372a] p-3 shadow-2xl transition-all duration-300 animate-slideUp">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-3 px-2">
        <div className="flex items-center gap-2">
          <span className="text-xl hidden sm:inline">🎄</span>
          <div>
            <div className="text-xs sm:text-sm font-bold text-white leading-tight">
              250 Receitas de Natal
            </div>
            <div className="text-[11px] text-amber-300 font-mono">
              Por apenas <span className="font-bold">R$ 12,00</span>
            </div>
          </div>
        </div>

        <button
          onClick={onCtaClick}
          className="py-2.5 px-5 rounded-lg text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-950/50 active:scale-95 transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5"
        >
          <Zap className="w-3.5 h-3.5 fill-white" />
          <span>Garantir Acesso</span>
        </button>
      </div>
    </div>
  );
};
