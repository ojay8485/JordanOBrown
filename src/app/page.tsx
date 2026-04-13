import SmoothScroller from '@/components/SmoothScroller';
import SectionTransition from '@/components/SectionTransition';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WhatIBuild from '@/components/WhatIBuild';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Products from '@/components/Products';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Philosophy from '@/components/Philosophy';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <SmoothScroller>
      <main>
        <Hero />
        <SectionTransition direction="scale">
          <About />
        </SectionTransition>
        <SectionTransition direction="scale">
          <WhatIBuild />
        </SectionTransition>
        <SectionTransition direction="scale">
          <Experience />
        </SectionTransition>
        <SectionTransition direction="scale">
          <Projects />
        </SectionTransition>
        <SectionTransition direction="scale">
          <Products />
        </SectionTransition>
        <SectionTransition direction="scale">
          <Skills />
        </SectionTransition>
        <SectionTransition direction="scale">
          <Education />
        </SectionTransition>
        <SectionTransition direction="scale">
          <Philosophy />
        </SectionTransition>
        <SectionTransition direction="scale" parallax={false}>
          <Contact />
        </SectionTransition>
      </main>
    </SmoothScroller>
  );
}
