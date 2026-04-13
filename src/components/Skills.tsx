'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skillGroups = [
  {
    label: 'Languages & Frameworks',
    skills: 'React · Next.js · Angular · TypeScript · JavaScript · HTML5 · Node.js',
  },
  {
    label: 'UI Libraries & Styling',
    skills: 'Material UI · CSS-in-JS · CSS · SCSS · Responsive Design',
  },
  {
    label: 'State Management & Tooling',
    skills: 'Zustand · Webpack · Axios · REST APIs',
  },
  {
    label: 'Design & Testing',
    skills: 'Figma · Adobe Illustrator · Jest · WCAG Accessibility',
  },
  {
    label: 'Version Control',
    skills: 'Git · GitHub · GitLab',
  },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.skill-item');
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
      id="skills"
      className="bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-5xl mx-auto">
        <p className="skill-item text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
          Skills
        </p>

        <h2
          className="skill-item font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-20"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Tools of the trade.
        </h2>

        {/* Skill groups */}
        <div className="space-y-10 mb-24">
          {skillGroups.map((group) => (
            <div key={group.label} className="skill-item group flex flex-col sm:flex-row sm:items-baseline gap-3 sm:gap-8">
              <span className="text-white/50 text-xs tracking-[0.25em] uppercase w-28 flex-shrink-0">
                {group.label}
              </span>
              <p className="text-white/75 text-base md:text-lg font-light tracking-wide group-hover:text-white transition-colors duration-300">
                {group.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
