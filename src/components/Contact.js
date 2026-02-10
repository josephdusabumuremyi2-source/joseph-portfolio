import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section style={{ textAlign: 'center', marginBottom: '80px' }}>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '15px' }}>
        Contact
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.5 }} style={{ color: '#a0aec0', marginBottom: '5px' }}>
        Let’s collaborate on data-driven solutions.
      </motion.p>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }} style={{ fontWeight: 600, marginBottom: '20px' }}>
        josephdusabumuremyi2@gmail.com
      </motion.p>
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        style={contactButton}
      >
        Email Me
      </motion.button>
    </section>
  );
}

const contactButton = {
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
