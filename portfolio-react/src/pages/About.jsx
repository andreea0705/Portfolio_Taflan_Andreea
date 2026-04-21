import React, { useEffect, useRef } from 'react';
import './About.scss';

const skills = [
  { cat: '> Frontend', items: [{ name: 'React.js', pct: 85 }, { name: 'HTML / CSS / SCSS', pct: 90 }, { name: 'JavaScript', pct: 80 }] },
  { cat: '> Backend & Database', items: [{ name: 'Node.js', pct: 70 }, { name: 'MongoDB', pct: 65 }] },
  { cat: '> Design & Outils', items: [{ name: 'Figma / Design UI', pct: 78 }, { name: 'Git / GitHub', pct: 75 }] },
];

export default function About() {
  const sectionRef = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }), { threshold: 0.1 });
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about-section" ref={sectionRef} style={{ background: 'linear-gradient(180deg, var(--bg) 0%, var(--bg2) 100%)' }}>
      <div className="section-inner">
        <div className="section-header reveal">
          <div className="section-num">01</div>
          <div className="section-title-wrap">
            <div className="section-label">// LEVEL_1</div>
            <h2 className="section-title"> Origine du<span>Personnage</span></h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-text reveal">
            <p><strong>Nom :</strong> Taflan Andreea<br />
            <strong>Classe :</strong> Développeuse Web & Artiste Digitale<br />
            <strong>Origine :</strong> Formation OpenClassrooms<br />
            <strong>Spécialité :</strong> Transformer l'imagination en code</p>

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
          <div className="skills-panel reveal">
            <div className="panel-label">SKILLS</div>
            {skills.map(cat => (
              <div className="skill-category" key={cat.cat}>
                <div className="skill-cat-title">{cat.cat}</div>
                {cat.items.map(item => (
                  <div className="skill-item" key={item.name}>
                    <div className="skill-info">
                      <span className="skill-name">{item.name}</span>
                      <span className="skill-pct">{item.pct}%</span>
                    </div>
                    <div className="skill-bar"><div className="skill-fill" style={{ width: `${item.pct}%` }} /></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
