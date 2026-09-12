import { services } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiCode, FiLayout, FiSmartphone, FiGlobe } from 'react-icons/fi';
import './Services.css';

const iconMap = {
  code: FiCode,
  design: FiLayout,
  responsive: FiSmartphone,
  api: FiGlobe,
};

export default function Services() {
  const ref = useScrollReveal();

  return (
    <section id="services" className="section services">
      <div className="container">
        <div ref={ref} className="scroll-reveal">
          <h2 className="section-title">
            My <span className="text-gradient">Services</span>
          </h2>
          <div className="section-divider" />

          <div className="services__grid">
            {services.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <article key={service.title} className="service-card">
                  <div className="service-card__icon">
                    <Icon />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
