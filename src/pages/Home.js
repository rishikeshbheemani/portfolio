import React from 'react';
import { NavLink } from 'react-router-dom';

const skills = {
  'Programming Languages': ['C', 'Python', 'SQL'],
  'AI & Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Data Preprocessing', 'Feature Engineering', 'Model Evaluation'],
  'Data & Tools': ['NumPy', 'Pandas', 'Matplotlib', 'QGIS', 'GitHub'],
  'Other': ['Video Editing', 'Voiceover Scripting', 'Content Creation'],
};

const details = [
  { key: 'Name', val: 'Rishikesh Bheemani' },
  { key: 'Location', val: 'Hyderabad, India' },
  { key: 'Email', val: 'ricchie4@gmail.com' },
  { key: 'LinkedIn', val: 'linkedin.com/in/rishikesh-bheemani' },
  { key: 'University', val: 'Mahindra University' },
  { key: 'Degree', val: 'B.Tech – Artificial Intelligence' },
  { key: 'Expected Grad', val: 'August 2027' },
  { key: 'CGPA', val: '7.4' },
];

const services = [
  { icon: '🤖', name: 'Machine Learning', desc: 'Supervised & unsupervised models for predictive maintenance, classification, and real-world sensor data analysis.' },
  { icon: '🛰️', name: 'GIS & Remote Sensing', desc: 'Urban heat mapping, land surface temperature analysis, NDVI/NDBI correlations using QGIS and Python.' },
  { icon: '🗄️', name: 'Data Engineering', desc: 'Relational database design, complex SQL queries, data aggregation and performance analysis.' },
  { icon: '📝', name: 'NLP & Transformers', desc: 'Abstractive document summarization pipelines using transformer-based models with 60–70% length reduction.' },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <div className="hero-eyebrow fade-up">AI Student · Hyderabad, India</div>
          <h1 className="hero-name fade-up fade-up-1">RISHIKESH<br />BHEEMANI</h1>
          <span className="hero-profession fade-up fade-up-2">B.Tech Artificial Intelligence</span>
          <p className="hero-bio fade-up fade-up-3">
            Building at the intersection of data, machine learning, and real-world problems.
            From satellite imagery to predictive engine models — I turn raw data into insight.
          </p>
          <div className="hero-actions fade-up fade-up-4">
            <NavLink to="/projects" className="btn-primary">View Projects →</NavLink>
            <a href="mailto:ricchie4@gmail.com" className="btn-ghost">Get in Touch</a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-frame">
            <div className="hero-img-bg">
              <span className="initials-ghost">RB</span>
              <div className="hero-img-tag">
                <div className="tag-label">Current CGPA</div>
                <div className="tag-val">7.4 / 10</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-badge fade-up fade-up-5">
          <div className="badge-avatars">
            <div className="badge-avatar">ML</div>
            <div className="badge-avatar">GIS</div>
            <div className="badge-avatar">NLP</div>
          </div>
          <div className="badge-text">
            <strong>4 Projects</strong>
            <span>Completed</span>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-num">25<span>yrs</span></div>
          <div className="stat-label">Temperature Data Analyzed</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">100<span>+</span></div>
          <div className="stat-label">Raster Layers Processed</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">15<span>+</span></div>
          <div className="stat-label">SQL Queries Written</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">60<span>%</span></div>
          <div className="stat-label">Doc Length Reduction (NLP)</div>
        </div>
      </div>

      {/* SERVICES */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="section">
          <div className="section-eyebrow">Expertise</div>
          <div className="section-heading">Areas of Work</div>
          <p className="section-sub">Hands-on projects across ML, geospatial analysis, databases, and natural language processing.</p>
          <div className="cards-grid">
            {services.map(s => (
              <div className="service-card" key={s.name}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-name">{s.name}</div>
                <p className="service-desc">{s.desc}</p>
                <NavLink to="/projects" className="read-more">Read More →</NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PERSONAL DETAILS */}
      <div style={{ borderBottom: '1px solid var(--border)' }}>
        <div className="section">
          <div className="section-eyebrow">Info</div>
          <div className="section-heading">Personal Details</div>
          <div className="details-table">
            {details.map(({ key, val }) => (
              <div className="detail-row" key={key}>
                <div className="d-key">{key}</div>
                <div className="d-val">{val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div>
        <div className="section">
          <div className="section-eyebrow">Stack</div>
          <div className="section-heading">Technical Skills</div>
          <div className="skills-wrap">
            {Object.entries(skills).map(([cat, tags]) => (
              <div className="skill-cat" key={cat}>
                <h4>{cat}</h4>
                <div className="tags">
                  {tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
