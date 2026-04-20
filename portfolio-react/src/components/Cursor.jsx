import React, { useEffect, useState } from 'react';
import './Cursor.scss';

export default function Cursor() {
  // On stocke la position x et y de la souris
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Quand la souris bouge, on met à jour la position
    const handleMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMove);

    // Nettoyage quand le composant est supprimé
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      className="cursor"
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}
