export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'women' | 'men' | 'dresses' | 'tops' | 'shoes' | 'bags' | 'accessories' | 'sale';
  categoryLabel: string;
  image: string;
  secondaryImage?: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  description: string;
  details: string[];
  fabricCare: string[];
  sizes: string[];
  colors: { name: string; hex: string; image?: string }[];
  isNew?: boolean;
  isBestSeller?: boolean;
  discountBadge?: string;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface CategoryItem {
  id: string;
  name: string;
  slug: string;
  image: string;
  itemCount?: number;
  isSale?: boolean;
}

export interface CollectionCard {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  linkText: string;
}

export interface FilterState {
  category: string;
  priceRange: [number, number];
  sortBy: 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest';
  searchQuery: string;
  inStockOnly: boolean;
}

export interface ToastMessage {
  id: string;
  type: 'success' | 'info' | 'error';
  title: string;
  message: string;
}
