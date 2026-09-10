'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-links">
          <a href="#order-section">Refund Policy</a>
          <a href="#order-section">Privacy Policy</a>
          <a href="#order-section">Terms of Service</a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Surma Valley Tea. All rights reserved. Crafted with care in Sylhet, Bangladesh.
        </p>
      </div>
    </footer>
  );
}
