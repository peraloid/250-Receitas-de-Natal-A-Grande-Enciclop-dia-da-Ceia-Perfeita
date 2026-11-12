import React, { useState } from 'react';
import { WHATSAPP_PROOFS, SOCIAL_COMMENTS } from '../data/content';
import { MessageSquare, Heart, ChevronLeft, ChevronRight, CheckCheck, ThumbsUp, Sparkles } from 'lucide-react';

interface WhatsAppProofsProps {
  onCtaClick: () => void;
}

export const WhatsAppProofs: React.FC<WhatsAppProofsProps> = ({ onCtaClick }) => {
  const [currentCommentIdx, setCurrentCommentIdx] = useState<number>(0);
  const [likesMap, setLikesMap] = useState<Record<string, { count: number; active: boolean }>>({
    c1: { count: 47, active: false },
    c2: { count: 38, active: false },
    c3: { count: 54, active: false },
    c4: { count: 29, active: false },
    c5: { count: 41, active: false },
  });

  const comment = SOCIAL_COMMENTS[currentCommentIdx];
  const currentLike = likesMap[comment.id] || { count: comment.likes, active: false };

  const handleLike = (id: string) => {
    setLikesMap(prev => {
      const current = prev[id] || { count: 0, active: false };
      return {
        ...prev,
        [id]: {
          count: current.active ? current.count - 1 : current.count + 1,
          active: !current.active
        }
      };
    });
  };

  return (
    <section id="depoimentos" className="py-16 sm:py-24 bg-[#09120e] border-b border-[#182a22]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: WhatsApp Conversation Screenshots */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-emerald-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>PRINTS REAIS DE CONVERSAS NO WHATSAPP</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display [text-wrap:balance]">
            Veja o Que Nossas Clientes Mandaram no WhatsApp
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Mensagens espontâneas enviadas por donas de casa e famílias reais após prepararem as receitas do livro.
          </p>
        </div>

        {/* WhatsApp Screenshots Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {WHATSAPP_PROOFS.map((proof, idx) => (
            <div
              key={idx}
              className="rounded-2xl overflow-hidden bg-[#111e18] border border-[#21392d] shadow-xl group hover:border-emerald-500/40 transition-all"
            >
              <div className="aspect-[9/16] bg-[#0c1612] overflow-hidden relative">
                <img
                  src={proof.image}
                  alt={proof.alt}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="p-3.5 bg-[#122019] border-t border-[#1e3529] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 font-semibold text-white">
                  <span>🎄</span>
                  <span>{proof.client}</span>
                </div>
                <span className="text-[11px] text-emerald-300 font-medium">
                  {proof.recipe}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Interactive Social Comments Carousel */}
        <div className="mt-16 pt-16 border-t border-[#1a2f24] max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              O Que Dizem Sobre as 250 Receitas de Natal:
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Avaliação média: <strong className="text-amber-400">4.9 / 5.0 estrelas</strong>
            </p>
          </div>

          {/* Social Proof Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-[#111e18] border border-[#22392d] shadow-2xl relative">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-[#1c3227]">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-amber-500 to-red-500 text-slate-950 font-bold text-sm flex items-center justify-center">
                  {comment.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <strong className="text-white text-sm font-semibold">
                      {comment.name}
                    </strong>
                    <span className="inline-flex items-center gap-0.5 text-[10px] text-emerald-400 font-semibold bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-700/40">
                      <CheckCheck className="w-3 h-3" /> Compra Verificada
                    </span>
                  </div>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    {comment.city} · {comment.time}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setCurrentCommentIdx((prev) => (prev - 1 + SOCIAL_COMMENTS.length) % SOCIAL_COMMENTS.length)}
                  className="w-8 h-8 rounded-lg bg-[#182a21] hover:bg-[#223d30] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Depoimento anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentCommentIdx((prev) => (prev + 1) % SOCIAL_COMMENTS.length)}
                  className="w-8 h-8 rounded-lg bg-[#182a21] hover:bg-[#223d30] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Próximo depoimento"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Comment Body */}
            <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6 italic">
              "{comment.text}"
            </p>

            {/* Footer with Like Button */}
            <div className="flex items-center justify-between pt-3 border-t border-[#1c3227] text-xs text-slate-400">
              <button
                onClick={() => handleLike(comment.id)}
                className={`flex items-center gap-1.5 py-1 px-3 rounded-lg transition-colors cursor-pointer ${
                  currentLike.active
                    ? 'text-rose-400 bg-rose-950/50'
                    : 'text-slate-400 hover:text-rose-400 hover:bg-[#182a21]'
                }`}
              >
                <Heart className={`w-4 h-4 ${currentLike.active ? 'fill-rose-400' : ''}`} />
                <span>{currentLike.count} pessoas curtiram</span>
              </button>

              <span className="text-[11px] text-slate-400">
                Depoimento {currentCommentIdx + 1} de {SOCIAL_COMMENTS.length}
              </span>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-1.5 mt-5">
            {SOCIAL_COMMENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentCommentIdx(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  i === currentCommentIdx ? 'w-6 bg-amber-400' : 'w-2 bg-[#1f372b]'
                }`}
                aria-label={`Ir para depoimento ${i + 1}`}
              />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={onCtaClick}
              className="py-3.5 px-8 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-950/60 transition-all transform active:scale-95 cursor-pointer text-sm sm:text-base"
            >
              🎄 QUERO MINHAS 250 RECEITAS AGORA
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
