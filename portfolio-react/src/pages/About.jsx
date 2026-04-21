import React, { useEffect, useRef } from 'react';
import './About.scss';

const skills = [
  { cat: '> Frontend', items: [{ name: 'React.js' }, { name: 'HTML / CSS / SCSS' }, { name: 'JavaScript' }] },
  { cat: '> Backend & Database', items: [{ name: 'Node.js' }, { name: 'MongoDB' }] },
  { cat: '> Design & Outils', items: [{ name: 'Figma / Design UI' }, { name: 'Git / GitHub' }] },
];

const fiche = [
  {
    title: ' Contexte',
    content: "Conçu dans le cadre de ma formation OpenClassrooms, ce portfolio est ma vitrine professionnelle. L'enjeu : créer une interface qui reflète à la fois mon identité de développeuse et mon univers artistique.",
  },
  {
    title: ' Objectifs',
    content: "Créer une interface moderne et mémorable, mettre en valeur mes projets de manière interactive, et démontrer ma maîtrise de React dans un projet concret de A à Z.",
  },
  {
    title: ' Stack technique',
    content: "React 18 — composants réutilisables · SCSS — animations et variables CSS · GitHub Pages — hébergement gratuit · GitHub Actions — CI/CD automatisé",
  },
  {
    title: ' Compétences développées',
    content: "Routing manuel avec useState · Gestion d'état avec useEffect · Animations CSS sans librairie · Pipeline CI/CD avec GitHub Actions · Déploiement en production",
  },
  {
    title: ' Résultats',
    content: "Site en ligne, responsive, avec galerie de dessins personnels, slider automatique, formulaire de contact validé et déploiement continu.",
  },
  {
    title: ' Améliorations futures',
    content: "Transitions animées entre pages · Backend pour le formulaire · Optimisation des images · Version anglaise du portfolio",
  },
];

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el, i) => {
      setTimeout(() => {
        el.classList.add('visible');
      }, i * 200);
    });
  }, []);

  return (
    <section className="about-section" ref={sectionRef} style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)' }}>
      <div className="section-inner">

        {/* En-tête */}
        <div className="section-header reveal">
          <div className="section-num">01</div>
          <div className="section-title-wrap">
            <div className="section-label">// LEVEL_1</div>
            <h2 className="section-title">Profil du <span> Joueur </span></h2>
          </div>
        </div>

        {/* Fiche perso + skills */}
        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              <strong>Nom :</strong> Taflan Andreea<br />
              <strong>Classe :</strong> Développeuse Web &amp; Artiste Digitale<br />
              <strong>Origine :</strong> Formation OpenClassrooms<br />
              <strong>Spécialité :</strong> Transformer l'imagination en code
            </p>

            <blockquote className="about-highlight">
              "Mon œil artistique + ma logique technique = un combo légendaire."
            </blockquote>

            <p><strong>Compétences passives :</strong> Sens du détail +10, Créativité +15, Performance web +12</p>
            <p><strong>Objectif :</strong> Créer des interfaces qui marquent les esprits — <em>Game over</em> pour les sites ennuyeux.</p>

            <div className="stat-row">
              {[['5+', 'Projets\nRéalisés'], ['∞', 'Créativité\nDébordante'], ['💗', 'Passion\ndu Code']].map(([num, label]) => (
                <div className="stat-box" key={num}>
                  <div className="stat-num">{num}</div>
                  <div className="stat-label">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="skills-panel reveal">
            <div className="panel-label">SKILLS</div>
            {skills.map(cat => (
              <div className="skill-category" key={cat.cat}>
                <div className="skill-cat-title">{cat.cat}</div>
                {cat.items.map(item => (
                  <div className="skill-item" key={item.name}>
                    <span className="skill-name">{item.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Fiche projet portfolio */}
        <div className="fiche-header reveal">
          <div className="section-label">// FICHE_PROJET.md</div>
          <h3 className="fiche-title">Portfolio — <span>Fiche Projet</span></h3>
        </div>

        <div className="fiche-grid">
          {fiche.map((item, i) => (
            <div className="fiche-card reveal" key={i}>
              <div className="fiche-card-title">{item.title}</div>
              <p className="fiche-card-content">{item.content}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
