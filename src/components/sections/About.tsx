import React from 'react';

const About = () => {
  return (
    <section className="py-24 px-8 sm:px-24" id="about">
      <h2 className="section-heading">About Me</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-4">
          <p>
            Hello! My name is John and I enjoy creating things that live on the internet. 
            My interest in web development started back in 2012 when I decided to try 
            editing custom Tumblr themes — turns out hacking together a custom reblog 
            button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I've had the privilege of working at an advertising 
            agency, a start-up, a huge corporation, and a student-led design studio.
          </p>
          <p>Here are a few technologies I've been working with recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4">
            {['JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Next.js', 'Tailwind CSS'].map((tech) => (
              <li key={tech} className="flex items-center gap-2 text-sm">
                <span className="text-mint">▹</span> {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="relative z-10">
            <img
              src="https://via.placeholder.com/400"
              alt="Profile"
              className="rounded grayscale hover:grayscale-0 transition-all"
            />
          </div>
          <div className="absolute inset-0 border-2 border-mint rounded translate-x-5 translate-y-5 -z-10 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform" />
        </div>
      </div>
    </section>
  );
};

export default About;