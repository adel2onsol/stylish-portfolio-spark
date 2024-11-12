import React from 'react';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';
import Education from '@/components/sections/Education';
import ParticleBackground from '@/components/ui/ParticleBackground';

const Index = () => {
  return (
    <main className="bg-navy min-h-screen">
      <ParticleBackground />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Index;