import React from 'react';
import { GraduationCap } from 'lucide-react';

const educationData = [
  {
    institution: "University of Example",
    degree: "Bachelor of Science in Computer Science",
    dates: "2018 - 2022",
    description: "Focused on software engineering and data structures. Completed senior project on machine learning applications."
  },
  {
    institution: "Tech Institute",
    degree: "Associate's Degree in Web Development",
    dates: "2016 - 2018",
    description: "Core curriculum in web technologies and design principles."
  }
];

const Education = () => {
  return (
    <section className="py-24 px-8 sm:px-24" id="education">
      <h2 className="section-heading">Education</h2>
      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <div 
            key={index}
            className="relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-mint before:content-[''] animate-fade-in"
          >
            <div className="absolute -left-[11px] top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-navy border-2 border-mint">
              <GraduationCap size={14} className="text-mint" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-lightest-slate">
                {edu.institution}
              </h3>
              <p className="text-light-slate font-medium">
                {edu.degree}
              </p>
              <p className="text-sm text-slate font-mono">
                {edu.dates}
              </p>
              <p className="text-slate">
                {edu.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;