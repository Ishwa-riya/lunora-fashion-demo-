import React, { useState } from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const { showToast } = useShop();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    showToast('Subscribed!', 'Welcome to LUNORA VIP. Your 10% code is LUNORA10.', 'success');
    setEmail('');
  };

  return (
    <section className="py-12 md:py-16 max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="bg-[#EEE7DF]/70 rounded-2xl md:rounded-3xl border border-[#E4DCD2] overflow-hidden grid grid-cols-1 md:grid-cols-12 shadow-xs">
        
        {/* Left Side: Lifestyle Model Photograph */}
        <div className="md:col-span-4 lg:col-span-4 relative min-h-[260px] md:min-h-[380px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80"
            alt="Editorial model holding coffee in tailored blazer"
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>

        {/* Right Side: Signup Form */}
        <div className="md:col-span-8 lg:col-span-8 p-8 md:p-14 lg:p-16 flex flex-col justify-center">
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736F6A] block mb-2">
            GET 10% OFF YOUR FIRST ORDER
          </span>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171615] mb-3">
            Join Our Style List
          </h2>

          <p className="text-sm md:text-base text-[#5D5852] font-light max-w-lg mb-8 leading-relaxed">
            Sign up for exclusive offers, new arrivals, and style inspiration.
          </p>

          {status === 'success' ? (
            <div className="p-5 bg-white/90 border border-[#D5CBC0] rounded-xl flex items-center gap-3.5 max-w-lg">
              <CheckCircle2 className="w-5 h-5 text-[#8C7A5C] shrink-0" />
              <div>
                <p className="text-sm font-semibold text-[#171615]">
                  You are now on the Style List!
                </p>
                <p className="text-xs text-[#736F6A]">
                  Use promo code <span className="font-mono font-bold text-[#171615]">LUNORA10</span> for 10% off your first boutique purchase.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-lg">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (status === 'error') setStatus('idle');
                  }}
                  placeholder="Enter your email"
                  className="flex-1 px-5 py-3.5 bg-white rounded-xl md:rounded-full border border-[#D8CEBF] text-sm text-[#171615] placeholder-[#9E9891] focus:outline-none focus:border-[#171615] transition-all shadow-xs"
                />
                <button
                  type="submit"
                  className="px-8 py-3.5 bg-[#171615] text-[#F8F5F1] text-xs font-semibold tracking-[0.16em] uppercase rounded-xl md:rounded-full hover:bg-black transition-all hover:shadow-md shrink-0 cursor-pointer"
                >
                  Subscribe
                </button>
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2 mt-2 text-red-600 text-xs">
                  <AlertCircle className="w-4 h-4" />
                  <span>{errorMessage}</span>
                </div>
              )}
            </form>
          )}

          <p className="text-[11px] text-[#8C827A] mt-4 tracking-wide">
            By subscribing you agree with our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>

      </div>
    </section>
  );
};
