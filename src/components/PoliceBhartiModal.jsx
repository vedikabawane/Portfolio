import React, { useState } from 'react';
import { 
  X, 
  ShieldCheck, 
  CheckCircle2, 
  XCircle, 
  Award, 
  BookOpen, 
  FileText, 
  Video, 
  Calendar, 
  TrendingUp, 
  KeyRound,
  RotateCcw,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function PoliceBhartiModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('quiz'); // 'quiz' | 'dashboard' | 'modules' | 'architecture'
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!isOpen) return null;

  const quiz = portfolioData.policeBhartiQuiz;
  const currentQ = quiz[currentQuestionIdx];

  const handleSelectOption = (idx) => {
    if (selectedOption !== null) return; // Prevent changing after selection
    setSelectedOption(idx);
    if (idx === currentQ.answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx + 1 < quiz.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOption(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setScore(0);
    setQuizFinished(false);
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
              background: 'rgba(255, 42, 95, 0.15)',
              border: '1px solid rgba(255, 42, 95, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-rose-light)'
            }}>
              <ShieldCheck size={20} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem' }}>Police Bharati Learning Platform</h3>
              <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                Marathi-First EdTech Platform Simulator · Built with Flask, React & MySQL
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <a
              href="https://policebharati.justbytecoder.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                textDecoration: 'none',
                padding: '0.35rem 0.85rem',
                fontSize: '0.78rem'
              }}
              title="Open production live website"
            >
              <ExternalLink size={13} />
              <span>Visit Live Website ↗</span>
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
            { id: 'quiz', label: '🎯 Interactive Marathi Quiz' },
            { id: 'dashboard', label: '📊 Student Dashboard' },
            { id: 'modules', label: '📚 6+ Learning Modules' },
            { id: 'architecture', label: '⚙️ Architecture & JWT' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="filter-pill"
              style={{
                borderRadius: '8px 8px 0 0',
                borderBottom: 'none',
                background: activeTab === tab.id ? 'rgba(255, 42, 95, 0.15)' : 'transparent',
                color: activeTab === tab.id ? 'var(--accent-rose-light)' : 'var(--text-muted)',
                borderColor: activeTab === tab.id ? 'rgba(255, 42, 95, 0.35)' : 'transparent',
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
          {/* TAB 1: INTERACTIVE QUIZ */}
          {activeTab === 'quiz' && (
            <div>
              {!quizFinished ? (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem', alignItems: 'center' }}>
                    <span className="badge badge-rose">
                      प्रश्न {currentQuestionIdx + 1} / {quiz.length}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      चालू गुण: <strong style={{ color: 'var(--accent-mint)' }}>{score}</strong>
                    </span>
                  </div>

                  {/* Question Box */}
                  <div style={{
                    padding: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-light)',
                    borderRadius: 'var(--radius-lg)',
                    marginBottom: '1.5rem'
                  }}>
                    <h4 style={{ fontSize: '1.15rem', lineHeight: '1.5', color: '#ffffff', marginBottom: '0.5rem' }}>
                      {currentQ.question}
                    </h4>
                  </div>

                  {/* Options */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
                    {currentQ.options.map((opt, idx) => {
                      const isSelected = selectedOption === idx;
                      const isCorrect = idx === currentQ.answer;
                      let btnStyle = {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '1rem 1.25rem',
                        borderRadius: 'var(--radius-md)',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-light)',
                        color: '#ffffff',
                        textAlign: 'left',
                        fontSize: '0.95rem',
                        transition: 'all 0.2s ease',
                      };

                      if (selectedOption !== null) {
                        if (isCorrect) {
                          btnStyle.background = 'rgba(0, 245, 160, 0.15)';
                          btnStyle.borderColor = 'var(--accent-mint)';
                          btnStyle.color = '#34d399';
                        } else if (isSelected && !isCorrect) {
                          btnStyle.background = 'rgba(255, 42, 95, 0.15)';
                          btnStyle.borderColor = 'var(--accent-rose)';
                          btnStyle.color = 'var(--accent-rose-light)';
                        }
                      }

                      return (
                        <button
                          key={idx}
                          onClick={() => handleSelectOption(idx)}
                          style={btnStyle}
                          disabled={selectedOption !== null}
                        >
                          <span>{opt}</span>
                          {selectedOption !== null && isCorrect && <CheckCircle2 size={18} color="var(--accent-mint)" />}
                          {selectedOption !== null && isSelected && !isCorrect && <XCircle size={18} color="var(--accent-rose)" />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation feedback */}
                  {selectedOption !== null && (
                    <div style={{
                      padding: '1rem',
                      borderRadius: 'var(--radius-sm)',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.25)',
                      marginBottom: '1.5rem',
                      fontSize: '0.85rem',
                      color: '#cbd5e1'
                    }}>
                      <strong style={{ color: '#c084fc' }}>स्पष्टीकरण: </strong>
                      {currentQ.explanation}
                    </div>
                  )}

                  {/* Actions */}
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedOption === null}
                      className="btn btn-primary"
                      style={{ opacity: selectedOption === null ? 0.5 : 1 }}
                    >
                      {currentQuestionIdx + 1 === quiz.length ? 'निकाल पहा (View Result)' : 'पुढील प्रश्न (Next) →'}
                    </button>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <Award size={48} color="var(--accent-rose)" style={{ margin: '0 auto 1rem' }} />
                  <h4 style={{ fontSize: '1.5rem', color: '#ffffff', marginBottom: '0.5rem' }}>
                    चाचणी पूर्ण झाली! (Quiz Complete)
                  </h4>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                    तुम्हाला {quiz.length} पैकी <strong style={{ color: 'var(--accent-mint)', fontSize: '1.3rem' }}>{score}</strong> गुण मिळाले आहेत.
                  </p>
                  <button onClick={handleResetQuiz} className="btn btn-secondary">
                    <RotateCcw size={16} />
                    <span>पुन्हा सोडवा (Restart Test)</span>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: STUDENT DASHBOARD MOCK */}
          {activeTab === 'dashboard' && (
            <div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>महाराष्ट्र राज्य रँक</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-rose)' }}>#142</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--accent-mint)' }}>Top 5% Aspirants</span>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>चाचण्या सोडवल्या</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-violet)' }}>28 / 30</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>सरासरी: 88.4%</span>
                </div>
                <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>शारीरिक चाचणी गुण</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-mint)' }}>46 / 50</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>1600m + Shotput</span>
                </div>
              </div>

              <h4 style={{ fontSize: '1rem', marginBottom: '0.75rem', color: '#ffffff' }}>अलीकडील चाचण्यांचा इतिहास (Recent Test History)</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {[
                  { title: "मराठी व्याकरण - घटक चाचणी ४", score: "24/25", date: "काल, 4:30 PM", status: "Pass" },
                  { title: "सामान्य ज्ञान व चालू घडामोडी", score: "48/50", date: "22 ऑक्टोबर, 2026", status: "Pass" },
                  { title: "अंकगणित व बुद्धिमत्ता चाचणी", score: "42/50", date: "19 ऑक्टोबर, 2026", status: "Pass" },
                ].map((item, idx) => (
                  <div key={idx} style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '0.85rem 1.25rem',
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div>
                      <h5 style={{ fontSize: '0.9rem', color: '#ffffff' }}>{item.title}</h5>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>{item.date}</span>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontWeight: '700', color: 'var(--accent-mint)', fontSize: '0.95rem' }}>{item.score}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 6+ LEARNING MODULES */}
          {activeTab === 'modules' && (
            <div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>
                As highlighted in the resume, Vedika implemented 6+ distinct learning categories tailored for Maharashtra Police Bharti aspirants:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                {[
                  { icon: <BookOpen size={20} color="var(--accent-rose-light)" />, title: "Subject-Wise Notes", desc: "Detailed Marathi notes for Marathi Grammar, GK, Reasoning, and Maths." },
                  { icon: <FileText size={20} color="var(--accent-violet)" />, title: "Downloadable PDFs", desc: "Curated syllabus PDFs, physical training manuals, and revision sheets." },
                  { icon: <Video size={20} color="var(--accent-mint)" />, title: "Educational Videos", desc: "Topic walkthroughs, problem solutions, and guidance lectures." },
                  { icon: <TrendingUp size={20} color="var(--accent-amber)" />, title: "PYQ Question Banks", desc: "Maharashtra Police exam previous year solved papers (2018–2024)." },
                  { icon: <Calendar size={20} color="#60a5fa" />, title: "Current Affairs (चालू घडामोडी)", desc: "Daily state, national, and sporting news relevant for exam questions." },
                  { icon: <Award size={20} color="#f472b6" />, title: "Recruitment Alerts", desc: "Instant notifications regarding ground test dates, hall tickets & cutoffs." }
                ].map((mod, idx) => (
                  <div key={idx} style={{
                    padding: '1.15rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(255, 255, 255, 0.025)',
                    border: '1px solid var(--border-light)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
                      {mod.icon}
                      <h4 style={{ fontSize: '0.95rem', color: '#ffffff' }}>{mod.title}</h4>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ARCHITECTURE & JWT */}
          {activeTab === 'architecture' && (
            <div>
              <h4 style={{ fontSize: '1.05rem', color: '#ffffff', marginBottom: '0.75rem' }}>
                Backend RESTful API & RBAC Architecture
              </h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.25rem', lineHeight: '1.7' }}>
                The backend is built using <strong>Python, Flask, SQLAlchemy, and MySQL</strong>. Security is anchored on stateless <strong>JWT authentication</strong> with strict Role-Based Access Control (RBAC):
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <KeyRound size={16} color="var(--accent-rose)" />
                    <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>Role: Student / Aspirant</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Access restricted to enrolled study modules, taking timed online tests, viewing personal result histories, and tracking physical workout milestones.
                  </p>
                </div>

                <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                    <ShieldCheck size={16} color="var(--accent-mint)" />
                    <strong style={{ color: '#ffffff', fontSize: '0.9rem' }}>Role: Administrator</strong>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    CRUD operations on question banks, uploading PDF materials, publishing notifications, analyzing overall student performance metrics, and managing users.
                  </p>
                </div>

                <div style={{ padding: '1rem', borderRadius: 'var(--radius-md)', background: 'rgba(139, 92, 246, 0.05)', border: '1px solid rgba(139, 92, 246, 0.25)' }}>
                  <strong style={{ color: '#c084fc', fontSize: '0.85rem' }}>Automated Test Verification:</strong>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                    Automated backend test suites verify API token expiration, RBAC enforcement on protected routes, and relational integrity across MySQL transactions.
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
