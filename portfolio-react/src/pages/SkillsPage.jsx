import React, { useEffect, useRef } from 'react';
import './SkillsPage.scss';

const skills = [
  { name: 'React.js', level: 'Avancé', sub: '// Composants, Hooks, State', desc: "Développement d'interfaces modernes, réutilisables et performantes avec l'écosystème React." },
  { name: 'HTML / CSS / SCSS', level: 'Expert', sub: '// Intégration, Responsive', desc: 'Maîtrise de l\'intégration pixel-perfect, animations CSS et architecture SCSS scalable.' },
  { name: 'JavaScript', level: 'Avancé', sub: '// ES6+, DOM, API', desc: 'Manipulation du DOM, fetch API, gestion d\'événements et logique applicative complexe.' },
  { name: 'Node.js', level: 'Intermédiaire', sub: '// Express, REST API', desc: 'Création de serveurs backend, routes API RESTful et middleware avec Express.js.' },
  { name: 'MongoDB', level: 'Intermédiaire', sub: '// NoSQL, Mongoose', desc: 'Modélisation de données NoSQL, opérations CRUD et intégration avec Mongoose.' },
  { name: 'Git / GitHub', level: 'Avancé', sub: '// Versioning, Branches', desc: 'Gestion de versions, branches de fonctionnalités et collaboration sur dépôts GitHub.' },
  { name: 'Figma / Design UI', level: 'Avancé', sub: '// Maquettes, Prototypes', desc: 'Lecture et création de maquettes, système de design et cohérence visuelle entre design et code.' },
  { name: 'Sens Artistique', level: 'Acquis', sub: '// Illustration, UX', desc: 'Un regard artistique unique qui transforme chaque interface en expérience mémorable.' },
];

export default function SkillsPage() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: 'linear-gradient(135deg, var(--bg) 0%, var(--bg2) 100%)' }} ref={sectionRef}>
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-num">03</div>
          <div className="section-title-wrap">
            <div className="section-label">{'// skills_dashboard'}</div>
            <h2 className="section-title">Mes <span>Compétences</span></h2>
          </div>
        </div>
        <div className="skills-dashboard">
          {skills.map((s, i) => (
            <div className="skill-card reveal" key={s.name} style={{ animationDelay: `${i * 0.08}s` }} data-level={s.level}>
              <div className="skill-card-icon">{s.icon}</div>
              <div className="skill-card-name">{s.name}</div>
              <div className="skill-card-level">{s.sub}</div>
              <p className="skill-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
