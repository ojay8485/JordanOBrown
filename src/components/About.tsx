'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = contentRef.current?.querySelectorAll('.about-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: contentRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      // Parallax on visual element
      if (visualRef.current) {
        gsap.fromTo(
          visualRef.current,
          { y: -40 },
          {
            y: 40,
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
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
      id="about"
      className="min-h-screen bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          {/* Text */}
          <div ref={contentRef} className="lg:col-span-7 order-2 lg:order-1">
            <p className="about-item text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
              About
            </p>

            <h2
              className="about-item font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-10"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              Engineer first,
              <br />
              builder always.
            </h2>

            <div className="about-item w-12 h-[1px] bg-white/25 mb-10" />

            <p className="about-item text-white/70 text-base md:text-lg leading-relaxed font-light mb-6 max-w-lg">
              I&apos;m a frontend-focused software engineer specialized in building scalable, user-centered web applications. My core expertise lies in translating complex designs into high-quality, accessible interfaces using React, Next.js, and TypeScript.
            </p>

            <p className="about-item text-white/70 text-base md:text-lg leading-relaxed font-light max-w-lg">
              With experience spanning UI/UX design and full-cycle frontend development, I focus on delivering impactful, production-ready solutions. I thrive in cross-functional environments where I can bridge the gap between creative vision and technical execution.
            </p>
          </div>

          {/* Profile visual */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div
              ref={visualRef}
              className="relative w-full max-w-[350px] aspect-[3/4] overflow-hidden"
              style={{
                backgroundImage: 'url(/profile.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center top',
                filter: 'grayscale(100%)',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
