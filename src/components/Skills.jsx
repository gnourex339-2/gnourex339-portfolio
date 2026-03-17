import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLang } from '../hooks/useLang';
import { skills } from '../data/portfolio';
import { SectionLabel } from './About';

function SkillBar({ name, level, index, inView }) {
  return (
    <div style={{ marginBottom: '1.1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
        <span style={{ fontSize: '0.82rem', color: 'var(--text)' }}>{name}</span>
        <span style={{ fontSize: '0.72rem', color: 'var(--accent)', fontWeight: 700 }}>{level}%</span>
      </div>
      <div style={{
        height: '2px', background: 'var(--border)',
        borderRadius: '2px', overflow: 'hidden',
      }}>
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.1 + index * 0.06, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: '100%', borderRadius: '2px',
            background: 'linear-gradient(90deg, var(--accent), var(--blue))',
            boxShadow: '0 0 8px var(--accent-glow)',
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { lang } = useLang();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const stackIcons = [
    { name: 'React', icon: '⚛', color: '#61dafb' },
    { name: 'Vite', icon: '⚡', color: '#bd34fe' },
    { name: 'Bun', icon: '🍞', color: '#fbf0df' },
    { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
    { name: 'Java', icon: '☕', color: '#f89820' },
    { name: 'Git', icon: '⎇', color: '#f05032' },
    { name: 'Figma', icon: '◈', color: '#a259ff' },
    { name: 'Python', icon: '🐍', color: '#3776ab' },
  ];

  return (
    <section id="skills" ref={ref} style={{
      padding: 'clamp(5rem, 12vh, 9rem) clamp(1.5rem, 5vw, 4rem)',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--border)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <SectionLabel label={lang === 'en' ? '02 — Skills & Stack' : '02 — Compétences & Stack'} />

          <h2 style={{
            fontFamily: 'var(--display)', fontWeight: 800,
            fontSize: 'clamp(2rem, 4vw, 2.8rem)',
            letterSpacing: '-0.03em', marginTop: '0.5rem',
            marginBottom: '3.5rem',
          }}>
            {lang === 'en' ? 'Tools I work with' : 'Mes outils de travail'}
          </h2>
        </motion.div>

        {/* Stack pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15 }}
          style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '4rem' }}
        >
          {stackIcons.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.1 + i * 0.05 }}
              data-hover
              style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                background: 'var(--bg3)', border: '1px solid var(--border)',
                borderRadius: '6px', padding: '8px 16px',
                fontSize: '0.82rem', cursor: 'none',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = s.color; e.currentTarget.style.background = `${s.color}11`; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.background = 'var(--bg3)'; }}
            >
              <span style={{ fontSize: '1.1rem' }}>{s.icon}</span>
              <span style={{ color: 'var(--text)' }}>{s.name}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skill grids */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '2.5rem',
        }}>
          {skills.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + gi * 0.1 }}
            >
              <div style={{
                fontSize: '0.68rem', color: 'var(--accent)',
                letterSpacing: '0.18em', textTransform: 'uppercase',
                marginBottom: '1.2rem',
              }}>
                {group.category}
              </div>
              {group.items.map((skill, si) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} index={si} inView={inView} />
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
