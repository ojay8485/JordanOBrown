'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLQuoteElement>(null);
  const attrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slow fade-in for the quote
      if (quoteRef.current) {
        gsap.fromTo(
          quoteRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 55%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Attribution
      if (attrRef.current) {
        gsap.fromTo(
          attrRef.current,
          { opacity: 0 },
          {
            opacity: 1,
            duration: 1,
            delay: 0.4,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 50%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="philosophy"
      className="h-screen bg-transparent flex items-center justify-center px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-4xl mx-auto text-center">
        <blockquote
          ref={quoteRef}
          className="font-sans font-300 leading-[1.4] tracking-[-0.02em] text-white mb-10"
          style={{ fontSize: 'clamp(1.5rem, 3.5vw, 3rem)' }}
        >
          &ldquo;Build systems that scale, products that matter,
          <br className="hidden md:block" />
          {' '}and solutions that people actually use.&rdquo;
        </blockquote>

        <div ref={attrRef}>
          <div className="w-8 h-[1px] bg-white/30 mx-auto mb-5" />
          <p className="text-white/45 text-xs tracking-[0.4em] uppercase">
            Philosophy
          </p>
        </div>
      </div>
    </section>
  );
}
