import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#0a1510] border-b border-[#182a22]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TIRE SUAS DÚVIDAS</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display [text-wrap:balance]">
            Perguntas Frequentes (FAQ)
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300">
            Tudo o que você precisa saber antes de garantir seu acesso.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#111e18] border border-[#21372b] overflow-hidden transition-all"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-[#162720] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-white text-sm sm:text-base font-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm text-slate-300 leading-relaxed border-t border-[#1a2c22]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
