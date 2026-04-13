'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    title: 'Immersive Web Interfaces',
    description: 'Developing high-fidelity, motion-rich user experiences using React and GSAP — focusing on fluid transitions, interactive storytelling, and pixel-perfect layouts.',
  },
  {
    title: 'Commerce Frontend Architectures',
    description: 'Building scalable e-commerce frontends, product configurators, and pricing engines — architected for speed, SEO, and high conversion rates.',
  },
  {
    title: 'AI-Enhanced Digital Products',
    description: 'Integrating intelligent features and LLM-powered interfaces into modern web apps — creating seamless bridges between complex AI models and intuitive UI.',
  },
];

export default function WhatIBuild() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.build-item');
      if (items) {
        items.forEach((item) => {
          gsap.fromTo(
            item,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      // Heading
      gsap.fromTo(
        sectionRef.current?.querySelectorAll('.build-heading') || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="what-i-build"
      className="min-h-screen bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-5xl mx-auto">
        <p className="build-heading text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
          What I Build
        </p>

        <h2
          className="build-heading font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-20"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Focus areas.
        </h2>

        <div className="space-y-0">
          {categories.map((cat, index) => (
            <div
              key={cat.title}
              className="build-item group"
            >
              {index === 0 && <div className="divider mb-0" />}
              <div className="py-10 md:py-14 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-16">
                <span className="text-white/35 text-xs tracking-[0.2em] font-mono flex-shrink-0 w-8">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="text-white text-2xl md:text-3xl font-600 tracking-[-0.02em] flex-shrink-0 md:w-72 group-hover:text-white/70 transition-colors duration-300">
                  {cat.title}
                </h3>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed flex-1 group-hover:text-white transition-colors duration-300">
                  {cat.description}
                </p>
              </div>
              <div className="divider" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
