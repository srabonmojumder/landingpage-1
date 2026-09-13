'use client';

import { useEffect } from 'react';

/**
 * High-performance hook that triggers smooth scroll reveals
 * using native browser IntersectionObserver.
 */
export default function useScrollReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          // Once revealed, unobserve to free up memory and prevent re-triggering
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -45px 0px',
      threshold: prefersReducedMotion ? 0 : 0.1,
    };

    let observer;
    try {
      observer = new IntersectionObserver(observerCallback, observerOptions);
    } catch (e) {
      // Fallback for older browsers
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed');
      });
      return;
    }

    const observeElements = () => {
      const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)');
      elements.forEach((el) => {
        if (prefersReducedMotion) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });
    };

    // Initial pass
    observeElements();

    // Re-check after a short delay for elements that render slightly later or after hydration
    const timer = setTimeout(observeElements, 150);

    // Also observe DOM mutations to automatically catch dynamic changes
    let mutationObserver;
    if (typeof MutationObserver !== 'undefined') {
      mutationObserver = new MutationObserver(() => {
        observeElements();
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    }

    return () => {
      clearTimeout(timer);
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
    };
  }, []);
}
