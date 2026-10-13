import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { COLLECTIONS } from '../data/products';

export const CollectionGrid: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 max-w-[1440px] mx-auto px-6 md:px-12">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736F6A] block mb-2">
            SHOP BY CATEGORY
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171615]">
            Find Your Perfect Style
          </h2>
        </div>

        <button
          onClick={() => navigate('/shop')}
          className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.12em] uppercase text-[#171615] hover:opacity-70 transition-opacity group self-start sm:self-end"
        >
          <span>View All Categories</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-7">
        {COLLECTIONS.map((col) => (
          <div
            key={col.id}
            onClick={() => navigate(`/shop?category=${col.category}`)}
            className="group relative rounded-2xl overflow-hidden aspect-[3/4] bg-[#EEE7DF] cursor-pointer shadow-xs hover:shadow-xl transition-all duration-500 border border-[#E7E0D8]"
          >
            {/* Background Image */}
            <img
              src={col.image}
              alt={col.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              loading="lazy"
            />

            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/80" />

            {/* Bottom Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end text-white">
              <h3 className="font-serif-luxury text-2xl md:text-[26px] font-normal tracking-wide text-white mb-2 leading-tight">
                {col.title}
              </h3>
              <div className="inline-flex items-center gap-2 text-xs font-medium tracking-[0.15em] uppercase text-white/90 group-hover:text-white transition-colors">
                <span>{col.linkText}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
