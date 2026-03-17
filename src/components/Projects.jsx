import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../hooks/useLang';
import { projects } from '../data/portfolio';
import { SectionLabel } from './About';

function ProjectCard({ project, index, inView }) {
  const { lang } = useLang();
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.1 + index * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      data-hover
      style={{
        background: 'var(--bg2)', border: '1px solid var(--border)',
        borderRadius: '10px', overflow: 'hidden',
        cursor: 'none', transition: 'border-color 0.25s, box-shadow 0.25s',
        position: 'relative',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = project.color + '55';
        e.currentTarget.style.boxShadow = `0 0 30px ${project.color}11`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Top accent bar */}
      <div style={{ height: '2px', background: project.color, opacity: 0.6 }} />

      <div style={{ padding: '1.8rem 2rem' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div>
            <span style={{
              fontSize: '0.68rem', color: project.color,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              fontWeight: 700, display: 'block', marginBottom: '6px',
            }}>{project.course}</span>
            <h3 style={{
              fontFamily: 'var(--display)', fontWeight: 700,
              fontSize: '1.2rem', letterSpacing: '-0.02em',
              color: 'var(--text)',
            }}>
              {lang === 'en' ? project.title : project.titleFR}
            </h3>
          </div>
          <span style={{
            fontSize: '0.72rem', color: 'var(--text-muted)',
            background: 'var(--bg3)', borderRadius: '4px', padding: '4px 8px',
            whiteSpace: 'nowrap', flexShrink: 0,
          }}>{project.year}</span>
        </div>

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1rem' }}>
          {project.tags.map(tag => (
            <span key={tag} style={{
              fontSize: '0.68rem', padding: '3px 10px',
              background: project.color + '15',
              color: project.color,
              borderRadius: '3px', letterSpacing: '0.05em',
            }}>{tag}</span>
          ))}
        </div>

        {/* Description */}
        <p style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.7, marginBottom: '1.2rem' }}>
          {lang === 'en' ? project.description : project.descriptionFR}
        </p>

        {/* Expand toggle */}
        <button
          data-hover
          onClick={() => setExpanded(e => !e)}
          style={{
            background: 'none', border: 'none', cursor: 'none',
            color: project.color, fontSize: '0.78rem',
            fontFamily: 'var(--mono)', letterSpacing: '0.08em',
            padding: 0, display: 'flex', alignItems: 'center', gap: '6px',
          }}
        >
          <motion.span
            animate={{ rotate: expanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'inline-block', fontSize: '0.7rem' }}
          >▶</motion.span>
          {expanded
            ? (lang === 'en' ? 'Less details' : 'Moins de détails')
            : (lang === 'en' ? 'Key highlights' : 'Points clés')
          }
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: 'hidden' }}
            >
              <ul style={{
                marginTop: '1rem',
                borderTop: `1px solid ${project.color}22`,
                paddingTop: '1rem',
                listStyle: 'none',
                display: 'flex', flexDirection: 'column', gap: '6px',
              }}>
                {project.highlights.map((h, i) => (
                  <li key={i} style={{
                    fontSize: '0.82rem', color: 'var(--text)',
                    display: 'flex', alignItems: 'baseline', gap: '10px',
                  }}>
                    <span style={{ color: project.color, fontSize: '0.6rem' }}>◆</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { lang } = useLang();
  const [ref, inView] = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" ref={ref} style={{
      padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem)',
      maxWidth: '1200px', margin: '0 auto',
    }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
        style={{ marginBottom: '3.5rem' }}
      >
        <SectionLabel label={lang === 'en' ? '03 — Projects' : '03 — Projets'} />
        <h2 style={{
          fontFamily: 'var(--display)', fontWeight: 800,
          fontSize: 'clamp(2rem, 4vw, 2.8rem)',
          letterSpacing: '-0.03em', marginTop: '0.5rem',
        }}>
          {lang === 'en' ? 'Selected work' : 'Projets sélectionnés'}
        </h2>
      </motion.div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '1.5rem',
      }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i} inView={inView} />
        ))}
      </div>
    </section>
  );
}
