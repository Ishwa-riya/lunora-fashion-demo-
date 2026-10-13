import React from 'react';
import { Hero } from '../components/Hero';
import { CategoryCircles } from '../components/CategoryCircles';
import { CollectionGrid } from '../components/CollectionGrid';
import { PromoBanners } from '../components/PromoBanners';
import { BestSellers } from '../components/BestSellers';
import { ServiceBenefits } from '../components/ServiceBenefits';
import { EditorialGallery } from '../components/EditorialGallery';
import { Newsletter } from '../components/Newsletter';

export const Home: React.FC = () => {
  return (
    <main className="flex-1 w-full overflow-hidden">
      {/* Editorial Split Hero Section */}
      <Hero />

      {/* Floating Category Navigation Pill */}
      <CategoryCircles />

      {/* Shop by Collection Grid */}
      <CollectionGrid />

      {/* Side-by-Side Promotional Banners */}
      <PromoBanners />

      {/* Best Sellers Picks */}
      <BestSellers />

      {/* Four Column Service Benefits Strip */}
      <ServiceBenefits />

      {/* The Lunora Journal / Visual Editorial Gallery */}
      <EditorialGallery />

      {/* Newsletter Style List Signup */}
      <Newsletter />
    </main>
  );
};
