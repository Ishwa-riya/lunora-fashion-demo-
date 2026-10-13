import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data/products';

export const CategoryCircles: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative -mt-10 sm:-mt-12 md:-mt-14 z-20 max-w-[1280px] mx-auto px-4 md:px-8">
      {/* Floating White Pill Container with gentle shadow */}
      <div className="bg-white rounded-3xl md:rounded-full py-6 px-6 md:px-12 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] border border-[#ECE6DE]">
        <div className="flex items-center justify-between gap-4 md:gap-6 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => navigate(cat.isSale ? '/shop?filter=sale' : `/shop?category=${cat.slug}`)}
              className="flex flex-col items-center gap-2.5 shrink-0 group cursor-pointer transition-all duration-300 focus:outline-none"
            >
              {/* Circular Avatar Container */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-[72px] md:h-[72px] rounded-full overflow-hidden p-0.5 border border-[#ECE6DE] group-hover:border-[#171615] transition-all duration-300 group-hover:shadow-md">
                {cat.isSale ? (
                  /* Black Badge for Sale */
                  <div className="w-full h-full rounded-full bg-[#171615] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105">
                    <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                      SALE
                    </span>
                  </div>
                ) : (
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#F4EFEA]">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              {/* Label */}
              <span className="text-xs sm:text-[13px] font-medium tracking-[0.06em] text-[#2C2926] group-hover:text-black transition-colors">
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
