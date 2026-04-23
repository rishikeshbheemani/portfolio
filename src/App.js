import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './index.css';
import Home from './pages/Home';
import Projects from './pages/Projects';

function Navbar() {
  return (
    <nav className="navbar">
      <span className="nav-logo">RB<span>/</span></span>
      <ul className="nav-links">
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/projects">Projects</NavLink></li>
      </ul>
      <a className="nav-cta" href="mailto:ricchie4@gmail.com">Contact Me</a>
    </nav>
  );
}

function SocialRail() {
  return (
    <div className="social-rail">
      <a className="social-dot" href="https://www.linkedin.com/in/rishikesh-bheemani-573763326/s" target="_blank" rel="noreferrer" title="LinkedIn">in</a>
      <a className="social-dot" href="https://github.com/ricchie4" target="_blank" rel="noreferrer" title="GitHub">gh</a>
      <a className="social-dot" href="mailto:ricchie4@gmail.com" title="Email">@</a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <span className="footer-name">Rishikesh<span> Bheemani</span></span>
      <span className="footer-copy">© 2025 · ricchie4@gmail.com</span>
    </footer>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Navbar />
      <SocialRail />
      <div className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}
