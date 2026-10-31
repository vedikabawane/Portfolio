import React, { useState } from 'react';
import { 
  X, 
  Building2, 
  CheckCircle2, 
  Calendar, 
  FileCheck,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const GithubIcon = ({ size = 15, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function PlacementModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('drives'); // 'drives' | 'profile' | 'admin'
  const [appliedDrives, setAppliedDrives] = useState({});

  if (!isOpen) return null;

  const { placementDemoData } = portfolioData;

  const handleApply = (company) => {
    setAppliedDrives((prev) => ({
      ...prev,
      [company]: 'Application Submitted (Under Review)'
    }));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: 38,
              height: 38,
              borderRadius: 10,
              background: 'rgba(139, 92, 246, 0.15)',
              border: '1px solid rgba(139, 92, 246, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-violet)'
            }}>
              <Building2 size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Campus Placement Management System</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Enterprise TPO & Student Recruitment Portal · PHP, MySQL, Bootstrap
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <a
              href="https://github.com/vedikabawane/Vedika_CPMS_Project"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-violet btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                padding: '0.35rem 0.85rem',
                fontSize: '0.78rem'
              }}
              title="Open GitHub Repository"
            >
              <GithubIcon size={14} />
              <span>GitHub Repo ↗</span>
            </a>
            <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div style={{
          display: 'flex',
          gap: '0.5rem',
          padding: '0.75rem 2rem 0',
          borderBottom: '1px solid var(--border-light)',
          background: 'rgba(255, 255, 255, 0.01)',
          overflowX: 'auto'
        }}>
          {[
            { id: 'drives', label: '💼 Active Placement Drives' },
            { id: 'profile', label: '👤 Student Profile Management' },
            { id: 'admin', label: '🏛️ TPO Admin Workflows' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="filter-pill"
              style={{
                borderRadius: '8px 8px 0 0',
                borderBottom: 'none',
                background: activeTab === tab.id ? 'rgba(139, 92, 246, 0.15)' : 'transparent',
                color: activeTab === tab.id ? '#c084fc' : 'var(--text-muted)',
                borderColor: activeTab === tab.id ? 'rgba(139, 92, 246, 0.35)' : 'transparent',
                padding: '0.5rem 1rem',
                fontSize: '0.85rem'
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Content Body */}
        <div className="modal-body">
          {/* TAB 1: ACTIVE DRIVES */}
          {activeTab === 'drives' && (
            <div>
              {/* Portal Stats Strip */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Registered</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffffff' }}>{placementDemoData.stats.registeredStudents}</div>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Active Drives</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#c084fc' }}>{placementDemoData.stats.activeDrives}</div>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Offers Released</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-mint)' }}>{placementDemoData.stats.offersReleased}</div>
                </div>
                <div style={{ padding: '0.85rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }}>Highest Package</span>
                  <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent-amber)' }}>{placementDemoData.stats.highestPackage}</div>
                </div>
              </div>

              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.85rem' }}>Upcoming Recruitment Drives</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {placementDemoData.upcomingDrives.map((drive, idx) => (
                  <div key={idx} style={{
                    padding: '1.15rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexWrap: 'wrap',
                    gap: '1rem'
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.2rem' }}>
                        <h4 style={{ fontSize: '1.05rem', color: '#ffffff' }}>{drive.company}</h4>
                        <span className="badge badge-violet">{drive.role}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <span>📅 Drive Date: {drive.date}</span>
                        <span>🎯 Criteria: {drive.criteria}</span>
                      </div>
                    </div>

                    <div>
                      {appliedDrives[drive.company] ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--accent-mint)', fontSize: '0.85rem', fontWeight: 600 }}>
                          <CheckCircle2 size={16} />
                          <span>Applied</span>
                        </span>
                      ) : (
                        <button
                          onClick={() => handleApply(drive.company)}
                          className="btn btn-outline-violet btn-sm"
                          disabled={drive.status !== 'Open'}
                          style={{ opacity: drive.status !== 'Open' ? 0.5 : 1 }}
                        >
                          {drive.status === 'Open' ? 'Register for Drive' : 'Closed'}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: STUDENT PROFILE MANAGEMENT */}
          {activeTab === 'profile' && (
            <div>
              <div style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-lg)',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-light)',
                marginBottom: '1.25rem'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>{placementDemoData.studentProfileMock.name}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      Roll No: {placementDemoData.studentProfileMock.rollNo} · {placementDemoData.studentProfileMock.branch}
                    </p>
                  </div>
                  <span className="badge badge-mint">{placementDemoData.studentProfileMock.status}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', fontSize: '0.85rem' }}>
                  <div>
                    <span style={{ color: 'var(--text-subtle)' }}>College / University:</span>
                    <p style={{ color: '#ffffff', fontWeight: 600 }}>{placementDemoData.studentProfileMock.college}</p>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-subtle)' }}>Cumulative CGPA:</span>
                    <p style={{ color: 'var(--accent-amber)', fontWeight: 700, fontSize: '1.1rem' }}>{placementDemoData.studentProfileMock.cgpa} / 10.0</p>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-subtle)' }}>Key Skills Verified:</span>
                    <p style={{ color: '#cbd5e1' }}>Python, Flask, React.js, MySQL, REST APIs</p>
                  </div>
                  <div>
                    <span style={{ color: 'var(--text-subtle)' }}>Resume Status:</span>
                    <p style={{ color: 'var(--accent-mint)' }}>✓ Verified & Attached to TPO Database</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ADMIN WORKFLOWS */}
          {activeTab === 'admin' && (
            <div>
              <h4 style={{ fontSize: '1rem', color: '#ffffff', marginBottom: '0.85rem' }}>Administrative & TPO Features</h4>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.6' }}>
                The administrative panel built into the system empowers Placement Officers with automated tools to simplify annual placement cycles:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                <div style={{ padding: '1.15rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-light)' }}>
                  <FileCheck size={20} color="var(--accent-violet)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.35rem' }}>Automated Eligibility Filtering</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Instantly queries student databases in MySQL to match company CGPA cutoffs, active backlogs, and branch requirements without manual spreadsheets.
                  </p>
                </div>

                <div style={{ padding: '1.15rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-light)' }}>
                  <Calendar size={20} color="var(--accent-rose-light)" style={{ marginBottom: '0.5rem' }} />
                  <h4 style={{ fontSize: '0.95rem', color: '#ffffff', marginBottom: '0.35rem' }}>Drive & Interview Scheduling</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Coordinates multi-round schedules (online test, technical interview, HR discussion) and broadcasts instant updates to enrolled students.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
