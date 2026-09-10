'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  ShoppingBag,
  CheckCircle2,
  Truck,
  ShieldCheck,
  Lock,
  Phone,
  User,
  MapPin,
  Sparkles,
} from 'lucide-react';

export default function OrderForm({ selectedProductBlend }) {
  const [selectedBundleId, setSelectedBundleId] = useState('single');
  const [quantity, setQuantity] = useState(1);
  const [shippingArea, setShippingArea] = useState('dhaka_inside'); // 'dhaka_inside' (70) or 'dhaka_outside' (130)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    note: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(null);

  const bundles = [
    {
      id: 'single',
      title: '১টি প্যাকেট (Trial Pack)',
      sub: '২০০ গ্রাম প্রিমিয়াম চা',
      price: 450,
      oldPrice: 500,
      badge: 'জনপ্রিয়',
      thumb: '/images/surma-tea-box.jpg',
    },
    {
      id: 'combo2',
      title: '২টি প্যাকেট কম্বো (Duo Saver)',
      sub: '৪০০ গ্রাম (২টি স্পেশাল ব্লেন্ড)',
      price: 850,
      oldPrice: 950,
      badge: '৳১০০ সেভ!',
      thumb: '/images/tea-pouches-trio.jpg',
    },
    {
      id: 'combo3',
      title: '৩টি ফুল ফ্যামিলি প্যাক (Trio Pack)',
      sub: '৬০০ গ্রাম (৩টি ভ্যারাইটি ব্লেন্ড)',
      price: 1250,
      oldPrice: 1450,
      badge: 'ফ্রি ডেলিভারি + ৳২০০ সেভ',
      thumb: '/images/tea-pouches-trio.jpg',
      freeShipping: true,
    },
  ];

  const currentBundle = bundles.find((b) => b.id === selectedBundleId) || bundles[0];

  // Calculate pricing
  const subtotal = currentBundle.price * quantity;
  const shippingCost = currentBundle.freeShipping
    ? 0
    : shippingArea === 'dhaka_inside'
    ? 70
    : 130;
  const grandTotal = subtotal + shippingCost;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'আপনার নাম লিখুন';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'আপনার ১১ ডিজিটের মোবাইল নাম্বার লিখুন';
    } else if (!/^01[3-9]\d{8}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'সঠিক বাংলাদেশী মোবাইল নাম্বার দিন (যেমন: 017XXXXXXXX)';
    }
    if (!formData.address.trim()) {
      newErrors.address = 'আপনার বিস্তারিত ঠিকানা ও জেলা লিখুন';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      const firstError = document.querySelector('.error-hint');
      firstError?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      const refId = 'SV-' + Math.floor(100000 + Math.random() * 900000);
      setOrderSuccess({
        refId,
        bundleTitle: currentBundle.title,
        quantity,
        total: grandTotal,
        name: formData.name,
        phone: formData.phone,
        address: formData.address,
        shippingArea: shippingArea === 'dhaka_inside' ? 'ঢাকার ভিতরে' : 'ঢাকার বাইরে',
      });

      // Trigger Confetti Celebration
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#16a34a', '#ff7700', '#facc15', '#10b981'],
        });
      } catch (err) {
        console.log(err);
      }
    }, 900);
  };

  return (
    <section className="order-form-section" id="order-section">
      <div className="container">
        <div className="order-form-wrapper">
          <h2 className="order-main-heading">
            অর্ডার করতে নিচের ফরমটি পূরণ করে{' '}
            <span className="highlight-btn-text">“অর্ডার করুন”</span> বাটনে ক্লিক করুন।
          </h2>

          {/* Bundle Selection Cards */}
          <div className="bundle-selection-grid">
            {bundles.map((bundle) => (
              <div
                key={bundle.id}
                className={`bundle-card ${selectedBundleId === bundle.id ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedBundleId(bundle.id);
                  setQuantity(1);
                }}
              >
                {bundle.badge && <span className="bundle-badge">{bundle.badge}</span>}
                <div className="bundle-title">{bundle.title}</div>
                <div className="bundle-sub">{bundle.sub}</div>
                <div className="bundle-price">
                  {bundle.oldPrice && <span className="old-price">৳{bundle.oldPrice}</span>}
                  <span>৳{bundle.price}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Active Product Bar with Quantity */}
          <div className="product-item-preview-card">
            <div className="product-left-info">
              <img
                src={currentBundle.thumb}
                alt={currentBundle.title}
                className="prod-thumb"
              />
              <div className="prod-title-wrap">
                <div className="prod-name">সুরমা ভ্যালি প্রিমিয়াম চা</div>
                <div className="prod-pack-type">{currentBundle.title}</div>
              </div>
            </div>

            <div className="qty-counter-control">
              <button
                type="button"
                onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              >
                -
              </button>
              <span className="qty-num">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </button>
            </div>

            <div className="prod-price-calc">৳{subtotal}</div>
          </div>

          {/* Order Details Form & Live Summary */}
          <form onSubmit={handleOrderSubmit}>
            <div className="order-grid-two-col">
              {/* Billing Info Inputs */}
              <div className="billing-fields-col">
                <div className="section-sub-title">
                  <User size={18} />
                  <span>বিলিং ও ডেলিভারি তথ্য</span>
                </div>

                <div className="form-group">
                  <label htmlFor="name">
                    আপনার নাম <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="আপনার সম্পূর্ণ নাম লিখুন"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <p className="error-hint">{errors.name}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    মোবাইল নাম্বার <span className="req">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="01XXXXXXXXX"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={errors.phone ? 'error' : ''}
                  />
                  {errors.phone && <p className="error-hint">{errors.phone}</p>}
                </div>

                <div className="form-group">
                  <label htmlFor="address">
                    আপনার পূর্ণাঙ্গ ঠিকানা <span className="req">*</span>
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    rows={2}
                    placeholder="রোড/বাসা নং, গ্রাম/মহল্লা, থানা ও জেলার নাম"
                    value={formData.address}
                    onChange={handleInputChange}
                    className={errors.address ? 'error' : ''}
                  />
                  {errors.address && <p className="error-hint">{errors.address}</p>}
                </div>

                {/* Delivery Area Selection */}
                <div className="shipping-area-selection">
                  <div className="shipping-title">ডেলিভারি এরিয়া নির্বাচন করুন:</div>
                  <div className="shipping-options">
                    <label
                      className={`shipping-radio-label ${
                        shippingArea === 'dhaka_inside' ? 'active' : ''
                      }`}
                    >
                      <div className="radio-left">
                        <input
                          type="radio"
                          name="shipping"
                          value="dhaka_inside"
                          checked={shippingArea === 'dhaka_inside'}
                          onChange={() => setShippingArea('dhaka_inside')}
                        />
                        <span>ঢাকার ভিতরে ডেলিভারি</span>
                      </div>
                      <span className="shipping-fee">
                        {currentBundle.freeShipping ? 'ফ্রি' : '৳৭০'}
                      </span>
                    </label>

                    <label
                      className={`shipping-radio-label ${
                        shippingArea === 'dhaka_outside' ? 'active' : ''
                      }`}
                    >
                      <div className="radio-left">
                        <input
                          type="radio"
                          name="shipping"
                          value="dhaka_outside"
                          checked={shippingArea === 'dhaka_outside'}
                          onChange={() => setShippingArea('dhaka_outside')}
                        />
                        <span>ঢাকার বাইরে ডেলিভারি (সারা দেশ)</span>
                      </div>
                      <span className="shipping-fee">
                        {currentBundle.freeShipping ? 'ফ্রি' : '৳১৩০'}
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Order Summary & Confirm */}
              <div className="order-summary-col">
                <div className="summary-card">
                  <div className="summary-title">আপনার অর্ডার সামারি</div>

                  <div className="summary-row">
                    <span>
                      {currentBundle.title} x {quantity}
                    </span>
                    <strong>৳{subtotal}</strong>
                  </div>

                  <div className="summary-row">
                    <span>ডেলিভারি চার্জ</span>
                    <strong>
                      {currentBundle.freeShipping ? (
                        <span style={{ color: '#16a34a' }}>ফ্রি</span>
                      ) : (
                        `৳${shippingCost}`
                      )}
                    </strong>
                  </div>

                  <div className="summary-row total-row">
                    <span>সর্বমোট পরিশোধযোগ্য:</span>
                    <span className="total-amount">৳{grandTotal}</span>
                  </div>

                  <div className="cod-badge-box">
                    <ShieldCheck size={20} color="#16a34a" />
                    <span>ক্যাশ অন ডেলিভারি (পণ্য পেয়ে মূল্য পরিশোধ করুন)</span>
                  </div>

                  <button
                    type="submit"
                    className="submit-order-btn"
                    disabled={isSubmitting}
                  >
                    <Lock size={18} />
                    <span>
                      {isSubmitting ? 'প্রসেসিং হচ্ছে...' : `অর্ডার কনফার্ম করুন - ৳${grandTotal}`}
                    </span>
                  </button>

                  <div className="security-guarantee-text">
                    <Truck size={14} />
                    <span>২-৩ দিনের মধ্যে নিশ্চিত হোম ডেলিভারি</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {orderSuccess && (
        <div className="order-modal-backdrop" onClick={() => setOrderSuccess(null)}>
          <div className="order-success-modal" onClick={(e) => e.stopPropagation()}>
            <div className="success-icon-circle">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="modal-title">অভিনন্দন! আপনার অর্ডারটি সফল হয়েছে</h3>
            <p className="modal-desc">
              সুরমা ভ্যালি প্রিমিয়াম চা অর্ডার করার জন্য ধন্যবাদ। আমাদের প্রতিনিধি শীঘ্রই আপনার নাম্বারে কল করে অর্ডারটি কনফার্ম করবেন।
            </p>

            <div className="order-ref-card">
              <div className="ref-line">
                <span>অর্ডার আইডি:</span>
                <strong>{orderSuccess.refId}</strong>
              </div>
              <div className="ref-line">
                <span>প্যাকেজ:</span>
                <strong>{orderSuccess.bundleTitle}</strong>
              </div>
              <div className="ref-line">
                <span>পরিমাণ:</span>
                <strong>{orderSuccess.quantity} টি</strong>
              </div>
              <div className="ref-line">
                <span>সর্বমোট মূল্য:</span>
                <strong style={{ color: '#ea580c' }}>৳{orderSuccess.total} (ক্যাশ অন ডেলিভারি)</strong>
              </div>
              <div className="ref-line">
                <span>ফোন নম্বর:</span>
                <strong>{orderSuccess.phone}</strong>
              </div>
            </div>

            <button
              type="button"
              className="close-modal-btn"
              onClick={() => setOrderSuccess(null)}
            >
              ঠিক আছে
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
