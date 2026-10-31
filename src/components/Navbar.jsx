import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  FileText, 
  Download, 
  ArrowRight, 
  Mail, 
  Phone 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const LinkedInIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const { personal } = portfolioData;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
    }
    return () => {
      document.body.style.overflowY = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner">
          {/* Left: Brand Identity with Circular Photo Avatar (Matching Kartik's Portfolio) */}
          <a href="#hero" className="navbar-brand" aria-label="Vedika Bawane Home">
            <div className="navbar-avatar-wrapper">
              <div className="navbar-avatar-box">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="navbar-avatar-img"
                />
              </div>
              <span className="navbar-avatar-pulse-dot" title="2026 Batch · Ready for opportunities"></span>
            </div>

            <div className="brand-text-block">
              <span className="brand-name">{personal.name}</span>
              <span className="brand-subtitle">
                <span className="subtitle-dot"></span>
                Python Full Stack Developer
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Capsule (Home, About, Skills, Experience, Projects, Education, Contact) */}
          <nav className="nav-capsule" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-capsule-link ${isActive ? 'active' : ''}`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Right: Exactly Two Action Buttons (Resume + Download CV) */}
          <div className="navbar-actions">
            <button
              onClick={onOpenResume}
              className="btn-nav-resume"
              title="Preview ATS resume"
              id="header-resume-btn"
            >
              <FileText size={14} className="btn-nav-resume-icon" />
              <span>Resume</span>
            </button>

            <a
              href={personal.resumeUrl}
              download={personal.resumeDownloadName}
              className="btn-nav-download"
              title="Download original resume PDF"
              id="header-download-btn"
            >
              <Download size={14} />
              <span>Download CV</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="mobile-hamburger-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (Only mounted when opened, prevents UI bleed) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={() => setMobileMenuOpen(false)}>
          <div className="mobile-drawer-card" onClick={(e) => e.stopPropagation()}>
            {/* Header info in drawer */}
            <div className="mobile-drawer-header">
              <div className="navbar-avatar-wrapper" style={{ width: 44, height: 44 }}>
                <div className="navbar-avatar-box">
                  <img
                    src={personal.avatar}
                    alt={personal.name}
                    className="navbar-avatar-img"
                  />
                </div>
                <span className="navbar-avatar-pulse-dot"></span>
              </div>
              <div style={{ flex: 1 }}>
                <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff' }}>{personal.name}</h4>
                <p style={{ fontSize: '0.78rem', color: '#22d3ee', fontFamily: 'var(--font-mono)' }}>
                  Python Full Stack Developer
                </p>
                <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                  B.Tech CSE @ GCOEC (CGPA 8.53)
                </p>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="modal-close-btn"
                aria-label="Close menu"
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation links */}
            <div className="mobile-drawer-links">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1);
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`mobile-drawer-item ${isActive ? 'active' : ''}`}
                  >
                    <span>{item.name}</span>
                    <ArrowRight size={14} style={{ opacity: isActive ? 1 : 0.4 }} />
                  </a>
                );
              })}
            </div>

            {/* Quick Actions (View Resume + Download CV) */}
            <div className="mobile-drawer-actions">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="btn btn-secondary btn-sm"
                style={{ flex: 1 }}
              >
                <FileText size={14} style={{ color: '#22d3ee' }} />
                <span>View Resume</span>
              </button>

              <a
                href={personal.resumeUrl}
                download={personal.resumeDownloadName}
                className="btn-nav-download"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <Download size={14} />
                <span>Download CV</span>
              </a>
            </div>

            {/* Direct Connect in Mobile Drawer */}
            <div className="mobile-drawer-socials">
              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="drawer-social-link">
                <LinkedInIcon size={15} />
                <span>LinkedIn</span>
              </a>
              <a href={personal.github} target="_blank" rel="noreferrer" className="drawer-social-link">
                <GithubIcon size={15} />
                <span>GitHub</span>
              </a>
              <a href={`mailto:${personal.email}`} className="drawer-social-link">
                <Mail size={15} />
                <span>Email</span>
              </a>
              <a href={`tel:${personal.phone}`} className="drawer-social-link">
                <Phone size={15} />
                <span>Call</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
