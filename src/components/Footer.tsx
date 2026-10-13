import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { useShop } from '../context/ShopContext';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Custom icons for Pinterest and TikTok to avoid missing dependencies
const PinterestIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
  </svg>
);

const TikTokIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.4a6.33 6.33 0 0 0-.86-.06A6.34 6.34 0 0 0 3.1 15.68a6.34 6.34 0 0 0 10.82 4.47V10.87a8.16 8.16 0 0 0 5.67 2.29V9.71a4.84 4.84 0 0 1-3.6-3.02z" />
  </svg>
);

export const Footer: React.FC = () => {
  const [footerEmail, setFooterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useShop();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!footerEmail || !footerEmail.includes('@')) return;
    setSubscribed(true);
    showToast('Subscribed!', 'Thank you for joining our style community.', 'success');
    setFooterEmail('');
  };

  return (
    <footer className="bg-[#121110] text-[#D8D2C9] pt-16 md:pt-20 pb-12 border-t border-[#262422]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Main Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#262422]">
          
          {/* Brand Info (Cols 1-3) */}
          <div className="lg:col-span-3 flex flex-col justify-between">
            <div>
              <Link to="/" className="inline-block mb-4">
                <span className="font-serif-luxury text-3xl tracking-[0.22em] font-semibold text-[#F8F5F1] uppercase block">
                  LUNORA
                </span>
                <span className="text-[10px] tracking-[0.45em] text-[#8C827A] uppercase font-light block -mt-1">
                  FASHION
                </span>
              </Link>
              <p className="text-xs text-[#9E9891] leading-relaxed max-w-xs mb-6">
                Timeless fashion for every moment. Designed with you in mind.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="#instagram"
                className="w-9 h-9 rounded-full bg-[#1F1E1C] flex items-center justify-center text-[#D8D2C9] hover:text-white hover:bg-[#2C2A27] transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#facebook"
                className="w-9 h-9 rounded-full bg-[#1F1E1C] flex items-center justify-center text-[#D8D2C9] hover:text-white hover:bg-[#2C2A27] transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="#pinterest"
                className="w-9 h-9 rounded-full bg-[#1F1E1C] flex items-center justify-center text-[#D8D2C9] hover:text-white hover:bg-[#2C2A27] transition-colors"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a
                href="#tiktok"
                className="w-9 h-9 rounded-full bg-[#1F1E1C] flex items-center justify-center text-[#D8D2C9] hover:text-white hover:bg-[#2C2A27] transition-colors"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: SHOP (Cols 4-5) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F5F1] mb-5">
              Shop
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#9E9891]">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=new" className="hover:text-white transition-colors">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link to="/shop?category=women" className="hover:text-white transition-colors">
                  Women
                </Link>
              </li>
              <li>
                <Link to="/shop?category=men" className="hover:text-white transition-colors">
                  Men
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=sale" className="hover:text-white transition-colors">
                  Sale
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: CUSTOMER CARE (Cols 6-7) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F5F1] mb-5">
              Customer Care
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#9E9891]">
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-white transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-white transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#size-guide" className="hover:text-white transition-colors">
                  Size Guide
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: ABOUT US (Cols 8-9) */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F5F1] mb-5">
              About Us
            </h4>
            <ul className="flex flex-col gap-3 text-xs text-[#9E9891]">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#sustainability" className="hover:text-white transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#stores" className="hover:text-white transition-colors">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: STAY CONNECTED (Cols 10-12) */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F5F1] mb-5">
              Stay Connected
            </h4>
            <p className="text-xs text-[#9E9891] mb-4 leading-relaxed">
              Sign up for updates and get 10% off your first order.
            </p>

            {subscribed ? (
              <div className="flex items-center gap-2 py-3 px-4 bg-[#1F1E1C] rounded-md text-xs text-[#D8D2C9] border border-[#2E2C29]">
                <Check className="w-4 h-4 text-[#C4A482]" />
                <span>Thank you for subscribing!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full py-3 pl-4 pr-11 bg-white text-[#171615] placeholder-[#8C827A] rounded-md text-xs focus:outline-none focus:ring-1 focus:ring-[#C4A482]"
                />
                <button
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 px-3 text-[#171615] hover:opacity-70 transition-opacity"
                  aria-label="Submit newsletter"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Copyright & Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#736F6A]">
          <p>© 2026 LUNORA FASHION. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#privacy" className="hover:text-[#D8D2C9] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-[#D8D2C9] transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-[#D8D2C9] transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
