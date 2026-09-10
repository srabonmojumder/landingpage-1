'use client';

import React, { useState } from 'react';
import HeaderBar from '@/components/layout/HeaderBar';
import HeroBanner from '@/components/sections/HeroBanner';
import ExperienceMetrics from '@/components/sections/ExperienceMetrics';
import TargetAudience from '@/components/sections/TargetAudience';
import ProductShowcase from '@/components/sections/ProductShowcase';
import TeaBenefits from '@/components/sections/TeaBenefits';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import OrderForm from '@/components/sections/OrderForm';
import Footer from '@/components/layout/Footer';
import FloatingCTA from '@/components/layout/FloatingCTA';

export default function LandingPage() {
  const [selectedProductBlend, setSelectedProductBlend] = useState('single');

  const scrollToOrder = () => {
    const el = document.getElementById('order-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="landing-page-root">
      {/* Top Notice Bar */}
      <HeaderBar />

      {/* Hero Section */}
      <HeroBanner onOrderClick={scrollToOrder} />

      {/* Experience Metrics Bar (Water, Temp, Leaves, Min) */}
      <ExperienceMetrics />

      {/* Target Audience (এই চা কাদের জন্য) */}
      <TargetAudience />

      {/* Product Packaging Showcase (3 Pouches + Blends) */}
      <ProductShowcase onSelectProduct={(blend) => setSelectedProductBlend(blend)} />

      {/* Tea Benefits (আসুন চায়ের নির্যাস উপভোগ করি) */}
      <TeaBenefits />

      {/* Why Choose Us (আমাদের কাছ থেকে কেন নিবেন) */}
      <WhyChooseUs />

      {/* Checkout / Order Form */}
      <OrderForm selectedProductBlend={selectedProductBlend} />

      {/* Footer */}
      <Footer />

      {/* Sticky Floating CTA for mobile / quick access */}
      <FloatingCTA
        onOrderClick={scrollToOrder}
        selectedPackage={{ title: 'সুরমা ভ্যালি প্রিমিয়াম চা', price: 450 }}
      />
    </main>
  );
}
