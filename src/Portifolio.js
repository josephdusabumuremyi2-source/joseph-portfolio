import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Portfolio() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #0f172a, #1e293b)',
      color: '#f0f0f0',
      padding: '40px 20px',
      fontFamily: "'Inter', sans-serif",
      lineHeight: 1.6
    }}>
      <Header />
      <Skills />
      <Projects />
      <Contact />
      <footer style={{ textAlign: 'center', opacity: 0.6, marginTop: '60px', fontSize: '0.9rem' }}>
        © 2026 Joseph Dusabumuremyi
      </footer>
    </div>
  );
}
