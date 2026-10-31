import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const getIcon = (id) => {
    if (id === 'btech') return <GraduationCap size={22} />;
    if (id === 'hsc-12th') return <BookOpen size={22} />;
    return <Award size={22} />;
  };

  const getScoreBadgeClass = (id) => {
    if (id === 'btech') return 'badge badge-amber';
    if (id === 'hsc-12th') return 'badge badge-cyan';
    return 'badge badge-mint';
  };

  return (
    <section className="section" id="education">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag violet">
            <GraduationCap size={14} />
            <span>Academic Background</span>
          </div>
          <h2 className="section-title">
            Education & <span className="text-gradient">Credentials</span>
          </h2>
          <p className="section-subtitle">
            Strong academic foundation spanning engineering degree studies, junior college, and high school excellence.
          </p>
        </div>

        {/* Education Timeline Stack */}
        <div className="timeline-wrapper education-timeline-stack">
          {portfolioData.education.map((edu, index) => {
            const isBtech = edu.id === 'btech';
            const is12th = edu.id === 'hsc-12th';
            const is10th = edu.id === 'ssc-10th';

            return (
              <div
                key={edu.id}
                className="timeline-card education-card"
                style={{
                  borderLeft: `4px solid ${edu.accentColor}`,
                  marginBottom: index < portfolioData.education.length - 1 ? '1.75rem' : 0
                }}
              >
                <div className="timeline-header">
                  <div className="timeline-meta-wrap">
                    <div
                      className="timeline-edu-icon"
                      style={{
                        background: `${edu.accentColor}18`,
                        border: `1px solid ${edu.accentColor}35`,
                        color: edu.accentColor
                      }}
                    >
                      {getIcon(edu.id)}
                    </div>

                    <div style={{ flex: 1 }}>
                      <div className="timeline-title-row">
                        <h3 className="timeline-role" style={{ marginBottom: 0 }}>
                          {edu.degree}
                        </h3>
                        <span
                          className="badge"
                          style={{
                            background: `${edu.accentColor}15`,
                            color: edu.accentColor,
                            borderColor: `${edu.accentColor}35`,
                            fontSize: '0.72rem',
                            padding: '0.2rem 0.6rem'
                          }}
                        >
                          {edu.status}
                        </span>
                      </div>

                      <div className="timeline-company" style={{ color: edu.accentColor, marginTop: '0.35rem' }}>
                        <span>{edu.institution}</span>
                      </div>

                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          color: 'var(--text-subtle)',
                          fontSize: '0.85rem',
                          marginTop: '0.35rem'
                        }}
                      >
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="timeline-badge-col">
                    <span className={getScoreBadgeClass(edu.id)} style={{ fontSize: '0.82rem', padding: '0.32rem 0.8rem', fontWeight: 700 }}>
                      {isBtech && `⭐ CGPA: ${edu.cgpa} / 10.0`}
                      {is12th && `📊 ${edu.grade}`}
                      {is10th && `🏆 ${edu.grade}`}
                    </span>
                    <span className="timeline-period-badge">
                      <Calendar size={13} />
                      <span>{edu.period}</span>
                    </span>
                  </div>
                </div>

                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: 1.65 }}>
                  {edu.desc}
                </p>

                {/* Coursework / Subjects */}
                {edu.coursework && edu.coursework.length > 0 && (
                  <div>
                    <h4
                      style={{
                        fontSize: '0.82rem',
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '0.6rem',
                        fontWeight: 700
                      }}
                    >
                      {isBtech ? 'Relevant Computer Science Coursework:' : 'Key Subjects & Curriculum:'}
                    </h4>
                    <div className="coursework-grid">
                      {edu.coursework.map((course, idx) => (
                        <span
                          key={idx}
                          className="course-badge"
                          style={{
                            background: `${edu.accentColor}10`,
                            borderColor: `${edu.accentColor}30`,
                            color: edu.accentColor
                          }}
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Key Highlights / Achievements */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <div
                    style={{
                      marginTop: '1.25rem',
                      paddingTop: '1.15rem',
                      borderTop: '1px solid var(--border-light)'
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '0.82rem',
                        color: '#ffffff',
                        textTransform: 'uppercase',
                        letterSpacing: '0.06em',
                        marginBottom: '0.5rem',
                        fontWeight: 700
                      }}
                    >
                      Key Highlights:
                    </h4>
                    <ul className="timeline-points-list" style={{ marginTop: '0.5rem' }}>
                      {edu.achievements.map((ach, idx) => (
                        <li key={idx} className="timeline-point">
                          {ach}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
