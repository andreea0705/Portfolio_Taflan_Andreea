import React from 'react';
import character from '../assets/character.jpg';
import './TitleScreen.scss';
// Les boutons du menu
const buttons = [
  { label: '▶  PLAY', page: 'home', primary: true },
  { label: 'Load Game', page: 'projects' },
  { label: 'Options', page: 'skills' },
  { label: 'Exit', page: 'contact' },
];

export default function TitleScreen({ onStart }) {
  return (
    <div className="title-screen">

      {/* Image de fond — mon personnage */}
      <img src={character} className="title-bg" alt="" />

      {/* Filtre sombre pour lire le texte */}
      <div className="title-overlay" />

      {/* Effet lignes de scan */}
      <div className="title-scanlines" />

      {/* Coins décoratifs */}
      <div className="corner tl" />
      <div className="corner tr" />
      <div className="corner bl" />
      <div className="corner br" />

      {/* Petites particules rose */}
      <div className="particles">
        {[1,2,3,4,5,6,7,8,9,10].map(i => (
          <div className="particle" key={i} />
        ))}
      </div>

      {/* Texte et boutons */}
      <div className="title-content">
        <p className="title-pre">♥ Portfolio 2026 ♥</p>
        <h1 className="title-name">ANDR<span>EEA</span></h1>
        <p className="title-sub">Développeuse Web & Artiste Digitale</p>

        <div className="title-buttons">
          {buttons.map(btn => (
            <button
              key={btn.page}
              className={`title-btn ${btn.primary ? 'primary' : ''}`}
              onClick={() => onStart(btn.page)}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      <p className="title-version">v1.0.0 | TAFLAN ANDREEA | 2026</p>
    </div>
  );
}
