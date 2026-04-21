import React, { useState } from 'react';
import projectSophie from '../assets/project-sophie.png';
import projectKasa from '../assets/project-kasa.png';
import projectMenuMaker from '../assets/project-menumaker.png';
import projectOhmyfood from '../assets/project-ohmyfood1.png';
import './Projects.scss';

// Mes 4 projets
const projects = [
  {
    name: 'Portfolio Sophie Bluel',
    tags: ['js'],
    tech: ['JavaScript', 'API REST', 'DOM'],
    img: projectSophie,
    desc: "Page web dynamique pour une architecte d'intérieur. Connexion à une API backend, filtrage des travaux et authentification.",
    github: 'https://github.com/andreea0705/Portfolio-architecte-sophie-bluel',
  },
  {
    name: 'Kasa',
    tags: ['react'],
    tech: ['React', 'React Router', 'SCSS'],
    img: projectKasa,
    desc: "Application de location immobilière. Navigation entre les pages avec React Router, composants réutilisables et animations CSS.",
    github: 'https://github.com/andreea0705/Kasa',
  },
  {
    name: 'Menu Maker — Qwenta',
    tags: ['gestion'],
    tech: ['Notion', 'Veille tech', 'Gestion projet'],
    img: projectMenuMaker,
    desc: "Planification d'un outil de gestion de menus pour restaurants. Organisation des tâches sur Notion, users stories et spécifications techniques.",
    github: null,
  },
  {
    name: 'Oh My Food',
    tags: ['html-css'],
    tech: ['HTML', 'SCSS', 'Animations CSS'],
    img: projectOhmyfood,
    desc: 'Site de commande de repas gastronomiques avec des animations CSS fluides et une architecture SCSS maintenable.',
    github: 'https://github.com/andreea0705/Ohmyfood1',
  },
];

const filters = [
  { id: 'all', label: 'Tous' },
  { id: 'html-css', label: 'HTML/CSS' },
  { id: 'js', label: 'JavaScript' },
  { id: 'react', label: 'React' },
  { id: 'gestion', label: 'Gestion' },
];

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const visible = projects.filter(p =>
    filter === 'all' || p.tags.includes(filter)
  );

  return (
    <section className="projects-section">
      <div className="section-inner">

        <div className="section-header">
          <div className="section-num">02</div>
          <div className="section-title-wrap">
            <div className="section-label">► QUÊTES_ACCOMPLIES.log</div>
            <h2 className="section-title">Mes <span>Projets</span></h2>
          </div>
        </div>

        {/* Filtres */}
        <div className="filters">
          {filters.map(f => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Grille */}
        <div className="projects-grid">
          {visible.map(p => (
            <div className="project-card" key={p.name}>

              {/* Image du projet */}
              <div className="project-thumb">
                <img src={p.img} alt={p.name} />
              </div>

              <div className="project-body">
                {/* Tags */}
                <div className="project-tags">
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Titre */}
                <h3 className="project-name">{p.name}</h3>

                {/* Description */}
                <p className="project-desc">{p.desc}</p>

                {/* Lien GitHub ou message */}
                {p.github ? (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-link"
                  >
                    Voir sur GitHub →
                  </a>
                ) : (
                  <span className="project-no-repo"> ! Pas de repo — projet de gestion</span>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
