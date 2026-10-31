import React, { useState, useEffect } from 'react';
import { 
  X, 
  Download, 
  ExternalLink, 
  FileText, 
  Eye, 
  CheckCircle 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  const [viewMode, setViewMode] = useState('pdf'); // 'pdf' | 'text'
  const { personal, experience, skillCategories, education } = portfolioData;

  // Exact 2 projects verified in official resume
  const resumeProjects = portfolioData.projects.filter(
    (p) => p.id === 'police-bharti' || p.id === 'placement-management'
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflowY = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflowY = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-container" 
        onClick={(e) => e.stopPropagation()} 
        style={{ 
          maxWidth: 980, 
          height: '92vh',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Header Controls - Modeled after Kartik's Portfolio */}
        <div className="modal-header" style={{ padding: '0.85rem 1.4rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span className="status-dot"></span>
            <div>
              <h3 style={{ fontSize: '0.98rem', fontWeight: 800, margin: 0, color: '#ffffff', letterSpacing: '-0.01em' }}>
                {personal.name} — Official Resume PDF
              </h3>
              <p style={{ fontSize: '0.74rem', color: 'var(--text-muted)', margin: 0 }}>
                Exact document provided by {personal.name}
              </p>
            </div>
          </div>

          {/* Action Tabs & Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            {/* View Mode Switcher */}
            <div className="resume-tab-switcher">
              <button
                onClick={() => setViewMode('pdf')}
                className={`resume-tab-btn ${viewMode === 'pdf' ? 'active' : 'inactive'}`}
                title="View PDF Document"
              >
                <Eye size={13} />
                <span>PDF Document</span>
              </button>
              <button
                onClick={() => setViewMode('text')}
                className={`resume-tab-btn ${viewMode === 'text' ? 'active' : 'inactive'}`}
                title="View Interactive Structured Resume"
              >
                <FileText size={13} />
                <span>Interactive</span>
              </button>
            </div>

            {/* Download Original PDF Button (Gradient Pill) */}
            <a
              href={personal.resumeUrl}
              download={personal.resumeDownloadName}
              className="btn-resume-download"
              title="Download the exact PDF resume file"
            >
              <Download size={14} />
              <span>Download</span>
            </a>

            {/* Open In New Tab */}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ fontSize: '0.78rem', padding: '0.42rem 0.75rem', borderRadius: '8px' }}
              title="Open PDF in new browser tab"
            >
              <ExternalLink size={13} />
              <span>Open Tab</span>
            </a>

            {/* Close Button */}
            <button 
              onClick={onClose} 
              className="modal-close-btn" 
              aria-label="Close Resume Modal"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Modal Main Body */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden', background: '#090e1a' }}>
          {viewMode === 'pdf' ? (
            <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {/* Native Object / Iframe PDF Embed */}
              <object
                data={`${personal.resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
                type="application/pdf"
                style={{
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  background: '#090e1a'
                }}
              >
                <iframe
                  src={`${personal.resumeUrl}#toolbar=1&navpanes=0&view=FitH`}
                  title="Vedika Bawane Official Resume PDF"
                  style={{
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    background: '#090e1a'
                  }}
                />
              </object>

              {/* Mobile Fallback Banner */}
              <div className="mobile-pdf-banner">
                <p style={{ fontSize: '0.8rem', color: '#e2e8f0', marginBottom: '0.5rem', fontWeight: 600 }}>
                  Viewing on mobile device?
                </p>
                <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    href={personal.resumeUrl}
                    download={personal.resumeDownloadName}
                    className="btn btn-primary btn-sm"
                  >
                    <Download size={13} />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={personal.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <ExternalLink size={13} />
                    <span>Open Fullscreen</span>
                  </a>
                  <button
                    onClick={() => setViewMode('text')}
                    className="btn btn-secondary btn-sm"
                  >
                    <FileText size={13} />
                    <span>Read Text View</span>
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* Structured Dark Interactive Resume (Modeled after Kartik's Portfolio) */
            <div className="interactive-resume-container">
              {/* Header Candidate Info */}
              <div className="interactive-resume-header">
                <div>
                  <h1 className="interactive-resume-name">{personal.name}</h1>
                  <a
                    href={personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive-resume-linkedin"
                  >
                    {personal.linkedinDisplay}
                  </a>
                </div>

                <div className="interactive-resume-contact">
                  <p style={{ margin: 0 }}>
                    <a href={`mailto:${personal.email}`}>{personal.email}</a>
                  </p>
                  <p style={{ margin: 0, fontFamily: 'var(--font-mono)', color: '#94a3b8' }}>
                    +91 {personal.phone}
                  </p>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="interactive-resume-section">
                <h4 className="interactive-resume-sec-title">Professional Summary</h4>
                <p style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.65, textAlign: 'justify', margin: 0 }}>
                  {personal.summary}
                </p>
              </section>

              {/* Experience */}
              <section className="interactive-resume-section">
                <h4 className="interactive-resume-sec-title">Experience</h4>
                {(experience || []).map((exp, idx) => (
                  <div key={idx} className="interactive-resume-card">
                    <div className="interactive-card-row">
                      <h5 className="interactive-card-title">{exp.company}</h5>
                      <span className="interactive-card-location">{exp.location}</span>
                    </div>
                    <div className="interactive-card-subrow">
                      <span className="interactive-card-role">{exp.role}</span>
                      <span className="interactive-card-date">{exp.period}</span>
                    </div>
                    <ul className="interactive-resume-bullets">
                      {(exp.points || []).map((pt, pIdx) => {
                        const parts = pt.split(': ');
                        const title = parts.length > 1 ? parts[0] + ':' : '';
                        const desc = parts.length > 1 ? parts.slice(1).join(': ') : pt;
                        return (
                          <li key={pIdx} className="interactive-resume-bullet">
                            <span className="interactive-bullet-dot">•</span>
                            <span>
                              {title && <strong>{title} </strong>}
                              {desc}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                ))}
              </section>

              {/* Projects (Verified in Resume) */}
              <section className="interactive-resume-section">
                <h4 className="interactive-resume-sec-title">Projects (Verified in Resume)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {resumeProjects.map((p) => (
                    <div key={p.id} className="interactive-resume-card">
                      <div className="interactive-card-row">
                        <h5 className="interactive-card-title">{p.title}</h5>
                        <span className="interactive-card-date" style={{ color: '#22d3ee' }}>
                          {p.id === 'police-bharti' ? 'Full-Stack EdTech Platform' : 'Web-Based Enterprise System'}
                        </span>
                      </div>

                      <ul className="interactive-resume-bullets" style={{ marginTop: '0.5rem' }}>
                        {p.highlights.map((h, hIdx) => (
                          <li key={hIdx} className="interactive-resume-bullet">
                            <span className="interactive-bullet-dot">•</span>
                            <span>
                              <strong>{h.title}:</strong> {h.desc}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="interactive-tech-stack-row">
                        <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#94a3b8', marginRight: '0.25rem' }}>
                          Tech Stack:
                        </span>
                        {p.techStack.map((tech, tIdx) => (
                          <span key={tIdx} className="interactive-tech-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Technical Skills */}
              <section className="interactive-resume-section">
                <h4 className="interactive-resume-sec-title">Technical Skills</h4>
                <div className="interactive-resume-card" style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {skillCategories.map((cat) => (
                    <div key={cat.id} className="interactive-resume-bullet" style={{ fontSize: '0.85rem' }}>
                      <span className="interactive-bullet-dot">•</span>
                      <span>
                        <strong>{cat.name}:</strong>{' '}
                        <span style={{ color: '#cbd5e1' }}>{cat.skills.join(', ')}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education (Official ATS 1-page resume verified degree) */}
              <section className="interactive-resume-section">
                <h4 className="interactive-resume-sec-title">Education</h4>
                <div className="interactive-resume-card">
                  <div className="interactive-card-row">
                    <h5 className="interactive-card-title">{education[0].institution}</h5>
                    <span className="interactive-card-location">{education[0].location}</span>
                  </div>
                  <div className="interactive-card-subrow" style={{ marginBottom: 0 }}>
                    <span className="interactive-card-role">{education[0].degree} (CGPA: {education[0].cgpa})</span>
                    <span className="interactive-card-date">{education[0].period}</span>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>

        {/* Footer Bar - Just like Kartik's portfolio */}
        <div 
          style={{
            padding: '0.75rem 1.4rem',
            background: '#060a12',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.8rem',
            color: 'var(--text-muted)'
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
            <CheckCircle size={14} color="#10b981" />
            <span>Official Resume Document ({personal.name})</span>
          </span>

          <a
            href={personal.resumeUrl}
            download={personal.resumeDownloadName}
            style={{ 
              color: '#22d3ee', 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.35rem',
              textDecoration: 'none'
            }}
          >
            <Download size={13} />
            <span>Download Original PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
