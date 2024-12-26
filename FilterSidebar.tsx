import React from 'react';
import PriceRangeSlider from './PriceRangeSlider';
import FilterSection from './FilterSection';

const materials = ['Soy', 'Beeswax', 'Coconut'];
const sizes = ['2oz', '4oz', '8oz', '16oz'];
const scentFamilies = ['Floral', 'Woody', 'Fresh', 'Citrus', 'Spicy'];
const types = ['Container', 'Pillar', 'Tealight'];
const features = ['Handmade', 'Eco-friendly', 'Vegan'];

export default function FilterSidebar() {
  return (
    <aside className="w-64 space-y-6">
      <PriceRangeSlider min={10} max={100} />
      
      <FilterSection title="Material" options={materials} />
      <FilterSection title="Size" options={sizes} />
      <FilterSection title="Scent Family" options={scentFamilies} />
      <FilterSection title="Type" options={types} />
      <FilterSection title="Features" options={features} />
    </aside>
  );
}