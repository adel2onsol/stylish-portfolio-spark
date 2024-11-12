import React from 'react';
import AnimatedText from '../ui/AnimatedText';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-8 sm:px-24">
      <div className="space-y-4">
        <AnimatedText
          text="Hi, my name is"
          className="text-mint font-mono text-lg"
          delay={0.1}
        />
        <h1 className="text-4xl sm:text-7xl font-bold text-lightest-slate">
          <AnimatedText text="John Doe." delay={0.2} />
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-slate">
          <AnimatedText text="I build things for the web." delay={0.3} />
        </h2>
        <p className="max-w-xl text-slate mt-5">
          <AnimatedText
            text="I'm a software engineer specializing in building exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products."
            delay={0.4}
          />
        </p>
        <button className="border border-mint text-mint px-7 py-4 rounded hover:bg-mint/10 transition-colors mt-10">
          Check out my work!
        </button>
      </div>
    </section>
  );
};

export default Hero;