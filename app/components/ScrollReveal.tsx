'use client';

import { useEffect } from 'react';

/**
 * Invisible client component that wires up IntersectionObserver for
 * scroll-reveal animations. Elements with [data-animate] are initially
 * visible (SSR-safe). JS adds `.will-animate` (opacity:0 + translateY)
 * then `.is-visible` once they enter the viewport.
 *
 * Optional [data-animate-delay="N"] stagger: N * 120ms delay.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('[data-animate]');

    // Apply initial hidden state only via JS so SSR content stays visible
    elements.forEach(el => el.classList.add('will-animate'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.animateDelay;
            if (delay) {
              el.style.transitionDelay = `${parseFloat(delay) * 0.12}s`;
            }
            el.classList.add('is-visible');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
}
