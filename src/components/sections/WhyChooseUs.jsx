'use client';

import React from 'react';
import { PhoneCall, ShieldCheck, CheckCircle2, HeartHandshake, AlertTriangle } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <ShieldCheck size={18} />,
      title: 'বিশ্বস্ততা ও গুণগত মান:',
      text: 'অভিজ্ঞ সার্টিফাইড টি মাস্টার এর তত্ত্বাবধানে প্রতিটি লট পরীক্ষিত—যা প্রতিটি চুমুকে এনে দেবে খাঁটি চায়ের নিখুঁত অভিজ্ঞতা ও শতভাগ আস্থা।',
    },
    {
      icon: <CheckCircle2 size={18} />,
      title: 'শতভাগ স্যাটিসফেকশন গ্যারান্টি:',
      text: 'খাঁটি ও ফ্রেশ চায়ের পূর্ণ তৃপ্তি। স্বাদে বা মানে কোনো কমতি মনে হলে তাৎক্ষণিক রিটার্ন ও পরিবর্তনের সুযোগ।',
    },
    {
      icon: <HeartHandshake size={18} />,
      title: 'উন্নত গ্রাহক সেবা:',
      text: 'আপনার সন্তুষ্টিই আমাদের মূল প্রতিজ্ঞা। অর্ডার করা থেকে আপনার কাপ পর্যন্ত পৌঁছানো পর্যন্ত সার্বক্ষণিক সহায়তা।',
    },
  ];

  return (
    <section className="why-choose-section">
      <div className="container">
        {/* Main Card */}
        <div className="why-card reveal-on-scroll">
          <div className="why-header-bar">
            আমাদের কাছ থেকে কেন নিবেন।
          </div>

          <div className="why-body-list">
            {reasons.map((item, index) => (
              <div
                key={index}
                className={`why-item reveal-on-scroll delay-${(index + 1) * 100}`}
              >
                <div className="why-icon">{item.icon}</div>
                <div className="why-text">
                  <strong>{item.title} </strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Caution Notice Box */}
        <div className="caution-box reveal-on-scroll reveal-scale delay-150">
          <div className="caution-title">
            <AlertTriangle size={20} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
            সতর্কতাঃ
          </div>
          <div className="caution-desc">
            “সাধারণত গর্ভাবস্থায় চা কম পরিমাণে পান করা উচিত।”
          </div>
        </div>

        {/* Hotline Call Box */}
        <a href="tel:01911899865" className="hotline-banner-wrap reveal-on-scroll delay-200">
          <PhoneCall size={26} className="animate-phone-ring" />
          <span>প্রয়োজনে কল করুন:</span>
          <span className="phone-number">01911 899 865</span>
        </a>
      </div>
    </section>
  );
}
