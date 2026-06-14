import { experience } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

export default function Experience() {
  const ref = useScrollReveal();

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div ref={ref} className="scroll-reveal">
          <h2 className="section-title">
            <span className="text-gradient">Experience</span>
          </h2>
          <div className="section-divider" />

          <div className="experience__card">
            <div className="experience__header">
              <div className="experience__icon">
                <FiBriefcase />
              </div>
              <h3>{experience.title}</h3>
            </div>
            <p>{experience.description}</p>
            <ul className="experience__list">
              {experience.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
