import { personalInfo, footerLinks } from '../data/portfolioData';
import { FiGithub, FiLinkedin, FiFacebook, FiInstagram } from 'react-icons/fi';
import './Footer.css';

const socialIcons = [
  { icon: FiLinkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
  { icon: FiGithub, href: personalInfo.social.github, label: 'GitHub' },
  { icon: FiFacebook, href: personalInfo.social.facebook, label: 'Facebook' },
  { icon: FiInstagram, href: personalInfo.social.instagram, label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            Asra<span>.dev</span>
          </a>
          <p>Frontend Web Developer building modern, responsive web applications.</p>
        </div>

        <div className="footer__links">
          <h4>Quick Links</h4>
          <ul>
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__social">
          <h4>Social Links</h4>
          <div className="footer__social-icons">
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>&copy; 2026 Asra Nawaz. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
