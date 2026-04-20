import React from 'react';
import './Footer.scss';

export default function Footer({ onNavigate }) {
  return (
    <footer className="footer">
      <p>© 2024 <span>Taflan Andreea</span> — Coded with 💗</p>
      <div className="footer-links">
        <button onClick={() => onNavigate('projects')}>Projets</button>
        <a href="https://github.com/andreea0705" target="_blank" rel="noreferrer">GitHub</a>
        <button onClick={() => onNavigate('contact')}>Contact</button>
      </div>
    </footer>
  );
}
