'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Name reveal
      const lines = nameRef.current?.querySelectorAll('.line-reveal-inner');
      if (lines) {
        tl.fromTo(lines, { y: '110%' }, { y: '0%', duration: 1.3, stagger: 0.12 }, 0.4);
      }

      // Title
      tl.fromTo(titleRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.9 }, '-=0.5');

      // Tagline
      tl.fromTo(taglineRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');

      // Scroll indicator
      tl.fromTo(indicatorRef.current, { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2');

      // Fade out on scroll with scale
      gsap.to([nameRef.current, titleRef.current, taglineRef.current], {
        opacity: 0,
        y: -60,
        scale: 0.95,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: '20% top',
          end: '55% top',
          scrub: true,
        },
      });

      // Background photo zoom on scroll
      const bgImg = sectionRef.current?.querySelector('img');
      if (bgImg) {
        gsap.to(bgImg, {
          scale: 1.3,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="h-screen w-full flex flex-col items-center justify-center bg-black px-8 md:px-16 lg:px-32 xl:px-40 relative overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0 bg-black">
        <img
          src="/profile.png"
          alt=""
          className="w-full h-full object-cover object-center grayscale opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
      </div>
      <div className="relative z-10">
        <p
          ref={titleRef}
          className="text-white/60 text-xs tracking-[0.4em] uppercase font-light mb-6 text-center"
        >
          Jordan Brown
        </p>

        <h1
          ref={nameRef}
          className="leading-[0.85] text-white mb-8"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)', fontFamily: 'var(--font-xanh-mono)', fontWeight: 400 }}
        >
          <span className="line-reveal block text-left">
            <span className="line-reveal-inner inline-block">JORDAN</span>
          </span>
          <span className="line-reveal block text-right">
            <span className="line-reveal-inner inline-block">BROWN</span>
          </span>
        </h1>

        <div className="text-center">
          <p
            className="text-white/90 text-lg md:text-2xl tracking-[0.3em] uppercase font-light mb-5"
          >
            Frontend Software Engineer
          </p>

          <p
            ref={taglineRef}
            className="text-white/70 text-sm md:text-base tracking-[0.12em] font-light max-w-xl mx-auto"
          >
            Building cinematic user interfaces, high-performance web applications, and AI-enabled digital experiences.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={indicatorRef}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white text-[10px] tracking-[0.4em] uppercase scroll-pulse">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/20" />
      </div>
    </section>
  );
}
