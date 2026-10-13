import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Star, Eye, ShoppingBag } from 'lucide-react';
import type { Product } from '../types';
import { useShop } from '../context/ShopContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { toggleWishlist, isInWishlist, addToCart, openQuickView } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedCardImage, setSelectedCardImage] = useState<string>(product.image);
  const [activeColorName, setActiveColorName] = useState<string>(product.colors[0]?.name || '');
  const navigate = useNavigate();

  const isFavorited = isInWishlist(product.id);

  return (
    <div
      className="group flex flex-col cursor-pointer transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative rounded-xl md:rounded-2xl overflow-hidden bg-[#F2EDE6] aspect-[4/5] border border-[#EBE4DC] transition-all duration-300 group-hover:border-[#D5CBC0] group-hover:shadow-md">
        {/* Main Product Image with secondary hover fade */}
        <div
          onClick={() => navigate(`/product/${product.id}`)}
          className="w-full h-full relative overflow-hidden"
        >
          <img
            src={selectedCardImage}
            alt={product.name}
            className={`w-full h-full object-cover object-center transition-all duration-500 ease-out ${
              isHovered && product.secondaryImage && selectedCardImage === product.image ? 'opacity-0 scale-105' : 'opacity-100 group-hover:scale-105'
            }`}
            loading="lazy"
          />
          {product.secondaryImage && (
            <img
              src={product.secondaryImage}
              alt={`${product.name} alternate view`}
              className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-500 ease-out ${
                isHovered && selectedCardImage === product.image ? 'opacity-100 scale-105' : 'opacity-0'
              }`}
              loading="lazy"
            />
          )}
        </div>

        {/* Wishlist Heart Button (Top Right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(product);
          }}
          className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#171615] hover:bg-white hover:scale-110 shadow-xs transition-all duration-200"
          aria-label={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          <Heart
            className={`w-4 h-4 transition-colors ${
              isFavorited ? 'fill-[#171615] text-[#171615]' : 'text-[#544F49]'
            }`}
          />
        </button>

        {/* Discount or New Badge */}
        {product.discountBadge && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-[#171615] text-[#F8F5F1] text-[10px] font-semibold tracking-wider uppercase rounded-full">
            {product.discountBadge}
          </span>
        )}
        {!product.discountBadge && product.isNew && (
          <span className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-white/90 backdrop-blur-xs text-[#171615] text-[10px] font-semibold tracking-wider uppercase rounded-full shadow-xs">
            NEW
          </span>
        )}

        {/* Floating Quick Action Buttons on Hover (Desktop) */}
        <div className="absolute inset-x-3 bottom-3 z-10 hidden sm:flex items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="flex-1 py-2.5 px-3 bg-[#171615] text-[#F8F5F1] rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors flex items-center justify-center gap-1.5 shadow-md"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Add to Bag</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              openQuickView(product);
            }}
            className="w-9 h-9 bg-white/95 text-[#171615] rounded-lg hover:bg-white transition-colors flex items-center justify-center shadow-md"
            title="Quick view"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="pt-3.5 flex flex-col gap-1">
        <div
          onClick={() => navigate(`/product/${product.id}`)}
          className="flex flex-col gap-0.5"
        >
          <h3 className="text-sm md:text-[15px] font-medium text-[#171615] hover:text-[#736F6A] transition-colors leading-snug">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-semibold text-[#171615]">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#9E9891] line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        {/* Interactive Color Swatches on Card */}
        {product.colors && product.colors.length > 1 && (
          <div className="flex items-center gap-1.5 pt-1">
            {product.colors.map((c) => (
              <button
                key={c.name}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveColorName(c.name);
                  if (c.image) {
                    setSelectedCardImage(c.image);
                  }
                }}
                className={`w-4 h-4 rounded-full p-[1px] border transition-all cursor-pointer ${
                  activeColorName === c.name
                    ? 'border-[#171615] scale-125 ring-1 ring-[#C4A482]'
                    : 'border-transparent opacity-75 hover:opacity-100 hover:scale-110'
                }`}
                title={`Change color to ${c.name}`}
              >
                <div
                  className="w-full h-full rounded-full border border-black/15 shadow-xs"
                  style={{ backgroundColor: c.hex }}
                />
              </button>
            ))}
          </div>
        )}

        {/* Rating Stars and Count */}
        <div className="flex items-center gap-1.5 pt-0.5">
          <div className="flex items-center text-[#B58E58]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? 'fill-[#B58E58] text-[#B58E58]'
                    : 'text-[#D0C7BC]'
                }`}
              />
            ))}
          </div>
          <span className="text-[11px] text-[#8C827A] font-medium">
            ({product.reviewCount})
          </span>
        </div>

        {/* Mobile Quick Add Button */}
        <button
          onClick={() => addToCart(product)}
          className="sm:hidden mt-2 w-full py-2 bg-[#EEE7DF] text-[#171615] text-[11px] font-semibold uppercase tracking-wider rounded-md"
        >
          Add to Bag
        </button>
      </div>
    </div>
  );
};
