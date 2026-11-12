import React, { useState } from 'react';
import { X, Gift, Check, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
  tier: 'basic' | 'premium';
}

export const PromoModal: React.FC<PromoModalProps> = ({ isOpen, onClose, tier }) => {
  const [orderConfirmed, setOrderConfirmed] = useState<boolean>(false);
  const [planSelected, setPlanSelected] = useState<string>('Edição Premium');

  if (!isOpen) return null;

  const isBasic = tier === 'basic';
  const promoPrice = isBasic ? '13,82' : '14,82';

  const handleClose = () => {
    setOrderConfirmed(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="promo-modal-title"
    >
      <div
        className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#162720] via-[#111e18] to-[#0c1611] border-2 border-amber-400 p-6 sm:p-8 shadow-2xl text-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#1e342a] hover:bg-[#284639] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Fechar promoção"
        >
          <X className="w-5 h-5" />
        </button>

        {orderConfirmed ? (
          <div>
            <div className="text-5xl mb-3">🎉</div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600 text-white font-black text-xs uppercase tracking-wider mb-4 shadow-md">
              <Check className="w-3.5 h-3.5" />
              <span>PEDIDO CONFIRMADO</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
              Acesso Liberado para o seu WhatsApp!
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
              Seu pedido da <strong>{planSelected}</strong> foi registrado com sucesso. Toque no botão abaixo para abrir a conversa e receber o material na mesma hora:
            </p>
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `Olá! Gostaria de receber meu acesso completo às 250 Receitas de Natal (${planSelected})!`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-xl font-black text-white text-base bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 hover:from-emerald-500 hover:to-emerald-500 shadow-xl shadow-emerald-950/80 transition-all flex items-center justify-center gap-2 block mb-3 text-center"
            >
              📱 ABRIR WHATSAPP E RECEBER MATERIAL
            </a>
            <button
              onClick={handleClose}
              className="text-xs text-slate-400 hover:text-slate-200 underline transition-colors cursor-pointer"
            >
              Concluir e voltar
            </button>
          </div>
        ) : (
          <>
            {/* Promo Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider mb-4 shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>🎁 ESPERE! PROMOÇÃO EXCLUSIVA DE NATAL</span>
            </div>

            {/* Title */}
            <h3 id="promo-modal-title" className="text-xl sm:text-2xl font-bold text-white font-display leading-tight mb-2">
              250 Receitas de Natal Edição <span className="text-amber-300">PREMIUM</span> por apenas R$ {promoPrice}
            </h3>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-300 mb-5 leading-relaxed">
              Não saia com a versão básica incompleta! Aproveite esta condição relâmpago para levar a{' '}
              <strong className="text-amber-200">Edição PREMIUM Completa + Todos os 3 Bônus Exclusivos</strong> por quase o mesmo valor: apenas <strong>R$ {promoPrice}</strong>!
            </p>

            {/* Perks Box */}
            <div className="p-4 rounded-2xl bg-[#0f1b15] border border-[#233d31] text-left space-y-2 mb-5 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-semibold text-white">250 Receitas de Natal Completas + Versão Imprimível</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span>🥗 Bônus 1: Guia da Ceia Fitness de Natal</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span>🎀 Bônus 2: Decoração e Mesa Posta de Natal</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4 text-amber-400 shrink-0" />
                <span>🍗 Bônus 3: Mini Livro da Ceia Econômica</span>
              </div>
            </div>

            {/* Price Box */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 mb-6">
              <div className="text-xs text-slate-400 line-through">
                De R$ 17,00 por apenas:
              </div>
              <div className="text-4xl font-extrabold text-amber-300 font-mono tracking-tight my-0.5">
                R$ {promoPrice}
              </div>
              <div className="text-[11px] text-emerald-400 font-medium">
                Pagamento Único · Acesso Imediato no WhatsApp
              </div>
            </div>

            {/* Primary Action Button (No external gateway) */}
            <button
              type="button"
              onClick={() => {
                setPlanSelected('Edição Premium');
                setOrderConfirmed(true);
              }}
              className="w-full py-4 px-6 rounded-xl font-black text-white text-base bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-500 hover:to-red-500 shadow-xl shadow-red-950/80 transition-all transform active:scale-98 flex items-center justify-center gap-2 block mb-3 text-center cursor-pointer"
            >
              <span>🎄 QUERO A EDIÇÃO PREMIUM POR R$ {promoPrice}</span>
            </button>

            {/* Secondary Skip Link if basic */}
            {isBasic && (
              <button
                type="button"
                onClick={() => {
                  setPlanSelected('Oferta Básica');
                  setOrderConfirmed(true);
                }}
                className="text-xs text-slate-400 hover:text-slate-200 underline transition-colors block py-1 mx-auto bg-transparent border-0 cursor-pointer"
              >
                Não, obrigado. Quero continuar apenas com a oferta básica sem bônus por R$ 12,00
              </button>
            )}

            {/* Security badge */}
            <div className="mt-4 flex items-center justify-center gap-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                Compra 100% Segura
              </span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                Liberação Automática no WhatsApp
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
