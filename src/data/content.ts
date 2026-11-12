import { BonusItem, FaqItem, SocialComment, WhatsAppProof } from '../types';


export const ADVANTAGES = [
  {
    icon: '🎄',
    title: '250 Receitas Exclusivas de Natal',
    description: 'Do clássico peru e tender às sobremesas mais desejadas, drinks festivos e opções vegetarianas.'
  },
  {
    icon: '🍗',
    title: 'Cardápios Completos & Prontos',
    description: 'Entradas, pratos principais, acompanhamentos suculentos, sobremesas e coquetéis harmonizados.'
  },
  {
    icon: '✨',
    title: 'Ceias Tradicionais e Modernas',
    description: 'Receitas com aquele toque nostálgico de família e apresentações contemporâneas de chef.'
  },
  {
    icon: '⏰',
    title: 'Economia Real de Tempo na Cozinha',
    description: 'Instruções diretas e práticas para você passar menos tempo na cozinha e mais tempo com quem ama.'
  },
  {
    icon: '👩‍🍳',
    title: 'Perfeito para Iniciantes e Amantes da Cozinha',
    description: 'Passo a passo descomplicado com medidas caseiras exatas. Qualquer pessoa consegue preparar!'
  },
  {
    icon: '💚',
    title: 'Ingredientes Acessíveis em Qualquer Mercado',
    description: 'Sem ingredientes caros ou difíceis de encontrar. Sabor extraordinário com itens do dia a dia.'
  }
];

export const INDISPENSABLE_REASONS = [
  {
    icon: '✨',
    title: 'Sabores Inesquecíveis em Cada Página',
    description: 'Clássicos natalinos reinventados e novas ideias para surpreender toda a família e fazer sua ceia ser comentada o ano inteiro.'
  },
  {
    icon: '🍴',
    title: 'Variedade Infinita para Todos os Gostos',
    description: 'Receitas com carnes nobres, aves tenras, peixes e bacalhau, sobremesas geladas, além de versões leves e sem glúten/lactose.'
  },
  {
    icon: '💫',
    title: 'Feito com Amor, Técnica e Tradição',
    description: 'Cada receita foi testada e aprovada pelo Chef Antônio para unir a família com aquele aroma acolhedor de Natal.'
  }
];

export const BONUSES: BonusItem[] = [
  {
    id: 'bonus-1',
    number: 'BÔNUS 1',
    title: 'Guia da Ceia Fitness de Natal',
    description: 'Receitas leves, saudáveis e deliciosas para preparar uma ceia natalina completa, equilibrada e cheia de sabor, sem abrir mão da tradição.',
    originalPrice: '29,90',
    tag: 'GRÁTIS HOJE',
    iconName: 'Salad',
    highlights: [
      'Versões leves de carnes com marinadas termogênicas',
      'Sobremesas zero açúcar refinado sem perder a cremosidade',
      'Tabelas de calorias e substituições inteligentes'
    ]
  },
  {
    id: 'bonus-2',
    number: 'BÔNUS 2',
    title: 'Decoração e Mesa Posta de Natal',
    description: 'Ideias simples de cores, arranjos com velas, dobras de guardanapos e montagem de mesa para encantar seus convidados gastando quase nada.',
    originalPrice: '24,90',
    tag: 'GRÁTIS HOJE',
    iconName: 'Sparkles',
    highlights: [
      'Montagem de centro de mesa com folhas e pinhas naturais',
      'Guia de combinação de louças e taças natalinas',
      'Playlist especial de Natal selecionada para a ceia'
    ]
  },
  {
    id: 'bonus-3',
    number: 'BÔNUS 3',
    title: 'Mini Livro da Ceia Econômica',
    description: '10 cardápios natalinos completos, testados e deliciosos para fazer bonito para 8 a 10 pessoas por menos de R$ 150.',
    originalPrice: '19,90',
    tag: 'GRÁTIS HOJE',
    iconName: 'Coins',
    highlights: [
      'Lista de compras com substituições que barateiam sem perder sabor',
      'Aproveitamento integral de alimentos e sobras criativas',
      'Planejamento de compras para evitar alta dos preços de dezembro'
    ]
  }
];

export const WHATSAPP_PROOFS: WhatsAppProof[] = [
  {
    client: 'Patrícia Rocha',
    recipe: 'Rabanadas Douradas no Forno',
    image: '/assets/depoimento-patricia-C9LjZa8P.webp',
    alt: 'Conversa no WhatsApp de Patrícia Rocha elogiando as Rabanadas'
  },
  {
    client: 'Marta Oliveira',
    recipe: 'Tender Caramelizado com Abacaxi',
    image: '/assets/depoimento-marta-6KIPOH96.webp',
    alt: 'Conversa no WhatsApp de Marta Oliveira sobre o Tender'
  },
  {
    client: 'Sônia Almeida',
    recipe: 'Pavê de Chocolate e Morango',
    image: '/assets/depoimento-sonia-CKFPrSGf.webp',
    alt: 'Conversa no WhatsApp de Sônia Almeida aprovando o Pavê'
  },
  {
    client: 'Cláudia Ferreira',
    recipe: 'Bacalhau Gratinado à Moda do Chef',
    image: '/assets/depoimento-claudia-250.webp',
    alt: 'Conversa no WhatsApp de Cláudia Ferreira elogiando o Bacalhau'
  }
];

export const SOCIAL_COMMENTS: SocialComment[] = [
  {
    id: 'c1',
    name: 'Maria Silva',
    time: 'Há 2 horas',
    likes: 47,
    text: 'As 250 Receitas de Natal são simplesmente INCRÍVEIS! Usei várias receitas no último Natal e todo mundo da família elogiou. O Chester com laranja foi o mais disputado da mesa! 🎄❤️',
    city: 'Belo Horizonte, MG'
  },
  {
    id: 'c2',
    name: 'Ana Paula Souza',
    time: 'Há 3 horas',
    likes: 38,
    text: 'Comprei a edição Premium e os bônus salvaram meu planejamento! O guia da Ceia Econômica vale cada centavo, montamos uma ceia luxuosa para 12 pessoas gastando bem menos do que no ano passado. ✨',
    city: 'São Paulo, SP'
  },
  {
    id: 'c3',
    name: 'Fernanda Costa',
    time: 'Há 5 horas',
    likes: 54,
    text: 'As receitas são super fáceis de seguir! Fiz o Panettone Caseiro e a Rabanada Especial para testar antes do Natal e ficaram perfeitos! Meu marido já pediu para fazer de novo esse fim de semana.',
    city: 'Curitiba, PR'
  },
  {
    id: 'c4',
    name: 'Juliana Mendes',
    time: 'Há 6 horas',
    likes: 29,
    text: 'Recebi no meu WhatsApp no mesmo minuto após pagar no PIX! O material é super caprichado, lindo para ler no celular ou no tablet. Já imprimi as minhas favoritas para deixar na cozinha. Recomendo demais!',
    city: 'Rio de Janeiro, RJ'
  },
  {
    id: 'c5',
    name: 'Carlos Alberto Fonseca',
    time: 'Há 8 horas',
    likes: 41,
    text: 'Eu nunca tive muita prática na cozinha e sempre ficava nervoso com a ceia. As orientações de marinada do Chef Antônio não deixam errar o ponto. O lombo ficou suculento como nunca!',
    city: 'Campinas, SP'
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'São realmente 250 receitas diferentes de Natal?',
    answer: 'Sim! São 250 receitas únicas, testadas e selecionadas pelo Chef Antônio, divididas em carnes nobres, aves, guarnições, arrozes festivos, saladas refrescantes, sobremesas clássicas, drinks natalinos e versões fitness.'
  },
  {
    question: 'Como e quando vou receber o livro digital?',
    answer: 'O envio é imediato e 100% automático! Assim que seu pagamento for confirmado (no PIX ou Cartão é na hora), você receberá o link de acesso direto no seu WhatsApp e também no seu e-mail cadastrado.'
  },
  {
    question: 'Não tenho muita experiência na cozinha. Vou conseguir fazer?',
    answer: 'Com certeza! O material foi desenvolvido especialmente com uma linguagem simples, clara e passo a passo. Todas as quantidades usam medidas caseiras (xícaras, colheres e gramas) para que até quem nunca assou uma ave consiga um resultado de restaurante.'
  },
  {
    question: 'Posso acessar do meu celular, tablet e computador?',
    answer: 'Sim! O livro e os bônus estão em formato digital compatível com qualquer smartphone Android, iPhone, tablet, iPad, notebook ou computador. Além disso, a versão Premium vem com arquivo pronto em alta definição para quem preferir imprimir.'
  },
  {
    question: 'E se eu não gostar? Como funciona a garantia?',
    answer: 'Você tem 7 dias de garantia incondicional de satisfação! Se por qualquer motivo você abrir o material e achar que ele não agregou valor à sua ceia, basta nos enviar uma única mensagem no WhatsApp e devolveremos 100% do seu dinheiro, sem burocracias.'
  },
  {
    question: 'O pagamento é seguro e único?',
    answer: 'Sim, o acesso é direto e 100% seguro com criptografia. Trata-se de um valor único, sem mensalidades ou cobranças futuras, com acesso vitalício ao material.'
  }
];
