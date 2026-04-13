'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    name: 'Smooth Sudoku',
    tagline: 'A modern puzzle experience.',
    description:
      'An interactive Sudoku platform focused on smooth gameplay and clean UI. Designed with performance and user experience in mind, with planned expansion into multiplayer and competitive features.',
    impact: 'Live & growing',
    url: 'smoothsudoku.com',
  },
  {
    name: 'Credeer',
    tagline: 'Smart loan insights. Clear financial decisions.',
    description:
      'A financial intelligence platform that enables users to model and analyze loans in real time. Flexible inputs, amortization calculations, and scenario simulation give full visibility into repayment structures and affordability.',
    impact: 'Live',
    url: 'credeer.com',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.product-block');
      if (items) {
        items.forEach((item) => {
          const children = item.querySelectorAll('.product-reveal');
          gsap.fromTo(
            children,
            { opacity: 0, y: 40 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 75%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      const headingEls = sectionRef.current?.querySelectorAll('.prod-heading');
      if (headingEls) {
        gsap.fromTo(
          headingEls,
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
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="products"
      className="min-h-screen bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-5xl mx-auto">
        <p className="prod-heading text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
          Products
        </p>

        <h2
          className="prod-heading font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-24"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Things I&apos;ve shipped.
        </h2>

        <div className="space-y-16 md:space-y-24">
          {products.map((product, index) => (
            <div key={product.name} className="product-block group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
                {/* Number + Name */}
                <div className="lg:col-span-5">
                  <span className="product-reveal text-white/30 text-xs tracking-[0.2em] font-mono block mb-4">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3
                    className="product-reveal font-sans font-700 tracking-[-0.03em] leading-[1.05] text-white mb-4"
                    style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)' }}
                  >
                    {(() => {
                      const words = product.name.split(' ');
                      const lastWord = words.pop();
                      return (
                        <>
                          {words.length > 0 && words.join(' ') + ' '}
                          <span className="whitespace-nowrap">
                            {lastWord}
                            {product.impact.includes('Live') && (
                              <span className="inline-block relative -top-3 ml-3 text-[10px] tracking-[0.15em] uppercase font-mono px-2.5 py-1 rounded-full border text-[#a3e635] border-[#a3e635]/30 bg-[#a3e635]/10 leading-none">
                                Live
                              </span>
                            )}
                          </span>
                        </>
                      );
                    })()}
                  </h3>

                  <p className="product-reveal text-white/70 text-lg md:text-xl font-light italic">
                    {product.tagline}
                  </p>
                </div>

                {/* Description + Meta */}
                <div className="lg:col-span-7">
                  <p className="product-reveal text-white/65 text-base md:text-lg leading-relaxed font-light mb-8 max-w-xl group-hover:text-white transition-colors duration-300">
                    {product.description}
                  </p>

                  <div className="product-reveal flex items-center gap-8 text-sm">
                    <span className="text-white/50 font-mono tracking-[0.1em]">
                      {product.impact}
                    </span>
                    <span className="text-white/25">—</span>
                    <a
                      href={`https://${product.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-line text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {product.url}
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider */}
              {index < products.length - 1 && (
                <div className="divider mt-16 md:mt-24" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
