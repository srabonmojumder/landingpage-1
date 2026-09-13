'use client';

import React, { useState } from 'react';
import { ShoppingBag, Star, Award, Check } from 'lucide-react';

export default function ProductShowcase({ onSelectProduct }) {
  const [activeTab, setActiveTab] = useState('all');

  const products = [
    {
      id: 'gold',
      title: 'সুরমা ভ্যালি আসাম গোল্ড ব্লেন্ড',
      subtitle: 'Assam Gold Blend (100g)',
      badge: 'রিচ লিকার ও কড়া স্বাদ',
      desc: 'সিলেট ও আসাম সীমান্তের সেরা টি টি গার্ডেনের কচি পাতার শক্তিশালী লিকার ও গোল্ডেন টিপসের নিখুঁত মেলবন্ধন। প্রতিদিনের সকালের জন্য আদর্শ।',
      image: '/images/tea-pouch-gold.jpg',
      aroma: 'গাঢ় ও সোনালী লিকার',
      caffeine: 'মাঝারি থেকে কড়া',
      origin: 'শ্রীমঙ্গল, সিলেট',
      grade: 'FTGFOP-1 (Special Reserve)',
    },
    {
      id: 'crimson',
      title: 'সুরমা ভ্যালি দার্জিলিং ফার্স্ট ফ্লাশ',
      subtitle: 'Darjeeling First Flush (250g)',
      badge: 'সুগন্ধি ফ্লোরাল নোটস',
      desc: 'হালকা মিষ্টি ফ্লেভার এবং মিষ্টি সুবাসযুক্ত এক্সপোর্ট কোয়ালিটি পাতা। এটি মনকে নিমিষেই সতেজ ও প্রফুল্ল করে তোলে।',
      image: '/images/tea-pouch-crimson.jpg',
      aroma: 'মিষ্টি ফুলের সুবাস ও হালকা সোনালী',
      caffeine: 'হালকা ও স্নিগ্ধ',
      origin: 'সুরমা ভ্যালি স্পেশাল গার্ডেন',
      grade: 'First Flush Pure Whole Leaf',
    },
    {
      id: 'emerald',
      title: 'সুরমা ভ্যালি অর্গানিক গ্রিন টি',
      subtitle: 'Organic Green Tea (100g)',
      badge: '১০০% অ্যান্টিঅক্সিডেন্ট ও ডিটক্স',
      desc: 'হাতে বাছাই করা কচি দুই পাতা এক কুঁড়ি থেকে তৈরি বিশুদ্ধ গ্রিন টি। কোনো প্রকার প্রিজারভেটিভ ছাড়া সম্পূর্ণ ন্যাচারাল।',
      image: '/images/tea-pouch-emerald.jpg',
      aroma: 'তাজা ভেষজ সুবাস ও মিষ্টি গ্রিন আফটারটেস্ট',
      caffeine: 'খুবই কম (Low)',
      origin: 'সিলেটের অর্গানিক ভ্যালি',
      grade: 'Hand-Picked Loose Leaf',
    },
  ];

  const handleOrderClick = () => {
    if (onSelectProduct) {
      onSelectProduct(activeTab === 'all' ? 'gold' : activeTab);
    }
    document.getElementById('order-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const selectedProduct = products.find((p) => p.id === activeTab);

  return (
    <section className="product-showcase-section">
      <div className="container">
        <div className="showcase-container">
          {/* Blend Navigation Tabs */}
          <div className="blend-tabs-wrap reveal-on-scroll reveal-fade">
            <button
              type="button"
              className={`blend-tab-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              সবগুলো প্যাকেট (All Blends)
            </button>
            <button
              type="button"
              className={`blend-tab-btn ${activeTab === 'gold' ? 'active' : ''}`}
              onClick={() => setActiveTab('gold')}
            >
              গোল্ড ব্লেন্ড
            </button>
            <button
              type="button"
              className={`blend-tab-btn ${activeTab === 'crimson' ? 'active' : ''}`}
              onClick={() => setActiveTab('crimson')}
            >
              ফার্স্ট ফ্লাশ প্রিমিয়াম
            </button>
            <button
              type="button"
              className={`blend-tab-btn ${activeTab === 'emerald' ? 'active' : ''}`}
              onClick={() => setActiveTab('emerald')}
            >
              অর্গানিক গ্রিন টি
            </button>
          </div>

          {/* Main Display Card */}
          <div className="gallery-main-card reveal-on-scroll delay-100">
            {activeTab === 'all' ? (
              <div key="all" className="trio-display-wrap animate-tab-fade">
                <img
                  src="/images/tea-pouches-trio.jpg"
                  alt="Surma Valley Tea Pouches Trio Collection"
                />
              </div>
            ) : (
              selectedProduct && (
                <div key={activeTab} className="single-product-grid animate-tab-fade">
                  <div className="pouch-img-wrap">
                    <img src={selectedProduct.image} alt={selectedProduct.title} />
                  </div>
                  <div className="pouch-details">
                    <span className="blend-badge">{selectedProduct.badge}</span>
                    <h3 className="pouch-title">{selectedProduct.title}</h3>
                    <p className="pouch-desc">{selectedProduct.desc}</p>

                    <div className="tasting-specs">
                      <div className="spec-row">
                        <span className="spec-label">লিকুইড অ্যারোমা:</span>
                        <span className="spec-val">{selectedProduct.aroma}</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-label">ক্যাফেইন লেভেল:</span>
                        <span className="spec-val">{selectedProduct.caffeine}</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-label">উৎপত্তিস্থল:</span>
                        <span className="spec-val">{selectedProduct.origin}</span>
                      </div>
                      <div className="spec-row">
                        <span className="spec-label">পাতা গ্রেড:</span>
                        <span className="spec-val">{selectedProduct.grade}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )
            )}

            {/* Pagination / Dots indicator */}
            <div className="pagination-dots">
              {['all', 'gold', 'crimson', 'emerald'].map((tab) => (
                <div
                  key={tab}
                  className={`dot ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                />
              ))}
            </div>

            {/* CTA Button */}
            <div className="showcase-cta-wrap">
              <button
                type="button"
                className="btn-primary"
                onClick={handleOrderClick}
              >
                <ShoppingBag size={20} />
                <span>অর্ডার করুন</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
