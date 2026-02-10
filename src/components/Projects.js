import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Patients Related Analysis",
    description: "Exploratory and statistical analysis on healthcare datasets to uncover trends, outcomes, and efficiency opportunities.",
    tools: "R, Python, Excel"
  },
  {
    title: "Banking Data Analysis",
    description: "Customer behavior, risk indicators, and performance metrics analysis for banking operations.",
    tools: "SQL, Power BI, Python"
  }
];

export default function Projects() {
  return (
    <section style={{ marginBottom: '80px' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '25px', textAlign: 'center' }}>Flagship Projects</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 * index, duration: 0.5 }}
            style={{
              padding: '25px',
              borderRadius: '25px',
              background: 'rgba(56,189,248,0.05)',
              boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <h3 style={{ fontWeight: 700, fontSize: '1.25rem', marginBottom: '10px' }}>{project.title}</h3>
            <p style={{ color: '#cbd5e1', marginBottom: '10px' }}>{project.description}</p>
            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '15px' }}>Tools: {project.tools}</p>
            <button style={projectButton}>View Case</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const projectButton = {
  padding: '8px 18px',
  borderRadius: '20px',
  border: 'none',
  background: '#38bdf8',
  color: '#0f172a',
  fontWeight: 600,
  cursor: 'pointer',
  transition: '0.3s'
};
