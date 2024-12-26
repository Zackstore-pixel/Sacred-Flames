export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'relaxation' | 'romance' | 'massage' | 'aromatherapy';
  description: string;
  features: string[];
  burnTime: string;
  scentNotes: string[];
  ingredients: string[];
  size: string;
  weight: string;
  images: {
    unlit: string;
    lit: string;
  };
  rating: number;
  reviews: Review[];
  isBestseller?: boolean;
  isNewArrival?: boolean;
  stockCount?: number;
  minOrder?: number;
  material: 'Soy' | 'Beeswax' | 'Coconut';
  scentFamily: 'Floral' | 'Woody' | 'Fresh' | 'Citrus' | 'Spicy';
  type: 'Container' | 'Pillar' | 'Tealight';
  isEcoFriendly?: boolean;
  isVegan?: boolean;
  isHandmade?: boolean;
}