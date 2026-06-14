import { skills } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Skills.css';

function SkillBar({ name, level }) {
  return (
    <div className="skill-bar">
      <div className="skill-bar__header">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="skill-bar__track">
        <div className="skill-bar__fill" style={{ '--level': `${level}%` }} />
      </div>
    </div>
  );
}

function SkillGroup({ title, items }) {
  return (
    <div className="skills__group">
      <h3>{title}</h3>
      <div className="skills__list">
        {items.map((skill) => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div ref={ref} className="scroll-reveal">
          <h2 className="section-title">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="section-divider" />

          <div className="skills__grid">
            <SkillGroup title="Frontend" items={skills.frontend} />
            <SkillGroup title="Programming" items={skills.programming} />
            <SkillGroup title="Tools" items={skills.tools} />
          </div>
        </div>
      </div>
    </section>
  );
}
