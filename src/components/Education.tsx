'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Certification {
  name: string;
  url?: string;
  issued?: string;
  credentialId?: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Certified Cloud Practitioner',
    issued: '2024',
  },
];

export default function Education() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading
      const headings = sectionRef.current?.querySelectorAll('.edu-heading');
      if (headings) {
        gsap.fromTo(
          headings,
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

      // Content blocks
      const items = sectionRef.current?.querySelectorAll('.edu-item');
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
              start: 'top 65%',
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
      id="education"
      className="min-h-screen bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <p className="edu-heading text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
          Learning & Growth
        </p>

        <h2
          className="edu-heading font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-24 max-w-3xl"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Education & Certifications.
        </h2>

        <div className="w-full flex flex-col md:flex-row justify-between gap-16 md:gap-24 text-left">
          
          {/* Education Side */}
          <div className="flex-1 md:pr-12 md:border-r border-white/10">
            <h3 className="edu-item text-white/80 text-xl tracking-[0.1em] uppercase mb-8 font-light border-b border-white/20 pb-4 inline-block">
              University
            </h3>
            
            <div className="edu-item mb-10">
              <p className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3 font-mono">
                2019 — 2023
              </p>
              <h4 className="text-white text-xl md:text-2xl font-600 tracking-[-0.01em] mb-2">
                Bachelor of Science in Computer Science
              </h4>
              <p className="text-white/60 text-base leading-relaxed font-light">
                University of the West Indies, Mona
              </p>
            </div>
          </div>

          {/* Certifications Side */}
          <div className="flex-1">
            <h3 className="edu-item text-white/80 text-xl tracking-[0.1em] uppercase mb-8 font-light border-b border-white/20 pb-4 inline-block">
              Professional Development
            </h3>

            <div className="flex flex-col gap-5">
              {certifications.map((cert) => (
                <div key={cert.name} className="edu-item flex items-start gap-4 group">
                  <div className="w-1.5 h-1.5 bg-white/30 rounded-full mt-2.5 flex-shrink-0 group-hover:bg-[#a3e635] transition-colors duration-300" />
                  <div className="flex-1">
                    {cert.url ? (
                      <a href={cert.url} target="_blank" rel="noopener noreferrer" className="text-white/70 text-base md:text-lg font-light leading-relaxed group-hover:text-white transition-colors duration-300 hover:underline inline-flex items-center gap-2">
                        {cert.name}
                        <svg className="w-3.5 h-3.5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      </a>
                    ) : (
                      <p className="text-white/70 text-base md:text-lg font-light leading-relaxed group-hover:text-white transition-colors duration-300">
                        {cert.name}
                      </p>
                    )}
                    
                    {(cert.issued || cert.credentialId) && (
                      <p className="text-white/40 text-[11px] mt-1 font-mono tracking-wide uppercase">
                        {cert.issued && <span>Issued {cert.issued}</span>}
                        {cert.issued && cert.credentialId && <span className="mx-2">•</span>}
                        {cert.credentialId && <span>Credential ID {cert.credentialId}</span>}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
