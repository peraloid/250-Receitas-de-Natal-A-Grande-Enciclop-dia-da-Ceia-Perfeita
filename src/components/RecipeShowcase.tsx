import React, { useState } from 'react';
import { FEATURED_RECIPES } from '../data/recipes';
import { RecipeItem } from '../types';
import { Clock, Users, ChefHat, Eye, X, CheckCircle2, Lightbulb } from 'lucide-react';

interface RecipeShowcaseProps {
  onCtaClick: () => void;
}

export const RecipeShowcase: React.FC<RecipeShowcaseProps> = ({ onCtaClick }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeRecipe, setActiveRecipe] = useState<RecipeItem | null>(null);

  const filteredRecipes = selectedCategory === 'all'
    ? FEATURED_RECIPES
    : FEATURED_RECIPES.filter(r => r.category === selectedCategory);

  return (
    <section id="receitas" className="py-16 sm:py-24 bg-[#09120e] border-b border-[#182a22]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-amber-400 mb-3">
            <span>✨ PRÉVIA EXCLUSIVA</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white font-display [text-wrap:balance]">
            Veja Algumas das 250 Receitas de Natal que Você Vai Receber
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-300">
            Folheie as páginas do livro! Clique em qualquer prato abaixo para conferir o modo de preparo detalhado.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-[#121f19] text-slate-300 hover:bg-[#1a2c24] border border-[#233d31]'
            }`}
          >
            Todas as Receitas
          </button>
          <button
            onClick={() => setSelectedCategory('carnes')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'carnes'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-[#121f19] text-slate-300 hover:bg-[#1a2c24] border border-[#233d31]'
            }`}
          >
            🍗 Carnes & Aves
          </button>
          <button
            onClick={() => setSelectedCategory('acompanhamentos')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'acompanhamentos'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-[#121f19] text-slate-300 hover:bg-[#1a2c24] border border-[#233d31]'
            }`}
          >
            🥗 Acompanhamentos
          </button>
          <button
            onClick={() => setSelectedCategory('sobremesas')}
            className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap ${
              selectedCategory === 'sobremesas'
                ? 'bg-amber-400 text-slate-950 shadow-md shadow-amber-400/20'
                : 'bg-[#121f19] text-slate-300 hover:bg-[#1a2c24] border border-[#233d31]'
            }`}
          >
            🍰 Sobremesas
          </button>
        </div>

        {/* Recipes Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <article
              key={recipe.id}
              onClick={() => setActiveRecipe(recipe)}
              className="group cursor-pointer rounded-2xl bg-[#111e18] border border-[#223b2e] hover:border-amber-400/50 transition-all duration-300 overflow-hidden flex flex-col shadow-lg hover:shadow-amber-950/40 hover:-translate-y-1"
            >
              {/* Recipe Book Page Mockup Image */}
              <div className="relative aspect-[3/4] bg-[#0c1612] overflow-hidden">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to stylized cover card if image fails
                    e.currentTarget.style.display = 'none';
                  }}
                />
                
                {/* Fallback container in case image doesn't show */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-amber-300 bg-amber-950/80 border border-amber-500/30 px-2 py-0.5 rounded w-max mb-1">
                    {recipe.category === 'carnes' ? 'Prato Principal' : recipe.category === 'acompanhamentos' ? 'Acompanhamento' : 'Sobremesa'}
                  </span>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-200 transition-colors font-display line-clamp-2">
                    {recipe.title}
                  </h3>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-red-950/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center p-4 text-center">
                  <Eye className="w-8 h-8 text-amber-300 mb-2" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">
                    Ver Receita Completa
                  </span>
                  <span className="text-[11px] text-amber-200/90 mt-1">
                    Ingredientes + Passo a Passo
                  </span>
                </div>
              </div>

              {/* Bottom Card Info */}
              <div className="p-4 flex flex-col flex-1 justify-between bg-[#111e18]">
                <p className="text-xs text-slate-300 line-clamp-2 mb-3">
                  {recipe.subtitle}
                </p>

                <div className="flex items-center justify-between text-[11px] text-slate-400 border-t border-[#1e3428] pt-2.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>{recipe.prepTime}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{recipe.servings}</span>
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* ... and 243 more recipes banner */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-[#14231d] via-[#1a2d25] to-[#14231d] border border-[#274436] text-center max-w-3xl mx-auto shadow-xl">
          <span className="text-3xl block mb-2">✨ 📖 ✨</span>
          <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2">
            ...e mais 243 receitas completas esperando por você!
          </h3>
          <p className="text-sm text-slate-300 mb-6 max-w-xl mx-auto">
            Bacalhau ao forno, tender glaceado com abacaxi, farofas crocantes de castanhas, saladas tropicais,
            panetones caseiros fofinhos, mousses, rabanadas recheadas e coquetéis natalinos exclusivos.
          </p>
          <button
            onClick={onCtaClick}
            className="py-3 px-8 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-md shadow-red-950/80 transition-all transform active:scale-95 cursor-pointer text-sm sm:text-base"
          >
            🎄 QUERO ACESSO ÀS 250 RECEITAS COMPLETAS
          </button>
        </div>
      </div>

      {/* Interactive Recipe Details Modal */}
      {activeRecipe && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveRecipe(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0f1c16] border border-[#254133] shadow-2xl p-6 sm:p-8 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveRecipe(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#182b22] hover:bg-[#233e31] text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Fechar receita"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header info */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              <ChefHat className="w-4 h-4 text-amber-400" />
              <span>Receita da Enciclopédia · Chef Antônio</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display mb-1">
              {activeRecipe.title}
            </h3>
            <p className="text-sm text-slate-300 mb-4">
              {activeRecipe.subtitle}
            </p>

            <div className="flex flex-wrap gap-4 p-3 rounded-xl bg-[#14261e] border border-[#1f382c] text-xs text-slate-300 mb-6">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Preparo</span>
                <strong className="text-white font-medium">{activeRecipe.prepTime}</strong>
              </div>
              <div className="border-l border-[#243e31] pl-4">
                <span className="text-slate-400 block text-[10px] uppercase">Rendimento</span>
                <strong className="text-white font-medium">{activeRecipe.servings}</strong>
              </div>
              <div className="border-l border-[#243e31] pl-4">
                <span className="text-slate-400 block text-[10px] uppercase">Dificuldade</span>
                <strong className="text-amber-300 font-medium">{activeRecipe.difficulty}</strong>
              </div>
            </div>

            {/* Ingredients */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-amber-200 mb-3 font-display flex items-center gap-2">
                <span>🛒 Ingredientes Necessários</span>
              </h4>
              <ul className="space-y-2 text-sm text-slate-300">
                {activeRecipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Instructions */}
            <div className="mb-6">
              <h4 className="text-base font-bold text-amber-200 mb-3 font-display flex items-center gap-2">
                <span>👩‍🍳 Modo de Preparo Passo a Passo</span>
              </h4>
              <ol className="space-y-3 text-sm text-slate-300">
                {activeRecipe.instructions.map((step, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-amber-400/20 text-amber-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Chef Tip */}
            {activeRecipe.chefTip && (
              <div className="p-4 rounded-xl bg-amber-950/40 border border-amber-600/30 text-xs text-amber-200 mb-6 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-amber-300 block mb-0.5 font-semibold">
                    Segredo de Chef do Antônio:
                  </strong>
                  <span>{activeRecipe.chefTip}</span>
                </div>
              </div>
            )}

            {/* CTA inside modal */}
            <button
              onClick={() => {
                setActiveRecipe(null);
                onCtaClick();
              }}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 shadow-lg shadow-red-950/60 transition-all cursor-pointer text-sm sm:text-base text-center"
            >
              🎄 QUERO TODAS AS 250 RECEITAS POR APENAS R$ 12,00
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
