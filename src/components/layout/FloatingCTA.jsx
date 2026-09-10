'use client';

import React, { useState, useEffect } from 'react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export default function FloatingCTA({ onOrderClick, selectedPackage }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled down past hero
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="floating-sticky-bar">
      <div className="sticky-left-info">
        <span className="sticky-price">৳{selectedPackage?.price || 450}</span>
        <span className="sticky-label">{selectedPackage?.title || 'সুরমা ভ্যালি চা'}</span>
      </div>
      <button
        type="button"
        className="sticky-btn"
        onClick={() => {
          if (onOrderClick) {
            onOrderClick();
          } else {
            document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <ShoppingBag size={18} />
        <span>অর্ডার করুন</span>
        <ArrowRight size={16} />
      </button>
    </div>
  );
}
