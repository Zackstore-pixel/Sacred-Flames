import React from 'react';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import { Product } from '../types';
import { formatPrice } from '../utils/format';
import ProductBadge from './badges/ProductBadge';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleBuyNow = () => {
    window.open('https://paypal.me/ZakariaSoubai?country.x=MA&locale.x=en_US', '_blank');
  };

  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative overflow-hidden rounded-t-lg">
        {/* Main Image with Hover Effect */}
        <div className="relative aspect-square">
          <img
            src={product.images.unlit}
            alt={product.name}
            className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
          />
          <img
            src={product.images.lit}
            alt={`${product.name} - Lit`}
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isBestseller && <ProductBadge type="bestseller" />}
          {product.isNewArrival && <ProductBadge type="new" />}
          {product.stockCount && product.stockCount < 10 && (
            <ProductBadge type="stock" value={product.stockCount} />
          )}
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="absolute top-2 right-2 p-2 bg-white rounded-full text-gray-600 hover:text-red-500">
            <Heart className="w-5 h-5" />
          </button>
          <button className="absolute bottom-4 left-4 right-4 bg-white text-gray-800 py-2 rounded-lg hover:bg-gray-50">
            Quick View
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-800">{product.name}</h3>
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-3">{product.scentNotes.join(' • ')}</p>
        
        <div className="space-y-2">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-medium text-gray-800">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">{product.size}</span>
          </div>

          {product.minOrder && (
            <p className="text-xs text-gray-500">
              Minimum order: {product.minOrder} units
            </p>
          )}

          <button 
            onClick={handleBuyNow}
            className="w-full bg-sage-600 text-white px-4 py-2 rounded-lg hover:bg-sage-700 transition-colors flex items-center justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}