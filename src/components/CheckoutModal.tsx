import React, { useState } from 'react';
import { X, CheckCircle2, ShieldCheck, Truck, CreditCard, Sparkles, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import confetti from 'canvas-confetti';

export const CheckoutModal: React.FC = () => {
  const {
    cart,
    cartSubtotal,
    isFreeShipping,
    clearCart,
    isCheckoutOpen,
    setIsCheckoutOpen,
  } = useShop();

  const [step, setStep] = useState<'details' | 'success'>('details');
  const [formData, setFormData] = useState({
    firstName: 'Eleanor',
    lastName: 'Vance',
    email: 'eleanor.vance@luxury.com',
    address: '740 Park Avenue, Apt 11B',
    city: 'New York',
    state: 'NY',
    zip: '10021',
    paymentMethod: 'apple-pay',
  });
  const [orderNumber, setOrderNumber] = useState('');

  if (!isCheckoutOpen) return null;

  const shippingFee = isFreeShipping ? 0 : 15.00;
  const tax = Number((cartSubtotal * 0.08875).toFixed(2));
  const finalTotal = Number((cartSubtotal + shippingFee + tax).toFixed(2));

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedOrder = `LN-${Math.floor(100000 + Math.random() * 900000)}`;
    setOrderNumber(generatedOrder);
    setStep('success');
    clearCart();

    // Trigger golden luxury confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#171615', '#C4A482', '#EEE7DF', '#FFFFFF'],
      });
    } catch {
      // ignore
    }
  };

  const handleClose = () => {
    setIsCheckoutOpen(false);
    setStep('details');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-[#F8F5F1] rounded-2xl md:rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-[#E8E1D7] relative p-6 md:p-10">
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 text-[#736F6A] hover:text-[#171615] p-1 rounded-full hover:bg-[#EEE7DF]"
          aria-label="Close checkout"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'details' ? (
          <div>
            {/* Header */}
            <div className="text-center mb-6">
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-[#8C827A] block mb-1">
                LUNORA FASHION BOUTIQUE
              </span>
              <h2 className="font-serif-luxury text-3xl font-normal text-[#171615]">
                Complete Your Order
              </h2>
            </div>

            {/* Demo Notice Banner */}
            <div className="mb-6 p-3.5 bg-[#EEE7DF] border border-[#DDD4C7] rounded-xl flex items-center gap-3 text-xs text-[#544F49]">
              <Sparkles className="w-4 h-4 text-[#B58E58] shrink-0" />
              <span>
                <strong>Demo Boutique Checkout:</strong> This is a demonstration preview. No real charges will be processed.
              </span>
            </div>

            <form onSubmit={handlePlaceOrder} className="flex flex-col gap-6">
              {/* Shipping Address */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171615] mb-3 flex items-center gap-2">
                  <Truck className="w-4 h-4" />
                  <span>Delivery Address</span>
                </h4>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    placeholder="First Name"
                    className="px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-lg text-xs focus:outline-none focus:border-[#171615]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    placeholder="Last Name"
                    className="px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-lg text-xs focus:outline-none focus:border-[#171615]"
                  />
                </div>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Email for dispatch updates"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-lg text-xs focus:outline-none focus:border-[#171615] mb-3"
                />
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="Street Address"
                  className="w-full px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-lg text-xs focus:outline-none focus:border-[#171615] mb-3"
                />
                <div className="grid grid-cols-3 gap-3">
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    placeholder="City"
                    className="px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-lg text-xs focus:outline-none focus:border-[#171615]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.state}
                    onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                    placeholder="State"
                    className="px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-lg text-xs focus:outline-none focus:border-[#171615]"
                  />
                  <input
                    type="text"
                    required
                    value={formData.zip}
                    onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                    placeholder="ZIP"
                    className="px-3.5 py-2.5 bg-white border border-[#DDD4C7] rounded-lg text-xs focus:outline-none focus:border-[#171615]"
                  />
                </div>
              </div>

              {/* Payment Demo Selection */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#171615] mb-3 flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  <span>Payment Method</span>
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'apple-pay' })}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.paymentMethod === 'apple-pay'
                        ? 'bg-[#171615] text-white border-[#171615]'
                        : 'bg-white border-[#DDD4C7] text-[#171615]'
                    }`}
                  >
                    Apple Pay
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'credit-card' })}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.paymentMethod === 'credit-card'
                        ? 'bg-[#171615] text-white border-[#171615]'
                        : 'bg-white border-[#DDD4C7] text-[#171615]'
                    }`}
                  >
                    Credit Card
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'google-pay' })}
                    className={`py-3 px-4 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                      formData.paymentMethod === 'google-pay'
                        ? 'bg-[#171615] text-white border-[#171615]'
                        : 'bg-white border-[#DDD4C7] text-[#171615]'
                    }`}
                  >
                    Google Pay
                  </button>
                </div>
              </div>

              {/* Order Breakdown */}
              <div className="p-4 bg-[#EEE7DF]/70 rounded-xl border border-[#DDD4C7]">
                <div className="flex justify-between text-xs text-[#5D5852] mb-1.5">
                  <span>Items Subtotal ({cart.length} unique items)</span>
                  <span className="font-semibold text-[#171615]">${cartSubtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs text-[#5D5852] mb-1.5">
                  <span>Shipping (Express Courier)</span>
                  <span>{shippingFee === 0 ? 'FREE' : `$${shippingFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-xs text-[#5D5852] mb-2">
                  <span>Estimated Sales Tax (8.875%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-[#171615] pt-2 border-t border-[#D5CBC0]">
                  <span>Total Amount</span>
                  <span className="text-base">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[#171615] text-[#F8F5F1] text-xs font-semibold uppercase tracking-[0.18em] rounded-full hover:bg-black transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Authorize Demo Order — ${finalTotal.toFixed(2)}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#8C827A]">
                <ShieldCheck className="w-4 h-4 text-[#171615]" />
                <span>256-bit SSL encrypted & secure demonstration transaction</span>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="py-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#EAE2D5] flex items-center justify-center text-[#171615] mb-5">
              <CheckCircle2 className="w-9 h-9 text-[#8C7A5C]" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[#8C827A] mb-1">
              ORDER CONFIRMED
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl font-normal text-[#171615] mb-2">
              Thank You for Your Order
            </h2>
            <p className="text-sm font-mono text-[#544F49] mb-4">
              Confirmation ID: <span className="font-bold text-[#171615]">{orderNumber}</span>
            </p>
            <p className="text-xs text-[#736F6A] max-w-md leading-relaxed mb-8">
              We have dispatched a complimentary order confirmation and luxury dispatch tracking link to{' '}
              <strong className="text-[#171615]">{formData.email}</strong>. Expected delivery to {formData.city} within 2–3 business days.
            </p>

            <button
              onClick={handleClose}
              className="px-8 py-3.5 bg-[#171615] text-[#F8F5F1] text-xs font-semibold uppercase tracking-widest rounded-full hover:bg-black transition-all"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
