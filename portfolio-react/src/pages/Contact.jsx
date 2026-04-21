import React, { useState } from 'react';
import './Contact.scss';

export default function Contact() {
  // Données du formulaire
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  // Message de succès
  const [sent, setSent] = useState(false);

  // Erreurs
  const [errors, setErrors] = useState({});

  // Met à jour un champ du formulaire
  const update = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  // Validation et envoi
  const submit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = 'Champ requis';
    if (!form.email.includes('@')) newErrors.email = 'Email invalide';
    if (form.message.length < 10) newErrors.message = 'Message trop court';

    setErrors(newErrors);

    // Si pas d'erreurs → succès
    if (Object.keys(newErrors).length === 0) {
      setSent(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section className="contact-section">
      <div className="section-inner">

        <div className="section-header">
          <div className="section-num">05</div>
          <div className="section-title-wrap">
            <div className="section-label">// contact.quête</div>
            <h2 className="section-title">Me <span>Contacter</span></h2>
          </div>
        </div>

        <div className="contact-grid">

          {/* Info à gauche */}
          <div className="contact-info">
            <h3>Realisons une quête ensemble </h3>
            <p>Un projet à me confier? Selectionne ta mission et je rejoins ton équipe pour des collaborations créatives et des aventures digitales.</p>
            <p><em> Spécialité: l'imagination </em></p> 
            <div className="contact-links">
              <a href="https://github.com/andreea0705" target="_blank" rel="noreferrer">
                github.com/andreea0705
              </a>
              <a href="mailto:andreea@example.com">
                andreea07.05.2001@gmail.com
              </a>
            </div>
          </div>

          {/* Formulaire à droite */}
          <form className="contact-form" onSubmit={submit}>

            {/* Nom */}
            <div className="form-group">
              <label>Nom</label>
              <input
                type="text"
                placeholder="Ton nom.."
                value={form.name}
                onChange={e => update('name', e.target.value)}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-msg">{errors.name}</span>}
            </div>

            {/* Email */}
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="ton@email.com"
                value={form.email}
                onChange={e => update('email', e.target.value)}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-msg">{errors.email}</span>}
            </div>

            {/* Message */}
            <div className="form-group">
              <label>Message</label>
              <textarea
                placeholder="Ton message..."
                value={form.message}
                onChange={e => update('message', e.target.value)}
                className={errors.message ? 'error' : ''}
              />
              {errors.message && <span className="error-msg">{errors.message}</span>}
            </div>

            {/* Bouton envoyer */}
            <button type="submit" className="btn-primary">
              Envoyer →
            </button>

            {/* Message de confirmation */}
            {sent && (
              <p className="success-msg">✓  [ SUCCÈS ] — Mission accomplie ! Je te réponds vite 💗</p>
            )}

          </form>
        </div>

      </div>
    </section>
  );
}
