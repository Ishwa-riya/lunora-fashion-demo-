import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export const Shop: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryParam = searchParams.get('category') || 'all';
  const filterParam = searchParams.get('filter') || '';
  const searchParam = searchParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(categoryParam);
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'>('featured');
  const [maxPrice, setMaxPrice] = useState<number>(200);
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  useEffect(() => {
    if (categoryParam) setSelectedCategory(categoryParam);
  }, [categoryParam]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'sale') {
          if (!item.discountBadge && item.category !== 'sale') return false;
        } else if (item.category !== selectedCategory) {
          return false;
        }
      }

      // Special filter param
      if (filterParam === 'sale' && !item.discountBadge && item.category !== 'sale') {
        return false;
      }
      if (filterParam === 'new' && !item.isNew) {
        return false;
      }

      // Search term
      if (searchParam) {
        const query = searchParam.toLowerCase();
        const matches =
          item.name.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query);
        if (!matches) return false;
      }

      // Price filter
      if (item.price > maxPrice) return false;

      // In stock
      if (inStockOnly && !item.inStock) return false;

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
      return 0; // featured default order
    });
  }, [selectedCategory, filterParam, searchParam, maxPrice, inStockOnly, sortBy]);

  const resetFilters = () => {
    setSelectedCategory('all');
    setMaxPrice(200);
    setInStockOnly(false);
    setSortBy('featured');
    setSearchParams({});
  };

  const getCategoryTitle = () => {
    if (searchParam) return `Search Results for "${searchParam}"`;
    if (filterParam === 'sale') return 'Spring Sale — Up to 50% Off';
    if (filterParam === 'new') return 'New Arrivals Collection';
    if (selectedCategory === 'all') return 'Complete Boutique Repertoire';
    const found = CATEGORIES.find((c) => c.slug === selectedCategory);
    return found ? `${found.name} Collection` : 'Boutique Collection';
  };

  return (
    <div className="min-h-screen bg-[#F8F5F1] py-8 md:py-14">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-[#8C827A] mb-4">
          <Link to="/" className="hover:text-[#171615] transition-colors">
            Home
          </Link>
          <span>/</span>
          <span className="text-[#171615] uppercase tracking-wider font-medium">Shop</span>
        </div>

        {/* Page Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-6 border-b border-[#E8E1D7] gap-4">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736F6A] block mb-1">
              CURATED CATALOG
            </span>
            <h1 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-[#171615]">
              {getCategoryTitle()}
            </h1>
          </div>
          <span className="text-xs text-[#736F6A] self-start md:self-end">
            Showing <strong className="text-[#171615]">{filteredProducts.length}</strong> pieces
          </span>
        </div>

        {/* Category Horizontal Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-6 mb-4">
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchParams({});
            }}
            className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedCategory === 'all'
                ? 'bg-[#171615] text-[#F8F5F1] shadow-xs'
                : 'bg-white border border-[#DDD4C7] text-[#544F49] hover:border-[#171615]'
            }`}
          >
            All Items
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.slug);
                setSearchParams({ category: cat.slug });
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat.slug
                  ? 'bg-[#171615] text-[#F8F5F1] shadow-xs'
                  : 'bg-white border border-[#DDD4C7] text-[#544F49] hover:border-[#171615]'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Control Toolbar (Sort & Filters) */}
        <div className="bg-white rounded-xl p-4 border border-[#E7DFD4] mb-8 flex flex-wrap items-center justify-between gap-4 shadow-xs">
          {/* Price Range Slider in Bar */}
          <div className="flex items-center gap-4 text-xs text-[#5D5852]">
            <span className="font-medium text-[#171615] uppercase tracking-wider">Max Price:</span>
            <input
              type="range"
              min="20"
              max="200"
              step="5"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="accent-[#171615] cursor-pointer w-28 sm:w-36"
            />
            <span className="font-semibold text-[#171615] font-mono">${maxPrice}</span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#736F6A] uppercase tracking-wider font-medium hidden sm:inline">
                Sort by:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-[#F8F5F1] border border-[#DDD4C7] text-[#171615] text-xs font-medium py-2 px-3 rounded-lg focus:outline-none focus:border-[#171615] cursor-pointer"
              >
                <option value="featured">Featured Essentials</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="newest">New Arrivals First</option>
              </select>
            </div>

            {/* Reset Button */}
            {(selectedCategory !== 'all' || maxPrice < 200 || searchParam || filterParam) && (
              <button
                onClick={resetFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#736F6A] hover:text-[#171615] transition-colors p-1"
                title="Reset filters"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center border border-[#E7DFD4] my-8 shadow-xs">
            <h3 className="font-serif-luxury text-3xl font-normal text-[#171615] mb-2">
              No Pieces Match Your Criteria
            </h3>
            <p className="text-xs text-[#736F6A] max-w-sm mx-auto mb-6">
              Try adjusting your price range or exploring another category to discover our luxury collection.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-3 bg-[#171615] text-[#F8F5F1] text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-black transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
