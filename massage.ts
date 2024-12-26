import { Product } from '../../types';

export const massageProducts: Product[] = [
  {
    id: 'vanilla-coconut',
    name: 'Vanilla Coconut Massage',
    price: 45.99,
    category: 'massage',
    description: 'A luxurious massage candle that melts into warm, nourishing oil.',
    features: ['Low Melting Point', 'Skin-Safe Formula', 'Moisturizing Oils'],
    burnTime: '30-35 hours',
    scentNotes: ['Vanilla Bean', 'Coconut', 'Almond'],
    ingredients: ['Coconut Oil', 'Shea Butter', 'Natural Fragrance'],
    size: '6oz',
    weight: '170g',
    images: {
      unlit: 'https://images.unsplash.com/photo-1572726729207-a78d6feb18d7',
      lit: 'https://images.unsplash.com/photo-1584589167171-541ce45f1eea'
    },
    rating: 4.9,
    reviews: [],
    material: 'Coconut',
    scentFamily: 'Fresh',
    type: 'Container',
    isVegan: true,
    isBestseller: true
  },
  {
    id: 'jasmine-dreams',
    name: 'Jasmine Dreams',
    price: 42.99,
    category: 'massage',
    description: 'Exotic jasmine blend creates a romantic and relaxing atmosphere.',
    features: ['Skin-Nourishing', 'Exotic Florals', 'Premium Oils'],
    burnTime: '35-40 hours',
    scentNotes: ['Jasmine', 'Ylang Ylang', 'Vanilla'],
    ingredients: ['Soy Wax', 'Essential Oils', 'Cotton Wick'],
    size: '7oz',
    weight: '198g',
    images: {
      unlit: 'https://images.unsplash.com/photo-1596433809252-901acb55fc63',
      lit: 'https://images.unsplash.com/photo-1596433809699-390dd99011b7'
    },
    rating: 4.8,
    reviews: [],
    material: 'Soy',
    scentFamily: 'Floral',
    type: 'Container',
    isHandmade: true,
    minOrder: 2
  }
];