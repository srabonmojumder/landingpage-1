'use client';

import React from 'react';
import { Sparkles, Check, Heart, ShieldCheck, Gem, Award } from 'lucide-react';

export default function TeaBenefits() {
  const benefits = [
    {
      icon: <Sparkles size={16} />,
      title: 'ন্যাচারাল:',
      text: 'খাঁটি স্বাস্থ্যকর উপাদান – ফ্রেশ চা, অরিজিনাল ফ্লেভার। মন জুড়ানোর মতো খাঁটি ন্যাচারাল চায়ের পাতা।',
    },
    {
      icon: <Award size={16} />,
      title: 'অপ্টিমাইজেশন প্রক্রিয়া:',
      text: 'সুরমা ভ্যালি প্রিমিয়াম চা বিশেষভাবে প্রক্রিয়াজাত করা হয়, যা এর স্বাদ এবং সুবাস অক্ষুণ্ণ রাখতে সহায়তা করে। সুরমা ভ্যালি প্যাকেজিং ও উচ্চ মানের তা প্রক্রিয়ার ক্ষেত্রে সর্বোচ্চ যত্ন নেওয়া হয়।',
    },
    {
      icon: <ShieldCheck size={16} />,
      title: 'স্বাস্থ্যকর:',
      text: 'কোনো কেমিক্যাল, কৃত্রিম রঙ বা ক্ষতিকর ফ্লেভার ছাড়া সম্পূর্ণ ১০০% প্রাকৃতিক উপাদান।',
    },
    {
      icon: <Gem size={16} />,
      title: 'সুরমা ভ্যালি প্রিমিয়াম চা:',
      text: 'সর্বোচ্চ মানের হাতে বাছাইকৃত পাতা, চমৎকার লিকার, উৎকৃষ্ট স্বাদ ও সুরভিত ফ্লেভারের পূর্ণ নিশ্চয়তা।',
    },
    {
      icon: <Heart size={16} />,
      title: 'নির্দিষ্ট ও বিশ্বস্ত উৎস (Single Origin):',
      text: 'শ্রীমঙ্গল ও সুরমা ভ্যালির নির্দিষ্ট সেরা বাগানে উৎপাদিত হয়, যার ফলে সেগুলির বিশেষ ঘ্রাণ ও বৈশিষ্ট্য থাকে। এদের সীমিত উৎপাদন ও আন্তর্জাতিক নির্ভরযোগ্য মানের কারণে এগুলোকে এক্সপোর্ট কোয়ালিটি বলা হয়।',
    },
    {
      icon: <Check size={16} />,
      title: 'প্রাকৃতিক উপাদানে সমৃদ্ধ:',
      text: 'প্রাকৃতিক ক্যাটেচিন, পলিফেনল এবং এল-থিয়ানাইন সমৃদ্ধ যা মানসিক ক্লান্তি দূর করে তাৎক্ষণিক সতেজতা এনে দেয়।',
    },
  ];

  return (
    <section className="tea-benefits-section">
      <div className="container">
        <div className="benefits-card-container reveal-on-scroll">
          <div className="benefits-header-bar">
            আসুন চায়ের নির্যাস উপভোগ করি।
          </div>

          <div className="benefits-list">
            {benefits.map((item, index) => (
              <div
                key={index}
                className={`benefit-item reveal-on-scroll delay-${(index + 1) * 100}`}
              >
                <div className="icon-badge">{item.icon}</div>
                <div className="benefit-text">
                  <strong>{item.title} </strong>
                  <span>{item.text}</span>
                </div>
              </div>
            ))}

            <div className="quote-highlight-banner reveal-on-scroll reveal-scale delay-200">
              “স্বাদ ও স্বাস্থ্যের আস্থা, সুরমা ভ্যালি চায়ের স্নিগ্ধতা।”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
