'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const roles = [
  {
    period: 'May 2025 — Jan 2026',
    title: 'Software Developer (R&D & Innovation)',
    company: 'Grid Dynamics',
    impact: 'Led frontend development for an internal AI-powered workflow orchestration platform, serving as the sole frontend engineer and UI/UX designer. Delivered a fully functional MVP within 6 weeks, supporting over 5 integrated bots and improving operational efficiency by 25%.',
  },
  {
    period: 'Mar 2024 — May 2025',
    title: 'Software Developer (Tools-Badges-HR)',
    company: 'Grid Dynamics',
    impact: 'Designed and implemented a company-wide HR badges system for 4,900+ employees. Integrated real-time analytics dashboards that increased user engagement by 34% and reduced administrative overhead by 25%.',
  },
  {
    period: 'Sep 2023 — Feb 2024',
    title: 'Junior Software Developer',
    company: 'Grid Dynamics',
    impact: 'Contributed to production features using Next.js and TypeScript. Built reusable UI components with Material UI and gained hands-on experience with modern frontend tooling and Agile development workflows.',
  },
  {
    period: 'Mar 2023 — Aug 2023',
    title: 'Software Engineer Intern',
    company: 'Grid Dynamics',
    impact: 'Built responsive UI components using React, TypeScript, and Material UI. Completed JavaScript algorithm challenges and improved UI consistency across internal projects.',
  },
  {
    period: 'Sep 2019 — Jun 2022',
    title: 'UI/UX Designer',
    company: 'CookieNerds',
    impact: 'Improved key user flows and interface usability through iterative redesigns and testing. Delivered 20+ high-fidelity screens in Figma, accelerating developer implementation by 25% and increasing user task completion efficiency by 30%.',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.exp-item');
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
                start: 'top 82%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        });
      }

      // Heading
      const headingEls = sectionRef.current?.querySelectorAll('.exp-heading');
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
      id="experience"
      className="min-h-screen bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-5xl mx-auto">
        <p className="exp-heading text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
          Experience
        </p>

        <h2
          className="exp-heading font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-20"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Where I&apos;ve worked.
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-[2px] top-0 bottom-0 w-[1px] bg-white/[0.06] hidden md:block" />

          <div className="space-y-16 md:space-y-20">
            {roles.map((role) => (
              <div
                key={role.period}
                className="exp-item relative md:pl-12 group"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-0 top-2 timeline-dot" />

                <div className="text-white/40 text-xs tracking-[0.2em] uppercase mb-3 font-mono flex items-center gap-2">
                  {role.period.includes('Present') ? (
                    <>
                      <span>{role.period.replace(' — Present', '')}</span>
                      <span className="text-white/25">—</span>
                      <span className="text-[#a3e635] border border-[#a3e635]/30 bg-[#a3e635]/10 px-2 py-0.5 rounded-full text-[10px] tracking-[0.15em]">
                        Present
                      </span>
                    </>
                  ) : (
                    <span>{role.period}</span>
                  )}
                </div>

                <h3 className="text-white text-xl md:text-2xl font-600 tracking-[-0.01em] mb-1">
                  {role.title}
                </h3>

                <p className="text-white/50 text-sm tracking-[0.1em] uppercase mb-5">
                  {role.company}
                </p>

                <p className="text-white/65 text-base leading-relaxed font-light max-w-2xl group-hover:text-white transition-colors duration-300">
                  {role.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
