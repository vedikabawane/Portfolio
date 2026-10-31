import React, { useState } from 'react';
import { 
  FolderGit2, 
  Play, 
  CheckCircle2, 
  Calculator as CalcIcon,
  ExternalLink,
  Globe
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import InteractiveCalculator from './InteractiveCalculator';

const GithubIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects({ onOpenPoliceModal, onOpenPlacementModal }) {
  const [showCalcDemo, setShowCalcDemo] = useState(false);

  return (
    <section className="section" id="projects">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag rose">
            <FolderGit2 size={14} />
            <span>Demonstrated Engineering</span>
          </div>
          <h2 className="section-title">
            Featured <span className="text-gradient">Projects & Platforms</span>
          </h2>
          <p className="section-subtitle">
            Deep-dive into major production-ready architectures, secure authentication workflows, live hosted platforms, and open-source code repositories.
          </p>
        </div>

        {/* Projects Stack */}
        <div className="projects-stack">
          {portfolioData.projects.map((proj) => {
            const isPolice = proj.id === 'police-bharti';
            const isPlacement = proj.id === 'placement-management';
            const isCodSoft = proj.id === 'codsoft-frontend-suite';

            let headlineClass = '';
            if (isPlacement) headlineClass = 'violet';
            if (isCodSoft) headlineClass = 'mint';

            return (
              <div
                key={proj.id}
                className="project-card"
                style={{
                  borderTop: `2px solid ${proj.accentColor}`
                }}
              >
                {/* Header row with badges */}
                <div className="project-card-header">
                  <div className="project-badges">
                    <span
                      className="badge"
                      style={{
                        background: `${proj.accentColor}18`,
                        color: proj.accentColor,
                        borderColor: `${proj.accentColor}40`
                      }}
                    >
                      {proj.badge}
                    </span>
                    <span className="badge badge-mint">{proj.status}</span>
                  </div>

                  <div className="project-header-actions">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge project-link-badge"
                        style={{
                          background: 'rgba(255, 51, 102, 0.12)',
                          color: '#ff3366',
                          borderColor: 'rgba(255, 51, 102, 0.35)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                        title="Open Live Website"
                      >
                        <Globe size={12} />
                        <span className="project-link-text">policebharati.justbytecoder.com ↗</span>
                      </a>
                    )}
                    {proj.githubUrl && (
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="badge project-link-badge"
                        style={{
                          background: 'rgba(168, 85, 247, 0.12)',
                          color: '#c084fc',
                          borderColor: 'rgba(168, 85, 247, 0.35)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          textDecoration: 'none',
                          cursor: 'pointer'
                        }}
                        title="View GitHub Repository"
                      >
                        <GithubIcon size={12} />
                        <span className="project-link-text">{isPlacement ? 'Vedika_CPMS_Project ↗' : 'GitHub ↗'}</span>
                      </a>
                    )}
                    <span className="project-header-stack" style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', fontFamily: 'var(--font-mono)' }}>
                      {isPolice && 'Flask + React + MySQL + JWT'}
                      {isPlacement && 'PHP + MySQL + Bootstrap'}
                      {isCodSoft && 'CodSoft Internship Suite'}
                    </span>
                  </div>
                </div>

                {/* Title & Headline */}
                <h3 className="project-title">{proj.title}</h3>
                <p className={`project-headline ${headlineClass}`}>{proj.headline}</p>
                <p className="project-overview">{proj.overview}</p>

                {/* 4 Key Features / Engineering Highlights */}
                <div className="project-highlights-grid">
                  {proj.highlights.map((h, idx) => (
                    <div key={idx} className="project-feature-box">
                      <div className="feature-box-title">
                        <CheckCircle2 size={16} color={proj.accentColor} />
                        <span>{h.title}</span>
                      </div>
                      <p className="feature-box-desc">{h.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Pills */}
                <div className="project-tech-tags">
                  {proj.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Interactive Action Buttons */}
                <div className="project-actions">
                  {isPolice && (
                    <>
                      {/* Live Platform Link requested by user */}
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        id="police-live-platform-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
                      >
                        <ExternalLink size={16} />
                        <span>Live Platform Demo ↗</span>
                      </a>

                      <button
                        onClick={onOpenPoliceModal}
                        className="btn btn-secondary"
                        id="launch-police-demo-btn"
                      >
                        <Play size={16} />
                        <span>{proj.interactiveDemo.buttonText}</span>
                      </button>

                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        id="police-github-repo-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      >
                        <GithubIcon size={16} />
                        <span>GitHub Profile ↗</span>
                      </a>
                    </>
                  )}

                  {isPlacement && (
                    <>
                      {/* GitHub Repository Link requested by user */}
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        id="placement-github-repo-btn"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          textDecoration: 'none',
                          background: 'linear-gradient(135deg, #8b5cf6, #6366f1)'
                        }}
                      >
                        <GithubIcon size={16} />
                        <span>View Source Code (GitHub) ↗</span>
                      </a>

                      <button
                        onClick={onOpenPlacementModal}
                        className="btn btn-outline-violet"
                        id="launch-placement-demo-btn"
                      >
                        <Play size={16} />
                        <span>{proj.interactiveDemo.buttonText}</span>
                      </button>
                    </>
                  )}

                  {isCodSoft && (
                    <>
                      <button
                        onClick={() => setShowCalcDemo(!showCalcDemo)}
                        className="btn btn-outline-mint"
                        id="toggle-calculator-demo-btn"
                      >
                        <CalcIcon size={16} />
                        <span>{showCalcDemo ? 'Hide Embedded Calculator' : proj.interactiveDemo.buttonText}</span>
                      </button>

                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        id="codsoft-github-repo-btn"
                        style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', borderColor: 'rgba(255, 255, 255, 0.2)' }}
                      >
                        <GithubIcon size={16} />
                        <span>GitHub Profile ↗</span>
                      </a>
                    </>
                  )}
                </div>

                {/* Render embedded calculator if opened */}
                {isCodSoft && showCalcDemo && (
                  <InteractiveCalculator />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
