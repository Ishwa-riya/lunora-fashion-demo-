import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { ProductCard } from './ProductCard';

export const BestSellers: React.FC = () => {
  const navigate = useNavigate();

  // Pick the 6 exact best sellers as shown in the reference screenshot
  const bestSellers = PRODUCTS.slice(0, 6);

  return (
    <section className="py-16 md:py-24 max-w-[1440px] mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736F6A] block mb-2">
            BEST SELLERS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171615]">
            Our Most Loved Picks
          </h2>
        </div>

        <button
          onClick={() => navigate('/shop')}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.12em] uppercase text-[#171615] hover:opacity-70 transition-opacity group self-start sm:self-end"
        >
          <span>View All Products</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 6 Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
