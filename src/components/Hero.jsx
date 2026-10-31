import React, { useState, useEffect } from 'react';
import { ArrowRight, FileText, Sparkles, Copy, Check, Download } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const roles = [
  "Aspiring Software Developer",
  "Python & Flask Backend Architect",
  "React.js & Full-Stack Engineer",
  "Database & REST API Designer",
  "B.Tech CSE @ GCOE Chandrapur (8.53 CGPA)"
];

const GithubIcon = ({ size = 16, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeTab, setActiveTab] = useState('developer.py');
  const [copied, setCopied] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < current.length) {
          setDisplayText(current.substring(0, displayText.length + 1));
        } else {
          // Pause when full word typed
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(current.substring(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 35 : 75);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const terminalCode = {
    'developer.py': `# Vedika Bawane - Software Developer Profile
class SoftwareDeveloper:
    def __init__(self):
        self.name = "Vedika Bawane"
        self.degree = "B.Tech Computer Science & Engg"
        self.college = "Govt College of Engg, Chandrapur"
        self.cgpa = 8.53
        self.status = "2026 Batch · Ready for Opportunities"

    def core_stack(self):
        return {
            "languages": ["Python", "JavaScript", "SQL", "Java", "C++"],
            "backend": ["Flask", "REST APIs", "SQLAlchemy", "JWT"],
            "frontend": ["React.js", "Next.js", "HTML5", "CSS3"],
            "databases": ["MySQL", "PostgreSQL", "MongoDB"]
        }

dev = SoftwareDeveloper()
print("Engineered for impact & scalability.")`,

    'skills.json': `{
  "developer": "Vedika Bawane",
  "specialization": "Full-Stack & Backend Engineering",
  "major_projects": [
    "Police Bharati Student Learning Platform",
    "Campus Placement Management System",
    "CodSoft Web Development Suite"
  ],
  "experience": "Web Development Intern @ CodSoft (Aug 2024)",
  "education": {
    "institution": "GCOE Chandrapur",
    "cgpa": 8.53,
    "year": "2022-2026"
  }
}`,

    'routes.py': `@app.route('/api/v1/auth/login', methods=['POST'])
@jwt_required_optional
def authenticate_user():
    """Police Bharati JWT Authentication Endpoint"""
    credentials = request.get_json()
    user = User.authenticate(credentials['email'], credentials['password'])
    
    if not user:
        return jsonify({"error": "Invalid credentials"}), 401
        
    access_token = create_access_token(identity=user.id, role=user.role)
    return jsonify({
        "status": "success",
        "role": user.role,  # 'student' or 'admin'
        "token": access_token
    }), 200`
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(terminalCode[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="section hero-section" id="hero">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Introductions & CTAs */}
          <div className="hero-content">
            {/* Developer Portrait Avatar Banner (Modeled after Kartik's Hero) */}
            <div className="hero-avatar-badge-wrap">
              <div className="hero-avatar-halo-box">
                <div className="hero-avatar-glow-halo"></div>
                <div className="hero-avatar-circle">
                  <img
                    src={portfolioData.personal.avatar}
                    alt={portfolioData.personal.name}
                    className="hero-avatar-img"
                  />
                </div>
                <div className="hero-avatar-pulse-dot" title="Available for opportunities">
                  <span className="dot-ping"></span>
                </div>
              </div>

              <div className="hero-avatar-meta">
                <div className="hero-badge-pill">
                  <span className="badge-pulse-indicator"></span>
                  <span>Open to Opportunities · 2026 Batch</span>
                </div>
                <div className="hero-avatar-subline">
                  <span>B.Tech CSE @ Govt. College of Engg, Chandrapur</span>
                  <span className="hero-cgpa-pill">8.53 CGPA</span>
                </div>
              </div>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="text-gradient">{portfolioData.personal.name}</span>
              <span className="hero-animated-role">
                {displayText}
                <span style={{ color: 'var(--accent-rose)', animation: 'pulseDot 1s infinite' }}>|</span>
              </span>
            </h1>

            <p className="hero-description">
              {portfolioData.personal.summary}
            </p>

            <div className="hero-actions">
              <a href="#projects" className="btn btn-primary" id="hero-view-projects">
                <span>Explore Featured Projects</span>
                <ArrowRight size={17} />
              </a>

              <button
                onClick={onOpenResume}
                className="btn btn-secondary"
                id="hero-open-resume"
              >
                <FileText size={16} />
                <span>View Resume</span>
              </button>

              <a
                href={portfolioData.personal.resumeUrl}
                download={portfolioData.personal.resumeDownloadName}
                className="btn btn-outline-mint"
                title="Download original PDF resume"
                id="hero-download-resume"
              >
                <Download size={15} />
                <span>Download CV</span>
              </a>

              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                title="Explore GitHub Profile"
                id="hero-github-btn"
                style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>

              <a href="#contact" className="btn btn-outline-rose" id="hero-contact-btn">
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Quick highlight chips */}
            <div className="hero-highlights-chips">
              <div className="highlight-chip">
                <span>🎓</span>
                <span>CGPA: <strong>8.53 / 10</strong></span>
              </div>
              <div className="highlight-chip">
                <span>💼</span>
                <span>Intern: <strong>CodSoft (Aug 2024)</strong></span>
              </div>
              <div className="highlight-chip">
                <span>🛡️</span>
                <span>Flagship: <strong>Police Bharati Platform</strong></span>
              </div>
              <div className="highlight-chip">
                <span>🏛️</span>
                <span>System: <strong>Campus Placement Portal</strong></span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Hologram Code Window */}
          <div className="hero-visual">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dots">
                  <span className="dot dot-red"></span>
                  <span className="dot dot-yellow"></span>
                  <span className="dot dot-green"></span>
                </div>

                <div className="terminal-tabs">
                  {Object.keys(terminalCode).map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`terminal-tab ${activeTab === tab ? 'active' : ''}`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <button
                  onClick={handleCopyCode}
                  className="copy-btn"
                  title="Copy code snippet"
                  style={{ padding: '0.25rem 0.6rem' }}
                >
                  {copied ? <Check size={13} color="var(--accent-mint)" /> : <Copy size={13} />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <div className="terminal-body">
                <pre style={{ margin: 0, fontFamily: 'inherit' }}>
                  <code>{terminalCode[activeTab]}</code>
                </pre>
              </div>

              <div className="terminal-footer">
                <div className="terminal-status-ok">
                  <span className="status-dot" style={{ width: 6, height: 6 }}></span>
                  <span className="terminal-stack-text">Python 3.11 · Flask REST · React SPA · MySQL DB</span>
                </div>
                <span className="terminal-encoding-text">UTF-8 · Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
