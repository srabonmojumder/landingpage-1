'use client';

import React from 'react';
import { Leaf, HeartPulse, Compass, Sparkles, Brain, Sprout } from 'lucide-react';

export default function TargetAudience() {
  const audienceList = [
    {
      icon: <Leaf size={16} />,
      titleBn: 'চায়ের প্রেমী',
      titleEn: '(Tea Enthusiasts)',
    },
    {
      icon: <HeartPulse size={16} />,
      titleBn: 'স্বাস্থ্য সচেতন',
      titleEn: '(Health-Conscious)',
    },
    {
      icon: <Compass size={16} />,
      titleBn: 'নিত্য নতুন স্বাদের খোঁজে',
      titleEn: '(Seeking New Flavors)',
    },
    {
      icon: <Sprout size={16} />,
      titleBn: 'অর্গানিক পণ্য পছন্দকারী',
      titleEn: '(Organic Product Seekers)',
    },
    {
      icon: <Brain size={16} />,
      titleBn: 'মেন্টাল ক্লিয়ারনেস ও রিলাক্সেশন চান',
      titleEn: '(Mental Clarity & Relaxation)',
    },
    {
      icon: <Sparkles size={16} />,
      titleBn: 'প্রাকৃতিক উপাদানে আগ্রহী',
      titleEn: '(Interested in Natural Ingredients)',
    },
  ];

  return (
    <section className="target-audience-section">
      <div className="container">
        <div className="audience-card-container reveal-on-scroll">
          <div className="audience-header-bar">
            এই চা কাদের জন্য
          </div>

          <div className="audience-list">
            {audienceList.map((item, index) => (
              <div
                key={index}
                className={`audience-item reveal-on-scroll delay-${(index + 1) * 100}`}
              >
                <div className="icon-wrapper">
                  {item.icon}
                </div>
                <div className="item-content">
                  <div className="item-title-bn">{item.titleBn}</div>
                  <div className="item-title-en">{item.titleEn}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
