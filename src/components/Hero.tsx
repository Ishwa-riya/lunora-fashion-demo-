import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Play, Truck, RotateCcw, ShieldCheck } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const HERO_SLIDES = [
  {
    tag: 'NEW COLLECTION',
    title: 'Elevate Your Everyday Style',
    subtitle: 'Discover timeless pieces crafted for comfort, designed for elegance, made for you.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'Model wearing beige tailored blazer, sunglasses, and black crop top',
    category: 'women',
  },
  {
    tag: 'CAPSULE WARDROBE',
    title: 'Architectural Minimalist Linens',
    subtitle: 'Breathable, structured neutrals designed to transcend fleeting seasonal trends.',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-fashion editorial model in warm beige tailored suit',
    category: 'dresses',
  },
  {
    tag: 'LIMITED EDITION',
    title: 'Modern Suede & Fine Silks',
    subtitle: 'Uncompromising craftsmanship meet relaxed contemporary proportions.',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80',
    alt: 'Editorial portrait in luxury neutral knitwear',
    category: 'men',
  },
];

export const Hero: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const { setIsLookbookOpen } = useShop();
  const navigate = useNavigate();

  const current = HERO_SLIDES[activeSlide];

  return (
    <section className="relative overflow-hidden bg-[#F8F5F1] pt-6 md:pt-10 pb-16 md:pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-6 flex flex-col justify-center z-10">
            {/* Small uppercase tag */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-[11px] md:text-xs font-semibold tracking-[0.25em] uppercase text-[#736F6A]">
                {current.tag}
              </span>
            </div>

            {/* Serif Main Headline */}
            <h1 className="font-serif-luxury text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal leading-[1.05] tracking-[-0.01em] text-[#171615] mb-6">
              Elevate Your <br />
              <span className="italic font-light">Everyday Style</span>
            </h1>

            {/* Subtitle / Description */}
            <p className="text-[#5D5852] text-base md:text-lg max-w-lg leading-relaxed font-light mb-8">
              {current.subtitle}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <button
                onClick={() => navigate('/shop')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#171615] text-[#F8F5F1] rounded-full text-xs md:text-sm font-medium tracking-[0.15em] uppercase hover:bg-black transition-all duration-300 hover:shadow-lg group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => setIsLookbookOpen(true)}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full text-xs md:text-sm font-medium tracking-[0.1em] text-[#171615] hover:bg-[#EEE7DF]/80 transition-all duration-300 group"
              >
                <div className="w-9 h-9 rounded-full border border-[#171615] flex items-center justify-center transition-transform group-hover:scale-105">
                  <Play className="w-3.5 h-3.5 fill-[#171615] text-[#171615] ml-0.5" />
                </div>
                <span>Watch Lookbook</span>
              </button>
            </div>

            {/* Three Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#E8E1D7]">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EEE7DF] flex items-center justify-center shrink-0">
                  <Truck className="w-4 h-4 text-[#171615]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#171615] uppercase tracking-wider">
                    Free Shipping
                  </h4>
                  <p className="text-[11px] text-[#736F6A]">On orders over $99</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EEE7DF] flex items-center justify-center shrink-0">
                  <RotateCcw className="w-4 h-4 text-[#171615]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#171615] uppercase tracking-wider">
                    Easy Returns
                  </h4>
                  <p className="text-[11px] text-[#736F6A]">30-day returns</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#EEE7DF] flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-[#171615]" />
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-[#171615] uppercase tracking-wider">
                    Secure Payment
                  </h4>
                  <p className="text-[11px] text-[#736F6A]">100% protected</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Photograph with Slide Indicator */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl md:rounded-3xl overflow-hidden bg-[#EEE7DF] shadow-md border border-[#E8E1D7] aspect-[4/5] max-h-[640px] w-full">
              <img
                src={current.image}
                alt={current.alt}
                className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform hover:scale-[1.02]"
              />

              {/* Subtle Warm Gradient Overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

              {/* Vertical Slide Indicators */}
              <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 flex flex-col items-center gap-4 z-20 bg-white/70 backdrop-blur-md py-4 px-2.5 rounded-full shadow-sm border border-white/50">
                {HERO_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    className="flex flex-col items-center group cursor-pointer"
                    aria-label={`Slide ${idx + 1}`}
                  >
                    <span
                      className={`text-[11px] font-mono font-medium transition-all ${
                        activeSlide === idx
                          ? 'text-[#171615] font-bold scale-110'
                          : 'text-[#8C827A] group-hover:text-[#171615]'
                      }`}
                    >
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    {idx < HERO_SLIDES.length - 1 && (
                      <span
                        className={`w-[1px] h-3 my-1 transition-colors ${
                          activeSlide === idx ? 'bg-[#171615]' : 'bg-[#D0C7BC]'
                        }`}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
