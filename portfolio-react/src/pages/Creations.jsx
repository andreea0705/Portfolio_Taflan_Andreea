import React, { useState } from 'react';
import drawing1 from '../assets/drawing1.png';
import drawing2 from '../assets/drawing2.png';
import drawing3 from '../assets/drawing3.png';
import drawing4 from '../assets/drawing4.png';
import drawing5 from '../assets/drawing5.png';
import drawing6 from '../assets/drawing6.png';
import drawing7 from '../assets/drawing7.png';
import drawing8 from '../assets/drawing8.jpg';
import drawing9 from '../assets/drawing9.jpg';
import drawing10 from '../assets/drawing10.jpg';
import drawing11 from '../assets/drawing11.jpg';
import drawing12 from '../assets/drawing12.jpg';
import drawing13 from '../assets/drawing13.jpg';
import drawing14 from '../assets/drawing14.jpg';
import drawing15 from '../assets/drawing15.jpg';
import drawing16 from '../assets/drawing16.jpg';

import './Creations.scss';

// Tous mes dessins avec un titre
const drawings = [
  { img: drawing1, title: 'Narancia Ghirga' },
  { img: drawing2, title: 'DAN DAN DAN -  Granny' },
  { img: drawing3, title: 'Jolyne Cujoh' },
  { img: drawing4, title: 'Giorno Giovanna' },
  { img: drawing5, title: 'Greninja' },
  { img: drawing6, title: 'Fille aux tresses' },
  { img: drawing7, title: 'Feuilles dorées' },
  { img: drawing8, title: '' },
  { img: drawing9, title: 'Izuku' },
  { img: drawing10, title: '' },
  { img: drawing11, title: '' },
  { img: drawing12, title: 'Bakugo' },
  { img: drawing13, title: '' },
  { img: drawing14, title: '' },
  { img: drawing15, title: 'DAN DAN DAN - Okarun' },
  { img: drawing16, title: 'Levy' },
];

export default function Testimonials() {
  // Index de l'image agrandie (null = aucune)
  const [selected, setSelected] = useState(null);

  return (
    <section className="gallery-section">
      <div className="section-inner">

        <div className="section-header">
          <div className="section-num">04</div>
          <div className="section-title-wrap">
            <div className="section-label">{'// mes_dessins.gallery'}</div>
            <h2 className="section-title">Mes <span>Créations</span></h2>
          </div>
        </div>

        {/* Grille de dessins */}
        <div className="gallery-grid">
          {drawings.map((d, i) => (
            <div
              key={i}
              className="gallery-card"
              onClick={() => setSelected(i)}
            >
              <img src={d.img} alt={d.title} />
              <div className="gallery-overlay">
                <span>{d.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox — image agrandie au clic */}
        {selected !== null && (
          <div className="lightbox" onClick={() => setSelected(null)}>
            <div className="lightbox-content" onClick={e => e.stopPropagation()}>
              <img src={drawings[selected].img} alt={drawings[selected].title} />
              <p className="lightbox-title">{drawings[selected].title}</p>
              {/* Bouton fermer */}
              <button className="lightbox-close" onClick={() => setSelected(null)}>✕</button>
              {/* Précédent */}
              <button className="lightbox-prev" onClick={() => setSelected((selected - 1 + drawings.length) % drawings.length)}>‹</button>
              {/* Suivant */}
              <button className="lightbox-next" onClick={() => setSelected((selected + 1) % drawings.length)}>›</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
