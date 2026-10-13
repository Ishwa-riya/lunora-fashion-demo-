import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, Sparkles, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartItemCount,
    isCartOpen,
    setIsCartOpen,
    freeShippingThreshold,
    isFreeShipping,
    shippingRemaining,
    setIsCheckoutOpen,
  } = useShop();

  const [promoCode, setPromoCode] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUNORA10') {
      setDiscountPercent(0.10);
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "LUNORA10"');
    }
  };

  const discountAmount = Number((cartSubtotal * discountPercent).toFixed(2));
  const shippingFee = cartSubtotal === 0 ? 0 : isFreeShipping ? 0 : 15.00;
  const orderTotal = Number((cartSubtotal - discountAmount + shippingFee).toFixed(2));
  const shippingProgress = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#171615]/50 backdrop-blur-xs transition-opacity duration-300"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#F8F5F1] h-full shadow-2xl flex flex-col z-10 border-l border-[#E5DDD2] animate-slide-left">
        {/* Header */}
        <div className="p-6 border-b border-[#E8E1D7] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-serif-luxury text-2xl font-normal text-[#171615]">
              Shopping Bag
            </h2>
            <span className="text-xs font-semibold px-2 py-0.5 bg-[#EEE7DF] text-[#171615] rounded-full">
              {cartItemCount}
            </span>
          </div>
          <button
            onClick={() => setIsCartOpen(false)}
            className="p-1 text-[#736F6A] hover:text-[#171615] transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="bg-[#EEE7DF]/80 px-6 py-3 border-b border-[#E4DCD2]">
          <div className="flex items-center justify-between text-xs mb-1.5 font-medium">
            {isFreeShipping ? (
              <span className="text-[#3F3A35] flex items-center gap-1.5 font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-[#B58E58]" />
                You unlocked Complimentary Express Shipping!
              </span>
            ) : (
              <span className="text-[#59534C]">
                Add <strong className="text-[#171615]">${shippingRemaining.toFixed(2)}</strong> more for Free Shipping
              </span>
            )}
            <span className="text-[#8C827A]">{shippingProgress}%</span>
          </div>
          <div className="w-full bg-[#DDD4C7] h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#171615] h-full transition-all duration-500 rounded-full"
              style={{ width: `${shippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List / Empty State */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-[#EBE4DC]">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 rounded-full bg-[#EEE7DF] flex items-center justify-center text-[#736F6A] mb-4">
                <ShoppingBag className="w-7 h-7 stroke-1" />
              </div>
              <h3 className="font-serif-luxury text-2xl text-[#171615] mb-2">
                Your bag is empty
              </h3>
              <p className="text-xs text-[#736F6A] max-w-xs mb-6 leading-relaxed">
                Explore our curated collection of luxury linen, tailoring, and timeless essentials.
              </p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  navigate('/shop');
                }}
                className="px-6 py-3 bg-[#171615] text-[#F8F5F1] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-black transition-all"
              >
                Explore Collection
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="py-4 first:pt-0 last:pb-0 flex gap-4">
                {/* Product Thumbnail */}
                <div className="w-20 h-24 rounded-lg bg-[#EEE7DF] overflow-hidden shrink-0 border border-[#E0D7CB]">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-medium text-[#171615] leading-snug">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#9E9891] hover:text-[#171615] p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <p className="text-xs text-[#736F6A] mt-0.5">
                      {item.selectedSize} / {item.selectedColor}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-[#DDD4C7] rounded-md bg-white">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 text-[#544F49] hover:text-[#171615] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-semibold text-[#171615]">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 text-[#544F49] hover:text-[#171615] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-sm font-semibold text-[#171615]">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#E8E1D7] bg-[#F2EDE6]/50">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code (e.g. LUNORA10)"
                  disabled={promoApplied}
                  className="flex-1 px-3 py-2 bg-white border border-[#DDD4C7] rounded-md text-xs uppercase tracking-wider focus:outline-none focus:border-[#171615] disabled:bg-gray-100"
                />
                <button
                  type="submit"
                  disabled={promoApplied || !promoCode.trim()}
                  className="px-4 py-2 bg-[#171615] text-[#F8F5F1] text-xs uppercase tracking-wider font-semibold rounded-md hover:bg-black transition-colors disabled:opacity-40"
                >
                  {promoApplied ? <Check className="w-3.5 h-3.5" /> : 'Apply'}
                </button>
              </div>
              {promoApplied && (
                <p className="text-[11px] text-green-700 mt-1 font-medium">
                  ✓ VIP 10% discount applied!
                </p>
              )}
              {promoError && (
                <p className="text-[11px] text-red-600 mt-1 font-medium">
                  {promoError}
                </p>
              )}
            </form>

            {/* Calculations */}
            <div className="flex flex-col gap-1.5 text-xs text-[#5D5852] mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold text-[#171615]">${cartSubtotal.toFixed(2)}</span>
              </div>
              {promoApplied && (
                <div className="flex justify-between text-green-700">
                  <span>VIP 10% Discount</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#171615] pt-2 border-t border-[#DDD4C7]">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button
              onClick={() => {
                setIsCartOpen(false);
                setIsCheckoutOpen(true);
              }}
              className="w-full py-3.5 bg-[#171615] text-[#F8F5F1] text-xs uppercase tracking-[0.15em] font-semibold rounded-full hover:bg-black transition-all flex items-center justify-center gap-2 hover:shadow-lg"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[10px] text-center text-[#8C827A] mt-2 tracking-wider uppercase">
              Demo Checkout • No actual card charged
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
