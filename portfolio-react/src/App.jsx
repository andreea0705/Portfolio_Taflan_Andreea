import React, { useState } from 'react';
import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import TitleScreen from './pages/TitleScreen';
import Home from './pages/Home';
import About from './pages/About';
//import Projects from './pages/Projects';
//import SkillsPage from './pages/SkillsPage';
//import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  // La page actuelle — on commence par l'écran titre
  const [page, setPage] = useState('title');

  // Fonction pour changer de page
  const goTo = (newPage) => {
    setPage(newPage);
    window.scrollTo(0, 0);
  };

  // Si on est sur l'écran titre, on l'affiche seul
  if (page === 'title') {
    return (
      <>
        <Cursor />
        <TitleScreen onStart={goTo} />
      </>
    );
  }

  // Sinon on affiche la page demandée
  const pages = {
    home: <Home onNavigate={goTo} />,
    about: <About />,
    //projects: <Projects />,
    //skills: <SkillsPage />,
    //testimonials: <Testimonials />,
    contact: <Contact onNavigate={goTo} />,
  };

  return (
    <>
      <Cursor />
      <Navbar currentPage={page} onNavigate={goTo} />
      <main>{pages[page]}</main>
      <Footer onNavigate={goTo} />
    </>
  );
}
