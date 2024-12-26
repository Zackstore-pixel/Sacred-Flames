import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import About from './pages/About';
import Contact from './pages/Contact';
import { products } from './data/products';
import { TranslationProvider } from './components/TranslationContext';

export default function App() {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.slice(4, 8);

  return (
    <TranslationProvider>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Hero />
        
        <main className="container mx-auto px-4 py-16">
          <ProductGrid 
            title="Featured Products" 
            products={featuredProducts} 
          />
          <ProductGrid 
            title="New Arrivals" 
            products={newArrivals} 
          />
        </main>
      </div>
    </TranslationProvider>
  );
}