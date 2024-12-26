import { Product } from '../types';
import { relaxationProducts } from './categories/relaxation';
import { aromatherapyProducts } from './categories/aromatherapy';
import { massageProducts } from './categories/massage';
import { romanceProducts } from './categories/romance';

export const products: Product[] = [
  ...relaxationProducts,
  ...aromatherapyProducts,
  ...massageProducts,
  ...romanceProducts
];