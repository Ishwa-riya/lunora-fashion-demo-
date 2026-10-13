import type { Product, CategoryItem, CollectionCard } from '../types';

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'women',
    name: 'Women',
    slug: 'women',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=400&q=80',
    itemCount: 42,
  },
  {
    id: 'men',
    name: 'Men',
    slug: 'men',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
    itemCount: 28,
  },
  {
    id: 'dresses',
    name: 'Dresses',
    slug: 'dresses',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=400&q=80',
    itemCount: 10,
  },
  {
    id: 'tops',
    name: 'Tops',
    slug: 'tops',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    itemCount: 24,
  },
  {
    id: 'shoes',
    name: 'Shoes',
    slug: 'shoes',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=400&q=80',
    itemCount: 19,
  },
  {
    id: 'bags',
    name: 'Bags',
    slug: 'bags',
    image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=400&q=80',
    itemCount: 16,
  },
  {
    id: 'accessories',
    name: 'Accessories',
    slug: 'accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=400&q=80',
    itemCount: 22,
  },
  {
    id: 'sale',
    name: 'Sale',
    slug: 'sale',
    image: '',
    isSale: true,
    itemCount: 15,
  },
];

export const COLLECTIONS: CollectionCard[] = [
  {
    id: 'women-col',
    title: "Women's Collection",
    subtitle: 'Effortless Tailoring & Silks',
    category: 'women',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=800&q=80',
    linkText: 'Explore Now',
  },
  {
    id: 'men-col',
    title: "Men's Collection",
    subtitle: 'Understated Modern Essentials',
    category: 'men',
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=800&q=80',
    linkText: 'Explore Now',
  },
  {
    id: 'dresses-col',
    title: 'Dresses',
    subtitle: 'From Daywear to Evening Silhouettes',
    category: 'dresses',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80',
    linkText: 'Explore Now',
  },
  {
    id: 'accessories-col',
    title: 'Accessories',
    subtitle: 'Fine Leather & Architectural Accents',
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80',
    linkText: 'Explore Now',
  },
];

export const PRODUCTS: Product[] = [
  // 1. Linen Blend Blazer (Best Seller)
  {
    id: 'linen-blend-blazer',
    name: 'Linen Blend Blazer',
    price: 89.99,
    originalPrice: 120.00,
    category: 'women',
    categoryLabel: "Women's Outerwear",
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 124,
    description: 'An unstructured tailored blazer crafted from breathable French linen blend. Cut for a relaxed silhouette with notched lapels and tortoiseshell buttons.',
    details: [
      'Tailored single-breasted construction',
      'Dual front flap pockets and interior chest slip',
      'Lightly padded natural shoulders',
      'Unlined body for breathable draping',
    ],
    fabricCare: [
      '55% French Linen, 45% Organic Cotton',
      'Dry clean or hand wash cold inside out',
      'Iron low with pressing cloth',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Oatmeal Beige',
        hex: '#D7CEBE',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Warm Cream',
        hex: '#F3EFE7',
        image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Pitch Black',
        hex: '#1C1B1A',
        image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    isNew: true,
    inStock: true,
  },

  // 2. Ribbed Knit Top (Best Seller)
  {
    id: 'ribbed-knit-top',
    name: 'Ribbed Knit Top',
    price: 29.99,
    category: 'tops',
    categoryLabel: 'Tops & Knits',
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.9,
    reviewCount: 98,
    description: 'A second-skin sculpted ribbed top designed with an open ballet neckline and gentle compression. The ultimate elevated foundation piece.',
    details: [
      'Fine ribbed micro-gauge knit',
      'Flattering scooped neckline',
      'Elongated short sleeves',
      'Stay-tuck hemline',
    ],
    fabricCare: [
      '92% Micro-Modal, 8% Elastane',
      'Machine wash cold on gentle cycle',
      'Dry flat in shade',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Noir Black',
        hex: '#171615',
        image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Alabaster White',
        hex: '#F9F8F6',
        image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Muted Taupe',
        hex: '#9E9284',
        image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // 3. Wide Leg Trousers (Best Seller)
  {
    id: 'wide-leg-trousers',
    name: 'Wide Leg Trousers',
    price: 59.99,
    originalPrice: 75.00,
    category: 'women',
    categoryLabel: 'Pants & Tailoring',
    image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.7,
    reviewCount: 76,
    description: 'High-waisted tailored trousers featuring sharp front pleats and a sweeping wide-leg profile. Fluid drape in high-density neutral twill.',
    details: [
      'High-rise waist with concealed zip fly',
      'Deep functional slant pockets',
      'Pressed fluid leg crease',
      'Subtle elasticated rear waistband comfort insert',
    ],
    fabricCare: [
      '70% Tencel Lyocell, 30% Linen',
      'Gentle machine wash inside laundry bag',
      'Steam iron for optimal drape',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Pecan Sand',
        hex: '#E2D7C8',
        image: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Ivory Cream',
        hex: '#F7F4EC',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Espresso',
        hex: '#312925',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // 4. Leather Shoulder Bag (Best Seller)
  {
    id: 'leather-shoulder-bag',
    name: 'Leather Shoulder Bag',
    price: 79.99,
    category: 'bags',
    categoryLabel: 'Luxury Bags',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 5.0,
    reviewCount: 112,
    description: 'Sculpted from supple full-grain Italian leather with polished champagne gold hardware. Includes both an adjustable shoulder strap and leather top handles.',
    details: [
      'Full-grain pebble textured calfskin',
      'Secure zip closure with magnetic front flap',
      'Suede-lined interior with card organizer & key clip',
      'Protective metal feet at base',
    ],
    fabricCare: [
      '100% Genuine Full-Grain Leather',
      'Store in provided cotton dust bag',
      'Condition periodically with leather balm',
    ],
    sizes: ['One Size'],
    colors: [
      {
        name: 'Cognac Saddle',
        hex: '#9E5B32',
        image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Beige Chiffon',
        hex: '#E7DFD3',
        image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Black Caviar',
        hex: '#1C1B1A',
        image: 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    isNew: true,
    inStock: true,
  },

  // 5. Minimal Strappy Heels (Best Seller)
  {
    id: 'minimal-strappy-heels',
    name: 'Minimal Strappy Heels',
    price: 49.99,
    originalPrice: 65.00,
    category: 'shoes',
    categoryLabel: 'Footwear',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 84,
    description: 'Architectural barely-there leather sandals set on a walkable 65mm stiletto heel. Delicate ankle wrap straps with delicate gold buckle.',
    details: [
      'Soft nappa tubular straps',
      'Cushioned memory foam footbed',
      '65mm (2.5") kitten-stiletto heel',
      'Non-slip textured rubberized heel tip',
    ],
    fabricCare: [
      'Nappa Lambskin Leather upper & insole',
      'Wipe clean with damp cloth',
      'Avoid prolonged water exposure',
    ],
    sizes: ['EU 36', 'EU 37', 'EU 38', 'EU 39', 'EU 40'],
    colors: [
      {
        name: 'Obsidian Black',
        hex: '#151413',
        image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Nude Sand',
        hex: '#DFD3C3',
        image: 'https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // 6. Oversized Sunglasses (Best Seller)
  {
    id: 'oversized-sunglasses',
    name: 'Oversized Sunglasses',
    price: 19.99,
    category: 'accessories',
    categoryLabel: 'Eyewear & Accessories',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.6,
    reviewCount: 53,
    description: 'Statement oversized square frames crafted from hand-polished bio-acetate. Features category 3 UV400 polarized dark smoke lenses.',
    details: [
      '100% UV400 Protection (UVA & UVB)',
      'Scratch-resistant polarized lenses',
      'Five-barrel reinforced metal hinges',
      'Includes faux-leather collapsible case and cloth',
    ],
    fabricCare: [
      'Eco-friendly hand-finished bio-acetate',
      'Clean lenses with microfiber cloth only',
    ],
    sizes: ['One Size (54-19-145)'],
    colors: [
      {
        name: 'Tortoise Havana',
        hex: '#523E2A',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Pitch Black',
        hex: '#161514',
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Smoked Honey',
        hex: '#B59B6C',
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // ==================== 10 LUXURY DRESSES ====================

  // DRESS 1: Silk Slip Evening Dress
  {
    id: 'silk-slip-evening-dress',
    name: 'Silk Slip Evening Dress',
    price: 94.99,
    category: 'dresses',
    categoryLabel: 'Evening Dresses',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.9,
    reviewCount: 89,
    description: 'Bias-cut midi dress tailored from weighted mulberry silk-satin. Drapes gracefully around natural curves with an elegant cowl neckline and subtle side split.',
    details: [
      'Bias cut for natural forgiving stretch',
      'Subtle cowl neckline',
      'Adjustable micro shoulder straps',
      'Midi length with 12" side slit',
    ],
    fabricCare: [
      '100% Silk-Touch Satin',
      'Hand wash cold or dry clean',
      'Steam iron to restore sheen',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Onyx Black',
        hex: '#121110',
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Champagne Pearl',
        hex: '#EEE4D3',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Terracotta Rust',
        hex: '#974C37',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // DRESS 2: Pleated Satin Midi Dress
  {
    id: 'pleated-satin-midi-dress',
    name: 'Pleated Satin Midi Dress',
    price: 109.99,
    originalPrice: 145.00,
    category: 'dresses',
    categoryLabel: 'Pleated Dresses',
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 42,
    description: 'Sunburst pleated midi dress with high neck halter tie and flowing A-line hem. Moves with radiant architectural rhythm in liquid satin.',
    details: [
      'Fine accordion sunburst pleating',
      'High jewel neckline with delicate nape tie',
      'Includes detachable tonal waist tie belt',
      'Fully lined in breathable cupro',
    ],
    fabricCare: [
      '100% Hammered Satin Crepe',
      'Professional dry clean only to maintain pleats',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Desert Taupe',
        hex: '#D2C6B6',
        image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Emerald Olive',
        hex: '#3D5239',
        image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Noir Black',
        hex: '#161514',
        image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isNew: true,
    inStock: true,
  },

  // DRESS 3: Linen Halter Wrap Dress
  {
    id: 'linen-halter-wrap-dress',
    name: 'Linen Halter Wrap Dress',
    price: 84.99,
    category: 'dresses',
    categoryLabel: 'Summer Linens',
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.9,
    reviewCount: 65,
    description: 'An airy wrap silhouette cut from pre-washed European flax. Features asymmetric wrap fastening, self-tie sash waist, and clean tailored edges.',
    details: [
      'True wrap construction with inner anchor button',
      'Sculpted halter neckline',
      'Soft enzyme washed French linen',
      'Ankle grazing tiered hem',
    ],
    fabricCare: [
      '100% European Flax Linen',
      'Machine wash gentle cold, hang to dry in shade',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Oatmeal Beige',
        hex: '#E0D6C6',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Crisp White',
        hex: '#FAF9F6',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Terracotta Clay',
        hex: '#A05941',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // DRESS 4: Ribbed Knit Column Dress
  {
    id: 'ribbed-knit-column-dress',
    name: 'Ribbed Knit Column Dress',
    price: 74.99,
    category: 'dresses',
    categoryLabel: 'Knit Dresses',
    image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.7,
    reviewCount: 54,
    description: 'Sculpting heavy-gauge ribbed column dress with square neckline and sleeveless cut. Hugs the silhouette without restricting movement.',
    details: [
      'Weighted high-recovery ribbed knit',
      'Flattering architectural square neckline',
      'Column length with discreet walking slit',
      'Unlined with zero transparency',
    ],
    fabricCare: [
      '80% Viscose, 20% Nylon',
      'Hand wash cold or gentle machine wash inside mesh bag',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Pitch Black',
        hex: '#181716',
        image: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Cocoa Brown',
        hex: '#5C4436',
        image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Alabaster Cream',
        hex: '#F4EFE6',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      },
    ],
    inStock: true,
  },

  // DRESS 5: Structured Blazer Dress
  {
    id: 'structured-blazer-dress',
    name: 'Structured Blazer Dress',
    price: 114.99,
    originalPrice: 140.00,
    category: 'dresses',
    categoryLabel: 'Tailored Dresses',
    image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.9,
    reviewCount: 37,
    description: 'Double-breasted tailored tuxedo mini dress with satin peaked lapels, structured shoulder padding, and covered button closures.',
    details: [
      'Double breasted silhouette with covered buttons',
      'Satin peak lapel accents',
      'Full interior stretch silk lining',
      'Flap welt front pockets',
    ],
    fabricCare: [
      '72% Polyester, 23% Rayon, 5% Spandex',
      'Dry clean only',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Warm Ivory',
        hex: '#FAF6EF',
        image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Midnight Noir',
        hex: '#141312',
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Camel Tan',
        hex: '#C5A376',
        image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isNew: true,
    inStock: true,
  },

  // DRESS 6: Backless Satin Maxi Dress
  {
    id: 'backless-satin-maxi-dress',
    name: 'Backless Satin Maxi Dress',
    price: 129.99,
    category: 'dresses',
    categoryLabel: 'Occasion Dresses',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 49,
    description: 'Drama meets minimalist purity. Deep scoop back with cross-tie ribbons, fluid pooling maxi skirt, and luminous satin drape.',
    details: [
      'Low open back with delicate crossover ties',
      'Floor grazing bias-cut maxi hem',
      'Double-layered bust for support without bra',
      'Concealed invisible zip closure',
    ],
    fabricCare: [
      '100% Rayon Satin',
      'Delicate hand wash cold or eco dry clean',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Champagne Gold',
        hex: '#E8D4A8',
        image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Rose Dust',
        hex: '#D9B4A7',
        image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Obsidian Black',
        hex: '#11100F',
        image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // DRESS 7: Tiered Bohemian Cotton Dress
  {
    id: 'tiered-boho-cotton-dress',
    name: 'Tiered Organic Voile Dress',
    price: 79.99,
    category: 'dresses',
    categoryLabel: 'Day Dresses',
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.7,
    reviewCount: 28,
    description: 'Romantic tiered volume in featherlight organic cotton voile. Voluminous blouson sleeves, pin-tucked bodice, and shell button front.',
    details: [
      '100% GOTS Certified Organic Cotton Voile',
      'Pintuck detailing across chest yoke',
      'Raglan sleeves with elasticated ruffled cuffs',
      'Separate slip lining included',
    ],
    fabricCare: [
      '100% Organic Cotton',
      'Machine wash gentle in cold water, line dry',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: [
      {
        name: 'Bone White',
        hex: '#FAF7F0',
        image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Sage Olive',
        hex: '#7A8470',
        image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Sand Khaki',
        hex: '#D7CBBA',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      },
    ],
    inStock: true,
  },

  // DRESS 8: Minimalist Cowl Neck Dress
  {
    id: 'minimalist-cowl-neck-dress',
    name: 'Minimalist Cowl Neck Dress',
    price: 89.99,
    originalPrice: 110.00,
    category: 'dresses',
    categoryLabel: 'Slip Dresses',
    image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 51,
    description: 'An understated 90s-inspired cowl neck slip dress tailored in matte wash twill. Straight column drop with delicate racerback straps.',
    details: [
      'Soft cowl draped front',
      'Delicate micro strap adjustment',
      'Matte finish with zero cling',
      'Ankle length side walking slit',
    ],
    fabricCare: [
      '100% Cupro Rayon',
      'Dry clean or cold hand wash',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Classic Black',
        hex: '#161514',
        image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Pearl Ivory',
        hex: '#F5EFE6',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Slate Grey',
        hex: '#7B7C80',
        image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=900&q=80',
      },
    ],
    inStock: true,
  },

  // DRESS 9: Asymmetric Draped Cocktail Dress
  {
    id: 'asymmetric-draped-cocktail-dress',
    name: 'Asymmetric Draped Dress',
    price: 119.99,
    category: 'dresses',
    categoryLabel: 'Cocktail Dresses',
    image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.9,
    reviewCount: 34,
    description: 'Sculptural one-shoulder dress with gathers along the hip that drape into a waterfall side cascade. Tailored in weighted crepe stretch.',
    details: [
      'One shoulder asymmetric neckline',
      'Gathered side ruching with cascade drape',
      'Knee-skimming modern length',
      'Concealed side zipper',
    ],
    fabricCare: [
      '68% Acetate, 32% Viscose',
      'Dry clean only',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Midnight Navy',
        hex: '#1B2432',
        image: 'https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Espresso',
        hex: '#3D312A',
        image: 'https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Pure White',
        hex: '#FFFFFF',
        image: 'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isNew: true,
    inStock: true,
  },

  // DRESS 10: Off-Shoulder Crepe Shift Dress
  {
    id: 'off-shoulder-crepe-shift-dress',
    name: 'Off-Shoulder Crepe Shift Dress',
    price: 99.99,
    category: 'dresses',
    categoryLabel: 'Shift Dresses',
    image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 46,
    description: 'Architectural foldover off-shoulder neckline paired with a relaxed shift silhouette. Effortlessly elegant for gallery openings and dinner parties.',
    details: [
      'Wide foldover bardot collar with internal grip elastic',
      'A-line straight shift silhouette',
      'Side seam discreet pockets',
      'Mid-thigh length with rolled hem',
    ],
    fabricCare: [
      '95% Crepe Poly, 5% Elastane',
      'Hand wash cold or gentle cycle inside out',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Monochrome Black',
        hex: '#141312',
        image: 'https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Almond Cream',
        hex: '#F5EBE1',
        image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Blush Rose',
        hex: '#E4BDB2',
        image: 'https://images.unsplash.com/photo-1518049362265-d5b2a6467637?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isBestSeller: true,
    inStock: true,
  },

  // ==================== OTHER KEY CATEGORIES ====================

  // Men Suede Jacket
  {
    id: 'suede-overshirt-jacket',
    name: 'Suede Overshirt Jacket',
    price: 119.99,
    originalPrice: 149.99,
    category: 'men',
    categoryLabel: "Men's Outerwear",
    image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1488161628813-04466f872be2?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 41,
    description: 'A versatile utility-inspired overshirt in buttery soft faux-suede. Features matte horn buttons, double flap chest pockets, and a classic point collar.',
    details: [
      'Ultra-soft brushed micro-suede texture',
      'Dual chest button pockets',
      'Curved shirt hem',
      'Breathable satin sleeve lining for easy layering',
    ],
    fabricCare: [
      'Micro-suede poly blend',
      'Professional suede clean or cold gentle hand wash',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Caramel Suede',
        hex: '#946644',
        image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Olive Taupe',
        hex: '#636253',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Midnight Charcoal',
        hex: '#2A2928',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isNew: true,
    inStock: true,
  },

  // Men Merino Polo
  {
    id: 'merino-knit-polo',
    name: 'Fine Merino Knit Polo',
    price: 64.99,
    category: 'men',
    categoryLabel: "Men's Knits",
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 29,
    description: 'Spun from extra-fine 19.5-micron Australian Merino wool with natural thermoregulating performance. Johnny collar with seamless rib detailing.',
    details: [
      '100% Extra-Fine Merino Wool',
      'Placketless Johnny collar design',
      'Fine 14-gauge soft knit structure',
      'Naturally odor-resistant and breathable',
    ],
    fabricCare: [
      'Hand wash cold with wool detergent',
      'Reshape and dry flat',
    ],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      {
        name: 'Taupe Melange',
        hex: '#877F76',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Ivory Bone',
        hex: '#ECE8DF',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Deep Espresso',
        hex: '#2A2522',
        image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isNew: true,
    inStock: true,
  },

  // Women Cashmere Coat
  {
    id: 'cashmere-wrap-coat',
    name: 'Belted Cashmere Wrap Coat',
    price: 189.99,
    originalPrice: 249.99,
    category: 'women',
    categoryLabel: "Women's Outerwear",
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.9,
    reviewCount: 43,
    description: 'An iconic wrap silhouette tailored in double-faced Italian cashmere blend. Unlined for natural mobility with wide notch lapels and removable tie belt.',
    details: [
      'Double-faced virgin wool and cashmere',
      'Self-fabric sash belt with belt loops',
      'Deep side seam slip pockets',
      'Clean hand-finished edges',
    ],
    fabricCare: [
      '90% Virgin Wool, 10% Cashmere',
      'Specialist dry clean only',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Camel Sand',
        hex: '#C19A6B',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Midnight Charcoal',
        hex: '#262423',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
      },
    ],
    isNew: true,
    inStock: true,
  },

  // Trench Coat (Sale)
  {
    id: 'pleated-crepe-trench-coat',
    name: 'Pleated Crepe Trench Coat',
    price: 139.99,
    originalPrice: 199.99,
    category: 'sale',
    categoryLabel: 'Spring Sale',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.8,
    reviewCount: 47,
    discountBadge: '30% OFF',
    description: 'Modern reinterpretation of the heritage trench. Soft fluid drape with storm flap back, wide waist belt, and cuff tabs in water-resistant technical twill.',
    details: [
      'Double breasted with horn button front',
      'Detachable sash tie belt with tortoiseshell buckle',
      'Deep welt storm pockets',
      'Signature storm shield back flap',
    ],
    fabricCare: [
      'Technical Rayon-Cotton Blend',
      'Spot clean with damp cloth or professional dry clean',
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      {
        name: 'Trench Sand',
        hex: '#D8CCA6',
        image: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Warm Cream',
        hex: '#F0ECE4',
        image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80',
      },
    ],
    inStock: true,
  },

  // Gold Cuff Bracelet
  {
    id: 'sculpted-gold-cuff-bracelet',
    name: 'Sculpted Gold Cuff Bracelet',
    price: 34.99,
    category: 'accessories',
    categoryLabel: 'Fine Jewelry',
    image: 'https://images.unsplash.com/photo-1611591475816-7994646738df?auto=format&fit=crop&w=900&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611591475816-7994646738df?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=80',
    ],
    rating: 4.7,
    reviewCount: 38,
    description: 'An organic, undulating open cuff plated in rich 18-karat champagne gold. Designed to catch light with molten metallic curves.',
    details: [
      '18k Champagne Gold heavy plating over brass',
      'Hypoallergenic, nickel & lead free',
      'Gently malleable for custom wrist fit',
      'Anti-tarnish protective e-coating',
    ],
    fabricCare: [
      'Avoid direct contact with perfumes and lotions',
      'Polish with jewelry microfiber cloth',
    ],
    sizes: ['One Size (Adjustable)'],
    colors: [
      {
        name: '18k Champagne Gold',
        hex: '#E5C478',
        image: 'https://images.unsplash.com/photo-1611591475816-7994646738df?auto=format&fit=crop&w=900&q=80',
      },
      {
        name: 'Silver Rhodium',
        hex: '#D5D7DA',
        image: 'https://images.unsplash.com/photo-1600003014755-ba31aa59c4b6?auto=format&fit=crop&w=900&q=80',
      },
    ],
    inStock: true,
  },
];
