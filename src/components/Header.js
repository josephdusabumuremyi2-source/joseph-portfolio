import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  return (
    <header style={{ textAlign: 'center', marginBottom: '80px' }}>
      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '3.5rem', fontWeight: 700, letterSpacing: '1px' }}
      >
        Joseph Dusabumuremyi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ fontSize: '1.2rem', marginTop: '15px', color: '#a0aec0' }}
      >
        Data Analyst • Economics Graduate • IBM Certified
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        style={{ marginTop: '30px', display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap' }}
      >
        <button style={primaryButton}>Download CV</button>
        <button style={secondaryButton}>Contact Me</button>
      </motion.div>
    </header>
  );
}

const primaryButton = {
  padding: '12px 28px',
  borderRadius: '30px',
  border: 'none',
  background: '#38bdf8',
  color: '#0f172a',
  fontWeight: 600,
  cursor: 'pointer',
  boxShadow: '0 4px 15px rgba(56,189,248,0.3)',
  transition: '0.3s'
};

const secondaryButton = {
  padding: '12px 28px',
  borderRadius: '30px',
  border: '2px solid #38bdf8',
  background: 'transparent',
  color: '#38bdf8',
  fontWeight: 600,
  cursor: 'pointer',
  transition: '0.3s'
};
