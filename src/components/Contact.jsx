import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  CheckCircle2,
  ExternalLink 
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { portfolioData } from '../data/portfolioData';

const LinkedInIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Contact() {
  const { personal } = portfolioData;

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // Confetti fallback
    }

    setFormSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormSubmitted(false), 7000);
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag rose">
            <Mail size={14} />
            <span>Connect & Collaborate</span>
          </div>
          <h2 className="section-title">
            Let's Build Something <span className="text-gradient">Impactful Together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have an internship opportunity, full-time software developer role, or want to discuss a project, my inbox is always open.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Info Tiles */}
          <div className="contact-info-cards">
            {/* Email Tile */}
            <div className="contact-tile">
              <div className="contact-tile-left">
                <div className="contact-icon-box" style={{ background: 'rgba(255, 42, 95, 0.12)', color: 'var(--accent-rose-light)' }}>
                  <Mail size={20} />
                </div>
                <div className="contact-tile-text">
                  <h4>Email Address</h4>
                  <p>{personal.email}</p>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="copy-btn"
                id="copy-email-btn"
                title="Copy email address"
              >
                {copiedEmail ? <Check size={13} color="var(--accent-mint)" /> : <Copy size={13} />}
                <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Phone Tile */}
            <div className="contact-tile">
              <div className="contact-tile-left">
                <div className="contact-icon-box" style={{ background: 'rgba(139, 92, 246, 0.12)', color: '#c084fc' }}>
                  <Phone size={20} />
                </div>
                <div className="contact-tile-text">
                  <h4>Phone / WhatsApp</h4>
                  <p>+91 {personal.phone}</p>
                </div>
              </div>
              <button
                onClick={handleCopyPhone}
                className="copy-btn"
                id="copy-phone-btn"
                title="Copy phone number"
              >
                {copiedPhone ? <Check size={13} color="var(--accent-mint)" /> : <Copy size={13} />}
                <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* LinkedIn Tile */}
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact-tile"
              id="linkedin-link-btn"
            >
              <div className="contact-tile-left">
                <div className="contact-icon-box" style={{ background: 'rgba(0, 245, 160, 0.12)', color: '#34d399' }}>
                  <LinkedInIcon size={20} />
                </div>
                <div className="contact-tile-text">
                  <h4>LinkedIn Profile</h4>
                  <p>{personal.linkedinDisplay}</p>
                </div>
              </div>
              <span className="copy-btn" style={{ pointerEvents: 'none' }}>
                <ExternalLink size={13} />
                <span>Visit</span>
              </span>
            </a>

            {/* GitHub Tile */}
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="contact-tile"
              id="github-contact-btn"
            >
              <div className="contact-tile-left">
                <div className="contact-icon-box" style={{ background: 'rgba(34, 211, 238, 0.12)', color: '#22d3ee' }}>
                  <GithubIcon size={20} />
                </div>
                <div className="contact-tile-text">
                  <h4>GitHub Profile</h4>
                  <p>{personal.githubDisplay}</p>
                </div>
              </div>
              <span className="copy-btn" style={{ pointerEvents: 'none' }}>
                <ExternalLink size={13} />
                <span>Visit</span>
              </span>
            </a>

            {/* Location Tile */}
            <div className="contact-tile">
              <div className="contact-tile-left">
                <div className="contact-icon-box" style={{ background: 'rgba(245, 158, 11, 0.12)', color: '#fbbf24' }}>
                  <MapPin size={20} />
                </div>
                <div className="contact-tile-text">
                  <h4>Current Location</h4>
                  <p>{personal.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-card">
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle2 size={54} color="var(--accent-mint)" style={{ margin: '0 auto 1.25rem' }} />
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                  Thank You for Reaching Out!
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  Your message has been received with enthusiasm. Vedika Bawane will get back to you shortly at your email address!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label" htmlFor="contact-name">Your Full Name *</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Aditi Sharma / Recruiter"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-email">Your Work Email *</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-subject">Subject / Opportunity</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Software Engineer Opportunity / Project Collaboration"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="contact-message">Your Message *</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hi Vedika, I came across your portfolio and wanted to discuss an opportunity..."
                    className="form-textarea"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  id="send-message-btn"
                >
                  <Send size={16} />
                  <span>Send Message Directly</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
