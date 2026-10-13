import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const PromoBanners: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-8 md:py-12 max-w-[1440px] mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        
        {/* Banner 1: Spring Sale */}
        <div className="relative rounded-2xl overflow-hidden bg-[#EEE7DF] border border-[#E4DCD2] p-8 md:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] group">
          {/* Background image positioned on the right */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 sm:w-2/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=800&q=80"
              alt="Spring Sale editorial fashion"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle soft gradient fading into the card background */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#EEE7DF] to-transparent pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[62%] sm:max-w-[58%] flex flex-col justify-between h-full">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#736F6A] block mb-3">
                LIMITED TIME OFFER
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#171615] leading-[1.15] mb-2">
                Spring Sale <br />
                <span className="italic font-light">Up to 50% Off</span>
              </h3>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate('/shop?filter=sale')}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#171615] text-[#F8F5F1] rounded-full text-xs font-semibold tracking-[0.14em] uppercase hover:bg-black transition-all group/btn shadow-xs hover:shadow-md"
              >
                <span>Shop The Sale</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

        {/* Banner 2: Fresh Styles Just Landed */}
        <div className="relative rounded-2xl overflow-hidden bg-[#EEE7DF] border border-[#E4DCD2] p-8 md:p-10 flex flex-col justify-between min-h-[300px] sm:min-h-[340px] group">
          {/* Background image on the right */}
          <div className="absolute top-0 right-0 bottom-0 w-1/2 sm:w-2/5 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
              alt="New arrivals on minimalist hangers"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            {/* Gradient fade */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#EEE7DF] to-transparent pointer-events-none" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-[62%] sm:max-w-[58%] flex flex-col justify-between h-full">
            <div>
              <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#736F6A] block mb-3">
                NEW ARRIVALS
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-[42px] font-normal text-[#171615] leading-[1.15] mb-2">
                Fresh Styles <br />
                <span className="italic font-light">Just Landed</span>
              </h3>
            </div>

            <div className="mt-8">
              <button
                onClick={() => navigate('/shop?filter=new')}
                className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#171615] text-[#F8F5F1] rounded-full text-xs font-semibold tracking-[0.14em] uppercase hover:bg-black transition-all group/btn shadow-xs hover:shadow-md"
              >
                <span>Explore New In</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
