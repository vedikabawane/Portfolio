import React from 'react';
import { 
  GraduationCap, 
  MapPin, 
  Mail, 
  Phone, 
  Award, 
  Server, 
  ShieldCheck, 
  Database, 
  Sparkles,
  ExternalLink 
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function About({ onOpenResume }) {
  const { personal } = portfolioData;

  const pillars = [
    {
      title: "Backend & RESTful Engineering",
      desc: "Specialized in Flask, Python, and SQLAlchemy to build reliable, modular API services with automated testing and structured error handling.",
      icon: <Server size={22} />,
      colorClass: "rose"
    },
    {
      title: "Security & Role-Based Access",
      desc: "Hands-on experience implementing stateless JWT authentication, RBAC permission tiers (e.g. Student vs Admin), and rigorous request validation.",
      icon: <ShieldCheck size={22} />,
      colorClass: "violet"
    },
    {
      title: "Database Modeling & Persistence",
      desc: "Solid grasp of relational database design, query optimization, indexing in MySQL & PostgreSQL, along with ORMs and schema migrations.",
      icon: <Database size={22} />,
      colorClass: "mint"
    },
    {
      title: "Social Impact & User Empathy",
      desc: "Passionate about building inclusive tech like the Marathi-first Police Bharati platform, delivering educational tools directly to grassroots aspirants.",
      icon: <Sparkles size={22} />,
      colorClass: "amber"
    }
  ];

  const quickFacts = [
    {
      label: "Education",
      value: `${personal.degree} (CGPA: ${personal.cgpa})`,
      icon: <GraduationCap size={18} />
    },
    {
      label: "Institution",
      value: personal.college,
      icon: <Award size={18} />
    },
    {
      label: "Location",
      value: personal.location,
      icon: <MapPin size={18} />
    },
    {
      label: "Email",
      value: personal.email,
      icon: <Mail size={18} />
    },
    {
      label: "Phone",
      value: `+91 ${personal.phone}`,
      icon: <Phone size={18} />
    }
  ];

  return (
    <section className="section" id="about">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag violet">
            <Sparkles size={14} />
            <span>Profile & Background</span>
          </div>
          <h2 className="section-title">
            Engineering Web Solutions with <span className="text-gradient">Precision & Purpose</span>
          </h2>
          <p className="section-subtitle">
            A snapshot of my academic journey, engineering values, and passion for building resilient software systems.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Narrative & Core Pillars */}
          <div className="about-narrative">
            <p className="about-p">
              I am an <strong>Aspiring Software Developer</strong> pursuing my Bachelor of Technology in 
              <strong> Computer Science & Engineering</strong> at <strong>Government College of Engineering, Chandrapur</strong> with a current cumulative CGPA of <strong>8.53 / 10.0</strong> (2022 – 2026 batch).
            </p>

            <p className="about-p">
              My engineering philosophy revolves around solving real-world challenges through clean code and scalable design. 
              During my <strong>Web Development Internship at CodSoft</strong>, I strengthened my frontend capabilities by designing structured portfolios, landing pages, and functional applications. Building upon that, I engineered full-stack platforms including the <strong>Marathi-first Police Bharati Learning Platform</strong> and the <strong>Campus Placement Management System</strong>.
            </p>

            <p className="about-p">
              Whether writing RESTful endpoints in Flask, managing relational transactions in MySQL, or crafting modular interfaces in React.js, I continuously strive to elevate performance, security, and user delight.
            </p>

            {/* Core Pillars */}
            <div className="about-pillars">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="pillar-card">
                  <div className={`pillar-icon ${pillar.colorClass}`}>
                    {pillar.icon}
                  </div>
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-desc">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Quick Facts & Resume Highlight */}
          <div className="quick-facts-card">
            {/* Profile Avatar Card Header */}
            <div className="about-profile-header-card">
              <div className="about-avatar-ring">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="about-avatar-img"
                />
                <span className="about-avatar-status"></span>
              </div>
              <div className="about-profile-info">
                <h4 className="about-profile-name">{personal.name}</h4>
                <p className="about-profile-title">Python Full Stack Developer</p>
                <p className="about-profile-college">GCOE Chandrapur · 2022–2026</p>
              </div>
            </div>

            <h3 className="facts-title">
              <Award size={20} color="var(--accent-rose)" />
              <span>Academic & Professional Snapshot</span>
            </h3>

            <div className="facts-list">
              {quickFacts.map((fact, idx) => (
                <div key={idx} className="fact-item">
                  <div className="fact-icon-box">
                    {fact.icon}
                  </div>
                  <div className="fact-content">
                    <span className="fact-label">{fact.label}</span>
                    <span className="fact-value">{fact.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border-light)' }}>
              <button
                onClick={onOpenResume}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Read Full Resume</span>
                <ExternalLink size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
