import React from 'react';

interface ProductBadgeProps {
  type: 'bestseller' | 'new' | 'sale' | 'stock';
  value?: string | number;
}

export default function ProductBadge({ type, value }: ProductBadgeProps) {
  const getBadgeStyles = () => {
    switch (type) {
      case 'bestseller':
        return 'bg-yellow-500 text-white';
      case 'new':
        return 'bg-green-500 text-white';
      case 'sale':
        return 'bg-red-500 text-white';
      case 'stock':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <span className={`px-2 py-1 text-xs rounded ${getBadgeStyles()}`}>
      {type === 'bestseller' && 'Bestseller'}
      {type === 'new' && 'New Arrival'}
      {type === 'sale' && `Save ${value}%`}
      {type === 'stock' && `Only ${value} left`}
    </span>
  );
}