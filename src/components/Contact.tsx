'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const links = [
  { label: 'Email', href: 'mailto:jordanbrown.engineer@gmail.com', display: 'jordanbrown.engineer@gmail.com' },
  { label: 'Resume', href: '/Jordan_Brown_Resume.pdf', display: 'Download Resume' },
  { label: 'GitHub', href: 'https://github.com/ojay8485/', display: 'github.com/ojay8485' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jordan-brown-engineer/', display: 'linkedin.com/in/jordan-brown-engineer' },
];

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.contact-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
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
      id="contact"
      className="min-h-[60vh] bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40 flex flex-col justify-between"
    >
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col justify-center">
        <p className="contact-item text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
          Contact
        </p>

        <h2
          className="contact-item font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-16"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Let&apos;s connect.
        </h2>

        <div className="space-y-6 mb-20">
          {links.map((link) => (
            <div key={link.label} className="contact-item flex items-baseline gap-6">
              <span className="text-white/45 text-xs tracking-[0.25em] uppercase w-20 flex-shrink-0">
                {link.label}
              </span>
              <a
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="hover-line text-white/75 text-base md:text-lg font-light hover:text-white transition-colors duration-300"
              >
                {link.display}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Footer line */}
      <div className="max-w-5xl mx-auto w-full relative">
        <div className="divider mb-12" />
        
        <div className="flex flex-col items-center gap-12 pb-2">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex flex-col items-center gap-4 group cursor-pointer hover:-translate-y-2 transition-transform duration-500"
            aria-label="Back to top"
          >
            <div className="w-[1px] h-12 bg-white/40 group-hover:bg-[#a3e635] transition-colors duration-500" />
            <span className="text-white/70 group-hover:text-[#a3e635] transition-colors duration-500 text-xs tracking-[0.4em] uppercase font-bold">
              Back to Top
            </span>
          </button>

          <p className="contact-item text-white/30 text-xs tracking-[0.15em] text-center">
            &copy; {new Date().getFullYear()} Jordan Brown
          </p>
        </div>
      </div>
    </section>
  );
}
