import { education } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiAward } from 'react-icons/fi';
import './Education.css';

export default function Education() {
  const ref = useScrollReveal();

  return (
    <section id="education" className="section education">
      <div className="container">
        <div ref={ref} className="scroll-reveal">
          <h2 className="section-title">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="section-divider" />

          <div className="education__card">
            <div className="education__icon">
              <FiAward />
            </div>
            <div>
              <h3>{education.degree}</h3>
              <p>{education.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
