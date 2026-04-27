import React, { useState, useEffect } from 'react';
import character from '../assets/character.jpg';
import drawing1 from '../assets/drawing1.png';
import drawing2 from '../assets/drawing2.png';
import drawing3 from '../assets/drawing3.png';
import drawing4 from '../assets/drawing4.png';
import drawing7 from '../assets/drawing7.png';
import drawing8 from '../assets/drawing8.jpg';
import drawing10 from '../assets/drawing10.jpg';
import drawing11 from '../assets/drawing11.jpg';
import drawing12 from '../assets/drawing12.jpg';
import drawing13 from '../assets/drawing13.jpg';
import './Home.scss';

// Tous mes dessins
const drawings = [drawing1, drawing2, drawing3, drawing4, drawing7, drawing8, drawing10, drawing11, drawing12, drawing13];

export default function Home({ onNavigate }) {
  // Index du dessin actuellement visible
  const [current, setCurrent] = useState(0);

  // Change automatiquement de dessin toutes les 3 secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % drawings.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Aller au dessin précédent
  const prev = () => setCurrent(prev => (prev - 1 + drawings.length) % drawings.length);

  // Aller au dessin suivant
  const next = () => setCurrent(prev => (prev + 1) % drawings.length);

  return (
    <section className="home">

      {/* Image de fond — mon personnage */}
      <img src={character} alt="" className="home-bg" />
      <div className="home-overlay" />
      <div className="home-grid" />

      {/* Contenu principal */}
      <div className="home-content">

        {/* Texte à gauche */}
        <div className="home-text">
          <p className="home-tag">Bienvenue sur mon portfolio </p>
          <h1 className="home-name">TAFLAN<br /><span>ANDREEA</span></h1>
          <p className="home-role">{'// Développeuse Web & Artiste Digitale'}</p>
          <p className="home-desc">
            Passionnée par l'intersection entre <em>design et performance web</em>,
            je suis une artiste qui veut intégrer son imagination dans le monde du tech.
          </p>
          <div className="home-btns">
            <button className="btn-primary" onClick={() => onNavigate('projects')}>
              Voir mes projets
            </button>
            <button className="btn-outline" onClick={() => onNavigate('contact')}>
              Me contacter
            </button>
          </div>
        </div>

        {/* Slider de dessins à droite */}
        <div className="home-slider">
          <div className="slider-label">► mes dessins</div>

          {/* Image principale */}
          <div className="slider-frame">
            <img
              src={drawings[current]}
              alt={`Dessin ${current + 1}`}
              className="slider-img"
            />
            {/* Boutons précédent / suivant */}
            <button className="slider-arrow left" onClick={prev}>‹</button>
            <button className="slider-arrow right" onClick={next}>›</button>
          </div>

          {/* Points de navigation */}
          <div className="slider-dots">
            {drawings.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Flèche scroll 
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-arrow" />
      </div>*/}

    </section>
  );
}
