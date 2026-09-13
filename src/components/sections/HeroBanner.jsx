'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Leaf, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroBanner({ onOrderClick }) {
  return (
    <section className="hero-banner-section">
      <div className="container">
        {/* Brand Logo Header */}
        <div className="hero-top-logo reveal-on-scroll reveal-fade">
          <div className="brand-logo-badge">
            <Leaf className="logo-icon" size={24} />
            <div>
              <div className="brand-title">SURMA VALLEY</div>
              <div className="brand-sub">Est. Sylhet Tea Estate</div>
            </div>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="hero-content-grid">
          <div className="hero-text-block reveal-on-scroll reveal-left delay-100">
            <h1 className="hero-main-title">
              এক্সপোর্ট কোয়ালিটি চা -{' '}
              <span className="highlight-word">খাঁটি ন্যাচারাল ফ্লেভার</span> ও দুর্দান্ত স্বাদ।
            </h1>

            <div className="hero-sub-pill">
              অরিজিনাল স্বাদের এক অনন্য ব্লেন্ড, যা দারুণ অনুভূতি দেয়
            </div>

            <div className="hero-cta-wrap">
              <button
                type="button"
                className="btn-primary btn-pulse"
                onClick={() => {
                  if (onOrderClick) {
                    onOrderClick();
                  } else {
                    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>অর্ডার করুন</span>
                <ArrowRight size={22} />
              </button>

              <div className="cta-subtext">
                <CheckCircle2 size={16} color="#16a34a" />
                <span>ক্যাশ অন ডেলিভারি সুবিধা | সারা দেশে হোম ডেলিভারি</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-card reveal-on-scroll reveal-right delay-200">
            <div className="image-wrapper animate-gentle-float">
              <img
                src="/images/surma-tea-box.jpg"
                alt="Surma Valley Export Quality Organic Tea Box"
              />
            </div>
            <div className="floating-badge-organic">
              <Sparkles size={16} color="#e5a93c" />
              <span>১০০% অর্গানিক পাতা</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
