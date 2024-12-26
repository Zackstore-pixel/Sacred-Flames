import { Product } from '../../types';

export const relaxationProducts: Product[] = [
  {
    id: 'lavender-dreams',
    name: 'Lavender Dreams',
    price: 29.99,
    category: 'relaxation',
    description: 'Immerse yourself in the calming embrace of pure lavender essential oils.',
    features: ['100% Natural Soy Wax', 'Lead-free Cotton Wick', 'Essential Oil Based'],
    burnTime: '45-50 hours',
    scentNotes: ['French Lavender', 'Vanilla', 'Bergamot'],
    ingredients: ['Soy Wax', 'Lavender Essential Oil', 'Cotton Wick'],
    size: '8.5oz',
    weight: '240g',
    images: {
      unlit: 'https://images.unsplash.com/photo-1602874801007-bd458bb1b8b6',
      lit: 'https://images.unsplash.com/photo-1603006905003-be475563bc59'
    },
    rating: 4.8,
    reviews: [],
    isBestseller: true,
    material: 'Soy',
    scentFamily: 'Floral',
    type: 'Container',
    isHandmade: true
  }
];