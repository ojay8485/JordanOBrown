'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'Smooth Sudoku',
    description: 'A modern, interactive Sudoku platform focused on smooth gameplay, clean UI, and competitive features.',
    tech: 'JavaScript · Node.js · WebSockets',
    url: 'https://smoothsudoku.com',
    launched: true,
  },
  {
    title: 'Credeer',
    description: 'Financial intelligence platform — model loans, simulate scenarios, and understand the true cost of borrowing.',
    tech: 'Next.js · React · Financial APIs',
    url: 'https://credeer.com',
    launched: true,
  },
  {
    title: 'WealthBuilder',
    description: 'A collaborative financial planning platform allowing groups to pool funds, simulate contributions, and project long-term portfolio growth with precision. Features income-generating asset modeling, cash flow logic, and custom portfolio construction.',
    tech: 'React · TypeScript · Financial Modeling',
    launched: false,
  },
  {
    title: 'AI Recruit',
    description: 'AI-powered system that analyzes job applications and generates insights for recruiters.',
    tech: 'Java · Spring Boot · MongoDB · AI APIs',
    launched: false,
  },
  {
    title: 'GustoHub',
    description: 'Distributed microservices system for managing meals, ingredients, and shopping carts.',
    tech: 'Java · Spring Boot · MongoDB · Docker · Keycloak',
    launched: false,
  },
  {
    title: 'Chain of Events',
    description: 'A cause-and-effect puzzle game — connect the order of inventions or happenings.',
    tech: 'JavaScript · JSON Architecture · Game Logic',
    launched: false,
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sectionRef.current?.querySelectorAll('.project-item');
      if (items) {
        gsap.fromTo(
          items,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: sectionRef.current?.querySelector('.project-grid'),
              start: 'top 78%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      const headingEls = sectionRef.current?.querySelectorAll('.proj-heading');
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
      id="projects"
      className="min-h-screen bg-transparent py-32 md:py-40 px-8 md:px-16 lg:px-32 xl:px-40"
    >
      <div className="max-w-5xl mx-auto">
        <p className="proj-heading text-white/50 text-xs tracking-[0.3em] uppercase mb-8">
          Projects
        </p>

        <h2
          className="proj-heading font-sans font-700 tracking-[-0.03em] leading-[1.1] text-white mb-20"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          Selected work.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`project-item group p-8 md:p-10 border border-white/[0.06] cursor-pointer min-h-[200px] flex flex-col justify-between ${
                index % 2 === 1 ? 'md:border-l-0' : ''
              } ${index >= 2 ? 'border-t-0' : ''}`}
            >
              {/* Title + status tag — always visible */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-white text-xl md:text-2xl font-600 tracking-[-0.02em] group-hover:text-white/70 transition-colors duration-300">
                    {project.url ? (
                      <a href={project.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                        {project.title}
                      </a>
                    ) : (
                      project.title
                    )}
                  </h3>
                  <span className={`text-[10px] tracking-[0.15em] uppercase font-mono px-2.5 py-1 rounded-full border ${
                    project.launched
                      ? 'text-[#a3e635] border-[#a3e635]/30 bg-[#a3e635]/10'
                      : 'text-white/40 border-white/15 bg-white/5'
                  }`}>
                    {project.launched ? 'Launched' : 'Coming Soon'}
                  </span>
                </div>
                {project.url ? (
                  <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${project.title}`}>
                    <svg
                      className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1 cursor-pointer"
                      viewBox="0 0 16 16"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 12L12 4M12 4H6M12 4v6" />
                    </svg>
                  </a>
                ) : (
                  <svg
                    className="w-4 h-4 text-white/20 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0 mt-1"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M4 12L12 4M12 4H6M12 4v6" />
                  </svg>
                )}
              </div>

              {/* Details — revealed on hover */}
              <div className="max-h-0 opacity-0 group-hover:max-h-40 group-hover:opacity-100 overflow-hidden transition-all duration-500 ease-out mt-auto">
                <p className="text-white/60 text-sm md:text-base font-light leading-relaxed mb-3 group-hover:text-white transition-colors duration-300">
                  {project.description}
                </p>
                <p className="text-white/35 text-xs tracking-[0.1em] font-mono">
                  {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
