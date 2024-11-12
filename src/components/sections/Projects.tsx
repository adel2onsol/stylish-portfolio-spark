import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Project One',
    description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track.',
    tech: ['React', 'Node.js', 'Spotify API'],
    github: '#',
    external: '#',
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
  },
  {
    title: 'Project Two',
    description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.',
    tech: ['VS Code', 'Sublime Text', 'Atom'],
    github: '#',
    external: '#',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
  },
];

const Projects = () => {
  return (
    <section className="py-24 px-8 sm:px-24" id="projects">
      <h2 className="section-heading">Some Things I've Built</h2>
      <div className="space-y-24">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`relative grid md:grid-cols-2 gap-8 items-center ${
              i % 2 === 0 ? 'md:text-left' : 'md:text-right md:flex-row-reverse'
            }`}
          >
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy/80 group-hover:opacity-0 transition-opacity" />
            </div>
            <div className={`space-y-4 ${i % 2 === 0 ? 'md:pl-8' : 'md:pr-8'}`}>
              <p className="text-mint font-mono">Featured Project</p>
              <h3 className="text-2xl font-bold text-lightest-slate">
                {project.title}
              </h3>
              <p className="bg-light-navy p-6 rounded-lg">{project.description}</p>
              <ul className={`flex gap-4 text-sm ${i % 2 === 0 ? '' : 'justify-end'}`}>
                {project.tech.map((tech) => (
                  <li key={tech} className="text-slate">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className={`flex gap-4 text-lightest-slate ${i % 2 === 0 ? '' : 'justify-end'}`}>
                <a href={project.github} className="hover:text-mint">
                  <Github size={20} />
                </a>
                <a href={project.external} className="hover:text-mint">
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;