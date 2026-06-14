import { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import './Contact.css';

export default function Contact() {
  const ref = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div ref={ref} className="scroll-reveal">
          <h2 className="section-title">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <div className="section-divider" />

          <p className="contact__intro">
            I'm always interested in discussing new projects, creative ideas, and
            opportunities to grow as a developer.
          </p>

          <div className="contact__grid">
            <div className="contact__info">
              <div className="contact__item">
                <FiMail />
                <div>
                  <h4>Email</h4>
                  <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
                </div>
              </div>
              <div className="contact__item">
                <FiPhone />
                <div>
                  <h4>Phone</h4>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              </div>
              <div className="contact__item">
                <FiMapPin />
                <div>
                  <h4>Location</h4>
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            <form className="contact__form" onSubmit={handleSubmit}>
              {submitted && (
                <div className="contact__success">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <div className="contact__row">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project inquiry"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button type="submit" className="btn btn--primary">
                <FiSend />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
