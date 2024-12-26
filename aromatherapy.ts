import { Product } from '../../types';

export const aromatherapyProducts: Product[] = [
  {
    id: 'citrus-burst',
    name: 'Citrus Burst',
    price: 34.99,
    category: 'aromatherapy',
    description: 'An energizing blend of citrus essential oils to invigorate your space.',
    features: ['100% Natural Beeswax', 'Wooden Wick', 'Essential Oil Based'],
    burnTime: '40-45 hours',
    scentNotes: ['Orange', 'Lemon', 'Grapefruit', 'Bergamot'],
    ingredients: ['Beeswax', 'Citrus Essential Oils', 'Wooden Wick'],
    size: '9oz',
    weight: '255g',
    images: {
      unlit: 'https://images.unsplash.com/photo-1608181831718-c9ffd8728e95',
      lit: 'https://images.unsplash.com/photo-1636659638188-4999d56db1dd'
    },
    rating: 4.9,
    reviews: [],
    isNewArrival: true,
    material: 'Beeswax',
    scentFamily: 'Citrus',
    type: 'Container',
    isEcoFriendly: true,
    stockCount: 8
  },
  {
    id: 'morning-dew',
    name: 'Morning Dew',
    price: 39.99,
    category: 'aromatherapy',
    description: 'Fresh and invigorating scent inspired by early morning garden walks.',
    features: ['Coconut Wax Blend', 'Cotton Wick', 'Natural Fragrance'],
    burnTime: '50-55 hours',
    scentNotes: ['Cucumber', 'Mint', 'Green Tea'],
    ingredients: ['Coconut Wax', 'Natural Fragrance', 'Cotton Wick'],
    size: '11oz',
    weight: '312g',
    images: {
      unlit: 'https://images.unsplash.com/photo-1587614298171-a331d8a8d7f5',
      lit: 'https://images.unsplash.com/photo-1593642634367-d91a135587b5'
    },
    rating: 4.7,
    reviews: [],
    material: 'Coconut',
    scentFamily: 'Fresh',
    type: 'Container',
    isVegan: true,
    minOrder: 2
  }
];