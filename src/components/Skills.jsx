import React, { useState } from 'react';
import { 
  Code2, 
  Server, 
  ShieldCheck, 
  Layout, 
  Database, 
  Cloud, 
  Wrench, 
  Cpu,
  Sparkles,
  CheckCircle2,
  Layers,
  Search
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const iconMap = {
  Code2: <Code2 size={20} />,
  Server: <Server size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  Layout: <Layout size={20} />,
  Database: <Database size={20} />,
  Cloud: <Cloud size={20} />,
  Wrench: <Wrench size={20} />,
  Cpu: <Cpu size={20} />
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const { skillCategories } = portfolioData;

  const filteredCategories = skillCategories.filter((cat) => {
    const matchesFilter = activeCategory === 'all' || cat.id === activeCategory;
    const matchesSearch = searchQuery === '' || 
      cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cat.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="section" id="skills">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag rose">
            <Sparkles size={14} />
            <span>Resume Inventory</span>
          </div>
          <h2 className="section-title">
            Technical <span className="text-gradient">Skills & Competencies</span>
          </h2>
          <p className="section-subtitle">
            Direct technical competencies combined into the 8 certified domains from Vedika's official resume.
          </p>
        </div>

        {/* Filter Navigation Pills */}
        <div className="skills-filter-nav">
          <button
            onClick={() => setActiveCategory('all')}
            className={`filter-pill ${activeCategory === 'all' ? 'active' : ''}`}
          >
            <Layers size={13} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />
            <span>All Categories ({skillCategories.length})</span>
          </button>

          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`filter-pill ${activeCategory === category.id ? 'active' : ''}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="skills-search-box">
          <Search size={16} className="skills-search-icon" />
          <input
            type="text"
            placeholder="Search within skills (e.g. Python, Flask, React, Docker)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '2.6rem', borderRadius: 'var(--radius-full)' }}
          />
        </div>

        {/* Unified 8-Category Cards Grid (Matching Resume exactly) */}
        <div className="skills-category-grid">
          {filteredCategories.map((cat) => (
            <div key={cat.id} className="skill-cat-card">
              {/* Top Accent Gradient Bar */}
              <div 
                className="skill-cat-top-bar" 
                style={{ background: cat.gradient }}
              />

              <div className="skill-cat-body">
                {/* Header */}
                <div className="skill-cat-header">
                  <div className="skill-cat-title-wrap">
                    <div 
                      className="skill-cat-icon-box"
                      style={{ color: cat.accentColor }}
                    >
                      {iconMap[cat.icon] || <Code2 size={20} />}
                    </div>
                    <div>
                      <h3 className="skill-cat-name">{cat.name}</h3>
                      <span className="skill-cat-count">{cat.skills.length} Competencies</span>
                    </div>
                  </div>

                  <span className="skill-cat-badge">Verified</span>
                </div>

                {/* Short Category Description */}
                <p className="skill-cat-desc">{cat.desc}</p>

                {/* Skill Chips */}
                <div className="skill-cat-chips-wrap">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="skill-pill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="skill-cat-footer">
                <span className="skill-cat-status">
                  <CheckCircle2 size={13} color="var(--accent-mint)" />
                  <span>Production Level</span>
                </span>
                <span className="skill-cat-resume-tag">Full Stack Tech</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
