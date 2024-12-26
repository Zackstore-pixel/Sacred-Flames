import { Product } from '../../types';

export const romanceProducts: Product[] = [
  {
    id: 'midnight-rose',
    name: 'Midnight Rose',
    price: 37.99,
    category: 'romance',
    description: 'A sophisticated blend of dark roses and precious woods.',
    features: ['Premium Rose Extract', 'Double Wick', 'Long-Lasting'],
    burnTime: '60-65 hours',
    scentNotes: ['Dark Rose', 'Oud', 'Amber'],
    ingredients: ['Soy Wax', 'Rose Extract', 'Cotton Wicks'],
    size: '12oz',
    weight: '340g',
    images: {
      unlit: 'https://images.unsplash.com/photo-1602910344008-22f323cc1817',
      lit: 'https://images.unsplash.com/photo-1602910344079-28b31b4e8ea4'
    },
    rating: 4.9,
    reviews: [],
    material: 'Soy',
    scentFamily: 'Floral',
    type: 'Container',
    isNewArrival: true,
    stockCount: 5
  }
];