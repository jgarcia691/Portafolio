import React from "react";

const skills = [
  "Python", "JavaScript", "HTML/CSS",
  "React", "C/C++", "Kotlin",
  "React Native", "Next.js", "Laravel"
];

const Skills = () => (
  <section className="section">
    <h3 className="section-title">Lenguajes Dominados</h3>
    <div className="skills-grid">
      {skills.map(skill => (
        <div className="skill-badge" key={skill}>{skill}</div>
      ))}
    </div>
  </section>
);

export default Skills;