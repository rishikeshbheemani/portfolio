import React from 'react';

const projects = [
  {
    name: 'Urban Heat Risk Mapping — GHMC (146 Wards)',
    tech: ['Python', 'QGIS', 'Remote Sensing'],
    period: 'May 2025 – Present',
    desc: [
      'Analyzed 25 years (2000–2024) of land surface temperature data to identify urban heat hotspots across 146 GHMC wards.',
      'Processed and analyzed 100+ raster layers using QGIS for reprojection, clipping, and zonal statistics.',
      'Computed ward-level LST correlations with NDVI and NDBI by aggregating pixel-level temperature data into spatial metrics.',
      'Generated 10+ thematic maps highlighting spatial and temporal heat, vegetation, and built-up area trends.',
    ],
    github: 'https://github.com/ricchie4',
  },
  {
    name: 'Airline Data Management & Analysis',
    tech: ['SQL'],
    period: '2024',
    desc: [
      'Designed a relational airline database with 5+ normalized tables covering flights, aircraft, routes, and bookings.',
      'Wrote 15+ complex SQL queries using joins, subqueries, and aggregations.',
      'Analyzed flight delays, route popularity, and airline performance across multiple operational metrics.',
    ],
    github: 'https://github.com/ricchie4',
  },
  {
    name: 'Multi-Stage Predictive Maintenance — Aircraft Engines',
    tech: ['Machine Learning', 'NumPy', 'Matplotlib'],
    period: '2024',
    desc: [
      'Built machine learning models to predict engine failure stages using multivariate sensor data.',
      'Processed datasets containing 20+ sensor parameters per engine cycle.',
      'Visualized degradation trends and prediction outputs using Matplotlib for interpretability.',
      'Evaluated model performance using classification metrics and error analysis.',
    ],
    github: 'https://github.com/ricchie4',
  },
  {
    name: 'Abstractive Document Summarization',
    tech: ['NLP', 'Python', 'Transformers'],
    period: '2024',
    desc: [
      'Developed an NLP pipeline to generate concise summaries from long-form documents using Transformer-based models.',
      'Preprocessed and tokenized 100+ text documents for training and evaluation.',
      'Reduced document length by 60–70% while preserving key semantic information.',
      'Evaluated summary quality using qualitative analysis and readability checks.',
    ],
    github: 'https://github.com/ricchie4',
  },
];

const GithubIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

export default function Projects() {
  return (
    <>
      <div className="projects-hero">
        <div>
          <div className="section-eyebrow">Work</div>
          <div className="section-heading">Projects</div>
          <p className="section-sub">Academic and personal projects spanning ML, geospatial analysis, databases, and NLP.</p>
        </div>
        <div className="project-count">0{projects.length}</div>
      </div>

      <div className="projects-stack">
        {projects.map((p, i) => (
          <div className="proj-card" key={p.name}>
            <div className="proj-num">0{i + 1}</div>
            <div className="proj-body">
              <div className="proj-name">{p.name}</div>
              <div className="proj-tech-row">
                {p.tech.map(t => <span className="proj-tech-badge" key={t}>{t}</span>)}
              </div>
              <ul className="proj-bullets">
                {p.desc.map((d, j) => <li key={j}>{d}</li>)}
              </ul>
            </div>
            <div className="proj-meta">
              <span className="proj-period">{p.period}</span>
              <a className="proj-gh-btn" href={p.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
