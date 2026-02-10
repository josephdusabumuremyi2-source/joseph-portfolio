import React from 'react';
import { motion } from 'framer-motion';

const skills = ['Excel','Python','SQL','Power BI','Statistics','Data Cleaning','R','Tableau'];

export default function Skills() {
  return (
    <section style={{ marginBottom: '80px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '25px', textAlign: 'center' }}>Skills</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '20px', justifyItems: 'center' }}>
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.4 }}
            style={{
              padding: '15px 20px',
              borderRadius: '25px',
              background: 'rgba(56,189,248,0.15)',
              fontWeight: 600,
              color: '#38bdf8',
              textAlign: 'center',
              minWidth: '120px'
            }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
