import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Heart, ShoppingBag, User, Menu, X, ArrowRight } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Navbar: React.FC = () => {
  const {
    cartItemCount,
    wishlistCount,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
  } = useShop();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [accountModalOpen, setAccountModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'New Arrivals', path: '/shop?filter=new' },
    { label: 'Women', path: '/shop?category=women' },
    { label: 'Men', path: '/shop?category=men' },
    { label: 'Dresses', path: '/shop?category=dresses' },
    { label: 'Accessories', path: '/shop?category=accessories' },
  ];

  return (
    <>
      {/* Top Slim Announcement Bar */}
      <div className="bg-[#171615] text-[#EEE7DF] text-[11px] tracking-[0.2em] uppercase py-2 px-4 text-center font-medium border-b border-[#282725]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-center gap-2">
          <span>Complimentary Express Shipping On Orders Over $99</span>
          <span className="opacity-40">•</span>
          <span>Easy 30-Day Returns</span>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-40 bg-[#F8F5F1]/95 backdrop-blur-md transition-all duration-300 border-b ${
          isScrolled ? 'border-[#E7E0D8] shadow-xs py-3.5' : 'border-[#EEE7DF] py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-[#171615] hover:opacity-70 transition-opacity"
              aria-label="Open navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsSearchOpen(true)}
              className="p-1.5 text-[#171615] hover:opacity-70 transition-opacity md:hidden"
              aria-label="Search catalog"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>

          {/* Brand Logo */}
          <Link
            to="/"
            className="flex flex-col items-center lg:items-start group transition-transform"
          >
            <span className="font-serif-luxury text-2xl md:text-3xl tracking-[0.22em] font-semibold text-[#171615] uppercase leading-none">
              LUNORA
            </span>
            <span className="text-[9px] tracking-[0.45em] text-[#736F6A] uppercase font-light -mt-0.5 group-hover:text-[#171615] transition-colors">
              FASHION
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] tracking-[0.14em] uppercase font-medium text-[#2C2926]">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                className="relative py-1 hover:text-[#000] transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#171615] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center gap-2 md:gap-4 text-[#171615]">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hidden md:flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#EEE7DF]/70 transition-colors"
              aria-label="Search catalog"
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Account Icon */}
            <button
              onClick={() => setAccountModalOpen(true)}
              className="flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#EEE7DF]/70 transition-colors"
              aria-label="Account details"
              title="Account"
            >
              <User className="w-4 h-4" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#EEE7DF]/70 transition-colors"
              aria-label={`Wishlist with ${wishlistCount} items`}
              title="Wishlist"
            >
              <Heart className="w-4 h-4" />
              {wishlistCount > 0 && (
                <span className="absolute 1 top-1 right-1 w-4 h-4 bg-[#171615] text-[#F8F5F1] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Shopping Bag Icon */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center w-9 h-9 rounded-full hover:bg-[#EEE7DF]/70 transition-colors"
              aria-label={`Shopping bag with ${cartItemCount} items`}
              title="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartItemCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#171615] text-[#F8F5F1] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#171615]/50 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm bg-[#F8F5F1] h-full shadow-2xl flex flex-col justify-between p-6 z-10 animate-slide-right">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#EEE7DF]">
                <div className="flex flex-col">
                  <span className="font-serif-luxury text-2xl tracking-[0.2em] font-semibold uppercase">
                    LUNORA
                  </span>
                  <span className="text-[9px] tracking-[0.4em] text-[#736F6A] uppercase font-light">
                    FASHION
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#171615] hover:opacity-70"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-8 flex flex-col gap-5 text-sm tracking-[0.15em] uppercase font-medium">
                {navLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2 text-[#2C2926] hover:text-black border-b border-[#F0EAE2]"
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-40" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#EEE7DF] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsSearchOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#EEE7DF] text-[#171615] text-xs uppercase tracking-wider font-semibold rounded-md"
              >
                <Search className="w-4 h-4" />
                <span>Search Collections</span>
              </button>
              <p className="text-[11px] text-center text-[#8C827A] tracking-wider uppercase">
                Curated Luxury • Timeless Style
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Account Demo Modal */}
      {accountModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs">
          <div className="bg-[#F8F5F1] rounded-xl max-w-md w-full p-8 shadow-2xl border border-[#EEE7DF] relative">
            <button
              onClick={() => setAccountModalOpen(false)}
              className="absolute top-4 right-4 text-[#8C827A] hover:text-[#171615]"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="text-center mb-6">
              <h3 className="font-serif-luxury text-2xl font-semibold tracking-wide">
                LUNORA VIP Society
              </h3>
              <p className="text-xs text-[#736F6A] mt-1 tracking-wide">
                Welcome back to your curated boutique sanctuary.
              </p>
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAccountModalOpen(false);
                navigate('/shop');
              }}
              className="flex flex-col gap-4"
            >
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#544F49] mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="client@lunorafashion.com"
                  className="w-full px-4 py-2.5 bg-white border border-[#DDD4C7] rounded-md text-sm focus:outline-none focus:border-[#171615]"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#544F49] mb-1">
                  Password
                </label>
                <input
                  type="password"
                  defaultValue="••••••••••••"
                  className="w-full px-4 py-2.5 bg-white border border-[#DDD4C7] rounded-md text-sm focus:outline-none focus:border-[#171615]"
                />
              </div>
              <button
                type="submit"
                className="mt-2 w-full py-3 bg-[#171615] text-white text-xs uppercase tracking-widest font-semibold rounded-md hover:bg-black transition-all"
              >
                Sign In to VIP Account
              </button>
              <p className="text-[11px] text-center text-[#8C827A]">
                Demo client account. Instant access.
              </p>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
