import React from 'react';
import { ChefHat, Award, Heart, CheckCircle2 } from 'lucide-react';

export const ChefBio: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#0a1510] border-b border-[#182a22]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#12201a] to-[#0d1712] border border-[#233f32] shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Chef Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-amber-400/30 shadow-2xl bg-[#162720]">
                  <img
                    src="/assets/aistudio/Retrato_de_Chef_Sorridente_em_3D_27b665bc.png"
                    alt="Chef Antônio - Criador do livro 250 Receitas de Natal"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-amber-400 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  Chef Antônio
                </div>
              </div>
            </div>

            {/* Chef Story */}
            <div className="md:col-span-7 text-center md:text-left">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                <ChefHat className="w-3.5 h-3.5" />
                <span>Sobre o Autor</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white font-display mb-4">
                "Minha missão é fazer sua ceia ser inesquecível e sem estresse."
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Olá, eu sou o <strong>Chef Antônio</strong>. Ao longo de mais de 15 anos cozinhando e ensinando famílias em todo o Brasil, percebi que a véspera de Natal se tornava um pesadelo de correria, carne ressecada e ingredientes caros comprados de última hora.
              </p>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Por isso, reuni nesta enciclopédia definitiva <strong>250 receitas testadas e aperfeiçoadas</strong>. Cada prato foi lapidado para que qualquer pessoa — mesmo sem experiência — consiga colocar na mesa um peru suculento, guarnições douradas e sobremesas divinas, com ingredientes simples que você encontra na feira ou no mercadinho do bairro.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Mais de 14.800 lares alcançados</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Receitas 100% testadas e aprovadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Linguagem simples e didática</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Acesso vitalício garantido</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
