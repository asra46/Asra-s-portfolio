import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, techIcons, typingRoles } from '../data/portfolioData';
import { useTypingEffect } from '../hooks/useTypingEffect';
import { FiDownload, FiMail, FiArrowRight } from 'react-icons/fi';
import './Hero.css';

export default function Hero() {
  const typedRole = useTypingEffect(typingRoles);
  const contentRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      contentRef.current?.classList.add('revealed');
      visualRef.current?.classList.add('revealed');
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg-shapes">
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
        <div className="hero__shape hero__shape--3" />
      </div>

      <div className="container hero__grid">
        <div ref={contentRef} className="hero__content scroll-reveal">
          <p className="hero__greeting">Hi, I'm</p>
          <h1 className="hero__name">{personalInfo.name}</h1>
          <p className="hero__role">
            <span className="hero__typed">{typedRole}</span>
            <span className="hero__cursor">|</span>
          </p>
          <p className="hero__subtitle">{personalInfo.title}</p>
          <p className="hero__description">{personalInfo.tagline}</p>

         <div className="hero__buttons">

  {/* Projects Page */}
  <Link to="/projects" className="btn btn--primary">
    View Projects
    <FiArrowRight />
  </Link>

  {/* Resume PDF */}
  <a
    href={personalInfo.resumeUrl}
    className="btn btn--outline"
    download="Asra-Nawaz-Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FiDownload />
    Download Resume
  </a>

  {/* Contact Page */}
  <Link to="/contact" className="btn btn--ghost">
    <FiMail />
    Contact Me
  </Link>

</div>
        </div>

        <div ref={visualRef} className="hero__visual scroll-reveal">
          <div className="hero__workspace">
            <div className="hero__avatar">
              <div className="hero__avatar-inner">
                <span className="hero__avatar-initials">AN</span>
              </div>
              <div className="hero__avatar-ring" />
            </div>

            <div className="hero__code-window">
              <div className="hero__code-header">
                <span /><span /><span />
                <code>portfolio.jsx</code>
              </div>
              <pre className="hero__code-body">
                <code>{`const developer = {
  name: "Asra Nawaz",
  role: "Frontend Developer",
  skills: ["React", "JS", "CSS"],
  passion: "Building great UIs"
};`}</code>
              </pre>
            </div>

            <div className="hero__floating-icons">
              {techIcons.map((tech, i) => (
                <div
                  key={tech.name}
                  className="hero__tech-icon"
                  style={{ '--delay': `${i * 0.5}s`, '--index': i }}
                  title={tech.name}
                >
                  {tech.symbol}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
