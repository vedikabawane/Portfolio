import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Highlights() {
  return (
    <section className="stats-strip">
      <div className="container">
        <div className="stats-grid">
          {portfolioData.stats.map((stat, idx) => (
            <div
              key={idx}
              className={`stat-card ${stat.highlight ? 'highlight' : ''}`}
            >
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sublabel">{stat.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
