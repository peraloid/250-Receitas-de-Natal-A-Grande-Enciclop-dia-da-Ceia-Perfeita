import React from 'react';
import { ShieldCheck, Snowflake } from 'lucide-react';

interface FooterProps {
  snowEnabled: boolean;
  onToggleSnow: () => void;
}

export const Footer: React.FC<FooterProps> = ({ snowEnabled, onToggleSnow }) => {
  return (
    <footer className="py-12 bg-[#060c09] border-t border-[#14231b] text-slate-400 text-xs text-center pb-20 sm:pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="mb-4">
          <span className="text-3xl block mb-2">🎄</span>
          <strong className="text-base font-bold text-white font-display block">
            250 Receitas de Natal – A Grande Enciclopédia da Ceia Perfeita
          </strong>
          <span className="text-xs text-slate-400 mt-1 block">
            Por Chef Antônio · Edição Oficial 2026
          </span>
        </div>

        <p className="max-w-md mx-auto text-[11px] text-slate-400 leading-relaxed mb-6">
          Material digital de acesso imediato. O conteúdo será disponibilizado via WhatsApp e e-mail imediatamente após a aprovação do pagamento pela plataforma segura.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-4 text-[11px] text-slate-400 mb-6">
          <span>Termos de Uso</span>
          <span>·</span>
          <span>Política de Privacidade</span>
          <span>·</span>
          <span>Garantia de 7 Dias</span>
          <span>·</span>
          <span>Suporte ao Cliente</span>
        </div>

        {/* Snow effect toggle */}
        <div className="flex justify-center mb-6">
          <button
            onClick={onToggleSnow}
            className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full bg-[#111e18] border border-[#1f372a] text-slate-300 hover:text-white text-xs transition-colors cursor-pointer"
            title="Alternar efeito de neve natalina"
          >
            <Snowflake className={`w-3.5 h-3.5 ${snowEnabled ? 'text-cyan-300' : 'text-slate-500'}`} />
            <span>Neve natalina: {snowEnabled ? 'Ativada' : 'Pausada'}</span>
          </button>
        </div>

        <p className="text-[11px] text-slate-400">
          © 2026 – 250 Receitas de Natal | Todos os Direitos Reservados
        </p>
      </div>
    </footer>
  );
};
