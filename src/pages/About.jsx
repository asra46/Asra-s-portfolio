import { aboutContent, aboutHighlights } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiCheck } from 'react-icons/fi';
import './About.css';

export default function About() {
  const ref = useScrollReveal();

  return (
    <section id="about" className="section about">
      <div className="container">
        <div ref={ref} className="scroll-reveal">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="section-divider" />

          <div className="about__grid">
            <div className="about__content">
              {aboutContent.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            <div className="about__highlights">
              <h3>Highlights</h3>
              <ul>
                {aboutHighlights.map((item) => (
                  <li key={item}>
                    <FiCheck className="about__check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
