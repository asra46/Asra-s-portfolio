import { achievements } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiStar } from 'react-icons/fi';
import './Achievements.css';

export default function Achievements() {
  const ref = useScrollReveal();

  return (
    <section id="achievements" className="section achievements">
      <div className="container">
        <div ref={ref} className="scroll-reveal">
          <h2 className="section-title">
            <span className="text-gradient">Achievements</span>
          </h2>
          <div className="section-divider" />

          <div className="achievements__grid">
            {achievements.map((item) => (
              <div key={item} className="achievement-card">
                <FiStar className="achievement-card__icon" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
