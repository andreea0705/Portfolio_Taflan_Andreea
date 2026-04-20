import React, { useState } from 'react';
import './Navbar.scss';

// La liste des liens de navigation
const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'Story' },
  { id: 'projects', label: 'Quête' },
  { id: 'skills', label: 'Skills' },
  { id: 'testimonials', label: 'Créations' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ currentPage, onNavigate }) {
  // Pour ouvrir/fermer le menu sur mobile
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <button className="nav-logo" onClick={() => onNavigate('home')}>
        TA<span>.</span>dev
      </button>

      {/* Liens */}
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(link => (
          <li key={link.id}>
            <button
              className={currentPage === link.id ? 'active' : ''}
              onClick={() => {
                onNavigate(link.id);
                setMenuOpen(false);
              }}
            >
              {link.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="navbar-right">
        {/* Bouton retour écran titre */}
        <button className="btn-back" onClick={() => onNavigate('title')}>
          ▶ Menu
        </button>

        {/* Hamburger mobile */}
        <div
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}
