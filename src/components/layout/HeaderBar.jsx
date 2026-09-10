'use client';

import React from 'react';
import { Sparkles, ShieldCheck, Truck } from 'lucide-react';

export default function HeaderBar() {
  return (
    <header className="header-top-bar">
      <div className="promo-text">
        <Sparkles size={16} className="text-gold" />
        <span>সুরমা ভ্যালির ১০০% খাঁটি প্রিমিয়াম চা</span>
        <span className="highlight">
          <Truck size={14} style={{ display: 'inline', marginRight: '4px' }} />
          কম্বো প্যাকে সারা দেশে ফ্রি ডেলিভারি!
        </span>
        <ShieldCheck size={16} className="text-gold" />
      </div>
    </header>
  );
}
