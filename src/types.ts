export interface RecipeItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'carnes' | 'acompanhamentos' | 'sobremesas' | 'fitness' | 'bebidas';
  prepTime: string;
  servings: string;
  difficulty: 'Fácil' | 'Médio' | 'Avançado';
  image: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  chefTip?: string;
}

export interface BonusItem {
  id: string;
  number: string;
  title: string;
  description: string;
  originalPrice: string;
  tag: string;
  iconName: string;
  highlights: string[];
}

export interface WhatsAppProof {
  client: string;
  recipe: string;
  image: string;
  alt: string;
}

export interface SocialComment {
  id: string;
  name: string;
  time: string;
  likes: number;
  text: string;
  city?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
