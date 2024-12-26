import React, { useState } from 'react';
import { formatPrice } from '../../utils/format';

interface PriceRangeSliderProps {
  min: number;
  max: number;
}

export default function PriceRangeSlider({ min, max }: PriceRangeSliderProps) {
  const [range, setRange] = useState([min, max]);

  return (
    <div className="space-y-2">
      <h3 className="font-medium text-gray-900">Price Range</h3>
      <div className="space-y-4">
        <div className="flex justify-between text-sm text-gray-600">
          <span>{formatPrice(range[0])}</span>
          <span>{formatPrice(range[1])}</span>
        </div>
        <input
          type="range"
          min={min}
          max={max}
          value={range[1]}
          onChange={(e) => setRange([range[0], Number(e.target.value)])}
          className="w-full"
        />
      </div>
    </div>
  );
}