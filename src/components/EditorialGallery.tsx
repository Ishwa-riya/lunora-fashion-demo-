import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowUpRight } from 'lucide-react';

interface JournalLook {
  id: string;
  image: string;
  title: string;
  tag: string;
  productTarget: string;
}

const JOURNAL_LOOKS: JournalLook[] = [
  {
    id: 'look-1',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80',
    title: 'The Linen Monolith',
    tag: '@lunorafashion #TailoredEase',
    productTarget: '/product/linen-blend-blazer',
  },
  {
    id: 'look-2',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    title: 'Architectural Carry',
    tag: '@lunorafashion #FineLeather',
    productTarget: '/product/leather-shoulder-bag',
  },
  {
    id: 'look-3',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80',
    title: 'Fluid Proportions',
    tag: '@lunorafashion #PecanTwill',
    productTarget: '/product/wide-leg-trousers',
  },
  {
    id: 'look-4',
    image: 'https://images.unsplash.com/photo-1611591475816-7994646738df?auto=format&fit=crop&w=800&q=80',
    title: 'Molten Accents',
    tag: '@lunorafashion #18kGold',
    productTarget: '/product/sculpted-gold-cuff-bracelet',
  },
  {
    id: 'look-5',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    title: 'Suede Utility',
    tag: '@lunorafashion #ModernMen',
    productTarget: '/product/suede-overshirt-jacket',
  },
  {
    id: 'look-6',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    title: 'Dusk Repertoire',
    tag: '@lunorafashion #SilkEvening',
    productTarget: '/product/silk-slip-evening-dress',
  },
];

export const EditorialGallery: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 md:py-24 max-w-[1440px] mx-auto px-6 md:px-12 border-t border-[#E8E1D7]">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 md:mb-12 gap-4">
        <div>
          <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736F6A] block mb-2">
            THE LUNORA JOURNAL
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171615]">
            Curated In Motion
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#736F6A] max-w-xs self-start sm:self-end leading-relaxed">
          Tag <strong className="text-[#171615]">#LunoraStyle</strong> to be featured in our seasonal global editorial stream.
        </p>
      </div>

      {/* 6-Photo Editorial Masonry / Row Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {JOURNAL_LOOKS.map((look) => (
          <div
            key={look.id}
            onClick={() => navigate(look.productTarget)}
            className="group relative rounded-xl overflow-hidden aspect-[3/4] bg-[#EEE7DF] cursor-pointer shadow-xs hover:shadow-lg transition-all duration-500 border border-[#E5DDD2]"
          >
            <img
              src={look.image}
              alt={look.title}
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />

            {/* Hover Dark Vignette & Shop Badge */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
              <div className="flex justify-end">
                <div className="w-8 h-8 rounded-full bg-white/90 text-[#171615] flex items-center justify-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] tracking-widest uppercase font-mono text-[#E8DFD3] block">
                  {look.tag}
                </span>
                <h4 className="text-xs font-semibold text-white tracking-wide mt-0.5 flex items-center gap-1.5">
                  <ShoppingBag className="w-3 h-3" />
                  <span>Shop Look</span>
                </h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
