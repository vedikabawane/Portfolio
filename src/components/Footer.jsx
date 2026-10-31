import React from 'react';
import { ArrowUp, Mail, Phone } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const currentYear = 2026;

const LinkedInIcon = ({ size = 14, color = "#34d399" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 14, color = "#22d3ee" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { personal } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand & summary */}
          <div className="footer-brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.85rem' }}>
              <div className="nav-logo-mark" style={{ width: 34, height: 34, fontSize: '0.85rem' }}>VB</div>
              <h3 style={{ fontSize: '1.25rem', margin: 0, color: '#ffffff' }}>{personal.name}</h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', maxWidth: 420, lineHeight: 1.6 }}>
              Aspiring Software Developer passionate about Python, Flask, React.js, RESTful architectures, and building user-centric digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem' }}>
              <li><a href="#about" className="nav-link">About Profile</a></li>
              <li><a href="#skills" className="nav-link">Technical Skills</a></li>
              <li><a href="#projects" className="nav-link">Featured Projects</a></li>
              <li><a href="#experience" className="nav-link">CodSoft Internship</a></li>
              <li><a href="#education" className="nav-link">Education (GCOEC)</a></li>
              <li><a href="#contact" className="nav-link">Get in Touch</a></li>
            </ul>
          </div>

          {/* Connect Details */}
          <div>
            <h4 style={{ fontSize: '0.85rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '1rem' }}>
              Direct Connect
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              <li>
                <a href={`mailto:${personal.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Mail size={14} color="var(--accent-rose-light)" />
                  <span>{personal.email}</span>
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Phone size={14} color="#c084fc" />
                  <span>+91 {personal.phone}</span>
                </a>
              </li>
              <li>
                <a href={personal.linkedin} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <LinkedInIcon size={14} color="#34d399" />
                  <span>{personal.linkedinDisplay}</span>
                </a>
              </li>
              <li>
                <a href={personal.github} target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <GithubIcon size={14} color="#22d3ee" />
                  <span>{personal.githubDisplay}</span>
                </a>
              </li>
              <li style={{ marginTop: '0.5rem' }}>
                <button onClick={onOpenResume} className="btn btn-outline-rose btn-sm" style={{ padding: '0.4rem 0.85rem', fontSize: '0.78rem' }}>
                  View Full Resume
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Strip */}
        <div className="footer-bottom">
          <div>
            © {currentYear} {personal.name} · Designed & Built with Vanilla CSS & React.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <span>B.Tech CSE (2022-2026) · CGPA 8.53</span>
            <button
              onClick={scrollToTop}
              className="copy-btn"
              title="Back to top of page"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
