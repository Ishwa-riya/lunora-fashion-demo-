import React from 'react';
import { X, Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const WishlistDrawer: React.FC = () => {
  const {
    wishlist,
    toggleWishlist,
    addToCart,
    isWishlistOpen,
    setIsWishlistOpen,
  } = useShop();
  const navigate = useNavigate();

  if (!isWishlistOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171615]/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsWishlistOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#F8F5F1] h-full shadow-2xl flex flex-col z-10 border-l border-[#E5DDD2] animate-slide-left">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E1D7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#171615]">
              Saved Wishlist
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 bg-[#EEE7DF] text-[#171615] rounded-full">
              {wishlist.length}
            </span>
          </div>
          <button
            onClick={() => setIsWishlistOpen(false)}
            className="p-1 text-[#736F6A] hover:text-[#171615] transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Wishlist items */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#EBE4DC]">
          {wishlist.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#EEE7DF] flex items-center justify-center text-[#736F6A] mb-4">
                <Heart className="w-7 h-7 stroke-1" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#171615] mb-2">
                Your wishlist is empty
              </h3>
              <p className="text-xs text-[#736F6A] max-w-xs mb-6 leading-relaxed">
                Save your favorite timeless pieces to revisit or purchase later.
              </p>
              <button
                onClick={() => {
                  setIsWishlistOpen(false);
                  navigate('/shop');
                }}
                className="px-6 py-3 bg-[#171615] text-[#F8F5F1] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-black transition-all"
              >
                Browse Catalog
              </button>
            </div>
          ) : (
            wishlist.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                <div
                  onClick={() => {
                    setIsWishlistOpen(false);
                    navigate(`/product/${item.id}`);
                  }}
                  className="w-20 h-24 rounded-lg bg-[#EEE7DF] overflow-hidden shrink-0 border border-[#E0D7CB] cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4
                        onClick={() => {
                          setIsWishlistOpen(false);
                          navigate(`/product/${item.id}`);
                        }}
                        className="text-sm font-medium text-[#171615] leading-snug cursor-pointer hover:underline"
                      >
                        {item.name}
                      </h4>
                      <button
                        onClick={() => toggleWishlist(item)}
                        className="text-[#9E9891] hover:text-[#171615] p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-sm font-semibold text-[#171615] mt-1 block">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  <div className="mt-3">
                    <button
                      onClick={() => {
                        addToCart(item);
                        toggleWishlist(item);
                      }}
                      className="w-full py-2 bg-[#171615] text-white text-[11px] font-semibold uppercase tracking-wider rounded-md hover:bg-black flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
