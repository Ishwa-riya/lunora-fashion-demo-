import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ArrowRight, Sparkles } from 'lucide-react';
import { useShop } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const LOOKBOOK_SLIDES = [
  {
    season: 'SPRING / SUMMER 2026',
    title: 'The Linen Monolith',
    quote: 'Restraint in silhouette. Exuberance in natural texture.',
    description: 'A study in tailored breathability. The unstructured linen blazer layered over sculpting micro-modal ribbed knits and fluid high-waisted twill.',
    modelImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    featuredProduct: 'linen-blend-blazer',
    productName: 'Linen Blend Blazer',
    productPrice: '$89.99',
  },
  {
    season: 'CAPSULE SERIES 02',
    title: 'Warm Neutrals & Architectural Suede',
    quote: 'Clothing that harmonizes with raw architectural stone.',
    description: 'Precision-cut outerwear with tactile suede finishes that offer effortless transition from dawn gallery visits to dusk aperitifs.',
    modelImage: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=1200&q=80',
    featuredProduct: 'suede-overshirt-jacket',
    productName: 'Suede Overshirt Jacket',
    productPrice: '$119.99',
  },
  {
    season: 'EVENING REPERTOIRE',
    title: 'Sculptural Noir & Liquid Silks',
    quote: 'Midnight simplicity. Cut on the bias to move as liquid.',
    description: 'Weighted mulberry silk slips that celebrate unadorned elegance, accessorized with organic 18k molten gold jewellery.',
    modelImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1200&q=80',
    featuredProduct: 'silk-slip-evening-dress',
    productName: 'Silk Slip Evening Dress',
    productPrice: '$94.99',
  },
  {
    season: 'TAILORING EDIT',
    title: 'Fluid Pleats & Calfskin Accents',
    quote: 'The poetry of high-waisted fluid trousers meeting structured leather.',
    description: 'High-density neutral twill tailored trousers paired with hand-buffed full-grain Italian calfskin accessories.',
    modelImage: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=1200&q=80',
    featuredProduct: 'wide-leg-trousers',
    productName: 'Wide Leg Trousers',
    productPrice: '$59.99',
  },
  {
    season: 'COUTURE CASUAL',
    title: 'Minimal Stilettos & Hand-Polished Bio-Acetate',
    quote: 'Restraint in every line. Precision in every angle.',
    description: 'Statement oversized UV400 frames styled alongside barely-there stiletto sandals for a sharp architectural city silhouette.',
    modelImage: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    featuredProduct: 'oversized-sunglasses',
    productName: 'Oversized Sunglasses',
    productPrice: '$19.99',
  },
];

export const LookbookModal: React.FC = () => {
  const { isLookbookOpen, setIsLookbookOpen } = useShop();
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  if (!isLookbookOpen) return null;

  const current = LOOKBOOK_SLIDES[currentSlide];

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? LOOKBOOK_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === LOOKBOOK_SLIDES.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
      <div className="bg-[#171615] text-[#F8F5F1] rounded-3xl max-w-5xl w-full max-h-[92vh] overflow-hidden shadow-2xl border border-[#33312E] relative flex flex-col">
        {/* Top Bar */}
        <div className="p-6 border-b border-[#2C2927] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="w-4 h-4 text-[#C4A482]" />
            <span className="text-xs font-semibold tracking-[0.25em] uppercase text-[#D0C7BC]">
              LUNORA EDITORIAL LOOKBOOK
            </span>
          </div>
          <button
            onClick={() => setIsLookbookOpen(false)}
            className="p-1.5 rounded-full hover:bg-white/10 text-white/80 hover:text-white transition-colors"
            aria-label="Close lookbook"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left: Editorial Image */}
          <div className="md:col-span-7 relative min-h-[350px] md:min-h-[500px] bg-black">
            <img
              src={current.modelImage}
              alt={current.title}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* Slide Navigation Arrows */}
            <div className="absolute inset-y-0 left-4 flex items-center">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Previous look"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            </div>
            <div className="absolute inset-y-0 right-4 flex items-center">
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center hover:bg-black/80 transition-colors"
                aria-label="Next look"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right: Editorial Story & Shop Look */}
          <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-between bg-[#1C1A18]">
            <div>
              <span className="text-[11px] font-mono tracking-widest text-[#B58E58] uppercase block mb-2">
                {current.season}
              </span>
              <h3 className="font-serif-luxury text-3xl md:text-4xl font-normal text-[#F8F5F1] mb-3 leading-tight">
                {current.title}
              </h3>
              <p className="font-serif-luxury italic text-lg text-[#C7BFB5] mb-4">
                "{current.quote}"
              </p>
              <p className="text-xs md:text-sm text-[#A8A29A] leading-relaxed font-light mb-8">
                {current.description}
              </p>
            </div>

            {/* Featured Item Pill */}
            <div className="pt-6 border-t border-[#33302D]">
              <span className="text-[10px] uppercase tracking-wider text-[#8C827A] block mb-2">
                Featured Piece in This Look:
              </span>
              <div className="flex items-center justify-between p-3 rounded-xl bg-[#282623] border border-[#3C3935] mb-4">
                <div>
                  <h4 className="text-sm font-medium text-white">{current.productName}</h4>
                  <span className="text-xs text-[#C4A482] font-semibold">{current.productPrice}</span>
                </div>
                <button
                  onClick={() => {
                    setIsLookbookOpen(false);
                    navigate(`/product/${current.featuredProduct}`);
                  }}
                  className="px-4 py-2 bg-white text-[#171615] rounded-full text-xs font-semibold uppercase tracking-wider hover:bg-[#EEE7DF] transition-colors flex items-center gap-1.5"
                >
                  <span>Shop Look</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Slide Counter Dots */}
              <div className="flex items-center justify-center gap-2">
                {LOOKBOOK_SLIDES.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-1.5 rounded-full transition-all ${
                      currentSlide === idx ? 'w-8 bg-[#C4A482]' : 'w-2 bg-[#4A4642]'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
