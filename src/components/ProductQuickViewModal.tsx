import React, { useState, useEffect } from 'react';
import { X, Star, Heart, ShoppingBag, Plus, Minus, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const ProductQuickViewModal: React.FC = () => {
  const { quickViewProduct, closeQuickView, addToCart, isInWishlist, toggleWishlist } = useShop();
  const navigate = useNavigate();

  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState<string>('');

  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes[0] || 'Standard');
      setSelectedColor(quickViewProduct.colors[0]?.name || 'Standard');
      setQuantity(1);
      setActiveImage(quickViewProduct.image);
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const isFavorited = isInWishlist(quickViewProduct.id);

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor, quantity);
    closeQuickView();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#F8F5F1] rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#E8E1D7] relative flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={closeQuickView}
          className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-white/80 backdrop-blur-xs flex items-center justify-center text-[#171615] hover:bg-white shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Images */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col gap-4 bg-[#F2EDE6]/40">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#EEE7DF] border border-[#E5DDD2]">
            <img
              src={activeImage || quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Thumbnails row */}
          {quickViewProduct.gallery && quickViewProduct.gallery.length > 0 && (
            <div className="flex gap-2.5 overflow-x-auto no-scrollbar py-1">
              {quickViewProduct.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`w-14 h-18 rounded-lg overflow-hidden border-2 transition-all shrink-0 cursor-pointer ${
                    activeImage === imgUrl ? 'border-[#171615] scale-105' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Product Details & Purchase Form */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#736F6A] block mb-1">
              {quickViewProduct.categoryLabel}
            </span>
            <h2 className="font-serif-luxury text-3xl font-normal text-[#171615] leading-snug">
              {quickViewProduct.name}
            </h2>

            {/* Price & Rating */}
            <div className="flex items-center gap-4 mt-2 mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-[#171615]">
                  ${quickViewProduct.price.toFixed(2)}
                </span>
                {quickViewProduct.originalPrice && (
                  <span className="text-sm text-[#9E9891] line-through">
                    ${quickViewProduct.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 pl-4 border-l border-[#DDD4C7]">
                <div className="flex items-center text-[#B58E58]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(quickViewProduct.rating)
                          ? 'fill-[#B58E58] text-[#B58E58]'
                          : 'text-[#D0C7BC]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#736F6A]">
                  ({quickViewProduct.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#5D5852] leading-relaxed mb-6 font-light">
              {quickViewProduct.description}
            </p>

            {/* Colors */}
            {quickViewProduct.colors.length > 0 && (
              <div className="mb-5">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-[#171615] uppercase tracking-wider">
                    Color: <span className="font-normal text-[#736F6A]">{selectedColor}</span>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  {quickViewProduct.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setSelectedColor(c.name);
                        if (c.image) {
                          setActiveImage(c.image);
                        }
                      }}
                      className={`w-8 h-8 rounded-full p-0.5 border-2 transition-all cursor-pointer ${
                        selectedColor === c.name ? 'border-[#171615] scale-110 shadow-sm ring-2 ring-[#C4A482]/40' : 'border-transparent opacity-80 hover:opacity-100 hover:scale-105'
                      }`}
                      title={`Change color to ${c.name}`}
                    >
                      <div
                        className="w-full h-full rounded-full border border-black/15 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {quickViewProduct.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center text-xs mb-2">
                  <span className="font-semibold text-[#171615] uppercase tracking-wider">
                    Select Size:
                  </span>
                  <button className="text-[11px] text-[#736F6A] underline hover:text-[#171615]">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {quickViewProduct.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-3.5 py-2 rounded-lg text-xs font-medium tracking-wider transition-all ${
                        selectedSize === s
                          ? 'bg-[#171615] text-[#F8F5F1]'
                          : 'bg-white border border-[#DDD4C7] text-[#171615] hover:border-[#171615]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Action Row */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* Quantity */}
              <div className="flex items-center border border-[#DDD4C7] rounded-lg bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1.5 text-[#544F49] hover:text-[#171615]"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-8 text-center text-xs font-semibold text-[#171615]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1.5 text-[#544F49] hover:text-[#171615]"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3.5 bg-[#171615] text-[#F8F5F1] text-xs uppercase tracking-[0.15em] font-semibold rounded-lg hover:bg-black transition-all flex items-center justify-center gap-2 hover:shadow-md"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag — ${(quickViewProduct.price * quantity).toFixed(2)}</span>
              </button>

              {/* Wishlist Heart */}
              <button
                onClick={() => toggleWishlist(quickViewProduct)}
                className={`p-3.5 rounded-lg border transition-all ${
                  isFavorited
                    ? 'border-[#171615] bg-[#171615] text-white'
                    : 'border-[#DDD4C7] bg-white text-[#171615] hover:border-[#171615]'
                }`}
                title={isFavorited ? 'Remove from wishlist' : 'Add to wishlist'}
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* View Full Product Page Link */}
            <button
              onClick={() => {
                closeQuickView();
                navigate(`/product/${quickViewProduct.id}`);
              }}
              className="w-full text-center text-xs font-semibold tracking-wider text-[#736F6A] hover:text-[#171615] transition-colors flex items-center justify-center gap-1.5 pt-2"
            >
              <span>View full product specifications and reviews</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
