import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Plus, Minus, ChevronDown, ChevronUp } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useShop } from '../context/ShopContext';
import { ProductCard } from '../components/ProductCard';

export const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart, isInWishlist, toggleWishlist } = useShop();

  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Standard');
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>(product.image);
  const [activeTab, setActiveTab] = useState<'details' | 'care' | 'shipping'>('details');

  const isFavorited = isInWishlist(product.id);

  // Recommendations: exclude current product
  const recommendations = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#F8F5F1] py-8 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs text-[#8C827A] mb-8">
          <Link to="/" className="hover:text-[#171615] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link to="/shop" className="hover:text-[#171615] transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-[#171615] font-medium truncate">{product.name}</span>
        </div>

        {/* Product Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-20">
          {/* Left Column: Image Gallery (Cols 1-7) */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="flex md:flex-col gap-3 overflow-x-auto shrink-0 no-scrollbar py-1">
                {product.gallery.map((imgUrl, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(imgUrl)}
                    className={`relative w-20 h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === imgUrl ? 'border-[#171615] scale-102 shadow-xs' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={imgUrl} alt={`${product.name} shot ${idx + 1}`} className="w-full h-full object-cover" />
                    <span className="absolute bottom-1 right-1 text-[9px] bg-black/60 text-white px-1.5 py-0.5 rounded-xs font-mono">
                      0{idx + 1}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Main Stage Image with overlay indicators */}
            <div className="relative flex-1 rounded-2xl md:rounded-3xl overflow-hidden bg-[#EEE7DF] border border-[#E7DFD4] aspect-[4/5] max-h-[700px] shadow-sm group">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-all duration-500 ease-out"
              />
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-xs px-3 py-1 rounded-full text-[11px] font-mono font-medium text-[#171615] shadow-xs">
                {product.gallery?.indexOf(activeImage) !== -1 ? product.gallery?.indexOf(activeImage)! + 1 : 1} / {product.gallery?.length || 1}
              </div>
            </div>
          </div>

          {/* Right Column: Information & Add to Bag (Cols 8-12) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#736F6A] block mb-2">
              {product.categoryLabel}
            </span>

            <h1 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-[#171615] leading-tight mb-3">
              {product.name}
            </h1>

            {/* Price & Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-semibold text-[#171615]">
                  ${product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <span className="text-base text-[#9E9891] line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 pl-4 border-l border-[#DDD4C7]">
                <div className="flex items-center text-[#B58E58]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3.5 h-3.5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-[#B58E58] text-[#B58E58]'
                          : 'text-[#D0C7BC]'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-[#736F6A] font-medium">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <p className="text-sm md:text-base text-[#5D5852] leading-relaxed font-light mb-8">
              {product.description}
            </p>

            {/* Color Swatches */}
            {product.colors.length > 0 && (
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#171615] block mb-2.5">
                  Color: <span className="font-normal text-[#736F6A]">{selectedColor}</span>
                </span>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => {
                        setSelectedColor(c.name);
                        if (c.image) {
                          setActiveImage(c.image);
                        }
                      }}
                      className={`w-9 h-9 rounded-full p-0.5 border-2 transition-all cursor-pointer ${
                        selectedColor === c.name ? 'border-[#171615] scale-110 shadow-md ring-2 ring-[#C4A482]/40' : 'border-transparent opacity-80 hover:opacity-100 hover:scale-105'
                      }`}
                      title={`Change dress color to ${c.name}`}
                    >
                      <div
                        className="w-full h-full rounded-full border border-black/15 shadow-inner"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Sizes */}
            {product.sizes.length > 0 && (
              <div className="mb-8">
                <div className="flex justify-between items-center text-xs mb-2.5">
                  <span className="font-semibold text-[#171615] uppercase tracking-wider">
                    Select Size
                  </span>
                  <button className="text-[#736F6A] underline hover:text-[#171615]">
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      onClick={() => setSelectedSize(s)}
                      className={`px-4 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all ${
                        selectedSize === s
                          ? 'bg-[#171615] text-[#F8F5F1] shadow-xs'
                          : 'bg-white border border-[#DDD4C7] text-[#171615] hover:border-[#171615]'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Purchase CTA Controls */}
            <div className="flex items-center gap-3 mb-8">
              {/* Quantity */}
              <div className="flex items-center border border-[#DDD4C7] rounded-xl bg-white p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-[#544F49] hover:text-[#171615]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-9 text-center text-xs font-semibold text-[#171615]">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-[#544F49] hover:text-[#171615]"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Add to Bag */}
              <button
                onClick={() => addToCart(product, selectedSize, selectedColor, quantity)}
                className="flex-1 py-4 bg-[#171615] text-[#F8F5F1] text-xs uppercase tracking-[0.18em] font-semibold rounded-full hover:bg-black transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag — ${(product.price * quantity).toFixed(2)}</span>
              </button>

              {/* Wishlist */}
              <button
                onClick={() => toggleWishlist(product)}
                className={`p-4 rounded-full border transition-all ${
                  isFavorited
                    ? 'border-[#171615] bg-[#171615] text-white shadow-xs'
                    : 'border-[#DDD4C7] bg-white text-[#171615] hover:border-[#171615]'
                }`}
                aria-label="Wishlist"
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-white' : ''}`} />
              </button>
            </div>

            {/* Tabbed Product Details Accordion */}
            <div className="border-t border-[#E8E1D7] pt-4 flex flex-col divide-y divide-[#E8E1D7]">
              {/* Details & Fit */}
              <div className="py-4">
                <button
                  onClick={() => setActiveTab(activeTab === 'details' ? ('' as any) : 'details')}
                  className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#171615]"
                >
                  <span>Details & Silhouette</span>
                  {activeTab === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'details' && (
                  <ul className="mt-3 flex flex-col gap-2 text-xs text-[#5D5852] pl-4 list-disc">
                    {product.details.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Fabric & Care */}
              <div className="py-4">
                <button
                  onClick={() => setActiveTab(activeTab === 'care' ? ('' as any) : 'care')}
                  className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#171615]"
                >
                  <span>Fabric & Conscious Care</span>
                  {activeTab === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'care' && (
                  <ul className="mt-3 flex flex-col gap-2 text-xs text-[#5D5852] pl-4 list-disc">
                    {product.fabricCare.map((fc, i) => (
                      <li key={i}>{fc}</li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Shipping & Returns */}
              <div className="py-4">
                <button
                  onClick={() => setActiveTab(activeTab === 'shipping' ? ('' as any) : 'shipping')}
                  className="w-full flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#171615]"
                >
                  <span>Complimentary Shipping & 30-Day Returns</span>
                  {activeTab === 'shipping' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                {activeTab === 'shipping' && (
                  <div className="mt-3 text-xs text-[#5D5852] space-y-2">
                    <p>• Complimentary express shipping automatically applied on orders exceeding $99.</p>
                    <p>• Hassle-free 30-day return policy in original unworn boutique condition.</p>
                    <p>• Luxury signature packaging and dust bag included with every dispatch.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Complete The Look Section */}
        <div className="pt-16 border-t border-[#E8E1D7]">
          <div className="text-center mb-10">
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-[#736F6A] block mb-2">
              CURATED ENSEMBLE
            </span>
            <h2 className="font-serif-luxury text-3xl md:text-4xl font-normal text-[#171615]">
              You May Also Love
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {recommendations.map((rec) => (
              <ProductCard key={rec.id} product={rec} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
