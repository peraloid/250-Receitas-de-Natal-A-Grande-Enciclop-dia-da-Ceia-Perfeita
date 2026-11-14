/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initUtmTracking, buildCheckoutUrl } from './utils/utm';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Gift,
  Lightbulb,
  LockKeyhole,
  ShieldCheck,
  X,
  Zap,
} from 'lucide-react';

// Snowflakes data matching the original 18 slots
const snowflakes = Array.from({ length: 18 }, (_, t) => ({
  id: t,
  drift: t % 2 === 0 ? 'snow-fall-left' : 'snow-fall-right',
  slot: `snow-slot-${(t % 12) + 1}`,
  speed: `snow-speed-${(t % 6) + 1}`,
  sizeClass: t % 3 === 0 ? 'flake-lg' : t % 3 === 1 ? 'flake-md' : 'flake-sm',
}));

// Customer WhatsApp Prints
const printsData: [string, string, string][] = [
  ['Patrícia Rocha', 'Rabanadas', '/assets/depoimento-patricia-C9LjZa8P.webp'],
  ['Marta Oliveira', 'Tender', '/assets/depoimento-marta-6KIPOH96.webp'],
  ['Sônia Almeida', 'Pavê de Chocolate', '/assets/depoimento-sonia-CKFPrSGf.webp'],
  ['Cláudia Ferreira', 'Bacalhau Gratinado', '/assets/depoimento-claudia-250.webp'],
];

// Carousel Recipes
const recipesData: [string, string][] = [
  ['Receita 01 – Peru Natalino Recheado', '/assets/receita-01.webp'],
  ['Receita 02 – Chester Assado com Ervas e Laranja', '/assets/receita-02.webp'],
  ['Receita 03 – Lombo Suíno ao Molho de Laranja', '/assets/receita-03.webp'],
  ['Receita 05 – Salpicão Natalino Especial', '/assets/receita-05.webp'],
  ['Receita 06 – Arroz Festivo com Amêndoas e Passas', '/assets/receita-06.webp'],
  ['Receita 07 – Rabanada Assada com Canela', '/assets/receita-07.webp'],
  ['Receita 08 – Pavê de Chocolate e Morango', '/assets/receita-08.webp'],
];

// 3 Exclusive Free Bonuses
const bonusesData: [string, string, string, string, string][] = [
  [
    'BÔNUS 1',
    '🥗 Guia da Ceia Fitness de Natal',
    'Receitas leves, saudáveis e deliciosas para preparar uma ceia natalina completa, equilibrada e cheia de sabor, sem abrir mão da tradição.',
    '29,90',
    '/assets/asset-_e.webp',
  ],
  [
    'BÔNUS 2',
    '🎀 Decoração e Mesa de Natal',
    'Ideias simples de cores, arranjos e montagem de mesa para encantar seus convidados.',
    '24,90',
    '/assets/asset-ve.webp',
  ],
  [
    'BÔNUS 3',
    '🍗 Mini Livro da Ceia Econômica',
    '10 cardápios natalinos completos, testados e deliciosos por menos de R$ 150.',
    '19,90',
    '/assets/asset-ye.webp',
  ],
];

// Social Testimonials
const commentsData = [
  {
    name: 'Maria Silva',
    time: '2h',
    likes: '23',
    text: 'As 250 Receitas de Natal são INCRÍVEIS! Usei várias na minha ceia e todo mundo adorou. Minha família está impressionada com tanta variedade! 🎄',
    avatar: '/assets/asset-Se.webp',
  },
  {
    name: 'Ana Paula Souza',
    time: '3h',
    likes: '19',
    text: 'Comprei a edição Premium e os bônus salvaram meu planejamento! O guia da Ceia Econômica vale cada centavo, fizemos uma mesa linda gastando pouco. ✨',
    avatar: '/assets/asset-pe.webp',
  },
  {
    name: 'Fernanda Costa',
    time: '5h',
    likes: '31',
    text: 'As receitas são super fáceis de seguir! Fiz o Panettone Caseiro e a Rabanada Especial para testar antes do Natal e ficaram perfeitos!',
    avatar: '/assets/asset-me.webp',
  },
  {
    name: 'Juliana Mendes',
    time: '6h',
    likes: '27',
    text: 'Recebi no meu WhatsApp na mesma hora! Material muito bem organizado, com ingredientes simples que a gente já tem em casa. Recomendo demais!',
    avatar: '/assets/asset-he.webp',
  },
];

// FAQ items
const faqData: [string, string][] = [
  [
    '💡 São realmente 250 receitas diferentes de Natal?',
    'Sim! São 250 receitas únicas e diferentes, especialmente selecionadas para o período natalino. Você nunca mais ficará sem ideias para sua ceia!',
  ],
  [
    '📩 Como vou receber as 250 receitas?',
    'Você recebe o acesso pelo WhatsApp após a confirmação do pagamento e pode baixar todo o conteúdo imediatamente.',
  ],
  [
    '👩‍🍳 Não sou muito boa cozinhando... isso é para mim?',
    'Absolutamente! Todas as 250 receitas são simples, passo a passo, e perfeitas para iniciantes e especialistas.',
  ],
  [
    '📱 Posso acessar do meu celular?',
    'Sim! Você pode ver e usar as 250 receitas em qualquer smartphone, tablet ou computador.',
  ],
  [
    '💸 E se eu não gostar? Tem reembolso?',
    'Sim! Você está protegido pela nossa garantia de devolução do dinheiro de 7 dias. Sem perguntas.',
  ],
];

// Top Countdown/Timer component starting from 8:00
function TopTimer() {
  const [secondsLeft, setSecondsLeft] = useState<number>(480);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${minutes}:${String(seconds).padStart(2, '0')}`;

  return (
    <div className="timer">
      <strong className="timer-pulse-gold">
        {formattedTime}
      </strong>
      <strong className="timer-pulse-neon-green">
        50 receitas de Natal com promoção imperdível
      </strong>
    </div>
  );
}

// CTA Button component with smooth scroll to #ofertas
function CtaButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="button"
      className="cta"
      onClick={() =>
        document.querySelector('#ofertas')?.scrollIntoView({ behavior: 'smooth' })
      }
    >
      {children}
    </button>
  );
}

// Pricing Card component
interface PriceCardProps {
  premium?: boolean;
  onBuyClick: () => void;
}

function PriceCard({ premium = false, onBuyClick }: PriceCardProps) {
  const features = premium
    ? [
        '250 Receitas de Natal Completas',
        'Entradas, Pratos Principais, Sobremesas e Bebidas',
        'Ingredientes Fáceis de Encontrar',
        'Passo a Passo Detalhado',
        'Acesso Vitalício',
        'Acesso imediato pelo WhatsApp após a confirmação do pagamento',
        'Garantia de 7 dias',
      ]
    : [
        '250 Receitas de Natal - Acesso Vitalício',
        'Acesso imediato pelo WhatsApp após a confirmação do pagamento',
        'Receitas Completas e Testadas',
        'Somente o livro principal com as 250 receitas',
        'Garantia de 7 dias',
      ];

  const premiumBonuses = [
    'Guia da Ceia Fitness de Natal – Receitas Leves e Saudáveis',
    'Guia de Decoração e Montagem da Mesa de Natal',
    "Mini Livro da 'Ceia Econômica' – 10 Menus Prontos por Menos de R$150",
    'Versão Imprimível',
  ];

  return (
    <article className={`price-card ${premium ? 'premium' : ''}`}>
      {premium && <span className="popular">★ MAIS POPULAR</span>}
      <span className="offer-label">
        {premium ? '🌟 EDIÇÃO PREMIUM' : '🎁 OFERTA BÁSICA'}
      </span>
      <h3 onClick={onBuyClick} className="cursor-pointer">
        {premium ? (
          <>
            250 Receitas de Natal Edição <b>PREMIUM</b>
          </>
        ) : (
          '250 Receitas de Natal'
        )}
      </h3>
      <ul>
        {features.map((item) => (
          <li key={item}>
            ✓ <span>{item}</span>
          </li>
        ))}
      </ul>
      {premium && (
        <div className="bonus-box">
          <b className="bonus-title">🎁 BÔNUS EXCLUSIVOS GRÁTIS</b>
          {premiumBonuses.map((b) => (
            <div key={b} className="bonus-item">
              <Gift />
              <span>{b}</span>
            </div>
          ))}
          <p className="bonus-note">
            A opção Premium inclui o livro completo, todos os bônus exclusivos e a
            versão imprimível.
          </p>
        </div>
      )}
      <div className="price">
        <span>R$ {premium ? '60,00' : '36,00'}</span>
        <small>-55%</small>
        <strong>R$ {premium ? '17' : '12'}</strong>
        <em>Pagamento Único</em>
      </div>
      <button type="button" onClick={onBuyClick} className="buy w-full">
        ADQUIRIR RECEITAS AGORA
      </button>
      <div className="trust">
        <span>
          <LockKeyhole /> Compra Segura
        </span>
        <span>
          <ShieldCheck /> Garantia de 7 Dias
        </span>
      </div>
    </article>
  );
}

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [commentIdx, setCommentIdx] = useState<number>(0);
  const [promoModalPrice, setPromoModalPrice] = useState<string | null>(null);

  useEffect(() => {
    initUtmTracking();
  }, []);

  const currentComment = commentsData[commentIdx];

  // Repeat prints 4 times for infinite marquee track
  const allPrints = [...printsData, ...printsData, ...printsData, ...printsData];

  // Repeat recipes twice for marquee track
  const allRecipes = [...recipesData, ...recipesData];

  return (
    <main>
      {/* 1. Top Timer Banner */}
      <TopTimer />

      {/* 2. Hero Section */}
      <section className="hero">
        <div className="hero-snow" aria-hidden="true">
          {snowflakes.map((flake) => (
            <span
              key={flake.id}
              className={`snowflake ${flake.drift} ${flake.slot} ${flake.speed} ${flake.sizeClass}`}
            >
              🎄
            </span>
          ))}
        </div>
        <div className="container hero-inner">
          <h1>
            <span className="grad-text">
              250 Receitas de Natal – A Grande Enciclopédia
              <br className="desktop-break" /> da Ceia Perfeita
            </span>
          </h1>
          <p style={{ color: '#111111', fontWeight: 800, textTransform: 'uppercase' }}>
            RECEITAS DELICIOSAS, PRÁTICAS E TRADICIONAIS, INCLUINDO DRINKS E BEBIDAS,
            PARA ENCANTAR TODA A FAMÍLIA
            <br className="desktop-break" /> NESTE NATAL <b>🎄✨</b>
          </p>
          <div className="book-wrap">
            <img
              src="/assets/aistudio/Chef_e_Livro_de_Receitas_de_Natal_a86f1725.png"
              alt="Mockup 3D do E-book 250 Receitas de Natal"
              width={900}
              height={600}
              fetchPriority="high"
              decoding="sync"
            />
          </div>
          <div className="hero-price">
            <span>⭐ Oferta Especial de Natal</span>
            <p>
              <s>De R$ 36,00</s> → Agora por apenas
            </p>
            <strong>R$ 12</strong>
          </div>
          <CtaButton>🧑‍🍳 QUERO MINHAS RECEITAS DE NATAL</CtaButton>
          <b className="instant">
            ⚡ Acesso imediato pelo WhatsApp após a confirmação do pagamento
          </b>
        </div>
      </section>

      {/* 3. Advantages Section */}
      <section className="advantages">
        <div className="narrow">
          <h2>
            <span className="gold-star">🌟</span>{' '}
            <span className="grad-text">Vantagens do Produto</span>
          </h2>
          {[
            ['🎄', '250 Receitas Exclusivas de Natal'],
            ['🍗', 'Cardápios completos: entradas, pratos principais, sobremesas e bebidas'],
            ['✨', 'Inspiração das ceias tradicionais e modernas'],
            ['⏰', 'Economia de tempo com instruções simples e diretas'],
            ['👩‍🍳', 'Ideal para iniciantes e amantes da cozinha'],
            ['💚', 'Ingredientes fáceis de encontrar em qualquer mercado'],
          ].map(([icon, text]) => (
            <div key={text} className="advantage">
              <i>✓</i>
              <span>{icon}</span>
              <b>{text}</b>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Why Section */}
      <section className="why">
        <div className="container">
          <h2>🎁 Por Que Este Livro É Indispensável</h2>
          <div className="why-list">
            {[
              [
                'apple',
                '✨ Sabores de Natal em Cada Página',
                'Clássicos natalinos e novas ideias para surpreender toda a família e fazer sua ceia brilhar.',
              ],
              [
                'zap',
                '🍴 Variedade Infinita',
                'Receitas com carnes, aves, sobremesas, versões leves e vegetarianas. Opções para todos os gostos e necessidades.',
              ],
              [
                'light',
                '💫 Feito com Amor e Tradição',
                'Cada receita foi criada para unir a família e deixar a ceia inesquecível, com aquele toque especial de Natal.',
              ],
            ].map(([type, title, desc]) => (
              <article key={title}>
                <div className="round-icon">
                  {type === 'zap' ? <Zap /> : type === 'light' ? <Lightbulb /> : '♡'}
                </div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </article>
            ))}
          </div>
          <CtaButton>🎄 SIM, QUERO MINHAS RECEITAS DE NATAL</CtaButton>
        </div>
      </section>

      {/* 5. Customer Testimonials (WhatsApp Prints Marquee) */}
      <section className="testimonials">
        <div className="wide">
          <h2>Veja os Prints das Conversas das Nossas Clientes:</h2>
          <div className="prints-carousel">
            <div className="prints-track">
              {allPrints.map(([client, recipe, img], idx) => (
                <figure
                  key={`${client}-${idx}`}
                  className="print"
                  aria-hidden={idx >= printsData.length ? 'true' : undefined}
                >
                  <img
                    src={img}
                    alt={`Conversa no WhatsApp da cliente: ${client} · ${recipe}`}
                    width={420}
                    height={747}
                    fetchPriority="low"
                    decoding="async"
                  />
                  <figcaption>
                    <strong className="print-client">🎄 {client}</strong>
                    <span className="print-sep" aria-hidden="true">
                      ·
                    </span>
                    <span className="print-recipe">{recipe}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
          <CtaButton>🎄 SIM, QUERO MINHAS 250 RECEITAS</CtaButton>
        </div>
      </section>

      {/* 6. Recipes Carousel Section */}
      <section className="recipes">
        <div className="wide">
          <h2>VEJA ALGUMA DAS 250 RECEITAS DE NATAL QUE VOCE VAI RECEBER</h2>
          <p>
            250 Receitas Especiais para Transformar Seu Natal em uma Celebração
            Inesquecível!
          </p>
          <div className="recipe-carousel">
            <div className="recipe-track">
              {allRecipes.map(([title, img], idx) => (
                <article
                  key={`${title}-${idx}`}
                  aria-hidden={idx >= recipesData.length ? 'true' : undefined}
                >
                  <img
                    src={img}
                    alt={title}
                    width={520}
                    height={735}
                    fetchPriority="low"
                    decoding="async"
                  />
                </article>
              ))}
            </div>
          </div>
          <div className="more">
            <h3>...e muito mais!</h3>
            <p>Receitas deliciosas, tradicionais e especiais para o Natal.</p>
            <CtaButton>🎄 QUERO AS RECEITAS</CtaButton>
          </div>
        </div>
      </section>

      {/* 7. Free Bonuses Section */}
      <section className="bonuses">
        <div className="container">
          <h2>
            🎁{' '}
            <span className="grad-text">
              Compre Hoje e Receba 3 Bônus Exclusivos Grátis
            </span>
          </h2>
          <p className="bonuses-subtitle">
            Presentes especiais de Natal para deixar sua ceia organizada, linda e
            econômica — inclusos gratuitamente no seu pedido hoje.
          </p>
          <div className="bonus-grid">
            {bonusesData.map(([badge, title, desc, price, img]) => (
              <article key={title}>
                <span className="bonus-badge">
                  <Gift className="bonus-badge-icon" /> {badge}
                </span>
                <div className="bonus-img-wrap">
                  <img
                    src={img}
                    alt={title}
                    width={240}
                    height={302}
                    decoding="sync"
                  />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <div className="bonus-price-row">
                  <span className="bonus-old-price">
                    De <s>R$ {price}</s>
                  </span>
                  <b className="bonus-free-tag">GRÁTIS</b>
                </div>
              </article>
            ))}
          </div>
          <div className="bonuses-summary">
            <p className="bonuses-total">
              🎄 Valor total dos 3 bônus: <s>R$ 74,70</s> →{' '}
              <strong>SAI POR R$ 0,00 HOJE!</strong>
            </p>
            <CtaButton>🎁 SIM, QUERO MINHAS 250 RECEITAS + BÔNUS</CtaButton>
          </div>
        </div>
      </section>

      {/* 8. Pricing Offers Section */}
      <section className="offers" id="ofertas">
        <div className="wide">
          <h2>
            🎄{' '}
            <span className="grad-text">
              Escolha Sua Oferta Especial de Natal
            </span>
          </h2>
          <div className="price-grid">
            <PriceCard onBuyClick={() => setPromoModalPrice('13,82')} />
            <PriceCard premium={true} onBuyClick={() => setPromoModalPrice('14,82')} />
          </div>
        </div>
      </section>

      {/* 9. Comments / Reviews Slider Section */}
      <section className="comments-section">
        <div className="container">
          <h2>
            O Que Dizem Nossos Clientes Sobre
            <br /> 250 Receitas de Natal:
          </h2>
          <article className="comment">
            <div className="comment-head">
              {commentsData.map((c, idx) => (
                <img
                  key={c.name}
                  src={c.avatar}
                  alt={c.name}
                  width={40}
                  height={40}
                  decoding="sync"
                  className={idx === commentIdx ? '' : 'is-hidden'}
                />
              ))}
              <div>
                <b>{currentComment.name}</b>
                <small>{currentComment.time}</small>
              </div>
              <span>•••</span>
            </div>
            <p>{currentComment.text}</p>
            <div className="comment-foot">
              <span>♥️ &nbsp;{currentComment.likes}</span>
              <span>Curtir　 Comentar　 Compartilhar</span>
            </div>
            <button
              type="button"
              className="arrow left"
              aria-label="Depoimento anterior"
              onClick={() =>
                setCommentIdx(
                  (prev) => (prev - 1 + commentsData.length) % commentsData.length
                )
              }
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              className="arrow right"
              aria-label="Próximo depoimento"
              onClick={() =>
                setCommentIdx((prev) => (prev + 1) % commentsData.length)
              }
            >
              <ChevronRight />
            </button>
          </article>
          <div className="dots">
            {commentsData.map((c, idx) => (
              <i
                key={c.name}
                className={idx === commentIdx ? 'active' : ''}
                onClick={() => setCommentIdx(idx)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ Accordion Section */}
      <section className="faq">
        <div className="narrow">
          <h2>PERGUNTAS FREQUENTES (FAQ)</h2>
          {faqData.map(([q, a], idx) => (
            <article key={q}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                aria-expanded={openFaq === idx}
              >
                <b>{q}</b>
                <ChevronDown className={openFaq === idx ? 'open' : ''} />
              </button>
              {openFaq === idx && <p>{a}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* 11. Footer */}
      <footer>
        <strong>
          🎄<br />
          250 Receitas de Natal
        </strong>
        <p>© 2026 – 250 Receitas de Natal | Todos os Direitos Reservados</p>
      </footer>

      {/* 12. Exclusive Promo Discount Modal */}
      {promoModalPrice && (
        <div
          className="promo-modal-backdrop"
          onClick={() => setPromoModalPrice(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="promo-modal-title"
        >
          <div className="promo-modal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="promo-close"
              onClick={() => setPromoModalPrice(null)}
              aria-label="Fechar promoção"
            >
              <X />
            </button>

            <span className="promo-badge">🎁 ESPERE! PROMOÇÃO EXCLUSIVA</span>
            <h3 id="promo-modal-title">
              250 Receitas de Natal Edição <b>PREMIUM</b> por apenas R${' '}
              {promoModalPrice}
            </h3>
            <p className="promo-desc">
              Aproveite esta promoção especial para levar as{' '}
              <strong>
                250 Receitas de Natal Edição PREMIUM + Todos os 3 Bônus Exclusivos
              </strong>{' '}
              por apenas <strong>R$ {promoModalPrice}</strong>!
            </p>
            <div className="promo-perks">
              <div>✓ 250 Receitas de Natal Completas + Versão Imprimível</div>
              <div>🎁 Bônus 1: 🥗 Guia da Ceia Fitness de Natal</div>
              <div>🎁 Bônus 2: 🎀 Decoração e Mesa de Natal</div>
              <div>🎁 Bônus 3: 🍗 Mini Livro da Ceia Econômica</div>
            </div>
            <div className="promo-price-box">
              <span className="promo-old">
                De <s>R$ 17,00</s> por apenas:
              </span>
              <strong className="promo-new">R$ {promoModalPrice}</strong>
              <em className="promo-note">
                Pagamento Único · Acesso Imediato no WhatsApp
              </em>
            </div>
            <a
              href={buildCheckoutUrl(
                promoModalPrice === '13,82'
                  ? 'https://pay.cakto.com.br/3f8znez_1312928'
                  : 'https://pay.cakto.com.br/3zrmcwb_1312994'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="buy promo-cta"
              style={{
                display: 'block',
                textDecoration: 'none',
                width: '100%',
                textAlign: 'center',
              }}
            >
              🎄 QUERO A EDIÇÃO PREMIUM POR R$ {promoModalPrice}
            </a>
            {promoModalPrice === '13,82' && (
              <a
                href={buildCheckoutUrl('https://pay.cakto.com.br/atp4hfm_1313342')}
                target="_blank"
                rel="noopener noreferrer"
                className="promo-skip"
              >
                Não, obrigado. Quero continuar apenas com a oferta básica sem bônus
                por R$ 12,00
              </a>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
