import React, { useState, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { PRODUCTS } from '../data/products';
import { useNavigate } from 'react-router-dom';

export const SearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen } = useShop();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  if (!isSearchOpen) return null;

  const popularSearches = ['Linen Blazer', 'Wide Leg Trousers', 'Strappy Heels', 'Leather Shoulder Bag', 'Sunglasses'];

  const filteredProducts = query.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 md:pt-24 px-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#F8F5F1] w-full max-w-3xl rounded-2xl shadow-2xl border border-[#E7DFD4] overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="p-6 border-b border-[#E8E1D7] flex items-center gap-4">
          <Search className="w-5 h-5 text-[#736F6A] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search dresses, linen blazers, leather bags..."
            className="flex-1 bg-transparent text-lg md:text-xl font-normal text-[#171615] placeholder-[#9E9891] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs uppercase tracking-wider text-[#736F6A] hover:text-[#171615]"
            >
              Clear
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="p-1.5 text-[#736F6A] hover:text-[#171615] transition-colors rounded-full hover:bg-[#EEE7DF]"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-1">
          {query.trim() === '' ? (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#736F6A] mb-3">
                Trending Searches
              </h4>
              <div className="flex flex-wrap gap-2">
                {popularSearches.map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 rounded-full bg-[#EEE7DF] hover:bg-[#E5DDD2] text-xs font-medium text-[#2C2926] transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-[#E8E1D7]">
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-[#736F6A] mb-4">
                  Curated Featured Essentials
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {PRODUCTS.slice(0, 4).map((p) => (
                    <div
                      key={p.id}
                      onClick={() => {
                        setIsSearchOpen(false);
                        navigate(`/product/${p.id}`);
                      }}
                      className="group cursor-pointer flex flex-col gap-2"
                    >
                      <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#EEE7DF]">
                        <img
                          src={p.image}
                          alt={p.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <span className="text-xs font-medium text-[#171615] truncate group-hover:underline">
                        {p.name}
                      </span>
                      <span className="text-xs font-semibold text-[#171615]">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-12 text-center">
              <p className="font-serif-luxury text-2xl text-[#171615] mb-2">
                No matching results found for "{query}"
              </p>
              <p className="text-xs text-[#736F6A] max-w-sm mx-auto mb-6">
                Try searching for "blazer", "dress", "trousers", or "bag" to discover our timeless pieces.
              </p>
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  navigate('/shop');
                }}
                className="px-6 py-2.5 bg-[#171615] text-[#F8F5F1] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black"
              >
                View Full Catalog
              </button>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#736F6A]">
                  Found <strong className="text-[#171615]">{filteredProducts.length}</strong> pieces
                </span>
                <button
                  onClick={() => {
                    setIsSearchOpen(false);
                    navigate(`/shop?search=${encodeURIComponent(query)}`);
                  }}
                  className="text-xs font-semibold text-[#171615] flex items-center gap-1 hover:underline"
                >
                  <span>View in shop</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProducts.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setIsSearchOpen(false);
                      navigate(`/product/${p.id}`);
                    }}
                    className="flex items-center gap-4 p-3 rounded-xl bg-white/70 hover:bg-white border border-[#EBE4DC] cursor-pointer transition-all hover:shadow-xs group"
                  >
                    <div className="w-16 h-20 rounded-lg overflow-hidden bg-[#EEE7DF] shrink-0">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className="text-sm font-medium text-[#171615] truncate group-hover:underline">
                        {p.name}
                      </h5>
                      <p className="text-xs text-[#736F6A]">{p.categoryLabel}</p>
                      <span className="text-sm font-semibold text-[#171615] mt-1 block">
                        ${p.price.toFixed(2)}
                      </span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-[#8C827A] group-hover:text-[#171615] shrink-0 transition-transform group-hover:translate-x-1 mr-2" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
