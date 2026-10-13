import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopProvider } from './context/ShopContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';
import { ProductDetail } from './pages/ProductDetail';
import { CartDrawer } from './components/CartDrawer';
import { WishlistDrawer } from './components/WishlistDrawer';
import { SearchModal } from './components/SearchModal';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { LookbookModal } from './components/LookbookModal';
import { CheckoutModal } from './components/CheckoutModal';
import { ToastContainer } from './components/Toast';

// Auto-scroll to top on navigation change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const App: React.FC = () => {
  return (
    <ShopProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F8F5F1] text-[#171615]">
          {/* Header & Navigation */}
          <Navbar />

          {/* Main Content Pages */}
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>

          {/* Dark Luxury Footer */}
          <Footer />

          {/* Interactive Modals & Slide Drawers */}
          <CartDrawer />
          <WishlistDrawer />
          <SearchModal />
          <ProductQuickViewModal />
          <LookbookModal />
          <CheckoutModal />
          <ToastContainer />
        </div>
      </BrowserRouter>
    </ShopProvider>
  );
};

export default App;
