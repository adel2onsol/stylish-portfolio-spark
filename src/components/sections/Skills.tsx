import React from 'react';

const skills = [
  { name: 'JavaScript', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'React', level: 88 },
  { name: 'Node.js', level: 82 },
  { name: 'Python', level: 75 },
  { name: 'SQL', level: 80 },
];

const Skills = () => {
  return (
    <section className="py-24 px-8 sm:px-24" id="skills">
      <h2 className="section-heading">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between mb-2">
              <span className="text-lightest-slate">{skill.name}</span>
              <span className="text-mint">{skill.level}%</span>
            </div>
            <div className="h-2 bg-light-navy rounded-full overflow-hidden">
              <div
                className="h-full bg-mint transition-all duration-500 ease-out group-hover:opacity-80"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;