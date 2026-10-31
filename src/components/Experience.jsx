import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Experience() {
  const exp = portfolioData.experience[0];

  return (
    <section className="section" id="experience">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag mint">
            <Briefcase size={14} />
            <span>Professional Journey</span>
          </div>
          <h2 className="section-title">
            Internship & <span className="text-gradient-mint">Work Experience</span>
          </h2>
          <p className="section-subtitle">
            Hands-on development experience building responsive, user-friendly frontend solutions.
          </p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-card">
            <div className="timeline-header">
              <div>
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">
                  <span>{exp.company}</span>
                  <span style={{ color: 'var(--text-subtle)' }}>·</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{exp.location}</span>
                </div>
              </div>

              <div className="timeline-badge-col">
                <span className="badge badge-mint">{exp.badge}</span>
                <span className="timeline-period-badge">
                  <Calendar size={13} />
                  <span>{exp.period}</span>
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
              {exp.summary}
            </p>

            <h4 style={{ fontSize: '0.9rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Key Contributions & Delivered Projects:
            </h4>

            <ul className="timeline-points-list">
              {exp.points.map((point, idx) => (
                <li key={idx} className="timeline-point">
                  {point}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: '1.75rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-subtle)', display: 'block', marginBottom: '0.5rem' }}>
                Technologies & Tools Applied:
              </span>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {exp.technologies.map((t, idx) => (
                  <span key={idx} className="tech-tag" style={{ color: '#34d399', borderColor: 'rgba(0, 245, 160, 0.25)' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
