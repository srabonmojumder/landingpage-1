'use client';

import React from 'react';
import { Droplets, Thermometer, Sparkles, CupSoda, Clock } from 'lucide-react';

export default function ExperienceMetrics() {
  const metrics = [
    {
      icon: <Droplets size={22} />,
      value: 'বিশুদ্ধ পানি',
      label: 'Good Quality Water',
    },
    {
      icon: <Thermometer size={22} />,
      value: '৯৫°-১০০° সে.',
      label: '95°-100°C Temp',
    },
    {
      icon: <Sparkles size={22} />,
      value: '১ চা চামচ (২.৫ গ্রাম)',
      label: 'Tea Leaves per Cup',
    },
    {
      icon: <CupSoda size={22} />,
      value: '১৫০ মি.লি.',
      label: '150ml Fresh Water',
    },
    {
      icon: <Clock size={22} />,
      value: '৩-৫ মিনিট',
      label: 'Infusion for Perfection',
    },
  ];

  return (
    <section className="experience-bar-section">
      <div className="container">
        <div className="experience-card reveal-on-scroll reveal-scale">
          <h3 className="experience-title reveal-on-scroll reveal-fade delay-100">
            <Sparkles size={20} />
            The Surma Valley Experience
            <Sparkles size={20} />
          </h3>

          <div className="metrics-grid">
            {metrics.map((item, index) => (
              <div
                key={index}
                className={`metric-item reveal-on-scroll delay-${(index + 1) * 100}`}
              >
                <div className="icon-box">{item.icon}</div>
                <span className="metric-value">{item.value}</span>
                <span className="metric-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
