import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1601662528567-526cd06f6582)'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl font-serif mb-6">
            Artisanal Candles for Your Sacred Space
          </h1>
          <p className="text-xl mb-8">
            Hand-crafted with love, our luxury candles transform your environment into a sanctuary of peace and tranquility.
          </p>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-colors">
            Shop Collection
          </button>
        </div>
      </div>
    </section>
  );
}