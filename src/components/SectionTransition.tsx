'use client';

import { useEffect, useRef, ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SectionTransitionProps {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right' | 'scale';
  parallax?: boolean;
  delay?: number;
}

export default function SectionTransition({
  children,
  direction = 'up',
  parallax = true,
  delay = 0,
}: SectionTransitionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance animation
      const fromVars: gsap.TweenVars = { opacity: 0 };
      const toVars: gsap.TweenVars = {
        opacity: 1,
        duration: 1.3,
        ease: 'back.out(1.4)',
        delay,
      };

      switch (direction) {
        case 'up':
          fromVars.y = 100;
          toVars.y = 0;
          break;
        case 'left':
          fromVars.x = 100;
          toVars.x = 0;
          break;
        case 'right':
          fromVars.x = -100;
          toVars.x = 0;
          break;
        case 'scale':
          fromVars.scale = 0.85;
          toVars.scale = 1;
          break;
      }

      gsap.fromTo(innerRef.current, fromVars, {
        ...toVars,
        force3D: true,
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      });

    }, wrapperRef);

    return () => ctx.revert();
  }, [direction, parallax, delay]);

  return (
    <div ref={wrapperRef} className="overflow-hidden bg-transparent">
      <div ref={innerRef} style={{ willChange: 'transform, opacity' }}>
        {children}
      </div>
    </div>
  );
}
