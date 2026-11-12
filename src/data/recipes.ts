import { RecipeItem } from '../types';

export const FEATURED_RECIPES: RecipeItem[] = [
  {
    id: 'rec-01',
    title: 'Peru Natalino Recheado',
    subtitle: 'Marinado em vinho branco, manteiga de ervas e farofa rica',
    category: 'carnes',
    prepTime: '3h 30min',
    servings: '10 a 12 pessoas',
    difficulty: 'Médio',
    image: '/assets/receita-01.webp',
    description: 'A estrela máxima da ceia natalina! Uma ave suculenta por dentro e com pele dourada e crocante por fora, marinada por 12 horas e recheada com farofa aromática.',
    ingredients: [
      '1 peru inteiro limpo (cerca de 4 a 5 kg)',
      '1 garrafa (750ml) de vinho branco seco',
      '200g de manteiga em ponto de pomada com ervas frescas (alecrim, tomilho e sálvia)',
      '6 dentes de alho amassados',
      '2 cebolas picadas finamente',
      'Suco de 3 laranjas pera frescas',
      '2 folhas de louro',
      '1 colher (sopa) de sal grosso moído',
      'Pimenta-do-reino moída na hora',
      '300g de farofa rica com castanhas e bacon para rechear'
    ],
    instructions: [
      'Na véspera, coloque o peru em uma marinada com o vinho branco, suco de laranja, cebola, alho, louro, sal e pimenta na geladeira.',
      'No dia, retire da marinada e seque bem a pele com papel toalha.',
      'Com cuidado, descole a pele do peito e espalhe a manteiga temperada com ervas diretamente sobre a carne.',
      'Recheie a cavidade com a farofa aromática sem apertar demais e amarre as pernas com barbante culinário.',
      'Cubra com papel-alumínio e asse em forno a 180°C por cerca de 2h30.',
      'Retire o papel-alumínio, pincele o caldo do fundo da assadeira e asse por mais 45 minutos até dourar intensamente.'
    ],
    chefTip: 'Pincele um toque de mel com raspas de laranja nos últimos 15 minutos de forno para uma cor âmbar reluzente digna de revista!'
  },
  {
    id: 'rec-02',
    title: 'Chester Assado com Ervas e Laranja',
    subtitle: 'Carne macia e aromática regada com calda cítrica',
    category: 'carnes',
    prepTime: '2h 15min',
    servings: '8 a 10 pessoas',
    difficulty: 'Fácil',
    image: '/assets/receita-02.webp',
    description: 'Ideal para quem busca uma ave extremamente macia e com rendimento generoso de peito. O equilíbrio do cítrico da laranja com tomilho fresco cria um aroma irresistível.',
    ingredients: [
      '1 Chester inteiro descongelado (cerca de 3,5 kg)',
      '1 xícara de suco de laranja natural',
      '1/2 xícara de azeite de oliva extravirgem',
      '4 colheres (sopa) de manteiga sem sal',
      '1 colher (sopa) de tomilho fresco',
      '1 ramo de alecrim picadinho',
      '1 colher (sobremesa) de páprica doce',
      'Sal e pimenta a gosto',
      'Laranjas cortadas em meias-luas para decorar a travessa'
    ],
    instructions: [
      'Misture o suco de laranja, azeite, alho, páprica, sal e pimenta para fazer a marinada.',
      'Coloque o Chester na assadeira e unte todo ele com a manteiga e as ervas.',
      'Despeje a marinada na assadeira e cubra bem com papel alumínio.',
      'Leve ao forno pré-aquecido a 200°C por 1h40min.',
      'Remova o alumínio, regue a ave a cada 10 minutos com o caldo do fundo até adquirir um tom dourado reluzente.',
      'Deixe descansar por 10 minutos antes de fatiar para reter todos os sucos.'
    ],
    chefTip: 'Deixar a ave repousar antes de fatiar evita que a carne fique ressecada. O repouso redistribui o calor e o caldo!'
  },
  {
    id: 'rec-03',
    title: 'Lombo Suíno ao Molho de Laranja',
    subtitle: 'Assado lentamente com crosta aromática e redução caramelizada',
    category: 'carnes',
    prepTime: '1h 45min',
    servings: '6 a 8 pessoas',
    difficulty: 'Fácil',
    image: '/assets/receita-03.webp',
    description: 'O lombo perfeito que desmancha na boca! Acompanha uma redução agridoce aveludada de laranja com mel e mostarda dijon.',
    ingredients: [
      '1,5 kg de lombo de porco fresco',
      '2 xícaras de suco de laranja coado',
      '2 colheres (sopa) de mel de abelha',
      '1 colher (sopa) de mostarda amarela ou Dijon',
      '4 dentes de alho triturados',
      '1 colher (chá) de raspas de laranja',
      'Azeite, sal e pimenta-do-reino moída',
      '1 colher (chá) de amido de milho para encorpar o molho'
    ],
    instructions: [
      'Faça pequenos furos no lombo e tempere com alho, sal, pimenta e metade do suco de laranja.',
      'Deixe marinar por pelo menos 2 horas na geladeira.',
      'Aqueça uma frigideira grande com azeite e sele o lombo de todos os lados até dourar.',
      'Transfira para a assadeira, adicione a marinada e cubra com papel alumínio. Asse a 190°C por 50 minutos.',
      'Em uma panelinha, junte o suco restante, o mel, a mostarda e o caldo da assadeira, reduzindo até obter consistência aveludada.',
      'Sirva fatiado com a calda generosamente derramada por cima.'
    ],
    chefTip: 'Selar a peça na frigideira antes de ir ao forno cria uma barreira protetora que impede o lombo de secar!'
  },
  {
    id: 'rec-05',
    title: 'Salpicão Natalino Especial',
    subtitle: 'Super cremoso, com frango desfiado, maçã verde e batata palha fininha',
    category: 'acompanhamentos',
    prepTime: '30min',
    servings: '10 pessoas',
    difficulty: 'Fácil',
    image: '/assets/receita-05.webp',
    description: 'Aquele clássico que nunca pode faltar na ceia de família. Molho ultra aveludado que não talha, textura crocante da batata palha e frescor equilibrado.',
    ingredients: [
      '800g de peito de frango cozido e desfiado em fios longos',
      '1 cenoura grande ralada fino',
      '1 maçã verde descascada e cortada em cubinhos (com gotinhas de limão)',
      '1 lata de milho verde escorrido',
      '1/2 xícara de uvas-passas brancas ou pretas (opcional)',
      '1 xícara de maionese de boa qualidade',
      '1/2 lata de creme de leite sem soro (dá leveza única)',
      '1 colher (sopa) de azeite e cheiro-verde picadinho',
      '200g de batata palha extrafina para finalizar'
    ],
    instructions: [
      'Em uma tigela ampla, coloque o frango desfiado já frio.',
      'Adicione a cenoura ralada, o milho, a maçã em cubos e as passas.',
      'Em outro recipiente, misture a maionese, o creme de leite, o azeite, o sal e a pimenta para criar um molho homogêneo.',
      'Envolva todos os ingredientes no molho com movimentos delicados.',
      'Leve à geladeira por pelo menos 2 horas antes da ceia para apurar o sabor.',
      'Cubra com a batata palha somente na hora de servir para manter a crocância máxima.'
    ],
    chefTip: 'O segredo para um salpicão leve e profissional é combinar 2 partes de maionese com 1 parte de creme de leite fresco ou sem soro!'
  },
  {
    id: 'rec-06',
    title: 'Arroz Festivo com Amêndoas e Passas',
    subtitle: 'Soltinho, perfumado com espumante e lâminas douradas na manteiga',
    category: 'acompanhamentos',
    prepTime: '25min',
    servings: '8 pessoas',
    difficulty: 'Fácil',
    image: '/assets/receita-06.webp',
    description: 'Transforme o arroz do dia a dia em uma guarnição digna de banquete real, com o toque sofisticado das amêndoas tostadas e o perfume do espumante.',
    ingredients: [
      '3 xícaras de arroz parboilizado ou agulhinha lavado e escorrido',
      '1 xícara de espumante brut ou vinho branco seco',
      '1 xícara de amêndoas laminadas',
      '1/2 xícara de passas brancas hidratadas no espumante',
      '2 colheres (sopa) de manteiga',
      '1 cebola pequena ralada e 2 dentes de alho',
      '5 xícaras de caldo de legumes caseiro fervente',
      'Sal a gosto e salsa fresca picada'
    ],
    instructions: [
      'Em uma frigideira seca, toste as amêndoas laminadas em fogo baixo até dourarem levemente. Reserve.',
      'Em uma panela média, derreta a manteiga e refogue a cebola e o alho até ficarem transparentes.',
      'Junte o arroz e refogue por 2 minutos para selar os grãos.',
      'Despeje o espumante e deixe evaporar o álcool.',
      'Adicione o caldo fervente e o sal, abaixe o fogo e cozinhe com a panela semitampada até secar.',
      'Desligue, misture as passas e as amêndoas com um garfo e finalize com salsa fresca.'
    ],
    chefTip: 'Hidratar as uvas-passas no próprio espumante por 20 minutos antes do preparo as deixa gordinhas, suculentas e aromáticas!'
  },
  {
    id: 'rec-07',
    title: 'Rabanada Assada com Canela',
    subtitle: 'Crocante por fora, cremosa como pudim por dentro e sem fritura',
    category: 'sobremesas',
    prepTime: '40min',
    servings: '12 porções',
    difficulty: 'Fácil',
    image: '/assets/receita-07.webp',
    description: 'O maior clássico afetivo do Natal brasileiro, mas feito no forno para não deixar cheiro de gordura na casa e com uma cremosidade incomparável.',
    ingredients: [
      '2 baguetes de pão francês amanhecido (ou pão próprio para rabanada) fatiados em 2 cm',
      '1 lata de leite condensado',
      '400ml de leite integral morno',
      '1 colher (chá) de essência de baunilha de boa qualidade',
      'Raspas finas de 1 limão siciliano',
      '3 ovos grandes batidos',
      '1 xícara de açúcar refinado ou demerara misturada com 2 colheres de canela em pó',
      '50g de manteiga derretida para untar a forma'
    ],
    instructions: [
      'Em uma tigela funda, misture o leite, o leite condensado, a baunilha e as raspas de limão.',
      'Em outro prato fundo, bata ligeiramente os ovos.',
      'Mergulhe as fatias de pão no leite doce, deixando absorver sem desmanchar.',
      'Passe as fatias nos ovos batidos e disponha-as em uma assadeira untada com manteiga.',
      'Asse em forno pré-aquecido a 200°C por 15 minutos, vire as fatias e asse por mais 10 minutos até dourarem.',
      'Ainda quentes, passe as rabanadas na mistura de açúcar com canela e sirva.'
    ],
    chefTip: 'Usar pão do dia anterior é fundamental: a casca firme aguarda a calda sem que a fatia se quebre no processo!'
  },
  {
    id: 'rec-08',
    title: 'Pavê de Chocolate e Morango',
    subtitle: 'Camadas de creme sedoso de baunilha, ganache meio amarga e frutas frescas',
    category: 'sobremesas',
    prepTime: '45min (+ 4h geladeira)',
    servings: '12 porções generosas',
    difficulty: 'Fácil',
    image: '/assets/receita-08.webp',
    description: 'A sobremesa mais aguardada de todas as famílias! Camadas perfeitas, creme acetinado que não empelota e morangos frescos que equilibram a doçura.',
    ingredients: [
      '2 pacotes de biscoito champanhe ou maisena',
      '1 lata de leite condensado',
      '2 latas de leite (use a lata do leite condensado como medida)',
      '2 gemas peneiradas',
      '2 colheres (sopa) de amido de milho',
      '1 caixinha de creme de leite',
      '2 caixas de morangos frescos limpos e fatiados',
      '200g de chocolate meio amargo nobre picado',
      '1 caixinha de creme de leite para a ganache de cobertura',
      '1 xícara de leite com baunilha para umedecer os biscoitos'
    ],
    instructions: [
      'Em uma panela, misture o leite condensado, o leite, as gemas e o amido de milho dissolvido.',
      'Cozinhe em fogo médio mexendo sem parar até formar um creme espesso e brilhante. Desligue e misture o creme de leite.',
      'Para a ganache, derreta o chocolate no micro-ondas e incorpore a caixinha de creme de leite até ficar liso.',
      'Na travessa de vidro, faça uma camada de creme branco, uma camada de biscoitos umedecidos e morangos fatiados.',
      'Repita as camadas terminando com a ganache de chocolate por cima.',
      'Decore com morangos inteiros e raspas de chocolate. Refrigere por no mínimo 4 horas antes de servir.'
    ],
    chefTip: 'Peneirar as gemas antes de levar ao fogo remove a película e elimina qualquer odor residual de ovo no creme!'
  }
];
